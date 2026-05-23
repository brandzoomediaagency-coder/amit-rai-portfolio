import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { achievements, certifications } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Certifications & Achievements",
  description:
    "Verified certifications of Amit Rai including Google AI Fundamentals (Coursera) and Jobaaj Learnings Full Stack Digital Marketing Nano Degree, plus the Brandzoo Media achievement timeline.",
  alternates: {
    canonical: "/certifications",
  },
};

export default function CertificationsPage() {
  return (
    <section className="min-h-screen bg-[#05070B] px-4 pb-16 pt-28 sm:pb-24 sm:pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Badge className="rounded-md border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
          Certifications
        </Badge>
        <h1 className="mt-6 max-w-4xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
          A trust library for credentials, awards, and professional milestones.
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-white/58">
          Verified credentials with public verification links — every certificate below can be checked against the issuer&apos;s official record.
        </p>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certificate) => {
            const Icon = certificate.icon;
            return (
              <div
                key={certificate.title}
                className="flex h-full flex-col rounded-md border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid size-11 place-items-center rounded-md bg-amber-200/10 text-amber-100">
                    <Icon className="size-5" />
                  </span>
                  {certificate.verified ? (
                    <Badge className="rounded-md border border-lime-300/30 bg-lime-300/10 text-lime-100">
                      <CheckCircle2 className="size-3" /> Verified
                    </Badge>
                  ) : null}
                </div>
                <h2 className="mt-5 font-semibold leading-6 text-white">{certificate.title}</h2>
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
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-3 py-2 text-xs font-medium text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950"
                  >
                    Verify credential <ExternalLink className="size-3.5" />
                  </Link>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="mt-16 grid gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.title}
              className="grid gap-4 rounded-md border border-white/10 bg-white/[0.045] p-5 sm:grid-cols-[120px_1fr]"
            >
              <p className="font-mono text-cyan-200">{achievement.year}</p>
              <div>
                <h2 className="font-semibold text-white">{achievement.title}</h2>
                <p className="mt-2 text-sm leading-7 text-white/55">{achievement.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
