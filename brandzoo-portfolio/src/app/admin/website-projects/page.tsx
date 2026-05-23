import type { Metadata } from "next";
import { Monitor } from "lucide-react";

import { AdminPageShell } from "@/components/admin/admin-page-shell";
import { AdminTable } from "@/components/admin/admin-table";
import { websiteProjects } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Manage Website Projects",
  robots: { index: false, follow: false },
};

export default function AdminWebsiteProjectsPage() {
  return (
    <AdminPageShell
      title="Website Projects"
      description="Manage the live website portfolio — titles, client/business names, URLs, categories, descriptions, screenshots, technologies, and result/impact for each project."
      icon={Monitor}
    >
      <AdminTable
        rows={websiteProjects.map((project) => ({
          title: project.title,
          client: project.client,
          category: project.category,
          url: project.url,
          tech: project.technologies.join(", "),
          impact: project.impact,
        }))}
      />
    </AdminPageShell>
  );
}
