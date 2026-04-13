"use client";

import { useState, useEffect } from "react";

const btn = (
  label: string,
  selected: boolean,
  onClick: () => void,
  bg: string,
  border?: string
) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      padding: "12px 20px",
      background: selected ? bg : "#fff",
      color: selected ? "#fff" : border ?? bg,
      border: `2px solid ${border ?? bg}`,
      borderRadius: "8px",
      fontFamily: "DM Sans, Arial, sans-serif",
      fontSize: "14px",
      fontWeight: 500,
      cursor: "pointer",
      flex: 1,
      minWidth: 0,
    }}
  >
    {label}
  </button>
);

export default function OutcomeRecordForm({
  patientId,
  initialShowedUp,
  initialTreatmentAccepted,
}: {
  patientId: string;
  initialShowedUp?: string;
  initialTreatmentAccepted?: string;
}) {
  const [showedUp, setShowedUp] = useState<boolean | null>(
    initialShowedUp === "true" ? true : initialShowedUp === "false" ? false : null
  );
  const [treatmentAccepted, setTreatmentAccepted] = useState<string>(
    initialTreatmentAccepted ?? ""
  );
  const [treatmentValue, setTreatmentValue] = useState("");
  const [issueNotes, setIssueNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [autoSubmitting, setAutoSubmitting] = useState(false);

  // If all required params came in via URL, auto-submit immediately
  useEffect(() => {
    if (
      initialShowedUp !== undefined &&
      initialTreatmentAccepted &&
      patientId
    ) {
      setAutoSubmitting(true);
      const resolvedShowedUp = initialShowedUp === "true";
      const resolvedTreatment = initialTreatmentAccepted;
      fetch("/api/outcomes/record", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patientId,
          showedUp: resolvedShowedUp,
          treatmentAccepted: resolvedTreatment,
        }),
      })
        .then((r) => r.json())
        .then((data) => {
          if (data.success) {
            setDone(true);
          } else {
            setAutoSubmitting(false);
            setError(data.error || "Failed to save");
          }
        })
        .catch(() => {
          setAutoSubmitting(false);
          setError("Network error. Please try again.");
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
          issueNotes: issueNotes || undefined,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setDone(true);
      } else {
        setError(data.error || "Failed to save");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (!patientId) {
    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid #E2DDD5",
          borderRadius: "10px",
          padding: "32px",
          textAlign: "center",
        }}
      >
        <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#9B3B3B" }}>
          Invalid link. No patient ID found.
        </p>
      </div>
    );
  }

  if (autoSubmitting && !done && !error) {
    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid #E2DDD5",
          borderRadius: "10px",
          padding: "48px 32px",
          textAlign: "center",
        }}
      >
        <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "15px", color: "#4A5568" }}>
          Saving...
        </p>
      </div>
    );
  }

  if (done) {
    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid #E2DDD5",
          borderRadius: "10px",
          padding: "48px 32px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Lora, Georgia, serif",
            fontSize: "22px",
            color: "#0E6B5E",
            margin: "0 0 10px",
          }}
        >
          Logged. Thank you.
        </p>
        <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#4A5568", margin: 0 }}>
          This outcome has been recorded and will appear in your ROI dashboard.
        </p>
        {!treatmentValue && treatmentAccepted !== "no" && (
          <div
            style={{
              marginTop: "28px",
              borderTop: "1px solid #E2DDD5",
              paddingTop: "24px",
              textAlign: "left",
            }}
          >
            <p
              style={{
                fontFamily: "DM Sans, Arial, sans-serif",
                fontSize: "13px",
                color: "#4A5568",
                margin: "0 0 12px",
              }}
            >
              What was the approximate value of accepted treatment? (optional — helps calculate your ROI)
            </p>
            <AddTreatmentValue patientId={patientId} showedUp={showedUp ?? true} treatmentAccepted={treatmentAccepted} />
          </div>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#fff",
        border: "1px solid #E2DDD5",
        borderRadius: "10px",
        padding: "32px",
      }}
    >
      {/* Question 1 */}
      <div style={{ marginBottom: "28px" }}>
        <p
          style={{
            fontFamily: "DM Sans, Arial, sans-serif",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "#4A5568",
            fontWeight: 500,
            margin: "0 0 10px",
          }}
        >
          Did the patient show up?
        </p>
        <div style={{ display: "flex", gap: "8px" }}>
          {btn("Yes, showed up", showedUp === true, () => setShowedUp(true), "#0E6B5E")}
          {btn("No-show", showedUp === false, () => { setShowedUp(false); setTreatmentAccepted("no"); }, "#4A5568")}
        </div>
      </div>

      {/* Question 2 — only if they showed up */}
      {showedUp === true && (
        <div style={{ marginBottom: "28px" }}>
          <p
            style={{
              fontFamily: "DM Sans, Arial, sans-serif",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "#4A5568",
              fontWeight: 500,
              margin: "0 0 10px",
            }}
          >
            Did they accept treatment?
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {btn("Full acceptance", treatmentAccepted === "yes", () => setTreatmentAccepted("yes"), "#1A6B3C")}
            {btn("Partial", treatmentAccepted === "partial", () => setTreatmentAccepted("partial"), "#B07D2E")}
            {btn("Declined", treatmentAccepted === "no", () => setTreatmentAccepted("no"), "#9B3B3B")}
          </div>
        </div>
      )}

      {/* Treatment value — only if accepted anything */}
      {(treatmentAccepted === "yes" || treatmentAccepted === "partial") && (
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              fontFamily: "DM Sans, Arial, sans-serif",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "#4A5568",
              fontWeight: 500,
              marginBottom: "8px",
            }}
          >
            Approximate treatment value accepted (optional)
          </label>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "16px", color: "#4A5568" }}>$</span>
            <input
              type="number"
              min="0"
              step="1"
              placeholder="e.g. 1800"
              value={treatmentValue}
              onChange={(e) => setTreatmentValue(e.target.value)}
              style={{
                flex: 1,
                padding: "10px 14px",
                border: "1px solid #E2DDD5",
                borderRadius: "6px",
                fontFamily: "DM Sans, Arial, sans-serif",
                fontSize: "15px",
                color: "#1A2B3C",
                outline: "none",
              }}
            />
          </div>
        </div>
      )}

      {/* Issue notes */}
      <div style={{ marginBottom: "24px" }}>
        <label
          style={{
            display: "block",
            fontFamily: "DM Sans, Arial, sans-serif",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "1px",
            color: "#4A5568",
            fontWeight: 500,
            marginBottom: "8px",
          }}
        >
          Any issues? (optional)
        </label>
        <textarea
          placeholder="Patient seemed distressed, disputed recommendations, etc."
          value={issueNotes}
          onChange={(e) => setIssueNotes(e.target.value)}
          rows={2}
          style={{
            width: "100%",
            padding: "10px 14px",
            border: "1px solid #E2DDD5",
            borderRadius: "6px",
            fontFamily: "DM Sans, Arial, sans-serif",
            fontSize: "14px",
            color: "#1A2B3C",
            resize: "vertical",
            boxSizing: "border-box",
            outline: "none",
          }}
        />
      </div>

      {error && (
        <p style={{ marginBottom: "16px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#9B3B3B" }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading || showedUp === null || !treatmentAccepted}
        style={{
          width: "100%",
          padding: "13px",
          background: showedUp !== null && treatmentAccepted ? "#0E6B5E" : "#A0B0C0",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontFamily: "DM Sans, Arial, sans-serif",
          fontSize: "15px",
          fontWeight: 500,
          cursor: showedUp !== null && treatmentAccepted ? "pointer" : "not-allowed",
        }}
      >
        {loading ? "Saving..." : "Log outcome"}
      </button>
    </form>
  );
}

