import type { Metadata } from "next";
import Link from "next/link";
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
  accent: "cyan" | "lime" | "white";
  external?: boolean;
}) {
  const accentBg =
    accent === "cyan"
      ? "border-cyan-300/25 bg-cyan-300/10 hover:bg-cyan-300/15 text-cyan-100"
      : accent === "lime"
        ? "border-lime-300/25 bg-lime-300/10 hover:bg-lime-300/15 text-lime-100"
        : "border-white/10 bg-white/[0.045] hover:bg-white/10 text-white/70";

  return (
    <Link
      href={href}
      target={external || href.startsWith("http") ? "_blank" : undefined}
      rel={external || href.startsWith("http") ? "noopener noreferrer" : undefined}
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
