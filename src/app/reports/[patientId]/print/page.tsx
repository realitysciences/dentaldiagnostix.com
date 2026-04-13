import { redirect, notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Report, Patient } from "@/types/database";
import PrintTrigger from "./PrintTrigger";

export default async function PrintReportPage({ params }: { params: Promise<{ patientId: string }> }) {
  const { patientId } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: practice } = await supabase.from("dd_practices").select("*").eq("user_id", user.id).single();
  if (!practice) redirect("/dashboard");

  const { data: patient } = await supabase.from("dd_patients").select("*").eq("id", patientId).eq("practice_id", practice.id).single();
  if (!patient) return notFound();

  const { data: report } = await supabase.from("dd_reports").select("*").eq("patient_id", patientId).order("created_at", { ascending: false }).limit(1).single();
  if (!report) redirect(`/reports/${patientId}`);

  const formatDate = (iso: string) => new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const riskColor = (r: string) => r === "High" ? "#9B3B3B" : r === "Moderate" || r === "Elevated" ? "#B07D2E" : "#0E6B5E";

  const p = patient as Patient;
  const rep = report as Report;

  return (
    <>
      <PrintTrigger />
      <div style={{ fontFamily: "Georgia, serif", maxWidth: 740, margin: "0 auto", padding: "40px 48px", color: "#1A2B3C", background: "#fff" }}>
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "2px solid #1A2B3C", paddingBottom: "16px", marginBottom: "24px" }}>
          <div>
            <p style={{ margin: "0 0 2px", fontFamily: "Arial, sans-serif", fontSize: "10px", textTransform: "uppercase", letterSpacing: "2px", color: "#0E6B5E" }}>DentalDiagnostix</p>
            <p style={{ margin: 0, fontSize: "20px", fontWeight: 400 }}>Patient Behavioral Report</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <p style={{ margin: "0 0 2px", fontFamily: "Arial, sans-serif", fontSize: "12px", color: "#4A5568" }}>{practice.practice_name}</p>
            <p style={{ margin: 0, fontFamily: "Arial, sans-serif", fontSize: "11px", color: "#4A5568" }}>Generated {formatDate(rep.created_at)}</p>
          </div>
        </div>

        {/* Patient */}
        <div style={{ marginBottom: "24px" }}>
          <h1 style={{ margin: "0 0 4px", fontSize: "26px", fontWeight: 400 }}>{p.name}</h1>
          <p style={{ margin: 0, fontFamily: "Arial, sans-serif", fontSize: "12px", color: "#4A5568" }}>{p.email}</p>
        </div>

        {/* Signal grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "12px", marginBottom: "24px" }}>
          {[
            { label: "Avoidance type", value: rep.avoidance_type, color: "#0E6B5E" },
            { label: "Compliance risk", value: rep.compliance_risk, color: riskColor(rep.compliance_risk) },
            { label: "Legal risk", value: rep.legal_risk, color: riskColor(rep.legal_risk) },
            { label: "Hygiene relationship", value: rep.hygiene_relationship, color: "#0E6B5E" },
          ].map(s => (
            <div key={s.label} style={{ border: `1px solid #E2DDD5`, borderTop: `3px solid ${s.color}`, padding: "12px", borderRadius: "4px" }}>
              <p style={{ margin: "0 0 4px", fontFamily: "Arial, sans-serif", fontSize: "9px", textTransform: "uppercase", letterSpacing: "1px", color: "#4A5568" }}>{s.label}</p>
              <p style={{ margin: 0, fontSize: "14px", color: s.color }}>{s.value}</p>
            </div>
          ))}
        </div>

        {/* Narrative blocks */}
        {[
          { title: "Terrain summary", body: rep.terrain_summary, border: "#0E6B5E", bg: "#F0FAF8" },
          { title: "Compliance signal", body: rep.compliance_signal, border: "#B07D2E", bg: "#FDF9F0" },
          ...(rep.legal_flag && rep.legal_risk !== "Low" ? [{ title: "Legal flag", body: rep.legal_flag, border: "#9B3B3B", bg: "#FDF4F3" }] : []),
          { title: "Dentist history", body: rep.dentist_history, border: "#0E6B5E", bg: "#F0FAF8" },
        ].map(b => (
          <div key={b.title} style={{ borderLeft: `4px solid ${b.border}`, background: b.bg, padding: "14px 18px", marginBottom: "14px", borderRadius: "2px" }}>
            <p style={{ margin: "0 0 6px", fontFamily: "Arial, sans-serif", fontSize: "9px", textTransform: "uppercase", letterSpacing: "1px", color: b.border, fontWeight: 700 }}>{b.title}</p>
            <p style={{ margin: 0, fontSize: "13px", lineHeight: 1.75 }}>{b.body}</p>
          </div>
        ))}

        {/* Dos and Don'ts */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "8px" }}>
          <div style={{ background: "#F0FAF8", padding: "16px 18px", borderRadius: "4px" }}>
            <p style={{ margin: "0 0 10px", fontFamily: "Arial, sans-serif", fontSize: "9px", textTransform: "uppercase", letterSpacing: "1px", color: "#0E6B5E", fontWeight: 700 }}>Do</p>
            <ul style={{ margin: 0, paddingLeft: "16px" }}>
              {(rep.dos || []).map((item, i) => <li key={i} style={{ fontFamily: "Arial, sans-serif", fontSize: "12px", lineHeight: 1.65, marginBottom: "6px" }}>{item}</li>)}
            </ul>
          </div>
          <div style={{ background: "#FDF4F3", padding: "16px 18px", borderRadius: "4px" }}>
            <p style={{ margin: "0 0 10px", fontFamily: "Arial, sans-serif", fontSize: "9px", textTransform: "uppercase", letterSpacing: "1px", color: "#9B3B3B", fontWeight: 700 }}>Don't</p>
            <ul style={{ margin: 0, paddingLeft: "16px" }}>
              {(rep.donts || []).map((item, i) => <li key={i} style={{ fontFamily: "Arial, sans-serif", fontSize: "12px", lineHeight: 1.65, marginBottom: "6px" }}>{item}</li>)}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ marginTop: "32px", borderTop: "1px solid #E2DDD5", paddingTop: "16px" }}>
          <p style={{ margin: 0, fontFamily: "Arial, sans-serif", fontSize: "10px", color: "#4A5568", lineHeight: 1.6 }}>
            This report reflects patient self-reported behavioral patterns and is intended solely to support practitioner-patient communication. It does not constitute a clinical diagnosis, medical advice, or a substitute for professional clinical judgment.
          </p>
        </div>
      </div>
    </>
  );
}
