import type { Metadata } from "next";
import { UploadCloud } from "lucide-react";

import { AdminPageShell } from "@/components/admin/admin-page-shell";

export const metadata: Metadata = {
  title: "Manage Media",
  robots: { index: false, follow: false },
};

const buckets = ["certifications", "case-studies", "testimonials", "blog", "brand", "uploads"];

export default function AdminMediaPage() {
  return (
    <AdminPageShell
      title="Media Library"
      description="Upload and manage certificate PDFs, case-study screenshots, client logos, testimonial videos, blog images, brand assets, and OG images."
      icon={UploadCloud}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {buckets.map((bucket) => (
          <div key={bucket} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
            <p className="font-semibold text-white">{bucket}</p>
            <p className="mt-2 text-sm leading-6 text-white/55">
              Supabase Storage bucket prepared for secure admin uploads and public rendering.
            </p>
          </div>
        ))}
      </div>
    </AdminPageShell>
  );
}
