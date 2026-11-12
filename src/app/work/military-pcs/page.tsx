"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  Home,
  CalendarCheck,
  ShieldCheck,
  DollarSign,
  Bot,
  MapPin,
  Clock,
  CheckCircle2,
  Users,
  Layers,
  ChevronRight,
  Sparkles,
} from "lucide-react";

/**
 * IMAGE SLOTS
 * Drop your screenshots into /public/images/projects/military-pcs/
 * Graceful fallback with dashed placeholder or hideIfMissing for optional slots.
 */
const IMG = {
  hero: "/images/projects/military-pcs/main-screen.jpg",
  overview: "/images/projects/military-pcs/hero.png",
  baseExplorer: "/images/projects/military-pcs/base-explorer.png",
  housing: "/images/projects/military-pcs/housing.png",
  planner: "/images/projects/military-pcs/planner.png",
  directory: "/images/projects/military-pcs/directory.png",
  financial: "/images/projects/military-pcs/financial.png",
  battleBuddy: "/images/projects/military-pcs/battle-buddy.png",
  designSystem: "/images/projects/military-pcs/design-system.png",
};

/** Desktop-style screen frame with graceful fallback when the image isn't added yet. */
function Screen({
  src,
  alt,
  caption,
  ratio = "aspect-[16/9]",
  priority = false,
  hideIfMissing = false,
  fit = "contain",
  position = "object-center",
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  priority?: boolean;
  hideIfMissing?: boolean;
  fit?: "cover" | "contain";
  position?: string;
}) {
  const [missing, setMissing] = useState(false);
  const fileName = src.split("/").pop();

  if (missing && hideIfMissing) return null;

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="rounded-xl overflow-hidden border border-white/[0.1] bg-[#121211] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.9)]">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 h-9 border-b border-white/[0.08] bg-[#17171a]">
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
        </div>

        <div className={`relative w-full ${ratio} bg-[#0A0A0A]`}>
          {missing ? (
            <div className="absolute inset-4 rounded-lg border border-dashed border-white/15 flex flex-col items-center justify-center gap-1 text-center px-6">
              <span className="font-mono text-xs text-[#F14417]">IMAGE SLOT</span>
              <span className="font-mono text-sm text-[#A09D95]">{fileName}</span>
            </div>
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 1260px) 100vw, 1260px"
              className={`${fit === "contain" ? "object-contain" : "object-cover"} ${position}`}
              onError={() => setMissing(true)}
            />
          )}
        </div>
      </div>
      {caption && <span className="font-mono text-sm text-[#7A7873]">{caption}</span>}
    </div>
  );
}

