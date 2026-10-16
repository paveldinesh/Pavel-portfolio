"use client";

import { motion } from "framer-motion";

export default function Contact() {
  const socials = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/pavel-dinesh-9a727b238" },
  ];

  return (
    <footer id="contact" className="pt-24 sm:pt-36 pb-12 px-6 sm:px-12 max-w-[1260px] mx-auto relative z-10 border-t border-white/[0.08] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center gap-6"
      >
        <span className="font-mono text-[18px] text-[#F14417]">/contact</span>
        <h2 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl tracking-[-0.04em] text-[#F5F4F1] max-w-[16ch] leading-[1.05]">
          Let’s build something worth shipping.
        </h2>

        <a
          href="mailto:paveldinesh111@gmail.com"
          className="font-display font-semibold text-2xl sm:text-4xl text-[#F5F4F1] border-b-2 border-[#F14417] pb-2 hover:text-[#F14417] transition-all mt-4 mb-6 inline-block"
        >
          paveldinesh111@gmail.com
        </a>

        <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[18px] text-[#A09D95] hover:text-[#F14417] transition-colors"
            >
              {s.name} <span className="text-[#F14417]">↗</span>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Footer Bottom Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-white/[0.06] text-[18px] font-mono text-[#A09D95]">
        <span>© 2026 Pavel Dinesh. All rights reserved.</span>
        <a href="#top" className="hover:text-[#F14417] transition-colors">
          Back to top <span className="text-[#F14417]">↑</span>
        </a>
      </div>
    </footer>
  );
}
