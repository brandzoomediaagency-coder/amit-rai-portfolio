import Link from "next/link";
import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, LockKeyhole } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type AdminPageShellProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  children: ReactNode;
};

const adminLinks = [
  { label: "Dashboard", href: "/admin" },
  { label: "Case Studies", href: "/admin/case-studies" },
  { label: "Services", href: "/admin/services" },
  { label: "Website Projects", href: "/admin/website-projects" },
  { label: "Blog", href: "/admin/blog" },
  { label: "Media", href: "/admin/media" },
  { label: "Inquiries", href: "/admin/inquiries" },
  { label: "SEO", href: "/admin/seo" },
];

export function AdminPageShell({
  title,
  description,
  icon: Icon,
  children,
}: AdminPageShellProps) {
  return (
    <section className="min-h-screen bg-[#05070B] px-4 pb-24 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="h-fit rounded-md border border-white/10 bg-white/[0.045] p-4">
          <div className="flex items-center gap-3 rounded-md border border-cyan-300/20 bg-cyan-300/10 p-3">
            <LockKeyhole className="size-5 text-cyan-100" />
            <div>
              <p className="text-sm font-semibold text-white">Admin CMS</p>
              <p className="text-xs text-white/45">Supabase-ready</p>
            </div>
          </div>
          <nav className="mt-4 grid gap-2">
            {adminLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2 text-sm text-white/58 transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div>
          <div className="rounded-md border border-white/10 bg-white/[0.045] p-6">
            <Badge className="rounded-md border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
              CMS Control Room
            </Badge>
            <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="grid size-12 place-items-center rounded-md bg-white/5 text-cyan-100">
                  <Icon className="size-6" />
                </span>
                <h1 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-white">
                  {title}
                </h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/58">{description}</p>
              </div>
              <Button className="rounded-md bg-cyan-300 text-slate-950 hover:bg-cyan-200">
                New Entry <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>
          <div className="mt-6">{children}</div>
        </div>
      </div>
    </section>
  );
}
