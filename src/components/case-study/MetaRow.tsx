"use client";

export interface MetaItem {
  label: string;
  value: string;
}

export interface MetaRowProps {
  items: MetaItem[];
  className?: string;
}

export function MetaRow({ items, className = "" }: MetaRowProps) {
  return (
    <div
      className={`grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 lg:pt-10 border-t border-white/[0.08] min-w-0 ${className}`}
    >
      {items.map((m) => (
        <div key={m.label} className="min-w-0">
          <span className="font-mono text-xs sm:text-sm text-[#8E8B85] block mb-1 uppercase tracking-wider">
            {m.label}
          </span>
          <span className="text-[16px] sm:text-[18px] text-[#F5F4F1] font-medium leading-snug break-words block">
            {m.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export default MetaRow;
