"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "Services", href: "/services" },
  { label: "Website Projects", href: "/website-projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Certifications", href: "/certifications" },
  { label: "LinkedIn Presence", href: "/#professional-presence" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="border border-white/10 bg-white/5 text-white md:hidden"
          aria-label="Open navigation"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="border-white/10 bg-[#070A10] text-white">
        <SheetHeader>
          <SheetTitle className="text-left text-white">Brandzoo Media</SheetTitle>
        </SheetHeader>
        <nav className="mt-10 grid gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/80 transition hover:border-cyan-300/40 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="mt-2 bg-cyan-300 text-slate-950 hover:bg-cyan-200">
            <Link href="/contact">Book Consultation</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
