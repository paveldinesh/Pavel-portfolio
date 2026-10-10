"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      num: "01",
      title: "Cozicadamy",
      category: "EdTech Platform",
      year: "2026",
      description:
        "Responsive web platform design covering user flows, high-fidelity UI and a component system built for fast iteration between design and development.",
      tags: ["Web App", "Design System", "UI/UX"],
      link: "#",
    },
    {
      num: "02",
      title: "Mazeflower",
      category: "Product Website",
      year: "2026",
      description:
        "Brand direction, landing page and product UI, taken from moodboard and typography exploration through to stakeholder-ready high-fidelity screens.",
      tags: ["Branding", "Landing Page", "UI Design"],
      link: "#",
    },
    {
      num: "03",
      title: "Military PCS Dashboard",
      category: "Internal Dashboard",
      year: "2026",
      description:
        "Data-dense dashboard interface for managing relocation workflows, designed for clarity and speed of use across large, structured data sets.",
      tags: ["Dashboard", "UX Research", "Data UI"],
      link: "#",
    },
    {
      num: "04",
      title: "Descartes Dashboard",
      category: "Internal Dashboard",
      year: "2026",
      description:
        "End-to-end dashboard redesign balancing usability and information hierarchy, delivered alongside developers for a production-ready handoff.",
      tags: ["Dashboard", "UI Design", "Handoff"],
      link: "#",
    },
  ];

  return (
    <section id="work" className="py-24 sm:py-36 px-6 sm:px-12 max-w-[1260px] mx-auto relative z-10 border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex items-baseline justify-between gap-4 flex-wrap mb-12 sm:mb-16">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-xs text-[#7A7873]">/work</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.04em] text-[#F5F4F1]">
            Selected work<span className="font-mono text-sm text-[#7A7873] ml-1.5">{"//"}</span>
          </h2>
        </div>
        <span className="font-mono text-xs text-[#7A7873]">[ 04 projects ]</span>
      </div>

      {/* Numbered Rows List (No cards) */}
      <div className="flex flex-col border-t border-white/[0.08]">
        {projects.map((proj, idx) => (
          <motion.div
            key={proj.num}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className="grid grid-cols-1 md:grid-cols-[80px_1fr_1.1fr] gap-6 md:gap-12 items-center py-10 border-b border-white/[0.08] group"
          >
            <span className="font-mono text-sm text-[#7A7873]">{proj.num}</span>

            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-xs text-[#7A7873]">{proj.category}</span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight text-[#F5F4F1] group-hover:opacity-75 transition-opacity">
                {proj.title}
              </h3>
              <p className="text-[#7A7873] text-[14.5px] leading-relaxed max-w-[46ch]">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] text-[#7A7873] border border-white/10 rounded-full px-2.5 py-0.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Media Placeholder Tile */}
            <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-white/10 bg-[#121211] flex flex-col items-center justify-center p-6 text-center group-hover:border-white/20 transition-colors">
              <span className="absolute top-3.5 right-3.5 font-mono text-[11px] text-[#7A7873] bg-[#0B0B0A]/80 px-2.5 py-1 rounded-full border border-white/10">
                {proj.year}
              </span>
              <span className="font-display font-bold text-6xl text-white/[0.08] leading-none select-none">
                {proj.num}
              </span>
              <span className="font-mono text-[11px] text-white/40 mt-2">
                {proj.title}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
