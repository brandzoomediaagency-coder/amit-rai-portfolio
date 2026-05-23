import type { Metadata, Viewport } from "next";

import { MobileStickyCta } from "@/components/layout/mobile-sticky-cta";
import { PremiumFooter } from "@/components/layout/premium-footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { SiteHeader } from "@/components/layout/site-header";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://brandzoomedia.in"),
  title: {
    default:
      "Amit Rai - Digital Marketing Specialist, Website Developer & Performance Marketer | Brandzoo Media",
    template: "%s | Amit Rai - Brandzoo Media",
  },
  description:
    "Amit Rai is a Digital Marketing Specialist, Website Developer, Performance Marketer, and CEO of Brandzoo Media. Meta Ads, Google Ads, SEO & AI optimization, lead generation, social media marketing, and modern conversion-focused website development for brands ready to scale.",
  applicationName: "Brandzoo Media",
  authors: [
    { name: "Amit Rai", url: "https://www.linkedin.com/in/amit-rai-1a6271377/" },
    { name: "Brandzoo Media", url: "https://brandzoomedia.in" },
  ],
  creator: "Amit Rai",
  publisher: "Brandzoo Media",
  keywords: [
    "Amit Rai",
    "Amit Rai Digital Marketing",
    "Amit Rai Brandzoo Media",
    "Brandzoo Media",
    "Digital Marketing Specialist",
    "Digital Marketing Consultant India",
    "Performance Marketing Expert",
    "Performance Marketer",
    "Meta Ads Expert",
    "Meta Ads Specialist",
    "Facebook Ads Expert",
    "Instagram Ads Expert",
    "Google Ads Specialist",
    "Google Ads Expert",
    "PPC Expert",
    "PPC Campaigns Expert",
    "SEO Expert",
    "SEO Consultant India",
    "AI SEO Optimization",
    "Lead Generation Specialist",
    "Lead Generation Expert",
    "Social Media Marketing Expert",
    "Google Business Profile Expert",
    "UGC Video Production",
    "Influencer Marketing Expert",
    "Website Developer",
    "Website Developer India",
    "Website Development Services",
    "Business Website Developer",
    "Landing Page Developer",
    "E-commerce Website Development",
    "Next.js Website Developer",
    "Shopify Website Developer",
    "App Marketing",
    "Funnel Optimization",
    "Branding & Growth Strategy",
    "CEO Brandzoo Media",
  ],
  category: "Digital Marketing",
  openGraph: {
    title:
      "Amit Rai - Digital Marketing Specialist, Website Developer & Performance Marketer",
    description:
      "CEO-led digital marketing, Meta Ads, Google Ads, SEO & AI optimization, lead generation, and conversion-focused website development by Amit Rai, CEO of Brandzoo Media.",
    url: "https://brandzoomedia.in",
    siteName: "Brandzoo Media",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Amit Rai - Digital Marketing Specialist, Website Developer and CEO of Brandzoo Media",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Amit Rai - Digital Marketing Specialist, Website Developer & Performance Marketer",
    description:
      "Meta Ads, Google Ads, SEO, lead generation, and high-converting website development by Amit Rai, CEO of Brandzoo Media.",
    images: ["/opengraph-image"],
    creator: "@brandzoomedia",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#05070B" },
    { media: "(prefers-color-scheme: dark)", color: "#05070B" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark h-full scroll-smooth antialiased"
    >
      <body className="min-h-full bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-cyan-300 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950"
        >
          Skip to main content
        </a>
        <ScrollProgress />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <PremiumFooter />
        <MobileStickyCta />
      </body>
    </html>
  );
}
