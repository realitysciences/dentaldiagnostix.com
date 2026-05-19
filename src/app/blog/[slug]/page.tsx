import { notFound } from "next/navigation";
import Link from "next/link";
import { posts, getPost } from "../posts";

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
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "#F7F5F0", borderBottom: "0.5px solid #E2DDD5",
      }}>
        <div style={{
          maxWidth: 1100, margin: "0 auto", padding: "0 2rem",
          height: 56, display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: 0 }}>
            <span style={{ fontFamily: "Lora, Georgia, serif", fontSize: 17, color: "#1A2B3C" }}>Dental</span><span style={{ fontFamily: "Lora, Georgia, serif", fontSize: 17, color: "#0E6B5E" }}>Diagnostix</span>
            <sup style={{ fontSize: 9, color: "#0E6B5E", verticalAlign: "super", lineHeight: 0, marginLeft: 1 }}>&trade;</sup>
          </Link>
          <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
            <Link href="/blog" style={{ fontSize: 13, color: "#4A5568", textDecoration: "none" }}>← All posts</Link>
            <Link href="/signup" style={{
              background: "#0E6B5E", color: "#fff",
              fontSize: 13, padding: "8px 20px", borderRadius: 6,
              textDecoration: "none",
            }}>Request access</Link>
          </div>
        </div>
      </nav>

      <main style={{ maxWidth: 700, margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
        <Link href="/blog" style={{ fontSize: 12, color: "#0E6B5E", textDecoration: "none", textTransform: "uppercase", letterSpacing: "1px", fontWeight: 500 }}>
          ← Blog
        </Link>

        <h1 style={{
          fontFamily: "Lora, Georgia, serif", fontSize: "clamp(26px, 4vw, 38px)",
          fontWeight: 400, color: "#1A2B3C", lineHeight: 1.25,
          marginTop: "1.5rem", marginBottom: "1rem",
        }}>
          {post.title}
        </h1>

        <p style={{ fontSize: 13, color: "#4A5568", marginBottom: "3rem" }}>
          {post.date} &middot; {post.readTime}
        </p>

        <div
          className="blog-body"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        <div style={{
          marginTop: "4rem", padding: "2rem", background: "#F7F5F0",
          border: "0.5px solid #E2DDD5", borderRadius: 12,
        }}>
          <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "1.5px", color: "#0E6B5E", fontWeight: 500, marginBottom: 10 }}>
            DentalDiagnostix
          </p>
          <p style={{ fontFamily: "Lora, Georgia, serif", fontSize: 20, color: "#1A2B3C", marginBottom: 12, fontWeight: 400 }}>
            Know this about your patient before they sit down.
          </p>
          <p style={{ fontSize: 13, color: "#4A5568", lineHeight: 1.7, marginBottom: 20 }}>
            A behavioral intake that maps the psychology behind a patient&apos;s relationship with their mouth — and delivers it to your chair before the appointment.
          </p>
          <Link href="/signup" style={{
            display: "inline-block", background: "#0E6B5E", color: "#fff",
            padding: "11px 24px", borderRadius: 7, textDecoration: "none",
            fontSize: 14, fontWeight: 500,
          }}>
            Request access
          </Link>
        </div>
      </main>

      <footer style={{ background: "#F7F5F0", borderTop: "0.5px solid #E2DDD5", padding: "2rem 0" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "Lora, Georgia, serif", fontSize: 14, color: "#4A5568" }}>DentalDiagnostix &middot; Spheronaut LLC</span>
          <span style={{ fontSize: 11, color: "#4A5568", display: "flex", gap: 16 }}>
            <Link href="/privacy" style={{ color: "#4A5568", textDecoration: "none" }}>Privacy</Link>
            <span>Behavioral intake only. Not a clinical tool. &copy; 2026</span>
          </span>
        </div>
      </footer>
    </>
  );
}
