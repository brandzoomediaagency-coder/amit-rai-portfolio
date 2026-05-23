import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/layout/mobile-nav";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Websites", href: "/website-projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Certifications", href: "/certifications" },
  { label: "LinkedIn", href: "/#professional-presence" },
  { label: "Insights", href: "/blog" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05070B]/75 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-sm font-semibold text-cyan-200 shadow-[0_0_40px_rgba(67,217,255,0.18)]">
            BZ
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold text-white">Amit Rai</span>
            <span className="block text-xs text-white/50">Brandzoo Media</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-white/62 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden rounded-md bg-white text-slate-950 shadow-[0_0_40px_rgba(255,255,255,0.12)] hover:bg-cyan-100 md:inline-flex"
          >
            <Link href="/contact">
              Hire Me <ArrowUpRight className="size-4" />
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
