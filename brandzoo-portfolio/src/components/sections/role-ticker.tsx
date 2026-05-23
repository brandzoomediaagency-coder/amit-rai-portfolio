"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

import { roles } from "@/lib/data/site";

export function RoleTicker() {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, []);

  if (shouldReduceMotion) {
    return (
      <span className="inline-block bg-gradient-to-r from-cyan-200 via-white to-lime-200 bg-clip-text text-transparent">
        {roles[index]}
      </span>
    );
  }

  return (
    <span className="relative inline-grid min-h-8 min-w-0 overflow-hidden align-bottom sm:min-w-[440px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ y: 24, opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -24, opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="bg-gradient-to-r from-cyan-200 via-white to-lime-200 bg-clip-text text-transparent"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
