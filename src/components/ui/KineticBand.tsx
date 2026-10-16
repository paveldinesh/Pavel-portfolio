"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useVelocity,
  useSpring,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

export interface BandLine {
  text: string;
  /** 1 = slides left as you scroll down, -1 = slides right */
  direction?: 1 | -1;
  variant?: "filled" | "outline" | "accent";
}

interface KineticBandProps {
  lines: BandLine[];
  className?: string;
}

const REPEATS = 6;

function Row({
  line,
  progress,
  reduce,
}: {
  line: BandLine;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const dir = line.direction ?? 1;
  const x = useTransform(
    progress,
    [0, 1],
    dir > 0 ? ["0vw", "-85vw"] : ["-85vw", "0vw"]
  );

  const variant = line.variant ?? "filled";
  const colorClass =
    variant === "accent"
      ? "text-[#F14417]"
      : variant === "outline"
      ? "text-transparent"
      : "text-[#F5F4F1]";

  const strokeStyle =
    variant === "outline"
      ? { WebkitTextStroke: "2px rgba(245,244,241,0.55)" }
      : undefined;

  return (
    <motion.div
      style={{ x: reduce ? 0 : x, ...strokeStyle }}
      className={`flex w-max items-center whitespace-nowrap font-display font-bold uppercase leading-[0.92] tracking-[-0.05em] text-[16vw] md:text-[12vw] ${colorClass}`}
    >
      {Array.from({ length: REPEATS }).map((_, i) => (
        <span key={i} className="flex items-center">
          <span>{line.text}</span>
          <span className="mx-[0.35em] inline-block size-[0.16em] shrink-0 rounded-full bg-[#F14417]" />
        </span>
      ))}
    </motion.div>
  );
}

/**
 * Giant type band that sits between sections. The text slides sideways as the
 * band scrolls through the viewport and skews with scroll speed.
 */
export default function KineticBand({ lines, className = "" }: KineticBandProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { damping: 50, stiffness: 400 });
  const skewX = useTransform(smoothVelocity, [-2500, 2500], [-9, 9]);

  return (
    <section
      ref={ref}
      aria-hidden="true"
      className={`relative z-10 overflow-hidden select-none border-y border-white/[0.08] bg-[#0B0B0A] py-6 sm:py-10 ${className}`}
    >
      <motion.div
        style={{ skewX: reduce ? 0 : skewX }}
        className="flex flex-col gap-2 sm:gap-4"
      >
        {lines.map((line, i) => (
          <Row key={i} line={line} progress={scrollYProgress} reduce={reduce} />
        ))}
      </motion.div>
    </section>
  );
}
