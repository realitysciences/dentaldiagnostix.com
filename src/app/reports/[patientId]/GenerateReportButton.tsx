"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GenerateReportButton({ patientId }: { patientId: string }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function handleGenerate() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/reports/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ patientId }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to generate report");
        setLoading(false);
        return;
      }
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div style={{ marginTop: "16px" }}>
      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{
          padding: "12px 28px",
          background: loading ? "#7BAFA8" : "#0E6B5E",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontFamily: "DM Sans, Arial, sans-serif",
          fontSize: "15px",
          fontWeight: 500,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Generating report…" : "Generate report"}
      </button>
      {loading && (
        <p style={{ marginTop: "12px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#4A5568" }}>
          This may take up to 30 seconds.
        </p>
      )}
      {error && (
        <p style={{ marginTop: "12px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#9B3B3B" }}>
          {error}
        </p>
      )}
    </div>
  );
}
