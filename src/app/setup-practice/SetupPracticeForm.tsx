"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SetupPracticeForm({
  userId,
  email,
}: {
  userId: string;
  email: string;
}) {
  const router = useRouter();
  const [practiceName, setPracticeName] = useState("");
  const [dentistName, setDentistName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/auth/setup-practice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, practiceName, dentistName, email }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Something went wrong.");
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "11px 14px",
    border: "1px solid #E2DDD5", borderRadius: "8px",
    fontFamily: "DM Sans, Arial, sans-serif", fontSize: "15px",
    color: "#1A2B3C", background: "#fff", outline: "none", marginTop: "6px",
  };

  const labelStyle: React.CSSProperties = {
    display: "block", fontFamily: "DM Sans, Arial, sans-serif",
    fontSize: "13px", fontWeight: 500, color: "#1A2B3C",
  };

  const allFilled = practiceName.trim().length > 0 && dentistName.trim().length > 0;

  return (
    <form onSubmit={handleSubmit} style={{ background: "#fff", border: "1px solid #E2DDD5", borderRadius: "12px", padding: "32px" }}>
      <div style={{ marginBottom: "18px" }}>
        <label style={labelStyle} htmlFor="practiceName">Practice name</label>
        <input id="practiceName" type="text" value={practiceName} onChange={(e) => setPracticeName(e.target.value)} placeholder="Bright Smile Dental" required style={inputStyle} />
      </div>
      <div style={{ marginBottom: "24px" }}>
        <label style={labelStyle} htmlFor="dentistName">Your name</label>
        <input id="dentistName" type="text" value={dentistName} onChange={(e) => setDentistName(e.target.value)} placeholder="Dr. David Benson" required style={inputStyle} />
      </div>

      {error && (
        <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#9B3B3B", marginBottom: "16px" }}>{error}</p>
      )}

      <button
        type="submit"
        disabled={loading || !allFilled}
        style={{
          width: "100%", padding: "13px",
          background: loading || !allFilled ? "#E2DDD5" : "#0E6B5E",
          color: loading || !allFilled ? "#4A5568" : "#fff",
          border: "none", borderRadius: "8px",
          fontFamily: "DM Sans, Arial, sans-serif", fontSize: "15px", fontWeight: 500,
          cursor: loading || !allFilled ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Saving..." : "Go to dashboard"}
      </button>
    </form>
  );
}
