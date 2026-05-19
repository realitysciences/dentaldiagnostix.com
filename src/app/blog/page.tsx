import Link from "next/link";
import { posts } from "./posts";

const P = "#6D28D9";
const PL = "#EDE9FE";
const PB = "#DDD6FE";
const DARK = "#1E1B4B";
const TEXT = "#111827";
const MUTED = "#4A5568";
const BORDER = "#E5E7EB";

export const metadata = {
  title: "Blog — DentalDiagnostix",
  description: "Behavioral insights for dentists. Written by a licensed dentist.",
};

export default function BlogIndex() {
  return (
    <>
      {/* NAV */}
      <nav style={{ position: "sticky", top: 0, zIndex: 50, background: "#fff", borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 2rem", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: 0 }}>
            <span style={{ fontSize: 17, fontWeight: 700, color: DARK }}>Dental</span><span style={{ fontSize: 17, fontWeight: 700, color: P }}>Diagnostix</span>
            <sup style={{ fontSize: 9, color: P, verticalAlign: "super", lineHeight: 0, marginLeft: 1 }}>&trade;</sup>
          </Link>
          <div className="lp-nav-links" style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
            <Link href="/how-it-works" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>How it works</Link>
            <Link href="/sample-report" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>Sample report</Link>
            <Link href="/for-practices" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>For practices</Link>
            <Link href="/blog" style={{ fontSize: 13, color: P, textDecoration: "none", fontWeight: 600, borderBottom: `2px solid ${P}`, paddingBottom: 2 }}>Blog</Link>
            <Link href="/modules" style={{ fontSize: 13, color: MUTED, textDecoration: "none" }}>Modules</Link>
            <Link href="/for-practices" style={{ background: P, color: "#fff", fontSize: 13, fontWeight: 600, padding: "9px 20px", borderRadius: 7, textDecoration: "none" }}>Request Early Access &rarr;</Link>
          </div>
        </div>
      </nav>

      {/* HEADER */}
      <section style={{ background: "#fff", borderBottom: `1px solid ${BORDER}`, padding: "4rem 0 3rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 2rem" }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "1.5px", color: P, fontWeight: 600, marginBottom: 14 }}>From the practice</p>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: TEXT, marginBottom: 16, lineHeight: 1.15 }}>
            Behavioral insights for dentists.
          </h1>
          <p style={{ fontSize: 15, color: MUTED, fontWeight: 300, lineHeight: 1.7, maxWidth: 540 }}>
            Written by a licensed dentist. On the psychology behind why patients do what they do — and what to do about it.
          </p>
        </div>
      </section>

      {/* POST LIST */}
      <main style={{ background: "#F9FAFB", minHeight: "60vh", padding: "3rem 0 6rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {posts.map((post) => (
            <article key={post.slug} style={{ background: "#fff", border: `1px solid ${BORDER}`, borderRadius: 12, padding: "28px 32px", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
              <p style={{ fontSize: 12, color: MUTED, marginBottom: 10 }}>{post.date} &middot; {post.readTime}</p>
              <h2 style={{ fontSize: "clamp(17px, 2.5vw, 22px)", fontWeight: 700, color: TEXT, marginBottom: 10, lineHeight: 1.3 }}>
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  {post.title}
                </Link>
              </h2>
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.75, marginBottom: 16 }}>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} style={{ fontSize: 13, color: P, textDecoration: "none", fontWeight: 600 }}>
                Read more &rarr;
              </Link>
            </article>
          ))}
        </div>
      </main>

      {/* CTA */}
      <section style={{ background: DARK, padding: "4rem 2rem" }}>
        <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "2rem", flexWrap: "wrap" }}>
          <div>
            <p style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 6 }}>Know your patient before they sit down.</p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>DentalDiagnostix&trade; delivers a behavioral brief before every appointment.</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <Link href="/for-practices" style={{ background: P, color: "#fff", padding: "12px 28px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 700, whiteSpace: "nowrap" }}>Request Early Access &rarr;</Link>
            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>🔒 No obligation. Limited early access.</p>
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
