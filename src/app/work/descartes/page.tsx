"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { ArrowLeft, ArrowRight } from "lucide-react";

/**
 * IMAGE SLOTS
 * Drop your screenshots into /public/images/projects/descartes/ using these
 * file names (or change the paths below). Until a file exists, the page shows
 * a dashed placeholder instead of a broken image.
 *
 * Use dummy patient data in every screenshot.
 */
const IMG = {
  hero: "/images/projects/descartes/hero.png",
  dashboard: "/images/projects/descartes/dashboard.png",
  liveMonitor: "/images/projects/descartes/live-monitor.png",
  createProcedure: "/images/projects/descartes/create-procedure.png",
  workflows: "/images/projects/descartes/workflows.png",
  insightsPredictive: "/images/projects/descartes/insights-predictive.png",
  insightsComparative: "/images/projects/descartes/insights-comparative.png",
  designSystem: "/images/projects/descartes/design-system.png",
};

/** Desktop-style screen frame with graceful fallback when the image isn't added yet. */
function Screen({
  src,
  alt,
  caption,
  ratio = "aspect-[16/9]",
  priority = false,
  hideIfMissing = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  priority?: boolean;
  /** Render nothing (instead of a placeholder) until the image file exists. */
  hideIfMissing?: boolean;
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
              className="object-cover object-top"
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

export default function DescartesCaseStudy() {
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
            Descartes
          </motion.h1>

          <motion.p
            {...fadeIn}
            className="text-xl sm:text-2xl md:text-3xl text-[#A09D95] font-light leading-relaxed max-w-[40ch]"
          >
            A surgical workflow support platform for real-time monitoring, voice input and analysis, built to support the team&apos;s planned workflow.
          </motion.p>
        </div>

        <motion.div
          {...fadeIn}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 mt-12 border-t border-b border-white/[0.08]"
        >
          {[
            { k: "Role", v: "UI/UX Designer" },
            { k: "Product", v: "Descartes by ai4medx" },
            { k: "Scope", v: "Product UX, UI, design system, developer handoff" },
            { k: "Platform", v: "Web • desktop, tablet, mobile browser" },
          ].map((m) => (
            <div key={m.k}>
              <span className="font-mono text-sm text-[#7A7873] block mb-1">{m.k}</span>
              <span className="text-[18px] text-[#F5F4F1] font-medium">{m.v}</span>
            </div>
          ))}
        </motion.div>

        <motion.div {...fadeIn} className="mt-12">
          <Screen
            src={IMG.hero}
            alt="Descartes dashboard and Live Monitor screens"
            caption="Descartes: the dashboard overview and the Live Monitor"
            ratio="aspect-[16/9]"
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
              The idea in short<span className="font-mono text-[18px] text-[#F14417] ml-2">*</span>
            </h2>
          </motion.div>

          <motion.div {...fadeIn} className="flex flex-col gap-8">
            <p className="text-[#F5F4F1] text-xl sm:text-2xl leading-relaxed">
              Descartes turns the surgical checklist from a static, pre-procedure form into an active system that stays relevant from preparation to completion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { n: "01", t: "The problem", d: "Static checklists, hands-busy surgeons and little visibility into how the workflow was actually followed." },
                { n: "02", t: "The approach", d: "Monitor the planned workflow live, capture progress by voice, and analyse it before and after." },
                { n: "03", t: "The result", d: "A web platform covering the day overview, workflows, a live monitor and insights." },
              ].map((c) => (
                <div key={c.n} className="p-5 rounded-lg bg-[#121211] border border-white/[0.08]">
                  <span className="font-mono text-xs text-[#F14417] block mb-2">{c.n}</span>
                  <h3 className="font-display font-bold text-lg text-[#F5F4F1] mb-1">{c.t}</h3>
                  <p className="text-[#A09D95] text-[15px] leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-[#121211] border border-white/[0.08] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1E6BFF]" />
              <span className="font-mono text-xs text-[#1E6BFF] block mb-2">CORE PRINCIPLE</span>
              <p className="text-[#F5F4F1] text-lg leading-relaxed">
                The surgeon remains in control. Descartes supports the planned workflow. It does not direct, manage or decide for the surgical team.
              </p>
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
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] max-w-[26ch] leading-tight"
          >
            In the operating room, clarity has to survive the pressure.
          </motion.h2>

          <motion.p {...fadeIn} className="text-[#A09D95] text-lg sm:text-xl max-w-[60ch] leading-relaxed">
            Preventable errors and adverse events are a persistent risk in surgery, and the tools meant to reduce them rarely fit how a procedure actually unfolds.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            {[
              {
                t: "Static checklists",
                d: "Typically used only before the procedure, so they go quiet at the moment the team is busiest.",
              },
              {
                t: "Hands and eyes occupied",
                d: "Surgeons can't stop to operate a computer. Any manual interaction mid-procedure is disruptive.",
              },
              {
                t: "Limited visibility",
                d: "Hard to see how closely a workflow was followed, or to compare across cases, surgeons and institutions.",
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
              &ldquo;How might we keep the planned workflow present throughout a procedure, without asking the surgeon to look away from the patient?&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. PRINCIPLES */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-4 mb-14">
          <span className="font-mono text-[18px] text-[#F14417]">/principles</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F5F4F1] max-w-[24ch]">
            Four rules every screen had to pass
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              n: "01",
              t: "Surgeon-first",
              d: "Support the planned workflow, never replace clinical judgment. The interface stays quiet unless something needs attention.",
            },
            {
              n: "02",
              t: "Glanceable under real conditions",
              d: "Strong hierarchy and high readability, especially in the Live Monitor, designed for OR lighting and for users in their 40s and 50s and beyond.",
            },
            {
              n: "03",
              t: "Voice first, hands second",
              d: "Voice is the primary input during surgery. Manual controls stay available as a backup, never the main path.",
            },
            {
              n: "04",
              t: "Alerts impossible to miss",
              d: "Unresolved alerts stay in front of the team. Once resolved, they leave the active view and remain in history.",
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
              <span className="font-mono text-sm text-[#F14417] block mb-4">PRINCIPLE {p.n}</span>
              <h3 className="font-display font-bold text-2xl text-[#F5F4F1] mb-3">{p.t}</h3>
              <p className="text-[#A09D95] text-[16px] leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. USERS & PERMISSIONS */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-4 mb-14">
          <span className="font-mono text-[18px] text-[#F14417]">/users</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F5F4F1] max-w-[26ch]">
            Two roles, with a deliberate line between them
          </h2>
          <p className="text-[#A09D95] text-lg max-w-[56ch]">
            Hospital administrators need the big picture. Surgeons need control of their own cases. The permission model keeps those two needs from colliding in a live procedure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-sm text-[#1E6BFF] block mb-2">SURGEON / CLINICAL USER</span>
            <h3 className="font-display font-bold text-2xl text-[#F5F4F1] mb-4">Full control of their cases</h3>
            <ul className="flex flex-col gap-3 text-[#A09D95] text-[16px] leading-relaxed">
              <li>• Creates and edits workflows, where authorised</li>
              <li>• Starts, pauses and completes procedures</li>
              <li>• Uses voice commands in the Live Monitor</li>
              <li>• Views their own analytics</li>
            </ul>
          </motion.div>

          <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-sm text-[#3DBDBA] block mb-2">MASTER ACCOUNT / HOSPITAL ADMIN</span>
            <h3 className="font-display font-bold text-2xl text-[#F5F4F1] mb-4">Organisation-wide, view-only in the OR</h3>
            <ul className="flex flex-col gap-3 text-[#A09D95] text-[16px] leading-relaxed">
              <li>• Consolidated KPIs across all sub-accounts</li>
              <li>• Views all active procedures, but cannot intervene</li>
              <li>• Can cancel upcoming procedures, never live ones</li>
              <li>• View-only access to workflows</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. STRUCTURE */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-4 mb-14">
          <span className="font-mono text-[18px] text-[#F14417]">/structure</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F5F4F1] max-w-[24ch]">
            One mental model from planning to review
          </h2>
          <p className="text-[#A09D95] text-lg max-w-[56ch]">
            A clear vocabulary lets the same structure carry through setup, the live case and the analysis afterwards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { k: "Workflow", d: "The planned template: phases, critical steps, alerts and reminders." },
            { k: "Phase", d: "A major stage within a workflow." },
            { k: "Critical step", d: "An individual required action inside a phase." },
            { k: "Procedure", d: "An actual surgical case that uses a workflow for a specific patient." },
          ].map((c, i) => (
            <motion.div
              key={c.k}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-6 rounded-xl bg-[#121211] border border-white/[0.08] relative"
            >
              <span className="font-mono text-xs text-[#F14417] block mb-2">0{i + 1}</span>
              <h3 className="font-display font-bold text-xl text-[#F5F4F1] mb-2">{c.k}</h3>
              <p className="text-[#A09D95] text-[15px] leading-relaxed">{c.d}</p>
              {i < 3 && (
                <span className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-[#7A7873] font-mono z-10">
                  →
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-xs text-[#7A7873] block mb-3">WORKFLOW COMPLIANCE</span>
            <p className="font-mono text-[#F5F4F1] text-lg leading-relaxed">
              Completed required steps ÷ total required steps × 100
            </p>
            <p className="text-[#A09D95] text-[16px] leading-relaxed mt-3">
              A single, transparent number that appears on the dashboard, in case summaries and in comparative analytics.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-xs text-[#7A7873] block mb-3">NAVIGATION</span>
            <div className="flex flex-wrap gap-2">
              {["Dashboard", "Procedures", "Workflows", "Insights & AI", "Live Active Monitor", "Administration"].map(
                (n) => (
                  <span
                    key={n}
                    className="px-3 py-1 rounded-full border border-white/10 font-mono text-xs text-[#A09D95]"
                  >
                    {n}
                  </span>
                )
              )}
            </div>
            <p className="text-[#A09D95] text-[16px] leading-relaxed mt-3">
              Administration appears for Master Accounts only. Search, notifications, alerts and the main contextual action live in the header.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. KEY DECISIONS */}
      {/* ========================================================= */}
      <section className="pt-24 sm:pt-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-4">
          <span className="font-mono text-[18px] text-[#F14417]">/key-decisions</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#F5F4F1] max-w-[22ch]">
            Four decisions that shaped the product
          </h2>
        </motion.div>
      </section>

      {/* ---- Decision 01: Dashboard ---- */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 max-w-[1260px] mx-auto">
        <div className="flex flex-col gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-4 max-w-[62ch]">
            <span className="font-mono text-sm text-[#F14417]">DECISION 01 • DASHBOARD</span>
            <h3 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#F5F4F1]">
              Open on the day, not on a menu
            </h3>
            <p className="text-[#A09D95] text-lg leading-relaxed">
              The dashboard answers one question quickly: what is ahead, what is active, and what needs attention. A Weekly Overview of four KPIs sits on top, followed by a compact Live Procedure Monitor, today&apos;s and recent procedures, and an AI snapshot. When a case is active, the green Live Active Monitor button in the header and an Open Live Monitor action make it one tap away.
            </p>
          </motion.div>

          <motion.div {...fadeIn}>
            <Screen
              src={IMG.dashboard}
              alt="Descartes dashboard"
              caption="Dashboard: weekly overview, live procedure, today's cases and AI snapshot"
            />
          </motion.div>

          <motion.div {...fadeIn} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {["Upcoming procedures", "Active alerts", "Average procedure time", "Workflow compliance %"].map((k) => (
              <div key={k} className="p-4 rounded-lg bg-[#121211] border border-white/[0.08]">
                <span className="font-mono text-xs text-[#7A7873] block mb-1">KPI</span>
                <span className="text-[#F5F4F1] text-[16px] font-medium">{k}</span>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeIn}>
            <DecisionNote
              decision="Make the dashboard an operational overview with one dominant action, not an analytics wall."
              why="Clinical teams arrive between cases with little time. The most important thing, whether a case is live, should never need to be found."
              tradeoff="Deeper analysis is pushed to Insights & AI, so the dashboard shows a snapshot rather than the full picture."
            />
          </motion.div>
        </div>
      </section>

      {/* ---- Decision 02: Live Monitor ---- */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-4 max-w-[62ch]">
            <span className="font-mono text-sm text-[#F14417]">DECISION 02 • LIVE MONITOR</span>
            <h3 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#F5F4F1]">
              Make the current step the hero, and everything else supporting
            </h3>
            <p className="text-[#A09D95] text-lg leading-relaxed">
              This is the most critical screen in the product. It shows the procedure, patient, surgeon and OR, elapsed time and progress, the phase list (completed, current, upcoming), voice status and Periscope predictions. The current critical step sits at the centre, highlighted against the completed and upcoming steps around it, and active alerts get their own red-bordered panel so they can&apos;t be missed.
            </p>
          </motion.div>

          <motion.div {...fadeIn}>
            <Screen
              src={IMG.liveMonitor}
              alt="Descartes Live Monitor"
              caption="Live Monitor: phases, current critical step, voice control, Periscope predictions and active alerts"
            />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div {...fadeIn} className="p-6 rounded-xl bg-[#121211] border border-white/[0.08]">
              <span className="font-mono text-xs text-[#F14417] block mb-2">VOICE</span>
              <h4 className="font-display font-bold text-xl text-[#F5F4F1] mb-2">Hands-free by default</h4>
              <p className="text-[#A09D95] text-[15px] leading-relaxed mb-4">
                A wake phrase starts listening. Commands cover Complete, Pause, Resume, Remove and Add Voice Note, and every action asks for confirmation before it executes. Voice notes are transcribed into the procedure record.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Ready", "Listening", "Processing", "Completed", "Not understood"].map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-full border border-white/10 font-mono text-[11px] text-[#A09D95]">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="p-6 rounded-xl bg-[#121211] border border-white/[0.08]">
              <span className="font-mono text-xs text-[#F14417] block mb-2">GATING</span>
              <h4 className="font-display font-bold text-xl text-[#F5F4F1] mb-2">Required steps stay required</h4>
              <p className="text-[#A09D95] text-[15px] leading-relaxed">
                All critical steps are required. The workflow can&apos;t advance until the current step is completed or explicitly removed, and step-level alerts must be resolved first.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="p-6 rounded-xl bg-[#121211] border border-white/[0.08]">
              <span className="font-mono text-xs text-[#F14417] block mb-2">ALERTS</span>
              <h4 className="font-display font-bold text-xl text-[#F5F4F1] mb-2">Active means unresolved</h4>
              <p className="text-[#A09D95] text-[15px] leading-relaxed">
                Once an alert is resolved and the team moves on, it leaves the Active Alerts list and stays in the event log, so the live view never fills with noise.
              </p>
            </motion.div>
          </div>

          <motion.div {...fadeIn}>
            <DecisionNote
              decision="Use a dark, high-contrast layout with large type, voice as the primary input and manual controls (Complete Step, Pause Monitoring, Add Voice Note, Flag Issue) as a backup row, with view-only access for Master Accounts."
              why="The OR is dimly lit, hands are busy and attention belongs on the patient. Glanceability and confirmation matter more than density, and observers must never be able to affect a live case."
              tradeoff="Strict gating adds friction. An explicit, confirmed Remove action keeps the surgeon in control when a step genuinely doesn't apply."
            />
          </motion.div>
        </div>
      </section>

      {/* ---- Decision 03: Workflows & procedure setup ---- */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-4 max-w-[62ch]">
            <span className="font-mono text-sm text-[#F14417]">DECISION 03 • WORKFLOWS & SETUP</span>
            <h3 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#F5F4F1]">
              Plan once as a template, adapt per case without changing it
            </h3>
            <p className="text-[#A09D95] text-lg leading-relaxed">
              Workflows define the phases, critical steps and reminders the team intends to follow. Creating a procedure is a five-step flow: patient information, workflow selection, case-specific modifications, clinical team, then review and start or schedule.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="flex flex-col gap-10">
            <Screen
              src={IMG.workflows}
              alt="Workflow library"
              caption="Workflow library: reusable templates with status, procedure type and quick actions"
              ratio="aspect-[1920/1123]"
            />
            <Screen
              src={IMG.createProcedure}
              alt="Create procedure multi-step flow"
              caption="Create procedure, step by step"
              hideIfMissing
            />
          </motion.div>

          <motion.div {...fadeIn} className="flex flex-wrap gap-2">
            {["Patient information", "Workflow selection", "Modify workflow", "Clinical team", "Review & start"].map(
              (s, i) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full border border-white/10 font-mono text-xs text-[#A09D95]"
                >
                  <span className="text-[#F14417]">0{i + 1}</span> {s}
                </span>
              )
            )}
          </motion.div>

          <motion.div {...fadeIn}>
            <DecisionNote
              decision="Separate the workflow template from the procedure, so edits for one patient stay case-specific."
              why="Teams want to standardise how they work, but real cases vary. Keeping the template untouched protects consistency and still allows adjustment."
              tradeoff="One more concept for new users to learn. A consistent vocabulary and a clear review step before starting keep it manageable."
            />
          </motion.div>
        </div>
      </section>

      {/* ---- Decision 04: Insights & AI ---- */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-4 max-w-[62ch]">
            <span className="font-mono text-sm text-[#F14417]">DECISION 04 • INSIGHTS & AI</span>
            <h3 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#F5F4F1]">
              Never show a prediction without something to compare it to
            </h3>
            <p className="text-[#A09D95] text-lg leading-relaxed">
              Before a case, the surgeon enters the planned procedure and patient context (age, diagnosis, co-morbidities, medications) and generates predictions for procedure time, complication rate, length of stay and 30-day readmission. Each figure is set against the top 5%, the hospital average and the national figure, followed by improvement opportunities ranked by expected impact. After cases, comparative analytics surfaces best and worst outcomes, rankings, sources of delay and performance over time. During a case, Periscope updates predicted remaining time and risk as the workflow progresses.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="flex flex-col gap-10">
            <div className="w-full max-w-[1000px] mx-auto">
              <Screen
                src={IMG.insightsPredictive}
                alt="Pre-operative predictive analytics"
                caption="Pre-operative insights: configuration, benchmark comparison and ranked opportunities"
                ratio="aspect-[1920/1720]"
              />
            </div>
            <div className="w-full max-w-[1000px] mx-auto">
              <Screen
                src={IMG.insightsComparative}
                alt="Post-operative comparative analytics"
                caption="Post-operative comparative analytics"
                ratio="aspect-[1920/1720]"
                hideIfMissing
              />
            </div>
          </motion.div>

          <motion.div {...fadeIn}>
            <DecisionNote
              decision="Pair every predicted figure with benchmarks, and rank improvement opportunities by expected impact."
              why="A single number is hard to judge on its own. Comparing against the top 5%, the hospital and the national figure gives the surgical team context to prepare with."
              tradeoff="Ranked opportunities sit close to clinical advice, so their wording needs the most care. The platform's role is to inform the team's planning, not to decide for them."
            />
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. DESIGN SYSTEM */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-3">
            <span className="font-mono text-[18px] text-[#F14417]">/design-system</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F5F4F1] max-w-[24ch]">
              Clinical, calm and precise
            </h2>
            <p className="text-[#A09D95] text-lg max-w-[52ch]">
              Soft rounded cards, subtle shadows and a restrained palette keep the interface readable and low in cognitive load. The Live Monitor is the one deliberate exception.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col gap-6">
              <span className="font-mono text-sm text-[#F14417]">01 / COLOUR</span>
              <h3 className="font-display font-bold text-2xl text-[#F5F4F1]">Meaning before decoration</h3>
              <p className="text-[#A09D95] text-[16px] leading-relaxed">
                Blue for primary actions, teal for positive states, amber for warnings, and red reserved for critical alerts only.
              </p>
              <div className="flex gap-2 mt-auto pt-4">
                <span className="h-8 flex-1 rounded bg-[#0A2540] ring-1 ring-white/10" title="Deep Navy #0A2540" />
                <span className="h-8 flex-1 rounded bg-[#1E6BFF]" title="Medical Blue #1E6BFF" />
                <span className="h-8 flex-1 rounded bg-[#3DBDBA]" title="Soft Teal #3DBDBA" />
                <span className="h-8 flex-1 rounded bg-[#F8FAFC]" title="Light #F8FAFC" />
                <span className="h-8 flex-1 rounded bg-amber-500" title="Warning (amber)" />
                <span className="h-8 flex-1 rounded bg-red-500" title="Critical (red)" />
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col gap-6">
              <span className="font-mono text-sm text-[#F14417]">02 / TYPE</span>
              <h3 className="font-display font-bold text-2xl text-[#F5F4F1]">Hierarchy you can read at a glance</h3>
              <p className="text-[#A09D95] text-[16px] leading-relaxed">
                Geist or Inter, with bold and semibold reserved for critical information and regular weight for everything secondary.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {["Geist / Inter", "Strong hierarchy", "High readability"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full border border-white/10 font-mono text-xs text-[#A09D95]">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col gap-6">
              <span className="font-mono text-sm text-[#F14417]">03 / LIVE MONITOR</span>
              <h3 className="font-display font-bold text-2xl text-[#F5F4F1]">A theme built for the OR</h3>
              <p className="text-[#A09D95] text-[16px] leading-relaxed">
                Dark and high-contrast, tuned for OR lighting and for readability at a distance by users in their 40s and 50s and beyond.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {["Dark theme", "High contrast", "Glanceable"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full border border-white/10 font-mono text-xs text-[#A09D95]">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeIn}>
            <Screen
              src={IMG.designSystem}
              alt="Descartes design system components"
              caption="Component library and tokens"
              ratio="aspect-[16/9]"
              hideIfMissing
            />
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. LANGUAGE */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-4 mb-14">
          <span className="font-mono text-[18px] text-[#F14417]">/language</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F5F4F1] max-w-[24ch]">
            In a clinical product, wording is part of the design
          </h2>
          <p className="text-[#A09D95] text-lg max-w-[56ch]">
            Every label, description and demo line had to reflect the same stance: the team is in charge, and the platform supports them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-xs text-[#3DBDBA] block mb-4">WE SAY</span>
            <ul className="flex flex-col gap-3 text-[#F5F4F1] text-[17px] leading-relaxed">
              <li>• Supports the planned workflow</li>
              <li>• Monitoring, capturing, reminders and analysis</li>
              <li>• The surgeon remains in control</li>
            </ul>
          </motion.div>

          <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-xs text-[#f87171] block mb-4">WE AVOID</span>
            <ul className="flex flex-col gap-3 text-[#A09D95] text-[17px] leading-relaxed">
              <li>• &ldquo;Guide the surgeon&rdquo;</li>
              <li>• &ldquo;Manage the procedure&rdquo;</li>
              <li>• &ldquo;Direct&rdquo; or &ldquo;recommend&rdquo; clinical actions</li>
              <li>• Anything implying the system decides for the team</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. OUTCOME & NEXT */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-4 mb-14">
          <span className="font-mono text-[18px] text-[#F14417]">/outcome</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F5F4F1] max-w-[22ch]">
            What I delivered, learned and am finishing next
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-sm text-[#F14417] block mb-4">DELIVERED</span>
            <ul className="flex flex-col gap-3 text-[#A09D95] text-[16px] leading-relaxed">
              <li>• Dashboard, procedures list, multi-step procedure creation and the workflow library and editor</li>
              <li>• The Live Monitor with voice states, gating and alert behaviour</li>
              <li>• Pre-operative predictive and post-operative comparative analytics</li>
              <li>• A design system and a defined route structure for developer handoff</li>
            </ul>
          </motion.div>

          <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-sm text-[#F14417] block mb-4">WHAT I LEARNED</span>
            <ul className="flex flex-col gap-3 text-[#A09D95] text-[16px] leading-relaxed">
              <li>• In the OR, glanceability beats density. Removing information mattered more than adding it.</li>
              <li>• Permissions are a safety feature: the view-only Master Account protects live cases.</li>
              <li>• Language is part of the interface, and it shapes whether the product feels supportive or controlling.</li>
            </ul>
          </motion.div>

          <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-sm text-[#F14417] block mb-4">NEXT UP</span>
            <ul className="flex flex-col gap-3 text-[#A09D95] text-[16px] leading-relaxed">
              <li>• High-fidelity login and secure access</li>
              <li>• Dedicated alert and hold management state</li>
              <li>• Procedure completion summary and full case details</li>
              <li>• Procedure filters and calendar toggle</li>
              <li>• Final readability and contrast pass on the Live Monitor</li>
            </ul>
          </motion.div>
        </div>

        <motion.blockquote
          {...fadeIn}
          className="mt-16 max-w-[820px] font-display font-bold text-2xl sm:text-4xl tracking-[-0.02em] text-[#F5F4F1] leading-snug"
        >
          &ldquo;Descartes does not direct the surgery. It supports the planned workflow, quietly and consistently, from preparation to completion.&rdquo;
        </motion.blockquote>
      </section>

      {/* ========================================================= */}
      {/* 11. PROJECT NAVIGATION */}
      {/* ========================================================= */}
      <section className="pt-16 pb-24 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-3 font-mono text-[18px] text-[#A09D95] hover:text-[#F14417] transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Previous: Military PCS Dashboard</span>
          </Link>

          <Link
            href="/#work"
            className="font-mono text-[16px] text-[#7A7873] hover:text-[#F5F4F1] border border-white/10 hover:border-white/20 rounded-full px-5 py-2 transition-colors"
          >
            Back to Selected Projects
          </Link>

          <Link
            href="/work/tiny-bits-of-love"
            className="inline-flex items-center gap-3 font-mono text-[18px] text-[#A09D95] hover:text-[#F14417] transition-colors group"
          >
            <span>Next: Tiny Bits of Love</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
