import type { Metadata } from "next";

import {
  WebsiteDevelopmentSection,
  WebsiteProjectsSection,
} from "@/components/sections/website-sections";
import {
  serializeJsonLd,
  websitePortfolioSchema,
} from "@/lib/seo/schema";

export const metadata: Metadata = {
  title:
    "Website Projects & Live Portfolio - Websites Developed by Amit Rai | Brandzoo Media",
  description:
    "Live website portfolio by Amit Rai, CEO of Brandzoo Media. Modern business websites, landing pages, portfolio websites, e-commerce stores, and lead-generation sites — built on Next.js, Shopify, and WordPress for speed, SEO, and conversion.",
  keywords: [
    "Amit Rai Website Portfolio",
    "Website Developer Portfolio",
    "Website Development India",
    "Business Website Developer",
    "Landing Page Developer",
    "E-commerce Website Developer",
    "Next.js Developer",
    "Shopify Developer",
    "Brandzoo Media Website Projects",
  ],
  alternates: {
    canonical: "/website-projects",
  },
  openGraph: {
    title:
      "Website Projects & Live Portfolio - Websites Developed by Amit Rai",
    description:
      "Modern, fast, SEO-friendly websites built by Amit Rai — business sites, landing pages, e-commerce stores, and portfolios.",
    url: "https://brandzoomedia.in/website-projects",
    type: "website",
  },
};

export default function WebsiteProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(websitePortfolioSchema()),
        }}
      />
      <div className="bg-[#05070B] pt-24 sm:pt-20">
        <WebsiteDevelopmentSection />
        <WebsiteProjectsSection />
      </div>
    </>
  );
}
