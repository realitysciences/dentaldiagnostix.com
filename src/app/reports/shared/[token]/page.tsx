import { notFound } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import type { Report, Patient } from "@/types/database";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export default async function SharedReportPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;

  const { data: report } = await supabase
    .from("dd_reports")
    .select("*")
    .eq("share_token", token)
    .single();

  if (!report) return notFound();

  const { data: patient } = await supabase.from("dd_patients").select("*").eq("id", report.patient_id).single();
  if (!patient) return notFound();

  const { data: practice } = await supabase.from("dd_practices").select("practice_name").eq("id", report.practice_id).single();

  const rep = report as Report;
  const pat = patient as Patient;

  const riskColor = (r: string) => r === "High" ? "#9B3B3B" : r === "Moderate" || r === "Elevated" ? "#B07D2E" : "#0E6B5E";
  const formatDate = (iso: string) => new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });

  return (
    <main style={{ minHeight: "100vh", background: "#F7F5F0" }}>
      <header style={{ background: "#1A2B3C", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <p style={{ margin: 0, fontFamily: "DM Sans, Arial, sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "2px", color: "#0E6B5E" }}>DentalDiagnostix</p>
          <p style={{ margin: "2px 0 0", fontFamily: "Lora, Georgia, serif", fontSize: "15px", color: "#fff", fontWeight: 400 }}>Patient Behavioral Report</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#A0B0C0" }}>{practice?.practice_name}</span>
          <span style={{ background: "#2A3B4C", color: "#A0B0C0", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "11px", padding: "3px 10px", borderRadius: "20px" }}>Read-only</span>
        </div>
      </header>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px" }}>
        <div style={{ marginBottom: "32px" }}>
          <h1 style={{ fontFamily: "Lora, Georgia, serif", fontSize: "28px", fontWeight: 400, color: "#1A2B3C", margin: "0 0 6px" }}>{pat.name}</h1>
          <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#4A5568", margin: 0 }}>
            Intake completed {formatDate(rep.created_at)} &middot; {pat.email}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: "12px", marginBottom: "28px" }}>
          {[
            { label: "Avoidance type", value: rep.avoidance_type, color: "#0E6B5E" },
            { label: "Compliance risk", value: rep.compliance_risk, color: riskColor(rep.compliance_risk) },
            { label: "Legal risk", value: rep.legal_risk, color: riskColor(rep.legal_risk) },
            { label: "Hygiene relationship", value: rep.hygiene_relationship, color: "#0E6B5E" },
          ].map(s => (
            <div key={s.label} style={{ background: "#fff", border: "1px solid #E2DDD5", borderRadius: "10px", padding: "20px", borderTop: `3px solid ${s.color}` }}>
              <p style={{ margin: "0 0 6px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "#4A5568" }}>{s.label}</p>
              <p style={{ margin: 0, fontFamily: "Lora, Georgia, serif", fontSize: "17px", color: s.color }}>{s.value}</p>
            </div>
          ))}
        </div>

        {[
          { title: "Terrain summary", body: rep.terrain_summary, bg: "#E4F2F0", border: "#0E6B5E" },
          { title: "Compliance signal", body: rep.compliance_signal, bg: "#FDF4E3", border: "#B07D2E" },
          ...(rep.legal_flag && rep.legal_risk !== "Low" ? [{ title: "Legal flag", body: rep.legal_flag, bg: "#FBF0EF", border: "#9B3B3B" }] : []),
          { title: "Dentist history", body: rep.dentist_history, bg: "#E4F2F0", border: "#0E6B5E" },
        ].map(b => (
          <div key={b.title} style={{ background: b.bg, borderLeft: `4px solid ${b.border}`, borderRadius: "4px", padding: "20px 24px", marginBottom: "16px" }}>
            <p style={{ margin: "0 0 8px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: b.border, fontWeight: 500 }}>{b.title}</p>
            <p style={{ margin: 0, fontFamily: "Lora, Georgia, serif", fontSize: "15px", lineHeight: 1.75, color: "#1A2B3C" }}>{b.body}</p>
          </div>
        ))}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "8px" }}>
          <div style={{ background: "#EAF5F0", borderRadius: "8px", padding: "20px 24px" }}>
            <p style={{ margin: "0 0 14px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#0E6B5E", fontWeight: 500 }}>Do</p>
            <ul style={{ margin: 0, padding: "0 0 0 16px" }}>
              {(rep.dos || []).map((item, i) => <li key={i} style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#1A2B3C", lineHeight: 1.6, marginBottom: "8px" }}>{item}</li>)}
            </ul>
          </div>
          <div style={{ background: "#FBF0EF", borderRadius: "8px", padding: "20px 24px" }}>
            <p style={{ margin: "0 0 14px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#9B3B3B", fontWeight: 500 }}>Don&apos;t</p>
            <ul style={{ margin: 0, padding: "0 0 0 16px" }}>
              {(rep.donts || []).map((item, i) => <li key={i} style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#1A2B3C", lineHeight: 1.6, marginBottom: "8px" }}>{item}</li>)}
            </ul>
          </div>
        </div>

        <div style={{ marginTop: "32px", borderTop: "1px solid #E2DDD5", paddingTop: "20px" }}>
          <p style={{ margin: 0, fontFamily: "DM Sans, Arial, sans-serif", fontSize: "11px", color: "#A0B0C0", lineHeight: 1.6 }}>
            This report reflects patient self-reported behavioral patterns and is intended solely to support practitioner-patient communication. It does not constitute a clinical diagnosis, medical advice, or a substitute for professional clinical judgment.
          </p>
        </div>
      </div>
    </main>
  );
}
