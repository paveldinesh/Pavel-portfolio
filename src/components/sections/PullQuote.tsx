"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

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
  const prefersReduced = useReducedMotion();

  // Quote word-by-word reveal progress: completes well before scrolling away
  const { scrollYProgress: quoteProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "center 0.55"],
  });

  // Section scroll for illustrations slide-in: starts as top of section enters viewport
  const { scrollYProgress: rawSectionProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "center 0.6"],
  });

  // Cinematic story-like motion filter: heavier mass, low stiffness, high damping
  // Removes bouncy springiness completely, producing a silky, slow, float-in momentum
  const sectionProgress = useSpring(rawSectionProgress, {
    mass: 1.2,
    stiffness: 35,
    damping: 30,
    restDelta: 0.0005,
  });

  // Desktop slide-in: cinematic S-curve glide with subtle inward drift at the end
  const leftXDesktop = useTransform(
    sectionProgress,
    [0, 0.2, 0.5, 0.75, 1],
    ["-40vw", "-28vw", "-10vw", "0vw", "2.5vw"]
  );
  const rightXDesktop = useTransform(
    sectionProgress,
    [0, 0.2, 0.5, 0.75, 1],
    ["40vw", "28vw", "10vw", "0vw", "-2.5vw"]
  );

  // Subtle story-like scale & gentle rotation as the hands glide into view
  const leftRotateDesktop = useTransform(
    sectionProgress,
    [0, 0.75, 1],
    [-4, 0, 1]
  );
  const rightRotateDesktop = useTransform(
    sectionProgress,
    [0, 0.75, 1],
    [4, 0, -1]
  );
  const imagesScaleDesktop = useTransform(
    sectionProgress,
    [0, 0.4, 0.75, 1],
    [0.92, 0.97, 1, 1.02]
  );

  // Gentle, gradual fade-in so there is no sudden flash
  const imagesOpacityDesktop = useTransform(
    sectionProgress,
    [0, 0.15, 0.45, 0.75],
    [0, 0.35, 0.8, 1]
  );

  // Mobile slide-in: soft, gradual story glide
  const leftXMobile = useTransform(
    sectionProgress,
    [0, 0.3, 0.75, 1],
    ["-22vw", "-12vw", "0vw", "1vw"]
  );
  const rightXMobile = useTransform(
    sectionProgress,
    [0, 0.3, 0.75, 1],
    ["22vw", "12vw", "0vw", "-1vw"]
  );
  const imagesOpacityMobile = useTransform(
    sectionProgress,
    [0, 0.2, 0.6],
    [0, 0.25, 0.45]
  );

  return (
    <section
      ref={ref}
      className="relative min-h-[80svh] flex flex-col justify-center items-center py-24 sm:py-32 border-t border-b border-white/[0.08] bg-[#0B0B0A] overflow-hidden w-full"
    >
      {/* Background illustration - Left (Design side: hand holding pen) */}
      <motion.div
        aria-hidden="true"
        style={
          prefersReduced
            ? { x: "2vw", opacity: 1 }
            : {
                x: leftXDesktop,
                rotate: leftRotateDesktop,
                scale: imagesScaleDesktop,
                opacity: imagesOpacityDesktop,
              }
        }
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-[54vw] max-w-[820px] pointer-events-none z-0 mix-blend-lighten [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_65%,rgba(0,0,0,0)_100%)] [-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,1)_65%,rgba(0,0,0,0)_100%)] select-none will-change-transform origin-center"
      >
        <Image
          src="/images/philosophy-left.png"
          alt=""
          width={912}
          height={895}
          sizes="(max-width: 768px) 90vw, 54vw"
          className="w-full h-auto object-contain pointer-events-none"
        />
      </motion.div>

      {/* Mobile Background illustration - Left (Top-Left anchored) */}
      <motion.div
        aria-hidden="true"
        style={
          prefersReduced
            ? { x: "0vw", opacity: 0.45 }
            : {
                x: leftXMobile,
                opacity: imagesOpacityMobile,
              }
        }
        className="md:hidden absolute -left-8 -top-3 w-[90vw] pointer-events-none z-0 mix-blend-lighten [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_55%,rgba(0,0,0,0)_100%)] [-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,1)_55%,rgba(0,0,0,0)_100%)] select-none will-change-transform"
      >
        <Image
          src="/images/philosophy-left.png"
          alt=""
          width={912}
          height={895}
          sizes="(max-width: 768px) 90vw, 54vw"
          className="w-full h-auto object-contain pointer-events-none"
        />
      </motion.div>

      {/* Background illustration - Right (Dev side: hand with code windows) */}
      <motion.div
        aria-hidden="true"
        style={
          prefersReduced
            ? { x: "-2vw", opacity: 1 }
            : {
                x: rightXDesktop,
                rotate: rightRotateDesktop,
                scale: imagesScaleDesktop,
                opacity: imagesOpacityDesktop,
              }
        }
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[54vw] max-w-[820px] pointer-events-none z-0 mix-blend-lighten [mask-image:linear-gradient(to_left,rgba(0,0,0,1)_65%,rgba(0,0,0,0)_100%)] [-webkit-mask-image:linear-gradient(to_left,rgba(0,0,0,1)_65%,rgba(0,0,0,0)_100%)] select-none will-change-transform origin-center"
      >
        <Image
          src="/images/philosophy-right.png"
          alt=""
          width={912}
          height={895}
          sizes="(max-width: 768px) 90vw, 54vw"
          className="w-full h-auto object-contain pointer-events-none"
        />
      </motion.div>

      {/* Mobile Background illustration - Right (Bottom-Right anchored) */}
      <motion.div
        aria-hidden="true"
        style={
          prefersReduced
            ? { x: "0vw", opacity: 0.45 }
            : {
                x: rightXMobile,
                opacity: imagesOpacityMobile,
              }
        }
        className="md:hidden absolute -right-8 -bottom-3 w-[90vw] pointer-events-none z-0 mix-blend-lighten [mask-image:linear-gradient(to_left,rgba(0,0,0,1)_55%,rgba(0,0,0,0)_100%)] [-webkit-mask-image:linear-gradient(to_left,rgba(0,0,0,1)_55%,rgba(0,0,0,0)_100%)] select-none will-change-transform"
      >
        <Image
          src="/images/philosophy-right.png"
          alt=""
          width={912}
          height={895}
          sizes="(max-width: 768px) 90vw, 54vw"
          className="w-full h-auto object-contain pointer-events-none"
        />
      </motion.div>

      {/* Foreground Quote Block */}
      <div className="relative z-10 mx-auto w-fit max-w-[1440px] px-6 sm:px-12 md:px-16 flex flex-col items-center">
        <div className="flex flex-col gap-5 w-fit">
          <span className="font-mono text-[18px] text-[#F14417] tracking-wider text-left self-start select-none">
            {"/* 01 */"}
          </span>
          <blockquote className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.14] tracking-[-0.035em] text-[#F5F4F1] max-w-[24ch] text-center drop-shadow-[0_4px_24px_rgba(11,11,10,0.8)]">
            {WORDS.map((w, i) => (
              <Word
                key={i}
                text={w.text}
                accent={w.accent}
                index={i}
                total={WORDS.length}
                progress={quoteProgress}
              />
            ))}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
