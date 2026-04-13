"use client";
import { useState } from "react";

export default function PatientNoteButton({ patientId, initialNote }: { patientId: string; initialNote?: string }) {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState(initialNote ?? "");
  const [saved, setSaved] = useState(!!initialNote);
  const [saving, setSaving] = useState(false);

  async function save() {
    setSaving(true);
    await fetch("/api/patients/note", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ patientId, note }),
    });
    setSaving(false);
    setSaved(!!note);
    if (!note) setOpen(false);
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        style={{
          background: "none", border: "none", padding: 0,
          fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px",
          color: saved ? "#0E6B5E" : "#A0B0C0",
          cursor: "pointer", textDecoration: "underline", textDecorationStyle: "dotted",
        }}
      >
        {saved ? "Note ✓" : "+ Note"}
      </button>
    );
  }

  return (
    <div
      style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.3)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}
      onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}
    >
      <div style={{ background: "#fff", borderRadius: "12px", padding: "28px", width: "100%", maxWidth: 400, boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <p style={{ margin: 0, fontFamily: "Lora, Georgia, serif", fontSize: "17px", color: "#1A2B3C" }}>Patient note</p>
          <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", fontSize: "18px", color: "#4A5568", cursor: "pointer" }}>&times;</button>
        </div>
        <textarea
          autoFocus
          value={note}
          onChange={e => setNote(e.target.value)}
          rows={4}
          placeholder="Private notes visible only to your practice…"
          style={{ width: "100%", padding: "10px 12px", border: "1px solid #E2DDD5", borderRadius: "7px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#1A2B3C", resize: "vertical", outline: "none", boxSizing: "border-box" }}
        />
        <div style={{ display: "flex", gap: "8px", marginTop: "14px" }}>
          <button onClick={save} disabled={saving} style={{ flex: 1, padding: "10px", background: "#0E6B5E", color: "#fff", border: "none", borderRadius: "7px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", fontWeight: 500, cursor: "pointer" }}>
            {saving ? "Saving…" : "Save note"}
          </button>
          {saved && <button onClick={() => { setNote(""); save(); }} style={{ padding: "10px 14px", background: "#fff", color: "#9B3B3B", border: "1px solid #E2DDD5", borderRadius: "7px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", cursor: "pointer" }}>Clear</button>}
        </div>
      </div>
    </div>
  );
}
