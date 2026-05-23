import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { GrowthChart } from "@/components/charts/growth-chart";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { brand, caseStudies, getCaseStudy } from "@/lib/data/site";
import { breadcrumbSchema, serializeJsonLd } from "@/lib/seo/schema";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {};
  }

  return {
    title: `${study.title} | ${study.industry} Case Study`,
    description: `${study.summary} Result: ${study.result}.`,
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
    openGraph: {
      title: study.title,
      description: study.summary,
      url: `https://brandzoomedia.in/case-studies/${study.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.result,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const related = caseStudies.filter((s) => s.slug !== study.slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd([
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: study.title,
              description: study.summary,
              articleSection: `${study.industry} Case Study`,
              url: `https://brandzoomedia.in/case-studies/${study.slug}`,
              image: "https://brandzoomedia.in/opengraph-image",
              inLanguage: "en-IN",
              author: {
                "@type": "Person",
                "@id": "https://brandzoomedia.in/#amit-rai",
                name: brand.name,
              },
              publisher: {
                "@type": "Organization",
                "@id": "https://brandzoomedia.in/#brandzoo-media",
                name: brand.company,
              },
              about: study.industry,
              mentions: study.metrics.map((m) => ({
                "@type": "Thing",
                name: m.label,
                description: `${m.value} (${m.trend})`,
              })),
            },
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Case Studies", url: "/case-studies" },
              { name: study.title, url: `/case-studies/${study.slug}` },
            ]),
          ]),
        }}
      />
      <article className="relative min-h-screen overflow-hidden bg-[#05070B] px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(67,217,255,0.14),transparent_30%),radial-gradient(circle_at_18%_72%,rgba(167,249,80,0.07),transparent_26%)]" />
        <div className="relative mx-auto max-w-7xl">
          <Badge className="rounded-md border-amber-300/25 bg-amber-300/10 text-[11px] uppercase tracking-[0.18em] text-amber-100">
            {study.industry} · Case Study
          </Badge>
          <h1 className="mt-5 max-w-5xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            {study.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/62">
            {study.objective}
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-md border border-lime-300/25 bg-lime-300/10 px-3 py-2 text-sm font-semibold text-lime-100">
            <CheckCircle2 className="size-4" />
            {study.result}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {study.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-md border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl"
              >
                <p className="font-mono text-3xl font-semibold text-white">
                  {metric.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/35">
                  {metric.label}
                </p>
                <p className="mt-3 text-sm text-lime-200">{metric.trend}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
            <section className="rounded-md border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
              <h2 className="text-2xl font-semibold text-white">
                Strategy breakdown
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/62">
                {study.summary}
              </p>
              <div className="mt-6 grid gap-4">
                {study.strategy.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-cyan-200" />
                    <p className="text-sm leading-7 text-white/72">{item}</p>
                  </div>
                ))}
              </div>
              <Button
                asChild
                className="mt-8 rounded-md bg-gradient-to-r from-cyan-300 to-cyan-200 text-slate-950 hover:from-cyan-200 hover:to-cyan-100"
              >
                <Link href="/contact">
                  Build similar growth <ArrowRight className="size-4" />
                </Link>
              </Button>
            </section>
            <section className="rounded-md border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
              <div className="mb-5 flex items-center justify-between">
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-white/35">
                  Performance graph
                </h2>
                <Badge className="rounded-md bg-lime-300/10 text-lime-100">
                  {study.result}
                </Badge>
              </div>
              <GrowthChart data={study.chart} />
            </section>
          </div>

          {related.length ? (
            <div className="mt-16">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/45">
                More case studies
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/case-studies/${r.slug}`}
                    className="group block h-full rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/35 hover:bg-white/[0.07]"
                  >
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">
                      {r.industry}
                    </p>
                    <h3 className="mt-3 font-semibold leading-6 text-white">
                      {r.result}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/55">
                      {r.objective}
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
