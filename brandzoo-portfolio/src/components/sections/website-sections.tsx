import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Code2,
  ExternalLink,
  Eye,
  Gauge,
  Globe2,
  Layers,
  Monitor,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";

import { Reveal } from "@/components/sections/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  webDevFeatures,
  webDevHighlights,
  webDevTech,
  websiteProjects,
  type WebsiteProject,
} from "@/lib/data/site";

const accentClasses: Record<NonNullable<WebsiteProject["accent"]>, string> = {
  cyan: "from-cyan-500/30 via-cyan-400/10 to-transparent",
  lime: "from-lime-500/30 via-lime-400/10 to-transparent",
  amber: "from-amber-500/30 via-amber-400/10 to-transparent",
  rose: "from-rose-500/30 via-rose-400/10 to-transparent",
  violet: "from-violet-500/30 via-violet-400/10 to-transparent",
  sky: "from-sky-500/30 via-sky-400/10 to-transparent",
};

export function WebsiteDevelopmentSection() {
  return (
    <section
      id="website-development"
      className="relative overflow-hidden bg-[#06090F] section-y"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(67,217,255,0.18),transparent_30%),radial-gradient(circle_at_18%_72%,rgba(167,249,80,0.10),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <WebKicker>Website Development Services</WebKicker>
            <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl">
              I build modern, fast, conversion-focused websites that turn visitors into customers.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/62">
              Business websites, landing pages, portfolios, e-commerce stores, and
              lead-generation websites — engineered on modern stacks for speed, SEO,
              and revenue. Every site is mobile-first, AI-search ready, and built
              around the way your buyers actually decide.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="relative h-full overflow-hidden rounded-md border border-white/10 bg-gradient-to-br from-white/[0.075] to-white/[0.02] p-6 backdrop-blur-2xl sm:p-8">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-lime-300/10 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-cyan-100 shadow-[0_0_30px_rgba(67,217,255,0.25)]">
                    <Code2 className="size-6" />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-200">
                      What I build
                    </p>
                    <p className="text-lg font-semibold text-white">
                      Websites engineered for growth
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {webDevHighlights.map((highlight) => {
                    const Icon = highlight.icon;
                    return (
                      <div
                        key={highlight.title}
                        className="group flex gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4 transition hover:border-cyan-300/35 hover:bg-white/[0.07]"
                      >
                        <span className="grid size-10 shrink-0 place-items-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                          <Icon className="size-5" />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {highlight.title}
                          </p>
                          <p className="mt-1.5 text-xs leading-5 text-white/55">
                            {highlight.detail}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {webDevTech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] text-white/55"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="rounded-md bg-gradient-to-r from-cyan-300 to-cyan-200 text-slate-950 hover:from-cyan-200 hover:to-cyan-100"
                  >
                    <Link href="/contact?service=website-development">
                      Get a Website Quote <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-md border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white"
                  >
                    <Link href="#website-projects">
                      View Website Portfolio <ArrowUpRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid h-full gap-4">
              <div className="rounded-md border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-200">
                  Every Website Includes
                </p>
                <div className="mt-5 grid gap-3">
                  {webDevFeatures.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-white/72"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-lime-200" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <PerfStat
                  icon={<Gauge className="size-5" />}
                  value="<2s"
                  label="Load Time"
                />
                <PerfStat
                  icon={<Smartphone className="size-5" />}
                  value="100%"
                  label="Mobile-First"
                />
                <PerfStat
                  icon={<Globe2 className="size-5" />}
                  value="A+"
                  label="SEO Score"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function WebsiteProjectsSection() {
  return (
    <section
      id="website-projects"
      className="relative overflow-hidden bg-[#05070B] section-y"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(67,217,255,0.14),transparent_28%),radial-gradient(circle_at_82%_72%,rgba(167,249,80,0.08),transparent_26%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <WebKicker>Live Website Portfolio</WebKicker>
              <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl">
                Real websites, real businesses, delivered in 24-48 hours.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/58">
                Every website below was designed, developed, and delivered to the
                client inside 24-48 hours — production-ready, mobile-first, and
                built to convert. Click any card to preview the live site.
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="hidden h-11 shrink-0 rounded-md border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white sm:inline-flex"
            >
              <Link href="/contact?service=website-development">
                Start your project <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-col gap-4 rounded-md border border-lime-300/25 bg-gradient-to-r from-lime-300/[0.08] via-cyan-300/[0.06] to-transparent p-5 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-md border border-lime-300/30 bg-lime-300/10 text-lime-100 shadow-[0_0_30px_rgba(167,249,80,0.25)]">
                <Zap className="size-6" />
              </span>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-lime-200">
                  24-48 Hour Delivery
                </p>
                <p className="mt-1 text-base font-semibold text-white">
                  Need a website live by this weekend? I can deliver it.
                </p>
                <p className="mt-1.5 text-sm leading-6 text-white/62">
                  Modern stack, mobile-first, SEO-ready, and built to convert — without compromising quality.
                </p>
              </div>
            </div>
            <Button
              asChild
              className="shrink-0 rounded-md bg-gradient-to-r from-lime-300 to-cyan-300 text-slate-950 hover:from-lime-200 hover:to-cyan-200"
            >
              <Link href="/contact?service=website-development">
                Get yours in 24-48 hrs <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {websiteProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.05}>
              <WebsiteProjectCard project={project} />
            </Reveal>
          ))}
          <Reveal delay={websiteProjects.length * 0.05}>
            <AddProjectCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WebsiteProjectCard({ project }: { project: WebsiteProject }) {
  const accent = project.accent ?? "cyan";
  const gradient = accentClasses[accent];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-md border border-white/10 bg-white/[0.04] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-[0_24px_80px_rgba(67,217,255,0.14)]">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-white/10 bg-[#05070B]">
        {project.previewImage ? (
          <Image
            src={project.previewImage}
            alt={`${project.title} website preview — built by Amit Rai, Brandzoo Media`}
            fill
            sizes="(min-width: 1280px) 380px, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="relative h-full w-full">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_45%)]" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="flex flex-col items-center gap-3 text-white/72">
                <span className="grid size-14 place-items-center rounded-md border border-white/15 bg-white/10 text-cyan-100 backdrop-blur-xl">
                  <Monitor className="size-6" />
                </span>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/55">
                  {project.category}
                </p>
              </div>
            </div>
            <BrowserChrome url={project.url} />
          </div>
        )}
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <Badge className="rounded-md border-lime-300/30 bg-lime-300/15 text-[11px] text-lime-100">
            <span className="mr-1.5 inline-flex size-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(167,249,80,0.7)]" />
            {project.status ?? "Live"}
          </Badge>
        </div>
        {project.deliveryTime ? (
          <div className="absolute right-3 top-3">
            <Badge className="rounded-md border-amber-300/30 bg-amber-300/15 text-[11px] font-semibold text-amber-100">
              <Clock className="mr-1 size-3" />
              {project.deliveryTime}
            </Badge>
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan-200">
          {project.category}
        </p>
        <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm text-white/55">{project.client}</p>
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/62">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-white/55"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2 rounded-md border border-lime-300/20 bg-lime-300/[0.06] p-3 text-xs leading-5 text-lime-100">
          <Sparkles className="size-3.5 shrink-0" />
          {project.impact}
        </div>

        <div className="mt-5 flex gap-2">
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title} live website`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-gradient-to-r from-cyan-300 to-cyan-200 px-3 py-2.5 text-xs font-semibold text-slate-950 transition hover:from-cyan-200 hover:to-cyan-100"
          >
            <Eye className="size-3.5" />
            Live Preview
          </Link>
          <Link
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} website in a new tab`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2.5 text-xs font-semibold text-white transition hover:bg-white/10"
          >
            Visit Website
            <ExternalLink className="size-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

function AddProjectCard() {
  return (
    <div className="relative flex h-full min-h-[420px] flex-col items-center justify-center rounded-md border border-dashed border-white/15 bg-white/[0.02] p-6 text-center transition hover:border-cyan-300/35 hover:bg-white/[0.04]">
      <span className="grid size-14 place-items-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
        <Layers className="size-6" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-white">
        Your website project here
      </h3>
      <p className="mt-3 max-w-xs text-sm leading-6 text-white/55">
        New websites get added to this portfolio as they go live. Start your project
        and your site could be next.
      </p>
      <Button
        asChild
        className="mt-6 rounded-md bg-white text-slate-950 hover:bg-cyan-100"
      >
        <Link href="/contact?service=website-development">
          Start a Project <ArrowRight className="size-4" />
        </Link>
      </Button>
    </div>
  );
}

function BrowserChrome({ url }: { url: string }) {
  let host = url;
  try {
    host = new URL(url).host;
  } catch {
    host = url;
  }
  return (
    <div className="absolute inset-x-3 top-3 hidden items-center gap-2 rounded-md border border-white/12 bg-white/10 px-3 py-1.5 backdrop-blur-xl sm:flex">
      <span className="size-2 rounded-full bg-rose-400/60" />
      <span className="size-2 rounded-full bg-amber-300/60" />
      <span className="size-2 rounded-full bg-lime-300/60" />
      <span className="ml-2 truncate font-mono text-[10px] text-white/65">
        {host}
      </span>
    </div>
  );
}

function PerfStat({
  icon,
  value,
  label,
}: {
  icon: ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.045] p-4 text-center backdrop-blur-xl">
      <div className="mx-auto grid size-9 place-items-center rounded-md bg-cyan-300/10 text-cyan-100">
        {icon}
      </div>
      <p className="mt-3 font-mono text-xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/45">
        {label}
      </p>
    </div>
  );
}

function WebKicker({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-100">
      <Sparkles className="size-3.5" />
      {children}
    </p>
  );
}
