import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Globe2,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";

import { GrowthChart } from "@/components/charts/growth-chart";
import { AnimatedCounter } from "@/components/sections/animated-counter";
import { ContactForm } from "@/components/sections/contact-form";
import { HeroSpotlight } from "@/components/sections/hero-spotlight";
import { HeroVisual } from "@/components/sections/hero-visual";
import {
  ClientProblemsSection,
  FaqSection,
  IndustriesSection,
  ProcessSection,
  WhyWorkWithMeSection,
} from "@/components/sections/home-extras";
import { Reveal } from "@/components/sections/reveal";
import { RoleTicker } from "@/components/sections/role-ticker";
import {
  WebsiteDevelopmentSection,
  WebsiteProjectsSection,
} from "@/components/sections/website-sections";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  achievements,
  blogPosts,
  brand,
  caseStudies,
  companyFacts,
  certifications,
  dashboardKpis,
  dashboardSeries,
  heroMetrics,
  proofHighlights,
  services,
  skills,
  testimonials,
  trustMetrics,
} from "@/lib/data/site";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <IndustriesSection />
      <BrandSnapshotSection />
      <AboutSection />
      <ClientProblemsSection />
      <ServicesSection />
      <WebsiteDevelopmentSection />
      <WebsiteProjectsSection />
      <WhyWorkWithMeSection />
      <CaseStudiesSection />
      <ProcessSection />
      <CertificationsSection />
      <TestimonialsSection />
      <SkillsSection />
      <DigitalDashboardSection />
      <FaqSection />
      <BlogSection />
      <ContactSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#05070B] pt-24 sm:pt-20">
      <HeroVisual />
      <HeroSpotlight />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px] opacity-25 sm:bg-[size:76px_76px] sm:opacity-30" />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-8 px-4 pb-12 pt-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <Reveal>
            <Badge className="rounded-md border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-[11px] text-cyan-100 sm:text-xs">
              <span className="mr-2 inline-flex size-2 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(167,249,80,0.7)]" />
              Now booking growth retainers for 2026
            </Badge>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 max-w-4xl text-[2rem] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl sm:leading-[0.96] lg:text-6xl xl:text-7xl">
              {brand.heroHeadline}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-3xl text-[15px] leading-7 text-white/68 sm:text-lg">
              {brand.heroCopy}
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-4 text-base font-medium text-white sm:text-2xl">
              <RoleTicker />
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button
                asChild
                size="lg"
                className="h-12 w-full justify-center rounded-md bg-gradient-to-r from-cyan-300 to-cyan-200 px-6 text-slate-950 shadow-[0_10px_40px_rgba(67,217,255,0.35)] transition hover:from-cyan-200 hover:to-cyan-100 sm:w-auto"
              >
                <Link
                  href={brand.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CalendarDays className="size-4" /> Book Strategy Call
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-12 w-full justify-center rounded-md border-white/15 bg-white/5 px-6 text-white hover:bg-white/10 hover:text-white sm:w-auto"
              >
                <Link href="#website-projects">
                  View Website Portfolio <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="h-12 w-full justify-center rounded-md text-white/80 hover:bg-white/5 hover:text-white sm:w-auto"
              >
                <Link href={brand.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" /> WhatsApp Me
                </Link>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.34}>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="group relative overflow-hidden rounded-md border border-white/10 bg-gradient-to-b from-white/[0.075] to-white/[0.025] p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:shadow-[0_24px_80px_rgba(67,217,255,0.14)]"
                >
                  <div className="flex items-center justify-between">
                    <TrendingUp className="size-4 text-cyan-200" />
                    <span className="font-mono text-xs font-medium text-lime-200">
                      {metric.delta}
                    </span>
                  </div>
                  <p className="mt-4 font-mono text-2xl font-semibold text-white sm:text-3xl">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-5 flex flex-col gap-4 rounded-md border border-cyan-300/20 bg-cyan-300/[0.075] p-4 backdrop-blur-xl sm:flex-row sm:items-center">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-md border border-white/15 bg-white/10 shadow-[0_0_30px_rgba(67,217,255,0.18)] sm:size-20">
                <Image
                  src="/amit-rai.jpg"
                  alt="Amit Rai - Digital Marketing Specialist, Website Developer, and CEO of Brandzoo Media"
                  fill
                  sizes="80px"
                  priority
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-lime-200" />
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-100">
                    Founder · CEO · Available for new projects
                  </p>
                </div>
                <p className="mt-1 text-sm font-semibold text-white">
                  Amit Rai · CEO, Brandzoo Media
                </p>
                <p className="mt-1 text-sm leading-6 text-white/72">
                  Delhi / New Delhi · Founded 2018 · Serving brands globally
                </p>
              </div>
              <div className="flex w-full shrink-0 flex-col gap-2 sm:w-fit">
                <Link
                  href={`tel:${brand.phoneIntl}`}
                  aria-label={`Call Amit Rai at ${brand.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-3 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
                >
                  <Phone className="size-4" />
                  {brand.phone}
                </Link>
                <Link
                  href={brand.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Brandzoo Media website"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-white/80 transition hover:bg-white/10"
                >
                  <Globe2 className="size-3.5" />
                  {brand.websiteDisplay}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
          {trustMetrics.map((metric, index) => (
            <Reveal key={metric.label} delay={0.08 * index}>
              <div className="rounded-md border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
                <p className="font-mono text-3xl font-semibold text-white">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </p>
                <p className="mt-1 text-sm text-white/52">{metric.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandSnapshotSection() {
  return (
    <section className="border-y border-white/10 bg-[#071018] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <div className="relative size-20 shrink-0 overflow-hidden rounded-md border border-white/15 bg-white/10 shadow-[0_0_30px_rgba(67,217,255,0.14)] sm:size-24">
                <Image
                  src="/amit-rai.jpg"
                  alt="Amit Rai - CEO of Brandzoo Media"
                  fill
                  sizes="96px"
                  className="object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="size-4 text-cyan-200" />
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">
                    Brand Snapshot
                  </p>
                </div>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-3xl">
                  About Amit Rai & Brandzoo Media.
                </h2>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/58">
                  {brand.companySummary}
                </p>
              </div>
            </div>
            <div className="flex w-full shrink-0 flex-col gap-2 sm:flex-row lg:w-fit">
              <Link
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Brandzoo Media website"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-cyan-300 to-cyan-200 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:from-cyan-200 hover:to-cyan-100"
              >
                <Globe2 className="size-4" />
                Visit Brandzoo Media
                <ExternalLink className="size-4" />
              </Link>
              <Link
                href={`tel:${brand.phoneIntl}`}
                aria-label={`Call ${brand.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                <Phone className="size-4 text-cyan-200" />
                {brand.phone}
              </Link>
            </div>
          </div>
        </Reveal>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {companyFacts.map((fact, index) => (
            <Reveal key={fact.label} delay={index * 0.03}>
              <div className="h-full rounded-md border border-white/10 bg-white/[0.045] p-4 backdrop-blur-xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/35">
                  {fact.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-white">{fact.value}</p>
                <p className="mt-1 text-xs leading-5 text-white/48">{fact.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#080C13] section-y">
      <SectionGlow />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <div>
            <SectionKicker>CEO Story</SectionKicker>
            <SectionTitle>Built for brands that need strategy, websites, and measurable scale.</SectionTitle>
            <p className="mt-6 text-base leading-8 text-white/62">
              Amit Rai brings together performance marketing, SEO, content, analytics, influencer-led campaigns, conversion-focused website development, and growth strategy under Brandzoo Media. Based in Delhi / New Delhi, the work is practical and outcome-focused: understand the market, sharpen the offer, build the website and tracking, launch campaigns, read the data, and scale what actually performs.
            </p>
            <p className="mt-4 text-sm leading-7 text-white/52">{brand.companySummary}</p>
            <div className="mt-8 grid gap-3">
              {proofHighlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3 text-sm text-white/72">
                  <CheckCircle2 className="size-5 text-lime-200" />
                  {highlight}
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-4 py-3 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950"
              >
                Book a discovery call
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href={`mailto:${brand.email}`}
                aria-label={`Email ${brand.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10"
              >
                <Mail className="size-4" />
                {brand.email}
              </Link>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-4">
          {achievements.map((item, index) => (
            <Reveal key={item.title} delay={0.05 + index * 0.05}>
              <div className="grid gap-4 rounded-md border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl sm:grid-cols-[80px_1fr]">
                <p className="font-mono text-sm text-cyan-200">{item.year}</p>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">{item.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#05070B] section-y">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(67,217,255,0.10),transparent_28%),radial-gradient(circle_at_14%_72%,rgba(167,249,80,0.07),transparent_26%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Services"
          title="A full growth stack — performance marketing, websites, SEO, and lead generation."
          copy="Every service is engineered around one outcome: more qualified leads, more revenue, and a brand that compounds over time."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.slug} delay={index * 0.03}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-md border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.075] hover:shadow-[0_24px_80px_rgba(67,217,255,0.12)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-11 place-items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-cyan-100 shadow-[0_0_24px_rgba(67,217,255,0.15)]">
                      <Icon className="size-5" />
                    </span>
                    <div className="flex flex-col items-end gap-2">
                      {service.featured ? (
                        <Badge className="rounded-md border-amber-300/25 bg-amber-300/10 text-[10px] uppercase tracking-[0.16em] text-amber-100">
                          Most requested
                        </Badge>
                      ) : null}
                      <Badge className="rounded-md bg-lime-300/10 text-lime-100">{service.metric}</Badge>
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">{service.summary}</p>
                  <p className="mt-4 rounded-md border border-cyan-300/15 bg-cyan-300/[0.05] p-3 text-sm leading-6 text-cyan-50/85">
                    <span className="font-semibold text-cyan-100">How I help you grow: </span>
                    {service.whyItMatters}
                  </p>
                  <div className="mt-auto pt-5">
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-white/55"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-200">
                      Explore service <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesSection() {
  const featured = caseStudies[0];

  return (
    <section className="relative overflow-hidden bg-[#080C13] section-y">
      <SectionGlow />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Results & Case Studies"
          title="Proof-first stories designed to make growth tangible."
          copy="Each case study is structured around the business problem, strategy, execution, and measurable outcomes."
        />
        <Reveal>
          <div className="mt-12 grid gap-6 rounded-md border border-white/10 bg-white/[0.045] p-5 backdrop-blur-2xl lg:grid-cols-[0.9fr_1.1fr] lg:p-7">
            <div>
              <Badge className="rounded-md bg-amber-300/10 text-amber-100">{featured.industry}</Badge>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white">{featured.title}</h3>
              <p className="mt-4 text-base leading-8 text-white/62">{featured.summary}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {featured.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-md border border-white/10 bg-black/20 p-4">
                    <p className="font-mono text-2xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/35">{metric.label}</p>
                    <p className="mt-2 text-sm text-lime-200">{metric.trend}</p>
                  </div>
                ))}
              </div>
              <Button asChild className="mt-7 rounded-md bg-white text-slate-950 hover:bg-cyan-100">
                <Link href={`/case-studies/${featured.slug}`}>
                  View full case study <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="rounded-md border border-white/10 bg-[#05070B]/80 p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/35">
                  Growth chart
                </p>
                <Badge className="rounded-md bg-cyan-300/10 text-cyan-100">Live-style metrics</Badge>
              </div>
              <GrowthChart data={featured.chart} />
            </div>
          </div>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Reveal key={study.slug} delay={index * 0.05}>
              <Link
                href={`/case-studies/${study.slug}`}
                className="block h-full rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:border-cyan-300/35 hover:bg-white/[0.07]"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{study.industry}</p>
                <h3 className="mt-4 font-semibold leading-6 text-white">{study.result}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{study.objective}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section className="bg-[#05070B] section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Certifications & Achievements"
          title="Credentials, learning, and recognition in one trust-building showcase."
          copy="Verified credentials with public verification links — plus an active learning roadmap across Meta, Google, and HubSpot."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate, index) => {
            const Icon = certificate.icon;
            return (
              <Reveal key={certificate.title} delay={index * 0.04}>
                <Card className="flex h-full flex-col rounded-md border-white/10 bg-white/[0.045] text-white backdrop-blur-xl">
                  <CardContent className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <span className="grid size-11 place-items-center rounded-md border border-amber-200/20 bg-amber-200/10 text-amber-100">
                        <Icon className="size-5" />
                      </span>
                      {certificate.verified ? (
                        <Badge className="rounded-md border border-lime-300/30 bg-lime-300/10 text-lime-100">
                          <CheckCircle2 className="size-3" /> Verified
                        </Badge>
                      ) : null}
                    </div>
                    <h3 className="mt-5 font-semibold leading-6">{certificate.title}</h3>
                    <p className="mt-3 text-sm text-white/55">{certificate.issuer}</p>
                    <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-cyan-200">
                      {certificate.year} / {certificate.credential}
                    </p>
                    {certificate.verifyUrl ? (
                      <Link
                        href={certificate.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Verify ${certificate.title} credential from ${certificate.issuer}`}
                        className="mt-5 inline-flex w-fit items-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-xs font-medium text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950"
                      >
                        Verify credential <ExternalLink className="size-3.5" />
                      </Link>
                    ) : null}
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="bg-[#080C13] section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Testimonials"
          title="Client signals that communicate confidence before the first call."
          copy="Founders and growth leaders share how marketing and websites changed after working together."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.06}>
              <Card className="h-full rounded-md border-white/10 bg-white/[0.045] text-white">
                <CardContent className="p-6">
                  <div className="flex gap-1 text-amber-200">
                    {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                      <Star key={starIndex} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-6 text-base leading-8 text-white/68">&quot;{testimonial.quote}&quot;</p>
                  <div className="mt-7 flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="mt-1 text-sm text-white/45">{testimonial.role}</p>
                    </div>
                    <Badge className="rounded-md bg-lime-300/10 text-lime-100">{testimonial.result}</Badge>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section className="bg-[#05070B] section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Skills & Tools"
          title="A modern growth stack across ads, analytics, SEO, web, creative, and automation."
          copy="The dashboard format makes expertise scannable, visual, and easy to keep updated."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Reveal key={skill.name} delay={index * 0.025}>
                <div className="rounded-md border border-white/10 bg-white/[0.045] p-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-md bg-cyan-300/10 text-cyan-100">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-white">{skill.name}</p>
                      <p className="text-xs text-white/42">{skill.category}</p>
                    </div>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-lime-200 to-amber-200"
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                  <p className="mt-2 font-mono text-xs text-white/42">{skill.value}% fluency</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DigitalDashboardSection() {
  return (
    <section className="relative overflow-hidden bg-[#080C13] section-y">
      <SectionGlow />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Digital Dashboard"
          title="A premium SaaS-style command center for marketing performance."
          copy="Representative dashboard modules show how campaign health, leads, ROAS, spend, and conversion velocity can be presented."
        />
        <Reveal>
          <div className="mt-12 rounded-md border border-white/10 bg-[#05070B]/80 p-5 shadow-[0_32px_140px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <div className="grid gap-4 lg:grid-cols-4">
              {dashboardKpis.map((kpi) => {
                const Icon = kpi.icon;
                return (
                  <div key={kpi.label} className="rounded-md border border-white/10 bg-white/[0.045] p-4">
                    <div className="flex items-center justify-between">
                      <Icon className="size-5 text-cyan-200" />
                      <span className="font-mono text-xs text-lime-200">{kpi.delta}</span>
                    </div>
                    <p className="mt-5 font-mono text-2xl font-semibold text-white">{kpi.value}</p>
                    <p className="mt-1 text-sm text-white/45">{kpi.label}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-md border border-white/10 bg-white/[0.035] p-4">
                <div className="mb-5 flex items-center justify-between">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/35">
                    ROAS trend
                  </p>
                  <Badge className="rounded-md bg-cyan-300/10 text-cyan-100">Optimization view</Badge>
                </div>
                <GrowthChart data={dashboardSeries} />
              </div>
              <div className="rounded-md border border-white/10 bg-white/[0.035] p-4">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/35">
                  Funnel health
                </p>
                <div className="mt-6 grid gap-4">
                  {["Awareness", "Landing Page", "Qualified Lead", "Sales Call"].map((stage, index) => (
                    <div key={stage}>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/70">{stage}</span>
                        <span className="font-mono text-cyan-100">{92 - index * 13}%</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-lime-200"
                          style={{ width: `${92 - index * 13}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BlogSection() {
  return (
    <section className="bg-[#05070B] section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          kicker="Blog / Insights"
          title="Content that builds topical authority and helps clients understand growth."
          copy="The blog is CMS-ready with categories, tags, metadata, rich content, and internal links to services and case studies."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.05}>
              <Link
                href={`/blog/${post.slug}`}
                className="block h-full rounded-md border border-white/10 bg-white/[0.045] p-6 transition hover:border-cyan-300/35 hover:bg-white/[0.07]"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{post.category}</p>
                <h3 className="mt-5 text-xl font-semibold leading-7 text-white">{post.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/55">{post.excerpt}</p>
                <p className="mt-6 font-mono text-xs text-white/35">{post.readTime}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#080C13] section-y">
      <SectionGlow />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <Reveal>
          <div>
            <SectionKicker>Contact</SectionKicker>
            <SectionTitle>Ready to turn marketing into a measurable growth system?</SectionTitle>
            <p className="mt-6 text-base leading-8 text-white/62">
              Share your business goal, budget range, and current challenge. Whether
              you need a new website, paid campaigns, SEO, or a full growth system —
              the response goes straight to me.
            </p>
            <div className="mt-8 grid gap-3">
              <ContactLink
                icon={<CalendarDays className="size-5" />}
                label="Book a 30-min strategy call"
                value="Calendly · Free consultation"
                href={brand.calendlyUrl}
              />
              <ContactLink
                icon={<Phone className="size-5" />}
                label="Direct call"
                value={brand.phone}
                href={`tel:${brand.phoneIntl}`}
              />
              <ContactLink
                icon={<MessageCircle className="size-5" />}
                label="WhatsApp"
                value={brand.phone}
                href={brand.whatsappUrl}
              />
              <ContactLink
                icon={<Mail className="size-5" />}
                label="Email"
                value={brand.email}
                href={`mailto:${brand.email}`}
              />
              <ContactLink
                icon={<Globe2 className="size-5" />}
                label="Website"
                value={brand.websiteDisplay}
                href={brand.website}
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="rounded-md border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl sm:p-7">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center justify-between gap-4 rounded-md border border-white/10 bg-white/[0.045] px-4 py-3 text-sm transition hover:border-cyan-300/35 hover:bg-white/[0.075]"
    >
      <span className="flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
          {icon}
        </span>
        <span className="flex flex-col">
          <span className="text-xs uppercase tracking-[0.16em] text-white/40">{label}</span>
          <span className="text-sm font-semibold text-white">{value}</span>
        </span>
      </span>
      <ExternalLink className="size-4 text-white/40 transition group-hover:text-cyan-200" />
    </Link>
  );
}

function SectionHeader({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy: string;
}) {
  return (
    <Reveal>
      <div className="max-w-3xl">
        <SectionKicker>{kicker}</SectionKicker>
        <SectionTitle>{title}</SectionTitle>
        <p className="mt-5 text-base leading-8 text-white/58">{copy}</p>
      </div>
    </Reveal>
  );
}

function SectionKicker({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-100">
      <Sparkles className="size-3.5" />
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl">
      {children}
    </h2>
  );
}

function SectionGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(67,217,255,0.16),transparent_28%),radial-gradient(circle_at_84%_54%,rgba(246,200,95,0.12),transparent_26%)]" />
  );
}