function AddTreatmentValue({
  patientId,
  showedUp,
  treatmentAccepted,
}: {
  patientId: string;
  showedUp: boolean;
  treatmentAccepted: string;
}) {
  const [value, setValue] = useState("");
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);

  async function save() {
    if (!value) return;
    setSaving(true);
    await fetch("/api/outcomes/record", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        patientId,
        showedUp,
        treatmentAccepted,
        treatmentValue: parseFloat(value),
      }),
    });
    setSaved(true);
    setSaving(false);
  }

  if (saved) {
    return (
      <p style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#0E6B5E" }}>
        Saved.
      </p>
    );
  }

  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <span style={{ fontFamily: "DM Sans, Arial, sans-serif", fontSize: "15px", color: "#4A5568" }}>$</span>
      <input
        type="number"
        min="0"
        step="1"
        placeholder="e.g. 1800"
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
      <button
        onClick={save}
        disabled={!value || saving}
        style={{
          padding: "9px 16px",
          background: value ? "#0E6B5E" : "#A0B0C0",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          fontFamily: "DM Sans, Arial, sans-serif",
          fontSize: "13px",
          cursor: value ? "pointer" : "not-allowed",
        }}
      >
        {saving ? "Saving..." : "Save"}
      </button>
    </div>
  );
}
