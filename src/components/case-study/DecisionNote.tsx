"use client";

export interface DecisionNoteProps {
  decision: string;
  why: string;
  tradeoff: string;
}

export function DecisionNote({ decision, why, tradeoff }: DecisionNoteProps) {
  return (
    <div className="rounded-xl bg-[#121211] border border-white/[0.08] divide-y divide-white/[0.06] overflow-hidden min-w-0">
      {[
        { label: "DECISION", text: decision, accent: true },
        { label: "WHY", text: why, accent: false },
        { label: "TRADE-OFF", text: tradeoff, accent: false },
      ].map((row) => (
        <div key={row.label} className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-2 sm:gap-4 items-start">
          <span
            className={`font-mono text-xs pt-0.5 sm:pt-1 tracking-wider ${
              row.accent ? "text-[#F14417] font-semibold" : "text-[#8E8B85]"
            }`}
          >
            {row.label}
          </span>
          <p
            className={`text-[15px] sm:text-[16px] leading-relaxed break-words ${
              row.accent ? "text-[#F5F4F1] font-medium" : "text-[#A09D95]"
            }`}
          >
            {row.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DecisionNote;
