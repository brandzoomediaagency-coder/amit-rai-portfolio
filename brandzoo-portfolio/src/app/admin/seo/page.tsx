import type { Metadata } from "next";
import { SearchCheck } from "lucide-react";

import { AdminPageShell } from "@/components/admin/admin-page-shell";
import { AdminTable } from "@/components/admin/admin-table";

export const metadata: Metadata = {
  title: "Manage SEO",
  robots: { index: false, follow: false },
};

const seoRows = [
  { route: "/", title: "Amit Rai - Performance Marketing Specialist", schema: "Person, Organization" },
  { route: "/services", title: "Digital Marketing Services", schema: "Service" },
  { route: "/case-studies", title: "Marketing Case Studies", schema: "BreadcrumbList" },
  { route: "/blog", title: "Digital Marketing Insights", schema: "Blog" },
];

export default function AdminSeoPage() {
  return (
    <AdminPageShell
      title="SEO Settings"
      description="Manage dynamic metadata, schema markup, Open Graph images, canonical URLs, robots settings, and sitemap visibility."
      icon={SearchCheck}
    >
      <AdminTable rows={seoRows} />
    </AdminPageShell>
  );
}
