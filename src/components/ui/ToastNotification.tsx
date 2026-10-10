"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

interface ToastNotificationProps {
  message: string;
  isOpen: boolean;
  onClose?: () => void;
}

export default function ToastNotification({ message, isOpen }: ToastNotificationProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-3 px-4 py-3 rounded-full bg-[#16161a] border border-[#2e2e34] shadow-2xl shadow-black/80"
        >
          <div className="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span className="text-sm font-medium text-[#f5f5f7] tracking-tight">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
