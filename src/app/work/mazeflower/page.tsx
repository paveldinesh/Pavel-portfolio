"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import {
  ArrowLeft,
  ArrowRight,
  Radio,
  Globe2,
  Disc3,
  Users2,
  ShoppingBag,
  Sparkles,
  Compass,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { Screen, DeviceMockup, DecisionNote } from "@/components/case-study";

const IMG = {
  hero: "/images/projects/mazeflower/hero.png",
  campfire: "/images/projects/mazeflower/campfire.png",
  planetaryView: "/images/projects/mazeflower/planetary-view.png",
  mixtapes: "/images/projects/mazeflower/mixtapes.png",
  anthologies: "/images/projects/mazeflower/anthologies.png",
  ridealong: "/images/projects/mazeflower/ridealong.png",
  merch: "/images/projects/mazeflower/merch.png",
  artistDashboard: "/images/projects/mazeflower/artist-dashboard.png",
  vendorDashboard: "/images/projects/mazeflower/vendor-dashboard.png",
  designSystem: "/images/projects/mazeflower/design-system.png",
};

export default function MazeFlowerCaseStudy() {
  const prefersReduced = useReducedMotion();

  const fadeIn = {
    initial: prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: prefersReduced ? 0 : 0.6 },
  };

  return (
    <main className="min-h-screen bg-[#0B0B0A] text-[#F5F4F1] relative selection:bg-[#00F5D4] selection:text-[#050811] pb-24">
      <Navbar />

      {/* ========================================================= */}
      {/* 1. PROJECT HERO */}
      {/* ========================================================= */}
      <section className="pt-36 sm:pt-44 pb-16 px-6 sm:px-12 max-w-[1260px] mx-auto relative z-10">
        {/* Subtle Cyan / Teal Atmospheric Aura */}
        <div
          aria-hidden="true"
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[360px] bg-gradient-to-b from-[#00F5D4]/[0.07] via-[#0077B6]/[0.04] to-transparent rounded-full blur-3xl pointer-events-none -z-10"
        />

        <motion.div {...fadeIn} className="mb-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-[16px] text-[#A09D95] hover:text-[#00F5D4] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Selected work</span>
          </Link>
        </motion.div>

        <div className="flex flex-col gap-6 max-w-[960px]">
          <motion.div {...fadeIn} className="flex items-center gap-3">
            <span className="font-mono text-[18px] text-[#00F5D4]">/case-study</span>
            <span className="font-mono text-[16px] text-[#A09D95] border border-white/10 rounded-full px-3 py-0.5">
              Case 03
            </span>
          </motion.div>

          <motion.h1
            {...fadeIn}
            className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.04em] text-[#F5F4F1] leading-[1.02]"
          >
            MazeFlower
          </motion.h1>

          <motion.p
            {...fadeIn}
            className="text-xl sm:text-2xl md:text-3xl text-[#A09D95] font-light leading-relaxed max-w-[42ch]"
          >
            Redefining How We Discover, Share, and Experience Music
          </motion.p>
        </div>

        {/* Project Meta Information */}
        <motion.div
          {...fadeIn}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 mt-12 border-t border-b border-white/[0.08]"
        >
          {[
            { k: "Platform", v: "Mobile Application · Web Application" },
            { k: "Industry", v: "Music · Entertainment · Social Commerce" },
            { k: "Design Scope", v: "UI/UX Design · Interaction Design · Prototyping · Design System" },
            { k: "Role", v: "UI/UX Designer" },
          ].map((m) => (
            <div key={m.k}>
              <span className="font-mono text-sm text-[#7A7873] block mb-1">{m.k}</span>
              <span className="text-[16px] sm:text-[17px] font-medium text-[#F5F4F1] leading-snug block">
                {m.v}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Hero Screen Showcase */}
        <motion.div {...fadeIn} className="mt-12">
          <Screen
            src={IMG.hero}
            alt="MazeFlower Planetary System overview"
            caption="MazeFlower: Interactive planetary music universe connecting shared listening, kindreds and commerce"
            ratio="aspect-[16/10]"
            position="object-center"
            priority
          />
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* 2. OVERVIEW */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-10">
          <motion.span {...fadeIn} className="font-mono text-[18px] text-[#00F5D4]">
            /overview
          </motion.span>

          <motion.h2
            {...fadeIn}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] max-w-[28ch] leading-tight"
          >
            Making music a shared experience again.
          </motion.h2>

          <div className="flex flex-col gap-6 text-[#A09D95] text-lg sm:text-xl max-w-[64ch] leading-relaxed">
            <motion.p {...fadeIn}>
              MazeFlower is a music-centered social platform designed to bring people closer through the songs they love.
            </motion.p>
            <motion.p {...fadeIn}>
              Moving beyond traditional streaming, it introduces a more personal approach to music discovery, where conversations, shared listening, and individual taste shape the experience. The platform connects three distinct audiences (fans, artists, and merchandise vendors) through an interconnected ecosystem that combines music, community, creative expression, and commerce.
            </motion.p>
          </div>

          {/* Three Connected Audiences */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {[
              {
                icon: <Users2 className="w-5 h-5 text-[#00F5D4]" />,
                num: "AUDIENCE 01",
                title: "Fans",
                desc: "Discover music, explore personalized planets, create Mixtapes, participate in shared listening, and connect with Kindreds.",
              },
              {
                icon: <Radio className="w-5 h-5 text-[#00B4D8]" />,
                num: "AUDIENCE 02",
                title: "Artists",
                desc: "Manage releases, explore audience insights, curate listening journeys, and communicate directly with fans.",
              },
              {
                icon: <ShoppingBag className="w-5 h-5 text-[#0077B6]" />,
                num: "AUDIENCE 03",
                title: "Merchandise Vendors",
                desc: "Collaborate on song-linked merchandise, manage product listings, track fulfillment, and share commerce revenue.",
              },
            ].map((aud, i) => (
              <motion.div
                key={aud.title}
                initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-8 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-[#00F5D4] tracking-wider uppercase">
                      {aud.num}
                    </span>
                    {aud.icon}
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#F5F4F1] mb-3">
                    {aud.title}
                  </h3>
                  <p className="text-[#A09D95] text-[15px] leading-relaxed">{aud.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. THE CHALLENGE */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-10">
          <motion.span {...fadeIn} className="font-mono text-[18px] text-[#00F5D4]">
            /challenge
          </motion.span>

          <motion.h2
            {...fadeIn}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] max-w-[28ch] leading-tight"
          >
            Music is everywhere. Connection is missing.
          </motion.h2>

          <div className="flex flex-col gap-6 text-[#A09D95] text-lg sm:text-xl max-w-[64ch] leading-relaxed">
            <motion.p {...fadeIn}>
              Traditional streaming platforms make music accessible, but listening often remains an individual experience.
            </motion.p>
            <motion.p {...fadeIn}>
              Algorithm-driven recommendations can make discovery feel repetitive, while meaningful interactions between listeners and artists are scattered across different platforms. MazeFlower needed to bring these disconnected experiences together without compromising the simplicity of listening to music.
            </motion.p>
          </div>

          {/* Central Design Question Block */}
          <motion.div
            {...fadeIn}
            className="p-8 sm:p-12 rounded-2xl bg-gradient-to-br from-[#121211] via-[#0d1624] to-[#0A1128] border border-white/[0.1] relative overflow-hidden my-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#00F5D4]" />
              <span className="font-mono text-xs text-[#00F5D4] tracking-widest uppercase">
                THE CENTRAL DESIGN CHALLENGE
              </span>
            </div>
            <p className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#F5F4F1] leading-snug max-w-[34ch]">
              How do we make an ambitious, multidimensional platform feel intuitive, cohesive, and emotionally engaging?
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. OUR APPROACH */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-10">
          <motion.span {...fadeIn} className="font-mono text-[18px] text-[#00F5D4]">
            /approach
          </motion.span>

          <motion.h2
            {...fadeIn}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] max-w-[28ch] leading-tight"
          >
            Designing around people, not just playlists.
          </motion.h2>

          <motion.p {...fadeIn} className="text-[#A09D95] text-lg sm:text-xl max-w-[64ch] leading-relaxed">
            Our approach focused on transforming music consumption into an interactive journey. We established a visual and interaction framework that balances immersive discovery with straightforward navigation, allowing users to move naturally between listening, exploring, connecting, and shopping.
          </motion.p>

          {/* Three Principles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {[
              {
                num: "01",
                title: "Discover naturally",
                desc: "Make music exploration feel driven by people, curiosity, and shared tastes.",
                icon: <Compass className="w-5 h-5 text-[#00F5D4]" />,
              },
              {
                num: "02",
                title: "Connect meaningfully",
                desc: "Turn listening into opportunities for conversation and community.",
                icon: <Users2 className="w-5 h-5 text-[#00B4D8]" />,
              },
              {
                num: "03",
                title: "Explore effortlessly",
                desc: "Keep complex features approachable through consistent navigation, recognizable patterns, and clear interactions.",
                icon: <Layers className="w-5 h-5 text-[#0077B6]" />,
              },
            ].map((p, i) => (
              <motion.div
                key={p.num}
                initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-8 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-sm font-semibold text-[#00F5D4]">
                      {p.num}
                    </span>
                    {p.icon}
                  </div>
                  <h3 className="font-display font-bold text-2xl text-[#F5F4F1] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-[#A09D95] text-[15px] leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. THE EXPERIENCE (Features + Mockups + DecisionNotes)   */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-20 sm:gap-28">
          <div className="flex flex-col gap-6">
            <motion.span {...fadeIn} className="font-mono text-[18px] text-[#00F5D4]">
              /experience
            </motion.span>
            <motion.h2
              {...fadeIn}
              className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] max-w-[28ch] leading-tight"
            >
              The Experience
            </motion.h2>
          </div>

          {/* 1. Campfire */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeIn} className="flex flex-col gap-6">
              <span className="font-mono text-xs text-[#00F5D4] tracking-widest uppercase">
                FEATURE 01 // DISCOVERY HUB
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#F5F4F1]">
                Campfire, where every journey begins
              </h3>
              <p className="text-[#A09D95] text-lg leading-relaxed">
                The central discovery hub, bringing together recently explored music, search, recommendations, and activity from like-minded listeners. Rather than overwhelming users with content, the experience creates an inviting starting point where they can revisit favorites or discover something unexpected.
              </p>
            </motion.div>
            <motion.div {...fadeIn}>
              <DeviceMockup
                src={IMG.campfire}
                alt="Campfire discovery hub mobile interface"
                caption="Campfire: Central discovery hub with recently explored tracks and kindred activity"
              />
            </motion.div>
          </div>

          {/* 2. Planetary View (with Kindreds) + DecisionNote */}
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div {...fadeIn} className="order-2 lg:order-1">
                <DeviceMockup
                  src={IMG.planetaryView}
                  alt="Planetary View interactive musical identity"
                  caption="Planetary View: Interactive representation of individual taste and kindred discovery"
                />
              </motion.div>
              <motion.div {...fadeIn} className="order-1 lg:order-2 flex flex-col gap-6">
                <span className="font-mono text-xs text-[#00F5D4] tracking-widest uppercase">
                  FEATURE 02 // PERSONAL UNIVERSE
                </span>
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#F5F4F1]">
                  Planetary View, your taste, your universe
                </h3>
                <p className="text-[#A09D95] text-lg leading-relaxed">
                  An interactive representation of each user&apos;s musical identity. Favorite songs, albums, artists, and saved items become part of a personalized visual world. Users can explore their own planet or discover other listeners, known as Kindreds, who share similar musical interests.
                </p>
                <p className="text-[#A09D95] text-lg leading-relaxed">
                  The experience turns a conventional music profile into a more expressive and exploratory environment.
                </p>
              </motion.div>
            </div>
            <motion.div {...fadeIn} className="mt-4">
              <DecisionNote
                decision="Transform conventional static profile pages into an interactive celestial planet with orbiting kindred nodes."
                why="Turns abstract listening history into an exploratory, visual space that sparks curiosity and spontaneous social connection."
                tradeoff="Required strict visual hierarchy and fluid physics so the 3D celestial metaphor never obscures fast playback access."
              />
            </motion.div>
          </div>

          {/* 3. Mixtapes & Anthologies (Side by Side) */}
          <div className="flex flex-col gap-10">
            <motion.div {...fadeIn} className="flex flex-col gap-6 max-w-[800px]">
              <span className="font-mono text-xs text-[#00F5D4] tracking-widest uppercase">
                FEATURE 03 // DUAL CURATION FORMATS
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#F5F4F1]">
                Mixtapes &amp; Anthologies, beyond ordinary playlists
              </h3>
              <p className="text-[#A09D95] text-lg leading-relaxed">
                Mixtapes organize songs into mood-driven listening journeys, while Anthologies create deeper, narrative-led experiences that connect music through themes and stories. Clear visual hierarchy and consistent browsing patterns help users distinguish between these formats while keeping discovery engaging.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div {...fadeIn}>
                <DeviceMockup
                  src={IMG.mixtapes}
                  alt="Mixtapes mood-driven listening journeys"
                  caption="Mixtapes: Mood-driven listening journeys organized around expressive sonic vibes"
                />
              </motion.div>
              <motion.div {...fadeIn}>
                <DeviceMockup
                  src={IMG.anthologies}
                  alt="Anthologies narrative-led music experiences"
                  caption="Anthologies: Narrative-led storytelling and thematic albums connecting music through narrative chapters"
                />
              </motion.div>
            </div>
          </div>

          {/* 4. RideAlong + DecisionNote */}
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div {...fadeIn} className="flex flex-col gap-6">
                <span className="font-mono text-xs text-[#00F5D4] tracking-widest uppercase">
                  FEATURE 04 // SHARED PRESENCE
                </span>
                <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#F5F4F1]">
                  RideAlong, listen together, wherever you are
                </h3>
                <p className="text-[#A09D95] text-lg leading-relaxed">
                  Synchronized listening experiences that allow people to enjoy music together, even when physically apart. The interaction design centers on shared playback, session participation, and the sense of presence that makes listening feel social rather than isolated.
                </p>
              </motion.div>
              <motion.div {...fadeIn}>
                <DeviceMockup
                  src={IMG.ridealong}
                  alt="RideAlong synchronized listening room"
                  caption="RideAlong: Synchronized listening sessions with real-time waveform presence"
                />
              </motion.div>
            </div>
            <motion.div {...fadeIn} className="mt-4">
              <DecisionNote
                decision="Anchor real-time shared playback heads and live reaction indicators directly inside the player UI."
                why="Reinforces immediate co-presence without needing disruptive video calls or separate messaging threads."
                tradeoff="Demanded tight synchronization state handling and minimal UI clutter over the track waveform."
              />
            </motion.div>
          </div>

          {/* 5. Music Meets Commerce */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeIn} className="order-2 lg:order-1">
              <DeviceMockup
                src={IMG.merch}
                alt="Song-linked merchandise commerce drawer"
                caption="Music Meets Commerce: Song-linked merchandise embedded directly into the listening experience"
              />
            </motion.div>
            <motion.div {...fadeIn} className="order-1 lg:order-2 flex flex-col gap-6">
              <span className="font-mono text-xs text-[#00F5D4] tracking-widest uppercase">
                FEATURE 05 // CONNECTED COMMERCE
              </span>
              <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#F5F4F1]">
                Music Meets Commerce
              </h3>
              <p className="text-[#A09D95] text-lg leading-relaxed">
                Song-linked merchandise extends the relationship between artists and fans. Fans can discover products connected to the music they enjoy, while artists and vendors can collaborate on merchandise offerings.
              </p>
              <p className="text-[#A09D95] text-lg leading-relaxed">
                The purchasing experience is designed to feel like a natural extension of music discovery rather than a disconnected marketplace.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. DESIGNING THE ECOSYSTEM (Three Audiences)              */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-10">
          <motion.span {...fadeIn} className="font-mono text-[18px] text-[#00F5D4]">
            /ecosystem
          </motion.span>

          <motion.h2
            {...fadeIn}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] max-w-[28ch] leading-tight"
          >
            Three audiences. One connected experience.
          </motion.h2>

          <motion.p {...fadeIn} className="text-[#A09D95] text-lg sm:text-xl max-w-[64ch] leading-relaxed">
            The platform extends beyond the fan-facing mobile application into dedicated artist and vendor interfaces.
          </motion.p>

          {/* Three Feature Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {/* Fan Column */}
            <motion.div
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col gap-6"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00F5D4]" />
                <h3 className="font-display font-bold text-xl text-[#F5F4F1]">Fan Experience</h3>
              </div>
              <ul className="flex flex-col gap-3 font-mono text-[14px] text-[#A09D95]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" />
                  <span>Discover music</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" />
                  <span>Explore personalized planets</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" />
                  <span>Create Mixtapes</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" />
                  <span>Participate in shared listening</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" />
                  <span>Connect with Kindreds</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00F5D4] shrink-0 mt-0.5" />
                  <span>Purchase merchandise</span>
                </li>
              </ul>
            </motion.div>

            {/* Artist Column */}
            <motion.div
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="p-8 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col gap-6"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00B4D8]" />
                <h3 className="font-display font-bold text-xl text-[#F5F4F1]">Artist Experience</h3>
              </div>
              <ul className="flex flex-col gap-3 font-mono text-[14px] text-[#A09D95]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                  <span>Manage releases</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                  <span>Explore audience insights</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                  <span>Curate listening journeys</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                  <span>Communicate with fans</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5" />
                  <span>Review brand collaboration opportunities</span>
                </li>
              </ul>
            </motion.div>

            {/* Vendor Column */}
            <motion.div
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="p-8 rounded-xl bg-[#121211] border border-white/[0.08] flex flex-col gap-6"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#0077B6]" />
                <h3 className="font-display font-bold text-xl text-[#F5F4F1]">Vendor Experience</h3>
              </div>
              <ul className="flex flex-col gap-3 font-mono text-[14px] text-[#A09D95]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                  <span>Manage products</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                  <span>Propose song-based collaborations</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                  <span>Track orders</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                  <span>Review performance</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0077B6] shrink-0 mt-0.5" />
                  <span>Manage payouts</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Web Dashboards */}
          <div className="flex flex-col gap-10 mt-6">
            <motion.div {...fadeIn}>
              <Screen
                src={IMG.artistDashboard}
                alt="MazeFlower Artist Experience dashboard"
                caption="Artist Interface: Release management, audience telemetry, and kindred listening journeys"
                ratio="aspect-[16/10]"
                hideIfMissing
              />
            </motion.div>
            <motion.div {...fadeIn}>
              <Screen
                src={IMG.vendorDashboard}
                alt="MazeFlower Vendor Experience dashboard"
                caption="Vendor Interface: Product catalogs, song-based collaboration proposals, and order analytics"
                ratio="aspect-[16/10]"
                hideIfMissing
              />
            </motion.div>
          </div>

          <motion.p
            {...fadeIn}
            className="font-mono text-sm sm:text-base text-[#7A7873] border-l-2 border-[#00F5D4] pl-4 mt-4"
          >
            Each interface follows the same product identity while adapting its information hierarchy and workflows to the needs of its audience.
          </motion.p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. VISUAL DESIGN & INTERACTION                           */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-10">
          <motion.span {...fadeIn} className="font-mono text-[18px] text-[#00F5D4]">
            /visual-design
          </motion.span>

          <motion.h2
            {...fadeIn}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] max-w-[28ch] leading-tight"
          >
            An immersive identity with usability at its core.
          </motion.h2>

          <div className="flex flex-col gap-6 text-[#A09D95] text-lg sm:text-xl max-w-[64ch] leading-relaxed">
            <motion.p {...fadeIn}>
              MazeFlower&apos;s visual direction draws from the idea of a personal musical universe. Deep navy surfaces, expressive cyan and teal accents, dimensional elements, and music-focused imagery create a distinctive digital environment.
            </motion.p>
            <motion.p {...fadeIn}>
              The design system supports this immersive identity through consistent typography, reusable components, navigation patterns, and interaction states. Special attention was given to interactive concepts such as the rotating Planetary View, music-dial navigation, and the transition between discovery and playback. The objective was to create an experience that feels imaginative without becoming difficult to navigate.
            </motion.p>
          </div>

          {/* Color Palette Strip */}
          <motion.div {...fadeIn} className="flex flex-col gap-3 mt-4">
            <span className="font-mono text-xs text-[#7A7873] tracking-widest uppercase">
              COLOR SYSTEM // DEEP NAVY SURFACES &amp; CYAN / TEAL ACCENTS
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {[
                { hex: "#0A1128", name: "Deep Navy", role: "Surface Foundation" },
                { hex: "#0D1B2A", name: "Cosmic Void", role: "Card Elevated" },
                { hex: "#00F5D4", name: "Electric Cyan", role: "Active Resonance" },
                { hex: "#00B4D8", name: "Horizon Teal", role: "Kindred Orbitals" },
                { hex: "#0077B6", name: "Deep Blue", role: "Structure & Border" },
              ].map((c) => (
                <div
                  key={c.hex}
                  className="rounded-xl border border-white/[0.08] p-4 flex flex-col justify-between h-36 bg-[#121211]"
                >
                  <div
                    className="w-full h-12 rounded-lg border border-white/10"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div>
                    <span className="font-mono text-xs text-[#F5F4F1] block">{c.hex}</span>
                    <span className="text-xs text-[#7A7873] block">{c.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Concepts Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {[
              {
                title: "Rotating Planetary View",
                desc: "3D celestial rotation that maps musical identity into an exploratory, tangible space.",
              },
              {
                title: "Music-Dial Navigation",
                desc: "Precision circular playback scrubbers and orbital controls for tactile track interaction.",
              },
              {
                title: "Discovery-to-Playback",
                desc: "Zero-latency seamless transition between Campfire exploration and the immersive playback environment.",
              },
            ].map((concept, i) => (
              <motion.div
                key={concept.title}
                initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-xl bg-[#121211] border border-white/[0.08]"
              >
                <span className="font-mono text-xs text-[#00F5D4] block mb-2">INTERACTION CONCEPT</span>
                <h3 className="font-display font-bold text-lg text-[#F5F4F1] mb-2">{concept.title}</h3>
                <p className="text-[#A09D95] text-[14px] leading-relaxed">{concept.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Design System Web Screen */}
          <motion.div {...fadeIn} className="mt-6">
            <Screen
              src={IMG.designSystem}
              alt="MazeFlower Design System foundations"
              caption="Design System: Reusable components, typography tokens, and interaction state foundations"
              ratio="aspect-[16/10]"
              hideIfMissing
            />
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. DESIGN OUTCOME */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-10">
          <motion.span {...fadeIn} className="font-mono text-[18px] text-[#00F5D4]">
            /outcome
          </motion.span>

          <motion.h2
            {...fadeIn}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] max-w-[28ch] leading-tight"
          >
            Turning a music platform into a connected digital world.
          </motion.h2>

          <div className="flex flex-col gap-6 text-[#A09D95] text-lg sm:text-xl max-w-[64ch] leading-relaxed">
            <motion.p {...fadeIn}>
              The design establishes a cohesive experience across music discovery, social listening, artist engagement, and merchandise commerce.
            </motion.p>
            <motion.p {...fadeIn}>
              By giving individual features a shared visual language and clear interaction patterns, MazeFlower brings together multiple types of user journeys within one recognizable ecosystem.
            </motion.p>
            <motion.p {...fadeIn}>
              The result is a design foundation for a platform where music is not simply something people play. It becomes something they explore, share, and connect through.
            </motion.p>
          </div>

          {/* 9. CLOSING STATEMENT */}
          <motion.blockquote
            {...fadeIn}
            className="mt-12 p-8 sm:p-12 rounded-2xl bg-[#121211] border-l-4 border-[#00F5D4] max-w-[920px]"
          >
            <p className="font-display font-bold text-2xl sm:text-4xl tracking-[-0.02em] text-[#F5F4F1] leading-snug">
              &ldquo;More than a playlist. More than a platform. A universe of shared music experiences.&rdquo;
            </p>
          </motion.blockquote>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 10. PROJECT NAVIGATION */}
      {/* ========================================================= */}
      <section className="pt-16 pb-24 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-8">
          <Link
            href="/work/tiny-bits-of-love"
            className="inline-flex items-center gap-3 font-mono text-[18px] text-[#A09D95] hover:text-[#00F5D4] transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Previous: Tiny Bits of Love</span>
          </Link>

          <Link
            href="/#work"
            className="font-mono text-[16px] text-[#7A7873] hover:text-[#F5F4F1] border border-white/10 hover:border-white/20 rounded-full px-5 py-2 transition-colors"
          >
            Back to Selected Projects
          </Link>

          <Link
            href="/work/military-pcs"
            className="inline-flex items-center gap-3 font-mono text-[18px] text-[#A09D95] hover:text-[#00F5D4] transition-colors group"
          >
            <span>Next: MilitaryPCS</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
}

