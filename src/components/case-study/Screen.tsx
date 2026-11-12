"use client";

import { useState } from "react";
import Image from "next/image";

export interface ScreenProps {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  priority?: boolean;
  hideIfMissing?: boolean;
  fit?: "cover" | "contain";
  position?: string;
}

export function Screen({
  src,
  alt,
  caption,
  ratio = "aspect-[16/9]",
  priority = false,
  hideIfMissing = false,
  fit = "contain",
  position = "object-center",
}: ScreenProps) {
  const [missing, setMissing] = useState(false);
  const fileName = src.split("/").pop();

  if (missing && hideIfMissing) return null;

  return (
    <div className="w-full flex flex-col gap-3 sm:gap-4 min-w-0">
      <div className="rounded-xl overflow-hidden border border-white/[0.1] bg-[#121211] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.85),0_30px_70px_-20px_rgba(0,0,0,0.9)]">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 h-8 sm:h-9 border-b border-white/[0.08] bg-[#17171a]">
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white/15" />
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white/15" />
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-white/15" />
        </div>

        {/* Screen container */}
        <div className={`relative w-full ${ratio} bg-[#0A0A0A] overflow-hidden`}>
          {missing ? (
            <div className="absolute inset-3 sm:inset-4 rounded-lg border border-dashed border-white/15 flex flex-col items-center justify-center gap-1 text-center px-4 sm:px-6">
              <span className="font-mono text-xs text-[#F14417]">IMAGE SLOT</span>
              <span className="font-mono text-xs sm:text-sm text-[#A09D95] break-all">{fileName}</span>
            </div>
          ) : (
            <Image
              src={src}
              alt={alt}
              fill
              priority={priority}
              sizes="(max-width: 768px) 100vw, (max-width: 1260px) 95vw, 1260px"
              className={`${fit === "contain" ? "object-contain" : "object-cover"} ${position}`}
              onError={() => setMissing(true)}
            />
          )}
        </div>
      </div>
      {caption && (
        <span className="font-mono text-xs sm:text-sm text-[#7A7873] leading-relaxed">
          {caption}
        </span>
      )}
    </div>
  );
}

export default Screen;
