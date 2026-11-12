"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { ArrowLeft } from "lucide-react";
import { Screen, DecisionNote, MetaRow, ProjectNav } from "@/components/case-study";

const IMG = {
  hero: "/images/projects/descartes/hero.webp",
  dashboard: "/images/projects/descartes/dashboard.webp",
  liveMonitor: "/images/projects/descartes/live-monitor.webp",
  createProcedure: "/images/projects/descartes/create-procedure.png",
  workflows: "/images/projects/descartes/workflows.webp",
  insightsPredictive: "/images/projects/descartes/insights-predictive.webp",
  insightsComparative: "/images/projects/descartes/insights-comparative.webp",
  designSystem: "/images/projects/descartes/design-system.png",
};

export default function DescartesCaseStudy() {
  const prefersReduced = useReducedMotion();

  const fadeIn = {
    initial: prefersReduced ? { opacity: 1 } : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.5 },
  };

  return (
    <main className="min-h-screen bg-[#0B0B0A] text-[#F5F4F1] relative selection:bg-[#F14417] selection:text-white overflow-x-hidden">
      <Navbar />

      {/* ========================================================= */}
      {/* 1. HERO */}
      {/* ========================================================= */}
      <section className="pt-28 sm:pt-36 lg:pt-44 pb-12 sm:pb-16 lg:pb-20 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto relative z-10">
        <motion.div {...fadeIn} className="mb-6 sm:mb-8">
          <Link
            href="/#work"
            className="min-h-[44px] inline-flex items-center gap-2 font-mono text-[14px] sm:text-[16px] text-[#A09D95] hover:text-[#F14417] transition-colors group py-2"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Selected work</span>
          </Link>
        </motion.div>

        <div className="flex flex-col gap-4 sm:gap-6 max-w-[960px]">
          <motion.div {...fadeIn} className="flex items-center gap-3">
            <span className="font-mono text-base sm:text-[18px] text-[#F14417]">/case-study</span>
            <span className="font-mono text-xs sm:text-[14px] text-[#A09D95] border border-white/10 rounded-full px-3 py-1">
              Case 01
            </span>
          </motion.div>

          <motion.h1
            {...fadeIn}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em] text-[#F5F4F1] leading-[1.08] break-words"
          >
            Descartes
          </motion.h1>

          <motion.p
            {...fadeIn}
            className="text-lg sm:text-xl md:text-2xl text-[#A09D95] font-light leading-relaxed max-w-none lg:max-w-[44ch]"
          >
            A surgical workflow support platform for real-time monitoring, voice input and analysis, built to support the team&apos;s planned workflow.
          </motion.p>
        </div>

        <motion.div {...fadeIn} className="mt-8 sm:mt-12">
          <MetaRow
            items={[
              { label: "Role", value: "UI/UX Designer" },
              { label: "Product", value: "Descartes by ai4medx" },
              { label: "Scope", value: "Product UX, UI, design system, developer handoff" },
              { label: "Platform", value: "Web • desktop, tablet, mobile browser" },
            ]}
          />
        </motion.div>

        <motion.div {...fadeIn} className="mt-8 sm:mt-12">
          <Screen
            src={IMG.hero}
            alt="Descartes dashboard, Live Monitor, and marketing intelligence screens"
            caption="Descartes: multi-device ecosystem across desktop dashboard, Live Monitor, and procedural telemetry"
            ratio="aspect-[16/10]"
            fit="contain"
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
            <span className="font-mono text-base sm:text-[18px] text-[#F14417]">/summary</span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#F5F4F1]">
              The idea in short
            </h2>
          </motion.div>

          <motion.div {...fadeIn} className="flex flex-col gap-6 sm:gap-8">
            <p className="text-[#F5F4F1] text-lg sm:text-xl lg:text-2xl leading-relaxed">
              Descartes turns the surgical checklist from a static, pre-procedure form into an active system that stays relevant from preparation to completion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { n: "01", t: "The problem", d: "Static checklists, hands-busy surgeons and little visibility into how the workflow was actually followed." },
                { n: "02", t: "The approach", d: "Monitor the planned workflow live, capture progress by voice, and analyse it before and after." },
                { n: "03", t: "The result", d: "Delivered interface screens for the daily dashboard, procedures list, multi-step creation flow, workflow library, Live Monitor, and predictive/comparative insights." },
              ].map((c) => (
                <div key={c.n} className="p-4 sm:p-5 rounded-lg bg-[#121211] border border-white/[0.08]">
                  <span className="font-mono text-xs text-[#F14417] block mb-2">{c.n}</span>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F4F1] mb-1">{c.t}</h3>
                  <p className="text-[#A09D95] text-[14px] sm:text-[15px] leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-[#121211] border border-white/[0.08] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#1E6BFF]" />
              <span className="font-mono text-xs text-[#1E6BFF] block mb-2">CORE PRINCIPLE</span>
              <p className="text-[#F5F4F1] text-base sm:text-lg leading-relaxed">
                The surgeon remains in control. Descartes supports the planned workflow. It does not direct, manage or decide for the surgical team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. PROBLEM */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 lg:py-32 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-6 sm:gap-10">
          <motion.span {...fadeIn} className="font-mono text-base sm:text-[18px] text-[#F14417]">
            /problem
          </motion.span>

          <motion.h2
            {...fadeIn}
            className="font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] text-[#F5F4F1] max-w-none lg:max-w-[26ch] leading-tight"
          >
            In the operating room, clarity has to survive the pressure.
          </motion.h2>

          <motion.p {...fadeIn} className="text-[#A09D95] text-base sm:text-lg lg:text-xl max-w-none lg:max-w-[60ch] leading-relaxed">
            Surgical workflows demand high consistency, yet the tools meant to support procedural adherence rarely match how a case unfolds in practice.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-2">
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
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-5 sm:p-6 rounded-xl bg-[#121211] border border-white/[0.08]"
              >
                <span className="font-mono text-xs text-[#8E8B85] block mb-2">WHERE IT BREAKS</span>
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F4F1] mb-2">{g.t}</h3>
                <p className="text-[#A09D95] text-[15px] sm:text-[16px] leading-relaxed">{g.d}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeIn}
            className="mt-4 p-5 sm:p-8 lg:p-12 rounded-xl bg-[#121211] border border-white/[0.08] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#F14417]" />
            <span className="font-mono text-sm sm:text-[16px] text-[#F14417] block mb-3">THE DESIGN QUESTION</span>
            <blockquote className="font-display font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#F5F4F1] tracking-tight leading-snug text-balance">
              &ldquo;How might we keep the planned workflow present throughout a procedure, without asking the surgeon to look away from the patient?&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. PRINCIPLES */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 lg:py-32 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-14">
          <span className="font-mono text-base sm:text-[18px] text-[#F14417]">/principles</span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F4F1] max-w-none lg:max-w-[24ch]">
            Four rules every screen had to pass
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {[
            {
              n: "01",
              t: "Surgeon-first",
              d: "Support the planned workflow, never replace clinical judgment. The interface stays quiet unless something needs attention.",
            },
            {
              n: "02",
              t: "Glanceable under real conditions",
              d: "Strong hierarchy and high readability, especially in the Live Monitor, designed for readability at a distance under OR lighting.",
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
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 sm:p-6 lg:p-8 rounded-xl bg-[#121211] border border-white/[0.08] hover:border-[#F14417]/40 transition-colors"
            >
              <span className="font-mono text-xs sm:text-sm text-[#F14417] block mb-3 sm:mb-4">PRINCIPLE {p.n}</span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F4F1] mb-2 sm:mb-3">{p.t}</h3>
              <p className="text-[#A09D95] text-[15px] sm:text-[16px] leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. USERS & PERMISSIONS */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 lg:py-32 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-14">
          <span className="font-mono text-base sm:text-[18px] text-[#F14417]">/users</span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F4F1] max-w-none lg:max-w-[26ch]">
            Two roles, with a deliberate line between them
          </h2>
          <p className="text-[#A09D95] text-base sm:text-lg max-w-none lg:max-w-[56ch] leading-relaxed">
            Hospital administrators need the big picture. Surgeons need control of their own cases. The permission model keeps those two needs from colliding in a live procedure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <motion.div {...fadeIn} className="p-5 sm:p-6 lg:p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-xs sm:text-sm text-[#1E6BFF] block mb-2">SURGEON / CLINICAL USER</span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F4F1] mb-3 sm:mb-4">Full control of their cases</h3>
            <ul className="flex flex-col gap-2.5 sm:gap-3 text-[#A09D95] text-[15px] sm:text-[16px] leading-relaxed">
              <li>• Creates and edits workflows, where authorised</li>
              <li>• Starts, pauses and completes procedures</li>
              <li>• Uses voice commands in the Live Monitor</li>
              <li>• Views their own analytics</li>
            </ul>
          </motion.div>

          <motion.div {...fadeIn} className="p-5 sm:p-6 lg:p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-xs sm:text-sm text-[#3DBDBA] block mb-2">MASTER ACCOUNT / HOSPITAL ADMIN</span>
            <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F4F1] mb-3 sm:mb-4">Organisation-wide, view-only in the OR</h3>
            <ul className="flex flex-col gap-2.5 sm:gap-3 text-[#A09D95] text-[15px] sm:text-[16px] leading-relaxed">
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
      <section className="py-14 sm:py-20 lg:py-32 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-14">
          <span className="font-mono text-base sm:text-[18px] text-[#F14417]">/structure</span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F4F1] max-w-none lg:max-w-[24ch]">
            One mental model from planning to review
          </h2>
          <p className="text-[#A09D95] text-base sm:text-lg max-w-none lg:max-w-[56ch] leading-relaxed">
            A clear vocabulary lets the same structure carry through setup, the live case and the analysis afterwards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { k: "Workflow", d: "The planned template: phases, critical steps, alerts and reminders." },
            { k: "Phase", d: "A major stage within a workflow." },
            { k: "Critical step", d: "An individual required action inside a phase." },
            { k: "Procedure", d: "An actual surgical case that uses a workflow for a specific patient." },
          ].map((c, i) => (
            <motion.div
              key={c.k}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="p-5 sm:p-6 rounded-xl bg-[#121211] border border-white/[0.08] relative"
            >
              <span className="font-mono text-xs text-[#F14417] block mb-2">0{i + 1}</span>
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F4F1] mb-2">{c.k}</h3>
              <p className="text-[#A09D95] text-[14px] sm:text-[15px] leading-relaxed">{c.d}</p>
              {i < 3 && (
                <span className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-[#7A7873] font-mono z-10">
                  →
                </span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6">
          <motion.div {...fadeIn} className="p-5 sm:p-6 lg:p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-xs text-[#8E8B85] block mb-3">WORKFLOW COMPLIANCE</span>
            <p className="font-mono text-[#F5F4F1] text-base sm:text-lg leading-relaxed">
              Completed required steps ÷ total required steps × 100
            </p>
            <p className="text-[#A09D95] text-[14px] sm:text-[16px] leading-relaxed mt-3">
              Calculated as completed required steps divided by total required steps, displayed in the dashboard Weekly Overview KPI card.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="p-5 sm:p-6 lg:p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-xs text-[#8E8B85] block mb-3">NAVIGATION</span>
            <div className="flex flex-wrap gap-2">
              {["Dashboard", "Procedures", "Workflows", "Insights & AI", "Live Active Monitor", "Administration"].map(
                (n) => (
                  <span
                    key={n}
                    className="px-2.5 sm:px-3 py-1 rounded-full border border-white/10 font-mono text-xs text-[#A09D95]"
                  >
                    {n}
                  </span>
                )
              )}
            </div>
            <p className="text-[#A09D95] text-[14px] sm:text-[16px] leading-relaxed mt-3">
              Administration appears for Master Accounts only. Search, notifications, alerts and the main contextual action live in the header.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. KEY DECISIONS */}
      {/* ========================================================= */}
      <section className="pt-14 sm:pt-20 lg:pt-32 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-3 sm:gap-4">
          <span className="font-mono text-base sm:text-[18px] text-[#F14417]">/key-decisions</span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#F5F4F1] max-w-none lg:max-w-[22ch]">
            Four decisions that shaped the product
          </h2>
        </motion.div>
      </section>

      {/* ---- Decision 01: Dashboard ---- */}
      <section className="py-12 sm:py-16 lg:py-24 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto">
        <div className="flex flex-col gap-8 sm:gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-3 sm:gap-4 max-w-none lg:max-w-[62ch]">
            <span className="font-mono text-xs sm:text-sm text-[#F14417]">DECISION 01 • DASHBOARD</span>
            <h3 className="font-display font-bold text-xl sm:text-3xl lg:text-4xl tracking-tight text-[#F5F4F1]">
              Open on the day, not on a menu
            </h3>
            <p className="text-[#A09D95] text-base sm:text-lg leading-relaxed">
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

          <motion.div {...fadeIn} className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {["Upcoming procedures", "Active alerts", "Average procedure time", "Workflow compliance %"].map((k) => (
              <div key={k} className="p-3.5 sm:p-4 rounded-lg bg-[#121211] border border-white/[0.08] min-w-0">
                <span className="font-mono text-[11px] sm:text-xs text-[#8E8B85] block mb-1">KPI</span>
                <span className="text-[#F5F4F1] text-[14px] sm:text-[16px] font-medium block leading-snug break-words">{k}</span>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeIn}>
            <DecisionNote
              decision="Make the dashboard an operational overview with one dominant action, not an analytics wall."
              why="Teams transition rapidly between cases. Critical operational status—such as whether a case is actively live—needs to be immediately apparent without searching."
              tradeoff="Deeper analysis is pushed to Insights & AI, so the dashboard shows a snapshot rather than the full picture."
            />
          </motion.div>
        </div>
      </section>

      {/* ---- Decision 02: Live Monitor ---- */}
      <section className="py-12 sm:py-16 lg:py-24 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-8 sm:gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-3 sm:gap-4 max-w-none lg:max-w-[62ch]">
            <span className="font-mono text-xs sm:text-sm text-[#F14417]">DECISION 02 • LIVE MONITOR</span>
            <h3 className="font-display font-bold text-xl sm:text-3xl lg:text-4xl tracking-tight text-[#F5F4F1]">
              Make the current step the hero, and everything else supporting
            </h3>
            <p className="text-[#A09D95] text-base sm:text-lg leading-relaxed">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <motion.div {...fadeIn} className="p-5 sm:p-6 rounded-xl bg-[#121211] border border-white/[0.08]">
              <span className="font-mono text-xs text-[#F14417] block mb-2">VOICE</span>
              <h4 className="font-display font-bold text-lg sm:text-xl text-[#F5F4F1] mb-2">Hands-free by default</h4>
              <p className="text-[#A09D95] text-[14px] sm:text-[15px] leading-relaxed mb-4">
                A wake phrase starts listening. Commands cover Complete, Pause, Resume, Remove and Add Voice Note, and every action asks for confirmation before it executes. Voice notes are transcribed into the procedure record.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {["Ready", "Listening", "Processing", "Completed", "Not understood"].map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-full border border-white/10 font-mono text-[11px] text-[#A09D95]">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="p-5 sm:p-6 rounded-xl bg-[#121211] border border-white/[0.08]">
              <span className="font-mono text-xs text-[#F14417] block mb-2">GATING</span>
              <h4 className="font-display font-bold text-lg sm:text-xl text-[#F5F4F1] mb-2">Workflow-defined steps</h4>
              <p className="text-[#A09D95] text-[14px] sm:text-[15px] leading-relaxed">
                Required steps come directly from the surgical team&apos;s own workflow template. A step can be completed or explicitly removed with confirmation before advancing.
              </p>
            </motion.div>

            <motion.div {...fadeIn} className="p-5 sm:p-6 rounded-xl bg-[#121211] border border-white/[0.08]">
              <span className="font-mono text-xs text-[#F14417] block mb-2">ALERTS</span>
              <h4 className="font-display font-bold text-lg sm:text-xl text-[#F5F4F1] mb-2">Active means unresolved</h4>
              <p className="text-[#A09D95] text-[14px] sm:text-[15px] leading-relaxed">
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
      <section className="py-12 sm:py-16 lg:py-24 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-8 sm:gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-3 sm:gap-4 max-w-none lg:max-w-[62ch]">
            <span className="font-mono text-xs sm:text-sm text-[#F14417]">DECISION 03 • WORKFLOWS & SETUP</span>
            <h3 className="font-display font-bold text-xl sm:text-3xl lg:text-4xl tracking-tight text-[#F5F4F1]">
              Plan once as a template, adapt per case without changing it
            </h3>
            <p className="text-[#A09D95] text-base sm:text-lg leading-relaxed">
              Workflows define the phases, critical steps and reminders the team intends to follow. Creating a procedure is a five-step flow: patient information, workflow selection, case-specific modifications, clinical team, then review and start or schedule.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="flex flex-col gap-6 sm:gap-10">
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
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-white/10 font-mono text-xs text-[#A09D95]"
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
      <section className="py-12 sm:py-16 lg:py-24 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-8 sm:gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-3 sm:gap-4 max-w-none lg:max-w-[62ch]">
            <span className="font-mono text-xs sm:text-sm text-[#F14417]">DECISION 04 • INSIGHTS & AI</span>
            <h3 className="font-display font-bold text-xl sm:text-3xl lg:text-4xl tracking-tight text-[#F5F4F1]">
              Never show a prediction without something to compare it to
            </h3>
            <p className="text-[#A09D95] text-base sm:text-lg leading-relaxed">
              Before a case, the surgeon enters the planned procedure and patient context (age, diagnosis, co-morbidities, medications) and generates predictions for procedure time, complication rate, length of stay and 30-day readmission. Each figure is set against the top 5%, the hospital average and the national figure, followed by improvement opportunities ranked by expected impact. After cases, comparative analytics surfaces best and worst outcomes, rankings, sources of delay and performance over time. During a case, Periscope updates predicted remaining time and risk as the workflow progresses.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="flex flex-col gap-6 sm:gap-10">
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
                ratio="aspect-[1024/951]"
                fit="contain"
                hideIfMissing
              />
            </div>
          </motion.div>

          <motion.div {...fadeIn}>
            <DecisionNote
              decision="Pair every predicted figure with benchmarks, and rank improvement opportunities by expected impact."
              why="A single number is hard to judge on its own. Comparing against the top 5%, the hospital and the national figure gives the surgical team context to prepare with."
              tradeoff="Opportunities are presented as analysis for the team's planning, with wording reviewed carefully to inform rather than replace clinical decision-making."
            />
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. DESIGN SYSTEM */}
      {/* ========================================================= */}
      <section className="py-14 sm:py-20 lg:py-32 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-8 sm:gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-3">
            <span className="font-mono text-base sm:text-[18px] text-[#F14417]">/design-system</span>
            <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F4F1] max-w-none lg:max-w-[24ch]">
              Clinical, calm and precise
            </h2>
            <p className="text-[#A09D95] text-base sm:text-lg max-w-none lg:max-w-[52ch] leading-relaxed">
              Soft rounded cards, subtle shadows and a restrained palette keep the interface readable and low in cognitive load. The Live Monitor is the one deliberate exception.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <motion.div {...fadeIn} className="p-5 sm:p-6 lg:p-8 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col gap-4 sm:gap-6 min-w-0">
              <span className="font-mono text-xs sm:text-sm text-[#F14417]">01 / COLOUR</span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F4F1]">Meaning before decoration</h3>
              <p className="text-[#A09D95] text-[15px] sm:text-[16px] leading-relaxed">
                Blue for primary actions, teal for positive states, amber for warnings, and red reserved for critical alerts only.
              </p>
              <div className="grid grid-cols-6 gap-1.5 sm:gap-2 mt-auto pt-4 min-w-0">
                <span className="h-7 sm:h-8 rounded bg-[#0A2540] ring-1 ring-white/10" title="Deep Navy #0A2540" />
                <span className="h-7 sm:h-8 rounded bg-[#1E6BFF]" title="Medical Blue #1E6BFF" />
                <span className="h-7 sm:h-8 rounded bg-[#3DBDBA]" title="Soft Teal #3DBDBA" />
                <span className="h-7 sm:h-8 rounded bg-[#F8FAFC]" title="Light #F8FAFC" />
                <span className="h-7 sm:h-8 rounded bg-amber-500" title="Warning (amber)" />
                <span className="h-7 sm:h-8 rounded bg-red-500" title="Critical (red)" />
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="p-5 sm:p-6 lg:p-8 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col gap-4 sm:gap-6 min-w-0">
              <span className="font-mono text-xs sm:text-sm text-[#F14417]">02 / TYPE</span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F4F1]">Hierarchy you can read at a glance</h3>
              <p className="text-[#A09D95] text-[15px] sm:text-[16px] leading-relaxed">
                Geist, with bold and semibold reserved for critical information and regular weight for everything secondary.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-4">
                {["Geist", "Strong hierarchy", "High readability"].map((t) => (
                  <span key={t} className="px-2.5 sm:px-3 py-1 rounded-full border border-white/10 font-mono text-xs text-[#A09D95]">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="p-5 sm:p-6 lg:p-8 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col gap-4 sm:gap-6 min-w-0">
              <span className="font-mono text-xs sm:text-sm text-[#F14417]">03 / LIVE MONITOR</span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F4F1]">A theme built for the OR</h3>
              <p className="text-[#A09D95] text-[15px] sm:text-[16px] leading-relaxed">
                Dark and high-contrast, tuned for readability at a distance under OR lighting.
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto pt-4">
                {["Dark theme", "High contrast", "Glanceable"].map((t) => (
                  <span key={t} className="px-2.5 sm:px-3 py-1 rounded-full border border-white/10 font-mono text-xs text-[#A09D95]">
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
      <section className="py-14 sm:py-20 lg:py-32 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-14">
          <span className="font-mono text-base sm:text-[18px] text-[#F14417]">/language</span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F4F1] max-w-none lg:max-w-[24ch]">
            In a clinical product, wording is part of the design
          </h2>
          <p className="text-[#A09D95] text-base sm:text-lg max-w-none lg:max-w-[56ch] leading-relaxed">
            Every label, description and demo line had to reflect the same stance: the team is in charge, and the platform supports them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <motion.div {...fadeIn} className="p-5 sm:p-6 lg:p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-xs text-[#3DBDBA] block mb-3 sm:mb-4">WE SAY</span>
            <ul className="flex flex-col gap-2.5 sm:gap-3 text-[#F5F4F1] text-[15px] sm:text-[17px] leading-relaxed">
              <li>• Supports the planned workflow</li>
              <li>• Monitoring, capturing, reminders and analysis</li>
              <li>• The surgeon remains in control</li>
            </ul>
          </motion.div>

          <motion.div {...fadeIn} className="p-5 sm:p-6 lg:p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-xs text-[#f87171] block mb-3 sm:mb-4">WE AVOID</span>
            <ul className="flex flex-col gap-2.5 sm:gap-3 text-[#A09D95] text-[15px] sm:text-[17px] leading-relaxed">
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
      <section className="py-14 sm:py-20 lg:py-32 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-12 lg:mb-14">
          <span className="font-mono text-base sm:text-[18px] text-[#F14417]">/outcome</span>
          <h2 className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl tracking-tight text-[#F5F4F1] max-w-none lg:max-w-[22ch]">
            What I delivered, learned and am finishing next
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <motion.div {...fadeIn} className="p-5 sm:p-6 lg:p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-xs sm:text-sm text-[#F14417] block mb-3 sm:mb-4">DELIVERED</span>
            <ul className="flex flex-col gap-2.5 sm:gap-3 text-[#A09D95] text-[15px] sm:text-[16px] leading-relaxed">
              <li>• Dashboard, procedures list, multi-step procedure creation and the workflow library and editor</li>
              <li>• The Live Monitor with voice states, gating and alert behaviour</li>
              <li>• Pre-operative predictive and post-operative comparative analytics</li>
              <li>• A design system and a defined route structure for developer handoff</li>
            </ul>
          </motion.div>

          <motion.div {...fadeIn} className="p-5 sm:p-6 lg:p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-xs sm:text-sm text-[#F14417] block mb-3 sm:mb-4">WHAT I LEARNED</span>
            <ul className="flex flex-col gap-2.5 sm:gap-3 text-[#A09D95] text-[15px] sm:text-[16px] leading-relaxed">
              <li>• In the OR, glanceability beats density. Removing information mattered more than adding it.</li>
              <li>• Permissions are a safety feature: the view-only Master Account protects live cases.</li>
              <li>• Language is part of the interface, and it shapes whether the product feels supportive or controlling.</li>
            </ul>
          </motion.div>

          <motion.div {...fadeIn} className="p-5 sm:p-6 lg:p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-xs sm:text-sm text-[#F14417] block mb-3 sm:mb-4">NEXT UP</span>
            <ul className="flex flex-col gap-2.5 sm:gap-3 text-[#A09D95] text-[15px] sm:text-[16px] leading-relaxed">
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
          className="mt-10 sm:mt-16 max-w-[820px] font-display font-bold text-xl sm:text-3xl lg:text-4xl tracking-[-0.02em] text-[#F5F4F1] leading-snug text-balance"
        >
          &ldquo;Descartes does not direct the surgery. It supports the planned workflow, quietly and consistently, from preparation to completion.&rdquo;
        </motion.blockquote>
      </section>

      {/* ========================================================= */}
      {/* 11. PROJECT NAVIGATION */}
      {/* ========================================================= */}
      <ProjectNav
        prev={{ title: "MilitaryPCS", href: "/work/military-pcs" }}
        next={{ title: "Tiny Bits of Love", href: "/work/tiny-bits-of-love" }}
      />
    </main>
  );
}
