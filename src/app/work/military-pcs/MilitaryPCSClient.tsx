"use client";

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
import { Screen, DecisionNote, MetaRow, ProjectNav } from "@/components/case-study";

/**
 * IMAGE SLOTS
 * Drop your screenshots into /public/images/projects/military-pcs/
 * Graceful fallback with dashed placeholder or hideIfMissing for optional slots.
 */
const IMG = {
  hero: "/images/projects/military-pcs/main-screen.webp",
  overview: "/images/projects/military-pcs/hero.webp",
  baseExplorer: "/images/projects/military-pcs/base-explorer.webp",
  housing: "/images/projects/military-pcs/housing.webp",
  planner: "/images/projects/military-pcs/planner.webp",
  directory: "/images/projects/military-pcs/directory.webp",
  marketplace: "/images/projects/military-pcs/marketplace.webp",
  financial: "/images/projects/military-pcs/financial.webp",
  calculator: "/images/projects/military-pcs/calculator.webp",
  insurance: "/images/projects/military-pcs/insurance.webp",
  battleBuddy: "/images/projects/military-pcs/battle-buddy.png",
  designSystem: "/images/projects/military-pcs/design-system.png",
};

export default function MilitaryPCSCaseStudy() {
  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.6 },
  };

  return (
    <main className="min-h-screen bg-[#0B0B0A] text-[#F5F4F1] relative selection:bg-[#F14417] selection:text-white pb-[max(3rem,env(safe-area-inset-bottom))] overflow-x-hidden">
      <Navbar />

      {/* ========================================================= */}
      {/* 1. HERO */}
      {/* ========================================================= */}
      <section className="pt-28 sm:pt-36 lg:pt-44 pb-12 sm:pb-16 lg:pb-20 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto relative z-10">
        <motion.div {...fadeIn} className="mb-6 sm:mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-[15px] sm:text-[16px] text-[#A09D95] hover:text-[#F14417] transition-colors group min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Selected work</span>
          </Link>
        </motion.div>

        <div className="flex flex-col gap-4 sm:gap-6 max-w-[960px]">
          <motion.div {...fadeIn} className="flex items-center gap-3">
            <span className="font-mono text-sm sm:text-[18px] text-[#F14417]">/case-study</span>
            <span className="font-mono text-xs sm:text-[16px] text-[#A09D95] border border-white/10 rounded-full px-3 py-0.5">
              Case 04
            </span>
          </motion.div>

          <motion.h1
            {...fadeIn}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.04em] text-[#F5F4F1] leading-[1.05] break-words"
          >
            MilitaryPCS
          </motion.h1>

          <motion.p
            {...fadeIn}
            className="text-lg sm:text-2xl md:text-3xl text-[#A09D95] font-light leading-relaxed max-w-[42ch]"
          >
            Making military relocation simpler, more connected, and less overwhelming.
          </motion.p>
        </div>

        <motion.div {...fadeIn}>
          <MetaRow
            items={[
              { label: "Category", value: "Military Relocation • PropTech" },
              { label: "Platform", value: "Web Application" },
              { label: "Design Focus", value: "UX Strategy, IA, User Flows, UI Design" },
              { label: "Role", value: "UI/UX Designer" },
            ]}
          />
        </motion.div>

        <motion.div {...fadeIn} className="mt-8 sm:mt-12">
          <Screen
            src={IMG.hero}
            alt="MilitaryPCS command center displayed in desktop environment"
            caption="MilitaryPCS: Desktop experience showcasing the centralized relocation command center and housing exploration"
            ratio="aspect-[4/3]"
            position="object-center"
            priority
          />
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 2. SUMMARY */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 lg:py-32 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 sm:gap-12 lg:gap-20">
          <motion.div {...fadeIn} className="flex flex-col gap-2">
            <span className="font-mono text-sm sm:text-[18px] text-[#F14417]">/summary</span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight text-[#F5F4F1]">
              The idea in short
            </h2>
          </motion.div>

          <motion.div {...fadeIn} className="flex flex-col gap-6 sm:gap-8">
            <p className="text-[#F5F4F1] text-lg sm:text-xl lg:text-2xl leading-relaxed">
              MilitaryPCS is a military-first relocation platform designed to support service members and their families throughout every stage of a Permanent Change of Station (PCS) move.
            </p>
            <p className="text-[#A09D95] text-base sm:text-lg leading-relaxed">
              Instead of navigating disconnected resources for housing, local services, financial guidance, and community information, families can access everything through one centralized experience. The platform combines an interactive installation map, housing discovery, verified military-affiliated professionals, relocation planning tools, and community insights to help families move with greater confidence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
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
                <div key={c.n} className="p-4 sm:p-5 rounded-lg bg-[#121211] border border-white/[0.08]">
                  <span className="font-mono text-xs text-[#F14417] block mb-2">{c.n}</span>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F4F1] mb-1">{c.t}</h3>
                  <p className="text-[#A09D95] text-sm sm:text-[15px] leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. PROBLEM */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 lg:py-32 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-6 sm:gap-10">
          <motion.span {...fadeIn} className="font-mono text-sm sm:text-[18px] text-[#F14417]">
            /problem
          </motion.span>

          <motion.h2
            {...fadeIn}
            className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-[#F5F4F1] max-w-[28ch] leading-tight"
          >
            Relocating a military family involves far more than moving boxes.
          </motion.h2>

          <div className="flex flex-col gap-4 sm:gap-6 text-[#A09D95] text-base sm:text-lg lg:text-xl max-w-[64ch] leading-relaxed">
            <motion.p {...fadeIn}>
              Military relocations involve much more than moving between locations. Families must evaluate unfamiliar communities, find suitable housing, connect with reliable professionals, manage finances, and coordinate multiple responsibilities, often under tight timelines.
            </motion.p>
            <motion.p {...fadeIn}>
              Existing resources are fragmented, creating unnecessary complexity during an already demanding transition. The design challenge was to transform this fragmented relocation journey into a clear, intuitive, and trustworthy digital experience.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-2">
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
                className="p-5 sm:p-6 rounded-xl bg-[#121211] border border-white/[0.08]"
              >
                <span className="font-mono text-xs text-[#7A7873] block mb-2">WHERE IT BREAKS</span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F4F1] mb-2">{g.t}</h3>
                <p className="text-[#A09D95] text-sm sm:text-[16px] leading-relaxed">{g.d}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeIn}
            className="mt-2 sm:mt-4 p-5 sm:p-8 lg:p-12 rounded-xl bg-[#121211] border border-white/[0.08] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#F14417]" />
            <span className="font-mono text-xs sm:text-[16px] text-[#F14417] block mb-2 sm:mb-3">THE DESIGN QUESTION</span>
            <blockquote className="font-display font-semibold text-xl sm:text-3xl md:text-4xl text-[#F5F4F1] tracking-tight leading-snug">
              &ldquo;How might we transform a fragmented, high-stress military relocation into a single guided experience that provides clarity, reliable support, and trusted community connections at every stage?&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. UX STRATEGY */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 lg:py-32 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-14">
          <span className="font-mono text-sm sm:text-[18px] text-[#F14417]">/ux-strategy</span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F4F1] max-w-[26ch]">
            Four strategic pillars designed for high-stress transitions
          </h2>
          <p className="text-[#A09D95] text-base sm:text-lg max-w-[58ch] leading-relaxed">
            The UX strategy centered on reducing cognitive load, establishing trust, and helping users understand their next action without navigating complex menus. Rather than designing another conventional service directory, we focused on creating a connected relocation experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
              className="p-5 sm:p-6 lg:p-8 rounded-xl bg-[#121211] border border-white/[0.08] hover:border-[#F14417]/40 transition-colors"
            >
              <span className="font-mono text-xs sm:text-sm text-[#F14417] block mb-3 sm:mb-4">PILLAR {p.n}</span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F4F1] mb-2 sm:mb-3">{p.t}</h3>
              <p className="text-[#A09D95] text-sm sm:text-[16px] leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. USER JOURNEY */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 lg:py-32 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-8 sm:gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-3 sm:gap-4 max-w-[62ch]">
            <span className="font-mono text-sm sm:text-[18px] text-[#F14417]">/user-journey</span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-[#F5F4F1] leading-tight">
              Three stages. One continuous relocation journey.
            </h2>
            <p className="text-[#A09D95] text-base sm:text-lg lg:text-xl leading-relaxed">
              We organized the entire platform around the natural lifecycle of a military move: Before Orders, During Move, and After Arrival.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
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
                className="p-5 sm:p-6 lg:p-8 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="font-mono text-xs text-[#F14417] tracking-wider">{s.stage}</span>
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.accent }} />
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F4F1]">{s.title}</h3>
                  <span className="font-mono text-xs sm:text-sm text-[#7A7873] block mb-3 sm:mb-4">{s.subtitle}</span>
                  <p className="text-[#A09D95] text-sm sm:text-[15px] leading-relaxed mb-4 sm:mb-6">{s.focus}</p>
                </div>

                <div className="pt-4 sm:pt-6 border-t border-white/[0.06]">
                  <span className="font-mono text-xs text-[#7A7873] block mb-2 sm:mb-3">KEY FEATURES</span>
                  <ul className="flex flex-col gap-2 text-xs sm:text-[14px] text-[#F5F4F1]">
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
      <section className="py-14 sm:py-20 lg:py-32 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-8 sm:gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-3 sm:gap-4 max-w-[62ch]">
            <span className="font-mono text-sm sm:text-[18px] text-[#F14417]">/information-architecture</span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-[#F5F4F1] leading-tight">
              A progressive hierarchy organized around user intent
            </h2>
            <p className="text-[#A09D95] text-base sm:text-lg lg:text-xl leading-relaxed">
              We mapped the application structure to follow relocation stages rather than technical databases, ensuring every tool is surfaced exactly when families need it.
            </p>
          </motion.div>

          {/* CSS-based IA Visual Diagram */}
          <motion.div {...fadeIn} className="flex flex-col gap-4 sm:gap-6">
            {/* Level 1: Stage Gate */}
            <div className="p-4 sm:p-6 rounded-xl bg-[#121211] border border-white/[0.08]">
              <span className="font-mono text-xs text-[#F14417] block mb-3 uppercase tracking-wider">
                Level 01 • Relocation Lifecycle Gateway
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
                {[
                  { name: "Before Orders", desc: "Base discovery, duty station exploration, market research" },
                  { name: "During Move", desc: "PCS timeline coordination, housing selection, verified movers" },
                  { name: "After Arrival", desc: "Local community onboarding, schools, services, spousal network" },
                ].map((lvl) => (
                  <div key={lvl.name} className="p-3 sm:p-4 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                    <div className="font-display font-bold text-[#F5F4F1] text-base sm:text-lg">{lvl.name}</div>
                    <div className="text-[#7A7873] text-xs mt-1">{lvl.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connecting Indicator */}
            <div className="flex justify-center -my-2 text-[#7A7873]">
              <span className="font-mono text-[11px] sm:text-xs tracking-widest text-[#F14417]">▼ PRIMARY PLATFORM CAPABILITIES ▼</span>
            </div>

            {/* Level 2: Core Feature Pillars */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
              <span className="font-mono text-xs text-[#F14417] block mb-3 sm:mb-4 uppercase tracking-wider">
                Level 02 • Six Core Command Pillars
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
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
                  <div key={feat.title} className="p-4 sm:p-5 rounded-lg bg-white/[0.02] border border-white/[0.06] flex flex-col gap-1.5 sm:gap-2">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <feat.icon className="w-4 h-4 text-[#F14417]" />
                      <h4 className="font-display font-bold text-[#F5F4F1] text-[15px] sm:text-[16px]">{feat.title}</h4>
                    </div>
                    <p className="text-[#A09D95] text-xs leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Level 3: Platform Foundations */}
            <div className="p-4 sm:p-6 rounded-xl bg-[#121211] border border-white/[0.08]">
              <span className="font-mono text-xs text-[#7A7873] block mb-3 uppercase tracking-wider">
                Level 03 • Shared Services &amp; Identity
              </span>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  "Military Verification Engine",
                  "Duty Station Preferences",
                  "Saved Properties & Favourites",
                  "Direct Provider Messaging",
                  "PCS Document Vault",
                ].map((sys) => (
                  <span
                    key={sys}
                    className="font-mono text-xs text-[#A09D95] bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-md"
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
      <section className="py-14 sm:py-20 lg:py-32 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-14 sm:gap-20">
          <motion.div {...fadeIn} className="flex flex-col gap-3 sm:gap-4 max-w-[62ch]">
            <span className="font-mono text-sm sm:text-[18px] text-[#F14417]">/key-screens</span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-[#F5F4F1] leading-tight">
              Essential interfaces that anchor the relocation experience
            </h2>
            <p className="text-[#A09D95] text-base sm:text-lg lg:text-xl leading-relaxed">
              Every screen balances dense logistical data with intuitive interactions, allowing military families to explore, compare, and act with confidence.
            </p>
          </motion.div>

          {/* Screen 01: Base Explorer */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <motion.div {...fadeIn} className="flex flex-col gap-2 max-w-[60ch]">
              <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider">
                FEATURE 01 • GEOSPATIAL MAP
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-[#F5F4F1]">
                Interactive Base Explorer
              </h3>
              <p className="text-[#A09D95] text-sm sm:text-[16px] leading-relaxed">
                Discover military installations, nearby communities, gate locations, and essential local amenities through an immersive map interface.
              </p>
            </motion.div>

            <motion.div {...fadeIn}>
              <Screen
                src={IMG.baseExplorer}
                alt="MilitaryPCS Base Explorer interactive map"
                caption="Base Explorer: Spatial installation mapping showing base boundaries, gate routes, schools, and neighborhood clusters"
                ratio="aspect-[1800/1013]"
                position="object-center"
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
          <div className="flex flex-col gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-white/[0.08]">
            <motion.div {...fadeIn} className="flex flex-col gap-2 max-w-[60ch]">
              <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider">
                FEATURE 02 • HOUSING ECOSYSTEM
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-[#F5F4F1]">
                Housing Discovery &amp; Community Insights
              </h3>
              <p className="text-[#A09D95] text-sm sm:text-[16px] leading-relaxed">
                Explore on-base housing opportunities, private rentals, and purchase listings filtered by military rank, BAH budget, and school ratings.
              </p>
            </motion.div>

            <motion.div {...fadeIn}>
              <Screen
                src={IMG.housing}
                alt="MilitaryPCS Housing Discovery interface"
                caption="Housing Discovery: Verified property listings paired with community sentiment, BAH price matching, and property details"
                ratio="aspect-[1800/1055]"
                position="object-center"
              />
            </motion.div>
          </div>

          {/* Screen 03: PCS Planner */}
          <div className="flex flex-col gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-white/[0.08]">
            <motion.div {...fadeIn} className="flex flex-col gap-2 max-w-[60ch]">
              <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider">
                FEATURE 03 • RELOCATION MANAGEMENT
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-[#F5F4F1]">
                PCS Planner &amp; Milestone Timeline
              </h3>
              <p className="text-[#A09D95] text-sm sm:text-[16px] leading-relaxed">
                Organize tasks, track relocation milestones, manage documents, and stay prepared throughout every day of the move.
              </p>
            </motion.div>

            <motion.div {...fadeIn}>
              <Screen
                src={IMG.planner}
                alt="MilitaryPCS PCS Journey and timeline planner"
                caption="PCS Planner: Stage-gated milestone roadmap automatically generated from the service member's report date"
                ratio="aspect-[1800/1450]"
                position="object-center"
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

          {/* Screen 04: Verified Professional Directory & Marketplace */}
          <div className="flex flex-col gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-white/[0.08]">
            <motion.div {...fadeIn} className="flex flex-col gap-2 max-w-[60ch]">
              <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider">
                FEATURE 04 • TRUSTED NETWORK
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-[#F5F4F1]">
                Verified Professional Directory &amp; Local Marketplace
              </h3>
              <p className="text-[#A09D95] text-sm sm:text-[16px] leading-relaxed">
                Connect with military-affiliated professionals, veteran-owned businesses, VA lenders, and military-spouse service providers who understand military life.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="flex flex-col gap-6 sm:gap-8">
              <Screen
                src={IMG.directory}
                alt="MilitaryPCS Verified Professional Directory"
                caption="Verified Directory: Curated directory of military-affiliated realtors, VA loan specialists, and service providers with verified veteran credentials and direct connection workflows"
                ratio="aspect-[1024/599]"
                position="object-center"
              />
              <Screen
                src={IMG.marketplace}
                alt="MilitaryPCS Local Services and Retail Marketplace"
                caption="Local Marketplace: Veteran-owned retail, auto maintenance, health & wellness, and local dining with community ratings"
                ratio="aspect-[1024/600]"
                position="object-center"
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

          {/* Screen 05: Financial Guidance & Calculators */}
          <div className="flex flex-col gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-white/[0.08]">
            <motion.div {...fadeIn} className="flex flex-col gap-2 max-w-[60ch]">
              <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider">
                FEATURE 05 • FINANCIAL EMPOWERMENT
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-[#F5F4F1]">
                Financial Guidance, Calculators &amp; Protection
              </h3>
              <p className="text-[#A09D95] text-sm sm:text-[16px] leading-relaxed">
                Navigate home financing, VA loan eligibility, interactive relocation expense calculators, and move insurance in one reliable portal.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="flex flex-col gap-6 sm:gap-8">
              <Screen
                src={IMG.financial}
                alt="MilitaryPCS Home Financing and Readiness Dashboard"
                caption="Home Financing &amp; Readiness: Centralized relocation financial dashboard tracking readiness score (82% prepared), checklist milestones, and verified mortgage professionals"
                ratio="aspect-[1024/785]"
                position="object-center"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
                <Screen
                  src={IMG.calculator}
                  alt="MilitaryPCS VA Loan and Mortgage Calculator"
                  caption="Mortgage Calculators: Comprehensive monthly payment breakdowns, loan limits, and VA funding fee estimations"
                  ratio="aspect-[891/1024]"
                  position="object-center"
                />
                <Screen
                  src={IMG.insurance}
                  alt="MilitaryPCS Moving Insurance and Coverage Guidance"
                  caption="Insurance &amp; Coverage: Move protection guidance and verified insurance networks"
                  ratio="aspect-[1024/849]"
                  position="object-center"
                />
              </div>
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
          <div className="flex flex-col gap-6 sm:gap-8 pt-8 sm:pt-12 border-t border-white/[0.08]">
            <motion.div {...fadeIn} className="flex flex-col gap-2 max-w-[60ch]">
              <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider">
                FEATURE 06 • CONTEXTUAL ASSISTANCE
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl lg:text-3xl text-[#F5F4F1]">
                AI Battle Buddy
              </h3>
              <p className="text-[#A09D95] text-sm sm:text-[16px] leading-relaxed">
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
      <section className="py-14 sm:py-20 lg:py-32 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-8 sm:gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-3 sm:gap-4 max-w-[62ch]">
            <span className="font-mono text-sm sm:text-[18px] text-[#F14417]">/design-system</span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-[#F5F4F1] leading-tight">
              An authoritative, respectful design system built for military life
            </h2>
            <p className="text-[#A09D95] text-base sm:text-lg lg:text-xl leading-relaxed">
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
          <motion.div {...fadeIn} className="flex flex-col gap-4 sm:gap-6">
            <span className="font-mono text-xs sm:text-sm text-[#F14417]">CORE COLOUR PALETTE (EXACT EXTRACTED TOKENS)</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
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
                    className="h-16 sm:h-20 w-full relative p-2.5 sm:p-3 flex items-end justify-between"
                    style={{ backgroundColor: swatch.hex }}
                  >
                    <span
                      className={`font-mono text-[11px] sm:text-xs font-semibold ${
                        swatch.dark ? "text-white" : "text-black"
                      }`}
                    >
                      {swatch.hex}
                    </span>
                  </div>
                  <div className="p-3 sm:p-4 flex flex-col gap-1">
                    <span className="font-display font-bold text-[#F5F4F1] text-xs sm:text-sm">{swatch.name}</span>
                    <span className="text-[#7A7873] text-[11px] sm:text-xs leading-normal">{swatch.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Typography & Components Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-2 sm:mt-4">
            <motion.div {...fadeIn} className="p-5 sm:p-6 lg:p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
              <span className="font-mono text-xs text-[#F14417] block mb-2 sm:mb-3 uppercase tracking-wider">
                Typography Architecture
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F4F1] mb-3 sm:mb-4">
                Structured, High-Legibility Type Hierarchy
              </h3>
              <ul className="flex flex-col gap-2.5 sm:gap-3 text-[#A09D95] text-sm sm:text-[15px] leading-relaxed">
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

            <motion.div {...fadeIn} className="p-5 sm:p-6 lg:p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
              <span className="font-mono text-xs text-[#F14417] block mb-2 sm:mb-3 uppercase tracking-wider">
                Key Interface Patterns
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F4F1] mb-3 sm:mb-4">
                Specialized Military Components
              </h3>
              <ul className="flex flex-col gap-2.5 sm:gap-3 text-[#A09D95] text-sm sm:text-[15px] leading-relaxed">
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
      <section className="py-14 sm:py-20 lg:py-32 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-6 sm:gap-10">
          <motion.span {...fadeIn} className="font-mono text-sm sm:text-[18px] text-[#F14417]">
            /outcome
          </motion.span>

          <motion.h2
            {...fadeIn}
            className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-[#F5F4F1] max-w-[28ch] leading-tight"
          >
            A calm, unified command center for military transitions.
          </motion.h2>

          <div className="flex flex-col gap-4 sm:gap-6 text-[#A09D95] text-base sm:text-lg lg:text-xl max-w-[64ch] leading-relaxed">
            <motion.p {...fadeIn}>
              MilitaryPCS establishes a unified digital platform that brings housing discovery, financial planning, base navigation, and local support resources into one stage-based experience.
            </motion.p>
            <motion.p {...fadeIn}>
              By pairing interactive geospatial exploration with military-verified professional support and stage-by-stage planning, the platform is designed to make military relocation clearer, more organized, and less stressful for service members and their families.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-2 sm:mt-4">
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
                className="p-5 sm:p-6 rounded-xl bg-[#121211] border border-white/[0.08]"
              >
                <span className="font-mono text-xs text-[#F14417] block mb-2">QUALITATIVE IMPACT</span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F4F1] mb-2">{o.title}</h3>
                <p className="text-[#A09D95] text-sm sm:text-[15px] leading-relaxed">{o.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.blockquote
            {...fadeIn}
            className="mt-8 sm:mt-12 max-w-[840px] font-display font-bold text-xl sm:text-3xl lg:text-4xl tracking-[-0.02em] text-[#F5F4F1] leading-snug"
          >
            &ldquo;Making military relocation simpler, more connected, and less overwhelming.&rdquo;
          </motion.blockquote>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. PROJECT NAVIGATION */}
      {/* ========================================================= */}
      <ProjectNav
        prev={{ title: "MazeFlower", href: "/work/mazeflower" }}
        next={{ title: "Descartes", href: "/work/descartes" }}
      />
    </main>
  );
}

