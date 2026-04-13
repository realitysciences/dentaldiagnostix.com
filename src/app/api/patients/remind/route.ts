import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { patientId } = await request.json().catch(() => ({}));
    if (!patientId) return NextResponse.json({ error: "patientId required" }, { status: 400 });

    const { data: patient } = await supabase.from("dd_patients").select("*").eq("id", patientId).single();
    if (!patient) return NextResponse.json({ error: "Patient not found" }, { status: 404 });

    const { data: practice } = await supabase.from("dd_practices").select("*").eq("id", patient.practice_id).single();
    if (!practice) return NextResponse.json({ error: "Practice not found" }, { status: 404 });

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://dentaldiagnostix.com";
    const intakeLink = `${appUrl}/intake/${patient.token}`;

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "davidbensondds@gmail.com",
      subject: `Reminder: ${patient.name} hasn't completed their intake yet`,
      html: `
        <div style="font-family:DM Sans,Arial,sans-serif;max-width:520px;">
          <div style="background:#1A2B3C;padding:16px 24px;">
            <span style="font-family:Lora,Georgia,serif;font-size:16px;color:#fff;">DentalDiagnostix</span>
          </div>
          <div style="background:#fff;padding:28px 24px;border:1px solid #E2DDD5;border-top:none;">
            <p style="margin:0 0 6px;font-size:15px;color:#1A2B3C;">Hi ${patient.name},</p>
            <p style="margin:0 0 20px;font-size:14px;color:#4A5568;line-height:1.7;">
              ${practice.dentist_name} at ${practice.practice_name} is looking forward to your appointment and wanted to make sure you had a chance to complete your pre-visit check-in. It only takes a few minutes.
            </p>
            <a href="${intakeLink}" style="display:inline-block;padding:13px 28px;background:#0E6B5E;color:#fff;text-decoration:none;border-radius:8px;font-size:15px;font-weight:500;">Complete your intake</a>
            <p style="margin:20px 0 0;font-size:12px;color:#A0B0C0;">Or copy this link: ${intakeLink}</p>
          </div>
        </div>`,
    });

    if (error) return NextResponse.json({ error: "Failed to send reminder" }, { status: 500 });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Remind error:", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
