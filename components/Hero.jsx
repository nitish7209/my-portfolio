"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { useTypewriter } from "../hooks/useTypewriter";
import { TYPEWRITER_ROLES } from "../lib/data";
import { useSite } from "./SiteShell";
import { loadGsap } from "../lib/gsap";
import { useYearsOfExperience } from "../hooks/useYearsOfExperience";

const HERO_CSS = `
  @keyframes heroCursorBlink {
    0%,100% { opacity: 1; } 50% { opacity: 0; }
  }

  .hero-section {
    min-height: 94vh; display: flex; align-items: center;
    padding: 6rem 1.5rem 3rem;
    position: relative; overflow: hidden;
  }
  .hero-inner {
    max-width: 1100px; margin: 0 auto; width: 100%;
    position: relative; z-index: 1;
  }

  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 4px 12px; border-radius: 100px;
    font-family: 'Geist Mono', monospace; font-size: 12px;
    margin-bottom: 32px;
  }
  .hero-badge-dot {
    width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0;
  }
  .hero-line { display: block; will-change: transform; }
  .hero-heading {
    font-family: 'Geist', sans-serif; font-weight: 500;
    line-height: 1; letter-spacing: -.035em;
    margin-bottom: 28px;
  }
  .hero-role {
    font-family: 'Geist Mono', monospace;
    margin-bottom: 24px;
  }
  .hero-role-cursor {
    display: inline-block;
    animation: heroCursorBlink 1s step-end infinite;
  }
  .hero-desc {
    font-size: 16px; line-height: 1.85; max-width: 560px;
    margin-bottom: 40px;
  }
  .hero-ctas {
    display: flex; gap: 12px; flex-wrap: wrap;
    margin-bottom: 64px;
  }
  .hero-btn-primary, .hero-btn-secondary { display: inline-block; }
  .hero-btn-primary {
    padding: 12px 28px; border-radius: 10px;
    font-weight: 500; font-size: 14px;
    font-family: 'Geist', sans-serif;
    border: 1px solid transparent; cursor: pointer;
    transition: opacity .2s, transform .15s;
  }
  .hero-btn-primary:hover { opacity: .88; }
  .hero-btn-secondary {
    padding: 12px 28px; border-radius: 10px;
    font-weight: 400; font-size: 14px;
    font-family: 'Geist', sans-serif;
    background: transparent; cursor: pointer;
    transition: border-color .2s, color .2s, transform .15s;
  }
  .hero-btn-primary:active, .hero-btn-secondary:active { transform: scale(.98); }

  .hero-stats {
    display: flex;
  }
  .hero-stat { flex: 1; padding: 24px 0; }
  .hero-stat-n {
    font-family: 'Geist', sans-serif; font-size: 30px;
    font-weight: 500; letter-spacing: -.02em;
    font-variant-numeric: tabular-nums;
  }
  .hero-stat-l { font-size: 13px; margin-top: 4px; }

  @media(max-width:500px) {
    .hero-stats { flex-direction: column; }
    .hero-stat {
      border-right: none !important;
      border-bottom-width: 1px; border-bottom-style: solid;
      padding-left: 0 !important;
    }
  }
`;

export default function Hero({ t }) {
  const role = useTypewriter(TYPEWRITER_ROLES);
  const years = useYearsOfExperience();
  const { introDone } = useSite();
  const rootRef  = useRef(null);
  const introRef = useRef(null);

  const introDoneRef = useRef(introDone);

  // Intro timeline: GSAP is fetched after hydration and the timeline is built
  // paused, then played once the loader starts lifting. Everything is painted
  // visible in the static HTML first. Large text (heading, role, description)
  // only moves — it never fades — so it stays a valid LCP candidate.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ctx = null;
    let active = true;

    loadGsap().then(gsap => {
      if (!active || !rootRef.current) return;
      ctx = gsap.context(() => {
        introRef.current = gsap.timeline({ paused: true, defaults: { ease: "power3.out" } })
          .from(".hero-badge", { y: 16, autoAlpha: 0, duration: 0.6 })
          .from(".hero-line",  { y: 48, duration: 1.1, stagger: 0.09, ease: "power4.out" }, "-=0.4")
          .from([".hero-role", ".hero-desc"], { y: 24, duration: 0.9, stagger: 0.07 }, "-=0.9")
          .from(".hero-ctas",  { y: 20, autoAlpha: 0, duration: 0.6 }, "-=0.6")
          .from(".hero-stat",  { y: 24, autoAlpha: 0, duration: 0.6, stagger: 0.07 }, "-=0.45");
      }, rootRef.current);
      if (introDoneRef.current) introRef.current.play();
    });

    return () => {
      active = false;
      ctx?.revert();
      introRef.current = null;
    };
  }, []);

  useEffect(() => {
    introDoneRef.current = introDone;
    if (introDone) introRef.current?.play();
  }, [introDone]);

  return (
    <>
      <style>{HERO_CSS}</style>
      <section ref={rootRef} className="hero-section">
        <div className="hero-inner">

          {/* Status badge */}
          <div className="hero-badge" style={{ border: `1px solid ${t.border}`, color: t.muted }}>
            <span className="hero-badge-dot" style={{ background: t.accent }} />
            Available for new opportunities
          </div>

          {/* Heading */}
          <h1
            className="hero-heading"
            style={{ fontSize: "clamp(3rem,8.5vw,7rem)", color: t.text }}
          >
            <span className="hero-line">I&apos;m Nitish Kumar</span>
            <span className="hero-line" style={{ color: t.muted }}>MERN Stack Developer</span>
            <span className="hero-line" style={{ color: t.dim }}>&amp; DevOps Engineer</span>
          </h1>

          {/* Typewriter role */}
          <div
            className="hero-role"
            style={{ fontSize: "clamp(.9rem,1.8vw,1rem)", color: t.muted }}
          >
            <span style={{ color: t.text }}>→</span>{" "}{role}
            <span className="hero-role-cursor" style={{ color: t.muted }}>_</span>
          </div>

          {/* Description */}
          <p className="hero-desc" style={{ color: t.muted }}>
            I build MERN applications and the pipelines that ship them. React and
            Node.js on the front and back, GitHub Actions, Docker and Kubernetes
            for delivery.
          </p>

          {/* CTAs */}
          <div className="hero-ctas">
            <a
              href="mailto:nitish.kumar.cs57@mail.com"
              className="hero-btn-primary"
              style={{ background: t.text, color: t.inv }}
            >
              Let&apos;s connect
            </a>
            <Link
              href="/about"
              className="hero-btn-secondary"
              style={{ border: `1px solid ${t.border}`, color: t.muted }}
              onMouseOver={e => { e.currentTarget.style.borderColor = t.muted; e.currentTarget.style.color = t.text; }}
              onMouseOut={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.muted; }}
            >
              About me
            </Link>
          </div>

          {/* Stats */}
          <div className="hero-stats" style={{ borderTop: `1px solid ${t.border}` }}>
            {[
              [years,  "Years of experience"],
              ["10+",  "Projects delivered"],
              ["3",    "Industries served"],
            ].map(([n, l], i) => (
              <div
                key={l}
                className="hero-stat"
                style={{
                  borderRight: i < 2 ? `1px solid ${t.border}` : "none",
                  paddingLeft: i > 0 ? 28 : 0,
                }}
              >
                <div className="hero-stat-n" style={{ color: t.text }}>{n}</div>
                <div className="hero-stat-l" style={{ color: t.muted }}>{l}</div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
