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

    // Validate zip (optional but must be 5 digits if provided)
    if (zip && !/^\d{5}$/.test(zip)) {
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

    const timestamp = new Date().toISOString();
    await appendToSheet([timestamp, email, zip || "", city || "", role]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
