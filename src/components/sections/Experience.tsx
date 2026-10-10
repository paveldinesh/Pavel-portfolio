"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      num: "01",
      company: "Armia Systems Pvt. Ltd.",
      role: "UI/UX Designer & Frontend UI Developer",
      period: "Mar 2026 — Present",
      description:
        "Leading visual and UI direction for new projects from discovery through handoff — moodboards, typography systems, brand colour and initial screens that lock in direction before high-fidelity work begins. Designed responsive interfaces across Cozicadamy, Mazeflower, BCMCH, and two internal dashboards, and built the Armia company landing page using an AI-assisted, prompt-driven design-to-code workflow.",
      tags: ["Design Direction", "Design Systems", "Frontend UI", "Stakeholder Presentations"],
    },
    {
      num: "02",
      company: "Stratagile",
      role: "UX/UI Designer",
      period: "Jun 2024 — Mar 2026",
      description:
        "Owned end-to-end UX/UI for web and dashboard products across international clients, from user flows through high-fidelity Figma prototypes. Built and maintained a scalable design system that improved consistency and accelerated design-to-development handoff.",
      tags: ["End-to-End UX/UI", "Design Systems", "Figma", "Client Delivery"],
    },
    {
      num: "03",
      company: "AppCake",
      role: "UX/UI Designer",
      period: "Jan 2023 — May 2024",
      description:
        "Designed platform-specific UI systems for iOS and Android, improving navigation clarity through user flows, wireframes and interactive prototypes. Created icons and illustrations aligned to brand identity and collaborated with marketing on pitch decks and promotional creative.",
      tags: ["iOS & Android UI", "Wireframing", "Prototyping", "Illustration"],
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-36 px-6 sm:px-12 max-w-[1260px] mx-auto relative z-10 border-t border-white/[0.08]">
      <div className="flex items-baseline justify-between gap-4 flex-wrap mb-12 sm:mb-16">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[18px] text-[#F14417]">/experience</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.04em] text-[#F5F4F1]">
            Work history<span className="font-mono text-[18px] text-[#F14417] ml-2">#</span>
          </h2>
        </div>
      </div>

      <div className="flex flex-col border-t border-white/[0.08]">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 md:gap-10 py-12 border-b border-white/[0.08] group"
          >
            <span className="font-mono text-[18px] text-[#A09D95] group-hover:text-[#F14417] transition-colors">{exp.num}</span>

            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-baseline justify-between gap-4">
                <div>
                  <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[#F5F4F1] group-hover:text-[#F14417] transition-colors">
                    {exp.company}
                  </h3>
                  <span className="text-[18px] font-medium text-[#F5F4F1] mt-1 block">
                    {exp.role}
                  </span>
                </div>
                <span className="font-mono text-[18px] text-[#F14417] whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              <p className="text-[#A09D95] text-[18px] leading-relaxed max-w-[68ch] mt-1">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2.5 mt-3">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[18px] text-[#A09D95] border border-white/10 rounded-full px-4 py-1 group-hover:border-[#F14417]/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
