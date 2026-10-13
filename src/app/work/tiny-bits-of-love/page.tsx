"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { 
  ArrowLeft, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  Heart, 
  Compass, 
  Check, 
  Layers, 
  Feather, 
  Activity 
} from "lucide-react";

export default function TinyBitsOfLoveCaseStudy() {
  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-[#0B0B0A] text-[#F5F4F1] relative selection:bg-[#F14417] selection:text-white pb-24">
      <Navbar />

      {/* ========================================================= */}
      {/* 1. PROJECT HERO */}
      {/* ========================================================= */}
      <section className="pt-36 sm:pt-44 pb-16 px-6 sm:px-12 max-w-[1260px] mx-auto relative z-10">
        {/* Back Link Breadcrumb */}
        <motion.div {...fadeIn} className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-[16px] text-[#A09D95] hover:text-[#F14417] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Selected work</span>
          </Link>
        </motion.div>

        {/* Header Eyebrow & Title */}
        <div className="flex flex-col gap-6 max-w-[960px]">
          <motion.div {...fadeIn} className="flex items-center gap-3">
            <span className="font-mono text-[18px] text-[#F14417]">/case-study</span>
            <span className="font-mono text-[16px] text-[#A09D95] border border-white/10 rounded-full px-3 py-0.5">
              Case 01
            </span>
          </motion.div>

          <motion.h1
            {...fadeIn}
            className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.04em] text-[#F5F4F1] leading-[1.02]"
          >
            Tiny Bits of Love
          </motion.h1>

          <motion.p
            {...fadeIn}
            className="text-xl sm:text-2xl md:text-3xl text-[#A09D95] font-light leading-relaxed max-w-[36ch]"
          >
            Designing a relationship-care experience that turns small acts of connection into something you can see grow.
          </motion.p>
        </div>

        {/* Metadata Grid */}
        <motion.div
          {...fadeIn}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 mt-12 border-t border-b border-white/[0.08]"
        >
          <div>
            <span className="font-mono text-sm text-[#7A7873] block mb-1">Role</span>
            <span className="text-[18px] text-[#F5F4F1] font-medium">UI/UX Designer</span>
          </div>
          <div>
            <span className="font-mono text-sm text-[#7A7873] block mb-1">Platform</span>
            <span className="text-[18px] text-[#F5F4F1] font-medium">Mobile App (iOS & Android)</span>
          </div>
          <div>
            <span className="font-mono text-sm text-[#7A7873] block mb-1">Focus</span>
            <span className="text-[18px] text-[#F5F4F1] font-medium">Product Design, UX, Visual Design</span>
          </div>
          <div>
            <span className="font-mono text-sm text-[#7A7873] block mb-1">Timeline</span>
            <span className="text-[18px] text-[#F5F4F1] font-medium">2026 • Product Concept</span>
          </div>
        </motion.div>

        {/* Hero Visual Banner */}
        <motion.div
          {...fadeIn}
          className="mt-12 relative w-full aspect-[16/9] sm:aspect-[21/10] rounded-xl overflow-hidden border border-white/[0.08] bg-[#121211] shadow-2xl"
        >
          <Image
            src="/images/projects/tiny-bits/hero-trio.jpg"
            alt="Tiny Bits of Love app overview showing three mobile devices"
            fill
            priority
            sizes="(max-width: 1260px) 100vw, 1260px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 2. PROJECT OVERVIEW (Asymmetric Two-Column) */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">
          <motion.div {...fadeIn} className="flex flex-col gap-2">
            <span className="font-mono text-[18px] text-[#F14417]">/overview</span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#F5F4F1]">
              The Idea<span className="font-mono text-[18px] text-[#F14417] ml-2">{"*"}</span>
            </h2>
          </motion.div>

          <motion.div {...fadeIn} className="flex flex-col gap-6 text-[#A09D95] text-xl sm:text-2xl leading-relaxed">
            <p className="text-[#F5F4F1] font-normal">
              Tiny Bits of Love is a relationship-focused mobile experience designed to help people stay intentional about the people who matter to them.
            </p>
            <p>
              Instead of treating relationships as a static contact list or an endless stream of chat notifications, the product turns each connection into something users can nurture, revisit and watch grow over time.
            </p>
            <p className="text-[18px] text-[#7A7873] pt-4 border-t border-white/[0.06]">
              By framing relational health around living botanical systems—where attention acts as sunlight and thoughtful gestures act as water—Tiny Bits transforms interpersonal care from a forgotten chore into an intrinsically rewarding daily practice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. THE CHALLENGE */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-10">
          <motion.div {...fadeIn} className="flex items-center gap-3">
            <span className="font-mono text-[18px] text-[#F14417]">/challenge</span>
            <span className="font-mono text-sm text-[#7A7873]">/* Problem Space */</span>
          </motion.div>

          <motion.h2
            {...fadeIn}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] max-w-[28ch] leading-tight"
          >
            Staying connected is easy. Nurturing connection is harder.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-4 text-[#A09D95] text-lg leading-relaxed">
            <motion.p {...fadeIn}>
              Most modern communication tools optimize for speed, unread badge pressure, and conversational velocity. We are constantly pinged, yet our closest friendships often slip into quiet drifting simply because life gets busy.
            </motion.p>
            <motion.p {...fadeIn}>
              Meaningful relationships don&apos;t require paragraphs of updates every day. They depend on emotional consistency, small gestures, and the reassurance that someone is held warmly in mind.
            </motion.p>
          </div>

          {/* Core UX Challenge Callout */}
          <motion.div
            {...fadeIn}
            className="mt-6 p-8 sm:p-12 rounded-xl bg-[#121211] border border-white/[0.08] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-[#F14417]" />
            <span className="font-mono text-[16px] text-[#F14417] block mb-3">
              THE CORE DESIGN QUESTION
            </span>
            <blockquote className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl text-[#F5F4F1] tracking-tight leading-snug">
              &ldquo;How might we make relationship care visible, simple and emotionally rewarding without making it feel like another task?&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. CORE PRODUCT CONCEPT — The Relationship Tree */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-[18px] text-[#F14417] block mb-2">/core-concept</span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#F5F4F1]">
                Turning relationships into something you can nurture
              </h2>
            </div>
            <span className="font-mono text-[16px] text-[#7A7873] shrink-0">
              [ Living visual system ]
            </span>
          </div>

          <p className="text-[#A09D95] text-lg sm:text-xl max-w-[50ch] leading-relaxed">
            Rather than reducing human bonds to tabular database rows, Tiny Bits visualizes all active relationships as leaves and branches on a personal tree that lives, breathes, and reacts to care.
          </p>

          {/* Visual Showcase: The Tree & Thriving Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">
            {/* Primary Tree Mockup */}
            <motion.div
              {...fadeIn}
              className="lg:col-span-7 rounded-xl bg-[#121211] border border-white/[0.08] p-6 sm:p-10 flex flex-col items-center justify-center relative overflow-hidden"
            >
              <div className="relative w-full max-w-[380px] aspect-[1/2] rounded-2xl overflow-hidden shadow-2xl border border-white/[0.05]">
                <Image
                  src="/images/projects/tiny-bits/tree-home.png"
                  alt="Relationship Tree Home Screen"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain"
                />
              </div>
              <span className="font-mono text-sm text-[#7A7873] mt-6">
                Fig 01 — Home canopy view with avatar pins and status metrics
              </span>
            </motion.div>

            {/* Editorial Annotations Column */}
            <motion.div {...fadeIn} className="lg:col-span-5 flex flex-col gap-6">
              <div className="p-6 rounded-lg bg-[#121211] border border-white/[0.08]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#34d399]" />
                  <h3 className="font-display font-bold text-xl text-[#F5F4F1]">Thriving</h3>
                  <span className="font-mono text-sm text-[#34d399] ml-auto">10 relations</span>
                </div>
                <p className="text-[#A09D95] text-[16px] leading-relaxed">
                  Connections kept fresh through recent affirmations, check-ins, or shared streaks. Lush green foliage with prominent avatar badges.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-[#121211] border border-white/[0.08]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fbbf24]" />
                  <h3 className="font-display font-bold text-xl text-[#F5F4F1]">Needs Care</h3>
                  <span className="font-mono text-sm text-[#fbbf24] ml-auto">6 relations</span>
                </div>
                <p className="text-[#A09D95] text-[16px] leading-relaxed">
                  Bonds slipping past their customary cadence. Soft watering prompts appear gently to invite an effortless touchpoint.
                </p>
              </div>

              <div className="p-6 rounded-lg bg-[#121211] border border-white/[0.08]">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#f87171]" />
                  <h3 className="font-display font-bold text-xl text-[#F5F4F1]">Wilting</h3>
                  <span className="font-mono text-sm text-[#f87171] ml-auto">4 relations</span>
                </div>
                <p className="text-[#A09D95] text-[16px] leading-relaxed">
                  Dormant friendships without contact. Illustrated with autumnal tones—designed to evoke gentle tenderness rather than guilt or failure.
                </p>
              </div>

              {/* Status Grid Supporting Visual */}
              <div className="rounded-lg bg-[#121211] border border-white/[0.08] p-4 overflow-hidden relative group">
                <div className="relative w-full aspect-[4/3] rounded overflow-hidden">
                  <Image
                    src="/images/projects/tiny-bits/thriving-grid.png"
                    alt="Thriving Relations Grid Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover object-top"
                  />
                </div>
                <span className="font-mono text-xs text-[#7A7873] block mt-3">
                  Fig 02 — Thriving directory showing friend roster with leaf badges
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. EXPERIENCE FLOW */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-4 mb-16">
          <span className="font-mono text-[18px] text-[#F14417]">/experience-flow</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F5F4F1]">
            A loop designed for emotional longevity
          </h2>
          <p className="text-[#A09D95] text-lg max-w-[45ch]">
            The interaction cadence minimizes administrative overhead, moving users swiftly from perception to warm action.
          </p>
        </motion.div>

        {/* 4-Step Editorial Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              name: "See",
              label: "See",
              desc: "Understand the overall health of your relationships at a single glance without reading long message threads.",
            },
            {
              step: "02",
              name: "Understand",
              label: "Understand",
              desc: "Identify connections that may need more attention before bonds inadvertently grow distant.",
            },
            {
              step: "03",
              name: "Care",
              label: "Care",
              desc: "Reach out through tactile affirmations and meaningful micro-interactions that take seconds to send.",
            },
            {
              step: "04",
              name: "Grow",
              label: "Grow",
              desc: "Build consistency and visually see individual trees and shared relationship gardens flourish over time.",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col justify-between group hover:border-[#F14417]/40 transition-colors"
            >
              <div>
                <span className="font-mono text-sm text-[#F14417] block mb-4">
                  STEP {item.step}
                </span>
                <h3 className="font-display font-bold text-2xl text-[#F5F4F1] mb-3 group-hover:text-[#F14417] transition-colors">
                  {item.label}
                </h3>
                <p className="text-[#A09D95] text-[16px] leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center justify-between text-[#7A7873] font-mono text-xs">
                <span>Phase {item.step}</span>
                <span className="group-hover:text-[#F14417] transition-colors">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. KEY EXPERIENCE — HOME */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div {...fadeIn} className="lg:col-span-6 flex flex-col gap-6">
            <span className="font-mono text-[18px] text-[#F14417]">/interface-architecture</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F5F4F1]">
              The Home View: Center of Emotional Gravitas
            </h2>
            <p className="text-[#A09D95] text-lg leading-relaxed">
              Every design choice on the primary screen deliberately privileges connection quality over utilitarian inbox sorting.
            </p>

            <div className="flex flex-col gap-5 mt-4">
              <div className="flex gap-4">
                <span className="font-mono text-[#F14417] text-lg font-bold">01</span>
                <div>
                  <h4 className="text-[#F5F4F1] font-semibold text-[18px]">Immediate Relational Health</h4>
                  <p className="text-[#A09D95] text-[16px]">
                    Status metrics (Thriving, Needs Care, Wilting) sit at the top of the viewport to establish clarity in under three seconds.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="font-mono text-[#F14417] text-lg font-bold">02</span>
                <div>
                  <h4 className="text-[#F5F4F1] font-semibold text-[18px]">Living Canopy Metaphor</h4>
                  <p className="text-[#A09D95] text-[16px]">
                    The tree occupies central stage, substituting mechanical data tables with a warm, tangible botanical artifact.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="font-mono text-[#F14417] text-lg font-bold">03</span>
                <div>
                  <h4 className="text-[#F5F4F1] font-semibold text-[18px]">Visual Human Representation</h4>
                  <p className="text-[#A09D95] text-[16px]">
                    Friends are mapped as pinned illustrated avatars directly across tree branches rather than hidden in sub-menus.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="font-mono text-[#F14417] text-lg font-bold">04</span>
                <div>
                  <h4 className="text-[#F5F4F1] font-semibold text-[18px]">Clear Action Signifiers</h4>
                  <p className="text-[#A09D95] text-[16px]">
                    A prominent floating &apos;+&apos; trigger allows users to quickly plant new ties or water existing connections on impulse.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="lg:col-span-6 rounded-xl bg-[#121211] border border-white/[0.08] p-6 sm:p-12 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[420px] aspect-[1/2] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/projects/tiny-bits/tree-home.png"
                alt="Detailed tree screen annotation"
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. RELATIONSHIP MANAGEMENT */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            {...fadeIn}
            className="lg:col-span-6 order-2 lg:order-1 rounded-xl bg-[#121211] border border-white/[0.08] p-6 sm:p-12 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[400px] aspect-[1/2] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/projects/tiny-bits/connections-list.png"
                alt="Relationship management list view"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-contain"
              />
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="lg:col-span-6 order-1 lg:order-2 flex flex-col gap-6">
            <span className="font-mono text-[18px] text-[#F14417]">/dual-modality</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F5F4F1]">
              Balancing poetry with practical utility
            </h2>
            <p className="text-[#A09D95] text-lg leading-relaxed">
              While the tree represents the philosophical heart of Tiny Bits, day-to-day usability demands speed when looking up specific contacts.
            </p>

            <ul className="flex flex-col gap-4 mt-2">
              <li className="flex items-start gap-3 p-4 rounded-lg bg-[#121211] border border-white/[0.06]">
                <span className="text-[#F14417] mt-0.5">▪</span>
                <span className="text-[#A09D95] text-[16px]">
                  <strong className="text-[#F5F4F1] font-medium block mb-0.5">Predictive Search:</strong>
                  Instant real-time search field allowing users to find any contact without panning or zooming across the tree foliage.
                </span>
              </li>
              <li className="flex items-start gap-3 p-4 rounded-lg bg-[#121211] border border-white/[0.06]">
                <span className="text-[#F14417] mt-0.5">▪</span>
                <span className="text-[#A09D95] text-[16px]">
                  <strong className="text-[#F5F4F1] font-medium block mb-0.5">Category Filtering:</strong>
                  Group connections by Thriving, Needs Care, or Wilting to prioritize outreach efforts with zero guesswork.
                </span>
              </li>
              <li className="flex items-start gap-3 p-4 rounded-lg bg-[#121211] border border-white/[0.06]">
                <span className="text-[#F14417] mt-0.5">▪</span>
                <span className="text-[#A09D95] text-[16px]">
                  <strong className="text-[#F5F4F1] font-medium block mb-0.5">Quick Care Triggers:</strong>
                  Direct 1-tap micro-interactions directly from the roster list without requiring deep navigation hops.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. SMALL ACTS OF CARE — Affirmation Interaction */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-10">
          <motion.div {...fadeIn} className="flex flex-col gap-3">
            <span className="font-mono text-[18px] text-[#F14417]">/micro-moments</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#F5F4F1]">
              Making meaningful interaction feel effortless
            </h2>
          </motion.div>

          <p className="text-[#A09D95] text-lg sm:text-xl max-w-[48ch] leading-relaxed">
            The friction in friendship maintenance is often the false belief that one must compose lengthy messages. Tiny Bits lowers the threshold through tactile, low-pressure affirmation leaves.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-6">
            {/* Modal Screen Visual */}
            <motion.div
              {...fadeIn}
              className="lg:col-span-6 rounded-xl bg-[#121211] border border-white/[0.08] p-6 sm:p-12 flex items-center justify-center"
            >
              <div className="relative w-full max-w-[400px] aspect-[1/2] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/projects/tiny-bits/affirmation-modal.png"
                  alt="Affirmation leaf modal interaction"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Interaction Rationale */}
            <motion.div {...fadeIn} className="lg:col-span-6 flex flex-col gap-6">
              <div className="p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
                <span className="font-mono text-sm text-[#F14417] block mb-2">DESIGN PRINCIPLE</span>
                <h3 className="font-display font-bold text-2xl text-[#F5F4F1] mb-3">
                  Low Barrier, High Resonance
                </h3>
                <p className="text-[#A09D95] text-lg leading-relaxed mb-6">
                  Instead of demanding 15 minutes of uninterrupted composition, an affirmation takes five seconds: a warm sentiment baked onto a gentle green leaf, signed with a heart.
                </p>

                <div className="p-4 rounded-lg bg-[#0B0B0A] border border-white/10 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F14417]/10 border border-[#F14417]/30 flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 text-[#F14417]" />
                  </div>
                  <div>
                    <span className="font-display font-semibold text-[#F5F4F1] text-[16px] block">
                      &ldquo;Thank you for being such a good friend&rdquo;
                    </span>
                    <span className="font-mono text-xs text-[#7A7873]">
                      Tactile leaf token with 1-tap reply trigger
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg border border-white/[0.06] text-[#A09D95] text-[16px] leading-relaxed">
                By acknowledging that even the smallest gesture carries genuine emotional weight, users are freed from message guilt and return to regular, happy touchpoints.
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. PROGRESS WITHOUT PRESSURE */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-10">
          <motion.div {...fadeIn} className="flex flex-col gap-3">
            <span className="font-mono text-[18px] text-[#F14417]">/gentle-signals</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F5F4F1]">
              Progress Without Pressure
            </h2>
            <p className="text-[#A09D95] text-lg max-w-[50ch] leading-relaxed">
              Gamified signals provide healthy rhythm and reassurance—deliberately stopping short of competitive rankings or anxiety-inducing notification streaks.
            </p>
          </motion.div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
            {[
              { label: "Daily Streak", val: "12 Days", sub: "Active rhythm" },
              { label: "Leaves Grown", val: "74", sub: "Total blooms" },
              { label: "Affirmations", val: "74 Sent", sub: "Warm touches" },
              { label: "Leaves Lost", val: "0", sub: "Gentle guardrail" },
              { label: "Last Watered", val: "Today", sub: "Up-to-date" },
            ].map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col justify-between"
              >
                <span className="font-mono text-xs text-[#7A7873] block mb-3">
                  {metric.label}
                </span>
                <span className="font-display font-bold text-2xl sm:text-3xl text-[#F5F4F1] tracking-tight">
                  {metric.val}
                </span>
                <span className="font-mono text-xs text-[#F14417] mt-3">
                  {metric.sub}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p {...fadeIn} className="text-[#A09D95] text-[16px] leading-relaxed max-w-[52ch]">
            If a user misses a few days, leaves do not abruptly vanish; instead, colors shift toward warm amber, quietly signaling that a gentle watering will bring the bond back into vibrant bloom.
          </motion.p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. VISUAL LANGUAGE & DESIGN SYSTEM */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-3">
            <span className="font-mono text-[18px] text-[#F14417]">/design-system</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F5F4F1]">
              Visual Language &amp; Brand Metaphors
            </h2>
            <p className="text-[#A09D95] text-lg max-w-[48ch]">
              A restrained editorial synthesis of botanical serenity, tactile forms, and warm human craft.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Color Palette */}
            <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col gap-6">
              <span className="font-mono text-sm text-[#F14417]">01 / COLOR PHILOSOPHY</span>
              <h3 className="font-display font-bold text-2xl text-[#F5F4F1]">
                Botanical Harmony
              </h3>
              <p className="text-[#A09D95] text-[16px] leading-relaxed">
                Replaces electric tech blues with calming sage, forest canopy greens, soft cream backdrops, and blush coral warmth.
              </p>
              <div className="flex gap-2 mt-auto pt-4">
                <span className="h-8 flex-1 rounded bg-[#2D5A43]" title="Forest Green #2D5A43" />
                <span className="h-8 flex-1 rounded bg-[#6A9A7B]" title="Sage #6A9A7B" />
                <span className="h-8 flex-1 rounded bg-[#F8EFE4]" title="Cream Neutral #F8EFE4" />
                <span className="h-8 flex-1 rounded bg-[#F14417]" title="Warm Coral #F14417" />
              </div>
            </motion.div>

            {/* UI Style */}
            <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col gap-6">
              <span className="font-mono text-sm text-[#F14417]">02 / UI STYLE</span>
              <h3 className="font-display font-bold text-2xl text-[#F5F4F1]">
                Soft Rounded Forms
              </h3>
              <p className="text-[#A09D95] text-[16px] leading-relaxed">
                Pill badges, continuous curvature surfaces, friendly hand-drawn iconography, and zero sharp edges that might evoke rigidity.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                <span className="px-3 py-1 rounded-full border border-white/10 font-mono text-xs text-[#A09D95]">
                  r: 24px - 32px
                </span>
                <span className="px-3 py-1 rounded-full border border-white/10 font-mono text-xs text-[#A09D95]">
                  tactile cards
                </span>
                <span className="px-3 py-1 rounded-full border border-white/10 font-mono text-xs text-[#A09D95]">
                  warm shadows
                </span>
              </div>
            </motion.div>

            {/* Metaphors */}
            <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col gap-6">
              <span className="font-mono text-sm text-[#F14417]">03 / BRAND METAPHORS</span>
              <h3 className="font-display font-bold text-2xl text-[#F5F4F1]">
                Natural Analogies
              </h3>
              <p className="text-[#A09D95] text-[16px] leading-relaxed">
                Tree trunks as anchor bonds; individual leaves as shared touchpoints; watering cans as intentional outreach; hearts as warmth.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 font-mono text-xs text-[#A09D95]">
                <span>Tree</span> • <span>Leaves</span> • <span>Watering</span> • <span>Growth</span> • <span>Hearts</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 11. DESIGNING FOR EMOTION */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div {...fadeIn} className="lg:col-span-6 flex flex-col gap-6">
            <span className="font-mono text-[18px] text-[#F14417]">/emotional-design</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#F5F4F1] leading-tight">
              The interface needed to feel caring, not clinical.
            </h2>
            <p className="text-[#A09D95] text-lg leading-relaxed">
              Modern users are deeply conditioned to associate notifications with urgency, anxiety, and productivity obligations. Tiny Bits rejects enterprise dashboard patterns entirely.
            </p>
            <p className="text-[#A09D95] text-lg leading-relaxed">
              By offering custom seasonal themes—such as Enchanted Forest, Winter Wonderland, and Sakura Blossom—the app becomes an expressive sanctuary where nurturing connection feels like personal self-care.
            </p>
            <div className="p-4 rounded-lg bg-[#121211] border border-white/[0.08] text-[16px] text-[#7A7873]">
              &ldquo;When users check on their friends, the response should feel like walking into a sunlit botanical greenhouse, never an unread email backlog.&rdquo;
            </div>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="lg:col-span-6 rounded-xl bg-[#121211] border border-white/[0.08] p-6 sm:p-12 flex items-center justify-center"
          >
            <div className="relative w-full max-w-[400px] aspect-[1/2] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/projects/tiny-bits/tree-themes.png"
                alt="Tree Customisation and Themes Screen"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 12. SUPPORTING PRODUCT ECOSYSTEM */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-3 mb-12">
          <span className="font-mono text-[18px] text-[#F14417]">/ecosystem</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#F5F4F1]">
            Extending Beyond The Smartphone Viewport
          </h2>
          <p className="text-[#A09D95] text-lg max-w-[45ch]">
            The visual vernacular scales coherently into editorial touchpoints, guidance materials, and brand storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: "Mindful Connection Guides",
              desc: "Short illustrated essays on overcoming adult friendship isolation and establishing low-pressure contact cadences.",
            },
            {
              title: "Launch & App Store Visuals",
              desc: "Art-directed campaign materials highlighting the living tree as an antidote to screen-time burnout.",
            },
            {
              title: "Founder Story & Mission",
              desc: "Long-form editorial publication tracing the personal journey behind intentional relationship health.",
            },
            {
              title: "Shareable Growth Milestones",
              desc: "Seasonal postcards that friends can export and send outside the platform celebrating shared years.",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs text-[#7A7873] block mb-2">0{idx + 1}</span>
                <h4 className="font-display font-bold text-xl text-[#F5F4F1] mb-2">{item.title}</h4>
                <p className="text-[#A09D95] text-[15px] leading-relaxed">{item.desc}</p>
              </div>
              <span className="font-mono text-xs text-[#F14417] mt-6">Integrated Asset ↗</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 13. FINAL SHOWCASE & STATEMENT */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-36 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-16 items-center text-center">
          <motion.div {...fadeIn} className="max-w-[840px]">
            <span className="font-mono text-[18px] text-[#F14417] block mb-4">/conclusion</span>
            <blockquote className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] leading-tight">
              &ldquo;Tiny Bits of Love transforms relationship maintenance from an invisible responsibility into a simple, visual and meaningful daily experience.&rdquo;
            </blockquote>
          </motion.div>

          {/* Full Width Final Collage */}
          <motion.div
            {...fadeIn}
            className="w-full relative aspect-[16/9] sm:aspect-[21/10] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#121211] shadow-2xl"
          >
            <Image
              src="/images/projects/tiny-bits/hero-trio.jpg"
              alt="Final Showcase Composition"
              fill
              sizes="(max-width: 1260px) 100vw, 1260px"
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 14. PROJECT NAVIGATION */}
      {/* ========================================================= */}
      <section className="pt-16 pb-24 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-3 font-mono text-[18px] text-[#A09D95] hover:text-[#F14417] transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>← Previous: Descartes Dashboard</span>
          </Link>

          <Link
            href="/#work"
            className="font-mono text-[16px] text-[#7A7873] hover:text-[#F5F4F1] border border-white/10 hover:border-white/20 rounded-full px-5 py-2 transition-colors"
          >
            Back to Selected Projects
          </Link>

          <Link
            href="/#work"
            className="inline-flex items-center gap-3 font-mono text-[18px] text-[#A09D95] hover:text-[#F14417] transition-colors group"
          >
            <span>Next: Mazeflower →</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
