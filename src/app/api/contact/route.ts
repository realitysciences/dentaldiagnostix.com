import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, practiceName, email, message } = await request.json().catch(() => ({}));
    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
    }

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "davidbensondds@gmail.com",
      subject: `DentalDiagnostix access request: ${name}`,
      html: `
        <div style="font-family:DM Sans,Arial,sans-serif;max-width:500px;">
          <h2 style="font-family:Lora,Georgia,serif;font-weight:400;color:#1A2B3C;">New access request</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#4A5568;font-size:13px;width:130px;">Name</td><td style="padding:8px 0;font-size:14px;color:#1A2B3C;font-weight:500;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#4A5568;font-size:13px;">Practice</td><td style="padding:8px 0;font-size:14px;color:#1A2B3C;">${practiceName || "—"}</td></tr>
            <tr><td style="padding:8px 0;color:#4A5568;font-size:13px;">Email</td><td style="padding:8px 0;font-size:14px;color:#1A2B3C;">${email}</td></tr>
            <tr><td style="padding:8px 0;color:#4A5568;font-size:13px;vertical-align:top;">Message</td><td style="padding:8px 0;font-size:14px;color:#1A2B3C;">${message || "—"}</td></tr>
          </table>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
