"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Canvas } from "@react-three/fiber";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CommonLighting } from "./value-scenes/CommonLighting";
import { ResearchScene } from "./value-scenes/ResearchScene";
import { DesignScene } from "./value-scenes/DesignScene";
import { ShipScene } from "./value-scenes/ShipScene";

interface ValueVisualProps {
  activeTab: number; // 0: Research, 1: Design, 2: Ship
  isInView: boolean;
}

const POSTERS = [
  { id: "research", src: "/media/value/research.webp", alt: "User Research Glossy Sphere with Converging Signals" },
  { id: "design", src: "/media/value/design.webp", alt: "Product Design Black Glass Stacked Panels" },
  { id: "ship", src: "/media/value/ship.webp", alt: "Frontend UI Faceted Obsidian Arrow and Ring" },
];

export default function ValueVisual({ activeTab, isInView }: ValueVisualProps) {
  const prefersReduced = useReducedMotion();
  const [isLowPower, setIsLowPower] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isDocumentHidden, setIsDocumentHidden] = useState(false);
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    // Check low-power hardware constraints
    if (typeof navigator !== "undefined") {
      const lowCores = navigator.hardwareConcurrency != null && navigator.hardwareConcurrency <= 4;
      const lowMem = (navigator as any).deviceMemory != null && (navigator as any).deviceMemory <= 4;
      if (lowCores || lowMem) {
        setIsLowPower(true);
      }
    }

    // Check WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    // Track tab visibility to pause rendering when document is hidden
    const handleVisibility = () => {
      setIsDocumentHidden(document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const useFallback = prefersReduced || isLowPower || !hasWebGL;

  // Active poster for fallback
  const currentPoster = POSTERS[activeTab] || POSTERS[0];

  return (
    <div className="relative w-full aspect-square max-h-[300px] flex items-center justify-center select-none">
      {/* Fake Radial Glow behind the canvas (no heavy bloom pass) */}
      <div
        className="absolute inset-0 pointer-events-none rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(241,68,23,0.12)_0%,transparent_72%)] blur-2xl -z-10"
        aria-hidden="true"
      />

      {/* Fallback Posters: shown while loading, on reduced motion, low power, or no WebGL */}
      {(!canvasReady || useFallback) && (
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPoster.id}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <Image
                src={currentPoster.src}
                alt={currentPoster.alt}
                fill
                priority
                sizes="(max-width: 768px) 260px, 300px"
                className="object-contain pointer-events-none"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* Real-time 3D Scene */}
      {!useFallback && (
        <div
          className={`absolute inset-0 z-10 transition-opacity duration-500 ${
            canvasReady ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden="true"
        >
          <Canvas
            camera={{ position: [0, 0, 5.2], fov: 42 }}
            dpr={[1, 1.5]}
            gl={{
              alpha: true,
              antialias: true,
              powerPreference: "high-performance",
            }}
            frameloop={isInView && !isDocumentHidden ? "always" : "never"}
            onCreated={() => setCanvasReady(true)}
            className="w-full h-full"
          >
            <CommonLighting />
            <ResearchScene active={activeTab === 0} />
            <DesignScene active={activeTab === 1} />
            <ShipScene active={activeTab === 2} />
          </Canvas>
        </div>
      )}
    </div>
  );
}
