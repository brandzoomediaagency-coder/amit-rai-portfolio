import {
  brand,
  certifications,
  faqs,
  services,
  testimonials,
  websiteProjects,
  type WebsiteProject,
} from "@/lib/data/site";

const SITE_URL = "https://brandzoomedia.in";

const LINKEDIN_PROFILE_URL = brand.linkedinUrl;

const linkedSameAs = Array.from(
  new Set([
    ...brand.socialLinks.map((link) => link.href),
    LINKEDIN_PROFILE_URL,
    brand.website,
  ]),
);

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#amit-rai`,
    name: brand.name,
    alternateName: "Amit Rai - Brandzoo Media",
    jobTitle:
      "Digital Marketing Specialist, Website Developer, and Performance Marketer",
    description:
      "Digital Marketing Specialist, Website Developer, Performance Marketer, and CEO of Brandzoo Media. 5+ years across Meta Ads, Google Ads, SEO & AI optimization, lead generation, social media marketing, UGC, app marketing, and modern conversion-focused website development.",
    image: `${SITE_URL}/opengraph-image`,
    url: SITE_URL,
    email: brand.email,
    telephone: brand.phoneIntl,
    knowsAbout: [
      "Performance Marketing",
      "Meta Ads",
      "Facebook Ads",
      "Instagram Ads",
      "Google Ads",
      "PPC Campaigns",
      "Search Engine Optimization",
      "AI Search Optimization",
      "Lead Generation",
      "Social Media Marketing",
      "Google Business Profile Optimization",
      "UGC Video Production",
      "Influencer Marketing",
      "Website Development",
      "Next.js Development",
      "Shopify Development",
      "E-commerce Website Development",
      "Landing Page Development",
      "App Marketing",
      "Conversion Rate Optimization",
      "Funnel Optimization",
      "Branding & Growth Strategy",
      "Marketing Analytics",
    ],
    knowsLanguage: ["en", "hi"],
    hasCredential: certifications
      .filter((cert) => cert.verified && cert.verifyUrl)
      .map((cert) => ({
        "@type": "EducationalOccupationalCredential",
        name: cert.title,
        credentialCategory: "certificate",
        recognizedBy: {
          "@type": "Organization",
          name: cert.issuer,
        },
        url: cert.verifyUrl,
        identifier: cert.credential.replace(/^ID:\s*/i, ""),
      })),
    worksFor: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#brandzoo-media`,
      name: brand.company,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      addressCountry: "IN",
    },
    sameAs: linkedSameAs,
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#brandzoo-media`,
    name: brand.company,
    legalName: "Brandzoo Media",
    alternateName: "Brandzoo",
    description: brand.companySummary,
    slogan:
      "Performance marketing and high-converting websites for brands ready to scale.",
    founder: {
      "@type": "Person",
      "@id": `${SITE_URL}/#amit-rai`,
      name: brand.name,
    },
    url: SITE_URL,
    logo: `${SITE_URL}/opengraph-image`,
    image: `${SITE_URL}/opengraph-image`,
    foundingDate: "2018",
    email: brand.email,
    telephone: brand.phoneIntl,
    priceRange: "$$",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: brand.email,
        telephone: brand.phoneIntl,
        areaServed: "Worldwide",
        availableLanguage: ["en", "hi"],
      },
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: brand.email,
        telephone: brand.phoneIntl,
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
    areaServed: ["IN", "AE", "US", "UK", "Global"],
    serviceType: services.map((service) => service.title),
    knowsAbout: [
      "Performance Marketing",
      "Meta Ads",
      "Google Ads",
      "PPC Campaigns",
      "SEO & AI Optimization",
      "Lead Generation",
      "Funnel Optimization",
      "Influencer Marketing",
      "Social Media Marketing",
      "Google Business Profile",
      "UGC Video Production",
      "Website Development",
      "E-commerce Website Development",
      "App Marketing",
      "Branding & Growth Strategy",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressRegion: "Delhi",
      addressCountry: "IN",
    },
    sameAs: linkedSameAs,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Amit Rai - Brandzoo Media",
    description:
      "Premium portfolio of Amit Rai, Digital Marketing Specialist, Website Developer, and CEO of Brandzoo Media. Performance marketing, paid ads, SEO, lead generation, analytics, and website development.",
    inLanguage: "en-IN",
    publisher: {
      "@id": `${SITE_URL}/#brandzoo-media`,
    },
  };
}

