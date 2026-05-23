import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { blogPosts, getBlogPost } from "@/lib/data/site";
import { articleSchema } from "@/lib/seo/schema";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const takeaways = [
    "Audit tracking and conversion quality before increasing spend.",
    "Separate audience, offer, creative, and landing-page decisions.",
    "Use dashboards to make weekly optimization choices visible.",
  ];

  return (
    <article className="min-h-screen bg-[#05070B] px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }}
      />
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">{post.category}</p>
        <h1 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
          {post.title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-white/62">{post.excerpt}</p>
        <p className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-white/35">
          {post.readTime}
        </p>
        <div className="mt-10 rounded-md border border-white/10 bg-white/[0.045] p-6">
          <h2 className="text-2xl font-semibold text-white">Core framework</h2>
          <p className="mt-4 text-base leading-8 text-white/62">
            This CMS-ready article page is prepared for a rich text editor. In production, the body can come from TipTap JSON or MDX, while metadata, categories, tags, schema, and OG images are managed from the admin panel.
          </p>
          <div className="mt-6 grid gap-4">
            {takeaways.map((takeaway) => (
              <div key={takeaway} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 size-5 text-lime-200" />
                <p className="text-sm leading-7 text-white/62">{takeaway}</p>
              </div>
            ))}
          </div>
          <Button asChild className="mt-8 rounded-md bg-cyan-300 text-slate-950 hover:bg-cyan-200">
            <Link href="/contact">
              Discuss growth strategy <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}
