"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const groups = [
    {
      title: "UX / Product Design",
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
      title: "UI Design & Branding",
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
      title: "Frontend",
      items: [
        "Frontend UI Development",
        "Responsive Web UI",
        "HTML",
        "CSS",
        "AI-Assisted Development",
        "Prompt-Driven Development",
        "Design-to-Code",
      ],
    },
    {
      title: "Tools",
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
    <section id="skills" className="py-24 sm:py-36 px-6 sm:px-12 max-w-[1260px] mx-auto relative z-10 border-t border-white/[0.08]">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {groups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="flex flex-col gap-5"
          >
            <span className="font-mono text-[18px] font-semibold text-[#F14417] pb-3 border-b border-white/[0.08]">
              {group.title}
            </span>
            <ul className="flex flex-col gap-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-[18px] text-[#A09D95]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
