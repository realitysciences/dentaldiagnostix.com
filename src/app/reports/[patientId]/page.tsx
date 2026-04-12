import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { Report, Patient } from "@/types/database";
import GenerateReportButton from "./GenerateReportButton";

export default async function ReportPage({
  params,
}: {
  params: Promise<{ patientId: string }>;
}) {
  const { patientId } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: practice } = await supabase
    .from("dd_practices")
    .select("id, practice_name")
    .eq("user_id", user.id)
    .single();

  if (!practice) redirect("/dashboard");

  const { data: patient } = await supabase
    .from("dd_patients")
    .select("*")
    .eq("id", patientId)
    .eq("practice_id", practice.id)
    .single();

  if (!patient) return notFound();

  const { data: report } = await supabase
    .from("dd_reports")
    .select("*")
    .eq("patient_id", patientId)
    .order("created_at", { ascending: false })
    .limit(1)
    .single();

  if (!report) {
    const isComplete = patient.status === "complete";
    return (
      <main style={{ minHeight: "100vh", background: "#F7F5F0" }}>
        <ReportHeader practiceName={practice.practice_name} />
        <div
          style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px" }}
        >
          <h2 style={{ fontFamily: "Lora, Georgia, serif", fontSize: "22px", fontWeight: 400, color: "#1A2B3C", margin: "0 0 8px" }}>
            {patient.name}
          </h2>
          <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#4A5568", margin: "0 0 24px" }}>
            {isComplete
              ? "Intake complete. The report needs to be generated."
              : "The patient has not yet completed their intake."}
          </p>
          {isComplete && <GenerateReportButton patientId={patient.id} />}
          <div style={{ marginTop: "24px" }}>
            <Link
              href="/dashboard"
              style={{ color: "#4A5568", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", textDecoration: "none" }}
            >
              Back to dashboard
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return <ReportView patient={patient as Patient} report={report as Report} practiceName={practice.practice_name} />;
}

function ReportHeader({ practiceName }: { practiceName: string }) {
  return (
    <header
      style={{
        background: "#1A2B3C",
        padding: "16px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div>
        <p style={{ margin: 0, fontFamily: "DM Sans, Arial, sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "2px", color: "#0E6B5E" }}>
          DentalDiagnostix
        </p>
        <p style={{ margin: "2px 0 0", fontFamily: "Lora, Georgia, serif", fontSize: "15px", color: "#fff", fontWeight: 400 }}>
          Patient Behavioral Report
        </p>
      </div>
      <span style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#A0B0C0" }}>
        {practiceName}
      </span>
    </header>
  );
}

function SignalCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #E2DDD5",
        borderRadius: "10px",
        padding: "20px",
        borderTop: `3px solid ${color}`,
      }}
    >
      <p
        style={{
          margin: "0 0 6px",
          fontFamily: "DM Sans, Arial, sans-serif",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "1px",
          color: "#4A5568",
        }}
      >
        {label}
      </p>
      <p
        style={{
          margin: 0,
          fontFamily: "Lora, Georgia, serif",
          fontSize: "17px",
          color,
        }}
      >
        {value}
      </p>
    </div>
  );
}

function InfoBlock({
  title,
  body,
  bg,
  border,
}: {
  title: string;
  body: string;
  bg: string;
  border: string;
}) {
  return (
    <div
      style={{
        background: bg,
        borderLeft: `4px solid ${border}`,
        borderRadius: "4px",
        padding: "20px 24px",
        marginBottom: "16px",
      }}
    >
      <p
        style={{
          margin: "0 0 8px",
          fontFamily: "DM Sans, Arial, sans-serif",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "1px",
          color: border,
          fontWeight: 500,
        }}
      >
        {title}
      </p>
      <p
        style={{
          margin: 0,
          fontFamily: "Lora, Georgia, serif",
          fontSize: "15px",
          lineHeight: 1.75,
          color: "#1A2B3C",
        }}
      >
        {body}
      </p>
    </div>
  );
}

function ReportView({
  patient,
  report,
  practiceName,
}: {
  patient: Patient;
  report: Report;
  practiceName: string;
}) {
  const riskColor = (r: string) => {
    if (r === "High") return "#9B3B3B";
    if (r === "Moderate" || r === "Elevated") return "#B07D2E";
    return "#0E6B5E";
  };

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <main style={{ minHeight: "100vh", background: "#F7F5F0" }}>
      <ReportHeader practiceName={practiceName} />

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "40px 24px" }}>
        {/* Patient meta */}
        <div style={{ marginBottom: "32px" }}>
          <h1
            style={{
              fontFamily: "Lora, Georgia, serif",
              fontSize: "28px",
              fontWeight: 400,
              color: "#1A2B3C",
              margin: "0 0 6px",
            }}
          >
            {patient.name}
          </h1>
          <p
            style={{
              fontFamily: "DM Sans, Arial, sans-serif",
              fontSize: "13px",
              color: "#4A5568",
              margin: 0,
            }}
          >
            Intake completed {formatDate(report.created_at)} &middot; {patient.email}
          </p>
        </div>

        {/* Signal cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
            gap: "12px",
            marginBottom: "28px",
          }}
        >
          <SignalCard label="Avoidance type" value={report.avoidance_type} color="#0E6B5E" />
          <SignalCard
            label="Compliance risk"
            value={report.compliance_risk}
            color={riskColor(report.compliance_risk)}
          />
          <SignalCard
            label="Legal risk"
            value={report.legal_risk}
            color={riskColor(report.legal_risk)}
          />
          <SignalCard
            label="Hygiene relationship"
            value={report.hygiene_relationship}
            color="#0E6B5E"
          />
        </div>

        {/* Narrative blocks */}
        <InfoBlock
          title="Terrain summary"
          body={report.terrain_summary}
          bg="#E4F2F0"
          border="#0E6B5E"
        />
        <InfoBlock
          title="Compliance signal"
          body={report.compliance_signal}
          bg="#FDF4E3"
          border="#B07D2E"
        />
        {report.legal_flag && report.legal_risk !== "Low" && (
          <InfoBlock
            title="Legal flag"
            body={report.legal_flag}
            bg="#FBF0EF"
            border="#9B3B3B"
          />
        )}
        <InfoBlock
          title="Dentist history"
          body={report.dentist_history}
          bg="#E4F2F0"
          border="#0E6B5E"
        />

        {/* Dos and Donts */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginTop: "8px",
          }}
        >
          <div
            style={{
              background: "#EAF5F0",
              borderRadius: "8px",
              padding: "20px 24px",
            }}
          >
            <p
              style={{
                margin: "0 0 14px",
                fontFamily: "DM Sans, Arial, sans-serif",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "#0E6B5E",
                fontWeight: 500,
              }}
            >
              Do
            </p>
            <ul style={{ margin: 0, padding: "0 0 0 16px" }}>
              {(report.dos || []).map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "DM Sans, Arial, sans-serif",
                    fontSize: "14px",
                    color: "#1A2B3C",
                    lineHeight: 1.6,
                    marginBottom: "8px",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              background: "#FBF0EF",
              borderRadius: "8px",
              padding: "20px 24px",
            }}
          >
            <p
              style={{
                margin: "0 0 14px",
                fontFamily: "DM Sans, Arial, sans-serif",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "1px",
                color: "#9B3B3B",
                fontWeight: 500,
              }}
            >
              Don&apos;t
            </p>
            <ul style={{ margin: 0, padding: "0 0 0 16px" }}>
              {(report.donts || []).map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "DM Sans, Arial, sans-serif",
                    fontSize: "14px",
                    color: "#1A2B3C",
                    lineHeight: 1.6,
                    marginBottom: "8px",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginTop: "32px" }}>
          <Link
            href="/dashboard"
            style={{
              fontFamily: "DM Sans, Arial, sans-serif",
              fontSize: "13px",
              color: "#4A5568",
              textDecoration: "none",
            }}
          >
            Back to dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
