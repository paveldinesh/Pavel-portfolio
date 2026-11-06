"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import { ArrowLeft, ArrowRight, Compass, Layers, ShieldCheck, Search, Filter, Star } from "lucide-react";

/**
 * IMAGE SLOTS
 * Screenshots in /public/images/projects/webhosters/.
 * Graceful fallback with dashed placeholder if any file is missing.
 */
const IMG = {
  hero: "/images/projects/webhosters/main-screen.jpg",
  homeHero: "/images/projects/webhosters/home-hero.jpg",
  homeDirectory: "/images/projects/webhosters/home-directory.jpg",
  homeWhy: "/images/projects/webhosters/home-why.jpg",
  homeResources: "/images/projects/webhosters/home-resources.jpg",
  companies: "/images/projects/webhosters/companies.jpg",
  profile: "/images/projects/webhosters/profile.jpg",
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

export default function WebHostersCaseStudy() {
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
              Case 05
            </span>
          </motion.div>

          <motion.h1
            {...fadeIn}
            className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.04em] text-[#F5F4F1] leading-[1.02]"
          >
            WebHosters
          </motion.h1>

          <motion.p
            {...fadeIn}
            className="text-xl sm:text-2xl md:text-3xl text-[#A09D95] font-light leading-relaxed max-w-[40ch]"
          >
            Making Web Hosting Discovery Simple
          </motion.p>
        </div>

        <motion.div
          {...fadeIn}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 mt-12 border-t border-b border-white/[0.08]"
        >
          {[
            { k: "Role", v: "UI/UX Designer" },
            { k: "Industry", v: "Web Hosting & Technology" },
            { k: "Type", v: "Website Design & Development" },
            { k: "Services", v: "UI/UX Design, Website Design, Responsive Design" },
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
            alt="WebHosters main screen displayed in desktop environment"
            caption="WebHosters: Desktop experience showcasing hero discovery and popular hosting directory"
            ratio="aspect-[16/10]"
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
              WebHosters turns the fragmented, overwhelming process of finding web hosting into a clean, centralized directory experience built around structured information, clear navigation, and customer reviews.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  n: "01",
                  t: "The problem",
                  d: "Choosing a web hosting provider can be overwhelming, with numerous companies offering different services and hosting solutions without clear comparability.",
                },
                {
                  n: "02",
                  t: "The approach",
                  d: "Prioritize intuitive navigation, structured content, prominent search, and category-based browsing to simplify provider discovery.",
                },
                {
                  n: "03",
                  t: "The result",
                  d: "A centralized, responsive directory platform connecting visitors with hosting companies through organized listings and customer-generated insights.",
                },
              ].map((c) => (
                <div key={c.n} className="p-5 rounded-lg bg-[#121211] border border-white/[0.08]">
                  <span className="font-mono text-xs text-[#F14417] block mb-2">{c.n}</span>
                  <h3 className="font-display font-bold text-lg text-[#F5F4F1] mb-1">{c.t}</h3>
                  <p className="text-[#A09D95] text-[15px] leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-[#121211] border border-white/[0.08] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#F14417]" />
              <span className="font-mono text-xs text-[#F14417] block mb-2">CORE PRINCIPLE</span>
              <p className="text-[#F5F4F1] text-lg leading-relaxed">
                Discovery with clarity and confidence. Bringing hosting options and customer feedback together in one convenient, accessible destination.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. OVERVIEW */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-10">
          <motion.span {...fadeIn} className="font-mono text-[18px] text-[#F14417]">
            /overview
          </motion.span>

          <motion.h2
            {...fadeIn}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] max-w-[28ch] leading-tight"
          >
            Simplifying the search for the right web hosting provider.
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[#A09D95] text-lg sm:text-xl leading-relaxed">
            <motion.p {...fadeIn}>
              WebHosters is an online directory that helps individuals and businesses discover, explore, and evaluate web hosting companies based on their services and customer reviews. The project focused on creating a clean, intuitive digital experience that makes navigating a large directory of hosting providers feel simple and accessible.
            </motion.p>
            <motion.p {...fadeIn}>
              Through structured information, clear navigation, and a user-friendly interface, the platform brings hosting options together in one convenient destination. Visitors can transition smoothly from a high-level search to deep, provider-level evaluation with complete confidence.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            {[
              {
                icon: Compass,
                title: "Directory Catalog",
                desc: "A centralized index spanning shared hosting, cloud infrastructure, WordPress-optimized environments, and dedicated servers.",
              },
              {
                icon: Star,
                title: "Customer Insights",
                desc: "Verified user reviews, rating breakdowns, and authentic testimonials that provide transparent feedback for evaluation.",
              },
              {
                icon: Layers,
                title: "Structured Research",
                desc: "Standardized provider cards with established dates, headquarters, contact points, and direct links for seamless follow-through.",
              },
            ].map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-xl bg-[#121211] border border-white/[0.08]"
              >
                <f.icon className="w-5 h-5 text-[#F14417] mb-3" />
                <h3 className="font-display font-bold text-xl text-[#F5F4F1] mb-2">{f.title}</h3>
                <p className="text-[#A09D95] text-[15px] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. CHALLENGE */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-10">
          <motion.span {...fadeIn} className="font-mono text-[18px] text-[#F14417]">
            /challenge
          </motion.span>

          <motion.h2
            {...fadeIn}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] max-w-[26ch] leading-tight"
          >
            Making complex hosting choices easier to navigate.
          </motion.h2>

          <div className="flex flex-col gap-6 text-[#A09D95] text-lg sm:text-xl max-w-[64ch] leading-relaxed">
            <motion.p {...fadeIn}>
              Choosing a web hosting provider can be overwhelming, especially with numerous companies offering different services and hosting solutions. The key design challenge was to simplify the discovery process while presenting extensive provider information without overwhelming users.
            </motion.p>
            <motion.p {...fadeIn}>
              The experience needed to accommodate both beginners exploring hosting for the first time and experienced users searching for specific solutions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
            {[
              {
                t: "Choice Overload",
                d: "Hundreds of hosting companies offer seemingly identical claims, making differentiation difficult without standardized listings.",
              },
              {
                t: "Dual User Needs",
                d: "Beginners require straightforward category guidance and clear terms, while experienced developers need rapid search and specific technical details.",
              },
              {
                t: "Information Density",
                d: "Presenting extensive technical data, ratings, contact channels, and reviews without creating a cluttered or intimidating interface.",
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
                <span className="font-mono text-xs text-[#7A7873] block mb-2">FRICTION POINT</span>
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
            <span className="font-mono text-[16px] text-[#F14417] block mb-3">THE DESIGN CHALLENGE</span>
            <blockquote className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl text-[#F5F4F1] tracking-tight leading-snug">
              &ldquo;How might we design a discovery-first directory that simplifies complex hosting data for beginners while providing fast, structured evaluation for experienced users?&rdquo;
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. APPROACH */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-4 max-w-[62ch]">
            <span className="font-mono text-[18px] text-[#F14417]">/approach</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] leading-tight">
              A discovery-first experience built around clarity.
            </h2>
            <p className="text-[#A09D95] text-lg sm:text-xl leading-relaxed">
              The design approach prioritized intuitive navigation, structured content, and effortless provider discovery. A prominent search experience helps users quickly find hosting companies, while category-based browsing makes it easier to explore different hosting solutions.
            </p>
            <p className="text-[#A09D95] text-lg sm:text-xl leading-relaxed">
              Consistent provider listings, clear typography, and thoughtfully organized information create a smooth journey from initial discovery to detailed evaluation. The visual direction balances simplicity with credibility, keeping the interface approachable while allowing hosting information and customer feedback to take center stage.
            </p>
          </motion.div>

          {/* Approach Screens: home-hero + home-directory */}
          <div className="flex flex-col gap-12 mt-4">
            <motion.div {...fadeIn}>
              <Screen
                src={IMG.homeHero}
                alt="WebHosters homepage hero with prominent search"
                caption="Approach 01: Prominent search experience and visual ecosystem illustration for immediate discovery"
                ratio="aspect-[16/9]"
              />
            </motion.div>

            <motion.div {...fadeIn}>
              <Screen
                src={IMG.homeDirectory}
                alt="Browse popular hosting providers with category browsing"
                caption="Approach 02: Category-based browsing (Shared, Cloud, WordPress, Dedicated) with standardized provider listings"
                ratio="aspect-[16/10]"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
            {[
              {
                icon: Search,
                label: "PROMINENT SEARCH",
                title: "Direct Query Flow",
                desc: "A prominent search bar at the top of the platform allows experienced users to find specific hosting providers or features without unnecessary navigation.",
              },
              {
                icon: Filter,
                label: "STRUCTURED TAXONOMY",
                title: "Category Browsing",
                desc: "Clear category tabs guide users through Shared Hosting, Cloud Hosting, WordPress Hosting, and Dedicated Servers, lowering the barrier for beginners.",
              },
              {
                icon: ShieldCheck,
                label: "CREDIBILITY FIRST",
                title: "Transparent Details",
                desc: "Consistent provider summaries, established dates, star ratings, and contact chips keep the interface approachable while building user trust.",
              },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="p-6 rounded-xl bg-[#121211] border border-white/[0.08]"
              >
                <span className="font-mono text-xs text-[#F14417] block mb-2">{p.label}</span>
                <h3 className="font-display font-bold text-xl text-[#F5F4F1] mb-2">{p.title}</h3>
                <p className="text-[#A09D95] text-[15px] leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. SOLUTION */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-12">
          <motion.div {...fadeIn} className="flex flex-col gap-4 max-w-[62ch]">
            <span className="font-mono text-[18px] text-[#F14417]">/solution</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] leading-tight">
              One platform. Multiple hosting possibilities.
            </h2>
            <p className="text-[#A09D95] text-lg sm:text-xl leading-relaxed">
              The website brings together an extensive directory of hosting companies within a streamlined, responsive experience. Users can search for hosting providers, explore categories such as shared hosting, WordPress hosting, Windows hosting, and dedicated servers, and access individual company profiles with service information and customer reviews.
            </p>
            <p className="text-[#A09D95] text-lg sm:text-xl leading-relaxed">
              The result is a centralized discovery platform designed to help visitors navigate hosting options with greater clarity and confidence.
            </p>
          </motion.div>

          {/* Solution Screens: companies.jpg + profile.jpg */}
          <div className="flex flex-col gap-12 mt-4">
            <motion.div {...fadeIn}>
              <Screen
                src={IMG.companies}
                alt="WebHosters Companies Directory listing page"
                caption="Solution 01: Comprehensive companies catalog with category tabs, search input, top-rated sorting, standardized provider cards, and pagination"
                ratio="aspect-[16/11]"
              />
            </motion.div>

            <motion.div {...fadeIn}>
              <Screen
                src={IMG.profile}
                alt="1984 Hosting company profile page"
                caption="Solution 02: Company profile page (1984 Hosting) with verified customer reviews, rating breakdown, company background, and direct contact details"
                ratio="aspect-[16/12]"
              />
            </motion.div>
          </div>

          {/* Trust & Content Layer: home-why.jpg + home-resources.jpg */}
          <div className="flex flex-col gap-12 mt-12 pt-12 border-t border-white/[0.08]">
            <motion.div {...fadeIn} className="flex flex-col gap-3 max-w-[60ch]">
              <span className="font-mono text-sm text-[#F14417]">TRUST & CONTENT LAYER</span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F4F1]">
                Reinforcing research with guided knowledge and trust points
              </h3>
              <p className="text-[#A09D95] text-[16px] leading-relaxed">
                Beyond listing providers, WebHosters incorporates dedicated trust messaging and practical educational content to guide users at every step of their hosting research.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div {...fadeIn}>
                <Screen
                  src={IMG.homeWhy}
                  alt="Why Choose WebHosters section"
                  caption="Solution 03: Four core trust pillars highlighting the curated directory, detailed profiles, reviews, and hosting types"
                  ratio="aspect-[16/10]"
                />
              </motion.div>

              <motion.div {...fadeIn}>
                <Screen
                  src={IMG.homeResources}
                  alt="Frequently Asked Questions and Hosting Resources"
                  caption="Solution 04: FAQ accordion and hosting guides supporting visitor research with actionable knowledge"
                  ratio="aspect-[16/10]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. DESIGN DECISIONS */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-14">
          <motion.div {...fadeIn} className="flex flex-col gap-4 max-w-[62ch]">
            <span className="font-mono text-[18px] text-[#F14417]">/decisions</span>
            <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight text-[#F5F4F1]">
              Three design decisions grounded in the interface
            </h2>
            <p className="text-[#A09D95] text-lg leading-relaxed">
              Every interface choice on WebHosters is designed to make dense, technical provider data immediately scannable, comparable, and actionable.
            </p>
          </motion.div>

          {/* Decision 01 */}
          <div className="flex flex-col gap-6">
            <motion.div {...fadeIn} className="flex items-center gap-3">
              <span className="font-mono text-sm text-[#F14417]">DECISION 01</span>
              <span className="text-[#7A7873]">•</span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F4F1]">
                Consistent listing card structure across all directory views
              </h3>
            </motion.div>
            <motion.div {...fadeIn}>
              <DecisionNote
                decision="Standardize every provider card to show company name, founding year ('Since 2004'), star rating, verified review count, one-line summary, quick contact chips (URL, email, phone, location), and two clear actions (Visit Website and View Profile)."
                why="Directory visitors need to compare diverse providers rapidly. A standardized card layout ensures users can scan key attributes in seconds without deciphering varying marketing formats."
                tradeoff="Card uniformity limits custom vendor advertising and promotional styling, but prioritizes fairness, visual calm, and rapid scannability for visitors."
              />
            </motion.div>
          </div>

          {/* Decision 02 */}
          <div className="flex flex-col gap-6">
            <motion.div {...fadeIn} className="flex items-center gap-3">
              <span className="font-mono text-sm text-[#F14417]">DECISION 02</span>
              <span className="text-[#7A7873]">•</span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F4F1]">
                Category tabs combined with global search and sort controls
              </h3>
            </motion.div>
            <motion.div {...fadeIn}>
              <DecisionNote
                decision="Provide a dual entry point: a prominent keyword search input paired with category filter tabs (All, Shared Hosting, Cloud Hosting, WordPress Hosting, Dedicated Servers, VPS) and a quick sort dropdown (Top Rated)."
                why="Accommodates two distinct visitor intents: beginners who require structured guidance by hosting type can click intuitive pills, while experienced users who know their target company can search directly."
                tradeoff="Displaying category pills, search, and sort controls together occupies vertical header height, but prevents navigation dead-ends and caters to both user groups seamlessly."
              />
            </motion.div>
          </div>

          {/* Decision 03 */}
          <div className="flex flex-col gap-6">
            <motion.div {...fadeIn} className="flex items-center gap-3">
              <span className="font-mono text-sm text-[#F14417]">DECISION 03</span>
              <span className="text-[#7A7873]">•</span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F4F1]">
                Dedicated profile page with rating breakdown and verified reviews
              </h3>
            </motion.div>
            <motion.div {...fadeIn}>
              <DecisionNote
                decision="Build dedicated company profiles (such as 1984 Hosting) that separate broad directory browsing from deep evaluation, featuring company background, direct contact channels, a 5-star rating breakdown, and verified customer testimonials."
                why="Directory listings generate initial interest, but hosting commitments require deeper verification. Transparent rating distributions and written customer feedback provide authentic evidence to support confident choices."
                tradeoff="Moving detailed reviews and full contact info to an individual profile page requires an additional click, but keeps the main directory list compact and fast to navigate."
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. OUTCOME */}
      {/* ========================================================= */}
      <section className="py-24 sm:py-32 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
        <div className="flex flex-col gap-10">
          <motion.span {...fadeIn} className="font-mono text-[18px] text-[#F14417]">
            /outcome
          </motion.span>

          <motion.h2
            {...fadeIn}
            className="font-display font-bold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-[#F5F4F1] max-w-[26ch] leading-tight"
          >
            A clearer way to discover web hosting.
          </motion.h2>

          <div className="flex flex-col gap-6 text-[#A09D95] text-lg sm:text-xl max-w-[64ch] leading-relaxed">
            <motion.p {...fadeIn}>
              WebHosters delivers a structured, accessible platform that connects users with hosting providers through a simplified discovery experience.
            </motion.p>
            <motion.p {...fadeIn}>
              By combining intuitive navigation, organized company listings, and customer-generated insights, the website establishes a practical foundation for informed hosting research while supporting the visibility of hosting companies.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
            {[
              {
                title: "Information Clarity",
                desc: "Replaced scattered forum threads and cluttered review boards with clean, standardized company cards and transparent metadata.",
              },
              {
                title: "Authentic Insights",
                desc: "Integrated verified customer reviews and 5-star distribution breakdowns, giving users trustworthy signals before making purchase decisions.",
              },
              {
                title: "Scalable Architecture",
                desc: "A responsive, modular layout designed to scale effortlessly as new hosting providers, categories, and technical services are indexed.",
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
            &ldquo;WebHosters delivers a structured, accessible platform that connects users with hosting providers through a simplified discovery experience.&rdquo;
          </motion.blockquote>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 9. PROJECT NAVIGATION */}
      {/* ========================================================= */}
      <section className="pt-16 pb-24 px-6 sm:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08]">
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

