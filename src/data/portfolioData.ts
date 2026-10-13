export interface Profile {
  name: string;
  role: string;
  tagline: string;
  status: string;
  email: string;
  phone: string;
  socials: {
    linkedin: string;
    dribbble: string;
    github: string;
  };
  resumeUrl: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  website?: string;
  appStore?: string;
  playStore?: string;
  metrics?: string;
  deliverables?: string[];
  overview?: string;
  accent?: {
    primary: string;
    glow: string;
    badge: string;
    border: string;
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
}

export interface SkillsData {
  productUX: string[];
  uiBranding: string[];
  frontendAI: string[];
  tools: string[];
}

export interface PortfolioDataType {
  profile: Profile;
  projects: Project[];
  experience: ExperienceItem[];
  skills: SkillsData;
}

export const portfolioData: PortfolioDataType = {
  profile: {
    name: "Pavel Dinesh",
    role: "UI/UX Designer & Frontend UI Developer",
    tagline: "Bridging high-impact visual design systems with responsive, production-ready frontend code.",
    status: "Available for Full-time Roles & Contracts",
    email: "paveldinesh111@gmail.com",
    phone: "+91 7012798235",
    socials: {
      linkedin: "https://www.linkedin.com",
      dribbble: "https://dribbble.com",
      github: "https://github.com"
    },
    resumeUrl: "/resume.pdf"
  },
  projects: [
    {
      id: "01",
      title: "Tiny bits of love",
      category: "Mobile App • Relationship Wellness",
      year: "2026",
      description: "Mindful relationship wellness app designed around nurturing bonds through daily affirmations, shared streaks, and gamified growth.",
      tags: ["Mobile UX", "Gamification", "Design Systems", "iOS Design"],
      image: "/images/projects/tiny-bits-of-love.png",
      link: "/work/tiny-bits-of-love",
      website: "https://tinybits.app/",
      appStore: "https://apps.apple.com/us/app/tiny-bits-of-love/id6757837595",
      playStore: "https://play.google.com/store/apps/details?id=com.tinybits",
      metrics: "Daily active streak retention increased by 42% with interactive leaf affirmation loops.",
      deliverables: ["Mobile UI/UX", "Gamified Systems", "Design System", "Interactive Prototype"],
      overview: "A mindful relationship wellness app designed to help couples and close friends stay connected. Features gamified connection trees, interactive leaf affirmations, daily check-in streaks, and custom micro-interactions.",
      accent: {
        primary: "#34d399",
        glow: "rgba(52, 211, 153, 0.15)",
        badge: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
        border: "hover:border-emerald-500/50 hover:shadow-emerald-500/10",
      }
    },
    {
      id: "02",
      title: "Descartes Platform",
      category: "Web Application • Data Visualization",
      year: "2026",
      description: "Data-heavy platform focused on clear interaction design and information hierarchy.",
      tags: ["Data Viz", "Interaction Design", "Prototyping"],
      image: "/images/projects/descartes.png",
      link: "/work/descartes",
      metrics: "99.4% user satisfaction in multi-variable analytics workflows.",
      deliverables: ["Data Visualization", "Micro-Interactions", "Responsive Dashboard", "UX Research"],
      overview: "An enterprise analytics suite designed to turn dense data streams into actionable visual insights. Features custom charting paradigms, dynamic filtering palettes, and ultra-fast keyboard shortcuts.",
      accent: {
        primary: "#38bdf8",
        glow: "rgba(56, 189, 248, 0.15)",
        badge: "text-sky-400 bg-sky-500/10 border-sky-500/30",
        border: "hover:border-sky-500/50 hover:shadow-sky-500/10",
      }
    },
    {
      id: "03",
      title: "Armia Systems Corporate",
      category: "Landing Page • AI-Assisted Development",
      year: "2026",
      description: "Designed and developed using an AI-assisted prompt-driven workflow — true design-to-code.",
      tags: ["Design-to-Code", "AI Workflows", "Responsive UI", "Branding"],
      image: "/images/projects/placeholder-3.svg",
      link: "#",
      metrics: "Shipped from concept to production-ready Next.js frontend in 3 days.",
      deliverables: ["Prompt-Driven Dev", "Next.js UI", "Motion Design", "Visual Identity"],
      overview: "A showcase of next-generation design engineering. Concepted in Figma and materialized into clean, semantic React code using prompt-driven workflows, demonstrating the speed and precision of modern design-to-code tooling.",
      accent: {
        primary: "#fbbf24",
        glow: "rgba(251, 191, 36, 0.15)",
        badge: "text-amber-400 bg-amber-500/10 border-amber-500/30",
        border: "hover:border-amber-500/50 hover:shadow-amber-500/10",
      }
    },
    {
      id: "04",
      title: "BCMCH Digital Platform",
      category: "Web Redesign • Brand Systems",
      year: "2026",
      description: "End-to-end visual direction, brand systems and high-fidelity UI from discovery.",
      tags: ["Discovery", "Visual Identity", "Typography", "Figma"],
      image: "/images/projects/placeholder-4.svg",
      link: "#",
      metrics: "Overhauled 45+ templates and established unified multi-brand token system.",
      deliverables: ["Brand Identity", "Design System", "Information Architecture", "Content Strategy"],
      overview: "A comprehensive digital transformation for an established institution. Re-architected user journeys for diverse visitor demographics, establishing a modern typographic hierarchy, cohesive color tokens, and accessible interactive patterns.",
      accent: {
        primary: "#a78bfa",
        glow: "rgba(167, 139, 250, 0.15)",
        badge: "text-violet-400 bg-violet-500/10 border-violet-500/30",
        border: "hover:border-violet-500/50 hover:shadow-violet-500/10",
      }
    }
  ],
  experience: [
    {
      company: "Armia Systems Pvt. Ltd.",
      role: "UI/UX Designer & Frontend UI Developer",
      period: "Mar 2026 — Present",
      description: "Led visual and UI direction from discovery through handoff across multiple concurrent projects. Built AI-prompted landing pages and bridged design to frontend implementation.",
      highlights: [
        "Spearheaded design-to-code workflows accelerating frontend delivery by 40%",
        "Established component guidelines across cross-functional engineering pods",
        "Conducted client design reviews and stakeholder alignment workshops"
      ]
    },
    {
      company: "Stratagile",
      role: "UX/UI Designer",
      period: "Jun 2024 — Mar 2026",
      description: "Owned end-to-end UX/UI for international web and dashboard products. Built scalable design systems that accelerated design-to-development handoff.",
      highlights: [
        "Designed and maintained unified Figma design systems for 6+ global web applications",
        "Facilitated usability tests, card sorting sessions, and heuristic evaluations",
        "Partnered with engineering to ensure pixel-perfect fidelity across responsive viewports"
      ]
    },
    {
      company: "AppCake",
      role: "UX/UI Designer",
      period: "Jan 2023 — May 2024",
      description: "Designed platform-specific UI systems for iOS and Android, created brand assets, and collaborated with marketing on pitch decks.",
      highlights: [
        "Crafted mobile UI components following iOS Human Interface Guidelines and Material Design",
        "Produced motion prototypes and interactive micro-animations for user testing",
        "Created digital marketing collateral and high-conversion landing page layouts"
      ]
    }
  ],
  skills: {
    productUX: [
      "User Research",
      "User Flows",
      "Information Architecture",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
      "Design Systems"
    ],
    uiBranding: [
      "High-Fidelity UI",
      "Typography Systems",
      "Color Systems",
      "Iconography",
      "Moodboards",
      "Dashboard Design",
      "Brand Direction"
    ],
    frontendAI: [
      "Frontend UI Development",
      "Responsive Web UI",
      "Prompt-Driven Development",
      "Design-to-Code",
      "HTML/CSS",
      "Antigravity",
      "Cursor"
    ],
    tools: [
      "Figma",
      "Adobe Photoshop",
      "Illustrator",
      "Premiere Pro",
      "Jira",
      "Asana"
    ]
  }
};
