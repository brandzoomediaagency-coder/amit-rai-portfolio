import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Digital Marketing Insights",
  description:
    "Amit Rai insights on performance marketing, Meta Ads, SEO, lead generation, funnel optimization, and business growth.",
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <section className="min-h-screen bg-[#05070B] px-4 pb-16 pt-28 sm:pb-24 sm:pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Badge className="rounded-md border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
          Insights
        </Badge>
        <h1 className="mt-6 max-w-4xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
          Strategic notes for brands that want stronger marketing decisions.
        </h1>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-md border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.07]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{post.category}</p>
              <h2 className="mt-5 text-2xl font-semibold leading-8 text-white">{post.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/58">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-sm">
                <span className="font-mono text-white/38">{post.readTime}</span>
                <span className="inline-flex items-center gap-2 text-cyan-200">
                  Read <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
