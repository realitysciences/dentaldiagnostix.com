"use client";
import { useState } from "react";

export default function ShareButton({ reportId }: { reportId: string }) {
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function share() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/reports/share", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reportId }),
      });
      const data = await res.json();
      if (!res.ok || !data.token) { setError(data.error || "Failed"); setLoading(false); return; }
      const url = `${window.location.origin}/reports/shared/${data.token}`;
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setError("Failed to copy link");
    } finally {
      setLoading(false);
    }
  }

  return (
    <span>
      <button
        onClick={share}
        disabled={loading}
        style={{
          padding: "10px 20px", background: "#fff", color: "#1A2B3C",
          border: "1px solid #E2DDD5", borderRadius: "8px",
          fontFamily: "DM Sans, Arial, sans-serif", fontSize: "13px", fontWeight: 500,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Generating…" : copied ? "Link copied!" : "Share report"}
      </button>
      {error && <span style={{ marginLeft: "8px", fontFamily: "DM Sans, Arial, sans-serif", fontSize: "12px", color: "#9B3B3B" }}>{error}</span>}
    </span>
  );
}
