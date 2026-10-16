"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingWords = [
  { text: "Loading", lang: "English" },
  { text: "chargement", lang: "French" },
  { text: "Laden", lang: "German" },
  { text: "Cargando", lang: "Spanish" },
  { text: "Caricamento", lang: "Italian" },
  { text: "Carregando", lang: "Portuguese" },
  { text: "読み込み中", lang: "Japanese" },
  { text: "로드 중", lang: "Korean" },
  { text: "加载中", lang: "Chinese" },
  { text: "Загрузка", lang: "Russian" },
  { text: "लोड हो रहा है", lang: "Hindi" },
  { text: "جارٍ التحميل", lang: "Arabic" },
  { text: "Laddar", lang: "Swedish" },
  { text: "Pavel Dinesh", lang: "Portfolio" },
];

export default function LoadingScreen() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Word cycling
    const wordInterval = setInterval(() => {
      setIndex((prev) => {
        if (prev < loadingWords.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 180);

    // Smooth fake percentage ticker
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => setIsComplete(true), 350);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 3;
        return Math.min(100, prev + step);
      });
    }, 60);

    return () => {
      clearInterval(wordInterval);
      clearInterval(progressInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          key="loader-overlay"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-between bg-[#0B0B0A] text-[#F5F4F1] p-8 sm:p-14 select-none overflow-hidden"
        >
          {/* Ambient theme glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#F14417]/10 blur-[130px] pointer-events-none" />

          {/* Top Bar / Meta info */}
          <div className="w-full flex items-center justify-between text-xs sm:text-sm font-mono text-[#A09D95] tracking-widest uppercase z-10">
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-[#F14417] animate-pulse" />
              <span>Initializing System</span>
            </span>
            <span>{loadingWords[index]?.lang}</span>
          </div>

          {/* Center: Changing "Loading" word */}
          <div className="flex flex-col items-center justify-center my-auto z-10 text-center">
            <div className="h-20 sm:h-28 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={loadingWords[index]?.text}
                  initial={{ y: 28, opacity: 0, filter: "blur(6px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -28, opacity: 0, filter: "blur(6px)" }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="font-display font-bold text-4xl sm:text-6xl md:text-7xl tracking-tight text-[#F5F4F1]"
                >
                  {loadingWords[index]?.text}
                  <span className="text-[#F14417] ml-2">.</span>
                </motion.h1>
              </AnimatePresence>
            </div>
            <p className="font-mono text-xs sm:text-sm text-[#A09D95] mt-2 tracking-widest uppercase">
              Portfolio Experience
            </p>
          </div>

          {/* Bottom Bar: Percentage Counter & Minimal Progress Line */}
          <div className="w-full flex flex-col gap-3 z-10 max-w-xl">
            <div className="flex items-baseline justify-between font-mono text-xs sm:text-sm text-[#A09D95]">
              <span>[ Progress ]</span>
              <span className="text-[#F5F4F1] font-bold text-base sm:text-lg">
                {progress}%
              </span>
            </div>
            <div className="w-full h-[2px] bg-white/[0.08] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#F14417]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
