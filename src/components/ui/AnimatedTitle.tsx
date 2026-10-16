"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitleProps {
  text: string;
  as?: "h1" | "h2" | "h3";
  className?: string;
}

/**
 * Word-by-word 3D flip-in on scroll (the title effect from the template).
 * Pass the heading's normal Tailwind classes via `className`.
 */
export default function AnimatedTitle({ text, as: Tag = "h2", className = "" }: AnimatedTitleProps) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const words = wrap.querySelectorAll<HTMLElement>(".at-word");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          opacity: 0,
          y: 51,
          z: -60,
          rotateY: 60,
          rotateX: -40,
          transformOrigin: "50% 50% -150px",
        },
        {
          opacity: 1,
          y: 0,
          z: 0,
          rotateY: 0,
          rotateX: 0,
          ease: "power2.inOut",
          duration: 0.9,
          stagger: 0.06,
          scrollTrigger: {
            trigger: wrap,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, wrap);

    return () => ctx.revert();
  }, [text]);

  return (
    <div ref={wrapRef} style={{ perspective: "1000px" }}>
      <Tag className={className}>
        {text.split(" ").map((word, i, arr) => (
          <span key={i}>
            <span className="at-word inline-block will-change-transform">{word}</span>
            {i < arr.length - 1 ? " " : ""}
          </span>
        ))}
      </Tag>
    </div>
  );
}
