"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CalendarDays, MessageCircle, Phone } from "lucide-react";

import { brand } from "@/lib/data/site";

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const threshold = () =>
      typeof window !== "undefined" ? window.innerHeight * 0.6 : 600;

    let frame = 0;
    const update = () => {
      frame = 0;
      setVisible(window.scrollY > threshold());
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="mobile-cta"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 26 }}
          className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
          aria-label="Quick contact actions"
        >
          <div className="pointer-events-auto mx-auto flex w-full max-w-md items-center gap-2 rounded-2xl border border-white/12 bg-[#05070B]/85 p-2 shadow-[0_18px_60px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
            <Link
              href={brand.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a 30-min strategy call"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-cyan-200 px-3 py-3 text-sm font-semibold text-slate-950 shadow-[0_8px_24px_rgba(67,217,255,0.32)] active:scale-[0.98]"
            >
              <CalendarDays className="size-4" />
              Strategy Call
            </Link>
            <Link
              href={brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${brand.phone}`}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-lime-300/30 bg-lime-300/10 px-3 py-3 text-sm font-semibold text-lime-100 active:scale-[0.98]"
            >
              <MessageCircle className="size-4" />
              <span className="sr-only sm:not-sr-only">WhatsApp</span>
            </Link>
            <Link
              href={`tel:${brand.phoneIntl}`}
              aria-label={`Call ${brand.phone}`}
              className="flex items-center justify-center gap-1.5 rounded-xl border border-white/12 bg-white/[0.06] px-3 py-3 text-sm font-semibold text-white active:scale-[0.98]"
            >
              <Phone className="size-4" />
              <span className="sr-only">Call</span>
            </Link>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
