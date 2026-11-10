// lib/data.js

export const SKILL_ICONS = [
  { name:"React",           id:"react",       category:"dev" },
  { name:"Next.js",         id:"nextjs",      category:"dev" },
  { name:"TypeScript",      id:"ts",          category:"dev" },
  { name:"JavaScript",      id:"js",          category:"dev" },
  { name:"HTML",            id:"html",        category:"dev" },
  { name:"CSS",             id:"css",         category:"dev" },
  { name:"Tailwind CSS",    id:"tailwind",    category:"dev" },
  { name:"Node.js",         id:"nodejs",      category:"dev" },
  { name:"Express.js",      id:"express",     category:"dev" },
  { name:"MongoDB",         id:"mongodb",     category:"dev" },
  { name:"MySQL",           id:"mysql",       category:"dev" },
  { name:"Git",             id:"git",         category:"dev" },
  { name:"Docker",          id:"docker",      category:"devops" },
  { name:"Kubernetes",      id:"kubernetes",  category:"devops" },
  { name:"Helm",            id:"helm", custom: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg", category:"devops" },
  { name:"GitHub Actions",  id:"githubactions", category:"devops" },
  { name:"Azure DevOps",    id:"azuredevops", custom: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg", category:"devops" },
  { name:"Azure",           id:"azure",       category:"devops" },
  { name:"GCP",             id:"gcp",         category:"devops" },
  { name:"Terraform",       id:"terraform",   category:"devops" },
  { name:"Bash",            id:"bash", custom: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", category:"devops" },
  { name:"Argo CD",         id:"argocd", custom: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg", category:"devops" },
  { name:"Argo Workflows",  id:"argoworkflows", custom: "https://cdn.simpleicons.org/argo/EF7B4D", category:"devops" },
];

export const EXPERIENCE = [
  {
    role:    "MERN Stack Developer",
    company: "Vizualytic Data Solutions Pvt. Ltd.",
    period:  "Jan 2024 – Present",
    type:    "Full-time",
    points:  [
      "Built MERN stack web apps with React.js, Node.js & MongoDB",
      "Developed reusable component systems for better scalability",
      "Integrated APIs & optimised performance across platforms",
      "Implemented CI/CD pipelines with GitHub Actions & Docker",
    ],
  },
  {
    role:    "Freelance MERN Stack Developer",
    company: "Self-Employed",
    period:  "Nov 2023 – Present",
    type:    "Freelance",
    points:  [
      "Delivered full-stack MERN apps for diverse clients",
      "Designed intuitive frontends with secure backend APIs",
      "Optimised performance & implemented responsive layouts",
      "Shipped scalable solutions with clean architecture",
    ],
  },
  {
    role:    "Freelance DevOps Engineer",
    company: "Self-Employed",
    period:  "Sept 2023 – Present",
    type:    "Freelance",
    points:  [
      "Built CI/CD pipelines using GitHub Actions & Docker",
      "Configured AWS & DigitalOcean for high-availability",
      "Automated deployment workflows to streamline releases",
      "Monitored system performance & infrastructure reliability",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Three-Tier GCP Platform",
    size:  "large",
    desc:  "End-to-end cloud-native platform on GKE with GitOps delivery via ArgoCD, Workload Identity Federation eliminating long-lived credentials, KEDA event-driven autoscaling, and full observability through Prometheus, Grafana & Loki.",
    tags:  ["GCP", "Kubernetes", "ArgoCD", "Terraform", "GitHub Actions", "KEDA", "Prometheus", "Helm"],
    live:  "#",
    year:  "2026",
    badge: "DevOps",
  },
  {
    title: "Taskara",
    size:  "large",
    desc:  "Production-grade multi-tenant SaaS ticket & project management system. Built with Next.js, Node.js & MongoDB — full tenant isolation, role-based access control, and real-time tracking for teams across organisations.",
    tags:  ["Next.js", "Node.js", "MongoDB", "Express", "TypeScript", "Multi-tenant", "SaaS"],
    live:  "https://taskara.vizualyticsolution.com/",
    year:  "2026",
    badge: "SaaS",
  },
  {
    title: "authkit-api",
    size:  "small",
    desc:  "npm package that generates a complete, tested Express auth API in one command. JWT with rotating refresh tokens and reuse detection, admin user management, Zod validation, Swagger docs, 100+ Vitest tests, Docker and GitHub Actions CI — on MongoDB or PostgreSQL.",
    tags:  ["Node.js","Express","MongoDB","PostgreSQL","JWT","Docker","GitHub Actions"],
    live:  "https://www.npmjs.com/package/authkit-api",
    linkLabel: "View on npm",
    year:  "2026",
    badge: "npm package",
  },
  {
    title: "Radar",
    size:  "small",
    desc:  "Merged contribution to Radar, Skyhook's open-source Kubernetes UI. Made row checkboxes easier to reach in resource tables — hidden by default, and once turned on Radar remembers the choice across every table.",
    tags:  ["Kubernetes","React","TypeScript","Open source"],
    live:  "https://github.com/skyhook-io/radar/pull/2114",
    linkLabel: "View merged PR",
    year:  "2026",
    badge: "Open source",
  },
  {
    title: "Ts-cloud",
    size:  "small",
    desc:  "Cloud-native SaaS platform with a React frontend and scalable Node.js backend infrastructure deployed on cloud.",
    tags:  ["React","Node.js","MongoDB","Cloud","SaaS"],
    live:  "https://tscloud-ui-dev.traydstream.io/",
    year:  "2025",
  },
  {
    title: "Calsphere",
    size:  "small",
    desc:  "Full-featured calendar & scheduling application with real-time collaboration.",
    tags:  ["React","MongoDB","Express","REST API"],
    live:  "https://calsphere-forntend-new.vercel.app/login",
    year:  "2024",
  },
  {
    title: "Vaculator",
    size:  "small",
    desc:  "Vacation cost calculator with dynamic inputs, interactive charts and responsive UI.",
    tags:  ["React","JavaScript","Tailwind"],
    live:  "https://vds-vaculator.vercel.app/",
    year:  "2023",
  },
  {
    title: "Aditi-one",
    size:  "small",
    desc:  "Modern web platform with optimised performance and clean full-stack MERN architecture.",
    tags:  ["Next.js","TypeScript","Node.js","MongoDB"],
    live:  "#",
    year:  "2024",
  },
];

// w/h = intrinsic size (prevents layout shift). `video` replaces a heavy GIF.
export const DESIGNS = [
  { title:"Game Dashboard",     cat:"UI/UX",   src:"https://portfolio-eight-swart-55.vercel.app/_next/image?url=%2FMyDesign%2F1673037142250.jpg&w=828&q=75", w:828, h:621 },
  { title:"Barba Animation",    cat:"Motion",  src:"https://portfolio-eight-swart-55.vercel.app/_next/image?url=%2FMyDesign%2Fbarba.gif&w=828&q=75", w:800, h:600, video:"/designs/barba.webm", poster:"/designs/barba-poster.webp" },
  { title:"Clock Landing Page", cat:"UI/UX",   src:"https://portfolio-eight-swart-55.vercel.app/_next/image?url=%2FMyDesign%2Fclock.png&w=828&q=75", w:828, h:474 },
  { title:"Editorial Layout",   cat:"Graphic", src:"https://portfolio-eight-swart-55.vercel.app/_next/image?url=%2FMyDesign%2FFrame%202.png&w=828&q=75", w:828, h:532 },
  { title:"Golden USA Poster",  cat:"Graphic", src:"https://portfolio-eight-swart-55.vercel.app/_next/image?url=%2FMyDesign%2Fgolden%20usa.png&w=828&q=75", w:828, h:513 },
  { title:"Gucci Campaign",     cat:"Graphic", src:"https://portfolio-eight-swart-55.vercel.app/_next/image?url=%2FMyDesign%2FGucci.png&w=828&q=75", w:828, h:466 },
  { title:"Hotel Booking App",  cat:"UI/UX",   src:"https://portfolio-eight-swart-55.vercel.app/_next/image?url=%2FMyDesign%2FHotel%20booking.png&w=828&q=75", w:828, h:466 },
  { title:"Web Dashboard",      cat:"UI/UX",   src:"https://portfolio-eight-swart-55.vercel.app/_next/image?url=%2FMyDesign%2FScreenshot%20(42%27).png&w=828&q=75", w:567, h:901 },
  { title:"Sneaker Promo",      cat:"Graphic", src:"https://portfolio-eight-swart-55.vercel.app/_next/image?url=%2FMyDesign%2Fshoes.png&w=828&q=75", w:828, h:589 },
  { title:"Titan Watch Visual", cat:"Graphic", src:"https://portfolio-eight-swart-55.vercel.app/_next/image?url=%2FMyDesign%2FTitan%20watch.png&w=828&q=75", w:828, h:483 },
  { title:"Experimental",       cat:"Graphic", src:"https://portfolio-eight-swart-55.vercel.app/_next/image?url=%2FMyDesign%2FUntitled.png&w=828&q=75", w:828, h:591 },
];

export const MARQUEE = [
  "React.js","Next.js","TypeScript","Node.js","MongoDB",
  "Docker","Kubernetes","GitHub Actions","AWS","Terraform","CI/CD",
];

export const TYPEWRITER_ROLES = [
  "MERN Stack Developer",
  "DevOps Engineer",
];
