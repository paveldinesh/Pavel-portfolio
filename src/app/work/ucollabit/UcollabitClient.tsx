"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  Smartphone,
  Share2,
  Users,
  Compass,
  Lightbulb,
  MessageSquare,
  Repeat,
  HandHeart,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

/**
 * IMAGE SLOTS
 * Drop your high-res mockups or screenshots into /public/images/projects/ucollabit/
 * using these filenames. If no file exists at that path, it seamlessly renders
 * a crisp, interactive illustrative screen with real typography and components.
 */
const IMG = {
  hero: "/images/projects/ucollabit/hero.webp",
  creativeDna: "/images/projects/ucollabit/iphone-16-plus-dark.webp",
  discovery: "/images/projects/ucollabit/iphone-16-plus-dark-1.webp",
  interactions: "/images/projects/ucollabit/iphone-16-plus-dark-2.webp",
  journey: "/images/projects/ucollabit/iphone-16-plus-dark-3.webp",
};

/** Mobile device frame with graceful fallback when a user image isn't added yet */
function MobileSlot({
  src,
  alt,
  caption,
  className = "",
  maxWidth = "max-w-[320px] sm:max-w-[340px]",
  children,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  maxWidth?: string;
  children?: React.ReactNode;
}) {
  const [missing, setMissing] = useState(false);

  return (
    <div className={`flex flex-col items-center justify-center w-full ${className}`}>
      <div
        className={`relative w-full ${maxWidth} rounded-[44px] p-[8px] sm:p-[10px] bg-gradient-to-b from-[#333d36] via-[#1a231d] to-[#101411] ring-1 ring-white/20 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95),0_0_40px_rgba(53,83,60,0.25)]`}
      >
        {/* Dynamic Island / Hardware notch */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#0A0D0B] rounded-full z-20 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>

        {/* Inner Phone Screen Frame */}
        <div className="relative w-full aspect-[9/19] rounded-[34px] overflow-hidden bg-[#F7F6EE] text-[#1A281E] ring-1 ring-black/10 flex flex-col justify-between">
          {!missing && src ? (
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-contain object-top"
                onError={() => setMissing(true)}
              />
            </div>
          ) : (
            <div className="w-full h-full flex flex-col justify-between p-5 pt-8 select-none">
              {children || (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-4 border border-dashed border-[#3D5F45]/30 rounded-2xl bg-white/60">
                  <span className="font-mono text-xs text-[#F14417] font-semibold tracking-wider">
                    IMAGE SLOT
                  </span>
                  <span className="font-mono text-xs text-[#4E6252] mt-1 break-all">
                    {src.split("/").pop()}
                  </span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {caption && (
        <span className="font-mono text-xs text-[#80887C] mt-4 text-center max-w-[38ch]">
          {caption}
        </span>
      )}
    </div>
  );
}

export default function UCollabitCaseStudy() {
  const fadeIn = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.6 },
  };

  return (
    <main className="min-h-screen bg-[#0B0C0B] text-[#F1F0E9] relative selection:bg-[#F14417] selection:text-white pb-24">
      <Navbar />

      {/* ========================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================= */}
      <section className="pt-32 sm:pt-40 md:pt-44 pb-16 sm:pb-24 px-6 sm:px-12 max-w-[1260px] mx-auto border-b border-white/[0.08]">
        {/* Back Link */}
        <motion.div {...fadeIn}>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-sm text-[#A09D95] hover:text-[#F14417] transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Selected Work</span>
          </Link>
        </motion.div>

        {/* Kicker */}
        <motion.div {...fadeIn} className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="font-mono text-xs sm:text-sm text-[#F14417] uppercase tracking-[0.2em] font-bold">
            03 // Product Experience &bull; Social Networking &bull; 2026
          </span>
          <span className="text-white/20 select-none">&bull;</span>
          <span className="font-mono text-xs sm:text-sm text-[#A8CAAA] border border-[#A8CAAA]/20 bg-[#162118] px-2.5 py-0.5 rounded-full">
            Independent UX Case Study
          </span>
        </motion.div>

        {/* Main Title & Tagline */}
        <motion.h1
          {...fadeIn}
          className="font-display font-bold text-5xl sm:text-7xl md:text-8xl tracking-[-0.04em] text-[#F1F0E9] leading-[0.95] mb-6"
        >
          uCollabit<span className="text-[#F14417]">.</span>
        </motion.h1>

        <motion.p
          {...fadeIn}
          className="text-xl sm:text-2xl md:text-3xl text-[#DCEBD8] font-medium tracking-tight max-w-[840px] mb-6"
        >
          Creative connections that lead to more than a like.
        </motion.p>

        <motion.p
          {...fadeIn}
          className="text-[17px] sm:text-[19px] text-[#A09D95] leading-relaxed max-w-[740px] mb-12"
        >
          A UX-focused product case study exploring how uCollabit brings portfolios, professional
          journeys, and intentional collaboration into one cohesive creative ecosystem.
        </motion.p>

        {/* Meta Grid */}
        <motion.div
          {...fadeIn}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/[0.08] mb-12"
        >
          <div>
            <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider block mb-1">
              PRODUCT
            </span>
            <span className="font-mono text-sm text-[#F1F0E9] font-medium">uCollabit Mobile App</span>
          </div>
          <div>
            <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider block mb-1">
              AUDIENCE
            </span>
            <span className="font-mono text-sm text-[#F1F0E9] font-medium">
              Artists & Creative Pros
            </span>
          </div>
          <div>
            <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider block mb-1">
              PLATFORM
            </span>
            <span className="font-mono text-sm text-[#F1F0E9] font-medium">Mobile / Early Access</span>
          </div>
          <div>
            <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider block mb-1">
              RESEARCH TYPE
            </span>
            <span className="font-mono text-sm text-[#F1F0E9] font-medium">
              Independent UX Analysis
            </span>
          </div>
        </motion.div>

        {/* Action Links */}
        <motion.div {...fadeIn} className="flex flex-wrap items-center gap-4">
          <a
            href="https://www.ucollabit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F14417] hover:bg-[#d63a12] text-white text-[15px] font-semibold transition-all shadow-lg shadow-[#F14417]/25"
          >
            <span>Visit ucollabit.com</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.ucollabit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#162118] hover:bg-[#203023] text-[#DCEBD8] border border-[#35533c] text-[15px] font-medium transition-all"
          >
            <span>Google Play Early Access</span>
            <ArrowUpRight className="w-4 h-4 text-[#A8CAAA]" />
          </a>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 2. HERO SHOWCASE: CONCEPT SCREENS */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1260px] mx-auto border-b border-white/[0.08]">
        <motion.div
          {...fadeIn}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#18241D] via-[#101511] to-[#0B0C0B] border border-white/[0.08] p-8 sm:p-14 flex flex-col items-center"
        >
          {/* Subtle Ambient Glow & Watermarks */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#35533C]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#F14417]/10 rounded-full blur-[90px] pointer-events-none" />
          <span className="absolute top-4 left-6 text-[140px] text-[#51684E]/10 font-serif select-none pointer-events-none leading-none">
            ✳
          </span>
          <span className="absolute bottom-4 right-6 text-[140px] text-[#51684E]/10 font-serif select-none pointer-events-none leading-none">
            ✳
          </span>

          {/* Hero Banner Showcase */}
          <div className="w-full max-w-[960px] relative aspect-[1134/850] rounded-xl overflow-hidden mb-12 shadow-2xl border border-white/10">
            <Image
              src={IMG.hero}
              alt="uCollabit ecosystem preview"
              fill
              priority
              sizes="(max-width: 1260px) 100vw, 960px"
              className="object-contain object-center"
            />
          </div>

          {/* Dual Phone Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 relative z-10 w-full py-6">
            {/* Phone 1: Welcome & Creative Community */}
            <div className="sm:-rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-[320px]">
              <MobileSlot
                src={IMG.discovery}
                alt="uCollabit creative world screen mockup"
                caption="uCollabit Welcome Feed — Creative Discovery"
              >
                <div className="flex items-center justify-between font-bold text-xs">
                  <span>uCollabit</span>
                  <span className="w-6 h-6 rounded-full bg-[#D8B087] text-white flex items-center justify-center text-[10px]">
                    ✦
                  </span>
                </div>
                <div className="mt-4">
                  <span className="bg-[#DAE8D7] text-[#3D5F45] text-[10px] font-bold px-2.5 py-1 rounded-full">
                    Your creative world
                  </span>
                  <h3 className="font-serif text-2xl text-[#1B3324] font-bold mt-2 leading-tight">
                    Make more
                    <br />
                    together.
                  </h3>
                </div>
                <div className="h-32 rounded-xl bg-gradient-to-b from-[#E2EAD9] to-[#B0C9A1] flex items-center justify-center text-4xl relative overflow-hidden my-3">
                  <span>🎨</span>
                  <span className="absolute bottom-2 left-2 text-[8px] font-mono font-bold bg-[#F5F8E7] text-[#203324] px-1.5 py-0.5 rounded">
                    CREATIVE DNA
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-[#E4E6DB]">
                    <div className="w-7 h-7 rounded bg-[#A1C4A7] flex items-center justify-center text-xs">
                      ✏️
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="h-2 w-3/4 bg-[#9FB5A2] rounded-full" />
                      <div className="h-1.5 w-1/2 bg-[#CAD3C6] rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-white rounded-lg border border-[#E4E6DB]">
                    <div className="w-7 h-7 rounded bg-[#DDBB97] flex items-center justify-center text-xs">
                      📷
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="h-2 w-2/3 bg-[#9FB5A2] rounded-full" />
                      <div className="h-1.5 w-1/3 bg-[#CAD3C6] rounded-full" />
                    </div>
                  </div>
                </div>
              </MobileSlot>
            </div>

            {/* Phone 2: Creative DNA Profile */}
            <div className="sm:rotate-3 hover:rotate-0 transition-transform duration-500 w-full max-w-[320px]">
              <MobileSlot
                src={IMG.creativeDna}
                alt="uCollabit Creative DNA screen mockup"
                caption="Creative DNA — Evolving creator journey"
              >
                <div className="flex items-center justify-between font-bold text-xs">
                  <span>Creative DNA</span>
                  <span className="text-[#3D5F45]">•••</span>
                </div>
                <div className="h-28 rounded-xl bg-gradient-to-r from-[#E6D0B6] to-[#C4DAC6] flex items-center justify-center text-3xl my-2">
                  <span>🌿</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#1B3324] font-bold">
                    Your story.
                    <br />
                    Your work.
                  </h3>
                </div>
                <div className="bg-white p-3 rounded-xl border border-[#E4E6DB] text-[10px] space-y-1.5 mt-2">
                  <b className="text-[#1A281E] block text-xs">Visual storyteller</b>
                  <p className="text-[#647266] m-0 text-[10px]">Photography &bull; Art direction &bull; Film</p>
                  <div className="flex gap-1.5 flex-wrap pt-1">
                    <span className="bg-[#E8EEE2] px-2 py-0.5 rounded text-[8px] font-semibold text-[#3D5F45]">
                      Portfolio
                    </span>
                    <span className="bg-[#E8EEE2] px-2 py-0.5 rounded text-[8px] font-semibold text-[#3D5F45]">
                      Milestones
                    </span>
                    <span className="bg-[#E8EEE2] px-2 py-0.5 rounded text-[8px] font-semibold text-[#3D5F45]">
                      Resume
                    </span>
                  </div>
                </div>
                <div className="bg-[#19231C] text-white p-3 rounded-xl flex items-center justify-between mt-2">
                  <div>
                    <span className="text-[10px] font-bold block text-[#F5F4F1]">Open to collaborate</span>
                    <span className="text-[8px] text-[#A8CAAA]">5 ways to engage</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#F14417]" />
                </div>
              </MobileSlot>
            </div>
          </div>

          <p className="font-mono text-xs text-[#80887C] text-center mt-6">
            Illustrative concept mockups &mdash; conceptual representations of published uCollabit features.
          </p>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 3. THE CHALLENGE */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1260px] mx-auto border-b border-white/[0.08]">
        <motion.div {...fadeIn} className="mb-14">
          <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider block mb-3">
            01 // THE CHALLENGE
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F1F0E9] max-w-[820px] mb-6">
            Creative work is visible.
            <br />
            Creative opportunity is fragmented.
          </h2>
          <p className="text-lg sm:text-xl text-[#A09D95] max-w-[760px] leading-relaxed">
            Creators need more than a place to post finished work. They need ways to present their
            evolving skills, find complementary talent, and turn passive discovery into purposeful
            collaboration.
          </p>
        </motion.div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              num: "01",
              title: "Scattered Identity",
              text: "Portfolios, resumes, achievements, and personal stories often exist across disparate platforms (Behance, LinkedIn, Instagram, personal sites), making holistic assessment difficult.",
            },
            {
              num: "02",
              title: "Passive Engagement",
              text: "A 'like' rewards visibility without communicating how someone actually wants to contribute, flattening meaningful peer feedback into vanity metrics.",
            },
            {
              num: "03",
              title: "Hard-to-Find Fit",
              text: "Discovering collaborators with aligned complementary skills, mutual artistic taste, and shared project goals requires exhausting manual searches.",
            },
          ].map((card, i) => (
            <motion.div
              key={card.num}
              {...fadeIn}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 rounded-xl bg-[#121614] border border-[#212720] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-sm text-[#F14417] font-semibold block mb-4">
                  {card.num}
                </span>
                <h3 className="font-display font-bold text-xl text-[#F1F0E9] mb-3">{card.title}</h3>
                <p className="text-[#A09D95] text-sm leading-relaxed">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Framing Quote */}
        <motion.div
          {...fadeIn}
          className="p-8 sm:p-10 rounded-xl bg-[#131512] border-l-4 border-[#F14417] max-w-[920px]"
        >
          <p className="text-xl sm:text-2xl text-[#F0EEE7] font-medium leading-snug mb-3">
            &ldquo;How might we help creative people show who they are, discover the right people, and
            move from admiration to action?&rdquo;
          </p>
          <cite className="font-mono text-xs text-[#80887C] not-italic">
            Design framing derived from uCollabit&apos;s stated product mission; not a quoted company research question.
          </cite>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 4. PRODUCT DIRECTION */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1260px] mx-auto border-b border-white/[0.08]">
        <motion.div {...fadeIn} className="mb-12">
          <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider block mb-3">
            02 // PRODUCT DIRECTION
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F1F0E9] max-w-[820px] mb-4">
            From another social feed to a creative ecosystem.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div
            {...fadeIn}
            className="p-8 rounded-xl bg-[#121614] border border-[#212720] flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-xs text-[#F14417] font-semibold uppercase tracking-wider block mb-4">
                DESIGN INTENT // 01
              </span>
              <h3 className="font-display font-bold text-2xl text-[#F1F0E9] mb-3">
                Make a creator&apos;s journey visible.
              </h3>
              <p className="text-[#A09D95] text-[15px] leading-relaxed">
                A profile should reflect not only polished deliverables, but also creative milestones,
                experimental sketches, tools utilized, and the authentic path behind their work.
              </p>
            </div>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="p-8 rounded-xl bg-[#121614] border border-[#212720] flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-xs text-[#F14417] font-semibold uppercase tracking-wider block mb-4">
                DESIGN INTENT // 02
              </span>
              <h3 className="font-display font-bold text-2xl text-[#F1F0E9] mb-3">
                Make engagement actionable.
              </h3>
              <p className="text-[#A09D95] text-[15px] leading-relaxed">
                Reimagine social interactions as active contributions: exchanging feedback, offering
                ideas, barter skills, volunteering time, or initiating paid engagements.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.p {...fadeIn} className="font-mono text-xs text-[#80887C] max-w-[820px] leading-relaxed">
          * Note: uCollabit&apos;s published features include Creative DNA profiles, portfolios,
          project sharing, discovery, direct messaging, and five specific interaction types. These are
          documented product features, while the UX framing here is an independent design analysis.
        </motion.p>
      </section>

      {/* ========================================================= */}
      {/* 5. THE EXPERIENCE: CREATIVE DNA */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1260px] mx-auto border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          <motion.div {...fadeIn}>
            <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider block mb-3">
              03 // THE EXPERIENCE &bull; FEATURE 01
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F1F0E9] mb-6 leading-tight">
              A living profile,
              <br />
              not a static résumé.
            </h2>
            <p className="text-lg text-[#DCEBD8] mb-6 leading-relaxed">
              Creative DNA consolidates portfolios, resumes, career milestones, photos, videos, and
              achievements. The goal is to help collaborators understand both a creator&apos;s
              capabilities and their current artistic trajectory.
            </p>
            <div className="p-6 rounded-xl bg-[#161D18] border border-[#28352A] mb-6">
              <span className="font-mono text-xs text-[#A8CAAA] uppercase tracking-wider block mb-2 font-semibold">
                Core Design Principle
              </span>
              <p className="text-[#F1F0E9] text-[15px] leading-relaxed">
                Make credibility and artistic personality discoverable at a glance &mdash; without
                flattening someone&apos;s identity into a hollow follower count.
              </p>
            </div>
            <ul className="space-y-3 font-mono text-xs sm:text-sm text-[#A09D95]">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F14417]" />
                <span>Multimodal showcase: Video, high-res stills, interactive links</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F14417]" />
                <span>Career timeline mapping milestones alongside active projects</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F14417]" />
                <span>Explicit collaboration availability & preferred interaction modes</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            {...fadeIn}
            className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#18241D] to-[#101511] border border-[#263329] flex flex-col items-center justify-center relative overflow-hidden"
          >
            <div className="sm:rotate-2 hover:rotate-0 transition-transform duration-500 w-full max-w-[320px]">
              <MobileSlot
                src={IMG.creativeDna}
                alt="Maya Chen Creative DNA screen"
                caption="Creative DNA profile mockup: Maya Chen"
              >
                <div className="flex items-center justify-between text-xs font-bold text-[#1A281E]">
                  <span>Creative DNA</span>
                  <span className="text-[#3D5F45]">⚙</span>
                </div>
                <div className="h-28 rounded-xl bg-[#C4DAC6] flex items-center justify-center text-3xl my-2">
                  <span>🪴</span>
                </div>
                <h4 className="font-serif text-lg text-[#1B3324] font-bold">Maya Chen</h4>
                <div className="flex gap-1.5 flex-wrap my-1">
                  <span className="bg-[#E8EEE2] px-2 py-0.5 rounded text-[8px] font-semibold text-[#3D5F45]">
                    Illustration
                  </span>
                  <span className="bg-[#E8EEE2] px-2 py-0.5 rounded text-[8px] font-semibold text-[#3D5F45]">
                    Brand design
                  </span>
                  <span className="bg-[#DAE8D7] px-2 py-0.5 rounded text-[8px] font-bold text-[#2A4832]">
                    Open to collab
                  </span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-[#E4E6DB] text-[9px] my-1">
                  <b className="text-[#1A281E] block text-[10px]">Featured projects</b>
                  <span className="text-[#647266]">Identity systems &bull; Editorial artworks</span>
                </div>
                <div className="bg-white p-2.5 rounded-lg border border-[#E4E6DB] text-[9px]">
                  <b className="text-[#1A281E] block text-[10px]">Career milestone</b>
                  <span className="text-[#647266]">Completed first collaborative gallery exhibition</span>
                </div>
              </MobileSlot>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. INTERACTION DESIGN: FIVE WAYS TO CONTRIBUTE */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1260px] mx-auto border-b border-white/[0.08]">
        <motion.div {...fadeIn} className="mb-14">
          <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider block mb-3">
            04 // INTERACTION DESIGN
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F1F0E9] max-w-[820px] mb-4">
            Five ways to contribute.
            <br />
            Zero dependence on a like.
          </h2>
          <p className="text-lg sm:text-xl text-[#A09D95] max-w-[760px] leading-relaxed">
            uCollabit describes five interaction choices intended to create more purposeful,
            intentional creator engagement.
          </p>
        </motion.div>

        {/* The 5 Interactions Grid + CTA Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {[
            {
              icon: Lightbulb,
              num: "✦ 01",
              title: "Ideas",
              desc: "Offer an idea or creative direction to spark new possibilities.",
            },
            {
              icon: MessageSquare,
              num: "✦ 02",
              title: "Feedback",
              desc: "Give constructive, actionable critique to refine ongoing work.",
            },
            {
              icon: Repeat,
              num: "✦ 03",
              title: "Barter",
              desc: "Propose a direct mutual exchange of creative skills or resources.",
            },
            {
              icon: HandHeart,
              num: "✦ 04",
              title: "Volunteer",
              desc: "Offer hands-on time or operational support to bring a project to life.",
            },
            {
              icon: DollarSign,
              num: "✦ 05",
              title: "Money",
              desc: "Express financial support, sponsorship, or commission paid interest.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeIn}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="p-7 rounded-xl bg-[#121614] border border-[#212720] hover:border-[#35533c] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#F14417] font-bold">{item.num}</span>
                  <item.icon className="w-5 h-5 text-[#A8CAAA]" />
                </div>
                <h3 className="font-display font-bold text-2xl text-[#F1F0E9] mb-2">{item.title}</h3>
                <p className="text-[#A09D95] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}

          {/* 6th Card: Philosophy Highlight */}
          <motion.div
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="p-7 rounded-xl bg-gradient-to-br from-[#1B261D] to-[#121C14] border border-[#35533C] flex flex-col items-center justify-center text-center group cursor-default"
          >
            <Sparkles className="w-8 h-8 text-[#F14417] mb-3 transition-transform group-hover:scale-110" />
            <p className="font-display font-bold text-xl sm:text-2xl text-[#DCEBD8] leading-snug">
              Engagement becomes an invitation to collaborate. ↗
            </p>
          </motion.div>
        </div>

        <motion.div {...fadeIn} className="p-5 rounded-lg bg-[#1B201B] border border-[#374639]">
          <p className="font-mono text-xs text-[#B2C6B4] leading-relaxed">
            Note: The labels and existence of the five interactions are verified from public product documentation.
            The descriptions above are plain-language UX interpretations, not confirmation of proprietary payment
            processing, hiring workflows, or barter fulfillment pipelines.
          </p>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 7. DISCOVERY & AI MATCHING */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1260px] mx-auto border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Discovery Mockup */}
          <motion.div
            {...fadeIn}
            className="order-2 lg:order-1 p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#18241D] to-[#101511] border border-[#263329] flex flex-col items-center justify-center relative overflow-hidden"
          >
            <div className="sm:-rotate-2 hover:rotate-0 transition-transform duration-500 w-full max-w-[320px]">
              <MobileSlot
                src={IMG.discovery}
                alt="uCollabit Discovery screen mockup"
                caption="Discovery screen: Intent-based connection suggestions"
              >
                <div className="flex items-center justify-between text-xs font-bold text-[#1A281E]">
                  <span>Discover</span>
                  <span className="text-[#3D5F45]">⌕</span>
                </div>
                <h4 className="font-serif text-xl text-[#1B3324] font-bold mt-2 leading-tight">
                  Find your
                  <br />
                  creative circle.
                </h4>
                <div className="flex gap-1.5 flex-wrap my-2">
                  <span className="bg-[#E8EEE2] px-2 py-0.5 rounded text-[8px] font-semibold text-[#3D5F45]">
                    Illustration
                  </span>
                  <span className="bg-[#E8EEE2] px-2 py-0.5 rounded text-[8px] font-semibold text-[#3D5F45]">
                    Film
                  </span>
                  <span className="bg-[#E8EEE2] px-2 py-0.5 rounded text-[8px] font-semibold text-[#3D5F45]">
                    Design
                  </span>
                  <span className="bg-[#E8EEE2] px-2 py-0.5 rounded text-[8px] font-semibold text-[#3D5F45]">
                    Music
                  </span>
                </div>

                <div className="space-y-2 my-2">
                  {[
                    { icon: "🎬", name: "Noah", role: "Film Direction" },
                    { icon: "🎨", name: "Sofia", role: "Brand & 3D" },
                    { icon: "📸", name: "Kai", role: "Editorial Photo" },
                  ].map((p) => (
                    <div
                      key={p.name}
                      className="flex items-center gap-2 p-2 bg-white rounded-lg border border-[#E4E6DB]"
                    >
                      <div className="w-7 h-7 rounded bg-[#DCEBD8] flex items-center justify-center text-xs">
                        {p.icon}
                      </div>
                      <div className="flex-1">
                        <span className="text-[10px] font-bold text-[#1A281E] block">{p.name}</span>
                        <span className="text-[8px] text-[#647266]">{p.role}</span>
                      </div>
                      <span className="text-[10px] text-[#F14417] font-semibold">Connect &rarr;</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#E8EEE2] p-2 rounded-lg text-center text-[9px] text-[#3D5F45] font-medium">
                  Suggested based on your Creative DNA &bull; 94% fit
                </div>
              </MobileSlot>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div {...fadeIn} className="order-1 lg:order-2">
            <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider block mb-3">
              05 // DISCOVERY &bull; FEATURE 02
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F1F0E9] mb-6 leading-tight">
              Less noise.
              <br />
              More creative fit.
            </h2>
            <p className="text-lg text-[#DCEBD8] mb-6 leading-relaxed">
              uCollabit states that its AI-enabled discovery suggests collaborators based on
              interests and complementary skills, highlighting aligned people and projects rather than
              vanity popularity.
            </p>
            <p className="text-[16px] text-[#A09D95] mb-8 leading-relaxed">
              A key UX objective is making algorithm suggestions legible and trustworthy: clearly
              showing shared aesthetic tastes, missing skillsets, and a friction-free gateway to direct
              conversation.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#121614] border border-[#212720]">
                <span className="font-mono text-xs text-[#F14417] block mb-1">SKILL COMPLEMENT</span>
                <p className="text-xs text-[#A09D95] m-0">Pairs animators with sound designers</p>
              </div>
              <div className="p-5 rounded-xl bg-[#121614] border border-[#212720]">
                <span className="font-mono text-xs text-[#F14417] block mb-1">INTENT MATCHING</span>
                <p className="text-xs text-[#A09D95] m-0">Filters by collaboration availability</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. END-TO-END JOURNEY LOOP */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1260px] mx-auto border-b border-white/[0.08]">
        <motion.div {...fadeIn} className="mb-12">
          <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider block mb-3">
            06 // END-TO-END JOURNEY
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F1F0E9] max-w-[820px] mb-4">
            A four-step loop designed to turn discovery into opportunity.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            {
              step: "01",
              title: "Express",
              desc: "Create a Creative DNA profile, import milestones, and share work with context.",
            },
            {
              step: "02",
              title: "Discover",
              desc: "Explore creators, disciplines, and communities aligned with your creative goals.",
            },
            {
              step: "03",
              title: "Engage",
              desc: "Respond with Ideas, Feedback, Barter, Volunteer, or Money.",
            },
            {
              step: "04",
              title: "Connect",
              desc: "Message directly, align on project scopes, and start building together.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              {...fadeIn}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-[#121614] border-t-2 border-[#F14417] border-x border-b border-[#212720] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-2xl font-bold text-[#F14417] block mb-3">
                  {item.step}
                </span>
                <h3 className="font-display font-bold text-lg text-[#F1F0E9] mb-2">{item.title}</h3>
                <p className="text-xs text-[#A09D95] leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p {...fadeIn} className="font-mono text-xs text-[#80887C]">
          * This journey is a case-study synthesis of available product features, not a verified internal analytics funnel.
        </motion.p>
      </section>

      {/* ========================================================= */}
      {/* 9. DESIGN LANGUAGE PROPOSAL */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1260px] mx-auto border-b border-white/[0.08]">
        <motion.div {...fadeIn} className="mb-14">
          <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider block mb-3">
            07 // DESIGN LANGUAGE PROPOSAL
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F1F0E9] max-w-[820px] mb-4">
            Let the creative work remain the hero.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Palette proposal */}
          <motion.div
            {...fadeIn}
            className="p-8 rounded-xl bg-[#121614] border border-[#212720] flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-xs text-[#F14417] block mb-2">COLOR SYSTEM // CONCEPT</span>
              <h3 className="font-display font-bold text-2xl text-[#F1F0E9] mb-3">
                Calm, expressive foundation
              </h3>
              <p className="text-[#A09D95] text-sm leading-relaxed mb-6">
                A restrained dark substrate lets creators&apos; artwork supply the color, while
                collaboration badges and action cues remain immediately scannable.
              </p>

              {/* Swatches */}
              <div className="flex gap-2.5 mb-3">
                {[
                  { bg: "#0B0C0B", label: "Base" },
                  { bg: "#35533C", label: "Forest" },
                  { bg: "#B3CBB6", label: "Sage" },
                  { bg: "#F66E42", label: "Accent" },
                  { bg: "#F7F6EE", label: "Paper" },
                ].map((s) => (
                  <div key={s.bg} className="flex-1 flex flex-col gap-1.5">
                    <div
                      className="h-12 rounded-lg border border-white/10"
                      style={{ backgroundColor: s.bg }}
                    />
                    <span className="font-mono text-[10px] text-[#80887C] text-center">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <span className="font-mono text-[11px] text-[#80887C] block mt-4">
              Illustrative palette &mdash; not official brand tokens.
            </span>
          </motion.div>

          {/* Interaction components */}
          <motion.div
            {...fadeIn}
            className="p-8 rounded-xl bg-[#121614] border border-[#212720] flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-xs text-[#F14417] block mb-2">
                INTERACTION // PATTERNS
              </span>
              <h3 className="font-display font-bold text-2xl text-[#F1F0E9] mb-3">
                Clear and friendly actions
              </h3>
              <p className="text-[#A09D95] text-sm leading-relaxed mb-6">
                Direct, communicative micro-copy with visible outcomes removes hesitation when
                approaching peers for potential creative partnerships.
              </p>

              {/* Demo Buttons */}
              <div className="flex flex-wrap gap-3 items-center">
                <span className="inline-block bg-[#35533C] text-white px-5 py-2.5 rounded-full text-xs font-bold tracking-wide">
                  Connect with creator &rarr;
                </span>
                <span className="inline-block bg-[#1B261D] text-[#A8CAAA] border border-[#35533C] px-4 py-2.5 rounded-full text-xs font-semibold">
                  Offer Ideas ✦
                </span>
                <span className="inline-block bg-[#1B261D] text-[#A8CAAA] border border-[#35533C] px-4 py-2.5 rounded-full text-xs font-semibold">
                  Barter Skills ⇄
                </span>
              </div>
            </div>
            <span className="font-mono text-[11px] text-[#80887C] block mt-4">
              Illustrative UI elements proposed for accessible touch targets.
            </span>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. EVIDENCE, STATUS & OUTCOMES */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1260px] mx-auto border-b border-white/[0.08]">
        <motion.div {...fadeIn} className="mb-14">
          <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider block mb-3">
            08 // EVIDENCE AND OUTCOMES
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F1F0E9] max-w-[820px] mb-4">
            What is live, what is claimed, and what remains to be tested.
          </h2>
        </motion.div>

        {/* 3 Outcome status cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121614] border border-[#212720]">
            <span className="font-mono text-xs text-[#A8CAAA] uppercase tracking-wider block mb-2 font-bold">
              PUBLISHED STATUS
            </span>
            <h3 className="font-display font-bold text-xl text-[#F1F0E9] mb-3">Early-access App</h3>
            <p className="text-[#A09D95] text-sm leading-relaxed">
              Google Play listing verifies uCollabit as an active early-access social platform,
              confirming its core documented feature architecture.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121614] border border-[#212720]">
            <span className="font-mono text-xs text-[#A8CAAA] uppercase tracking-wider block mb-2 font-bold">
              VERIFIED RELEASE
            </span>
            <h3 className="font-display font-bold text-xl text-[#F1F0E9] mb-3">Updated Sep 2026</h3>
            <p className="text-[#A09D95] text-sm leading-relaxed">
              Google Play recorded active update rollouts as of September 18, 2026, demonstrating ongoing
              iteration toward public launch.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121614] border border-[#212720]">
            <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider block mb-2 font-bold">
              NOT PUBLIC
            </span>
            <h3 className="font-display font-bold text-xl text-[#F1F0E9] mb-3">Usage & Retention</h3>
            <p className="text-[#A09D95] text-sm leading-relaxed">
              Retention curves, collaboration completion ratios, and customer satisfaction metrics are
              proprietary and not published in public domain sources.
            </p>
          </motion.div>
        </div>

        {/* What I would measure next */}
        <motion.div {...fadeIn} className="mb-6">
          <h3 className="font-display font-bold text-2xl text-[#F1F0E9] mb-6">
            What I would measure next as a Product Designer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-[#161D18] border border-[#28352A]">
              <span className="font-mono text-xs text-[#F14417] block mb-2 font-bold">
                01 // ACTIVATION
              </span>
              <p className="text-[#DCEBD8] text-sm leading-relaxed">
                Percentage of onboarded creators who complete a rich Creative DNA profile with at least
                two past milestones and an availability status.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#161D18] border border-[#28352A]">
              <span className="font-mono text-xs text-[#F14417] block mb-2 font-bold">
                02 // DISCOVERY CONVERSION
              </span>
              <p className="text-[#DCEBD8] text-sm leading-relaxed">
                Percentage of AI recommendations that result in a high-intent contribution (Feedback,
                Ideas, Barter) versus a dismissed card.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[#161D18] border border-[#28352A]">
              <span className="font-mono text-xs text-[#F14417] block mb-2 font-bold">
                03 // COLLABORATIVE VALUE
              </span>
              <p className="text-[#DCEBD8] text-sm leading-relaxed">
                Collaborative projects initiated, mutually marked as completed, and rated rewarding by
                both participating creatives.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 11. REFLECTION & TAKEAWAYS */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1260px] mx-auto border-b border-white/[0.08]">
        <motion.div {...fadeIn} className="mb-14">
          <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider block mb-3">
            09 // REFLECTION
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F1F0E9] max-w-[900px] mb-4">
            The next generation of creative platforms may be judged by what people make together.
          </h2>
          <p className="text-lg text-[#A09D95] max-w-[760px] leading-relaxed">
            uCollabit&apos;s most compelling product insight is that creator engagement must convey an
            actionable intention, rather than passive vanity appreciation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121614] border border-[#212720]">
            <span className="font-mono text-xs text-[#F14417] block mb-2 font-bold">TAKEAWAY 01</span>
            <h3 className="font-display font-bold text-xl text-[#F1F0E9] mb-3">Identity is evolving</h3>
            <p className="text-[#A09D95] text-sm leading-relaxed">
              Creative DNA rightly recognizes that portfolios and professional journeys are dynamic,
              multidisciplinary, and continuously evolving.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121614] border border-[#212720]">
            <span className="font-mono text-xs text-[#F14417] block mb-2 font-bold">TAKEAWAY 02</span>
            <h3 className="font-display font-bold text-xl text-[#F1F0E9] mb-3">Actions carry meaning</h3>
            <p className="text-[#A09D95] text-sm leading-relaxed">
              Five distinct interaction modes create structured clarity, distinguishing between
              casual feedback, skill trades, and paid commercial interest.
            </p>
          </motion.div>

          <motion.div {...fadeIn} className="p-8 rounded-xl bg-[#121614] border border-[#212720]">
            <span className="font-mono text-xs text-[#F14417] block mb-2 font-bold">TAKEAWAY 03</span>
            <h3 className="font-display font-bold text-xl text-[#F1F0E9] mb-3">Success must be proven</h3>
            <p className="text-[#A09D95] text-sm leading-relaxed">
              The product model unlocks its full potential when supported by robust trust and safety
              mechanisms and verified collaboration completions.
            </p>
          </motion.div>
        </div>

        <motion.div
          {...fadeIn}
          className="p-8 sm:p-10 rounded-xl bg-[#131512] border-l-4 border-[#F14417] max-w-[920px]"
        >
          <p className="text-xl sm:text-2xl text-[#F0EEE7] font-medium leading-snug mb-3">
            &ldquo;The opportunity isn&apos;t to build a bigger audience. It&apos;s to help creative
            people build something together.&rdquo;
          </p>
          <cite className="font-mono text-xs text-[#80887C] not-italic">
            Case study conclusion &mdash; independent UX editorial interpretation.
          </cite>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 12. SOURCES & ATTRIBUTION */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 px-6 sm:px-12 max-w-[1260px] mx-auto border-b border-white/[0.08]">
        <motion.div {...fadeIn} className="mb-10">
          <span className="font-mono text-xs text-[#F14417] uppercase tracking-wider block mb-3">
            10 // SOURCES & ATTRIBUTION
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight text-[#F1F0E9] mb-4">
            Grounded in uCollabit&apos;s published materials.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3 mb-10 max-w-[780px]">
          <a
            href="https://www.ucollabit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-[#A8CAAA] hover:text-[#F14417] transition-colors inline-flex items-center gap-2"
          >
            <span>&bull; uCollabit official website &mdash; product positioning and AI discovery</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.ucollabit"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-[#A8CAAA] hover:text-[#F14417] transition-colors inline-flex items-center gap-2"
          >
            <span>&bull; uCollabit on Google Play &mdash; feature listing, permissions, and app status</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/company/ucollabit"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-[#A8CAAA] hover:text-[#F14417] transition-colors inline-flex items-center gap-2"
          >
            <span>&bull; uCollabit on LinkedIn &mdash; company profile & announcements</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <motion.div {...fadeIn} className="p-6 rounded-xl bg-[#121614] border border-[#212720] max-w-[920px]">
          <p className="font-mono text-xs text-[#80887C] leading-relaxed">
            Important Notice: This is an independently created UX case study analysis, not a claim of
            employment, direct participation in uCollabit&apos;s product development, or original client
            work. Phone screens, palettes, journeys, and UI treatments are illustrative reconstructions
            derived from public product descriptions. The unrelated &ldquo;Collabit&rdquo; Apple App
            Store listing is intentionally excluded.
          </p>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 13. PROJECT NAVIGATION */}
      {/* ========================================================= */}
      <section className="pt-16 pb-24 px-6 sm:px-12 max-w-[1260px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8">
          <Link
            href="/work/descartes"
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
