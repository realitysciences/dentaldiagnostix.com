"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
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
    marginTop: "6px",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "DM Sans, Arial, sans-serif",
    fontSize: "13px",
    fontWeight: 500,
    color: "#1A2B3C",
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#fff",
        border: "1px solid #E2DDD5",
        borderRadius: "12px",
        padding: "32px",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <label style={labelStyle} htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={inputStyle}
        />
      </div>
      <div style={{ marginBottom: "24px" }}>
        <label style={labelStyle} htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={inputStyle}
        />
      </div>
      {error && (
        <p
          style={{
            fontFamily: "DM Sans, Arial, sans-serif",
            fontSize: "13px",
            color: "#9B3B3B",
            marginBottom: "16px",
          }}
        >
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        style={{
          width: "100%",
          padding: "13px",
          background: loading ? "#E2DDD5" : "#0E6B5E",
          color: loading ? "#4A5568" : "#fff",
          border: "none",
          borderRadius: "8px",
          fontFamily: "DM Sans, Arial, sans-serif",
          fontSize: "15px",
          fontWeight: 500,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
