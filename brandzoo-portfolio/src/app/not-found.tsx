import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, MessageCircle, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { brand } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you were looking for doesn't exist. Browse services, website projects, case studies, or get in touch with Amit Rai at Brandzoo Media.",
  robots: { index: false, follow: true },
};

const quickLinks = [
  { label: "Home", href: "/", description: "Portfolio overview" },
  { label: "Services", href: "/services", description: "All 15 services" },
  {
    label: "Website Projects",
    href: "/website-projects",
    description: "Live website portfolio",
  },
  { label: "Case Studies", href: "/case-studies", description: "Proof & metrics" },
  { label: "Blog", href: "/blog", description: "Growth insights" },
  { label: "Contact", href: "/contact", description: "Book a strategy call" },
];

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-[#05070B] px-4 pb-16 pt-32 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(67,217,255,0.18),transparent_34%),radial-gradient(circle_at_22%_72%,rgba(167,249,80,0.10),transparent_28%)]" />
      <div className="relative mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[1fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-100">
            <Search className="size-3.5" />
            404 · Page not found
          </span>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl">
            This page took a detour.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/62">
            The URL you opened doesn&apos;t exist on this portfolio. Try a
            popular link, or send a message — I&apos;ll point you to the right
            page.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              className="rounded-md bg-gradient-to-r from-cyan-300 to-cyan-200 text-slate-950 hover:from-cyan-200 hover:to-cyan-100"
            >
              <Link href="/">
                <Home className="size-4" />
                Back to home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-md border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
            >
              <Link
                href={brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-4" />
                WhatsApp me
              </Link>
            </Button>
          </div>
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-200">
            Popular sections
          </p>
          <div className="mt-5 grid gap-2.5">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-center justify-between gap-4 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:border-cyan-300/35 hover:bg-white/[0.07]"
              >
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-white">
                    {link.label}
                  </span>
                  <span className="text-xs text-white/50">
                    {link.description}
                  </span>
                </span>
                <ArrowRight className="size-4 text-white/40 transition group-hover:translate-x-1 group-hover:text-cyan-200" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
