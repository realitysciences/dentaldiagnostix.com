"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [practiceName, setPracticeName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const inputStyle = {
    width: "100%", padding: "11px 14px", border: "1px solid #E2DDD5", borderRadius: "7px",
    fontFamily: "DM Sans, Arial, sans-serif", fontSize: "15px", color: "#1A2B3C",
    outline: "none", boxSizing: "border-box" as const, background: "#fff",
  };
  const labelStyle = {
    display: "block" as const, fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px",
    textTransform: "uppercase" as const, letterSpacing: "1px", color: "#4A5568",
    fontWeight: 500, marginBottom: "7px",
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, practiceName, email, message }),
      });
      const data = await res.json();
      if (data.success) {
        setDone(true);
      } else {
        setError(data.error || "Failed to send. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div style={{ background: "#fff", border: "1px solid #E2DDD5", borderRadius: "10px", padding: "40px 32px", textAlign: "center" }}>
        <p style={{ fontFamily: "Lora, Georgia, serif", fontSize: "22px", color: "#0E6B5E", margin: "0 0 10px" }}>Request received.</p>
        <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#4A5568", margin: 0, lineHeight: 1.65 }}>
          We&apos;ll follow up at <strong>{email}</strong> within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ background: "#fff", border: "1px solid #E2DDD5", borderRadius: "10px", padding: "32px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
        <div>
          <label style={labelStyle}>Your name</label>
          <input value={name} onChange={e => setName(e.target.value)} style={inputStyle} required placeholder="Dr. Jane Smith" />
        </div>
        <div>
          <label style={labelStyle}>Practice name</label>
          <input value={practiceName} onChange={e => setPracticeName(e.target.value)} style={inputStyle} placeholder="Smile Dental" />
        </div>
      </div>
      <div style={{ marginBottom: "16px" }}>
        <label style={labelStyle}>Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} required placeholder="you@yourpractice.com" />
      </div>
      <div style={{ marginBottom: "24px" }}>
        <label style={labelStyle}>Anything you want us to know? (optional)</label>
        <textarea
          value={message}
          onChange={e => setMessage(e.target.value)}
          rows={3}
          placeholder="Number of new patients per month, specific use case, questions…"
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>
      {error && <p style={{ marginBottom: "12px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#9B3B3B" }}>{error}</p>}
      <button
        type="submit"
        disabled={loading}
        style={{ width: "100%", padding: "13px", background: loading ? "#7BAFA8" : "#0E6B5E", color: "#fff", border: "none", borderRadius: "8px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "15px", fontWeight: 500, cursor: loading ? "not-allowed" : "pointer" }}
      >
        {loading ? "Sending…" : "Request access"}
      </button>
    </form>
  );
}
