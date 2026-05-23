"use client";

import Link from "next/link";
import type { SVGProps } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  Globe2,
  Rss,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

import { Reveal } from "@/components/sections/reveal";
import { Badge } from "@/components/ui/badge";
import { brand, linkedinPresence } from "@/lib/data/site";

const LINKEDIN_BLUE = "#0A66C2";

export function ProfessionalPresenceSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="professional-presence"
      aria-labelledby="professional-presence-heading"
      className="relative overflow-hidden bg-[#04060A] section-y"
    >
      <AnimatedBackdrop />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-md border border-[#0A66C2]/35 bg-[#0A66C2]/12 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[#A7D5FF]">
              <LinkedinIcon className="size-3.5 text-[#7DBAFF]" />
              Professional Presence
            </span>
            <h2
              id="professional-presence-heading"
              className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl"
            >
              Connect with{" "}
              <span className="bg-gradient-to-r from-[#7DBAFF] via-white to-cyan-200 bg-clip-text text-transparent">
                Brandzoo Media
              </span>{" "}
              on LinkedIn.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/62">
              {linkedinPresence.companyTagline} Built on a verified, CEO-led
              business page with consistent posting cadence, real client
              results, and the marketing systems behind every launch.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <article className="group relative mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl transition duration-500 hover:border-[#0A66C2]/40">
            <GlowOrbs />
            <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
              <div>
                <div className="flex flex-wrap items-start gap-4">
                  <CompanyLogo />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs uppercase tracking-[0.18em] text-[#A7D5FF]">
                        LinkedIn Company Page
                      </span>
                      <Badge className="rounded-md border-[#0A66C2]/35 bg-[#0A66C2]/15 text-[10px] uppercase tracking-[0.16em] text-[#D6EAFF]">
                        <BadgeCheck className="size-3" />
                        Verified Business
                      </Badge>
                    </div>
                    <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.01em] text-white sm:text-3xl">
                      {brand.company}
                    </h3>
                    <p className="mt-2 text-sm text-white/68">
                      {linkedinPresence.companyHeadline}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-white/55">
                      <span className="inline-flex items-center gap-1.5">
                        <Globe2 className="size-3.5 text-[#7DBAFF]" />
                        linkedin.com/company/{brand.companyLinkedinHandle}
                      </span>
                      <LivePulse>Active · Posting weekly</LivePulse>
                    </div>
                  </div>
                </div>

                <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {linkedinPresence.companyFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-md border border-white/10 bg-white/[0.045] p-3 transition group-hover:border-[#0A66C2]/30"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                        {fact.label}
                      </p>
                      <p className="mt-1.5 text-sm font-semibold text-white">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-2.5">
                  {linkedinPresence.trustSignals.map((signal) => (
                    <div
                      key={signal}
                      className="flex items-start gap-3 text-sm leading-6 text-white/72"
                    >
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[#7DBAFF]" />
                      {signal}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  >
                    <Link
                      href={brand.companyLinkedinUrl}
                      target="_blank"
                      rel="me noopener noreferrer"
                      aria-label="Connect with Brandzoo Media on LinkedIn"
                      className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-[#0A66C2] px-5 py-3 text-sm font-semibold text-white shadow-[0_18px_60px_-12px_rgba(10,102,194,0.65)] transition hover:bg-[#0959AB]"
                    >
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
                      />
                      <LinkedinIcon className="size-4" />
                      Connect on LinkedIn
                      <ArrowUpRight className="size-4 transition group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </Link>
                  </motion.div>
                  <Link
                    href={brand.linkedinUrl}
                    target="_blank"
                    rel="me noopener noreferrer"
                    aria-label="View Amit Rai LinkedIn personal profile"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                  >
                    <LinkedinIcon className="size-4 text-[#7DBAFF]" />
                    Founder Profile · Amit Rai
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>

              <aside className="relative rounded-xl border border-white/10 bg-gradient-to-br from-[#0A66C2]/15 via-white/[0.03] to-transparent p-5 backdrop-blur-xl sm:p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#A7D5FF]">
                    What you&apos;ll see on the page
                  </p>
                  <Rss className="size-4 text-[#7DBAFF]" />
                </div>
                <div className="mt-5 grid gap-3">
                  {linkedinPresence.highlights.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={shouldReduceMotion ? false : { opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-40px", amount: 0.05 }}
                      transition={{ duration: 0.45, delay: 0.05 * index }}
                      className="group/hl flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.04] p-4 transition hover:border-[#0A66C2]/40 hover:bg-white/[0.07]"
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-md border border-[#0A66C2]/30 bg-[#0A66C2]/12 text-[#7DBAFF]">
                        {iconForIndex(index)}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-white">
                          {item.label}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-white/55">
                          {item.detail}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-5 rounded-md border border-[#0A66C2]/30 bg-[#0A66C2]/[0.08] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#A7D5FF]">
                    Why it matters for clients
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/82">
                    The LinkedIn business page is where credibility is verified.
                    Activity, posts, recommendations, and team transparency are
                    the trust signals B2B buyers actually check before booking a
                    call.
                  </p>
                </div>
              </aside>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

function CompanyLogo() {
  return (
    <div className="relative shrink-0">
      <div className="absolute inset-0 -z-10 rounded-2xl bg-[#0A66C2]/35 blur-2xl" />
      <div className="grid size-16 place-items-center rounded-2xl border border-[#0A66C2]/45 bg-gradient-to-br from-[#0A66C2] via-[#0A66C2]/85 to-[#0959AB] shadow-[0_0_40px_rgba(10,102,194,0.45)] sm:size-20">
        <span className="font-mono text-base font-bold uppercase tracking-[0.16em] text-white sm:text-lg">
          BZ
        </span>
      </div>
    </div>
  );
}

function LivePulse({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-lime-300/30 bg-lime-300/10 px-2 py-0.5 text-[10px] font-medium text-lime-100">
      <span className="relative inline-flex size-1.5">
        <span className="absolute inset-0 animate-ping rounded-full bg-lime-300 opacity-75" />
        <span className="relative inline-flex size-1.5 rounded-full bg-lime-300" />
      </span>
      {children}
    </span>
  );
}

function GlowOrbs() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-60 blur-3xl"
        style={{ background: `radial-gradient(closest-side, ${LINKEDIN_BLUE}55, transparent 70%)` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(67,217,255,0.45), transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.6), transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.6), transparent 75%)",
        }}
      />
    </>
  );
}

function AnimatedBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(10,102,194,0.18),transparent_32%),radial-gradient(circle_at_82%_82%,rgba(67,217,255,0.10),transparent_28%)]"
    />
  );
}

function iconForIndex(index: number) {
  switch (index % 4) {
    case 0:
      return <TrendingUp className="size-4" />;
    case 1:
      return <Building2 className="size-4" />;
    case 2:
      return <Sparkles className="size-4" />;
    default:
      return <Users className="size-4" />;
  }
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

