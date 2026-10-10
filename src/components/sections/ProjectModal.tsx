"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#121216] border border-[#2e2e34] shadow-2xl z-10 text-[#f5f5f7] custom-scroll"
        >
          {/* Header Close */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#121216]/90 backdrop-blur-md border-b border-[#1f1f23]">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[18px] text-[#F14417] font-semibold px-3 py-1 rounded bg-[#F14417]/10 border border-[#F14417]/30">
                CASE {project.id}
              </span>
              <span className="text-[18px] text-[#A09D95]">{project.year}</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#1c1c22] hover:bg-[#F14417] text-[#A09D95] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Title & Category */}
            <div>
              <span className="text-[18px] uppercase tracking-wider text-[#F14417] font-semibold">
                {project.category}
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold font-display tracking-tight text-[#f5f5f7] mt-1">
                {project.title}
              </h2>
            </div>

            {/* High-Res Hero Image Preview */}
            <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-[#1f1f23] bg-[#0c0c0e]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Metrics Callout */}
            {project.metrics && (
              <div className="p-5 sm:p-6 rounded-xl bg-[#F14417]/10 border border-[#F14417]/30 flex items-start gap-4">
                <Sparkles className="w-6 h-6 text-[#F14417] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[18px] font-semibold uppercase tracking-wider text-[#F14417]">
                    Impact &amp; Key Result
                  </h4>
                  <p className="text-[18px] text-[#f5f5f7] font-medium mt-1">
                    {project.metrics}
                  </p>
                </div>
              </div>
            )}

            {/* Overview & Deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="md:col-span-2 space-y-3">
                <h4 className="text-[18px] font-semibold uppercase tracking-wider text-[#A09D95]">
                  Project Overview &amp; Execution
                </h4>
                <p className="text-[18px] text-[#d1d1d6] leading-relaxed">
                  {project.overview || project.description}
                </p>
              </div>

              {project.deliverables && (
                <div className="space-y-3">
                  <h4 className="text-[18px] font-semibold uppercase tracking-wider text-[#A09D95]">
                    Core Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {project.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-[18px] text-[#d1d1d6]">
                        <CheckCircle2 className="w-4 h-4 text-[#F14417] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Tags Matrix */}
            <div className="pt-4 border-t border-[#1f1f23] flex flex-wrap gap-2.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[18px] px-4 py-1 rounded-full bg-[#18181d] border border-[#26262e] text-[#A09D95]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-[#1f1f23]">
              <span className="text-[18px] text-[#A09D95]">
                Pavel Dinesh &bull; Design Portfolio
              </span>
              <a
                href={project.link}
                onClick={(e) => {
                  if (project.link === "#") {
                    e.preventDefault();
                    alert("Direct case study link or live demo will open here!");
                  }
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#F14417] hover:bg-[#d63a12] text-white font-semibold text-[18px] transition-colors shadow-[0_0_20px_rgba(241,68,23,0.3)]"
              >
                <span>Launch Project Artifact</span>
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
