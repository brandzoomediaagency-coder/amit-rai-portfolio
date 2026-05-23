"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
};

export function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, {
    once: true,
    margin: "-40px",
    amount: 0.05,
  });
  // SSR-safe initial value: the final number. So even if no animation ever
  // fires (reduced motion, slow JS, IntersectionObserver edge cases), the
  // user always sees the real value instead of "0".
  const [displayValue, setDisplayValue] = useState(value);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (shouldReduceMotion) return;
    if (!isInView || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;
    let frame = 0;
    const totalFrames = 42;
    let raf = 0;

    setDisplayValue(0);
    const animate = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      setDisplayValue(Math.round(value * progress));

      if (frame < totalFrames) {
        raf = window.requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    raf = window.requestAnimationFrame(animate);
    return () => {
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, [isInView, value, shouldReduceMotion]);

  // Failsafe: if for any reason the count-up never fires within 2s,
  // ensure the real value is shown (we already initialise to `value`,
  // but this resets it if `setDisplayValue(0)` ran without subsequent
  // RAF progress — e.g., backgrounded tab).
  useEffect(() => {
    const id = window.setTimeout(() => {
      if (!hasAnimatedRef.current) {
        setDisplayValue(value);
      }
    }, 2000);
    return () => window.clearTimeout(id);
  }, [value]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}
