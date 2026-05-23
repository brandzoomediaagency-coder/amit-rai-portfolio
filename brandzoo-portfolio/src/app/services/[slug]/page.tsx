import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { brand, getService, services } from "@/lib/data/site";
import {
  breadcrumbSchema,
  serializeJsonLd,
} from "@/lib/seo/schema";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.title} Services by Amit Rai`,
    description: `${service.whyItMatters} ${service.summary}`,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} - by Amit Rai, Brandzoo Media`,
      description: service.whyItMatters,
      url: `https://brandzoomedia.in/services/${service.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: service.title,
              serviceType: service.title,
              description: service.whyItMatters,
              provider: {
                "@type": "Organization",
                name: brand.company,
                url: brand.website,
              },
              areaServed: ["IN", "AE", "US", "UK", "Global"],
              url: `https://brandzoomedia.in/services/${service.slug}`,
            },
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Services", url: "/services" },
              { name: service.title, url: `/services/${service.slug}` },
            ]),
          ]),
        }}
      />
      <section className="relative min-h-screen overflow-hidden bg-[#05070B] px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(67,217,255,0.14),transparent_30%),radial-gradient(circle_at_18%_72%,rgba(167,249,80,0.08),transparent_26%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Badge className="rounded-md border-cyan-300/25 bg-cyan-300/10 text-[11px] uppercase tracking-[0.18em] text-cyan-100">
                Service
              </Badge>
              <span className="mt-6 grid size-14 place-items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-cyan-100 shadow-[0_0_30px_rgba(67,217,255,0.25)]">
                <Icon className="size-7" />
              </span>
              <h1 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-white/62">{service.summary}</p>

              <div className="mt-6 rounded-md border border-cyan-300/20 bg-cyan-300/[0.06] p-5 backdrop-blur-xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-200">
                  How I help businesses grow
                </p>
                <p className="mt-3 text-base leading-7 text-white/80">
                  {service.whyItMatters}
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild className="rounded-md bg-gradient-to-r from-cyan-300 to-cyan-200 text-slate-950 hover:from-cyan-200 hover:to-cyan-100">
                  <Link href={`/contact?service=${service.slug}`}>
                    Discuss this service <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-md border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                >
                  <Link href="/case-studies">View proof</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-md border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-200">
                  Growth advantages
                </p>
                <div className="mt-5 grid gap-3">
                  {service.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex gap-3 rounded-md border border-white/10 bg-black/20 p-4"
                    >
                      <CheckCircle2 className="mt-0.5 size-5 text-lime-200" />
                      <div>
                        <h2 className="font-semibold text-white">{benefit}</h2>
                        <p className="mt-2 text-sm leading-6 text-white/55">
                          Built into a campaign system with tracking, reporting, and optimization loops.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-md border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-200">
                  What you get
                </p>
                <div className="mt-5 grid gap-2.5">
                  {service.deliverables.map((deliverable) => (
                    <div
                      key={deliverable}
                      className="flex items-center gap-3 text-sm leading-6 text-white/72"
                    >
                      <Sparkles className="size-4 text-cyan-200" />
                      {deliverable}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-md border border-amber-200/20 bg-amber-200/10 p-4">
                <p className="text-sm text-amber-100">
                  Featured metric: <span className="font-semibold">{service.metric}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
              Explore more services
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {services
                .filter((s) => s.slug !== service.slug)
                .slice(0, 4)
                .map((s) => {
                  const SIcon = s.icon;
                  return (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="group rounded-md border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-300/35 hover:bg-white/[0.07]"
                    >
                      <span className="grid size-9 place-items-center rounded-md bg-cyan-300/10 text-cyan-100">
                        <SIcon className="size-4" />
                      </span>
                      <p className="mt-3 text-sm font-semibold text-white">{s.title}</p>
                      <p className="mt-1 text-xs text-white/45">{s.metric}</p>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
