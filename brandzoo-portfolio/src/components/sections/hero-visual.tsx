"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroScene = dynamic(
  () => import("@/components/three/hero-scene").then((module) => module.HeroScene),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full animate-pulse bg-[radial-gradient(circle_at_50%_50%,rgba(67,217,255,0.22),transparent_42%)]" />
    ),
  },
);

export function HeroVisual() {
  const [shouldLoadScene, setShouldLoadScene] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(
      "(min-width: 640px) and (prefers-reduced-motion: no-preference)",
    );
    const update = () => setShouldLoadScene(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_32%,rgba(67,217,255,0.24),transparent_34%),radial-gradient(circle_at_82%_68%,rgba(167,249,80,0.13),transparent_28%),radial-gradient(circle_at_28%_28%,rgba(255,79,216,0.14),transparent_32%)]" />
      {shouldLoadScene ? (
        <div className="absolute inset-y-24 right-[-42%] w-[980px] max-w-none opacity-55 sm:right-[-34%] lg:right-[-22%] xl:right-[-12%]">
          <HeroScene />
        </div>
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#05070B_0%,#05070B_44%,rgba(5,7,11,0.68)_70%,#05070B_100%)]" />
    </div>
  );
}
