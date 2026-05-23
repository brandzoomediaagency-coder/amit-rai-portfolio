"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, ArrowLeft, MessageCircle, RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { brand } from "@/lib/data/site";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }, [error]);

  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-[#05070B] px-4 pb-16 pt-32 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(255,90,106,0.16),transparent_34%),radial-gradient(circle_at_22%_72%,rgba(67,217,255,0.10),transparent_28%)]" />
      <div className="relative mx-auto w-full max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-md border border-rose-300/25 bg-rose-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-rose-100">
          <AlertTriangle className="size-3.5" />
          Something went wrong
        </span>
        <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl">
          We hit a small bump.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-white/62">
          An unexpected error stopped this page from loading. Try refreshing — if
          it keeps happening, send a quick WhatsApp and I&apos;ll fix it.
        </p>
        {error.digest ? (
          <p className="mt-3 font-mono text-xs text-white/35">
            Error reference: {error.digest}
          </p>
        ) : null}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            onClick={reset}
            className="rounded-md bg-gradient-to-r from-cyan-300 to-cyan-200 text-slate-950 hover:from-cyan-200 hover:to-cyan-100"
          >
            <RotateCcw className="size-4" />
            Try again
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-md border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/">
              <ArrowLeft className="size-4" />
              Back to home
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="rounded-md text-white/80 hover:bg-white/5 hover:text-white"
          >
            <Link
              href={brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" />
              Tell Amit
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
