"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const DOMAINS = [
  "Social Platforms",
  "Fintech",
  "Gaming",
  "EdTech",
  "SaaS",
  "E-Commerce",
  "Healthcare",
  "Real Estate",
];

const VALUES = [
  {
    id: "research",
    label: "01",
    name: "User Research",
    description:
      "Gain insights through user interviews, surveys, and usability testing. Understand behaviors to inform design.",
  },
  {
    id: "design",
    label: "02",
    name: "Product Design",
    description:
      "Craft scalable design systems, responsive interfaces, and intuitive interaction flows that convert complex requirements into effortless user journeys.",
  },
  {
    id: "frontend",
    label: "03",
    name: "Frontend UI",
    description:
      "Bridge design and engineering with clean, accessible, and performant code — handing off working interfaces rather than static mockups.",
  },
];

export default function About() {
  const [activeValueIndex, setActiveValueIndex] = useState(0);
  const activeValue = VALUES[activeValueIndex];

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
            As a Product Designer and Developer, I create innovative solutions
            that blend aesthetics and functionality, delivering exceptional user
            experiences across various platforms.
          </p>

          {/* Decorative Squiggle Wave */}
          <div className="flex items-center text-[#F14417] my-1" aria-hidden="true">
            <svg
              width="142"
              height="16"
              viewBox="0 0 142 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#F14417]"
            >
              <circle cx="3" cy="8" r="2.5" fill="currentColor" />
              <path
                d="M10 8 C 14 3, 18 3, 22 8 C 26 13, 30 13, 34 8 C 38 3, 42 3, 46 8 C 50 13, 54 13, 58 8 C 62 3, 66 3, 70 8 C 74 13, 78 13, 82 8 C 86 3, 90 3, 94 8 C 98 13, 102 13, 106 8 C 110 3, 114 3, 118 8 C 122 13, 126 13, 130 8 C 134 3, 138 3, 142 8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Industry / Domain Pills */}
          <div className="flex flex-wrap gap-2.5 pt-1">
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative bg-[#121211] border border-white/[0.08] rounded-[28px] sm:rounded-[34px] p-7 sm:p-9 flex flex-col justify-between overflow-hidden shadow-2xl min-h-[440px] sm:min-h-[480px]"
        >
          {/* Subtle ambient background glow */}
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-[#F14417]/[0.04] rounded-full blur-3xl pointer-events-none"
          />

          {/* Card Header */}
          <div className="relative z-10 flex items-center justify-between gap-4">
            <h3 className="font-display font-medium text-xl sm:text-2xl text-[#F5F4F1] tracking-tight">
              The Value Provided
            </h3>

            {/* Interactive Value Tabs */}
            <div className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full p-1">
              {VALUES.map((val, idx) => (
                <button
                  key={val.id}
                  onClick={() => setActiveValueIndex(idx)}
                  className={`text-[12px] font-mono px-2.5 py-1 rounded-full transition-all ${
                    activeValueIndex === idx
                      ? "bg-[#F14417] text-white font-semibold shadow-sm"
                      : "text-[#A09D95] hover:text-[#F5F4F1]"
                  }`}
                  aria-label={`View value ${val.name}`}
                >
                  {val.label}
                </button>
              ))}
            </div>
          </div>

          {/* Center 3D Organic Silk Sculpture */}
          <motion.div
            animate={{
              y: [0, -7, 0],
              rotate: [0, 1.2, 0, -1.2, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-10 w-full max-w-[240px] sm:max-w-[280px] mx-auto aspect-square my-4 flex items-center justify-center select-none"
          >
            <Image
              src="/images/about-value-sculpture.jpg"
              alt="The Value Provided organic 3D sculpture"
              width={1024}
              height={1024}
              priority
              className="w-full h-full object-contain mix-blend-lighten drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] pointer-events-none"
            />
          </motion.div>

          {/* Card Footer: Active Description */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeValue.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
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
