import type { Report, Patient, Practice } from "@/types/database";

export function buildReportEmail(
  report: Report,
  patient: Patient,
  practice: Practice,
  appUrl: string
): string {
  const riskColor = (risk: string) => {
    if (risk === "High") return "#9B3B3B";
    if (risk === "Moderate" || risk === "Elevated") return "#B07D2E";
    return "#0E6B5E";
  };

  const pillHtml = (label: string, value: string, color: string) => `
    <span style="display:inline-block;padding:4px 12px;border-radius:20px;background:${color}22;color:${color};font-family:DM Sans,Arial,sans-serif;font-size:13px;font-weight:500;margin:4px 6px 4px 0;border:1px solid ${color}44;">${label}: ${value}</span>
  `;

  const dosHtml = (report.dos || [])
    .map(
      (d) =>
        `<li style="padding:6px 0;color:#1A2B3C;font-family:Arial,sans-serif;font-size:14px;">${d}</li>`
    )
    .join("");

  const dontsHtml = (report.donts || [])
    .map(
      (d) =>
        `<li style="padding:6px 0;color:#1A2B3C;font-family:Arial,sans-serif;font-size:14px;">${d}</li>`
    )
    .join("");

  const legalSection =
    report.legal_flag && report.legal_risk !== "Low"
      ? `
    <div style="margin:20px 0;padding:20px;background:#FBF0EF;border-left:4px solid #9B3B3B;border-radius:4px;">
      <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:13px;text-transform:uppercase;letter-spacing:1px;color:#9B3B3B;font-weight:500;">Legal Flag</p>
      <p style="margin:0;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#1A2B3C;">${report.legal_flag}</p>
    </div>
  `
      : "";

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
<body style="margin:0;padding:0;background:#F7F5F0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F7F5F0;">
    <tr><td align="center" style="padding:40px 20px;">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr><td style="background:#1A2B3C;padding:24px 32px;">
          <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:2px;color:#0E6B5E;">DentalDiagnostix</p>
          <h1 style="margin:8px 0 0;font-family:Georgia,serif;font-size:22px;font-weight:400;color:#ffffff;">Patient Behavioral Report</h1>
        </td></tr>

        <!-- Patient info -->
        <tr><td style="padding:24px 32px 16px;border-bottom:1px solid #E2DDD5;">
          <p style="margin:0;font-family:Arial,sans-serif;font-size:18px;font-weight:500;color:#1A2B3C;">${patient.name}</p>
          <p style="margin:4px 0 0;font-family:Arial,sans-serif;font-size:13px;color:#4A5568;">Intake completed, report ready for review</p>
        </td></tr>

        <!-- Signal pills -->
        <tr><td style="padding:20px 32px;">
          <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#4A5568;">Behavioral Signals</p>
          ${pillHtml("Avoidance", report.avoidance_type, "#0E6B5E")}
          ${pillHtml("Compliance Risk", report.compliance_risk, riskColor(report.compliance_risk))}
          ${pillHtml("Legal Risk", report.legal_risk, riskColor(report.legal_risk))}
          ${pillHtml("Hygiene", report.hygiene_relationship, "#0E6B5E")}
        </td></tr>

        <!-- Terrain summary -->
        <tr><td style="padding:8px 32px 0;">
          <div style="padding:20px;background:#E4F2F0;border-left:4px solid #0E6B5E;border-radius:4px;">
            <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:13px;text-transform:uppercase;letter-spacing:1px;color:#0E6B5E;font-weight:500;">Terrain Summary</p>
            <p style="margin:0;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#1A2B3C;">${report.terrain_summary}</p>
          </div>
        </td></tr>

        <!-- Compliance signal -->
        <tr><td style="padding:16px 32px 0;">
          <div style="padding:20px;background:#FDF4E3;border-left:4px solid #B07D2E;border-radius:4px;">
            <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:13px;text-transform:uppercase;letter-spacing:1px;color:#B07D2E;font-weight:500;">Compliance Signal</p>
            <p style="margin:0;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#1A2B3C;">${report.compliance_signal}</p>
          </div>
        </td></tr>

        ${legalSection}

        <!-- Dentist history -->
        <tr><td style="padding:16px 32px 0;">
          <div style="padding:20px;background:#E4F2F0;border-left:4px solid #0E6B5E;border-radius:4px;">
            <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:13px;text-transform:uppercase;letter-spacing:1px;color:#0E6B5E;font-weight:500;">Dentist History</p>
            <p style="margin:0;font-family:Georgia,serif;font-size:15px;line-height:1.7;color:#1A2B3C;">${report.dentist_history}</p>
          </div>
        </td></tr>

        <!-- Dos and Donts -->
        <tr><td style="padding:16px 32px 0;">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td width="48%" valign="top" style="background:#EAF5F0;border-radius:4px;padding:16px;">
                <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#0E6B5E;font-weight:500;">Do</p>
                <ul style="margin:0;padding-left:16px;">${dosHtml}</ul>
              </td>
              <td width="4%"></td>
              <td width="48%" valign="top" style="background:#FBF0EF;border-radius:4px;padding:16px;">
                <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#9B3B3B;font-weight:500;">Don't</p>
                <ul style="margin:0;padding-left:16px;">${dontsHtml}</ul>
              </td>
            </tr>
          </table>
        </td></tr>

        <!-- Footer -->
        <tr><td style="padding:24px 32px 32px;border-top:1px solid #E2DDD5;margin-top:24px;">
          <a href="${appUrl}/reports/${patient.id}" style="display:inline-block;padding:12px 24px;background:#0E6B5E;color:#ffffff;font-family:Arial,sans-serif;font-size:14px;text-decoration:none;border-radius:6px;">View Full Report</a>
          <p style="margin:16px 0 0;font-family:Arial,sans-serif;font-size:12px;color:#4A5568;">DentalDiagnostix, reports@dentaldiagnostix.com</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
