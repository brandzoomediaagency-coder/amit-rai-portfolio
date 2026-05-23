import type { Metadata } from "next";
import { LineChart } from "lucide-react";

import { AdminPageShell } from "@/components/admin/admin-page-shell";
import { AdminTable } from "@/components/admin/admin-table";
import { caseStudies } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Manage Case Studies",
  robots: { index: false, follow: false },
};

export default function AdminCaseStudiesPage() {
  return (
    <AdminPageShell
      title="Case Studies"
      description="Add, edit, delete, publish, and SEO-optimize case studies with metrics, screenshots, chart data, strategy breakdowns, and client industries."
      icon={LineChart}
    >
      <AdminTable
        rows={caseStudies.map((study) => ({
          title: study.title,
          industry: study.industry,
          result: study.result,
          metrics: study.metrics.length,
        }))}
      />
    </AdminPageShell>
  );
}
