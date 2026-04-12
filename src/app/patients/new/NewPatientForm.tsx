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

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Something went wrong. Please try again.");
      setLoading(false);
      return;
    }

    router.push("/dashboard");
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    border: "1px solid #E2DDD5",
    borderRadius: "8px",
    fontFamily: "DM Sans, Arial, sans-serif",
    fontSize: "15px",
    color: "#1A2B3C",
    background: "#fff",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "DM Sans, Arial, sans-serif",
    fontSize: "13px",
    fontWeight: 500,
    color: "#1A2B3C",
    marginBottom: "6px",
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: "20px" }}>
        <label style={labelStyle} htmlFor="name">
          Patient name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Smith"
          required
          style={inputStyle}
        />
      </div>

      <div style={{ marginBottom: "28px" }}>
        <label style={labelStyle} htmlFor="email">
          Patient email
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@example.com"
          required
          style={inputStyle}
        />
      </div>

      {error && (
        <p
          style={{
            fontFamily: "DM Sans, Arial, sans-serif",
            fontSize: "14px",
            color: "#9B3B3B",
            marginBottom: "16px",
          }}
        >
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading || !name.trim() || !email.trim()}
        style={{
          width: "100%",
          padding: "13px",
          background:
            loading || !name.trim() || !email.trim() ? "#E2DDD5" : "#0E6B5E",
          color:
            loading || !name.trim() || !email.trim() ? "#4A5568" : "#fff",
          border: "none",
          borderRadius: "8px",
          fontFamily: "DM Sans, Arial, sans-serif",
          fontSize: "15px",
          fontWeight: 500,
          cursor:
            loading || !name.trim() || !email.trim()
              ? "not-allowed"
              : "pointer",
        }}
      >
        {loading ? "Sending..." : "Send intake link"}
      </button>
    </form>
  );
}
