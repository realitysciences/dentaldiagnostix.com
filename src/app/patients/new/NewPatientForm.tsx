"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPatientForm({
  practiceId,
  practiceName,
  dentistName,
}: {
  practiceId: string;
  practiceName: string;
  dentistName: string;
}) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [intakeLink, setIntakeLink] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setLoading(true);
    setError("");

    const res = await fetch("/api/patients/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, practiceId, practiceName, dentistName }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.error || "Something went wrong. Please try again.");
      setLoading(false);
      return;
    }

    setIntakeLink(data.intakeLink);
    setLoading(false);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "11px 14px",
    border: "1px solid #E2DDD5", borderRadius: "8px",
    fontFamily: "DM Sans, Arial, sans-serif", fontSize: "15px",
    color: "#1A2B3C", background: "#fff", outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block", fontFamily: "DM Sans, Arial, sans-serif",
    fontSize: "13px", fontWeight: 500, color: "#1A2B3C", marginBottom: "6px",
  };

  if (intakeLink) {
    return (
      <div style={{ background: "#E4F2F0", border: "1px solid #0E6B5E44", borderRadius: "10px", padding: "28px" }}>
        <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", fontWeight: 500, color: "#0E6B5E", marginBottom: "8px" }}>
          Intake created for {name}
        </p>
        <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#1A2B3C", marginBottom: "16px" }}>
          Copy this link and send it to the patient. A link was also sent to your email.
        </p>
        <div style={{
          background: "#fff", border: "1px solid #E2DDD5", borderRadius: "6px",
          padding: "10px 14px", fontFamily: "monospace", fontSize: "12px",
          color: "#1A2B3C", wordBreak: "break-all", marginBottom: "20px",
        }}>
          {intakeLink}
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => navigator.clipboard.writeText(intakeLink)}
            style={{
              padding: "9px 18px", background: "#0E6B5E", color: "#fff",
              border: "none", borderRadius: "6px", fontFamily: "DM Sans, Arial, sans-serif",
              fontSize: "13px", fontWeight: 500, cursor: "pointer",
            }}
          >
            Copy link
          </button>
          <button
            onClick={() => router.push("/dashboard")}
            style={{
              padding: "9px 18px", background: "transparent", color: "#4A5568",
              border: "1px solid #E2DDD5", borderRadius: "6px",
              fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", cursor: "pointer",
            }}
          >
            Back to dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "20px" }}>
        <label style={labelStyle} htmlFor="name">Patient name</label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Smith" required style={inputStyle} />
      </div>
      <div style={{ marginBottom: "28px" }}>
        <label style={labelStyle} htmlFor="email">Patient email</label>
        <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jane@example.com" required style={inputStyle} />
      </div>

      {error && (
        <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#9B3B3B", marginBottom: "16px" }}>{error}</p>
      )}

      <button
        type="submit"
        disabled={loading || !name.trim() || !email.trim()}
        style={{
          width: "100%", padding: "13px",
          background: loading || !name.trim() || !email.trim() ? "#E2DDD5" : "#0E6B5E",
          color: loading || !name.trim() || !email.trim() ? "#4A5568" : "#fff",
          border: "none", borderRadius: "8px",
          fontFamily: "DM Sans, Arial, sans-serif", fontSize: "15px", fontWeight: 500,
          cursor: loading || !name.trim() || !email.trim() ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Sending..." : "Send intake link"}
      </button>
    </form>
  );
}
