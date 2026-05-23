import type { Metadata } from "next";
import { Sparkles } from "lucide-react";

import { AdminPageShell } from "@/components/admin/admin-page-shell";
import { AdminTable } from "@/components/admin/admin-table";
import { services } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Manage Services",
  robots: { index: false, follow: false },
};

export default function AdminServicesPage() {
  return (
    <AdminPageShell
      title="Services"
      description="Manage service pages, icons, benefits, deliverables, SEO metadata, homepage ordering, and conversion CTAs."
      icon={Sparkles}
    >
      <AdminTable
        rows={services.map((service) => ({
          title: service.title,
          slug: service.slug,
          metric: service.metric,
          benefits: service.benefits.length,
        }))}
      />
    </AdminPageShell>
  );
}
