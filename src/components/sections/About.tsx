"use client";

import { motion } from "framer-motion";

export default function About() {
  const stats = [
    {
      value: "3+",
      label: "Years of experience",
      detail: "Across design agencies and in-house product teams.",
    },
    {
      value: "3",
      label: "Companies",
      detail: "Armia Systems, Stratagile and AppCake.",
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-36 px-6 sm:px-12 md:px-16 max-w-[1440px] mx-auto relative z-10 border-t border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
        {/* Left Copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4"
        >
          <span className="font-mono text-[18px] text-[#F14417]">/about</span>
          <div className="flex items-baseline mb-2">
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.04em] text-[#F5F4F1]">
              About
            </h2>
            <span className="font-mono text-[18px] text-[#F14417] ml-2">*</span>
          </div>
          <p className="text-[#A09D95] text-[18px] sm:text-[20px] leading-relaxed max-w-[50ch]">
            I&apos;m a UI/UX designer with 3+ years designing web, dashboard and mobile products for international clients — and a growing focus on shipping the frontend myself. My work usually starts before a single screen exists: moodboards, typography and brand direction that get stakeholders aligned early, so the high-fidelity design and build that follows has far less rework.
          </p>
        </motion.div>

        {/* Right Stats */}
        <div className="flex flex-col border-t border-white/[0.08]">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="py-7 border-b border-white/[0.08] flex items-baseline gap-6 group"
            >
              <span className="font-display font-bold text-4xl sm:text-5xl text-[#F5F4F1] tracking-tight min-w-[100px]">
                {stat.value}
              </span>
              <div className="flex flex-col gap-1.5">
                <span className="text-[18px] font-medium text-[#F5F4F1]">
                  {stat.label}
                </span>
                <span className="text-[18px] text-[#A09D95]">{stat.detail}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
