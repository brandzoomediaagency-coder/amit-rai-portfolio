import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { GrowthChart } from "@/components/charts/growth-chart";
import { Button } from "@/components/ui/button";
import { caseStudies, getCaseStudy } from "@/lib/data/site";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {};
  }

  return {
    title: study.title,
    description: study.summary,
    alternates: {
      canonical: `/case-studies/${study.slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-[#05070B] px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">{study.industry}</p>
        <h1 className="mt-5 max-w-5xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
          {study.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/62">{study.objective}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {study.metrics.map((metric) => (
            <div key={metric.label} className="rounded-md border border-white/10 bg-white/[0.045] p-5">
              <p className="font-mono text-3xl font-semibold text-white">{metric.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.16em] text-white/35">{metric.label}</p>
              <p className="mt-3 text-sm text-lime-200">{metric.trend}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <section className="rounded-md border border-white/10 bg-white/[0.045] p-6">
            <h2 className="text-2xl font-semibold text-white">Strategy breakdown</h2>
            <div className="mt-6 grid gap-4">
              {study.strategy.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 text-cyan-200" />
                  <p className="text-sm leading-7 text-white/62">{item}</p>
                </div>
              ))}
            </div>
            <Button asChild className="mt-8 rounded-md bg-cyan-300 text-slate-950 hover:bg-cyan-200">
              <Link href="/contact">
                Build similar growth <ArrowRight className="size-4" />
              </Link>
            </Button>
          </section>
          <section className="rounded-md border border-white/10 bg-white/[0.045] p-5">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-white/35">
                Performance graph
              </h2>
              <span className="rounded-md bg-lime-300/10 px-2.5 py-1 text-xs text-lime-100">
                {study.result}
              </span>
            </div>
            <GrowthChart data={study.chart} />
          </section>
        </div>
      </div>
    </article>
  );
}
