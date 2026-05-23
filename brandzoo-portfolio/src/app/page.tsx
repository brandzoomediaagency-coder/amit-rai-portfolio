import { HomePage } from "@/components/sections/home-page";
import {
  aggregateRatingSchema,
  faqSchema,
  organizationSchema,
  personSchema,
  profilePageSchema,
  serializeJsonLd,
  servicesSchema,
  websitePortfolioSchema,
  websiteSchema,
} from "@/lib/seo/schema";

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd([
            personSchema(),
            organizationSchema(),
            websiteSchema(),
            profilePageSchema(),
            faqSchema(),
            aggregateRatingSchema(),
            websitePortfolioSchema(),
            ...servicesSchema(),
          ]),
        }}
      />
      <HomePage />
    </>
  );
}
