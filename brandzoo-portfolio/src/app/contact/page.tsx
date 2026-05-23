import type { Metadata } from "next";
import Link from "next/link";
import type { SVGProps } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  Globe2,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

import { ContactForm } from "@/components/sections/contact-form";
import { Badge } from "@/components/ui/badge";
import { brand } from "@/lib/data/site";

export const metadata: Metadata = {
  title: "Contact Amit Rai - Digital Marketing & Website Development Consultant",
  description:
    "Contact Amit Rai and Brandzoo Media for performance marketing, Meta Ads, Google Ads, SEO, website development, and lead generation. Call +91 99105 50679, email brandzoomediaagency@gmail.com, or book a strategy call.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-[#05070B] px-4 pb-16 pt-28 sm:pb-24 sm:pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Badge className="rounded-md border-cyan-300/25 bg-cyan-300/10 text-cyan-100">
            Contact
          </Badge>
          <h1 className="mt-6 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Let&apos;s map your next growth move.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/62">
            Share your business goal, current bottleneck, and budget range. You&apos;ll get a written read on what to fix first — usually inside 48 hours.
          </p>

          <div className="mt-8 grid gap-3">
            <ContactChannel
              href={brand.calendlyUrl}
              icon={<CalendarDays className="size-5" />}
              label="Book a 30-min strategy call"
              value="Calendly"
              accent="cyan"
            />
            <ContactChannel
              href={brand.whatsappUrl}
              icon={<MessageCircle className="size-5" />}
              label="WhatsApp"
              value={brand.phone}
              accent="lime"
            />
            <ContactChannel
              href={`tel:${brand.phoneIntl}`}
              icon={<Phone className="size-5" />}
              label="Call directly"
              value={brand.phone}
              accent="white"
            />
            <ContactChannel
              href={`mailto:${brand.email}`}
              icon={<Mail className="size-5" />}
              label="Email"
              value={brand.email}
              accent="white"
            />
            <ContactChannel
              href={brand.website}
              icon={<Globe2 className="size-5" />}
              label="Agency website"
              value={brand.websiteDisplay}
              accent="white"
              external
            />
            <ContactChannel
              href={brand.linkedinUrl}
              icon={<LinkedinIcon className="size-5" />}
              label="LinkedIn · Founder"
              value="Amit Rai · Verified profile"
              accent="linkedin"
              external
            />
            <ContactChannel
              href={brand.companyLinkedinUrl}
              icon={<LinkedinIcon className="size-5" />}
              label="LinkedIn · Company"
              value="Brandzoo Media · Business page"
              accent="linkedin"
              external
            />
          </div>

          <p className="mt-8 text-sm text-white/45">
            Based in {brand.location}.
          </p>
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.045] p-5 backdrop-blur-xl sm:p-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactChannel({
  href,
  icon,
  label,
  value,
  accent,
  external,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  accent: "cyan" | "lime" | "white" | "linkedin";
  external?: boolean;
}) {
  const accentBg =
    accent === "cyan"
      ? "border-cyan-300/25 bg-cyan-300/10 hover:bg-cyan-300/15 text-cyan-100"
      : accent === "lime"
        ? "border-lime-300/25 bg-lime-300/10 hover:bg-lime-300/15 text-lime-100"
        : accent === "linkedin"
          ? "border-[#0A66C2]/40 bg-[#0A66C2]/15 hover:bg-[#0A66C2]/25 text-white"
          : "border-white/10 bg-white/[0.045] hover:bg-white/10 text-white/70";

  const isLinkedIn = accent === "linkedin";
  const relValue = isLinkedIn
    ? "me noopener noreferrer"
    : external || href.startsWith("http")
      ? "noopener noreferrer"
      : undefined;

  return (
    <Link
      href={href}
      target={external || href.startsWith("http") ? "_blank" : undefined}
      rel={relValue}
      className={`group flex items-center justify-between gap-4 rounded-md border px-4 py-4 backdrop-blur-xl transition ${accentBg}`}
    >
      <div className="flex items-center gap-3">
        <span className="opacity-90">{icon}</span>
        <div>
          <p className="text-xs uppercase tracking-[0.18em] opacity-60">
            {label}
          </p>
          <p className="mt-0.5 text-base font-medium text-white">{value}</p>
        </div>
      </div>
      <ArrowUpRight className="size-4 opacity-70 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
    </Link>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}
