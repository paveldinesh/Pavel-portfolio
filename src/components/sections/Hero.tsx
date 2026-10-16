"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RollText from "@/components/ui/RollText";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // Scroll effect from the template: the hero image starts full-bleed and
  // is cut into an angled, rounded shape as you scroll away from it.
  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    if (!section || !bg) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bg,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          borderRadius: "0 0 0 0",
          yPercent: 0,
        },
        {
          clipPath: "polygon(14% 0%, 86% 0%, 100% 88%, 0% 96%)",
          borderRadius: "0 0 40% 10%",
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const items = [
    "UI/UX Design",
    "Design Systems",
    "Frontend UI Development",
    "Figma",
    "Prototyping",
    "Brand Direction",
    "Dashboard Design",
    "AI-Assisted Development",
    "UI/UX Design",
    "Design Systems",
    "Frontend UI Development",
    "Figma",
    "Prototyping",
    "Brand Direction",
    "Dashboard Design",
    "AI-Assisted Development",
  ];

  return (
    <section ref={sectionRef} className="relative min-h-[100svh] flex flex-col justify-between pt-24 sm:pt-28 pb-0 px-6 sm:px-12 md:px-16 w-full overflow-hidden bg-[#0B0B0A]">
      {/* Background Hero Image (Shadows.png) */}
      <div
        ref={bgRef}
        className="absolute inset-0 z-0 bg-cover bg-center md:bg-[center_top_30%] bg-no-repeat opacity-90 pointer-events-none will-change-transform"
        style={{ backgroundImage: `url('/images/Shadows.png')` }}
      />
      {/* Subtle atmospheric vignette and gradient for text readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0B0B0A]/90 via-[#0B0B0A]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(11,11,10,0.4)_50%,#0B0B0A_100%)] pointer-events-none" />

      {/* Main Hero Row: Statement Headline positioned on the left */}
      <div className="relative z-10 flex flex-col justify-center pt-24 sm:pt-32 md:pt-40 pb-16 w-full max-w-[1720px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start max-w-4xl"
        >
          {/* Editorial Headline */}
          <h1 className="font-body font-normal text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[84px] leading-[1.12] tracking-[-0.035em] text-white flex flex-col w-fit">
            {/* Line 1: (About me) on left, I'm Pavel Dinesh right-aligned */}
            <div className="flex items-center justify-between w-full">
              <span className="font-body text-lg sm:text-2xl md:text-3xl font-normal text-[#A09D95] tracking-tight whitespace-nowrap select-none mr-4">
                (About me)
              </span>
              <span className="block whitespace-nowrap text-right">I&apos;m Pavel Dinesh,</span>
            </div>

            {/* Line 2: a Digital Product Designer */}
            <span className="block whitespace-nowrap text-left">a Digital Product Designer</span>

            {/* Line 3: based in India. */}
            <span className="block whitespace-nowrap text-left">based in India.</span>
          </h1>
        </motion.div>
      </div>

      {/* Bottom Status & CTA Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 flex items-center justify-between w-full pt-4 pb-5 text-[18px] font-mono text-[#A09D95]"
      >
        <span className="select-none tracking-wider text-[#A09D95]">
          /<span className="text-[#F14417]">2026</span>/
        </span>

        <a
          href="#work"
          className="inline-flex items-center gap-1.5 text-[#A09D95] hover:text-[#F14417] transition-colors select-none text-[18px]"
        >
          <span>Scroll down</span>
          <span className="text-[#F14417]">↓</span>
        </a>

        <a
          href="#contact"
          className="group/roll inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full border border-[#F14417]/50 bg-[#F14417]/10 backdrop-blur-md text-[18px] font-mono tracking-wider text-[#F5F4F1] hover:border-[#F14417] hover:bg-[#F14417] hover:text-white transition-all shadow-[0_0_25px_rgba(241,68,23,0.25)]"
        >
          <RollText>START THE PROJECT</RollText>
          <span className="text-[18px]">↗</span>
        </a>
      </motion.div>

      {/* Embedded Marquee Ticker at bottom of hero */}
      <div className="-mx-6 sm:-mx-12 md:-mx-16 overflow-hidden border-t border-b border-white/[0.08] bg-[#121211]/80 backdrop-blur-sm relative z-10 py-4 select-none">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {items.map((item, idx) => (
            <span
              key={idx}
              className="font-display font-semibold text-[18px] sm:text-2xl md:text-3xl tracking-tight text-[#8E8B83] flex items-center gap-8"
            >
              <span>{item}</span>
              <span className="font-mono text-[18px] text-[#A09D95]">{"//"}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
