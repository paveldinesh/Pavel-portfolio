"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Wraps a section so it "rises" into place with rounded top corners as it
 * enters, then recedes (slight scale-down + dim) as it scrolls away.
 */
export default function SectionReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.12, 0.88, 1], [0.96, 1, 1, 0.96]);
  const radius = useTransform(scrollYProgress, [0, 0.12], [48, 0]);
  const opacity = useTransform(scrollYProgress, [0.85, 1], [1, 0.35]);

  return (
    <motion.div
      ref={ref}
      style={
        reduce
          ? undefined
          : {
              scale,
              opacity,
              borderTopLeftRadius: radius,
              borderTopRightRadius: radius,
              transformOrigin: "50% 0%",
            }
      }
      className="overflow-hidden bg-[#0B0B0A]"
    >
      {children}
    </motion.div>
  );
}
