"use client";

import { useState, useRef } from "react";

type ImportRow = { name: string; email: string; appointment_date?: string };
type ResultRow = { name: string; email: string; status: "ok" | "error"; intakeLink?: string; error?: string };

function parseCSV(text: string): ImportRow[] {
  const lines = text.trim().split("\n").map(l => l.trim()).filter(Boolean);
  if (lines.length < 2) return [];
  const headers = lines[0].toLowerCase().split(",").map(h => h.trim().replace(/"/g, ""));
  const nameIdx = headers.indexOf("name");
  const emailIdx = headers.indexOf("email");
  const dateIdx = headers.indexOf("appointment_date");
  if (nameIdx === -1 || emailIdx === -1) return [];
  return lines.slice(1).map(line => {
    const cols = line.split(",").map(c => c.trim().replace(/"/g, ""));
    return {
      name: cols[nameIdx] ?? "",
      email: cols[emailIdx] ?? "",
      ...(dateIdx !== -1 && cols[dateIdx] ? { appointment_date: cols[dateIdx] } : {}),
    };
  }).filter(r => r.name || r.email);
}

export default function CSVImportForm() {
  const [rows, setRows] = useState<ImportRow[]>([]);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<ResultRow[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = ev => {
      const text = ev.target?.result as string;
      const parsed = parseCSV(text);
      setRows(parsed);
      setResults(null);
      setError(parsed.length === 0 ? "Could not parse CSV. Check that it has name and email columns." : null);
    };
    reader.readAsText(file);
  }

  async function handleImport() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/patients/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rows }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Import failed"); } else { setResults(data.results); }
    } catch { setError("Network error"); }
    finally { setLoading(false); }
  }

  const succeeded = results?.filter(r => r.status === "ok").length ?? 0;
  const failed = results?.filter(r => r.status === "error").length ?? 0;

  return (
    <div style={{ background: "#fff", border: "1px solid #E2DDD5", borderRadius: "10px", padding: "28px" }}>
      <div
        onClick={() => inputRef.current?.click()}
        style={{
          border: "2px dashed #E2DDD5", borderRadius: "8px", padding: "32px",
          textAlign: "center", cursor: "pointer", marginBottom: "20px",
          background: rows.length > 0 ? "#F0FAF8" : "#F7F5F0",
          borderColor: rows.length > 0 ? "#0E6B5E" : "#E2DDD5",
        }}
      >
        <input ref={inputRef} type="file" accept=".csv" onChange={handleFile} style={{ display: "none" }} />
        {rows.length > 0 ? (
          <>
            <p style={{ margin: "0 0 4px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "15px", color: "#0E6B5E", fontWeight: 500 }}>{fileName}</p>
            <p style={{ margin: 0, fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#4A5568" }}>{rows.length} patient{rows.length !== 1 ? "s" : ""} ready to import · click to change</p>
          </>
        ) : (
          <>
            <p style={{ margin: "0 0 4px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "15px", color: "#4A5568" }}>Click to upload CSV</p>
            <p style={{ margin: 0, fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", color: "#A0B0C0" }}>or drag and drop</p>
          </>
        )}
      </div>

      {rows.length > 0 && !results && (
        <div style={{ marginBottom: "20px", maxHeight: "200px", overflowY: "auto", border: "1px solid #E2DDD5", borderRadius: "6px" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#F7F5F0", borderBottom: "1px solid #E2DDD5" }}>
                {["Name", "Email", "Appt. date"].map(h => (
                  <th key={h} style={{ padding: "8px 14px", textAlign: "left", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.8px", color: "#4A5568", fontWeight: 500 }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.slice(0, 20).map((r, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #F0EFEC" }}>
                  <td style={{ padding: "8px 14px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#1A2B3C" }}>{r.name}</td>
                  <td style={{ padding: "8px 14px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#4A5568" }}>{r.email}</td>
                  <td style={{ padding: "8px 14px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#4A5568" }}>{r.appointment_date ?? "—"}</td>
                </tr>
              ))}
              {rows.length > 20 && <tr><td colSpan={3} style={{ padding: "8px 14px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", color: "#A0B0C0", textAlign: "center" }}>…and {rows.length - 20} more</td></tr>}
            </tbody>
          </table>
        </div>
      )}

      {results && (
        <div style={{ marginBottom: "20px" }}>
          <p style={{ margin: "0 0 12px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", color: "#1A2B3C" }}>
            <span style={{ color: "#0E6B5E", fontWeight: 500 }}>{succeeded} imported</span>
            {failed > 0 && <span style={{ color: "#9B3B3B" }}> · {failed} failed</span>}
          </p>
          <div style={{ maxHeight: "240px", overflowY: "auto", border: "1px solid #E2DDD5", borderRadius: "6px" }}>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {results.map((r, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #F0EFEC", background: r.status === "error" ? "#FBF0EF" : "transparent" }}>
                    <td style={{ padding: "8px 14px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#1A2B3C", width: "35%" }}>{r.name}</td>
                    <td style={{ padding: "8px 14px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", color: "#4A5568", width: "35%" }}>{r.email}</td>
                    <td style={{ padding: "8px 14px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px" }}>
                      {r.status === "ok"
                        ? <span style={{ color: "#0E6B5E" }}>✓ <button onClick={() => navigator.clipboard.writeText(r.intakeLink!)} style={{ background: "none", border: "none", color: "#0E6B5E", cursor: "pointer", fontSize: "11px", textDecoration: "underline", padding: 0 }}>Copy link</button></span>
                        : <span style={{ color: "#9B3B3B" }}>✗ {r.error}</span>
                      }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {error && <p style={{ marginBottom: "16px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", color: "#9B3B3B" }}>{error}</p>}

      {rows.length > 0 && !results && (
        <button
          onClick={handleImport}
          disabled={loading}
          style={{ width: "100%", padding: "13px", background: loading ? "#7BAFA8" : "#0E6B5E", color: "#fff", border: "none", borderRadius: "8px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "15px", fontWeight: 500, cursor: loading ? "not-allowed" : "pointer" }}
        >
          {loading ? `Importing ${rows.length} patients…` : `Import ${rows.length} patient${rows.length !== 1 ? "s" : ""}`}
        </button>
      )}

      {results && (
        <button onClick={() => { setRows([]); setResults(null); setFileName(""); if (inputRef.current) inputRef.current.value = ""; }}
          style={{ width: "100%", padding: "12px", background: "#fff", color: "#0E6B5E", border: "1px solid #0E6B5E", borderRadius: "8px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "14px", fontWeight: 500, cursor: "pointer" }}>
          Import another file
        </button>
      )}
    </div>
  );
}
