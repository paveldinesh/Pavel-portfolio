"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const groups = [
    {
      num: "01",
      title: "UX / Product Design",
      icon: (
        // 3 overlapping circles (Venn / UX icon)
        <svg viewBox="0 0 24 24" fill="none" stroke="#F14417" strokeWidth="1.5" className="w-5 h-5">
          <circle cx="9" cy="9" r="4.5" />
          <circle cx="15" cy="9" r="4.5" />
          <circle cx="12" cy="14.5" r="4.5" />
        </svg>
      ),
      items: [
        "User Research",
        "User Flows",
        "Information Architecture",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
        "Design Systems",
        "Responsive Design",
        "Accessibility",
      ],
    },
    {
      num: "02",
      title: "UI Design & Branding",
      icon: (
        // Overlapping layers/artboards icon
        <svg viewBox="0 0 24 24" fill="none" stroke="#F14417" strokeWidth="1.5" className="w-5 h-5">
          <rect x="8" y="8" width="12" height="12" rx="1.5" />
          <path d="M16 8V5a1.5 1.5 0 0 0-1.5-1.5H5A1.5 1.5 0 0 0 3.5 5v9.5A1.5 1.5 0 0 0 5 16h3" />
        </svg>
      ),
      items: [
        "High-Fidelity UI",
        "Visual Design",
        "Typography",
        "Colour Systems",
        "Iconography",
        "Moodboards",
        "Brand Direction",
        "Landing Pages",
        "Dashboard Design",
      ],
    },
    {
      num: "03",
      title: "Frontend",
      icon: (
        // Code tag icon </ >
        <svg viewBox="0 0 24 24" fill="none" stroke="#F14417" strokeWidth="1.75" className="w-5 h-5">
          <path d="M7 8l-4 4 4 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 8l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 4l-4 16" strokeLinecap="round" />
        </svg>
      ),
      items: [
        "Frontend UI Development",
        "Responsive Web UI",
        "Next.js",
        "Flutter",
        "HTML",
        "CSS",
        "AI-Assisted Development",
        "Prompt-Driven Development",
        "Design-to-Code",
      ],
    },
    {
      num: "04",
      title: "Tools",
      icon: (
        // Stack / database / toolbox cylinder icon
        <svg viewBox="0 0 24 24" fill="none" stroke="#F14417" strokeWidth="1.5" className="w-5 h-5">
          <ellipse cx="12" cy="5" rx="7" ry="2.5" />
          <path d="M5 5v5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V5" />
          <path d="M5 10v5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-5" />
          <path d="M5 15v4c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-4" />
        </svg>
      ),
      items: [
        "Figma",
        "Photoshop",
        "Illustrator",
        "Premiere Pro",
        "Antigravity",
        "Cursor",
        "Jira",
        "Asana",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 sm:py-36 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto relative z-10 border-t border-white/[0.08]">
      <div className="flex items-baseline justify-between gap-4 flex-wrap mb-12 sm:mb-16">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[18px] text-[#F14417]">/toolkit</span>
          <div className="flex items-baseline">
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.04em] text-[#F5F4F1]">
              Skills & tools
            </h2>
            <span className="font-mono text-[18px] text-[#F14417] ml-2">®</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {groups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="flex flex-col bg-[#0B0B0A] border border-white/[0.08] hover:border-[#F14417]/50 transition-colors p-5 sm:p-6"
          >
            {/* Top Bar: Number & Section Icon */}
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <span className="font-mono text-[15px] text-[#8E8B83]">
                {group.num}
              </span>
              <div className="opacity-90">{group.icon}</div>
            </div>

            {/* Column Title */}
            <div className="pt-5 pb-5 border-b border-white/[0.08]">
              <h3 className="font-mono text-[17px] sm:text-[18px] font-semibold text-[#F14417] tracking-tight">
                {group.title}
              </h3>
            </div>

            {/* List of items with dot & arrow */}
            <ul className="flex flex-col flex-1 divide-y divide-white/[0.06]">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2.5 py-3.5 text-[15px] sm:text-[16px] text-[#E0DDD5] hover:text-white transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F14417] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
