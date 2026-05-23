import Link from "next/link";
import { ArrowUpRight, Globe2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { brand } from "@/lib/data/site";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Website Development", href: "/services/website-development" },
  { label: "Website Projects", href: "/website-projects" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Certifications", href: "/certifications" },
  { label: "Insights", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function PremiumFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#05070B] pb-24 md:pb-0">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_0.9fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-md border border-cyan-300/25 bg-cyan-300/10 text-sm font-semibold text-cyan-200">
              BZ
            </span>
            <div>
              <p className="font-semibold text-white">{brand.name}</p>
              <p className="text-sm text-white/50">CEO · {brand.company}</p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/55">
            Premium performance marketing, SEO, funnel strategy, creative testing, analytics,
            and high-converting website development for brands that want measurable growth.
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs text-white/50">
            <MapPin className="size-3.5 text-cyan-200" />
            {brand.location}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {brand.socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-white/10 px-3 py-2 text-xs text-white/55 transition hover:border-white/25 hover:text-white"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Explore</p>
          <div className="mt-4 grid gap-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/55 transition hover:text-cyan-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Get in touch</p>
          <div className="mt-4 grid gap-2.5 text-sm">
            <Link
              href={`tel:${brand.phoneIntl}`}
              aria-label={`Call ${brand.phone}`}
              className="inline-flex items-center gap-2 text-white/70 transition hover:text-cyan-200"
            >
              <Phone className="size-4 text-cyan-200" /> {brand.phone}
            </Link>
            <Link
              href={brand.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`WhatsApp ${brand.phone}`}
              className="inline-flex items-center gap-2 text-white/70 transition hover:text-cyan-200"
            >
              <MessageCircle className="size-4 text-lime-200" /> WhatsApp · {brand.phone}
            </Link>
            <Link
              href={`mailto:${brand.email}`}
              aria-label={`Email ${brand.email}`}
              className="inline-flex items-center gap-2 break-all text-white/70 transition hover:text-cyan-200"
            >
              <Mail className="size-4 text-cyan-200" /> {brand.email}
            </Link>
            <Link
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Brandzoo Media website"
              className="inline-flex items-center gap-2 text-white/70 transition hover:text-cyan-200"
            >
              <Globe2 className="size-4 text-cyan-200" /> {brand.websiteDisplay}
            </Link>
          </div>
          <Link
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950"
          >
            Book Strategy Call <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/40">
        Copyright {new Date().getFullYear()} {brand.company} · Built by {brand.name} · All rights reserved.
      </div>
    </footer>
  );
}
