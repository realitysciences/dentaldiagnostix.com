"use client";
import { useState } from "react";

export default function RemindButton({ patientId }: { patientId: string }) {
  const [state, setState] = useState<"idle" | "loading" | "sent" | "error">("idle");

  async function send() {
    setState("loading");
    try {
      const res = await fetch("/api/patients/remind", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ patientId }),
      });
      const data = await res.json();
      setState(data.success ? "sent" : "error");
      if (data.success) setTimeout(() => setState("idle"), 4000);
    } catch {
      setState("error");
    }
  }

  if (state === "sent") return <span style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", color: "#0E6B5E" }}>Reminder sent</span>;
  if (state === "error") return <span style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", color: "#9B3B3B" }}>Failed</span>;

  return (
    <button
      onClick={send}
      disabled={state === "loading"}
      style={{
        background: "none", border: "1px solid #A0B0C0", color: "#4A5568",
        padding: "4px 10px", borderRadius: "6px",
        fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", fontWeight: 500,
        cursor: state === "loading" ? "not-allowed" : "pointer",
      }}
    >
      {state === "loading" ? "Sending…" : "Send reminder"}
    </button>
  );
}
