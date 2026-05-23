import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Marketing Case Studies",
  description:
    "Explore Brandzoo Media case studies with ROAS, lead generation, SEO, local growth, funnel optimization, and performance marketing results.",
  alternates: {
    canonical: "/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <section className="min-h-screen bg-[#05070B] px-4 pb-16 pt-28 sm:pb-24 sm:pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Badge className="rounded-md border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
          Case Studies
        </Badge>
        <h1 className="mt-6 max-w-4xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
          Result stories with strategy, dashboards, and before-after metrics.
        </h1>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-studies/${study.slug}`}
              className="group rounded-md border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.07]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{study.industry}</p>
              <h2 className="mt-5 text-2xl font-semibold leading-8 text-white">{study.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/58">{study.summary}</p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {study.metrics.slice(0, 4).map((metric) => (
                  <div key={metric.label} className="rounded-md border border-white/10 bg-black/20 p-3">
                    <p className="font-mono text-lg font-semibold text-white">{metric.value}</p>
                    <p className="mt-1 text-xs text-white/42">{metric.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan-200">
                Read case study <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
