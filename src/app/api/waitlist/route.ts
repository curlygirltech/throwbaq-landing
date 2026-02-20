import { NextResponse } from "next/server";
import { appendToSheet } from "@/lib/google-sheets";

export async function POST(request: Request) {
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
    await appendToSheet([timestamp, email, zip, resolvedCity, role], role);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
