export default function MarqueeTicker() {
  const skills = [
    "UI/UX Design",
    "Design Systems",
    "Frontend UI Development",
    "Figma",
    "Prototyping",
    "Brand Direction",
    "Dashboard Design",
    "AI-Assisted Development",
  ];

  const duplicated = [...skills, ...skills];

  return (
    <div className="w-full overflow-hidden border-t border-b border-white/[0.08] bg-[#121211] relative z-10 py-5 select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {duplicated.map((item, idx) => (
          <span
            key={idx}
            className="font-display font-semibold text-xl sm:text-2xl md:text-3xl tracking-tight text-[#4E4C47] flex items-center gap-8"
          >
            <span>{item}</span>
            <span className="font-mono text-sm text-[#7A7873]">{"//"}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
