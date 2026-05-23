import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, MinusCircle, PlusCircle, Sparkles } from "lucide-react";

import { Reveal } from "@/components/sections/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  clientProblems,
  faqs,
  industries,
  processSteps,
  whyWorkWithMe,
} from "@/lib/data/site";

export function IndustriesSection() {
  const loop = [...industries, ...industries];

  return (
    <section className="border-y border-white/10 bg-[#06090F] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-center font-mono text-xs uppercase tracking-[0.22em] text-white/40">
            Industries & brands I&apos;ve scaled
          </p>
        </Reveal>
        <div className="group relative mt-7 overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#06090F] to-transparent"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#06090F] to-transparent"
          />
          <div className="flex w-max animate-marquee gap-3 motion-reduce:animate-none">
            {loop.map((industry, index) => (
              <span
                key={`${industry}-${index}`}
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.045] px-4 py-2.5 text-sm text-white/72 backdrop-blur-xl"
              >
                <span className="size-1.5 rounded-full bg-cyan-300" />
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ClientProblemsSection() {
  return (
    <section className="relative overflow-hidden bg-[#06090F] section-y">
      <ExtrasGlow />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ExtrasHeader
          kicker="Client Problems I Solve"
          title="The growth bottlenecks I'm hired to unblock."
          copy="If any of these sound familiar, the playbook is already built — most engagements start with one of these six."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {clientProblems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="group relative h-full overflow-hidden rounded-md border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:shadow-[0_24px_80px_rgba(67,217,255,0.14)]">
                  <span className="grid size-11 place-items-center rounded-md border border-rose-300/20 bg-rose-300/10 text-rose-100">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold leading-7 text-white">
                    {item.title}
                  </h3>
                  <div className="mt-4 flex gap-3 text-sm leading-6 text-white/55">
                    <MinusCircle className="mt-0.5 size-4 shrink-0 text-rose-200/80" />
                    <p>{item.problem}</p>
                  </div>
                  <div className="mt-3 flex gap-3 text-sm leading-6 text-white/72">
                    <PlusCircle className="mt-0.5 size-4 shrink-0 text-lime-200" />
                    <p>{item.solution}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function WhyWorkWithMeSection() {
  return (
    <section className="bg-[#05070B] section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ExtrasHeader
          kicker="Why Work With Me"
          title="Senior, CEO-led marketing — not a junior on a retainer."
          copy="The work is done by the person you're hiring. Strategy, optimization, and reporting stay with Amit Rai end to end."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {whyWorkWithMe.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.04}>
                <div className="h-full rounded-md border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/[0.075]">
                  <div className="flex items-center gap-3">
                    <span className="grid size-11 place-items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="text-base font-semibold leading-6 text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-5 text-sm leading-7 text-white/58">{item.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#080C13] section-y">
      <ExtrasGlow />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ExtrasHeader
          kicker="How I Work"
          title="A clear 5-step growth process built around outcomes."
          copy="No fluff. Every engagement runs on the same proven sequence — audit, plan, build, launch, scale."
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.step} delay={index * 0.05}>
                <div className="relative h-full overflow-hidden rounded-md border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-semibold text-white/15">
                      {step.step}
                    </span>
                    <span className="grid size-10 place-items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-semibold leading-6 text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{step.detail}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
        <Reveal>
          <div className="mt-10 flex flex-col items-start gap-4 rounded-md border border-cyan-300/20 bg-cyan-300/[0.06] p-5 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-100">
                Start with a 30-day diagnostic sprint
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/72">
                Get a written growth plan, working tracking, and a creative testing roadmap inside 30 days — with or without an ongoing retainer.
              </p>
            </div>
            <Button asChild className="rounded-md bg-cyan-300 text-slate-950 hover:bg-cyan-200">
              <Link href="/contact">
                Book a discovery call <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="bg-[#05070B] section-y">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ExtrasHeader
          kicker="FAQ"
          title="The questions clients usually ask before the first call."
          copy="Straight answers on engagement model, timelines, reporting, and budget ranges."
        />
        <div className="mt-12 grid gap-3 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.03}>
              <details className="group rounded-md border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl transition hover:border-cyan-300/30 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-base font-semibold leading-6 text-white">
                    {faq.question}
                  </span>
                  <span className="grid size-8 shrink-0 place-items-center rounded-md border border-white/10 bg-white/5 text-cyan-200 transition group-open:rotate-45">
                    <PlusCircle className="size-4" />
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-white/62">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExtrasHeader({
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
        <ExtrasKicker>{kicker}</ExtrasKicker>
        <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl">
          {title}
        </h2>
        <p className="mt-5 text-base leading-8 text-white/58">{copy}</p>
      </div>
    </Reveal>
  );
}

function ExtrasKicker({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-100">
      <Sparkles className="size-3.5" />
      {children}
    </p>
  );
}

function ExtrasGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(67,217,255,0.13),transparent_28%),radial-gradient(circle_at_14%_72%,rgba(167,249,80,0.09),transparent_26%)]" />
  );
}

export function HomeStructuredBadge() {
  return (
    <Badge className="rounded-md border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
      Verified portfolio
    </Badge>
  );
}
