"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Wrench } from "lucide-react";

export default function Skills() {
  const coreSkills = [
    { left: "User Research", right: "Information Architecture" },
    { left: "User Flows", right: "Wireframing" },
    { left: "Prototyping", right: "Usability Testing" },
    { left: "Design Systems", right: "Accessibility" },
  ];

  const visualCraftSkills = [
    "Interface Design",
    "Typography",
    "Visual Systems",
    "Art Direction",
    "Digital Branding",
  ];

  const frontendSkills = [
    "React / Next.js",
    "HTML & CSS",
    "Responsive UI",
    "Flutter",
    "AI-Assisted Build",
  ];

  const tools = [
    "Figma",
    "Photoshop",
    "Illustrator",
    "Premiere Pro",
    "Cursor",
    "Antigravity",
    "Jira",
    "Asana",
  ];

  return (
    <section
      id="skills"
      className="py-24 sm:py-36 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto relative z-10 border-t border-white/[0.08]"
    >
      {/* Section Header */}
      <div className="flex items-baseline justify-between gap-4 flex-wrap mb-12 sm:mb-16">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[18px] text-[#F14417]">/skills</span>
          <div className="flex items-baseline">
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.04em] text-[#F5F4F1]">
              Skills &amp; Craft
            </h2>
            <span className="font-mono text-[18px] text-[#F14417] ml-2">®</span>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="flex flex-col gap-4 sm:gap-6">
        {/* Card 01: Core Discipline (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative rounded-2xl bg-[#121211] border border-white/[0.08] hover:border-white/[0.16] transition-colors p-6 sm:p-8 md:p-10 overflow-hidden"
        >
          {/* Subtle hover gradient */}
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 w-80 h-80 bg-[#F14417]/[0.02] rounded-full blur-3xl pointer-events-none group-hover:bg-[#F14417]/[0.05] transition-colors"
          />

          {/* Header Row */}
          <div className="relative z-10 flex items-center justify-between mb-4">
            <span className="font-mono text-[13px] sm:text-[14px] text-[#F14417] tracking-wider uppercase font-semibold">
              01 / CORE DISCIPLINE
            </span>
            <ArrowUpRight className="w-5 h-5 text-[#F14417] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>

          {/* Title & Subtitle */}
          <div className="relative z-10 mb-8">
            <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#F5F4F1] tracking-tight mb-2">
              UX &amp; Product Design
            </h3>
            <p className="text-[#A09D95] text-[15px] sm:text-[17px] leading-relaxed max-w-[65ch]">
              Research-led experiences, thoughtful interactions, and scalable product systems.
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-white/[0.08] mb-8" />

          {/* 2-Column Skill Matrix */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
            {coreSkills.map((row, i) => (
              <div key={i} className="contents">
                <div className="flex items-center gap-2.5 text-[15px] sm:text-[16px] text-[#E0DDD5] hover:text-[#F5F4F1] group/item transition-colors">
                  <span className="text-[#F14417] font-mono text-[14px] transition-transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5">
                    ↗
                  </span>
                  <span>{row.left}</span>
                </div>
                <div className="flex items-center gap-2.5 text-[15px] sm:text-[16px] text-[#E0DDD5] hover:text-[#F5F4F1] group/item transition-colors">
                  <span className="text-[#F14417] font-mono text-[14px] transition-transform group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5">
                    ↗
                  </span>
                  <span>{row.right}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 2-Column Middle Row: Card 02 & Card 03 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 02: Visual Craft */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative rounded-2xl bg-[#121211] border border-white/[0.08] hover:border-white/[0.16] transition-colors p-6 sm:p-8 flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[13px] sm:text-[14px] text-[#F14417] tracking-wider uppercase font-semibold">
                  02 / VISUAL CRAFT
                </span>
              </div>

              {/* Icon */}
              <div className="mb-3 text-[#F14417]" aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="6" r="2.5" />
                  <circle cx="6" cy="17" r="2.5" />
                  <circle cx="18" cy="17" r="2.5" />
                  <path d="M12 8.5v3M8.5 15.5l2-2M15.5 15.5l-2-2" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F4F1] tracking-tight mb-6">
                UI &amp; Brand
              </h3>

              {/* Skills List */}
              <ul className="flex flex-col gap-3.5">
                {visualCraftSkills.map((skill) => (
                  <li
                    key={skill}
                    className="text-[15px] sm:text-[16px] text-[#A09D95] hover:text-[#F5F4F1] transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Card 03: Build & Ship */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="group relative rounded-2xl bg-[#121211] border border-white/[0.08] hover:border-white/[0.16] transition-colors p-6 sm:p-8 flex flex-col justify-between overflow-hidden"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[13px] sm:text-[14px] text-[#F14417] tracking-wider uppercase font-semibold">
                  03 / BUILD &amp; SHIP
                </span>
              </div>

              {/* Code Icon */}
              <div className="font-mono text-[18px] font-bold text-[#F14417] mb-3 select-none leading-none">
                {"</>"}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#F5F4F1] tracking-tight mb-6">
                Frontend
              </h3>

              {/* Skills List */}
              <ul className="flex flex-col gap-3.5">
                {frontendSkills.map((skill) => (
                  <li
                    key={skill}
                    className="text-[15px] sm:text-[16px] text-[#A09D95] hover:text-[#F5F4F1] transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Card 04: My Toolkit (Full Width Banner) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="group relative rounded-2xl bg-[#121211] border border-white/[0.08] hover:border-white/[0.16] transition-colors p-6 sm:p-8 overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-[13px] sm:text-[14px] text-[#F14417] tracking-wider uppercase font-semibold">
              04 / MY TOOLKIT
            </span>
            <Wrench className="w-4 h-4 text-[#F14417] opacity-80" />
          </div>

          {/* Tools Badges */}
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2.5 rounded-xl border border-white/[0.08] bg-black/40 text-[14px] sm:text-[15px] font-medium text-[#F5F4F1] hover:border-[#F14417]/50 hover:bg-white/[0.04] transition-all cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