export function profilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profile`,
    url: SITE_URL,
    name: `${brand.name} - ${brand.company}`,
    description:
      "Personal portfolio of Amit Rai — Digital Marketing Specialist, Performance Marketer, Website Developer, and Founder & CEO of Brandzoo Media.",
    inLanguage: "en-IN",
    dateCreated: "2018",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE_URL}/opengraph-image`,
      width: 1200,
      height: 630,
    },
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE_URL}/#amit-rai`,
      name: brand.name,
      alternateName: ["Amit Rai", "Amit Rai Brandzoo Media"],
      jobTitle:
        "Digital Marketing Specialist, Website Developer, Performance Marketer, Founder & CEO",
      worksFor: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#brandzoo-media`,
        name: brand.company,
        url: SITE_URL,
      },
      image: `${SITE_URL}/opengraph-image`,
      email: brand.email,
      telephone: brand.phoneIntl,
      url: SITE_URL,
      identifier: [
        {
          "@type": "PropertyValue",
          propertyID: "LinkedIn",
          value: LINKEDIN_PROFILE_URL,
        },
        {
          "@type": "PropertyValue",
          propertyID: "Email",
          value: brand.email,
        },
        {
          "@type": "PropertyValue",
          propertyID: "Phone",
          value: brand.phoneIntl,
        },
        {
          "@type": "PropertyValue",
          propertyID: "Website",
          value: brand.website,
        },
      ],
      sameAs: linkedSameAs,
    },
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: [
      "Digital Marketing",
      "Performance Marketing",
      "Meta Ads",
      "Google Ads",
      "SEO",
      "Lead Generation",
      "Website Development",
    ],
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function servicesSchema() {
  return services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}`,
    name: service.title,
    serviceType: service.title,
    description: service.whyItMatters,
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#brandzoo-media`,
      name: brand.company,
    },
    areaServed: ["IN", "AE", "US", "UK", "Global"],
    url: `${SITE_URL}/services/${service.slug}`,
  }));
}

export function aggregateRatingSchema() {
  const total = testimonials.length;
  const average =
    testimonials.reduce((sum, t) => sum + t.rating, 0) / Math.max(total, 1);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#brandzoo-media`,
    name: brand.company,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: average.toFixed(1),
      bestRating: "5",
      worstRating: "1",
      ratingCount: total,
      reviewCount: total,
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      author: {
        "@type": "Person",
        name: t.name,
      },
      reviewBody: t.quote,
      itemReviewed: {
        "@type": "Service",
        name: `Digital Marketing & Website Development by ${brand.name}`,
      },
    })),
  };
}

export function websitePortfolioSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Live Website Portfolio by Amit Rai",
    description:
      "Websites developed by Amit Rai, Founder of Brandzoo Media — business websites, landing pages, e-commerce stores, and portfolio websites.",
    itemListElement: websiteProjects.map((project: WebsiteProject, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        url: project.url,
        description: project.description,
        creator: {
          "@type": "Person",
          "@id": `${SITE_URL}/#amit-rai`,
          name: brand.name,
        },
        about: project.category,
        keywords: project.technologies.join(", "),
      },
    })),
  };
}

type BreadcrumbItem = { name: string; url: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function articleSchema(post: {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  publishedAt?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    articleSection: post.category,
    keywords: post.keywords?.join(", "),
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    url: `${SITE_URL}/blog/${post.slug}`,
    image: `${SITE_URL}/opengraph-image`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    inLanguage: "en-IN",
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#amit-rai`,
      name: brand.name,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#brandzoo-media`,
      name: brand.company,
    },
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
