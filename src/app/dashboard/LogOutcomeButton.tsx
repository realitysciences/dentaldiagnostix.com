"use client";

import { useState } from "react";

export default function LogOutcomeButton({
  patientId,
  hasOutcome,
}: {
  patientId: string;
  hasOutcome: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [showedUp, setShowedUp] = useState<boolean | null>(null);
  const [treatmentAccepted, setTreatmentAccepted] = useState("");
  const [treatmentValue, setTreatmentValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(hasOutcome);
  const [error, setError] = useState<string | null>(null);

  async function submit() {
    if (showedUp === null || !treatmentAccepted) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/outcomes/record", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientId,
          showedUp,
          treatmentAccepted,
          treatmentValue: treatmentValue ? parseFloat(treatmentValue) : undefined,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setDone(true);
        setOpen(false);
      } else {
        setError(data.error || "Failed to save");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (done && !open) {
    return (
      <button
        onClick={() => { setDone(false); setOpen(true); }}
        style={{
          background: "none",
          border: "none",
          padding: 0,
          fontFamily: "DM Sans, Arial, sans-serif",
          fontSize: "12px",
          color: "#0E6B5E",
          cursor: "pointer",
          textDecoration: "underline",
          textDecorationStyle: "dotted",
        }}
      >
        Outcome logged
      </button>
    );
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{
          background: "none",
          border: "1px solid #B07D2E",
          color: "#B07D2E",
          padding: "4px 10px",
          borderRadius: "6px",
          fontFamily: "DM Sans, Arial, sans-serif",
          fontSize: "12px",
          fontWeight: 500,
          cursor: "pointer",
          marginLeft: "8px",
        }}
      >
        Log outcome
      </button>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.35)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
      }}
      onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "32px",
          width: "100%",
          maxWidth: 420,
          boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <p style={{ margin: 0, fontFamily: "Lora, Georgia, serif", fontSize: "18px", color: "#1A2B3C" }}>
            Log outcome
          </p>
          <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", fontSize: "18px", color: "#4A5568", cursor: "pointer", lineHeight: 1 }}>
            &times;
          </button>
        </div>

        {/* Q1 */}
        <div style={{ marginBottom: "20px" }}>
          <p style={{ margin: "0 0 8px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#4A5568", fontWeight: 500 }}>
            Did the patient show up?
          </p>
          <div style={{ display: "flex", gap: "8px" }}>
            {[
              { label: "Yes", val: true, bg: "#0E6B5E" },
              { label: "No-show", val: false, bg: "#4A5568" },
            ].map(({ label, val, bg }) => (
              <button
                key={label}
                type="button"
                onClick={() => { setShowedUp(val); if (!val) setTreatmentAccepted("no"); }}
                style={{
                  flex: 1,
                  padding: "10px",
                  background: showedUp === val ? bg : "#fff",
                  color: showedUp === val ? "#fff" : bg,
                  border: `2px solid ${bg}`,
                  borderRadius: "7px",
                  fontFamily: "DM Sans, Arial, sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  cursor: "pointer",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Q2 */}
        {showedUp === true && (
          <div style={{ marginBottom: "20px" }}>
            <p style={{ margin: "0 0 8px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#4A5568", fontWeight: 500 }}>
              Treatment accepted?
            </p>
            <div style={{ display: "flex", gap: "6px" }}>
              {[
                { label: "Full", val: "yes", bg: "#1A6B3C" },
                { label: "Partial", val: "partial", bg: "#B07D2E" },
                { label: "Declined", val: "no", bg: "#9B3B3B" },
              ].map(({ label, val, bg }) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setTreatmentAccepted(val)}
                  style={{
                    flex: 1,
                    padding: "10px 6px",
                    background: treatmentAccepted === val ? bg : "#fff",
                    color: treatmentAccepted === val ? "#fff" : bg,
                    border: `2px solid ${bg}`,
                    borderRadius: "7px",
                    fontFamily: "DM Sans, Arial, sans-serif",
                    fontSize: "13px",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Treatment value */}
        {(treatmentAccepted === "yes" || treatmentAccepted === "partial") && (
          <div style={{ marginBottom: "20px" }}>
            <p style={{ margin: "0 0 8px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", textTransform: "uppercase", letterSpacing: "1px", color: "#4A5568", fontWeight: 500 }}>
              Treatment value accepted (optional)
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "15px", color: "#4A5568" }}>$</span>
              <input
                type="number"
                min="0"
                placeholder="e.g. 1800"
                value={treatmentValue}
                onChange={(e) => setTreatmentValue(e.target.value)}
                style={{
                  flex: 1,
                  padding: "9px 12px",
                  border: "1px solid #E2DDD5",
                  borderRadius: "6px",
                  fontFamily: "DM Sans, Arial, sans-serif",
                  fontSize: "14px",
                  outline: "none",
                }}
              />
            </div>
          </div>
        )}

        {error && (
          <p style={{ marginBottom: "12px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#9B3B3B" }}>
            {error}
          </p>
        )}

        <button
          onClick={submit}
          disabled={loading || showedUp === null || !treatmentAccepted}
          style={{
            width: "100%",
            padding: "12px",
            background: showedUp !== null && treatmentAccepted ? "#0E6B5E" : "#A0B0C0",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontFamily: "DM Sans, Arial, sans-serif",
            fontSize: "14px",
            fontWeight: 500,
            cursor: showedUp !== null && treatmentAccepted ? "pointer" : "not-allowed",
          }}
        >
          {loading ? "Saving..." : "Save outcome"}
        </button>
      </div>
    </div>
  );
}
