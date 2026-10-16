"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RollText from "@/components/ui/RollText";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const line1X = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const line2X = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const line3X = useTransform(scrollYProgress, [0, 1], [0, -25]);

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
    <section ref={sectionRef} className="relative min-h-[100svh] flex flex-col justify-between pt-24 sm:pt-28 pb-0 w-full overflow-hidden bg-[#0B0B0A]">
      {/* Background Hero Image - Desktop / Tablet */}
      <div
        ref={bgRef}
        className="hidden md:block absolute inset-0 z-0 bg-no-repeat opacity-90 pointer-events-none will-change-transform md:bg-[size:auto_100%] lg:bg-[size:auto_92%] md:bg-[right_5%_center] lg:bg-[right_10%_center]"
        style={{ backgroundImage: `url('/images/hero-portrait.png')` }}
      />

      {/* Background Hero Image - Mobile View */}
      <div
        className="block md:hidden absolute inset-0 z-0 bg-cover bg-[center_20%] bg-no-repeat opacity-60 pointer-events-none will-change-transform"
        style={{ backgroundImage: `url('/images/hero-portrait-mobile.jpg')` }}
      />

      {/* Mobile-specific blur & contrast fade scrim for maximum headline readability */}
      <div className="block md:hidden absolute inset-0 z-[1] backdrop-blur-[2px] bg-gradient-to-b from-[#0B0B0A]/85 via-[#0B0B0A]/75 to-[#0B0B0A] pointer-events-none" />

      {/* Atmospheric vignette and gradient for desktop text readability */}
      <div className="hidden md:block absolute inset-0 z-[1] bg-gradient-to-r from-[#0B0B0A]/90 via-[#0B0B0A]/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_top,transparent_0%,rgba(11,11,10,0.4)_50%,#0B0B0A_100%)] pointer-events-none" />

      {/* Main Content Area constrained to shared container */}
      <div className="relative z-10 flex-1 flex flex-col justify-between w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        {/* Main Hero Row: Statement Headline positioned on the left */}
        <div className="flex-1 flex flex-col justify-start pt-16 sm:pt-20 md:pt-24 pb-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start max-w-4xl"
          >
            {/* Editorial Headline */}
            <h1 className="font-body font-normal text-[26px] xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[72px] 2xl:text-[80px] leading-[1.15] tracking-[-0.035em] text-white flex flex-col w-full max-w-full">
              {/* Line 1: (About me) on left, I'm Pavel Dinesh right-aligned on desktop, close inline on mobile */}
              <motion.div style={{ x: line1X }} className="flex flex-wrap sm:flex-nowrap items-baseline gap-2.5 sm:gap-4 sm:justify-between w-full">
                <span className="font-body text-base sm:text-2xl md:text-3xl font-normal text-[#A09D95] tracking-tight whitespace-nowrap select-none">
                  (About me)
                </span>
                <span className="block whitespace-nowrap">I&apos;m Pavel Dinesh,</span>
              </motion.div>

              {/* Line 2: a UI/UX Designer */}
              <motion.span
                style={{ x: line2X }}
                className="block text-left whitespace-normal sm:whitespace-nowrap"
              >
                a UI/UX Designer
              </motion.span>

              {/* Line 3: & Frontend UI Developer */}
              <motion.span
                style={{ x: line3X }}
                className="block text-left whitespace-normal sm:whitespace-nowrap"
              >
                &amp; Frontend UI Developer
              </motion.span>

              {/* Line 4: based in India. */}
              <motion.span
                style={{ x: line3X }}
                className="block text-left whitespace-normal sm:whitespace-nowrap"
              >
                based in India.
              </motion.span>
            </h1>
          </motion.div>
        </div>

        {/* Bottom Status & CTA Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-between w-full pt-4 pb-6 text-sm sm:text-base md:text-[18px] font-mono text-[#A09D95] mt-auto gap-3 sm:gap-4"
        >
          <span className="hidden sm:inline-block select-none tracking-wider text-[#A09D95] whitespace-nowrap shrink-0">
            /<span className="text-[#F14417]">2026</span>/
          </span>

          <a
            href="#work"
            className="inline-flex items-center gap-1.5 text-[#A09D95] hover:text-[#F14417] transition-colors select-none text-xs sm:text-sm md:text-[18px] whitespace-nowrap shrink-0"
          >
            <span>Scroll down</span>
            <span className="text-[#F14417]">↓</span>
          </a>

          <a
            href="#contact"
            className="group/roll inline-flex items-center gap-2 sm:gap-2.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-[#F14417]/50 bg-[#F14417]/10 backdrop-blur-md text-xs sm:text-sm md:text-[18px] font-mono tracking-wider text-[#F5F4F1] hover:border-[#F14417] hover:bg-[#F14417] hover:text-white transition-all shadow-[0_0_25px_rgba(241,68,23,0.25)] whitespace-nowrap shrink-0"
          >
            <RollText>START THE PROJECT</RollText>
            <span className="text-xs sm:text-sm md:text-[18px]">↗</span>
          </a>
        </motion.div>
      </div>

      {/* Embedded Marquee Ticker at bottom of hero - Full Bleed Seamless Loop */}
      <div className="w-full overflow-hidden border-t border-b border-white/[0.08] bg-[#121211]/80 backdrop-blur-sm relative z-10 py-4 select-none flex">
        <div className="flex shrink-0 items-center gap-8 whitespace-nowrap animate-marquee pr-8" aria-hidden="false">
          {items.map((item, idx) => (
            <span
              key={`track1-${idx}`}
              className="font-display font-semibold text-[18px] sm:text-2xl md:text-3xl tracking-tight text-[#8E8B83] flex items-center gap-8"
            >
              <span>{item}</span>
              <span className="font-mono text-[18px] text-[#A09D95]">{"//"}</span>
            </span>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-8 whitespace-nowrap animate-marquee pr-8" aria-hidden="true">
          {items.map((item, idx) => (
            <span
              key={`track2-${idx}`}
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
