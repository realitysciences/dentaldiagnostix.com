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

    if (!patientId) {
      return NextResponse.json({ error: "patientId is required" }, { status: 400 });
    }

    const { data: patient } = await supabase
      .from("dd_patients")
      .select("id, name, practice_id")
      .eq("id", patientId)
      .single();

    if (!patient) {
      return NextResponse.json({ error: "Patient not found" }, { status: 404 });
    }

    const { data: practice } = await supabase
      .from("dd_practices")
      .select("practice_name, dentist_name")
      .eq("id", patient.practice_id)
      .single();

    if (!practice) {
      return NextResponse.json({ error: "Practice not found" }, { status: 404 });
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://dentaldiagnostix.com";
    const base = `${appUrl}/outcomes/record?patientId=${patientId}`;

    const yesFullUrl = `${base}&showedUp=true&treatmentAccepted=yes`;
    const yesPartialUrl = `${base}&showedUp=true&treatmentAccepted=partial`;
    const yesDeclinedUrl = `${base}&showedUp=true&treatmentAccepted=no`;
    const noShowUrl = `${base}&showedUp=false&treatmentAccepted=no`;

    const btn = (label: string, href: string, bg: string, textColor = "#ffffff") =>
      `<a href="${href}" style="display:inline-block;padding:14px 22px;background:${bg};color:${textColor};font-family:DM Sans,Arial,sans-serif;font-size:14px;font-weight:500;text-decoration:none;border-radius:8px;margin:4px 6px 4px 0;">${label}</a>`;

    const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F7F5F0;font-family:DM Sans,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
    <tr>
      <td style="background:#1A2B3C;padding:20px 32px;">
        <span style="font-family:Lora,Georgia,serif;font-size:18px;color:#ffffff;letter-spacing:0.3px;">DentalDiagnostix</span>
      </td>
    </tr>
    <tr>
      <td style="padding:36px 32px 0;background:#ffffff;">
        <p style="margin:0 0 8px;font-size:15px;color:#1A2B3C;">Hi ${practice.dentist_name},</p>
        <p style="margin:0 0 28px;font-size:14px;color:#4A5568;line-height:1.7;">It takes 30 seconds to log what happened with <strong>${patient.name}</strong>'s appointment. This data helps measure your ROI and improve future reports.</p>

        <p style="margin:0 0 10px;font-size:12px;font-weight:500;text-transform:uppercase;letter-spacing:1px;color:#4A5568;">Did ${patient.name} show up?</p>
        <div style="margin-bottom:28px;">
          ${btn("Yes, showed up", yesFullUrl, "#0E6B5E")}
          ${btn("No-show or cancelled", noShowUrl, "#4A5568")}
        </div>

        <p style="margin:0 0 10px;font-size:12px;font-weight:500;text-transform:uppercase;letter-spacing:1px;color:#4A5568;">Did they accept treatment?</p>
        <div style="margin-bottom:36px;">
          ${btn("Full acceptance", yesFullUrl, "#1A6B3C")}
          ${btn("Partial acceptance", yesPartialUrl, "#B07D2E")}
          ${btn("Declined", yesDeclinedUrl, "#ffffff", "#9B3B3B")}
        </div>

        <p style="margin:0 0 28px;font-size:13px;color:#4A5568;line-height:1.6;">
          Need to add treatment value or notes? <a href="${base}" style="color:#0E6B5E;text-decoration:none;font-weight:500;">Open full form</a>
        </p>
      </td>
    </tr>
    <tr>
      <td style="padding:20px 32px;background:#F7F5F0;border-top:1px solid #E2DDD5;">
        <p style="margin:0;font-size:11px;color:#4A5568;">DentalDiagnostix &middot; Spheronaut LLC &middot; Behavioral intake only. Not a clinical tool.</p>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const { error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "davidbensondds@gmail.com",
      subject: `Quick follow-up: ${patient.name}'s appointment`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Unhandled error in /api/outcomes/send-prompt:", err);
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
