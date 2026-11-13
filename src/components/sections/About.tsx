"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Dynamically load the 3D Canvas visual with ssr: false
const ValueVisual = dynamic(
  () => import("@/components/about/ValueVisual"),
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
    description:
      "Gain insights through user interviews, surveys, and usability testing. Understand behaviors to inform design.",
  },
  {
    id: "design",
    label: "02",
    name: "Design",
    description:
      "Turn insight into clear flows, interfaces and design systems that stay consistent as products grow.",
  },
  {
    id: "ship",
    label: "03",
    name: "Ship",
    description:
      "Build it in code alongside developers, so what was designed is what gets released.",
  },
];

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { margin: "200px" });
  const [hasEnteredViewport, setHasEnteredViewport] = useState(false);

  useEffect(() => {
    if (isInView && !hasEnteredViewport) {
      setHasEnteredViewport(true);
    }
  }, [isInView, hasEnteredViewport]);

  const [activeValueIndex, setActiveValueIndex] = useState(0);

  const activeValue = VALUES[activeValueIndex];

  // Manual click-driven tab switching (no auto-advance)
  const handleTabClick = (idx: number) => {
    setActiveValueIndex(idx);
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

  return (
    <section
      id="about"
      className="py-24 sm:py-36 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto relative z-10 border-t border-white/[0.08]"
    >
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

        {/* Right Column: "The Value Provided" Card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ backgroundColor: "#0E0F0E" }}
          className="relative bg-[#0E0F0E] border border-white/[0.08] rounded-[28px] sm:rounded-[34px] p-7 sm:p-9 flex flex-col justify-between overflow-hidden shadow-2xl min-h-[480px] sm:min-h-[530px] group"
        >
          {/* Card Header (Fixed height, no layout shift) */}
          <div className="relative z-10 flex items-center justify-between gap-4 shrink-0">
            <h3 className="font-display font-medium text-xl sm:text-2xl text-[#F5F4F1] tracking-tight">
              The Value Provided
            </h3>

            {/* Interactive Value Tabs (Click-driven, no auto-advance) */}
            <div
              role="tablist"
              aria-label="Value provided stages"
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
                    className={`relative text-[12px] font-mono px-3 py-1 rounded-full transition-colors select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-[#A09D95] hover:text-[#F5F4F1]"
                    }`}
                  >
                    {/* Clean solid orange active tab background */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabPill"
                        className="absolute inset-0 bg-[#F14417] rounded-full shadow-sm -z-10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{val.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Center Graphic: Real-time 3D Three.js / Fallback Posters */}
          <div className="relative z-10 w-full max-w-[240px] sm:max-w-[280px] mx-auto aspect-square my-3 flex items-center justify-center select-none">
            {hasEnteredViewport && (
              <ValueVisual activeTab={activeValueIndex} isInView={isInView} />
            )}
          </div>

          {/* Card Footer: Stable Reserved Height so box never resizes; no text clipping */}
          <div
            id={`value-panel-${activeValue.id}`}
            role="tabpanel"
            aria-labelledby={`value-tab-${activeValue.id}`}
            aria-live="polite"
            className="relative z-10 min-h-[96px] sm:min-h-[84px] flex items-start shrink-0"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeValue.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
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
    </section>
  );
}
