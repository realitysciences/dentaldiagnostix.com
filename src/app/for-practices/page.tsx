"use client";

import Link from "next/link";
import { useState } from "react";

const P = "#6D28D9";
const PL = "#EDE9FE";
const PB = "#DDD6FE";
const DARK = "#1E1B4B";
const TEXT = "#111827";
const MUTED = "#4A5568";
const BORDER = "#E5E7EB";
const GREEN = "#15803D";
const GL = "#F0FDF4";
const RED = "#9B3B3B";

const inputStyle = {
  width: "100%",
  padding: "10px 14px",
  border: `1px solid ${BORDER}`,
  borderRadius: 7,
  fontSize: 14,
  color: TEXT,
  outline: "none",
  background: "#fff",
  boxSizing: "border-box" as const,
};

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA",
  "KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT",
  "VA","WA","WV","WI","WY","DC",
];

export default function ForPracticesPage() {
  const [form, setForm] = useState({
    practiceName: "",
    role: "",
    city: "",
    state: "",
    providers: "",
    newPatients: "",
    challenge: "",
    email: "",
    agreed: false,
  });
  const [submitting, setSubmitting] = useState(false);

  function set(key: string, val: string | boolean) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const data = new FormData();
      data.append("access_key", "db2c765e-ddd3-4ffe-8ecc-2b5e83716990");
      data.append("Practice Name", form.practiceName);
      data.append("Role", form.role);
      data.append("City", form.city);
      data.append("State", form.state);
      data.append("Number of Providers", form.providers);
      data.append("New Patients Per Month", form.newPatients);
      data.append("Biggest Communication Challenge", form.challenge);
      data.append("Work Email", form.email);
      data.append("Agreed to Contact", form.agreed ? "Yes" : "No");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        window.location.href = "/request-received";
      } else {
        setSubmitting(false);
        alert("Something went wrong. Please try again.");
      }
    } catch {
      setSubmitting(false);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "#fff", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ display: "grid", gridTemplateColumns: "repeat(3,4px)", gap: 2 }}>
              {Array(9).fill(0).map((_, i) => <span key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: P }} />)}
            </span>
            <span style={{ fontSize: 17, fontWeight: 700, color: DARK }}>Dental</span><span style={{ fontSize: 17, fontWeight: 700, color: P }}>Diagnostix</span>
            <sup style={{ fontSize: 9, color: P }}>&trade;</sup>
          </Link>
          <div style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
            <Link href="/how-it-works" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>How it works</Link>
            <Link href="/sample-report" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>Sample report</Link>
            <Link href="/for-practices" style={{ fontSize: 13, color: P, textDecoration: "none", fontWeight: 600, borderBottom: `2px solid ${P}`, paddingBottom: 2 }}>For practices</Link>
            <Link href="/blog" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>Blog</Link>
            <Link href="/modules" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>Modules</Link>
            <Link href="/for-practices" style={{ background: P, color: "#fff", fontSize: 13, fontWeight: 600, padding: "9px 20px", borderRadius: 7, textDecoration: "none" }}>Request Early Access &rarr;</Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "flex-start" }}>
          {/* Left */}
          <div style={{ paddingTop: "1rem" }}>
            <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "1.5px", color: P, fontWeight: 600, marginBottom: 14 }}>For practices</p>
            <h1 style={{ fontSize: 44, fontWeight: 700, color: TEXT, lineHeight: 1.1, marginBottom: 12 }}>
              Built for practices that want to know the patient before the appointment starts.
            </h1>
            <div style={{ width: 44, height: 4, background: P, borderRadius: 2, marginBottom: 24 }} />
            <p style={{ fontSize: 15, color: MUTED, fontWeight: 300, lineHeight: 1.75, marginBottom: 32 }}>
              DentalDiagnostix&trade; fits into your existing appointment flow and gives your team a behavioral brief before the visit.
            </p>

            {/* Trust badges */}
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {[
                { icon: "🔍", label: "Behavioral insight, not clinical data" },
                { icon: "🔒", label: "Secure, private, and compliant" },
                { icon: "🏷️", label: "You own the patient relationship" },
              ].map((badge) => (
                <div key={badge.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 16 }}>{badge.icon}</span>
                  <span style={{ fontSize: 12, color: MUTED, fontWeight: 500 }}>{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Laptop/tablet mockup */}
            <div style={{ marginTop: 40, background: DARK, borderRadius: 14, padding: "10px", boxShadow: "0 8px 40px rgba(0,0,0,0.2)" }}>
              <div style={{ background: "#1A1640", borderRadius: 8, overflow: "hidden" }}>
                {/* Screen chrome */}
                <div style={{ background: "#0F0D2E", padding: "6px 10px", display: "flex", gap: 5 }}>
                  {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
                    <span key={c} style={{ width: 8, height: 8, borderRadius: "50%", background: c, display: "inline-block" }} />
                  ))}
                </div>
                {/* Report preview */}
                <div style={{ padding: "14px 16px" }}>
                  <p style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: 1, color: "#A78BFA", marginBottom: 10 }}>Patient Behavioral Brief</p>
                  <p style={{ fontSize: 13, fontWeight: 700, color: "#fff", marginBottom: 2 }}>Sarah M., 38</p>
                  <p style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>New patient &middot; Thu Apr 17 &middot; 2:00 PM</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 10 }}>
                    {[
                      { label: "Avoidance", value: "Shame-based", color: "#A78BFA" },
                      { label: "Legal risk", value: "Elevated", color: "#FC8080" },
                    ].map((s) => (
                      <div key={s.label} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 5, padding: "6px 8px" }}>
                        <p style={{ fontSize: 8, textTransform: "uppercase", color: "rgba(255,255,255,0.4)", letterSpacing: 0.5, marginBottom: 3 }}>{s.label}</p>
                        <p style={{ fontSize: 11, fontWeight: 600, color: s.color }}>{s.value}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ background: "rgba(109,40,217,0.2)", borderLeft: `2px solid ${P}`, borderRadius: "0 4px 4px 0", padding: "7px 9px" }}>
                    <p style={{ fontSize: 8, color: "#A78BFA", textTransform: "uppercase", letterSpacing: 0.7, marginBottom: 3, fontWeight: 600 }}>Opening approach</p>
                    <p style={{ fontSize: 10, color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>Open with curiosity. Normalize the gap.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 14, padding: "2rem", boxShadow: "0 4px 24px rgba(109,40,217,0.08)" }}>
            {/* Form header */}
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 20, paddingBottom: 20, borderBottom: `1px solid ${BORDER}` }}>
              <span style={{ fontSize: 22, flexShrink: 0 }}>📋</span>
              <div>
                <p style={{ fontSize: 17, fontWeight: 700, color: TEXT, marginBottom: 4 }}>Request Early Access</p>
                <p style={{ fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.6 }}>Apply to be among the first practices to use DentalDiagnostix&trade; in your workflow.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Practice name */}
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: TEXT, marginBottom: 5 }}>
                  Practice name <span style={{ color: RED }}>*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="🏢 Your practice name"
                  value={form.practiceName}
                  onChange={(e) => set("practiceName", e.target.value)}
                  style={inputStyle}
                />
              </div>

              {/* Role */}
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: TEXT, marginBottom: 5 }}>
                  Your role <span style={{ color: RED }}>*</span>
                </label>
                <select
                  required
                  value={form.role}
                  onChange={(e) => set("role", e.target.value)}
                  style={inputStyle}
                >
                  <option value="">Select your role</option>
                  <option>General Dentist</option>
                  <option>Specialist</option>
                  <option>Practice Owner</option>
                  <option>Office Manager</option>
                  <option>Other</option>
                </select>
              </div>

              {/* City + State */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: TEXT, marginBottom: 5 }}>
                    City <span style={{ color: RED }}>*</span>
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="City"
                    value={form.city}
                    onChange={(e) => set("city", e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: TEXT, marginBottom: 5 }}>
                    State <span style={{ color: RED }}>*</span>
                  </label>
                  <select
                    required
                    value={form.state}
                    onChange={(e) => set("state", e.target.value)}
                    style={inputStyle}
                  >
                    <option value="">State</option>
                    {US_STATES.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              {/* Providers + New patients */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: TEXT, marginBottom: 5 }}>
                    Number of providers <span style={{ color: RED }}>*</span>
                  </label>
                  <select
                    required
                    value={form.providers}
                    onChange={(e) => set("providers", e.target.value)}
                    style={inputStyle}
                  >
                    <option value="">Select</option>
                    <option>1</option>
                    <option>2-3</option>
                    <option>4-5</option>
                    <option>6-10</option>
                    <option>11+</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: TEXT, marginBottom: 5 }}>
                    New patients per month (approx.) <span style={{ color: RED }}>*</span>
                  </label>
                  <select
                    required
                    value={form.newPatients}
                    onChange={(e) => set("newPatients", e.target.value)}
                    style={inputStyle}
                  >
                    <option value="">Select</option>
                    <option>1-10</option>
                    <option>11-25</option>
                    <option>26-50</option>
                    <option>51-100</option>
                    <option>100+</option>
                  </select>
                </div>
              </div>

              {/* Challenge */}
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: TEXT, marginBottom: 5 }}>
                  Biggest communication challenge <span style={{ color: RED }}>*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us in a few words..."
                  value={form.challenge}
                  onChange={(e) => set("challenge", e.target.value)}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              {/* Work email */}
              <div style={{ marginBottom: 14 }}>
                <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: TEXT, marginBottom: 5 }}>
                  Work email <span style={{ color: RED }}>*</span>
                </label>
                <input
                  required
                  type="email"
                  placeholder="✉ you@practice.com"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  style={inputStyle}
                />
              </div>

              {/* Checkbox */}
              <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 20 }}>
                <input
                  type="checkbox"
                  id="agreed"
                  required
                  checked={form.agreed}
                  onChange={(e) => set("agreed", e.target.checked)}
                  style={{ marginTop: 2, flexShrink: 0, accentColor: P }}
                />
                <label htmlFor="agreed" style={{ fontSize: 12, color: MUTED, lineHeight: 1.65, cursor: "pointer" }}>
                  I agree to be contacted about early access to DentalDiagnostix&trade;.
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                style={{ width: "100%", background: submitting ? MUTED : P, color: "#fff", border: "none", padding: "14px", borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: submitting ? "not-allowed" : "pointer" }}
              >
                {submitting ? "Submitting..." : "Request Early Access →"}
              </button>
              <p style={{ textAlign: "center", fontSize: 12, color: MUTED, marginTop: 10 }}>🔒 No obligation. Limited early access.</p>
            </form>
          </div>
        </div>
      </section>

      {/* BEST FIT / NOT FIT */}
      <section style={{ background: "#F9FAFB", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          {/* Best fit */}
          <div style={{ background: PL, border: `1px solid ${PB}`, borderRadius: 12, padding: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: "#fff" }}>✓</div>
              <p style={{ fontSize: 17, fontWeight: 700, color: GREEN }}>Best fit for</p>
            </div>
            {[
              { icon: "🏥", title: "General dental practices with new patient flow", sub: "Solo, multi-provider, and group practices." },
              { icon: "👥", title: "Fee-for-service or relationship-driven practices", sub: "Where trust, communication, and case acceptance matter." },
              { icon: "😟", title: "Practices with patients who delay care, avoid treatment, or struggle with trust", sub: "Especially high-value, high-anxiety, or long-gap patients." },
              { icon: "❤️", title: "Dentists who care about communication as much as clinical excellence", sub: "You want better relationships and fewer preventable breakdowns." },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", gap: 12, marginBottom: 16, alignItems: "flex-start" }}>
                <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: TEXT, marginBottom: 3 }}>{item.title}</p>
                  <p style={{ fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.65 }}>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Not fit */}
          <div style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 12, padding: "2rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: RED, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: "#fff" }}>✕</div>
              <p style={{ fontSize: 17, fontWeight: 700, color: RED }}>Not the right fit if</p>
            </div>
            {[
              "You only want another form.",
              "You want clinical diagnosis or treatment planning.",
              "You do not want patients doing anything before the visit.",
              "You are not willing to change how you open the conversation.",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: 10, marginBottom: 14, alignItems: "flex-start" }}>
                <span style={{ color: RED, fontWeight: 700, flexShrink: 0, lineHeight: 1.5 }}>✕</span>
                <p style={{ fontSize: 14, color: TEXT, lineHeight: 1.65 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT EARLY ACCESS INCLUDES */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem" }}>
          <p style={{ fontSize: 32, fontWeight: 700, color: TEXT, textAlign: "center", marginBottom: 16 }}>What early access includes</p>
          <div style={{ width: 44, height: 4, background: P, borderRadius: 2, margin: "0 auto 4rem" }} />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
            {[
              { icon: "🎙️", title: "White-labeled pre-visit intake", body: "Voice or text. Simple for patients. Branded for your practice." },
              { icon: "📄", title: "Patient Behavioral Brief before the appointment", body: "Behavioral terrain, trust friction, and decision patterns before the visit." },
              { icon: "💬", title: "Opening guidance and trust-friction flags", body: "Know what to say, what to avoid, and how to lead the first two minutes." },
              { icon: "⚙️", title: "Practice-specific setup and feedback loop", body: "We tailor the flow to your team and learn from early usage." },
            ].map((item) => (
              <div key={item.title} style={{ textAlign: "center" }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: PL, border: `1px solid ${PB}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, margin: "0 auto 16px" }}>
                  {item.icon}
                </div>
                <p style={{ fontSize: 14, fontWeight: 700, color: TEXT, marginBottom: 8 }}>{item.title}</p>
                <p style={{ fontSize: 13, color: MUTED, fontWeight: 300, lineHeight: 1.75 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: DARK, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "3rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <span style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(109,40,217,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, flexShrink: 0 }}>🏥</span>
            <div>
              <p style={{ fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 6 }}>Better first visits. More trust. Fewer surprises.</p>
              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>
                Start every appointment with insight.{" "}
                <span style={{ color: "#A78BFA" }}>Strengthen trust</span>
                {" · "}
                <span style={{ color: "#A78BFA" }}>Improve acceptance</span>
                {" · "}
                <span style={{ color: "#A78BFA" }}>Reduce stress</span>
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <Link href="/for-practices" style={{ background: P, color: "#fff", padding: "14px 32px", borderRadius: 8, textDecoration: "none", fontSize: 15, fontWeight: 700 }}>Request Early Access &rarr;</Link>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>🔒 No obligation. Limited early access.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#fff", borderTop: `1px solid ${BORDER}`, padding: "2rem 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 14, color: MUTED, fontWeight: 500 }}>DentalDiagnostix &middot; Spheronaut LLC</span>
          <span style={{ fontSize: 11, color: MUTED, display: "flex", gap: 16, alignItems: "center" }}>
            <Link href="/privacy" style={{ color: MUTED, textDecoration: "none" }}>Privacy</Link>
            <span>Behavioral insight only. Not a clinical tool. &copy; 2026</span>
          </span>
        </div>
      </footer>
    </>
  );
}
