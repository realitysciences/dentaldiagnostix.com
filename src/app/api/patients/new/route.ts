import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, practiceId, practiceName, dentistName } =
    await request.json();

  if (!name || !email || !practiceId) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const { data: patient, error } = await supabase
    .from("dd_patients")
    .insert({ name, email, practice_id: practiceId, status: "pending" })
    .select()
    .single();

  if (error) {
    console.error("Patient insert error:", error);
    return NextResponse.json(
      { error: "Failed to create patient" },
      { status: 500 }
    );
  }

  const appUrl =
    process.env.NEXT_PUBLIC_APP_URL || "https://dentaldiagnostix.com";
  const intakeLink = `${appUrl}/intake/${patient.token}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: `Your pre-appointment intake from ${practiceName}`,
    text: `Hi ${name},

${dentistName} at ${practiceName} has sent you a short pre-appointment conversation to complete before your visit. It takes about 10-15 minutes and there are no right or wrong answers.

Complete it here: ${intakeLink}`,
    html: `<!DOCTYPE html>
<html>
<body style="margin:0;padding:40px 24px;background:#F7F5F0;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
  <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;padding:40px;border:1px solid #E2DDD5;">
    <tr><td>
      <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:2px;color:#0E6B5E;">DentalDiagnostix</p>
      <h1 style="margin:0 0 24px;font-family:Georgia,serif;font-size:22px;font-weight:400;color:#1A2B3C;">Your pre-appointment intake</h1>
      <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#4A5568;">Hi ${name},</p>
      <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#4A5568;">${dentistName} at ${practiceName} has sent you a short pre-appointment conversation to complete before your visit. It takes about 10-15 minutes and there are no right or wrong answers.</p>
      <a href="${intakeLink}" style="display:inline-block;padding:13px 28px;background:#0E6B5E;color:#ffffff;text-decoration:none;border-radius:8px;font-size:15px;font-weight:500;">Complete your intake</a>
      <p style="margin:24px 0 0;font-size:12px;color:#9AA8B6;">Or copy this link: ${intakeLink}</p>
    </td></tr>
  </table>
  </td></tr></table>
</body>
</html>`,
  });

  return NextResponse.json({ success: true, patientId: patient.id });
}
