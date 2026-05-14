import Link from "next/link";
import { posts } from "./posts";

export const metadata = {
  title: "Blog — DentalDiagnostix",
  description: "Behavioral insights for dentists. Written by a licensed dentist.",
};

export default function BlogIndex() {
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
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "baseline" }}>
            <span style={{ fontFamily: "Lora, Georgia, serif", fontSize: 17, color: "#1A2B3C" }}>Dental</span>
            <span style={{ fontFamily: "Lora, Georgia, serif", fontSize: 17, color: "#0E6B5E" }}>Diagnostix</span>
            <sup style={{ fontSize: 9, color: "#0E6B5E", verticalAlign: "super", lineHeight: 0, marginLeft: 1 }}>&trade;</sup>
          </Link>
          <Link href="/signup" style={{
            background: "#0E6B5E", color: "#fff",
            fontSize: 13, padding: "8px 20px", borderRadius: 6, textDecoration: "none",
          }}>Request access</Link>
        </div>
      </nav>

      <main style={{ maxWidth: 760, margin: "0 auto", padding: "4rem 1.5rem 6rem" }}>
        <p style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "1.5px", color: "#0E6B5E", fontWeight: 500, marginBottom: 14 }}>From the practice</p>
        <h1 style={{ fontFamily: "Lora, Georgia, serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 400, color: "#1A2B3C", marginBottom: "3rem", lineHeight: 1.2 }}>
          Behavioral insights for dentists.
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {posts.map((post) => (
            <article key={post.slug} style={{ borderBottom: "0.5px solid #E2DDD5", paddingBottom: "2.5rem" }}>
              <p style={{ fontSize: 12, color: "#4A5568", marginBottom: 10 }}>{post.date} &middot; {post.readTime}</p>
              <h2 style={{ fontFamily: "Lora, Georgia, serif", fontSize: "clamp(18px, 2.5vw, 24px)", fontWeight: 400, color: "#1A2B3C", marginBottom: 10, lineHeight: 1.3 }}>
                <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                  {post.title}
                </Link>
              </h2>
              <p style={{ fontSize: 14, color: "#4A5568", lineHeight: 1.75, marginBottom: 14 }}>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} style={{ fontSize: 13, color: "#0E6B5E", textDecoration: "none", fontWeight: 500 }}>
                Read more →
              </Link>
            </article>
          ))}
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
