"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Dynamically load the 3D Transfiguring Sculpture without SSR
const TransfiguringSculpture = dynamic(
  () => import("./TransfiguringSculpture"),
  { ssr: false }
);

const DOMAINS = [
  "HealthTech & AI",
  "Social & Creator Networks",
  "PropTech & Relocation",
  "Wellness Tech",
  "Enterprise SaaS",
  "Complex Dashboards",
  "Directories & Marketplaces",
  "Design Systems",
];

const VALUES = [
  {
    id: "research",
    label: "01",
    name: "Research",
    poster: "/images/value-posters/poster-research.webp",
    name: "User Research",
    image: "/images/about-value-sculpture-1.webp",
    alt: "User Research intertwined organic cloth sculpture",
    description:
      "Gain insights through user interviews, surveys, and usability testing. Understand behaviors to inform design.",
  },
  {
    id: "design",
    label: "02",
    name: "Design",
    poster: "/images/value-posters/poster-design.webp",
    name: "Product Design",
    image: "/images/about-value-sculpture-2.webp",
    alt: "Product Design architectural ribbon loop sculpture",
    description:
      "Turn insight into clear flows, interfaces and design systems that stay consistent as products grow.",
  },
  {
    id: "ship",
    id: "frontend",
    label: "03",
    name: "Ship",
    poster: "/images/value-posters/poster-ship.webp",
    name: "Frontend UI",
    image: "/images/about-value-sculpture-3.webp",
    alt: "Frontend UI dynamic wave lattice and helix sculpture",
    description:
      "Build it in code alongside developers, so what was designed is what gets released.",
  },
];

const TAB_DURATION = 6000;

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { margin: "-20px" });
  const prefersReduced = useReducedMotion();

  const [activeValueIndex, setActiveValueIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isControlsInteracting, setIsControlsInteracting] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const activeValue = VALUES[activeValueIndex];

  // Device & WebGL capability check
  useEffect(() => {
    setIsClient(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    // Pause auto-advance on hover, focus, or when off-screen
    const isPaused = isHovered || isFocused || !isInView;

    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setHasWebGL(Boolean(gl));
    } catch {
      setHasWebGL(false);
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-progress is paused when actively interacting with pill controls or when off-screen
  const isPaused = isControlsInteracting || !isInView;

  // Auto-progress timer (every ~6s) with progress bar
  // Auto-progress 1 -> 2 -> 3 -> 1 every 5s; reset timer when tab changes
  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 40; // ms
    const step = (intervalTime / TAB_DURATION) * 100;
    const interval = setInterval(() => {
      setActiveValueIndex((prev) => (prev + 1) % VALUES.length);
    }, 5000);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + step >= 100) {
          setActiveValueIndex((curr) => (curr + 1) % VALUES.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);
    return () => clearInterval(interval);
  }, [isPaused, activeValueIndex]);

  return () => clearInterval(timer);
}, [isPaused]);

// Manual click / jump handler
// Manual click handler (immediately jumps and resets interval)
const handleTabClick = (idx: number) => {
  setActiveValueIndex(idx);
  setProgress(0);
};

// Keyboard navigation for tablist
const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    e.preventDefault();
    const nextIdx = (index + 1) % VALUES.length;
    handleTabClick(nextIdx);
    document.getElementById(`value-tab-${VALUES[nextIdx].id}`)?.focus();
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    const prevIdx = (index - 1 + VALUES.length) % VALUES.length;
    handleTabClick(prevIdx);
    document.getElementById(`value-tab-${VALUES[prevIdx].id}`)?.focus();
  } else if (e.key === "Home") {
    e.preventDefault();
    handleTabClick(0);
    document.getElementById(`value-tab-${VALUES[0].id}`)?.focus();
  } else if (e.key === "End") {
    e.preventDefault();
    handleTabClick(VALUES.length - 1);
    document.getElementById(`value-tab-${VALUES[VALUES.length - 1].id}`)?.focus();
  }
};

const show3D = isClient && !isMobile && hasWebGL && !prefersReduced;

