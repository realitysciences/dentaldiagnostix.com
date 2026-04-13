"use client";

import { useState } from "react";

type DocData = {
  summary: string;
  documentation_checklist: string[];
  verbal_scripts: string[];
  red_flags: string[];
  template_note: string;
};

export default function LegalDocPanel({
  patientId,
  reportId,
  riskLevel,
}: {
  patientId: string;
  reportId: string;
  riskLevel: string;
}) {
  const [loading, setLoading] = useState(false);
  const [doc, setDoc] = useState<DocData | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function generate() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/legal/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ patientId, reportId }),
      });
      let data: { doc?: DocData; error?: string } = {};
      try { data = await res.json(); } catch { /* empty */ }
      if (!res.ok || !data.doc) {
        setError(data.error || `Failed to generate (${res.status})`);
      } else {
        setDoc(data.doc);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const riskColor = riskLevel === "High" ? "#9B3B3B" : "#B07D2E";
  const riskBg = riskLevel === "High" ? "#FBF0EF" : "#FDF4E3";

  if (!doc) {
    return (
      <div style={{ background: riskBg, border: `1px solid ${riskColor}`, borderRadius: "10px", padding: "24px 28px", marginBottom: "20px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
          <div>
            <p style={{ margin: "0 0 4px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: riskColor, fontWeight: 500 }}>
              {riskLevel} legal risk detected
            </p>
            <p style={{ margin: 0, fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#1A2B3C", lineHeight: 1.6 }}>
              Generate a legal documentation guide specific to this patient — what to document, what to say, and a pre-filled clinical note template.
            </p>
          </div>
          <button
            onClick={generate}
            disabled={loading}
            style={{
              padding: "10px 20px", background: riskColor, color: "#fff", border: "none",
              borderRadius: "7px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px",
              fontWeight: 500, cursor: loading ? "not-allowed" : "pointer", whiteSpace: "nowrap" as const,
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Generating…" : "Generate legal documentation"}
          </button>
        </div>
        {loading && <p style={{ margin: "12px 0 0", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", color: "#4A5568" }}>This may take up to 20 seconds.</p>}
        {error && <p style={{ margin: "12px 0 0", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#9B3B3B" }}>{error}</p>}
      </div>
    );
  }

  return (
    <div style={{ border: `1px solid ${riskColor}`, borderRadius: "10px", overflow: "hidden", marginBottom: "20px" }}>
      <div style={{ background: riskBg, padding: "16px 24px", borderBottom: `1px solid ${riskColor}` }}>
        <p style={{ margin: 0, fontFamily: "DM Sans, Arial, sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: riskColor, fontWeight: 500 }}>
          Legal documentation guide — {riskLevel} risk
        </p>
      </div>
      <div style={{ background: "#fff", padding: "24px 28px" }}>
        <Section title="Why this patient carries risk">
          <p style={{ margin: 0, fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#1A2B3C", lineHeight: 1.7 }}>{doc.summary}</p>
        </Section>
        <Section title="What to document">
          <ul style={{ margin: 0, paddingLeft: "18px" }}>
            {doc.documentation_checklist.map((item, i) => (
              <li key={i} style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#1A2B3C", lineHeight: 1.65, marginBottom: "6px" }}>{item}</li>
            ))}
          </ul>
        </Section>
        <Section title="Say aloud and note that you said it">
          {doc.verbal_scripts.map((script, i) => (
            <div key={i} style={{ background: "#F7F5F0", border: "1px solid #E2DDD5", borderRadius: "6px", padding: "12px 16px", marginBottom: "8px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#1A2B3C", lineHeight: 1.65, fontStyle: "italic" }}>
              &ldquo;{script}&rdquo;
            </div>
          ))}
        </Section>
        <Section title="Red flags to watch for">
          <ul style={{ margin: 0, paddingLeft: "18px" }}>
            {doc.red_flags.map((flag, i) => (
              <li key={i} style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#9B3B3B", lineHeight: 1.65, marginBottom: "6px" }}>{flag}</li>
            ))}
          </ul>
        </Section>
        <Section title="Pre-filled clinical note template" last>
          <div style={{ background: "#F7F5F0", border: "1px solid #E2DDD5", borderRadius: "6px", padding: "14px 18px" }}>
            <p style={{ margin: 0, fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#1A2B3C", lineHeight: 1.75 }}>{doc.template_note}</p>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children, last }: { title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div style={{ marginBottom: last ? 0 : "24px" }}>
      <p style={{ margin: "0 0 10px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "1px", color: "#4A5568", fontWeight: 500 }}>{title}</p>
      {children}
    </div>
  );
}
