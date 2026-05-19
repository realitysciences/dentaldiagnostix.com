import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPost } from "../posts";

const P = "#6D28D9";
const PL = "#EDE9FE";
const PB = "#DDD6FE";
const DARK = "#1E1B4B";
const TEXT = "#111827";
const MUTED = "#4A5568";
const BORDER = "#E5E7EB";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — DentalDiagnostix`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

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

      {/* ARTICLE */}
      <main style={{ background: "#fff", minHeight: "80vh" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "3rem 1.5rem 6rem" }}>

          {/* Back link */}
          <Link href="/blog" style={{ fontSize: 12, color: P, textDecoration: "none", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 600, display: "inline-block", marginBottom: "2rem" }}>
            &larr; All posts
          </Link>

          {/* Meta */}
          <p style={{ fontSize: 12, color: MUTED, marginBottom: 16 }}>{post!.date} &middot; {post!.readTime}</p>

          {/* Title */}
          <h1 style={{ fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 700, color: TEXT, lineHeight: 1.2, marginBottom: 16 }}>
            {post!.title}
          </h1>

          {/* Purple accent bar */}
          <div style={{ width: 44, height: 4, background: P, borderRadius: 2, marginBottom: "2.5rem" }} />

          {/* Excerpt */}
          <p style={{ fontSize: 16, color: MUTED, lineHeight: 1.75, marginBottom: "2.5rem", fontStyle: "italic", borderLeft: `3px solid ${PB}`, paddingLeft: 16 }}>
            {post!.excerpt}
          </p>

          {/* Body */}
          <div className="blog-body" dangerouslySetInnerHTML={{ __html: post!.body }} />

          {/* Product callout */}
          <div style={{ marginTop: "4rem", padding: "2rem 2rem", background: PL, border: `1px solid ${PB}`, borderRadius: 12 }}>
            <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "1.5px", color: P, fontWeight: 600, marginBottom: 10 }}>
              DentalDiagnostix&trade;
            </p>
            <p style={{ fontSize: 20, fontWeight: 700, color: DARK, marginBottom: 12, lineHeight: 1.3 }}>
              Know this about your patient before they sit down.
            </p>
            <p style={{ fontSize: 13, color: MUTED, lineHeight: 1.7, marginBottom: 20 }}>
              A behavioral brief that maps the psychology behind a patient&apos;s relationship with their mouth — and delivers it to your chair before the appointment.
            </p>
            <Link href="/for-practices" style={{ display: "inline-block", background: P, color: "#fff", padding: "11px 24px", borderRadius: 7, textDecoration: "none", fontSize: 14, fontWeight: 600 }}>
              Request Early Access &rarr;
            </Link>
          </div>
        </div>
      </main>

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