return (
  <section
    id="about"
    className="py-24 sm:py-36 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto relative z-10 border-t border-white/[0.08]"
  >
    {/* SVG Liquid Smoke / Boggart Distortion Filter */}
    <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
      <defs>
        <filter id="boggart-warp" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.04"
            numOctaves="3"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="38"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>

    <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
      {/* Left Column: Bio & Industry Pills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col gap-6"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-[18px] text-[#F14417]">/about</span>
        </div>

        <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-[-0.04em] text-[#F5F4F1]">
          About <span className="text-[#7A7873] font-normal">Me</span>
        </h2>

        <p className="text-[#A09D95] text-[18px] sm:text-[20px] leading-relaxed max-w-[52ch]">
          Product Designer and Frontend Developer focusing on clear information hierarchy,
          scalable design systems, and responsive web and mobile interfaces.
        </p>

        {/* Industry / Domain Pills */}
        <div className="flex flex-wrap gap-2.5 pt-2">
          {DOMAINS.map((domain, idx) => (
            <motion.span
              key={domain}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] text-[14px] sm:text-[15px] font-medium text-[#F5F4F1] hover:border-white/[0.2] hover:bg-white/[0.06] transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F14417]" />
              {domain}
            </motion.span>
          ))}
        </div>

        {/* Quick Experience Metrics */}
        <div className="flex items-center gap-8 pt-6 border-t border-white/[0.08] mt-2">
          <div>
            <span className="font-display font-bold text-2xl sm:text-3xl text-[#F5F4F1]">
              3+
            </span>
            <span className="block text-[12px] font-mono text-[#7A7873] uppercase tracking-wider mt-0.5">
              Years Experience
            </span>
          </div>
          <div className="w-[1px] h-8 bg-white/[0.08]" />
          <div>
            <span className="font-display font-bold text-2xl sm:text-3xl text-[#F5F4F1]">
              3
            </span>
            <span className="block text-[12px] font-mono text-[#7A7873] uppercase tracking-wider mt-0.5">
              Companies
            </span>
          </div>
        </div>
      </motion.div>

      {/* Right Column: "The Value Provided" Card with Fixed Height (Locked to Tab 01 size) */}
      {/* Right Column: "The Value Provided" Card with Stable Box Size & Liquid Transfiguration */}
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{ backgroundColor: "#0E0F0E" }}
        className="relative bg-[#0E0F0E] border border-white/[0.08] rounded-[28px] sm:rounded-[34px] p-7 sm:p-9 flex flex-col justify-between overflow-hidden shadow-2xl h-[500px] sm:h-[536px] group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative bg-[#0E0F0E] border border-white/[0.08] rounded-[28px] sm:rounded-[34px] p-7 sm:p-9 flex flex-col justify-between overflow-hidden shadow-2xl min-h-[480px] sm:min-h-[530px] group"
      >
        {/* Card Header (Fixed height, no layout shift) */}
        <div className="relative z-10 flex items-center justify-between gap-4 shrink-0">
          <h3 className="font-display font-medium text-xl sm:text-2xl text-[#F5F4F1] tracking-tight">
            The Value Provided
          </h3>

          {/* Interactive Value Tabs with Progress Bar */}
          {/* Interactive Value Tabs (No loading progress bar, clean solid orange pill) */}
          <div
            role="tablist"
            aria-label="Value provided stages"
            onMouseEnter={() => setIsControlsInteracting(true)}
            onMouseLeave={() => setIsControlsInteracting(false)}
            className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full p-1 shrink-0"
          >
            {VALUES.map((val, idx) => {
              const isActive = activeValueIndex === idx;
              return (
                <button
                  key={val.id}
                  id={`value-tab-${val.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`value-panel-${val.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => handleTabClick(idx)}
                  onKeyDown={(e) => handleKeyDown(e, idx)}
                  onFocus={() => setIsControlsInteracting(true)}
                  onBlur={() => setIsControlsInteracting(false)}
                  className={`relative text-[12px] font-mono px-3 py-1 rounded-full transition-colors overflow-hidden select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${onFocus = {() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`relative text-[12px] font-mono px-3 py-1 rounded-full transition-colors select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${isActive
              ? "text-white font-semibold"
              : "text-[#A09D95] hover:text-[#F5F4F1]"
              }`}
                  >
            {/* Active tab background */}
            {/* Clean solid orange active tab background */}
            {isActive && (
              <motion.div
                layoutId="activeTabPill"
                className="absolute inset-0 bg-[#F14417] shadow-sm -z-10"
                className="absolute inset-0 bg-[#F14417] rounded-full shadow-sm -z-10"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
            {/* Active tab progress bar */}
            {isActive && (
              <div
                className="absolute bottom-0 left-0 h-[2px] bg-white/90 rounded-full transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            )}
            <span className="relative z-10">{val.label}</span>
          </button>
          );
              })}
        </div>
    </div>

    {/* Center 3D Transfiguring Sculpture or Fallback */}
    <div className="relative z-10 w-full max-w-[240px] sm:max-w-[280px] mx-auto aspect-square my-auto flex items-center justify-center select-none flex-1">
      {show3D ? (
              <TransfiguringSculpture
                activeTab={activeValueIndex}
                isHovered={false}
                isInView={isInView}
          {/* Center 3D Sculpture with Living Liquid Transfiguring Snap */}
          <div className="relative z-10 w-full max-w-[240px] sm:max-w-[280px] mx-auto aspect-square my-3 flex items-center justify-center select-none [perspective:1200px]">
            {/* Supernatural Shockwave Burst on Transfiguration */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeValue.id + "-shockwave"}
                initial={{ scale: 0.4, opacity: 0.9, rotate: -30 }}
                animate={{ scale: 2.3, opacity: 0, rotate: 60 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-40 h-40 rounded-full border border-[#F14417]/30 bg-[#F14417]/[0.03] blur-md pointer-events-none -z-10"
              />
            ) : (
              <div className="w-full h-full relative flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeValue.id}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="w-full h-full relative"
                  >
                    <Image
                      src={activeValue.poster}
                      alt={activeValue.name}
                      fill
                      priority
                      sizes="(max-width: 768px) 240px, 280px"
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeValue.id}
                initial={{
                  opacity: 0,
                  scale: 0.28,
                  scaleY: 1.45,
                  scaleX: 0.55,
                  rotate: -140,
                  rotateY: -65,
                  filter: "url(#boggart-warp) blur(12px) contrast(140%)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  scaleY: 1,
                  scaleX: 1,
                  rotate: 0,
                  rotateY: 0,
                  filter: "blur(0px) contrast(100%)",
                }}
                exit={{
                  opacity: 0,
                  scale: 0.25,
                  scaleY: 1.5,
                  scaleX: 0.45,
                  rotate: 160,
                  rotateY: 65,
                  filter: "url(#boggart-warp) blur(12px) contrast(140%)",
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.34, 1.56, 0.64, 1], // Elastic snap & living fluid recoil
                }}
                className="w-full h-full flex items-center justify-center"
              >
                {/* Continuous multi-axis organic breathing & living float */}
                <motion.div
                  animate={{
                    y: [0, -10, 2, -7, 0],
                    x: [0, 3, -3, 2, 0],
                    rotate: [0, 1.8, -1.2, 1, 0],
                    scale: [1, 1.025, 0.99, 1.02, 1],
                  }}
                  transition={{
                    duration: 9,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full flex items-center justify-center relative"
                >
                  <Image
                    src={activeValue.image}
                    alt={activeValue.alt}
                    width={1024}
                    height={1024}
                    priority
                    className="w-full h-full object-contain pointer-events-none [mask-image:radial-gradient(circle,black_55%,transparent_90%)] [-webkit-mask-image:radial-gradient(circle,black_55%,transparent_90%)]"
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Card Footer: Fixed Height reserved for 3-line text, cross-fades with 8px y-shift */}
      {/* Card Footer: Stable Reserved Height so box never resizes; no text clipping */}
      <div
        id={`value-panel-${activeValue.id}`}
        role="tabpanel"
        aria-labelledby={`value-tab-${activeValue.id}`}
        aria-live="polite"
        className="relative z-10 h-[76px] sm:h-[82px] flex items-start shrink-0 overflow-hidden"
        className="relative z-10 min-h-[96px] sm:min-h-[84px] flex items-start shrink-0"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeValue.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <p className="text-[#A09D95] text-[15px] sm:text-[16px] leading-relaxed">
              {activeValue.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  </div>
    </section >
  );
}
