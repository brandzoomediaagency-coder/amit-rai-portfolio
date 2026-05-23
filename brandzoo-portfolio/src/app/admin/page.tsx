import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, LayoutDashboard } from "lucide-react";

import { AdminPageShell } from "@/components/admin/admin-page-shell";
import { adminModules } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminDashboardPage() {
  return (
    <AdminPageShell
      title="Portfolio CMS Dashboard"
      description="Manage services, projects, case studies, certifications, testimonials, media, blog posts, SEO settings, and inquiries from a Supabase-backed admin structure."
      icon={LayoutDashboard}
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {adminModules.map((module) => {
          const Icon = module.icon;
          return (
            <Link
              key={module.href}
              href={module.href}
              className="group rounded-md border border-white/10 bg-white/[0.045] p-5 transition hover:border-cyan-300/35 hover:bg-white/[0.07]"
            >
              <div className="flex items-start justify-between">
                <span className="grid size-10 place-items-center rounded-md bg-cyan-300/10 text-cyan-100">
                  <Icon className="size-5" />
                </span>
                <span className="font-mono text-sm text-white/42">{module.count}</span>
              </div>
              <h2 className="mt-5 font-semibold text-white">{module.title}</h2>
              <p className="mt-2 text-sm leading-6 text-white/55">{module.description}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm text-cyan-200">
                Manage <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </AdminPageShell>
  );
}
