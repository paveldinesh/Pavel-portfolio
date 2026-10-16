interface RollTextProps {
  children: string;
  className?: string;
}

/**
 * Letter-by-letter roll on hover (the button effect from the template).
 * The PARENT link/button must have the `group/roll` class so hovering
 * anywhere on it triggers the roll.
 */
export default function RollText({ children, className = "" }: RollTextProps) {
  const chars = children.split("");

  const ease = "ease-[cubic-bezier(0.65,0.05,0.36,1)]";

  return (
    <span className={`relative inline-flex overflow-hidden leading-[1.25] ${className}`}>
      <span className="sr-only">{children}</span>
      <span className="flex" aria-hidden="true">
        {chars.map((c, i) => (
          <span
            key={i}
            className={`inline-block transition-transform duration-300 ${ease} group-hover/roll:-translate-y-full`}
            style={{ transitionDelay: `${i * 18}ms` }}
          >
            {c === " " ? "\u00A0" : c}
          </span>
        ))}
      </span>
      <span className="absolute inset-0 flex" aria-hidden="true">
        {chars.map((c, i) => (
          <span
            key={i}
            className={`inline-block translate-y-full transition-transform duration-300 ${ease} group-hover/roll:translate-y-0`}
            style={{ transitionDelay: `${i * 18}ms` }}
          >
            {c === " " ? "\u00A0" : c}
          </span>
        ))}
      </span>
    </span>
  );
}
