"use client";

import { useState } from "react";

export default function SettingsForm({ practiceName, dentistName }: { practiceName: string; dentistName: string }) {
  const [pName, setPName] = useState(practiceName);
  const [dName, setDName] = useState(dentistName);
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSaved(false);
    setError(null);
    try {
      const res = await fetch("/api/practice/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ practice_name: pName, dentist_name: dName }),
      });
      const data = await res.json();
      if (data.success) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      } else {
        setError(data.error || "Failed to save");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputStyle = {
    width: "100%", padding: "10px 14px", border: "1px solid #E2DDD5", borderRadius: "6px",
    fontFamily: "DM Sans, Arial, sans-serif", fontSize: "15px", color: "#1A2B3C",
    outline: "none", boxSizing: "border-box" as const,
  };
  const labelStyle = {
    display: "block" as const, fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px",
    textTransform: "uppercase" as const, letterSpacing: "1px", color: "#4A5568", fontWeight: 500, marginBottom: "8px",
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "20px" }}>
        <label style={labelStyle}>Practice name</label>
        <input value={pName} onChange={e => setPName(e.target.value)} style={inputStyle} required />
      </div>
      <div style={{ marginBottom: "24px" }}>
        <label style={labelStyle}>Dentist name</label>
        <input value={dName} onChange={e => setDName(e.target.value)} style={inputStyle} required />
      </div>
      {error && <p style={{ marginBottom: "12px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#9B3B3B" }}>{error}</p>}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <button
          type="submit"
          disabled={loading}
          style={{ padding: "11px 28px", background: loading ? "#7BAFA8" : "#0E6B5E", color: "#fff", border: "none", borderRadius: "8px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", fontWeight: 500, cursor: loading ? "not-allowed" : "pointer" }}
        >
          {loading ? "Saving…" : "Save changes"}
        </button>
        {saved && <span style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#0E6B5E" }}>Saved.</span>}
      </div>
    </form>
  );
}
