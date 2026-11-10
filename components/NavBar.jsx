"use client";
// components/NavBar.jsx
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import dynamic from "next/dynamic";

// Loaded on first open — keeps Motion out of the initial bundle.
const ResumeModal = dynamic(() => import("./ResumeModal"), { ssr: false });

const NAV_CSS = `
  .nav-root {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    height: 60px;
    display: flex; align-items: center;
    transition: background .3s, border-color .3s, backdrop-filter .3s;
  }
  .nav-root.scrolled {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  .nav-inner {
    max-width: calc(1100px + 3rem); margin: 0 auto; padding: 0 1.5rem;
    width: 100%;
    display: flex; align-items: center; justify-content: space-between;
  }
  .nav-logo {
    font-family: 'Geist', sans-serif;
    font-size: 16px; font-weight: 600; letter-spacing: -.02em;
    display: flex; align-items: center; gap: 8px;
    cursor: pointer; border: none; background: none;
  }
  .nav-logo-box {
    width: 30px; height: 30px; border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 600; flex-shrink: 0;
    transition: background .3s, color .3s;
  }
  .nav-links { display: flex; align-items: center; gap: 24px; }
  .nav-link {
    font-family: 'Geist', sans-serif;
    font-size: 14px; font-weight: 400;
    border: none; background: none; cursor: pointer;
    position: relative; padding-bottom: 2px;
    transition: color .2s;
  }
  .nav-link::after {
    content: ''; position: absolute; bottom: -2px; left: 0;
    width: 100%; height: 1px; background: currentColor;
    transform: scaleX(0); transform-origin: left;
    transition: transform .25s ease;
  }
  .nav-link:hover::after, .nav-link.active::after { transform: scaleX(1); }
  .nav-resume {
    font-family: 'Geist', sans-serif; font-size: 13px;
    text-decoration: none; transition: color .2s;
    border: none; background: none; cursor: pointer; padding: 0;
  }
  @media(max-width:600px) {
    .nav-resume { display: none; }
    .nav-links  { gap: 16px; }
  }
`;

export default function NavBar({ dark, t }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [resumeUsed, setResumeUsed] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <style>{NAV_CSS}</style>
      <nav
        aria-label="Main"
        className={`nav-root${scrolled ? " scrolled" : ""}`}
        style={{
          borderBottom: scrolled ? `1px solid ${t.border}` : "1px solid transparent",
          background: scrolled
            ? (dark ? "rgba(9,9,11,.9)" : "rgba(255,255,255,.9)")
            : "transparent",
        }}
      >
        <div className="nav-inner">
          <Link href="/" className="nav-logo" style={{ color: t.text }}>
            <span className="nav-logo-box" style={{ background: t.text, color: t.inv }} aria-hidden="true">NK</span>
            Nitish
          </Link>

          <div className="nav-links">
            {[["About","/about"],["Projects","/projects"],["Designs","/designs"]].map(([label,href]) => (
              <Link
                key={href}
                href={href}
                className={`nav-link ${pathname === href ? "active" : ""}`}
                aria-current={pathname === href ? "page" : undefined}
                style={{ color: pathname === href ? t.text : t.muted }}
              >
                {label}
              </Link>
            ))}

            <button onClick={() => { setResumeUsed(true); setResumeOpen(true); }} className="nav-resume"
              onPointerEnter={() => import("./ResumeModal")} style={{ color: t.muted }}
              onMouseOver={e => e.currentTarget.style.color = t.text}
              onMouseOut={e => e.currentTarget.style.color = t.muted}>
              Resume ↓
            </button>

            <ThemeToggle t={t} />
          </div>
        </div>
      </nav>
      {resumeUsed && <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} t={t} />}
    </>
  );
}
