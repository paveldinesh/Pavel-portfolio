"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
    name: "User Research",
    image: "/images/about-value-sculpture-1.webp",
    alt: "User Research intertwined organic cloth sculpture",
    description:
      "Gain insights through user interviews, surveys, and usability testing. Understand behaviors to inform design.",
  },
  {
    id: "design",
    label: "02",
    name: "Product Design",
    image: "/images/about-value-sculpture-2.webp",
    alt: "Product Design architectural ribbon loop sculpture",
    description:
      "Craft scalable design systems, responsive interfaces, and intuitive interaction flows that convert complex requirements into effortless user journeys.",
  },
  {
    id: "frontend",
    label: "03",
    name: "Frontend UI",
    image: "/images/about-value-sculpture-3.webp",
    alt: "Frontend UI dynamic wave lattice and helix sculpture",
    description:
      "Bridge design and engineering with clean, accessible, and performant code — handing off working interfaces rather than static mockups.",
  },
];

export default function About() {
  const [activeValueIndex, setActiveValueIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeValue = VALUES[activeValueIndex];

  // Auto-progress through 1 -> 2 -> 3 like a video reel (pauses on hover)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveValueIndex((prev) => (prev + 1) % VALUES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

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

        {/* Right Column: "The Value Provided" Card with Boggart Transfiguration */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ backgroundColor: "#0E0F0E" }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative bg-[#0E0F0E] border border-white/[0.08] rounded-[28px] sm:rounded-[34px] p-7 sm:p-9 flex flex-col justify-between overflow-hidden shadow-2xl min-h-[440px] sm:min-h-[480px] group"
        >
          {/* Card Header */}
          <div className="relative z-10 flex items-center justify-between gap-4">
            <h3 className="font-display font-medium text-xl sm:text-2xl text-[#F5F4F1] tracking-tight">
              The Value Provided
            </h3>

            {/* Interactive Value Tabs with Video Progression Indicator */}
            <div className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full p-1">
              {VALUES.map((val, idx) => (
                <button
                  key={val.id}
                  onClick={() => {
                    setActiveValueIndex(idx);
                  }}
                  className={`relative text-[12px] font-mono px-3 py-1 rounded-full transition-all overflow-hidden ${
                    activeValueIndex === idx
                      ? "text-white font-semibold"
                      : "text-[#A09D95] hover:text-[#F5F4F1]"
                  }`}
                  aria-label={`View value ${val.name}`}
                >
                  {/* Active tab background with subtle video reel pulse */}
                  {activeValueIndex === idx && (
                    <motion.div
                      layoutId="activeTabPill"
                      className="absolute inset-0 bg-[#F14417] shadow-sm -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{val.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Center 3D Sculpture with Harry Potter Boggart Transfiguring Snap */}
          <div className="relative z-10 w-full max-w-[240px] sm:max-w-[280px] mx-auto aspect-square my-4 flex items-center justify-center select-none [perspective:1200px]">
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
                  ease: [0.34, 1.56, 0.64, 1], // Boggart elastic snap & recoil
                }}
                className="w-full h-full flex items-center justify-center"
              >
                {/* Subtle continuous multi-axis organic breathing & living float */}
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
                  className="w-full h-full flex items-center justify-center"
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

          {/* Card Footer: Active Description with Liquid Slide */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeValue.id}
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <p className="text-[#A09D95] text-[15px] sm:text-[16px] leading-relaxed">
                  {activeValue.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
