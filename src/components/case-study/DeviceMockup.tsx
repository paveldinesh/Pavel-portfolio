"use client";

import { useState } from "react";
import Image from "next/image";

export interface DeviceMockupProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  maxWidth?: string;
  priority?: boolean;
  hideIfMissing?: boolean;
}

export function DeviceMockup({
  src,
  alt,
  caption,
  className = "",
  maxWidth = "max-w-[340px] sm:max-w-[360px]",
  priority = false,
  hideIfMissing = false,
}: DeviceMockupProps) {
  const [missing, setMissing] = useState(false);
  const fileName = src.split("/").pop();

  if (missing && hideIfMissing) return null;

  return (
    <div className={`flex flex-col items-center justify-center w-full ${className}`}>
      {/* Outer Phone Shell - Precision Bezel & Chamfer */}
      <div
        className={`relative w-full ${maxWidth} rounded-[46px] p-[8px] sm:p-[10px] bg-gradient-to-b from-[#383840] via-[#1e1e22] to-[#131315] ring-1 ring-white/20 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.95),0_0_0_1px_rgba(255,255,255,0.08),0_0_50px_rgba(241,68,23,0.06)]`}
      >
        {/* Hardware side buttons */}
        <div className="absolute -left-[3px] top-24 w-[3px] h-8 bg-[#44444c] rounded-l" />
        <div className="absolute -left-[3px] top-36 w-[3px] h-8 bg-[#44444c] rounded-l" />
        <div className="absolute -right-[3px] top-28 w-[3px] h-12 bg-[#44444c] rounded-r" />

        {/* Inner Phone Screen Frame - Exact 393/852 iPhone Aspect Ratio */}
        <div className="relative w-full aspect-[393/852] rounded-[32px] overflow-hidden bg-[#0A0A0A] ring-1 ring-white/10 shadow-inner flex items-center justify-center">
          {missing ? (
            <div className="absolute inset-4 rounded-[24px] border border-dashed border-white/20 flex flex-col items-center justify-center gap-1 text-center px-4">
              <span className="font-mono text-xs text-[#F14417]">DEVICE SLOT</span>
              <span className="font-mono text-xs text-[#A09D95] break-all">{fileName}</span>
            </div>
          ) : (
            <>
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-contain object-center"
                priority={priority}
                onError={() => setMissing(true)}
              />
              {/* Subtle Screen Bevel Glass Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.025] to-transparent pointer-events-none z-10" />
            </>
          )}
        </div>
      </div>

      {caption && (
        <span className="font-mono text-sm text-[#7A7873] mt-5 text-center max-w-[42ch]">
          {caption}
        </span>
      )}
    </div>
  );
}

export default DeviceMockup;

