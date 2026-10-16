"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      num: "01",
      title: "Tiny bits of love",
      category: "Mobile App • Wellness",
      year: "2026",
      description:
        "Mindful relationship wellness app designed around nurturing bonds through daily affirmations, shared streaks, and gamified growth.",
      tags: ["Mobile App", "UI/UX", "Gamification", "Design System"],
      image: "/images/projects/tiny-bits-of-love.png",
      link: "/work/tiny-bits-of-love",
      liveLinks: {
        website: "https://tinybits.app/",
        appStore: "https://apps.apple.com/us/app/tiny-bits-of-love/id6757837595",
        playStore: "https://play.google.com/store/apps/details?id=com.tinybits",
      },
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
      category: "Internal Dashboard • Surgical AI",
      year: "2026",
      description:
        "End-to-end surgical activity dashboard, procedural workflows, and AI predictive analytics platform designed for clinical efficiency and real-time OR insights.",
      tags: ["Dashboard", "Surgical AI", "Complex Data", "Design System"],
      image: "/images/projects/descartes.png",
      link: "/work/descartes",
    },
  ];

  return (
    <section id="work" className="py-24 sm:py-36 px-6 sm:px-12 max-w-[1260px] mx-auto relative z-10 border-t border-white/[0.08]">
      {/* Section Header */}
      <div className="flex items-baseline justify-between gap-4 flex-wrap mb-12 sm:mb-16">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[18px] text-[#F14417]">/work</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.04em] text-[#F5F4F1]">
            Selected work<span className="font-mono text-[18px] text-[#F14417] ml-2">{"//"}</span>
          </h2>
        </div>
        <span className="font-mono text-[18px] text-[#A09D95]">[ 04 projects ]</span>
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
            className="grid grid-cols-1 md:grid-cols-[100px_1fr_1.1fr] gap-6 md:gap-12 items-center py-12 border-b border-white/[0.08] group"
          >
            <span className="font-mono text-[18px] text-[#A09D95] group-hover:text-[#F14417] transition-colors">{proj.num}</span>

            <div className="flex flex-col gap-3">
              <span className="font-mono text-[18px] text-[#F14417] font-medium">{proj.category}</span>
              {proj.link && proj.link !== "#" ? (
                <Link href={proj.link} className="inline-flex items-baseline gap-2 group/title">
                  <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight text-[#F5F4F1] group-hover:text-[#F14417] transition-colors">
                    {proj.title}
                  </h3>
                  <span className="text-[#F14417] text-xl opacity-0 group-hover/title:opacity-100 transition-opacity">↗</span>
                </Link>
              ) : (
                <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight text-[#F5F4F1] group-hover:text-[#F14417] transition-colors">
                  {proj.title}
                </h3>
              )}
              <p className="text-[#A09D95] text-[18px] leading-relaxed max-w-[46ch]">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-2.5 mt-3">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[18px] text-[#A09D95] border border-white/10 rounded-full px-4 py-1 group-hover:border-[#F14417]/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-2 flex items-center gap-3.5 flex-wrap">
                {proj.link && proj.link !== "#" && (
                  <Link
                    href={proj.link}
                    className="font-mono text-[16px] text-[#F14417] hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>View case study</span>
                    <span>→</span>
                  </Link>
                )}
                {"liveLinks" in proj && proj.liveLinks && (
                  <div className="flex items-center gap-3">
                    <span className="text-white/20 select-none">/</span>
                    <a
                      href={proj.liveLinks.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[14px] text-[#A09D95] hover:text-[#F14417] transition-colors"
                    >
                      Website ↗
                    </a>
                    <a
                      href={proj.liveLinks.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[14px] text-[#A09D95] hover:text-[#F14417] transition-colors"
                    >
                      App Store ↗
                    </a>
                    <a
                      href={proj.liveLinks.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[14px] text-[#A09D95] hover:text-[#F14417] transition-colors"
                    >
                      Play Store ↗
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Media Tile */}
            <div className="relative aspect-[4/3] rounded-md overflow-hidden border border-white/10 bg-[#121211] flex flex-col items-center justify-center group-hover:border-[#F14417]/40 transition-colors">
              {proj.link && proj.link !== "#" ? (
                <Link href={proj.link} className="w-full h-full block relative" aria-label={`View ${proj.title} case study`}>
                  {"image" in proj && proj.image ? (
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                      <span className="absolute top-4 right-4 font-mono text-[14px] text-[#F14417] bg-[#0B0B0A]/85 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 z-10">
                        {proj.year}
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center w-full h-full">
                      <span className="absolute top-4 right-4 font-mono text-[18px] text-[#F14417] bg-[#0B0B0A]/85 px-3 py-1 rounded-full border border-white/10">
                        {proj.year}
                      </span>
                      <span className="font-display font-bold text-7xl text-white/[0.06] group-hover:text-[#F14417]/20 transition-colors leading-none select-none">
                        {proj.num}
                      </span>
                      <span className="font-mono text-[18px] text-[#A09D95] mt-2">
                        {proj.title}
                      </span>
                    </div>
                  )}
                </Link>
              ) : (
                <>
                  {"image" in proj && proj.image ? (
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={proj.image}
                        alt={proj.title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                      <span className="absolute top-4 right-4 font-mono text-[14px] text-[#F14417] bg-[#0B0B0A]/85 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 z-10">
                        {proj.year}
                      </span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center w-full h-full">
                      <span className="absolute top-4 right-4 font-mono text-[18px] text-[#F14417] bg-[#0B0B0A]/85 px-3 py-1 rounded-full border border-white/10">
                        {proj.year}
                      </span>
                      <span className="font-display font-bold text-7xl text-white/[0.06] group-hover:text-[#F14417]/20 transition-colors leading-none select-none">
                        {proj.num}
                      </span>
                      <span className="font-mono text-[18px] text-[#A09D95] mt-2">
                        {proj.title}
                      </span>
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
