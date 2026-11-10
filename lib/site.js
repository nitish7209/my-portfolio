// lib/site.js
// Site-wide identity used by metadata, JSON-LD, sitemap, robots and llms.txt.

// Netlify exposes the primary site URL as `URL` at build time.
// Set NEXT_PUBLIC_SITE_URL to override it (e.g. for a custom domain).
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  "http://localhost:3000"
).replace(/\/$/, "");

export const SITE = {
  name:        "Nitish Kumar",
  jobTitle:    "MERN Stack Developer & DevOps Engineer",
  description:
    "Portfolio of Nitish Kumar — MERN Stack Developer & DevOps Engineer specialising in MERN stack and cloud-native solutions.",
  email:       "nitish.kumar.cs57@mail.com",
  phone:       "+917294002072",
  linkedin:    "https://www.linkedin.com/in/nitishkweb/",
  github:      "https://github.com/nitish7209",
};

// Route map shared by NavBar, sitemap and llms.txt.
export const ROUTES = {
  home:     { path: "/",         label: "Home",     desc: "Overview, experience, featured projects and skills." },
  about:    { path: "/about",    label: "About",    desc: "Background, quick facts, achievements and contact details." },
  projects: { path: "/projects", label: "Projects", desc: "Full list of web and DevOps projects with live links." },
  designs:  { path: "/designs",  label: "Designs",  desc: "UI/UX, motion and graphic design work." },
};

export const RESUMES = [
  { id: "backend", label: "Backend", desc: "Node.js, Express, MongoDB, APIs",  file: "/resume/Nitish_Kumar_Backend_CV.pdf" },
  { id: "devops",  label: "DevOps",  desc: "Docker, Kubernetes, CI/CD, Cloud", file: "/resume/Nitish_Kumar_DevOps_CV.pdf" },
];
