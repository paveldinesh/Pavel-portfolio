"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";

function DeviceMockup({
  src,
  alt,
  caption,
  className = "",
  maxWidth = "max-w-[340px] sm:max-w-[360px]",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  maxWidth?: string;
}) {
  return (
    <div className={`flex flex-col items-center justify-center w-full ${className}`}>
      {/* Outer Phone Shell - Precision Bezel & Chamfer */}
      <div
        className={`relative w-full ${maxWidth} rounded-[46px] p-[8px] sm:p-[10px] bg-gradient-to-b from-[#383840] via-[#1e1e22] to-[#131315] ring-1 ring-white/20 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.08),0_0_50px_rgba(241,68,23,0.06)]`}
      >
        {/* Hardware side buttons */}
        <div className="absolute -left-[3px] top-24 w-[3px] h-8 bg-[#44444c] rounded-l" />
        <div className="absolute -left-[3px] top-36 w-[3px] h-8 bg-[#44444c] rounded-l" />
        <div className="absolute -right-[3px] top-28 w-[3px] h-12 bg-[#44444c] rounded-r" />

        {/* Inner Phone Screen Frame - Exact 393/852 iPhone Aspect Ratio, Zero Cutoff */}
        <div className="relative w-full aspect-[393/852] rounded-[32px] overflow-hidden bg-[#0A0A0A] ring-1 ring-white/10 shadow-inner flex items-center justify-center">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-contain object-center"
            priority={false}
          />
          {/* Subtle Screen Bevel Glass Sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.025] to-transparent pointer-events-none z-10" />
        </div>
      </div>

      {caption && (
        <span className="font-mono text-sm text-[#7A7873] mt-5 text-center max-w-[42ch]">
          {caption}
        </span>
      )}
    </div>
  );
}

/** Decision → Why → Trade-off. Used to explain each key product call. */
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
          <span
            className={`font-mono text-xs pt-1 ${row.accent ? "text-[#F14417]" : "text-[#7A7873]"}`}
          >
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

export default function TinyBitsOfLoveCaseStudy() {
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
      {/* 1. PROJECT HERO */}
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
            A mobile app that turns friendships into a tree you can watch grow, and keeping in touch into a five-second habit.
          </motion.p>
        </div>

        <motion.div
          {...fadeIn}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 mt-12 border-t border-b border-white/[0.08]"
        >
          {[
            { k: "Role", v: "UI/UX Designer" },
            { k: "Scope", v: "Concept, UX, UI, brand identity" },
            { k: "Platform", v: "Mobile app (iOS & Android)" },
            { k: "Status", v: "2026 • Product concept with prototype" },
          ].map((m) => (
            <div key={m.k}>
              <span className="font-mono text-sm text-[#7A7873] block mb-1">{m.k}</span>
              <span className="text-[18px] text-[#F5F4F1] font-medium">{m.v}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          {...fadeIn}
          className="mt-12 relative w-full h-[320px] sm:h-[440px] md:h-[546px] rounded-xl overflow-hidden border border-white/[0.08] bg-[#121211] shadow-2xl"
        >
          <Image
            src="/images/projects/tiny-bits/hero-trio.jpg"
            alt="Tiny Bits of Love app overview showing three mobile devices"
            fill
            priority
            sizes="(max-width: 1260px) 100vw, 1260px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none" />
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 2. THE IDEA — summary in 30 seconds */}
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
              Every relationship becomes a leaf on a personal tree. Attention keeps it green, a small gesture waters it, and neglect turns it autumnal rather than deleting it.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { n: "01", t: "The problem", d: "Close friendships fade through busyness, not conflict, and chat apps reward speed, not care." },
                { n: "02", t: "The approach", d: "Make relational health visible at a glance, and make caring take seconds, not paragraphs." },
                { n: "03", t: "The result", d: "A tree-based home, one-tap affirmations and a forgiving streak system, in one coherent brand." },
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
      {/* 3. THE PROBLEM */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-10">
          <motion.div {...fadeIn} className="flex items-center gap-3">
            <span className="font-mono text-[18px] text-[#F14417]">/problem</span>
          </motion.div>

          <motion.h2
            {...fadeIn}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] max-w-[28ch] leading-tight"
          >
            Staying connected is easy. Nurturing connection is harder.
          </motion.h2>

          <motion.p {...fadeIn} className="text-[#A09D95] text-lg sm:text-xl max-w-[60ch] leading-relaxed">
            We are pinged all day, yet our closest friendships quietly drift, simply because life gets busy. Meaningful relationships don&apos;t need paragraphs of updates. They need consistency, small gestures, and the reassurance that someone is held warmly in mind.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            {[
              {
                t: "Contact lists",
                d: "Static rows. They store people but say nothing about how the relationship is doing.",
              },
              {
                t: "Messengers",
                d: "Built for speed and unread-badge pressure. Reaching out feels like owing a reply, not giving a gift.",
              },
              {
                t: "Reminder & CRM-style apps",
                d: "Treat friends as tasks to clear. Care turns into an obligation, and obligations get avoided.",
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
              &ldquo;How might we make relationship care visible, simple and emotionally rewarding without making it feel like another task?&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. DESIGN PRINCIPLES */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-4 mb-14">
          <span className="font-mono text-[18px] text-[#F14417]">/principles</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F5F4F1] max-w-[24ch]">
            Three rules every screen had to pass
          </h2>
          <p className="text-[#A09D95] text-lg max-w-[50ch]">
            I turned the design question into constraints, then used them to cut features as often as to add them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              n: "01",
              t: "Glanceable",
              d: "Relationship health should be understood in about three seconds, without opening a single thread.",
            },
            {
              n: "02",
              t: "Five seconds to care",
              d: "If a gesture needs composing, it won't happen. Every act of care has to be completable in one or two taps.",
            },
            {
              n: "03",
              t: "Never guilt",
              d: "Neglect is shown as a gentle seasonal change, not a failure state. No rankings, no punishing streaks.",
            },
          ].map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
      {/* 5. CORE CONCEPT — The Relationship Tree */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-[18px] text-[#F14417] block mb-2">/concept</span>
              <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#F5F4F1] max-w-[22ch]">
                A tree instead of a contact list
              </h2>
            </div>
            <span className="font-mono text-[16px] text-[#7A7873] shrink-0">[ Living visual system ]</span>
          </div>

          <p className="text-[#A09D95] text-lg sm:text-xl max-w-[54ch] leading-relaxed">
            Each active relationship is a leaf on a personal tree that reacts to care. A tree was chosen because it already communicates the thing I needed: slow growth, seasons, and recovery. No one needs a tutorial to read a wilting leaf.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-6">
            <motion.div
              {...fadeIn}
              className="lg:col-span-7 rounded-xl bg-[#121211] border border-white/[0.08] p-6 sm:p-10 flex flex-col items-center justify-center relative overflow-hidden"
            >
              <DeviceMockup
                src="/images/projects/tiny-bits/tree-home.png"
                alt="Relationship Tree Home Screen"
                caption="Fig 01 — Home canopy with avatar pins and status summary"
              />
            </motion.div>

            <motion.div {...fadeIn} className="lg:col-span-5 flex flex-col gap-6">
              <span className="font-mono text-sm text-[#7A7873]">THREE STATES, ONE SIGNAL</span>

              {[
                {
                  dot: "#34d399",
                  name: "Thriving",
                  tag: "Recently cared for",
                  d: "Lush green foliage with prominent avatar badges. A reward in itself, with nothing to do.",
                },
                {
                  dot: "#fbbf24",
                  name: "Needs Care",
                  tag: "Slipping past its rhythm",
                  d: "Colour warms toward amber and a soft watering prompt appears, inviting a touchpoint rather than demanding one.",
                },
                {
                  dot: "#f87171",
                  name: "Wilting",
                  tag: "Dormant",
                  d: "Autumnal tones designed to evoke tenderness, not failure. The leaf can always come back.",
                },
              ].map((s) => (
                <div key={s.name} className="p-6 rounded-lg bg-[#121211] border border-white/[0.08]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.dot }} />
                    <h3 className="font-display font-bold text-xl text-[#F5F4F1]">{s.name}</h3>
                    <span className="font-mono text-xs ml-auto" style={{ color: s.dot }}>
                      {s.tag}
                    </span>
                  </div>
                  <p className="text-[#A09D95] text-[16px] leading-relaxed">{s.d}</p>
                </div>
              ))}

              <div className="rounded-lg bg-[#121211] border border-white/[0.08] p-4 overflow-hidden">
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
                  Fig 02 — Thriving directory with leaf badges
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. EXPERIENCE LOOP */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-4 mb-16">
          <span className="font-mono text-[18px] text-[#F14417]">/loop</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F5F4F1] max-w-[24ch]">
            A four-step loop built to last longer than the novelty
          </h2>
          <p className="text-[#A09D95] text-lg max-w-[50ch]">
            The product is only as good as the habit it creates, so the core loop is deliberately short and ends on a visible reward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: "01", label: "See", desc: "Read the health of every relationship at a glance, with no message threads to open.", where: "Home tree" },
            { step: "02", label: "Notice", desc: "Spot the bonds that need attention before they grow distant.", where: "Status filters" },
            { step: "03", label: "Care", desc: "Send a tactile affirmation or a watering in seconds.", where: "Affirmation leaf" },
            { step: "04", label: "Grow", desc: "Watch the tree flourish and build rhythm over time.", where: "Streaks & themes" },
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
                <span className="font-mono text-sm text-[#F14417] block mb-4">STEP {item.step}</span>
                <h3 className="font-display font-bold text-2xl text-[#F5F4F1] mb-3 group-hover:text-[#F14417] transition-colors">
                  {item.label}
                </h3>
                <p className="text-[#A09D95] text-[16px] leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/[0.05] font-mono text-xs text-[#7A7873]">
                Lives in → <span className="text-[#A09D95]">{item.where}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. KEY DECISIONS */}
      {/* ========================================================= */}
      <section className="pt-24 sm:pt-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-4">
          <span className="font-mono text-[18px] text-[#F14417]">/key-decisions</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-tight text-[#F5F4F1] max-w-[22ch]">
            Three decisions that shaped the product
          </h2>
        </motion.div>
      </section>

      {/* ---- Decision 01: Home + list ---- */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 max-w-[1260px] mx-auto">
        <div className="flex flex-col gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-4 max-w-[60ch]">
            <span className="font-mono text-sm text-[#F14417]">DECISION 01</span>
            <h3 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#F5F4F1]">
              Make the tree the home screen, and keep a list one tap away
            </h3>
            <p className="text-[#A09D95] text-lg leading-relaxed">
              The home view privileges how a relationship feels over how recently someone messaged. Health metrics sit at the top, friends are pinned as illustrated avatars on the branches, and a single floating action plants a new tie or waters an existing one.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              {...fadeIn}
              className="rounded-xl bg-[#121211] border border-white/[0.08] p-6 sm:p-10 flex items-center justify-center"
            >
              <DeviceMockup
                src="/images/projects/tiny-bits/tree-home.png"
                alt="Main home view with living botanical canopy"
                caption="Fig 03 — Home: emotional overview and quick-action trigger"
              />
            </motion.div>
            <motion.div
              {...fadeIn}
              className="rounded-xl bg-[#121211] border border-white/[0.08] p-6 sm:p-10 flex items-center justify-center"
            >
              <DeviceMockup
                src="/images/projects/tiny-bits/connections-list.png"
                alt="Connections list with search and status filters"
                caption="Fig 04 — Connections: search, filter and 1-tap care for fast lookup"
              />
            </motion.div>
          </div>

          <motion.div {...fadeIn}>
            <DecisionNote
              decision="Lead with the metaphor, but pair it with a conventional roster that has search, status filters and quick-care triggers."
              why="The tree is the emotional heart of the product, but nobody can find one friend by panning across foliage. Utility had to live beside the poetry."
              tradeoff="Two views to maintain and keep in sync. I accepted that cost so the metaphor never blocks a quick action."
            />
          </motion.div>
        </div>
      </section>

      {/* ---- Decision 02: Affirmation ---- */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div
            {...fadeIn}
            className="lg:col-span-6 rounded-xl bg-[#121211] border border-white/[0.08] p-6 sm:p-12 flex items-center justify-center"
          >
            <DeviceMockup
              src="/images/projects/tiny-bits/affirmation-modal.png"
              alt="Affirmation leaf modal interaction"
              caption="Fig 05 — Affirmation leaf with 1-tap reply"
            />
          </motion.div>

          <motion.div {...fadeIn} className="lg:col-span-6 flex flex-col gap-6">
            <span className="font-mono text-sm text-[#F14417]">DECISION 02</span>
            <h3 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#F5F4F1]">
              Replace the message box with a leaf
            </h3>
            <p className="text-[#A09D95] text-lg leading-relaxed">
              The hidden friction in keeping in touch is the belief that a message must be long to count. An affirmation is a warm sentence on a green leaf, signed with a heart, sent in seconds.
            </p>

            <div className="p-4 rounded-lg bg-[#121211] border border-white/10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#F14417]/10 border border-[#F14417]/30 flex items-center justify-center shrink-0">
                <Heart className="w-5 h-5 text-[#F14417]" />
              </div>
              <div>
                <span className="font-display font-semibold text-[#F5F4F1] text-[16px] block">
                  &ldquo;Thank you for being such a good friend&rdquo;
                </span>
                <span className="font-mono text-xs text-[#7A7873]">Leaf token with 1-tap reply</span>
              </div>
            </div>

            <DecisionNote
              decision="Lower the cost of reaching out to a single tap, with short prewritten sentiments on a tactile leaf."
              why="Small gestures sent often matter more than long messages that never get written, and a leaf feels like a gift, not a notification."
              tradeoff="Prewritten phrasing risks feeling generic. Personal editing stays available so the gesture can still sound like the sender."
            />
          </motion.div>
        </div>
      </section>

      {/* ---- Decision 03: Progress without pressure ---- */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-10">
          <motion.div {...fadeIn} className="flex flex-col gap-4 max-w-[60ch]">
            <span className="font-mono text-sm text-[#F14417]">DECISION 03</span>
            <h3 className="font-display font-bold text-2xl sm:text-4xl tracking-tight text-[#F5F4F1]">
              Reward rhythm, never punish a miss
            </h3>
            <p className="text-[#A09D95] text-lg leading-relaxed">
              Streaks build habit but can turn care into anxiety. So progress is shown as growth, and a missed day changes colour instead of destroying anything.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Daily Streak", val: "12 Days", sub: "Active rhythm" },
              { label: "Leaves Grown", val: "74", sub: "Total blooms" },
              { label: "Affirmations", val: "74 Sent", sub: "Warm touches" },
              { label: "Leaves Lost", val: "0", sub: "Gentle guardrail" },
              { label: "Last Watered", val: "Today", sub: "Up to date" },
            ].map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col justify-between"
              >
                <span className="font-mono text-xs text-[#7A7873] block mb-3">{metric.label}</span>
                <span className="font-display font-bold text-2xl sm:text-3xl text-[#F5F4F1] tracking-tight">
                  {metric.val}
                </span>
                <span className="font-mono text-xs text-[#F14417] mt-3">{metric.sub}</span>
              </motion.div>
            ))}
          </div>
          <span className="font-mono text-xs text-[#7A7873] -mt-6">Sample prototype data</span>

          <motion.div {...fadeIn} className="max-w-[760px]">
            <DecisionNote
              decision="Show growth and a 'leaves lost: 0' guardrail. Missed days shift leaves toward amber, and a watering brings them back."
              why="If the product makes people feel behind, they'll stop opening it, which defeats the purpose of a relationship-care app."
              tradeoff="Softer consequences mean less urgency than a hard streak. I'm betting that warmth sustains the habit better than loss aversion."
            />
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. VISUAL LANGUAGE */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-3">
            <span className="font-mono text-[18px] text-[#F14417]">/visual-language</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F5F4F1] max-w-[24ch]">
              A visual language that feels caring, not clinical
            </h2>
            <p className="text-[#A09D95] text-lg max-w-[52ch]">
              People associate notifications with urgency and obligation. The visual system had to do the opposite and signal warmth before a single word is read.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col gap-6">
              <span className="font-mono text-sm text-[#F14417]">01 / COLOUR</span>
              <h3 className="font-display font-bold text-2xl text-[#F5F4F1]">Botanical harmony</h3>
              <p className="text-[#A09D95] text-[16px] leading-relaxed">
                Calming sage and forest greens, soft cream backdrops and a coral accent for warmth, instead of the electric blues of typical tech.
              </p>
              <div className="flex gap-2 mt-auto pt-4">
                <span className="h-8 flex-1 rounded bg-[#2D5A43]" title="Forest Green #2D5A43" />
                <span className="h-8 flex-1 rounded bg-[#6A9A7B]" title="Sage #6A9A7B" />
                <span className="h-8 flex-1 rounded bg-[#F8EFE4]" title="Cream #F8EFE4" />
                <span className="h-8 flex-1 rounded bg-[#F14417]" title="Coral #F14417" />
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col gap-6">
              <span className="font-mono text-sm text-[#F14417]">02 / FORM</span>
              <h3 className="font-display font-bold text-2xl text-[#F5F4F1]">Soft, rounded, tactile</h3>
              <p className="text-[#A09D95] text-[16px] leading-relaxed">
                Pill badges, generous radii, hand-drawn icons and warm shadows. No sharp edges that might read as rigid.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4">
                {["radius 24–32px", "tactile cards", "warm shadows"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full border border-white/10 font-mono text-xs text-[#A09D95]">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col gap-6">
              <span className="font-mono text-sm text-[#F14417]">03 / METAPHOR</span>
              <h3 className="font-display font-bold text-2xl text-[#F5F4F1]">One consistent vocabulary</h3>
              <p className="text-[#A09D95] text-[16px] leading-relaxed">
                Trunk as the anchor bond, leaves as shared touchpoints, watering as outreach, hearts as warmth. Every label and icon draws from the same garden.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 font-mono text-xs text-[#A09D95]">
                <span>Tree</span> • <span>Leaves</span> • <span>Watering</span> • <span>Growth</span> • <span>Hearts</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            {...fadeIn}
            className="rounded-xl bg-[#121211] border border-white/[0.08] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden"
          >
            <div className="flex flex-col gap-4 max-w-[500px]">
              <span className="font-mono text-sm text-[#F14417]">IDENTITY IN CONTEXT</span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F4F1]">
                One tone from splash screen to canopy
              </h3>
              <p className="text-[#A09D95] text-[16px] leading-relaxed">
                The heart-leaf emblem and warm cream splash flow straight into the living canopy, so the first impression and the daily experience feel like the same product.
              </p>
            </div>

            <div className="relative w-full max-w-[320px] sm:max-w-[340px] aspect-[597/843] shrink-0 drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]">
              <Image
                src="/images/projects/tiny-bits/duo-mockup.png"
                alt="Tiny Bits of Love duo mockup showing brand splash screen and living canopy"
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. PERSONALISATION */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div {...fadeIn} className="lg:col-span-6 flex flex-col gap-6">
            <span className="font-mono text-[18px] text-[#F14417]">/personalisation</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F5F4F1] leading-tight">
              Make it a place people want to return to
            </h2>
            <p className="text-[#A09D95] text-lg leading-relaxed">
              Seasonal tree themes, Enchanted Forest, Winter Wonderland and Sakura Blossom, let each person make the space their own. The aim is for checking in on friends to feel like self-care, not like clearing an inbox.
            </p>
            <div className="p-4 rounded-lg bg-[#121211] border border-white/[0.08] text-[16px] text-[#A09D95] leading-relaxed">
              <span className="font-mono text-xs text-[#F14417] block mb-1">THE FEELING TARGET</span>
              Walking into a sunlit greenhouse, never facing an unread-email backlog.
            </div>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="lg:col-span-6 rounded-xl bg-[#121211] border border-white/[0.08] p-6 sm:p-12 flex items-center justify-center"
          >
            <DeviceMockup
              src="/images/projects/tiny-bits/tree-themes.png"
              alt="Tree customisation and themes screen"
              caption="Fig 06 — Seasonal themes: Enchanted, Winter, Sakura"
            />
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. BRAND TOUCHPOINTS */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-3 mb-10">
          <span className="font-mono text-[18px] text-[#F14417]">/brand-touchpoints</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#F5F4F1]">
            The system scales beyond the app
          </h2>
          <p className="text-[#A09D95] text-lg max-w-[50ch]">
            The same palette, metaphors and tone carry into campaign and content touchpoints.
          </p>
        </motion.div>

        <motion.div
          {...fadeIn}
          className="w-full relative aspect-[1024/500] rounded-xl overflow-hidden border border-white/[0.08] bg-[#121211] shadow-2xl mb-12"
        >
          <Image
            src="/images/projects/tiny-bits/brand-banner.png"
            alt="Tiny Bits of Love campaign banner: Grow your love, one tiny leaf at a time"
            fill
            sizes="(max-width: 1260px) 100vw, 1260px"
            className="object-contain sm:object-cover object-center"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: "Connection guides", desc: "Short illustrated essays on adult friendship and low-pressure contact rhythms." },
            { title: "Launch & store visuals", desc: "Campaign art positioning the living tree as an antidote to screen-time burnout." },
            { title: "Founder story", desc: "Long-form editorial on the personal motivation behind intentional relationship health." },
            { title: "Shareable milestones", desc: "Seasonal postcards friends can send outside the app to celebrate shared years." },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-xl bg-[#121211] border border-white/[0.08]"
            >
              <span className="font-mono text-xs text-[#7A7873] block mb-2">0{idx + 1}</span>
              <h3 className="font-display font-bold text-xl text-[#F5F4F1] mb-2">{item.title}</h3>
              <p className="text-[#A09D95] text-[15px] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* 11. OUTCOME & REFLECTION */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <motion.div {...fadeIn} className="flex flex-col gap-4 mb-14">
          <span className="font-mono text-[18px] text-[#F14417]">/outcome</span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F5F4F1] max-w-[22ch]">
            What I delivered, learned and would test next
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-sm text-[#F14417] block mb-4">DELIVERED</span>
            <ul className="flex flex-col gap-3 text-[#A09D95] text-[16px] leading-relaxed">
              <li>• End-to-end mobile UX and UI across home, roster, affirmations, progress and themes</li>
              <li>• A cohesive design system and botanical brand identity</li>
              <li>• An interactive prototype of the core loop</li>
              <li>• Campaign and content touchpoints that extend the identity</li>
            </ul>
          </motion.div>

          <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-sm text-[#F14417] block mb-4">WHAT I LEARNED</span>
            <ul className="flex flex-col gap-3 text-[#A09D95] text-[16px] leading-relaxed">
              <li>• A strong metaphor needs an escape hatch. The roster exists because the tree can&apos;t handle fast lookup.</li>
              <li>• Gamification needs guardrails. Removing loss from the streak system mattered more than adding rewards.</li>
              <li>• Emotional tone is a feature. Colour and copy did as much work as the interaction design.</li>
            </ul>
          </motion.div>

          <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121211] border border-white/[0.08]">
            <span className="font-mono text-sm text-[#F14417] block mb-4">NEXT TO VALIDATE</span>
            <ul className="flex flex-col gap-3 text-[#A09D95] text-[16px] leading-relaxed">
              <li>• Whether people return after week two without guilt-based nudges</li>
              <li>• How the wilting state is read: gentle, or quietly shaming?</li>
              <li>• The right cadence thresholds for &ldquo;needs care&rdquo; across close vs. casual ties</li>
              <li>• Whether prewritten affirmations feel personal enough once edited</li>
            </ul>
          </motion.div>
        </div>

        <motion.blockquote
          {...fadeIn}
          className="mt-16 max-w-[820px] font-display font-bold text-2xl sm:text-4xl tracking-[-0.02em] text-[#F5F4F1] leading-snug"
        >
          &ldquo;Tiny Bits of Love turns relationship maintenance from an invisible responsibility into a simple, visual and meaningful daily practice.&rdquo;
        </motion.blockquote>
      </section>

      {/* ========================================================= */}
      {/* 12. PROJECT NAVIGATION */}
      {/* ========================================================= */}
      <section className="pt-16 pb-24 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-3 font-mono text-[18px] text-[#A09D95] hover:text-[#F14417] transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Previous: Descartes Dashboard</span>
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
            <span>Next: Mazeflower</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}
