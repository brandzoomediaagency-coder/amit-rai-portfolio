import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, CheckCircle2, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts, brand, getBlogPost } from "@/lib/data/site";
import {
  articleSchema,
  breadcrumbSchema,
  serializeJsonLd,
} from "@/lib/seo/schema";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://brandzoomedia.in/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [brand.name],
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd([
            articleSchema(post),
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Blog", url: "/blog" },
              { name: post.title, url: `/blog/${post.slug}` },
            ]),
          ]),
        }}
      />
      <article className="relative min-h-screen overflow-hidden bg-[#05070B] px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(67,217,255,0.12),transparent_30%),radial-gradient(circle_at_18%_72%,rgba(167,249,80,0.07),transparent_26%)]" />
        <div className="relative mx-auto max-w-3xl">
          <Badge className="rounded-md border-cyan-300/25 bg-cyan-300/10 text-[11px] uppercase tracking-[0.18em] text-cyan-100">
            {post.category}
          </Badge>
          <h1 className="mt-5 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/62">{post.excerpt}</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-mono uppercase tracking-[0.18em] text-white/45">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="size-3.5" />
              {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="size-3.5" />
              {post.readTime}
            </span>
            <span>By {brand.name}</span>
          </div>

          <div className="mt-10 rounded-md border border-cyan-300/15 bg-cyan-300/[0.06] p-6 backdrop-blur-xl">
            <p className="text-base leading-8 text-white/82">{post.intro}</p>
          </div>

          <div className="mt-10 grid gap-8">
            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-semibold leading-snug tracking-[-0.01em] text-white sm:text-3xl">
                  {section.heading}
                </h2>
                <p className="mt-4 text-base leading-8 text-white/68">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-md border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-200">
              Key takeaways
            </p>
            <div className="mt-5 grid gap-3">
              {post.takeaways.map((takeaway) => (
                <div key={takeaway} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-lime-200" />
                  <p className="text-sm leading-7 text-white/72">{takeaway}</p>
                </div>
              ))}
            </div>
            <Button
              asChild
              className="mt-7 rounded-md bg-gradient-to-r from-cyan-300 to-cyan-200 text-slate-950 hover:from-cyan-200 hover:to-cyan-100"
            >
              <Link href="/contact">
                Discuss growth strategy <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          {related.length ? (
            <div className="mt-16">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
                Continue reading
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group block h-full rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/35 hover:bg-white/[0.07]"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                      {p.category}
                    </p>
                    <h3 className="mt-3 font-semibold leading-6 text-white">
                      {p.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/55">
                      {p.excerpt}
                    </p>
                    <p className="mt-4 inline-flex items-center gap-2 text-sm text-cyan-200">
                      Read{" "}
                      <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </article>
    </>
  );
}
