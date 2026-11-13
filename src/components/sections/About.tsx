"use client";

import React from "react";
import { motion } from "framer-motion";

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

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-36 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto relative z-10 border-t border-white/[0.08]"
    >
      <div className="max-w-[820px]">
        {/* Bio, Domains & Experience Metrics */}
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
      </div>
    </section>
  );
}
