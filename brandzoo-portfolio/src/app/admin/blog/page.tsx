import type { Metadata } from "next";
import { FileText } from "lucide-react";

import { AdminPageShell } from "@/components/admin/admin-page-shell";
import { AdminTable } from "@/components/admin/admin-table";
import { blogPosts } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Manage Blog",
  robots: { index: false, follow: false },
};

export default function AdminBlogPage() {
  return (
    <AdminPageShell
      title="Blog"
      description="Create SEO-optimized insight posts with categories, tags, rich content, canonical URLs, OG images, and internal links."
      icon={FileText}
    >
      <AdminTable
        rows={blogPosts.map((post) => ({
          title: post.title,
          category: post.category,
          read_time: post.readTime,
          slug: post.slug,
        }))}
      />
    </AdminPageShell>
  );
}
