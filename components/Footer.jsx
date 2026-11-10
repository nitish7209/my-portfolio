"use client";
// components/Footer.jsx
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

export default function Footer({ t }) {
  return (
    <footer style={{ borderTop: `1px solid ${t.border}`, padding: "2rem 1.5rem" }}>
      <div
        style={{
          maxWidth: 1100, margin: "0 auto",
          display: "flex", flexDirection: "column", gap: 24,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 32 }}>
          <div>
            <Link
              href="/"
              style={{
                fontFamily: "'Geist', sans-serif", fontWeight: 600,
                fontSize: 16, color: t.text, letterSpacing: "-.02em",
                display: "flex", alignItems: "center", gap: 8,
                border: "none", background: "none", cursor: "pointer",
                marginBottom: 12,
              }}
            >
              <span
                style={{
                  width: 26, height: 26, borderRadius: 7,
                  background: t.text, color: t.inv,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 600,
                }}
                aria-hidden="true"
              >
                NK
              </span>
              Nitish Kumar
            </Link>
            <div style={{ display: "flex", gap: 12 }}>
              <a
                href="https://www.linkedin.com/in/nitishkweb/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: 8, borderRadius: 6, border: `1px solid ${t.border}`,
                  color: t.muted, display: "flex", alignItems: "center",
                  transition: "border-color .2s, color .2s", textDecoration: "none",
                }}
                onMouseOver={e => { e.currentTarget.style.borderColor = t.muted; e.currentTarget.style.color = t.text; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.muted; }}
              >
                <FaLinkedin size={18} aria-hidden="true" />
              </a>
              <a
                href="https://github.com/nitish7209"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: 8, borderRadius: 6, border: `1px solid ${t.border}`,
                  color: t.muted, display: "flex", alignItems: "center",
                  transition: "border-color .2s, color .2s", textDecoration: "none",
                }}
                onMouseOver={e => { e.currentTarget.style.borderColor = t.muted; e.currentTarget.style.color = t.text; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.muted; }}
              >
                <FaGithub size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontFamily: "'Geist Mono', monospace", fontSize: 12, color: t.dim, marginBottom: 4 }}>
              Contact
            </div>
            <a
              href="mailto:nitish.kumar.cs57@mail.com"
              style={{
                display: "flex", alignItems: "center", gap: 8,
                fontSize: 13, color: t.muted, textDecoration: "none",
                fontFamily: "'Geist', sans-serif",
              }}
            >
              <Mail size={14} />
              nitish.kumar.cs57@mail.com
            </a>
            <a
              href="tel:+917294002072"
              style={{
                display: "flex", alignItems: "center", gap: 8,
                fontSize: 13, color: t.muted, textDecoration: "none",
                fontFamily: "'Geist', sans-serif",
              }}
            >
              <Phone size={14} />
              +91 7294002072
            </a>
          </div>
        </div>

        <div
          style={{
            borderTop: `1px solid ${t.border}`,
            paddingTop: 16,
            textAlign: "center",
          }}
        >
          <span style={{ fontFamily: "'Geist Mono', monospace", fontSize: 12, color: t.dim }}>
            © {new Date().getFullYear()} Nitish Kumar
          </span>
        </div>
      </div>
    </footer>
  );
}
