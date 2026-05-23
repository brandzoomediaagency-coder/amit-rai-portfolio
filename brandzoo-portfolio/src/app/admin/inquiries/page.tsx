import type { Metadata } from "next";
import { Users } from "lucide-react";

import { AdminPageShell } from "@/components/admin/admin-page-shell";
import { AdminTable } from "@/components/admin/admin-table";

export const metadata: Metadata = {
  title: "Manage Inquiries",
  robots: { index: false, follow: false },
};

const inquiries = [
  { name: "Demo Lead", service: "Performance Marketing", budget: "1L - 5L", source: "Website" },
  { name: "Clinic Founder", service: "Meta Ads", budget: "50K - 1L", source: "WhatsApp" },
  { name: "D2C Brand", service: "Google Ads", budget: "5L+", source: "Contact form" },
];

export default function AdminInquiriesPage() {
  return (
    <AdminPageShell
      title="Inquiries"
      description="Track new leads, service interest, budgets, company details, preferred contact method, source, and follow-up status."
      icon={Users}
    >
      <AdminTable rows={inquiries} />
    </AdminPageShell>
  );
}
