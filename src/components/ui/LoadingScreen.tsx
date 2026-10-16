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
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Ultra-snappy pacing (160ms)
    const wordInterval = setInterval(() => {
      setIndex((prev) => {
        if (prev < loadingWords.length - 1) {
          return prev + 1;
        }
        clearInterval(wordInterval);
        setTimeout(() => setIsComplete(true), 200);
        return prev;
      });
    }, 160);

    return () => {
      clearInterval(wordInterval);
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
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0B0B0A] text-[#F5F4F1] p-6 select-none overflow-hidden"
        >
          {/* Ambient subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[#F14417]/10 blur-[130px] pointer-events-none" />

          {/* Centered Loading text with universal unicode system fallback */}
          <div className="flex items-center justify-center z-10 text-center min-h-[140px] px-4">
            <AnimatePresence mode="wait">
              <motion.h1
                key={loadingWords[index]?.text}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                className="font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#FFFFFF] drop-shadow-[0_2px_12px_rgba(255,255,255,0.15)]"
                style={{
                  fontFamily:
                    'var(--font-geist-sans), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Noto Sans", "Hiragino Kaku Gothic ProN", "Microsoft YaHei", "Apple SD Gothic Neo", sans-serif',
                }}
              >
                {loadingWords[index]?.text}
                <span className="text-[#F14417] ml-2 font-mono">.</span>
              </motion.h1>
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
