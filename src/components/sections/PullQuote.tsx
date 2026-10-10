export default function PullQuote() {
  return (
    <section className="py-24 sm:py-36 px-6 sm:px-12 border-t border-b border-white/[0.08] bg-[#0B0B0A] relative z-10">
      <div className="max-w-[1260px] mx-auto flex flex-col gap-5">
        <span className="font-mono text-[18px] text-[#F14417] tracking-wider">
          {"/* 01 */"}
        </span>
        <blockquote className="font-display font-medium text-3xl sm:text-5xl md:text-6xl lg:text-[70px] leading-[1.1] tracking-[-0.04em] text-[#F5F4F1] max-w-[22ch]">
          “Most designers hand off a file. I hand off a <span className="text-[#F14417]">working interface</span>.”
        </blockquote>
      </div>
    </section>
  );
}
