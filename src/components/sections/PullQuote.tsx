"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const WORDS: { text: string; accent?: boolean }[] = [
  { text: "“Most" },
  { text: "designers" },
  { text: "hand" },
  { text: "off" },
  { text: "a" },
  { text: "file." },
  { text: "I" },
  { text: "hand" },
  { text: "off" },
  { text: "a" },
  { text: "working", accent: true },
  { text: "interface.”", accent: true },
];

function Word({
  text,
  accent,
  index,
  total,
  progress,
}: {
  text: string;
  accent?: boolean;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.15, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.25em] ${accent ? "text-[#F14417]" : ""}`}
    >
      {text}
    </motion.span>
  );
}

export default function PullQuote() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });

  return (
    <section
      ref={ref}
      className="py-24 sm:py-36 px-6 sm:px-12 border-t border-b border-white/[0.08] bg-[#0B0B0A] relative z-10"
    >
      <div className="max-w-[1260px] mx-auto flex flex-col gap-5">
        <span className="font-mono text-[18px] text-[#F14417] tracking-wider">
          {"/* 01 */"}
        </span>
        <blockquote className="font-display font-medium text-3xl sm:text-5xl md:text-6xl lg:text-[70px] leading-[1.1] tracking-[-0.04em] text-[#F5F4F1] max-w-[22ch]">
          {WORDS.map((w, i) => (
            <Word
              key={i}
              text={w.text}
              accent={w.accent}
              index={i}
              total={WORDS.length}
              progress={scrollYProgress}
            />
          ))}
        </blockquote>
      </div>
    </section>
  );
}
