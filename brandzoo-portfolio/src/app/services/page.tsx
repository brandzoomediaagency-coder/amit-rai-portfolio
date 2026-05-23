import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { services } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Digital Marketing & Website Development Services",
  description:
    "Explore Brandzoo Media services across Performance Marketing, Meta Ads, Google Ads, PPC, SEO & AI Optimization, UGC video, influencer marketing, lead generation, funnel optimization, app marketing, branding, and modern website development.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Digital Marketing & Website Development Services by Amit Rai",
    description:
      "Full-funnel growth services: performance marketing, SEO, lead generation, social media, and high-converting website development.",
    url: "https://brandzoomedia.in/services",
  },
};

export default function ServicesPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05070B] px-4 pb-16 pt-28 sm:pb-24 sm:pt-32 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(67,217,255,0.12),transparent_30%),radial-gradient(circle_at_18%_72%,rgba(167,249,80,0.08),transparent_26%)]" />
      <div className="relative mx-auto max-w-7xl">
        <Badge className="rounded-md border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
          Services
        </Badge>
        <h1 className="mt-6 max-w-4xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
          Growth services engineered for acquisition, conversion, and measurable scale.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
          From performance marketing and SEO to modern conversion-focused website
          development — choose focused execution or a full-funnel growth system.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-md border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.075]"
              >
                <div className="flex items-start justify-between">
                  <span className="grid size-11 place-items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
                    <Icon className="size-5" />
                  </span>
                  {service.featured ? (
                    <Badge className="rounded-md border-amber-300/25 bg-amber-300/10 text-[10px] uppercase tracking-[0.16em] text-amber-100">
                      Most requested
                    </Badge>
                  ) : null}
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-white">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/58">{service.summary}</p>
                <p className="mt-4 line-clamp-3 text-sm leading-6 text-cyan-50/85">
                  {service.whyItMatters}
                </p>
                <div className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-200">
                  View service{" "}
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
