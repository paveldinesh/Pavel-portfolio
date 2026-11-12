"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface NavTarget {
  title: string;
  href: string;
}

export interface ProjectNavProps {
  prev: NavTarget;
  next: NavTarget;
}

export function ProjectNav({ prev, next }: ProjectNavProps) {
  return (
    <section className="pt-12 sm:pt-16 pb-20 sm:pb-24 px-5 sm:px-6 lg:px-12 max-w-[1260px] mx-auto border-t border-white/[0.08] pb-[max(5rem,env(safe-area-inset-bottom))] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 sm:gap-6 py-6 sm:py-8">
        {/* Previous */}
        <Link
          href={prev.href}
          className="min-h-[48px] sm:min-h-[44px] inline-flex items-center justify-center md:justify-start gap-2.5 font-mono text-[14px] sm:text-[15px] text-[#A09D95] hover:text-[#F14417] transition-colors group px-3 py-2 rounded-lg hover:bg-white/[0.04] min-w-0"
        >
          <ArrowLeft className="w-4 h-4 shrink-0 transition-transform group-hover:-translate-x-1" />
          <span className="truncate">Previous: {prev.title}</span>
        </Link>

        {/* Back to Selected Work */}
        <Link
          href="/#work"
          className="min-h-[48px] sm:min-h-[44px] inline-flex items-center justify-center font-mono text-[13px] sm:text-[14px] text-[#A09D95] hover:text-[#F5F4F1] border border-white/10 hover:border-white/25 rounded-full px-5 py-2.5 transition-colors bg-[#121211] whitespace-nowrap justify-self-center"
        >
          Back to Selected work
        </Link>

        {/* Next */}
        <Link
          href={next.href}
          className="min-h-[48px] sm:min-h-[44px] inline-flex items-center justify-center md:justify-end gap-2.5 font-mono text-[14px] sm:text-[15px] text-[#A09D95] hover:text-[#F14417] transition-colors group px-3 py-2 rounded-lg hover:bg-white/[0.04] min-w-0"
        >
          <span className="truncate">Next: {next.title}</span>
          <ArrowRight className="w-4 h-4 shrink-0 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}

export default ProjectNav;
