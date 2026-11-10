"use client";
// app-pages/AboutPage.jsx
import { EXPERIENCE } from "../lib/data";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";
import { useYearsOfExperience } from "../hooks/useYearsOfExperience";

const CSS = `
  @keyframes aboutFadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .about-page { max-width: 1100px; margin: 0 auto; padding: 4rem 1.5rem 6rem; }
  .about-top  { margin-bottom: 52px; animation: aboutFadeUp .55s both; }
  .about-tag  { font-family: 'Geist Mono', monospace; font-size: 11px; margin-bottom: 10px; }
  .about-h1   {
    font-family: 'Geist', sans-serif; font-weight: 500;
    letter-spacing: -.035em; line-height: 1; margin-bottom: 14px;
  }
  .about-sub  { font-family: 'Geist', sans-serif; font-weight: 400; letter-spacing: -.03em; }

  .about-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 4rem; margin-bottom: 5rem; }
  .about-bq   { font-size: 16px; font-style: italic; line-height: 1.85; margin-bottom: 28px; padding-left: 20px; }
  .about-p    { font-size: 15px; line-height: 1.9; margin-bottom: 18px; }
  .about-socials { display: flex; gap: 10px; flex-wrap: wrap; }
  .about-social  {
    padding: 10px 16px; border-radius: 8px; font-size: 13px;
    font-family: 'Geist', sans-serif; text-decoration: none;
    transition: border-color .2s, color .2s, background-color .2s;
    display: flex; align-items: center; gap: 8px;
  }
  .about-contact { margin-top: 32px; }
  .about-contact-item {
    display: flex; align-items: center; gap: 10px;
    padding: 12px 0; font-size: 14px; line-height: 1.6;
  }

  .about-list-title { font-family: 'Geist Mono', monospace; font-size: 12px; margin-bottom: 16px; }
  .about-list-item  {
    font-size: 14px; padding: 11px 0; display: flex; gap: 10px; line-height: 1.6;
  }

  @media(max-width:768px) { .about-grid { grid-template-columns: 1fr; } }
`;

export function AboutPage({ t }) {
  const years = useYearsOfExperience();
  return (
    <>
      <style>{CSS}</style>
      <div className="about-page">
        <div className="about-top">
          <div className="about-tag" style={{ color: t.dim }}>// about me</div>
          <h1 className="about-h1" style={{ fontSize: "clamp(2.5rem,8vw,5.5rem)", color: t.text }}>
            Hello,<br />I&apos;m Nitish Kumar
          </h1>
          <h2 className="about-sub" style={{ fontSize: "clamp(1.2rem,3vw,2rem)", color: t.muted }}>
            MERN Stack Developer & DevOps Engineer.
          </h2>
        </div>

        <div className="about-grid">
          <div style={{ animation: "aboutFadeUp .55s .1s both" }}>
            <blockquote
              className="about-bq"
              style={{ borderLeft: `2px solid ${t.border}`, color: t.muted }}
            >
              "I don&apos;t just code — I craft user-first digital experiences."
            </blockquote>
            <p className="about-p" style={{ color: t.muted }}>
              With experience across product and platform teams, I combine frontend
              engineering with DevOps to build scalable apps that are resilient in
              production.
            </p>
            <p className="about-p" style={{ color: t.muted, marginBottom: 32 }}>
              From building robust Node.js backends to deploying Kubernetes clusters,
              I thrive at the intersection of development and operations — shipping
              production-ready systems that scale with real users.
            </p>
            <div className="about-socials">
              <a
                href="https://www.linkedin.com/in/nitishkweb/"
                target="_blank"
                rel="noopener noreferrer"
                className="about-social"
                style={{ border: `1px solid ${t.border}`, color: t.muted }}
                onMouseOver={e => { e.currentTarget.style.borderColor = t.muted; e.currentTarget.style.color = t.text; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.muted; }}
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>
              <a
                href="https://github.com/nitish7209"
                target="_blank"
                rel="noopener noreferrer"
                className="about-social"
                style={{ border: `1px solid ${t.border}`, color: t.muted }}
                onMouseOver={e => { e.currentTarget.style.borderColor = t.muted; e.currentTarget.style.color = t.text; }}
                onMouseOut={e => { e.currentTarget.style.borderColor = t.border; e.currentTarget.style.color = t.muted; }}
              >
                <FaGithub size={18} />
                GitHub
              </a>
            </div>
            <div className="about-contact">
              <div className="about-list-title" style={{ color: t.dim }}>Contact</div>
              <div className="about-contact-item" style={{ color: t.muted }}>
                <Mail size={16} style={{ color: t.dim }} />
                <a href="mailto:nitish.kumar.cs57@mail.com" style={{ color: t.muted, textDecoration: 'none' }}>nitish.kumar.cs57@mail.com</a>
              </div>
              <div className="about-contact-item" style={{ color: t.muted }}>
                <Phone size={16} style={{ color: t.dim }} />
                <a href="tel:+917294002072" style={{ color: t.muted, textDecoration: 'none' }}>+91 7294002072</a>
              </div>
            </div>
          </div>

          <div style={{ animation: "aboutFadeUp .55s .2s both" }}>
            <div style={{ marginBottom: 32 }}>
              <div className="about-list-title" style={{ color: t.dim }}>Quick Info</div>
              {[
                `${years} years of experience in MERN Stack Development`,
                "Specialized in MERN stack (MongoDB, Express, React, Node.js)",
                "Hands-on DevOps experience with Docker, Kubernetes & CI/CD pipelines",
                "Freelance & Full-time project experience across industries",
                "Strong focus on UI/UX, scalability, and performance optimization",
              ].map(item => (
                <div key={item} className="about-list-item" style={{ borderBottom: `1px solid ${t.border}`, color: t.muted }}>
                  <span style={{ color: t.dim, flexShrink: 0 }}>→</span>{item}
                </div>
              ))}
            </div>
            <div>
              <div className="about-list-title" style={{ color: t.dim }}>Achievements</div>
              {[
                "Finalist at CodeBite Hackathon 2023",
                "Delivered 10+ successful freelance & enterprise projects",
                "Worked with agencies in design & SaaS domains",
                "Recognized for solving complex challenges with clean architecture",
              ].map(item => (
                <div key={item} className="about-list-item" style={{ borderBottom: `1px solid ${t.border}`, color: t.muted }}>
                  <span style={{ color: t.dim, flexShrink: 0 }}>★</span>{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