/** Decision → Why → Trade-off. */
function DecisionNote({
  decision,
  why,
  tradeoff,
}: {
  decision: string;
  why: string;
  tradeoff: string;
}) {
  return (
    <div className="rounded-xl bg-[#121211] border border-white/[0.08] divide-y divide-white/[0.06]">
      {[
        { label: "DECISION", text: decision, accent: true },
        { label: "WHY", text: why, accent: false },
        { label: "TRADE-OFF", text: tradeoff, accent: false },
      ].map((row) => (
        <div key={row.label} className="p-6 grid grid-cols-[96px_1fr] gap-4 items-start">
          <span className={`font-mono text-xs pt-1 ${row.accent ? "text-[#F14417]" : "text-[#7A7873]"}`}>
            {row.label}
          </span>
          <p
            className={`text-[16px] leading-relaxed ${row.accent ? "text-[#F5F4F1] font-medium" : "text-[#A09D95]"}`}
          >
            {row.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function MilitaryPCSCaseStudy() {
  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.6 },
  };

  return (
    <main className="min-h-screen bg-[#0B0B0A] text-[#F5F4F1] relative selection:bg-[#F14417] selection:text-white pb-24">
      <Navbar />

      {/* ========================================================= */}
      {/* 1. HERO */}
      {/* ========================================================= */}
      <section className="pt-36 sm:pt-44 pb-16 px-6 sm:px-12 max-w-[1260px] mx-auto relative z-10">
        <motion.div {...fadeIn} className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-[16px] text-[#A09D95] hover:text-[#F14417] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Selected work</span>
          </Link>
        </motion.div>

        <div className="flex flex-col gap-6 max-w-[960px]">
          <motion.div {...fadeIn} className="flex items-center gap-3">
            <span className="font-mono text-[18px] text-[#F14417]">/case-study</span>
            <span className="font-mono text-[16px] text-[#A09D95] border border-white/10 rounded-full px-3 py-0.5">
              Case 04
            </span>
          </motion.div>

          <motion.h1
            {...fadeIn}
            className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.04em] text-[#F5F4F1] leading-[1.02]"
          >
            MilitaryPCS
          </motion.h1>

          <motion.p
            {...fadeIn}
            className="text-xl sm:text-2xl md:text-3xl text-[#A09D95] font-light leading-relaxed max-w-[42ch]"
          >
            Making military relocation simpler, more connected, and less overwhelming.
          </motion.p>
        </div>

        <motion.div
          {...fadeIn}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 mt-12 border-t border-b border-white/[0.08]"
        >
          {[
            { k: "Category", v: "Military Relocation • PropTech" },
            { k: "Platform", v: "Web Application" },
            { k: "Design Focus", v: "UX Strategy, IA, User Flows, UI Design" },
            { k: "Role", v: "UI/UX Designer" },
          ].map((m) => (
            <div key={m.k}>
              <span className="font-mono text-sm text-[#7A7873] block mb-1">{m.k}</span>
              <span className="text-[17px] text-[#F5F4F1] font-medium leading-snug">{m.v}</span>
            </div>
          ))}
        </motion.div>

        <motion.div {...fadeIn} className="mt-12">
          <Screen
            src={IMG.hero}
            alt="MilitaryPCS command center displayed in desktop environment"
            caption="MilitaryPCS: Desktop experience showcasing the centralized relocation command center and housing exploration"
            ratio="aspect-[4/3]"
            fit="contain"
            priority
          />
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 2. SUMMARY */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
          <motion.div {...fadeIn} className="flex flex-col gap-2">
            <span className="font-mono text-[18px] text-[#F14417]">/summary</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#F5F4F1]">
              The idea in short
            </h2>
          </motion.div>

          <motion.div {...fadeIn} className="flex flex-col gap-8">
            <p className="text-[#F5F4F1] text-xl sm:text-2xl leading-relaxed">
              MilitaryPCS is a military-first relocation platform designed to support service members and their families throughout every stage of a Permanent Change of Station (PCS) move.
            </p>
            <p className="text-[#A09D95] text-lg leading-relaxed">
              Instead of navigating disconnected resources for housing, local services, financial guidance, and community information, families can access everything through one centralized experience. The platform combines an interactive installation map, housing discovery, verified military-affiliated professionals, relocation planning tools, and community insights to help families move with greater confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  n: "01",
                  t: "The problem",
                  d: "Fragmented resources, unfamiliar communities, and simultaneous responsibilities create friction and decision paralysis under strict timelines.",
                },
                {
                  n: "02",
                  t: "The approach",
                  d: "A stage-gated, map-first relocation command center pairing geospatial base context with verified military professionals.",
                },
                {
                  n: "03",
                  t: "The result",
                  d: "A unified digital platform connecting housing, planning, financing, and community support into a guided, manageable journey.",
                },
              ].map((c) => (
                <div key={c.n} className="p-5 rounded-lg bg-[#121211] border border-white/[0.08]">
                  <span className="font-mono text-xs text-[#F14417] block mb-2">{c.n}</span>
                  <h3 className="font-display font-bold text-lg text-[#F5F4F1] mb-1">{c.t}</h3>
                  <p className="text-[#A09D95] text-[15px] leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. PROBLEM */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-10">
          <motion.span {...fadeIn} className="font-mono text-[18px] text-[#F14417]">
            /problem
          </motion.span>

          <motion.h2
            {...fadeIn}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] max-w-[28ch] leading-tight"
          >
            Relocating a military family involves far more than moving boxes.
          </motion.h2>

          <div className="flex flex-col gap-6 text-[#A09D95] text-lg sm:text-xl max-w-[64ch] leading-relaxed">
            <motion.p {...fadeIn}>
              Military relocations involve much more than moving between locations. Families must evaluate unfamiliar communities, find suitable housing, connect with reliable professionals, manage finances, and coordinate multiple responsibilities, often under tight timelines.
            </motion.p>
            <motion.p {...fadeIn}>
              Existing resources are fragmented, creating unnecessary complexity during an already demanding transition. The design challenge was to transform this fragmented relocation journey into a clear, intuitive, and trustworthy digital experience.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            {[
              {
                t: "Fragmented resources",
                d: "Information is scattered across dozens of disjointed military and commercial portals with inconsistent formats, confusing acronyms, and zero workflow continuity.",
              },
              {
                t: "Unfamiliar communities & tight timelines",
                d: "Families receive orders with strict report-in dates for distant installations they have never visited, forcing critical housing decisions under intense time pressure.",
              },
              {
                t: "Many responsibilities at once",
                d: "Coordinating home search, movers, school transfers, spousal employment, and moving allowances simultaneously with no single system tracking dependencies.",
              },
            ].map((g, i) => (
              <motion.div
                key={g.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-xl bg-[#121211] border border-white/[0.08]"
              >
                <span className="font-mono text-xs text-[#7A7873] block mb-2">WHERE IT BREAKS</span>
                <h3 className="font-display font-bold text-xl text-[#F5F4F1] mb-2">{g.t}</h3>
                <p className="text-[#A09D95] text-[16px] leading-relaxed">{g.d}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeIn}
            className="mt-4 p-8 sm:p-12 rounded-xl bg-[#121211] border border-white/[0.08] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#F14417]" />
            <span className="font-mono text-[16px] text-[#F14417] block mb-3">THE DESIGN QUESTION</span>
            <blockquote className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl text-[#F5F4F1] tracking-tight leading-snug">
              &ldquo;How might we transform a fragmented, high-stress military relocation into a single guided experience that provides clarity, reliable support, and trusted community connections at every stage?&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. UX STRATEGY */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-4 mb-14">
          <span className="font-mono text-[18px] text-[#F14417]">/ux-strategy</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F5F4F1] max-w-[26ch]">
            Four strategic pillars designed for high-stress transitions
          </h2>
          <p className="text-[#A09D95] text-lg max-w-[58ch] leading-relaxed">
            The UX strategy centered on reducing cognitive load, establishing trust, and helping users understand their next action without navigating complex menus. Rather than designing another conventional service directory, we focused on creating a connected relocation experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              n: "01",
              t: "Reduce cognitive load",
              d: "Present structured, phased information rather than overwhelming data walls. By organizing information by relocation timeline, families only deal with immediate requirements rather than many simultaneous tasks at once.",
            },
            {
              n: "02",
              t: "Establish deep trust",
              d: "Highlight military-affiliated professionals, veteran-owned businesses, and military-spouse service providers. Verification badges are designed to help families identify trusted providers and avoid unreliable vendors.",
            },
            {
              n: "03",
              t: "Make the next action obvious",
              d: "Contextual navigation and progressive prompts guide the user forward through logical milestones without requiring them to decipher convoluted hierarchical menus.",
            },
            {
              n: "04",
              t: "A connected experience, not a directory",
              d: "Unify map exploration, housing discovery, timeline planning, and community feedback into one continuous workflow rather than a static list of external links.",
            },
          ].map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-8 rounded-xl bg-[#121211] border border-white/[0.08] hover:border-[#F14417]/40 transition-colors"
            >
              <span className="font-mono text-sm text-[#F14417] block mb-4">PILLAR {p.n}</span>
              <h3 className="font-display font-bold text-2xl text-[#F5F4F1] mb-3">{p.t}</h3>
              <p className="text-[#A09D95] text-[16px] leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. USER JOURNEY */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-4 max-w-[62ch]">
            <span className="font-mono text-[18px] text-[#F14417]">/user-journey</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] leading-tight">
              Three stages. One continuous relocation journey.
            </h2>
            <p className="text-[#A09D95] text-lg sm:text-xl leading-relaxed">
              We organized the entire platform around the natural lifecycle of a military move: Before Orders, During Move, and After Arrival.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              {
                stage: "STAGE 01",
                title: "Before Orders",
                subtitle: "Explore & Prepare",
                focus:
                  "Researching prospective duty stations, understanding base amenities, analyzing housing availability, and building early moving budgets.",
                features: [
                  "Interactive Base Explorer",
                  "Installation perimeter mapping",
                  "Community Insights & school ratings",
                  "Cost of living & BAH comparisons",
                ],
                accent: "#1B2B48",
              },
              {
                stage: "STAGE 02",
                title: "During Move",
                subtitle: "Plan & Coordinate",
                focus:
                  "Executing the move once orders drop. Booking military-friendly housing, scheduling movers, and tracking critical milestone deadlines.",
                features: [
                  "PCS Planner & timeline milestones",
                  "Housing discovery & lease coordination",
                  "Verified professional directory",
                  "Direct in-app vendor messaging",
                ],
                accent: "#556B2F",
              },
              {
                stage: "STAGE 03",
                title: "After Arrival",
                subtitle: "Settle & Connect",
                focus:
                  "Transitioning into the new installation community, establishing local healthcare, enrolling children, and plugging into spousal networks.",
                features: [
                  "Local service marketplace",
                  "Military-spouse business network",
                  "Community recommendation boards",
                  "Neighborhood amenity guides",
                ],
                accent: "#B89B5E",
              },
            ].map((s, i) => (
              <motion.div
                key={s.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#F14417] tracking-wider">{s.stage}</span>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.accent }} />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#F5F4F1]">{s.title}</h3>
                  <span className="font-mono text-sm text-[#7A7873] block mb-4">{s.subtitle}</span>
                  <p className="text-[#A09D95] text-[15px] leading-relaxed mb-6">{s.focus}</p>
                </div>

                <div className="pt-6 border-t border-white/[0.06]">
                  <span className="font-mono text-xs text-[#7A7873] block mb-3">KEY FEATURES</span>
                  <ul className="flex flex-col gap-2 text-[14px] text-[#F5F4F1]">
                    {s.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2">
                        <span className="text-[#F14417] text-xs pt-1">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. INFORMATION ARCHITECTURE */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-4 max-w-[62ch]">
            <span className="font-mono text-[18px] text-[#F14417]">/information-architecture</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] leading-tight">
              A progressive hierarchy organized around user intent
            </h2>
            <p className="text-[#A09D95] text-lg sm:text-xl leading-relaxed">
              We mapped the application structure to follow relocation stages rather than technical databases, ensuring every tool is surfaced exactly when families need it.
            </p>
          </motion.div>

          {/* CSS-based IA Visual Diagram */}
          <motion.div {...fadeIn} className="flex flex-col gap-6">
            {/* Level 1: Stage Gate */}
            <div className="p-6 rounded-xl bg-[#121211] border border-white/[0.08]">
              <span className="font-mono text-xs text-[#F14417] block mb-3 uppercase tracking-wider">
                Level 01 • Relocation Lifecycle Gateway
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: "Before Orders", desc: "Base discovery, duty station exploration, market research" },
                  { name: "During Move", desc: "PCS timeline coordination, housing selection, verified movers" },
                  { name: "After Arrival", desc: "Local community onboarding, schools, services, spousal network" },
                ].map((lvl) => (
                  <div key={lvl.name} className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                    <div className="font-display font-bold text-[#F5F4F1] text-lg">{lvl.name}</div>
                    <div className="text-[#7A7873] text-xs mt-1">{lvl.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connecting Indicator */}
            <div className="flex justify-center -my-2 text-[#7A7873]">
              <span className="font-mono text-xs tracking-widest text-[#F14417]">▼ PRIMARY PLATFORM CAPABILITIES ▼</span>
            </div>

            {/* Level 2: Core Feature Pillars */}
            <div className="p-6 sm:p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
              <span className="font-mono text-xs text-[#F14417] block mb-4 uppercase tracking-wider">
                Level 02 • Six Core Command Pillars
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  {
                    icon: Compass,
                    title: "Base Explorer",
                    desc: "Interactive installation map, gate distances, traffic times, and nearby community overlays.",
                  },
                  {
                    icon: Home,
                    title: "Housing Discovery",
                    desc: "On-base housing resources, private rentals, and homes for sale matched to military BAH rates.",
                  },
                  {
                    icon: CalendarCheck,
                    title: "PCS Planner",
                    desc: "Milestone checklist with auto-calculated deadlines based on report dates and order details.",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Verified Directory",
                    desc: "Curated realtors, movers, lenders, and inspectors with authenticated military affiliation.",
                  },
                  {
                    icon: DollarSign,
                    title: "Financial Guidance",
                    desc: "DITY move calculators, VA loan eligibility tools, moving allowances, and insurance resources.",
                  },
                  {
                    icon: Bot,
                    title: "AI Battle Buddy",
                    desc: "Contextual assistance answering installation-specific questions and moving policies 24/7.",
                  },
                ].map((feat) => (
                  <div key={feat.title} className="p-5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <feat.icon className="w-4 h-4 text-[#F14417]" />
                      <h4 className="font-display font-bold text-[#F5F4F1] text-[16px]">{feat.title}</h4>
                    </div>
                    <p className="text-[#A09D95] text-xs leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Level 3: Platform Foundations */}
            <div className="p-6 rounded-xl bg-[#121211] border border-white/[0.08]">
              <span className="font-mono text-xs text-[#7A7873] block mb-3 uppercase tracking-wider">
                Level 03 • Shared Services &amp; Identity
              </span>
              <div className="flex flex-wrap gap-3">
                {[
                  "Military Verification Engine",
                  "Duty Station Preferences",
                  "Saved Properties & Favourites",
                  "Direct Provider Messaging",
                  "PCS Document Vault",
                ].map((sys) => (
                  <span
                    key={sys}
                    className="font-mono text-xs text-[#A09D95] bg-white/[0.03] border border-white/[0.08] px-3.5 py-1.5 rounded-md"
                  >
                    {sys}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. KEY SCREENS */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-20">
          <motion.div {...fadeIn} className="flex flex-col gap-4 max-w-[62ch]">
            <span className="font-mono text-[18px] text-[#F14417]">/key-screens</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] leading-tight">
              Essential interfaces that anchor the relocation experience
            </h2>
            <p className="text-[#A09D95] text-lg sm:text-xl leading-relaxed">
              Every screen balances dense logistical data with intuitive interactions, allowing military families to explore, compare, and act with confidence.
            </p>
          </motion.div>

          {/* Screen 01: Base Explorer */}
          <div className="flex flex-col gap-8">
            <motion.div {...fadeIn} className="flex flex-col gap-2 max-w-[60ch]">
              <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider">
                FEATURE 01 • GEOSPATIAL MAP
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F4F1]">
                Interactive Base Explorer
              </h3>
              <p className="text-[#A09D95] text-[16px] leading-relaxed">
                Discover military installations, nearby communities, gate locations, and essential local amenities through an immersive map interface.
              </p>
            </motion.div>

            <motion.div {...fadeIn}>
              <Screen
                src={IMG.baseExplorer}
                alt="MilitaryPCS Base Explorer interactive map"
                caption="Base Explorer: Spatial installation mapping showing base boundaries, gate routes, schools, and neighborhood clusters"
                ratio="aspect-[1800/1013]"
                fit="contain"
              />
            </motion.div>

            <motion.div {...fadeIn}>
              <DecisionNote
                decision="Lead with an interactive geospatial map that visually anchors all housing, schools, and local amenities directly to the installation perimeter and gate access points."
                why="Military families evaluate off-base housing primarily by gate commute times, school districts, and proximity to base clinics. A map-first view gives immediate spatial clarity that tabular lists cannot convey."
                tradeoff="Geospatial synchronization requires heavier rendering than simple lists, but prevents costly miscalculations about daily base commute realities."
              />
            </motion.div>
          </div>

          {/* Screen 02: Housing Discovery */}
          <div className="flex flex-col gap-8 pt-12 border-t border-white/[0.08]">
            <motion.div {...fadeIn} className="flex flex-col gap-2 max-w-[60ch]">
              <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider">
                FEATURE 02 • HOUSING ECOSYSTEM
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F4F1]">
                Housing Discovery &amp; Community Insights
              </h3>
              <p className="text-[#A09D95] text-[16px] leading-relaxed">
                Explore on-base housing opportunities, private rentals, and purchase listings filtered by military rank, BAH budget, and school ratings.
              </p>
            </motion.div>

            <motion.div {...fadeIn}>
              <Screen
                src={IMG.housing}
                alt="MilitaryPCS Housing Discovery interface"
                caption="Housing Discovery: Verified property listings paired with community sentiment, BAH price matching, and property details"
                ratio="aspect-[1800/1055]"
                fit="contain"
              />
            </motion.div>
          </div>

          {/* Screen 03: PCS Planner */}
          <div className="flex flex-col gap-8 pt-12 border-t border-white/[0.08]">
            <motion.div {...fadeIn} className="flex flex-col gap-2 max-w-[60ch]">
              <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider">
                FEATURE 03 • RELOCATION MANAGEMENT
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F4F1]">
                PCS Planner &amp; Milestone Timeline
              </h3>
              <p className="text-[#A09D95] text-[16px] leading-relaxed">
                Organize tasks, track relocation milestones, manage documents, and stay prepared throughout every day of the move.
              </p>
            </motion.div>

            <motion.div {...fadeIn}>
              <Screen
                src={IMG.planner}
                alt="MilitaryPCS PCS Journey and timeline planner"
                caption="PCS Planner: Stage-gated milestone roadmap automatically generated from the service member's report date"
                ratio="aspect-[1800/1450]"
                fit="contain"
              />
            </motion.div>

            <motion.div {...fadeIn}>
              <DecisionNote
                decision="Structure the PCS planner by chronological relocation milestones (Before Orders, 60 Days Out, Moving Week, In-Processing) rather than an unorganized generic to-do list."
                why="A permanent change of station involves many deadlines and responsibilities. Showing all tasks simultaneously causes decision fatigue; grouping by stage ensures families focus strictly on current priorities."
                tradeoff="Hiding future milestones requires extra clicks to preview later phases, but helps eliminate decision fatigue during early preparation."
              />
            </motion.div>
          </div>

          {/* Screen 04: Verified Professional Directory */}
          <div className="flex flex-col gap-8 pt-12 border-t border-white/[0.08]">
            <motion.div {...fadeIn} className="flex flex-col gap-2 max-w-[60ch]">
              <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider">
                FEATURE 04 • TRUSTED NETWORK
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F4F1]">
                Verified Professional Directory
              </h3>
              <p className="text-[#A09D95] text-[16px] leading-relaxed">
                Connect with military-affiliated professionals, veteran-owned businesses, VA lenders, and military-spouse service providers who understand military life.
              </p>
            </motion.div>

            <motion.div {...fadeIn}>
              <Screen
                src={IMG.directory}
                alt="MilitaryPCS Verified Professional Directory"
                caption="Verified Directory: Curated directory of military-affiliated realtors, lenders, and community services with authentic peer reviews"
                ratio="aspect-[1800/1054]"
                fit="contain"
              />
            </motion.div>

            <motion.div {...fadeIn}>
              <DecisionNote
                decision="Incorporate verification badges for military affiliation (veteran-owned, military spouse-operated, or military relocation certified) across directory listings."
                why="Verification badges are designed to help families identify trusted providers and connect with verified military-affiliated professionals."
                tradeoff="Verification gating limits total directory size compared to unvetted commercial listings, but prioritizes trust and relevance."
              />
            </motion.div>
          </div>

          {/* Screen 05: Financial Guidance (hideIfMissing) */}
          <div className="flex flex-col gap-8 pt-12 border-t border-white/[0.08]">
            <motion.div {...fadeIn} className="flex flex-col gap-2 max-w-[60ch]">
              <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider">
                FEATURE 05 • FINANCIAL EMPOWERMENT
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F4F1]">
                Financial Guidance &amp; Entitlements
              </h3>
              <p className="text-[#A09D95] text-[16px] leading-relaxed">
                Navigate home financing, VA loan eligibility, military move insurance, and relocation expense calculators in one reliable portal.
              </p>
            </motion.div>

            <motion.div {...fadeIn}>
              <Screen
                src={IMG.financial}
                alt="MilitaryPCS Financial Guidance"
                caption="Financial Guidance: Comprehensive calculations for DITY/PPM moves, VA loan pre-qualifications, and moving allowance planning"
                ratio="aspect-[1800/1380]"
                fit="contain"
                hideIfMissing
              />
            </motion.div>

            <motion.div {...fadeIn}>
              <DecisionNote
                decision="Centralize moving expense estimators and DITY/PPM calculations directly alongside housing discovery."
                why="Financial considerations heavily dictate housing choices during a relocation, so keeping cost estimations within the primary flow prevents disjointed budgeting."
                tradeoff="Adds data inputs to what is typically a browsing experience, requiring sensible default values for speed."
              />
            </motion.div>
          </div>

          {/* Screen 06: AI Battle Buddy (hideIfMissing) */}
          <div className="flex flex-col gap-8 pt-12 border-t border-white/[0.08]">
            <motion.div {...fadeIn} className="flex flex-col gap-2 max-w-[60ch]">
              <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider">
                FEATURE 06 • CONTEXTUAL ASSISTANCE
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F4F1]">
                AI Battle Buddy
              </h3>
              <p className="text-[#A09D95] text-[16px] leading-relaxed">
                Contextual assistance answering complex relocation policies, military entitlement questions, and local installation requirements 24/7.
              </p>
            </motion.div>

            <motion.div {...fadeIn}>
              <Screen
                src={IMG.battleBuddy}
                alt="MilitaryPCS AI Battle Buddy"
                caption="AI Battle Buddy: Conversational assistant tailored to installation-specific questions and PCS entitlements"
                ratio="aspect-[16/10]"
                hideIfMissing
              />
            </motion.div>

            <motion.div {...fadeIn}>
              <DecisionNote
                decision="Provide a contextual conversational assistant grounded in base regulations and entitlements."
                why="Installation rules and allowance policies vary widely; a guided assistant helps clarify specifics without forcing users to search through lengthy administrative docs."
                tradeoff="Conversational responses must stay strictly bounded to administrative facts and clearly refer service members to official command channels for formal orders."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. DESIGN SYSTEM */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-4 max-w-[62ch]">
            <span className="font-mono text-[18px] text-[#F14417]">/design-system</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] leading-tight">
              An authoritative, respectful design system built for military life
            </h2>
            <p className="text-[#A09D95] text-lg sm:text-xl leading-relaxed">
              Drawn directly from verified design tokens across the application screens. The visual direction balances military authority and tactical discipline with approachable, modern warmth.
            </p>
          </motion.div>

          <motion.div {...fadeIn}>
            <Screen
              src={IMG.designSystem}
              alt="MilitaryPCS Design System tokens and components"
              caption="Design System: Authoritative military palette, typography scales, and modular card systems"
              hideIfMissing
            />
          </motion.div>

          {/* Real Extracted Color Palette */}
          <motion.div {...fadeIn} className="flex flex-col gap-6">
            <span className="font-mono text-sm text-[#F14417]">CORE COLOUR PALETTE (EXACT EXTRACTED TOKENS)</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Military Navy", hex: "#1B2B48", desc: "Primary brand background, header surfaces, authoritative presence", dark: true },
                { name: "Tactical Olive", hex: "#556B2F", desc: "Military insignia badge, primary action accents, active states", dark: true },
                { name: "Military Brass", hex: "#B89B5E", desc: "Verification emblems, rating stars, premium badges", dark: false },
                { name: "Action Blue", hex: "#2563EB", desc: "Interactive map links, active route pins, highlighted tabs", dark: true },
                { name: "Slate Charcoal", hex: "#111827", desc: "High-contrast headings, text hierarchy anchor", dark: true },
                { name: "Slate Muted", hex: "#475569", desc: "Secondary descriptions, metadata subtitles, borders", dark: true },
                { name: "Surface Light", hex: "#F8FAFC", desc: "Card surfaces, input backgrounds, crisp contrast", dark: false },
                { name: "Alert Crimson", hex: "#D72626", desc: "Urgent PCS deadlines, mandatory moving requirements", dark: true },
              ].map((swatch) => (
                <div
                  key={swatch.hex}
                  className="rounded-xl bg-[#121211] border border-white/[0.08] overflow-hidden flex flex-col"
                >
                  <div
                    className="h-20 w-full relative p-3 flex items-end justify-between"
                    style={{ backgroundColor: swatch.hex }}
                  >
                    <span
                      className={`font-mono text-xs font-semibold ${
                        swatch.dark ? "text-white" : "text-black"
                      }`}
                    >
                      {swatch.hex}
                    </span>
                  </div>
                  <div className="p-4 flex flex-col gap-1">
                    <span className="font-display font-bold text-[#F5F4F1] text-sm">{swatch.name}</span>
                    <span className="text-[#7A7873] text-xs leading-normal">{swatch.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Typography & Components Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
              <span className="font-mono text-xs text-[#F14417] block mb-3 uppercase tracking-wider">
                Typography Architecture
              </span>
              <h3 className="font-display font-bold text-2xl text-[#F5F4F1] mb-4">
                Structured, High-Legibility Type Hierarchy
              </h3>
              <ul className="flex flex-col gap-3 text-[#A09D95] text-[15px] leading-relaxed">
                <li>
                  <strong className="text-[#F5F4F1]">Display Headlines:</strong> Clear, confident weights built for rapid scanning of installation names and base commands.
                </li>
                <li>
                  <strong className="text-[#F5F4F1]">Data &amp; Logistical Body:</strong> High-legibility system sans-serif with generous line height for multi-line requirements and checklists.
                </li>
                <li>
                  <strong className="text-[#F5F4F1]">Badges &amp; Status Labels:</strong> Compact monospaced numerals and uppercase tracking for rank, dates, and verification badges.
                </li>
              </ul>
            </motion.div>

            <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
              <span className="font-mono text-xs text-[#F14417] block mb-3 uppercase tracking-wider">
                Key Interface Patterns
              </span>
              <h3 className="font-display font-bold text-2xl text-[#F5F4F1] mb-4">
                Specialized Military Components
              </h3>
              <ul className="flex flex-col gap-3 text-[#A09D95] text-[15px] leading-relaxed">
                <li>
                  <strong className="text-[#F5F4F1]">Geospatial Gate Distance Pins:</strong> Interactive markers showing exact drive times to installation entry gates.
                </li>
                <li>
                  <strong className="text-[#F5F4F1]">BAH Compatibility Chips:</strong> Real-time indicators showing whether rental costs align with the military housing allowance.
                </li>
                <li>
                  <strong className="text-[#F5F4F1]">Verified Military Emblems:</strong> Visual shields distinguishing veteran-owned and military spouse businesses from commercial leads.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. OUTCOME */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-10">
          <motion.span {...fadeIn} className="font-mono text-[18px] text-[#F14417]">
            /outcome
          </motion.span>

          <motion.h2
            {...fadeIn}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] max-w-[28ch] leading-tight"
          >
            A calm, unified command center for military transitions.
          </motion.h2>

          <div className="flex flex-col gap-6 text-[#A09D95] text-lg sm:text-xl max-w-[64ch] leading-relaxed">
            <motion.p {...fadeIn}>
              MilitaryPCS establishes a unified digital platform that brings housing discovery, financial planning, base navigation, and local support resources into one stage-based experience.
            </motion.p>
            <motion.p {...fadeIn}>
              By pairing interactive geospatial exploration with military-verified professional support and stage-by-stage planning, the platform is designed to make military relocation clearer, more organized, and less stressful for service members and their families.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            {[
              {
                title: "Reduced Cognitive Load",
                desc: "Replaced disorganized multi-tab web searches with a stage-gated relocation roadmap that guides families step by step.",
              },
              {
                title: "Authentic Community Trust",
                desc: "Connected service members directly to verified veteran-owned and military-spouse service providers who share the same values.",
              },
              {
                title: "Informed Decision-Making",
                desc: "Provided clear spatial context around installations, BAH calculations, and school districts before families arrive at their duty station.",
              },
            ].map((o, i) => (
              <motion.div
                key={o.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-xl bg-[#121211] border border-white/[0.08]"
              >
                <span className="font-mono text-xs text-[#F14417] block mb-2">QUALITATIVE IMPACT</span>
                <h3 className="font-display font-bold text-xl text-[#F5F4F1] mb-2">{o.title}</h3>
                <p className="text-[#A09D95] text-[15px] leading-relaxed">{o.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.blockquote
            {...fadeIn}
            className="mt-12 max-w-[840px] font-display font-bold text-2xl sm:text-4xl tracking-[-0.02em] text-[#F5F4F1] leading-snug"
          >
            &ldquo;Making military relocation simpler, more connected, and less overwhelming.&rdquo;
          </motion.blockquote>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. PROJECT NAVIGATION */}
      {/* ========================================================= */}
      <section className="pt-16 pb-24 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8">
          <Link
            href="/work/mazeflower"
            className="inline-flex items-center gap-3 font-mono text-[18px] text-[#A09D95] hover:text-[#F14417] transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Previous: MazeFlower</span>
          </Link>

          <Link
            href="/#work"
            className="font-mono text-[16px] text-[#7A7873] hover:text-[#F5F4F1] border border-white/10 hover:border-white/20 rounded-full px-5 py-2 transition-colors"
          >
            Back to Selected Projects
          </Link>

          <Link
            href="/work/descartes"
            className="inline-flex items-center gap-3 font-mono text-[18px] text-[#A09D95] hover:text-[#F14417] transition-colors group"
          >
            <span>Next: Descartes</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}

