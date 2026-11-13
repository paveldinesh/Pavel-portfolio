"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProjectItem {
  num: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  isExternal: boolean;
  comingSoon?: boolean;
  liveLinks?: {
    website?: string;
    appStore?: string;
    playStore?: string;
  };
}

export default function Projects() {
  const prefersReduced = useReducedMotion();

  const projects: ProjectItem[] = [
    {
      num: "01",
      title: "Descartes",
      category: "Internal Dashboard • Surgical AI",
      year: "2026",
      description:
        "Surgical activity dashboard, procedural workflow tracking, and comparative analytics platform designed for operating room consistency and clinical planning.",
      tags: ["Dashboard", "Surgical AI", "Complex Data", "Design System"],
      image: "/images/projects/descartes/hero.webp",
      link: "/work/descartes",
      isExternal: false,
    },
    {
      num: "02",
      title: "Tiny Bits of Love",
      category: "Mobile App • Wellness",
      year: "2026",
      description:
        "Mindful relationship wellness app designed around nurturing bonds through daily affirmations, shared streaks, and gamified growth.",
      tags: ["Mobile App", "UI/UX", "Gamification", "Design System"],
      image: "/images/projects/tiny-bits-of-love.webp",
      link: "/work/tiny-bits-of-love",
      isExternal: false,
      liveLinks: {
        website: "https://tinybits.app/",
        appStore: "https://apps.apple.com/us/app/tiny-bits-of-love/id6757837595",
        playStore: "https://play.google.com/store/apps/details?id=com.tinybits",
      },
    },
    {
      num: "03",
      title: "MazeFlower",
      category: "Mobile & Web App • Music",
      year: "2026",
      description:
        "A music-centered social platform connecting fans, artists and merchandise vendors through shared listening, personalised discovery and song-linked commerce.",
      tags: ["UI/UX", "Interaction Design", "Prototyping", "Design System"],
      image: "/images/projects/mazeflower/hero.webp",
      link: "/work/mazeflower",
      isExternal: false,
    },
    {
      num: "04",
      title: "MilitaryPCS",
      category: "Web Application • Relocation Platform",
      year: "2026",
      description:
        "A military-first relocation platform that brings housing, local services, planning tools and community insights into one map-first PCS experience.",
      tags: ["UX Strategy", "Information Architecture", "UI Design"],
      image: "/images/projects/military-pcs/main-screen.webp",
      link: "/work/military-pcs",
      isExternal: false,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const count = projects.length;
    const idx = Math.max(0, Math.min(Math.floor(latest * count), count - 1));
    setActiveIndex((prev) => (prev !== idx ? idx : prev));
  });

  // Sync index on initial load / reload
  useEffect(() => {
    const current = scrollYProgress.get();
    const count = projects.length;
    setActiveIndex(Math.max(0, Math.min(Math.floor(current * count), count - 1)));
  }, [scrollYProgress, projects.length]);

  const currentProject = projects[activeIndex];

  return (
    <section id="work" className="relative z-10 border-t border-white/[0.08] bg-[#0B0B0A]">
      {/* ======================================================== */}
      {/* 1. DESKTOP PINNED SCROLL EXPERIENCE (lg and up)           */}
      {/* ======================================================== */}
      <div
        ref={wrapperRef}
        style={{ height: `${projects.length * 100}vh` }}
        className="hidden lg:block relative"
      >
        <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-24 pb-12 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto overflow-hidden">
          {/* Section Header */}
          <div className="flex items-baseline justify-between gap-4 flex-wrap mb-6 shrink-0">
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[18px] text-[#F14417]">/work</span>
              <div className="flex items-baseline">
                <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.04em] text-[#F5F4F1]">
                  Selected work
                </h2>
                <span className="font-mono text-[18px] text-[#F14417] ml-2">{"//"}</span>
              </div>
            </div>
            <span className="font-mono text-[18px] text-[#A09D95]">
              [ 0{projects.length} projects ]
            </span>
          </div>

          {/* Two-Column Pinned Workspace */}
          <div className="flex-1 flex items-center justify-center my-auto w-full">
            <div className="grid grid-cols-[1.15fr_0.85fr] xl:grid-cols-[1.2fr_1fr] gap-12 xl:gap-16 items-center w-full">
              {/* LEFT: Pinned Preview Frame (Always still, image crossfades) */}
              <div className="w-full rounded-2xl overflow-hidden border border-white/[0.1] bg-[#121211] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.9)]">
                {/* Viewport Aspect Container */}
                <div className="relative w-full aspect-[16/10] bg-[#0A0A0A] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentProject.num}
                      initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={prefersReduced ? { opacity: 0 } : { opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full"
                    >
                      {currentProject.image ? (
                        currentProject.link !== "#" ? (
                          <Link
                            href={currentProject.link}
                            className="block relative w-full h-full group/frame cursor-pointer"
                            tabIndex={-1}
                          >
                            <Image
                              src={currentProject.image}
                              alt={`${currentProject.title} project preview`}
                              fill
                              sizes="(max-width: 1024px) 100vw, 55vw"
                              priority
                              className="object-cover object-center transition-transform duration-500 group-hover/frame:scale-[1.02]"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover/frame:bg-black/25 transition-colors flex items-center justify-center">
                              <span className="font-mono text-xs uppercase tracking-wider text-white bg-black/75 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 opacity-0 group-hover/frame:opacity-100 transition-opacity">
                                View Case Study ↗
                              </span>
                            </div>
                          </Link>
                        ) : (
                          <Image
                            src={currentProject.image}
                            alt={`${currentProject.title} project preview`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 55vw"
                            priority
                            className="object-cover object-center"
                          />
                        )
                      ) : (
                        /* Tasteful Placeholder for unreleased projects */
                        <div className="absolute inset-0 bg-[#0E0F0E] border-2 border-dashed border-white/[0.08] m-3 rounded-lg flex flex-col items-center justify-center gap-3 p-8 text-center select-none">
                          <span className="font-mono text-xs text-[#F14417] tracking-widest uppercase">
                            [ {currentProject.num} {"//"} PREVIEW ]
                          </span>
                          <h4 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F4F1]">
                            {currentProject.title}
                          </h4>
                          <span className="font-mono text-xs text-[#7A7873] border border-white/10 rounded-full px-3 py-1">
                            Case study coming soon
                          </span>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* RIGHT: Dynamic Details Column */}
              <div className="flex flex-col justify-center">
                {/* Progress Indicator */}
                <div className="flex items-center gap-4 mb-6 select-none">
                  <span className="font-mono text-[14px] text-[#F14417] font-semibold tracking-wider">
                    {currentProject.num} / 0{projects.length}
                  </span>
                  <div className="flex items-center gap-1.5 flex-1 max-w-[140px]">
                    {projects.map((_, i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                          i === activeIndex
                            ? "bg-[#F14417]"
                            : i < activeIndex
                            ? "bg-white/40"
                            : "bg-white/10"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Animated Details */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject.num}
                    initial={
                      prefersReduced
                        ? { opacity: 1 }
                        : { opacity: 0, y: 12 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    exit={
                      prefersReduced
                        ? { opacity: 0 }
                        : { opacity: 0, y: -12 }
                    }
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex flex-col gap-5"
                  >
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-mono text-[15px] text-[#F14417] font-medium">
                        {currentProject.category}
                      </span>
                      <span className="font-mono text-xs text-[#7A7873]">•</span>
                      <span className="font-mono text-xs text-[#7A7873]">
                        {currentProject.year}
                      </span>
                      {currentProject.comingSoon && (
                        <span className="font-mono text-[12px] text-[#7A7873] border border-white/10 px-2.5 py-0.5 rounded-full">
                          Case study coming soon
                        </span>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-[#F5F4F1] leading-[1.08]">
                      {currentProject.title}
                    </h3>

                    <p className="text-[#A09D95] text-[16px] sm:text-[17px] leading-relaxed max-w-[48ch]">
                      {currentProject.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {currentProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[12px] sm:text-[13px] px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-[#A09D95]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action link */}
                    <div className="pt-3">
                      {currentProject.link !== "#" ? (
                        <Link
                          href={currentProject.link}
                          className="inline-flex items-center gap-2.5 font-mono text-[14px] uppercase tracking-wider text-[#F14417] hover:text-white transition-colors group/btn py-2"
                        >
                          <span>View case study</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        </Link>
                      ) : (
                        <span className="font-mono text-[13px] text-[#7A7873] border border-white/10 px-3.5 py-1.5 rounded-full inline-block">
                          Case study coming soon
                        </span>
                      )}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. MOBILE & TABLET STACKED LIST (below lg)                */}
      {/* ======================================================== */}
      <div className="lg:hidden py-20 px-6 sm:px-12 max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="flex items-baseline justify-between gap-4 flex-wrap mb-12 sm:mb-16">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[18px] text-[#F14417]">/work</span>
            <div className="flex items-baseline">
              <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-[-0.04em] text-[#F5F4F1]">
                Selected work
              </h2>
              <span className="font-mono text-[18px] text-[#F14417] ml-2">{"//"}</span>
            </div>
          </div>
          <span className="font-mono text-[18px] text-[#A09D95]">
            [ 0{projects.length} projects ]
          </span>
        </div>

        {/* Stacked Projects */}
        <div className="flex flex-col gap-16">
          {projects.map((proj) => (
            <div key={proj.num} className="flex flex-col gap-6">
              {/* Frame */}
              <div className="w-full rounded-2xl overflow-hidden border border-white/[0.1] bg-[#121211] shadow-xl">
                <div className="relative w-full aspect-[16/10] bg-[#0A0A0A] overflow-hidden">
                  {proj.image ? (
                    proj.link !== "#" ? (
                      <Link href={proj.link} className="block relative w-full h-full">
                        <Image
                          src={proj.image}
                          alt={proj.title}
                          fill
                          sizes="100vw"
                          className="object-cover object-center"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                      />
                    )
                  ) : (
                    <div className="absolute inset-0 bg-[#0E0F0E] border border-dashed border-white/10 m-2 rounded flex flex-col items-center justify-center gap-2 p-6 text-center select-none">
                      <span className="font-mono text-xs text-[#F14417]">
                        [ {proj.num} {"//"} PREVIEW ]
                      </span>
                      <span className="font-display font-bold text-xl text-[#F5F4F1]">
                        {proj.title}
                      </span>
                      <span className="font-mono text-xs text-[#7A7873]">
                        Case study coming soon
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-mono text-sm text-[#F14417] font-semibold">
                    {proj.num}
                  </span>
                  <span className="font-mono text-xs text-[#7A7873]">•</span>
                  <span className="font-mono text-sm text-[#F14417]">
                    {proj.category}
                  </span>
                  <span className="font-mono text-xs text-[#7A7873]">•</span>
                  <span className="font-mono text-xs text-[#7A7873]">{proj.year}</span>
                </div>

                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F4F1]">
                  {proj.title}
                </h3>

                <p className="text-[#A09D95] text-[15px] sm:text-[16px] leading-relaxed">
                  {proj.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2.5 py-1 rounded-full border border-white/10 text-[#A09D95]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  {proj.link !== "#" ? (
                    <Link
                      href={proj.link}
                      className="inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-[#F14417] hover:text-white transition-colors"
                    >
                      <span>View case study</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <span className="font-mono text-xs text-[#7A7873] border border-white/10 px-3 py-1 rounded-full inline-block">
                      Case study coming soon
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
