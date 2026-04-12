"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function SignupForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    practiceName: "",
    dentistName: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();

    const { data, error: signUpError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    const userId = data.user?.id;
    if (!userId) {
      setError("Signup succeeded but no user ID returned. Please try again.");
      setLoading(false);
      return;
    }

    // Use server API route with service role key to bypass RLS
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        practiceName: form.practiceName,
        dentistName: form.dentistName,
        email: form.email,
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Failed to save practice info. Please try again.");
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

  const fields: { key: keyof typeof form; label: string; type: string; placeholder: string }[] = [
    { key: "practiceName", label: "Practice name", type: "text", placeholder: "Bright Smile Dental" },
    { key: "dentistName", label: "Dentist name", type: "text", placeholder: "Dr. Sarah Chen" },
    { key: "email", label: "Email", type: "email", placeholder: "sarah@brightsmile.com" },
    { key: "password", label: "Password", type: "password", placeholder: "At least 8 characters" },
  ];

  const allFilled = Object.values(form).every((v) => v.trim().length > 0);

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
      {fields.map(({ key, label, type, placeholder }) => (
        <div key={key} style={{ marginBottom: "18px" }}>
          <label style={labelStyle} htmlFor={key}>{label}</label>
          <input
            id={key}
            type={type}
            value={form[key]}
            onChange={set(key)}
            placeholder={placeholder}
            required
            style={inputStyle}
          />
        </div>
      ))}

      {error && (
        <p style={{
          fontFamily: "DM Sans, Arial, sans-serif",
          fontSize: "13px",
          color: "#9B3B3B",
          marginBottom: "16px",
        }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading || !allFilled}
        style={{
          width: "100%",
          padding: "13px",
          background: loading || !allFilled ? "#E2DDD5" : "#0E6B5E",
          color: loading || !allFilled ? "#4A5568" : "#fff",
          border: "none",
          borderRadius: "8px",
          fontFamily: "DM Sans, Arial, sans-serif",
          fontSize: "15px",
          fontWeight: 500,
          cursor: loading || !allFilled ? "not-allowed" : "pointer",
          marginTop: "6px",
        }}
      >
        {loading ? "Creating account..." : "Create account"}
      </button>
    </form>
  );
}
