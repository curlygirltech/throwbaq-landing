import { NextResponse } from "next/server";
import { appendToSheet } from "@/lib/google-sheets";

// --- Rate limiter (in-memory, per-IP) ---
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5;
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Periodically prune stale entries (every 100 checks)
  if (rateLimitMap.size > 100) {
    for (const [key, entry] of rateLimitMap) {
      if (now - entry.timestamp > RATE_LIMIT_WINDOW_MS) {
        rateLimitMap.delete(key);
      }
    }
  }

  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.timestamp > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  entry.count++;
  if (entry.count > RATE_LIMIT_MAX) {
    return true;
  }
  return false;
}

// --- Input sanitization (prevent spreadsheet formula injection) ---
function sanitize(value: string): string {
  if (/^[=+\-@\t\r]/.test(value)) {
    return "'" + value;
  }
  return value;
}

export async function POST(request: Request) {
  // Rate limit by IP
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0].trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again in a minute." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const { email, zip, city, role } = body;

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // Validate zip (required, must be 5 digits)
    if (!zip || !/^\d{5}$/.test(zip)) {
      return NextResponse.json(
        { error: "Please enter a valid 5-digit zip code." },
        { status: 400 }
      );
    }

    // Validate role
    if (!role || !["shopper", "runner"].includes(role)) {
      return NextResponse.json(
        { error: "Please select a valid role." },
        { status: 400 }
      );
    }

    // Auto-lookup city from zip if not provided
    let resolvedCity = city || "";
    if (zip && !resolvedCity) {
      try {
        const geoRes = await fetch(`https://api.zippopotam.us/us/${zip}`);
        if (geoRes.ok) {
          const geoData = await geoRes.json();
          resolvedCity = geoData.places?.[0]?.["place name"] || "";
        }
      } catch {
        // Non-critical — just leave city blank
      }
    }

    const timestamp = new Date().toLocaleDateString("en-US");
    await appendToSheet(
      [timestamp, sanitize(email), sanitize(zip), sanitize(resolvedCity), sanitize(role)],
      role
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
