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
              <span className="font-mono-code text-xs text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                CASE {project.id}
              </span>
              <span className="text-xs text-[#8e8e93]">{project.year}</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-[#1c1c22] hover:bg-[#25252e] text-[#8e8e93] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-8">
            {/* Title & Category */}
            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-[#f5f5f7] mt-1">
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
              <div className="p-4 sm:p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-start gap-3.5">
                <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                    Impact &amp; Key Result
                  </h4>
                  <p className="text-sm sm:text-base text-[#f5f5f7] font-medium mt-0.5">
                    {project.metrics}
                  </p>
                </div>
              </div>
            )}

            {/* Overview & Deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              <div className="md:col-span-2 space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8e8e93]">
                  Project Overview &amp; Execution
                </h4>
                <p className="text-sm sm:text-base text-[#d1d1d6] leading-relaxed">
                  {project.overview || project.description}
                </p>
              </div>

              {project.deliverables && (
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#8e8e93]">
                    Core Deliverables
                  </h4>
                  <ul className="space-y-2">
                    {project.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#8e8e93]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Tags Matrix */}
            <div className="pt-4 border-t border-[#1f1f23] flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-[#18181d] border border-[#26262e] text-[#8e8e93]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-[#1f1f23]">
              <span className="text-xs text-[#8e8e93]">
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-black font-semibold text-xs transition-colors"
              >
                <span>Launch Project Artifact</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
