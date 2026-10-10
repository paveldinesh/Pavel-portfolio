"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-24 sm:pt-28 pb-10 px-6 sm:px-12 md:px-16 w-full overflow-hidden bg-[#0B0B0A]">
      {/* Background Landscape Rock Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-bottom bg-no-repeat opacity-95 pointer-events-none"
        style={{ backgroundImage: `url('/images/hero-landscape.png')` }}
      />
      {/* Subtle atmospheric vignette gradient */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_20%,transparent_0%,rgba(11,11,10,0.6)_60%,#0B0B0A_100%)] pointer-events-none" />

      {/* Main Hero Row: Left Portrait Card + Right Statement Headline (anchored to left side) */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[560px_1fr] xl:grid-cols-[620px_1fr] items-center gap-10 lg:gap-16 xl:gap-20 pt-16 sm:pt-24 md:pt-32 pb-12 w-full max-w-[1720px] mr-auto ml-0">
        {/* Left Side: Photo / Portrait Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-[560px] xl:max-w-[620px]"
        >
          {/* Card Container scaled up proportionally */}
          <div className="relative w-full aspect-[462/233] rounded-sm overflow-hidden border border-white/[0.14] bg-[#121211] shadow-2xl">
            {/* Portrait Image */}
            <Image
              src="/images/Shadows.png"
              alt="Pavel Dinesh"
              fill
              priority
              sizes="(min-width: 1280px) 620px, (min-width: 1024px) 560px, 100vw"
              className="object-cover object-center grayscale contrast-110 hover:scale-105 transition-transform duration-700"
            />

            {/* Subtle inner dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Right Side: Editorial Statement Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col w-full items-start"
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
        className="relative z-10 flex items-center justify-between w-full pt-4 pb-5 text-xs font-mono text-[#7A7873]"
      >
        <span className="select-none tracking-wider">/2026/</span>

        <a
          href="#work"
          className="inline-flex items-center gap-1.5 text-[#7A7873] hover:text-[#F5F4F1] transition-colors select-none"
        >
          <span>Scroll down</span>
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/20 bg-[#0B0B0A]/80 backdrop-blur-md text-[11px] font-mono tracking-wider text-[#F5F4F1] hover:border-white hover:bg-white hover:text-[#0B0B0A] transition-all"
        >
          <span>START THE PROJECT</span>
          <span className="text-xs">↗</span>
        </a>
      </motion.div>

      {/* Embedded Marquee Ticker at bottom of hero */}
      <div className="-mx-6 sm:-mx-12 md:-mx-16 overflow-hidden border-t border-b border-white/[0.08] bg-[#121211]/80 backdrop-blur-sm relative z-10 py-4 select-none">
        <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
          {[
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
          ].map((item, idx) => (
            <span
              key={idx}
              className="font-display font-semibold text-lg sm:text-xl md:text-2xl tracking-tight text-[#63615B] flex items-center gap-8"
            >
              <span>{item}</span>
              <span className="font-mono text-xs text-[#7A7873]">{"//"}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
