import {
  Award,
  BarChart3,
  Brain,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  CircleDollarSign,
  Clapperboard,
  Code2,
  Compass,
  DatabaseZap,
  FileBadge,
  Flame,
  Gem,
  Globe2,
  Layers,
  LineChart,
  MapPinCheck,
  Megaphone,
  Monitor,
  MousePointerClick,
  Network,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  WandSparkles,
  Workflow,
} from "lucide-react";

export const brand = {
  name: "Amit Rai",
  company: "Brandzoo Media",
  title:
    "Digital Marketing Specialist | Performance Marketer | Website Developer | CEO @ Brandzoo Media",
  email: "brandzoomediaagency@gmail.com",
  phone: "+91 99105 50679",
  phoneIntl: "+919910550679",
  whatsappUrl: "https://wa.me/919910550679",
  calendlyUrl: "https://calendly.com/brandzoomedia/strategy-call",
  linkedinUrl: "https://www.linkedin.com/in/amit-rai-1a6271377/",
  companyLinkedinUrl: "https://www.linkedin.com/company/brandzoomedia/",
  companyLinkedinHandle: "brandzoomedia",
  website: "https://brandzoomedia.in",
  websiteDisplay: "brandzoomedia.in",
  location: "Delhi / New Delhi, India · Serving brands globally",
  companySummary:
    "Brandzoo Media helps brands connect, converse, collaborate, and co-create through performance marketing, SEO, social media, influencer-led growth, and high-converting website development.",
  heroHeadline:
    "I help businesses scale leads, sales, and revenue with performance marketing and conversion-focused websites.",
  heroCopy:
    "I'm Amit Rai — Digital Marketing Specialist, Website Developer, and CEO of Brandzoo Media. I build full-funnel growth systems across Meta Ads, Google Ads, SEO, lead generation, and modern websites so brands lower CAC, lift ROAS, and grow with data — not guesswork.",
  socialLinks: [
    { label: "LinkedIn (Personal)", href: "https://www.linkedin.com/in/amit-rai-1a6271377/" },
    { label: "LinkedIn (Company)", href: "https://www.linkedin.com/company/brandzoomedia/" },
    { label: "Website", href: "https://brandzoomedia.in" },
  ],
};

export const linkedinPresence = {
  companyHeadline: "Brandzoo Media — Performance Marketing & Website Studio on LinkedIn",
  companyTagline:
    "Follow Brandzoo Media for daily insights on performance marketing, paid ads, SEO, website development, and growth case studies.",
  companyFacts: [
    { label: "Founded", value: "2018" },
    { label: "Industry", value: "Marketing & Advertising" },
    { label: "Team", value: "11-50" },
    { label: "HQ", value: "New Delhi · India" },
  ],
  trustSignals: [
    "CEO-led communication — every post comes from Amit Rai directly",
    "Active client case studies, ROAS wins, and growth playbooks",
    "Verified business page with consistent posting cadence",
    "Recommendations and connections across founders, marketers, and creators",
  ],
  highlights: [
    {
      label: "Performance Marketing wins",
      detail: "Live ROAS, CPL, and creative testing breakdowns",
    },
    {
      label: "Website launches",
      detail: "Behind-the-scenes builds delivered in 24-48 hours",
    },
    {
      label: "SEO & AI search",
      detail: "Schema, content systems, and AI-visibility frameworks",
    },
    {
      label: "Growth playbooks",
      detail: "Funnels, lead generation, and lifecycle automations",
    },
  ],
};

export const roles = [
  "Performance Marketing Expert",
  "Meta Ads & Google Ads Specialist",
  "Website Developer & Funnel Builder",
  "SEO & Lead Generation Expert",
];

export const trustMetrics = [
  { label: "Years Experience", value: 5, suffix: "+" },
  { label: "Campaigns Managed", value: 420, suffix: "+" },
  { label: "Websites Delivered", value: 60, suffix: "+" },
  { label: "Avg Delivery", value: 48, suffix: "h" },
];

export const proofHighlights = [
  "CEO-led growth strategy & execution",
  "Performance-first creative and copy testing",
  "Conversion-focused website development",
  "Full-funnel tracking, analytics, and CRM handoff",
];

export const companyFacts = [
  { label: "Founded", value: "2018", detail: "Performance marketing & growth services" },
  { label: "Headquarters", value: "New Delhi", detail: "Serving brands across India & globally" },
  { label: "Team", value: "11-50", detail: "Founder-led specialist team" },
  {
    label: "Specialties",
    value: "Paid · SEO · Web",
    detail: "Performance, SEO, and conversion-focused web",
  },
];

export const heroMetrics = [
  { label: "Avg ROAS", value: "3.6x", delta: "+18%" },
  { label: "Leads Generated", value: "24.8K", delta: "+31%" },
  { label: "Managed Spend", value: "₹2.4Cr+", delta: "+44%" },
];

export const industries = [
  "D2C Ecommerce",
  "Healthcare & Clinics",
  "B2B SaaS",
  "EdTech",
  "Real Estate",
  "Local Services",
  "FinTech",
  "Hospitality",
  "Beauty & Wellness",
  "Mobile Apps",
];

export type Service = {
  title: string;
  slug: string;
  icon: typeof Target;
  summary: string;
  whyItMatters: string;
  benefits: string[];
  deliverables: string[];
  metric: string;
  accent: "cyan" | "lime" | "amber" | "rose" | "violet" | "sky";
  featured?: boolean;
};

export const services: Service[] = [
  {
    title: "Performance Marketing",
    slug: "performance-marketing",
    icon: Rocket,
    summary:
      "Full-funnel paid acquisition across Meta, Google, YouTube, and LinkedIn — built around real business numbers.",
    whyItMatters:
      "I help businesses generate measurable leads, sales, and ROI through data-driven paid campaigns where every rupee is tied back to a revenue outcome.",
    benefits: ["ROAS planning", "Budget scaling", "Weekly optimization"],
    deliverables: ["Channel mix", "Tracking setup", "Weekly ROAS readouts"],
    metric: "Predictable ROAS",
    accent: "cyan",
    featured: true,
  },
  {
    title: "Meta Ads",
    slug: "meta-ads",
    icon: Target,
    summary:
      "Facebook & Instagram campaigns for leads, sales, WhatsApp inquiries, retargeting, and brand lift.",
    whyItMatters:
      "I run Meta Ads that bring qualified leads, online sales, and WhatsApp inquiries — using audience testing, creative iteration, and retargeting funnels built for your offer.",
    benefits: ["Audience testing", "Creative matrix", "Retargeting systems"],
    deliverables: ["Account audit", "Creative briefs", "Retargeting funnels"],
    metric: "Lower CPL",
    accent: "sky",
  },
  {
    title: "Google Ads",
    slug: "google-ads",
    icon: Search,
    summary:
      "Search, PPC, Performance Max, YouTube, and remarketing — built to capture high-intent buyers.",
    whyItMatters:
      "I help businesses capture high-intent customers through search ads, PPC, remarketing, and conversion tracking — putting your brand in front of buyers actively searching for what you sell.",
    benefits: ["Intent capture", "Search funnels", "Conversion tracking"],
    deliverables: ["Keyword strategy", "Bid management", "Conversion API setup"],
    metric: "Higher intent",
    accent: "amber",
  },
  {
    title: "PPC Campaigns",
    slug: "ppc-campaigns",
    icon: MousePointerClick,
    summary:
      "Pay-per-click campaigns engineered around cost-per-acquisition, not impressions or vanity reach.",
    whyItMatters:
      "I design PPC campaigns where every click is qualified, every conversion is tracked, and every rupee of spend can be defended to a CFO.",
    benefits: ["CPA control", "Quality score", "Negative keyword hygiene"],
    deliverables: ["Campaign architecture", "Ad copy testing", "CPA dashboards"],
    metric: "Lower CPA",
    accent: "violet",
  },
  {
    title: "SEO & AI Optimization",
    slug: "seo-ai-optimization",
    icon: Globe2,
    summary:
      "Technical SEO, content clusters, schema, and AI search visibility for ChatGPT, Perplexity, and Google AI Overviews.",
    whyItMatters:
      "I help brands rank on Google and stay visible inside AI search platforms — combining content, technical SEO, schema markup, and authority building so your brand gets discovered without paid spend.",
    benefits: ["Topical authority", "Technical fixes", "AI search visibility"],
    deliverables: ["SEO audit", "Content clusters", "Schema & E-E-A-T setup"],
    metric: "Organic growth",
    accent: "lime",
    featured: true,
  },
  {
    title: "Social Media Marketing",
    slug: "social-media-marketing",
    icon: Megaphone,
    summary:
      "Content calendars, creatives, community engagement, and paid amplification for compounding brand presence.",
    whyItMatters:
      "I manage content, creatives, engagement, and brand presence across platforms — turning social media into a consistent driver of awareness, trust, and inquiries.",
    benefits: ["Content cadence", "Community growth", "Brand recall"],
    deliverables: ["Monthly calendar", "Creative production", "Engagement playbook"],
    metric: "Reach lift",
    accent: "rose",
  },
  {
    title: "UGC Video Production",
    slug: "ugc-video-production",
    icon: Clapperboard,
    summary:
      "Hooks, scripts, reels, and creator-led video built to perform inside paid social and organic feeds.",
    whyItMatters:
      "I help brands build trust using authentic user-generated content — hooks, scripts, reels, and ad creatives that feel native to the feed and out-perform polished studio ads.",
    benefits: ["Creator briefs", "Hook testing", "Ad-ready content"],
    deliverables: ["Script library", "UGC creator network", "Performance editing"],
    metric: "Creative lift",
    accent: "amber",
  },
  {
    title: "Influencer Marketing",
    slug: "influencer-marketing",
    icon: UserCheck,
    summary:
      "Creator partnerships, gifting campaigns, and paid collaborations matched to your product and audience.",
    whyItMatters:
      "I connect brands with relevant influencers for awareness, trust, and conversions — choosing creators by audience fit and ROI, not vanity follower counts.",
    benefits: ["Creator vetting", "Brief & contracts", "Performance tracking"],
    deliverables: ["Creator shortlist", "Campaign briefs", "Whitelisted ad usage"],
    metric: "Authentic reach",
    accent: "rose",
  },
  {
    title: "Website Development",
    slug: "website-development",
    icon: Code2,
    summary:
      "Modern, fast, SEO-friendly business websites and landing pages engineered to convert visitors into leads.",
    whyItMatters:
      "I build high-performance websites that convert visitors into leads and customers — mobile-first, fast-loading, SEO-ready, and aligned with the way your buyers actually decide.",
    benefits: ["Conversion-focused UX", "Fast & mobile-first", "SEO-ready architecture"],
    deliverables: [
      "Business websites",
      "Landing pages",
      "Portfolio websites",
      "Lead-gen websites",
    ],
    metric: "More inquiries",
    accent: "cyan",
    featured: true,
  },
  {
    title: "E-commerce Website Development",
    slug: "ecommerce-website-development",
    icon: ShoppingBag,
    summary:
      "Shopify, WooCommerce, and custom Next.js storefronts built to scale revenue and reduce checkout friction.",
    whyItMatters:
      "I design and build e-commerce websites that load fast, look premium, and remove friction at checkout — so your ad budget converts into actual orders, not bounces.",
    benefits: ["Premium store design", "Optimized checkout", "Conversion tracking"],
    deliverables: ["Shopify / Woo setup", "Custom theme build", "Pixel & analytics"],
    metric: "Higher AOV",
    accent: "violet",
  },
  {
    title: "Google Business Profile Optimization",
    slug: "google-business-profile-optimization",
    icon: MapPinCheck,
    summary:
      "Local SEO, GBP setup, reviews, posts, and category tuning for map rankings and call volume.",
    whyItMatters:
      "I improve local visibility, map ranking, reviews, posts, and customer inquiries — so people searching for your service in your city actually find you first.",
    benefits: ["Map visibility", "Review velocity", "Local discovery"],
    deliverables: ["GBP audit", "Categories & posts", "Review automation"],
    metric: "Local demand",
    accent: "lime",
  },
  {
    title: "Lead Generation",
    slug: "lead-generation",
    icon: Users,
    summary:
      "Funnels, landing pages, WhatsApp flows, and CRM handoff designed to fill the calendar with qualified leads.",
    whyItMatters:
      "I create funnels and campaigns to bring qualified leads through ads, landing pages, WhatsApp, and forms — leads that sales actually wants to call, not junk.",
    benefits: ["Lead quality", "CRM handoff", "Funnel clarity"],
    deliverables: ["Landing pages", "Lead magnets", "WhatsApp & CRM flows"],
    metric: "Qualified leads",
    accent: "cyan",
    featured: true,
  },
  {
    title: "Funnel Optimization",
    slug: "funnel-optimization",
    icon: Network,
    summary:
      "Landing-page CRO, retargeting flows, lead nurture, and conversion-path analytics for higher LTV.",
    whyItMatters:
      "I improve the user journey from ad click to conversion using landing pages, retargeting, lead forms, and follow-up strategy — so the same traffic produces more conversions.",
    benefits: ["CRO audits", "Funnel mapping", "Retention loops"],
    deliverables: ["CRO audit", "A/B tests", "Lifecycle automations"],
    metric: "More conversions",
    accent: "amber",
  },
  {
    title: "App Marketing",
    slug: "app-marketing",
    icon: Smartphone,
    summary:
      "Play Store / App Store optimization, install campaigns, and retention loops for mobile-first products.",
    whyItMatters:
      "I help mobile apps grow through Play Store / App Store optimization, user acquisition, reviews, installs, and retention-focused campaigns that keep users engaged.",
    benefits: ["ASO", "Install growth", "Retention loops"],
    deliverables: ["ASO setup", "UA campaigns", "Event tracking"],
    metric: "Lower CPI",
    accent: "sky",
  },
  {
    title: "Branding & Growth Strategy",
    slug: "branding-growth-strategy",
    icon: Gem,
    summary:
      "Positioning, messaging, brand identity, and a 90-day growth roadmap engineered for the next stage.",
    whyItMatters:
      "I help businesses improve positioning, messaging, digital presence, and customer acquisition strategy — so the brand and the funnel finally tell the same story.",
    benefits: ["Brand clarity", "Offer narrative", "Growth roadmap"],
    deliverables: ["Brand positioning doc", "Messaging matrix", "90-day plan"],
    metric: "Premium signal",
    accent: "violet",
  },
];

export type WebsiteProject = {
  title: string;
  slug: string;
  client: string;
  category: string;
  description: string;
  url: string;
  previewImage?: string;
  technologies: string[];
  impact: string;
  status?: "Live" | "In Development" | "Coming Soon";
  accent?: "cyan" | "lime" | "amber" | "rose" | "violet" | "sky";
  deliveryTime?: string;
};

export const websiteProjects: WebsiteProject[] = [
  {
    title: "Brandzoo Media",
    slug: "brandzoo-media",
    client: "Brandzoo Media",
    category: "Agency Website",
    description:
      "Performance marketing agency website with services, case studies, lead capture, and a conversion-focused design system.",
    url: "https://brandzoomedia.in",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "SEO"],
    impact: "Premium brand presence with optimized lead capture",
    status: "Live",
    accent: "cyan",
    deliveryTime: "24-48 hours",
  },
  {
    title: "Sight Holidays",
    slug: "sight-holidays",
    client: "Sight Holidays",
    category: "Travel & Tourism Website",
    description:
      "Modern travel website showcasing tour packages, destinations, inquiry forms, and a premium booking experience built for conversions.",
    url: "https://sightholidays.com/",
    technologies: ["Next.js", "Tailwind CSS", "SEO", "Lead Capture"],
    impact: "Live inquiries with structured itinerary discovery",
    status: "Live",
    accent: "amber",
    deliveryTime: "24-48 hours",
  },
  {
    title: "L & R Medical",
    slug: "lr-medical",
    client: "L & R Medical",
    category: "Healthcare Website",
    description:
      "Premium medical and healthcare website with service pages, doctor profiles, appointment inquiries, and trust-building blocks.",
    url: "https://l-r-medical-websitenew.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Responsive UI", "SEO"],
    impact: "Trust-focused medical brand presence",
    status: "Live",
    accent: "sky",
    deliveryTime: "24-48 hours",
  },
  {
    title: "Safe Core CCTV",
    slug: "safe-core-cctv",
    client: "Safe Core CCTV",
    category: "Security & CCTV Business",
    description:
      "CCTV and security services website with service blocks, product showcase, WhatsApp inquiries, and a conversion-driven layout.",
    url: "https://safe-core-cctvnew.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "WhatsApp Integration"],
    impact: "Lead generation for local security services",
    status: "Live",
    accent: "cyan",
    deliveryTime: "24-48 hours",
  },
  {
    title: "L & R Real Estate",
    slug: "lr-real-estate",
    client: "L & R Real Estate",
    category: "Real Estate Website",
    description:
      "Property listing and real estate brand website with project galleries, lead forms, and a premium property-discovery experience.",
    url: "https://l-r-real-statenew.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Lead Forms", "SEO"],
    impact: "Streamlined property inquiries and brand authority",
    status: "Live",
    accent: "violet",
    deliveryTime: "24-48 hours",
  },
  {
    title: "Venix Sports",
    slug: "venix-sports",
    client: "Venix Sports",
    category: "Sports & E-commerce",
    description:
      "Sports brand website with product catalog, premium hero visuals, and a checkout-ready e-commerce structure.",
    url: "https://venix-sports-webwiteapp.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "E-commerce UI"],
    impact: "Modern sports brand experience built to scale",
    status: "Live",
    accent: "lime",
    deliveryTime: "24-48 hours",
  },
  {
    title: "Vikram Garage",
    slug: "vikram-garage",
    client: "Vikram Garage",
    category: "Auto Service Business",
    description:
      "Auto garage and vehicle service website with service categories, booking enquiry, and a strong local-business presence.",
    url: "https://vikram-garagenew.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "GMB Ready"],
    impact: "Local visibility and booking inquiries",
    status: "Live",
    accent: "amber",
    deliveryTime: "24-48 hours",
  },
  {
    title: "Instagram Downloader",
    slug: "instagram-downloader",
    client: "SaaS Tool",
    category: "SaaS Web App",
    description:
      "Lightweight web tool for downloading Instagram content with a clean, ad-friendly UI and fast performance.",
    url: "https://instagram-downloader-theta-steel.vercel.app/",
    technologies: ["Next.js", "React", "API Integration"],
    impact: "High-traffic utility tool with monetizable surface",
    status: "Live",
    accent: "rose",
    deliveryTime: "24-48 hours",
  },
  {
    title: "Royal India Public Ltd",
    slug: "royal-india-public-ltd",
    client: "Royal India Public Ltd",
    category: "Corporate Website",
    description:
      "Corporate website with company overview, leadership, services, and investor-ready sections built for credibility.",
    url: "https://royal-india-public-ltd-website.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Corporate UI"],
    impact: "Premium corporate presence and trust signals",
    status: "Live",
    accent: "sky",
    deliveryTime: "24-48 hours",
  },
  {
    title: "Curick Business",
    slug: "curick-business",
    client: "Curick",
    category: "Business Website",
    description:
      "Modern business website with service pages, hero animations, and a clean lead-generation flow.",
    url: "https://curick-business-website-ww27.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    impact: "Conversion-focused business presence",
    status: "Live",
    accent: "cyan",
    deliveryTime: "24-48 hours",
  },
  {
    title: "Brandzoo Media Agency",
    slug: "brandzoo-media-agency",
    client: "Brandzoo Media",
    category: "Marketing Agency",
    description:
      "Marketing agency website with services, work, testimonials, and a high-trust conversion layout.",
    url: "https://brandzoo-media-agency.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Animations"],
    impact: "Agency credibility and lead capture",
    status: "Live",
    accent: "violet",
    deliveryTime: "24-48 hours",
  },
  {
    title: "Patliputra Super Smash",
    slug: "patliputra-super-smash",
    client: "Patliputra Super Smash",
    category: "Sports Tournament",
    description:
      "Cricket tournament website with team rosters, fixtures, sponsors, and a premium fan-experience layout.",
    url: "https://patliputra-super-smash-websitenew.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Dynamic UI"],
    impact: "Tournament branding with sponsor visibility",
    status: "Live",
    accent: "lime",
    deliveryTime: "24-48 hours",
  },
  {
    title: "Meri Maa Ki Rasoi",
    slug: "meri-maa-ki-rasoi",
    client: "Meri Maa Ki Rasoi",
    category: "Restaurant & Food",
    description:
      "Restaurant website with menu showcase, food photography, online order CTA, and a warm food-brand identity.",
    url: "https://meri-maa-ki-rasoinew.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Food UI"],
    impact: "Appetite-driving design with order CTAs",
    status: "Live",
    accent: "amber",
    deliveryTime: "24-48 hours",
  },
  {
    title: "Baba Real Estate",
    slug: "baba-real-estate",
    client: "Baba Real Estate",
    category: "Real Estate Website",
    description:
      "Real estate website with property listings, inquiry forms, and a premium discovery experience for buyers and investors.",
    url: "https://baba-real-estate.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "Lead Forms"],
    impact: "Higher inquiry rate from property visitors",
    status: "Live",
    accent: "rose",
    deliveryTime: "24-48 hours",
  },
];

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  credential: string;
  icon: typeof FileBadge;
  verifyUrl?: string;
  verified?: boolean;
};

export const certifications: Certification[] = [
  {
    title: "Full Stack Digital Marketing Nano Degree",
    issuer: "Jobaaj Learnings",
    year: "2025",
    credential: "ID: A1VGS104359",
    verifyUrl: "https://www.jobaajlearnings.com/certificate?file=certificate-83941-98-1",
    verified: true,
    icon: Award,
  },
  {
    title: "Google AI Fundamentals",
    issuer: "Google · Coursera",
    year: "May 2026",
    credential: "ID: YDBQV7PFV4OH",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/YDBQV7PFV4OH",
    verified: true,
    icon: Brain,
  },
  {
    title: "Meta Certified Digital Marketing Associate",
    issuer: "Meta Blueprint",
    year: "2026",
    credential: "Verification ready",
    icon: FileBadge,
  },
  {
    title: "Google Ads Search Certification",
    issuer: "Google Skillshop",
    year: "2026",
    credential: "Credential ID upload",
    icon: ShieldCheck,
  },
  {
    title: "Google Analytics 4 Certification",
    issuer: "Google Skillshop",
    year: "2026",
    credential: "Analytics verified",
    icon: BarChart3,
  },
  {
    title: "HubSpot Inbound Marketing",
    issuer: "HubSpot Academy",
    year: "2025",
    credential: "Training record",
    icon: Award,
  },
];

export const achievements = [
  {
    year: "2019",
    title: "Started performance marketing execution",
    detail: "Managed early campaigns across lead generation, local services, and social growth.",
  },
  {
    year: "2021",
    title: "Built repeatable campaign optimization systems",
    detail: "Introduced weekly testing cadence, tracking hygiene, and conversion-focused reporting.",
  },
  {
    year: "2023",
    title: "Relaunched Brandzoo Media for CEO-led growth",
    detail:
      "Repositioned the studio around performance marketing, paid ads, SEO, CRO, and website development for growth-stage brands.",
  },
  {
    year: "2026",
    title: "Scaling authority platform & web studio",
    detail:
      "CMS-backed portfolio, website projects gallery, case studies, certifications, and AI-search optimized content.",
  },
];

export const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Founder, Healthcare Brand",
    quote:
      "Amit helped us move from random lead campaigns to a structured growth system. The clarity in reporting and optimization made a visible business impact.",
    rating: 5,
    result: "41% lower CPL",
  },
  {
    name: "Nisha Kapoor",
    role: "D2C Growth Lead",
    quote:
      "The creative testing framework changed how we scale. We finally knew which hooks, offers, and audiences deserved more budget.",
    rating: 5,
    result: "2.9x ROAS",
  },
  {
    name: "Arjun Mehta",
    role: "Local Services Owner",
    quote:
      "Brandzoo Media rebuilt our website and GMB presence. Lead quality improved and our cost per inquiry dropped within 60 days.",
    rating: 5,
    result: "4.6x local actions",
  },
];

export const skills = [
  { name: "Meta Ads", category: "Acquisition", value: 96, icon: Target },
  { name: "Google Ads", category: "Acquisition", value: 92, icon: Search },
  { name: "GA4 & Tracking", category: "Analytics", value: 90, icon: DatabaseZap },
  { name: "SEO & AI Search", category: "Organic", value: 88, icon: Compass },
  { name: "Next.js / Web", category: "Web Dev", value: 90, icon: Code2 },
  { name: "Shopify / Woo", category: "Ecommerce", value: 86, icon: ShoppingBag },
  { name: "WordPress", category: "Web", value: 88, icon: Building2 },
  { name: "Canva / Figma", category: "Creative", value: 89, icon: WandSparkles },
  { name: "HubSpot / CRM", category: "Lifecycle", value: 82, icon: BriefcaseBusiness },
  { name: "Automation", category: "Systems", value: 85, icon: Flame },
];

export const dashboardKpis = [
  { label: "Leads Generated", value: "24.8K", delta: "+31%", icon: Users },
  { label: "Campaign ROAS", value: "3.6x", delta: "+18%", icon: TrendingUp },
  { label: "Managed Spend", value: "₹2.4Cr", delta: "+44%", icon: CircleDollarSign },
  { label: "Conversion Lift", value: "68%", delta: "+22%", icon: ChartNoAxesCombined },
];

export const dashboardSeries = [
  { month: "Jan", leads: 840, roas: 2.1, spend: 28 },
  { month: "Feb", leads: 1120, roas: 2.4, spend: 32 },
  { month: "Mar", leads: 1640, roas: 2.8, spend: 41 },
  { month: "Apr", leads: 2030, roas: 3.2, spend: 47 },
  { month: "May", leads: 2480, roas: 3.6, spend: 55 },
  { month: "Jun", leads: 2940, roas: 3.9, spend: 62 },
];

export type BlogSection = {
  heading: string;
  body: string;
};

export type BlogPost = {
  title: string;
  slug: string;
  category: string;
  readTime: string;
  excerpt: string;
  publishedAt: string;
  keywords: string[];
  intro: string;
  sections: BlogSection[];
  takeaways: string[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "How to diagnose a paid ads funnel before increasing budget",
    slug: "diagnose-paid-ads-funnel-before-scaling",
    category: "Performance Marketing",
    readTime: "6 min read",
    excerpt:
      "A practical framework for checking tracking, offer strength, landing-page friction, and creative fatigue before scaling spend.",
    publishedAt: "2026-02-12",
    keywords: [
      "Performance Marketing",
      "Meta Ads",
      "Google Ads",
      "Conversion Tracking",
      "ROAS Optimization",
    ],
    intro:
      "Scaling paid ad spend without diagnosing the funnel is the fastest way to lose money in performance marketing. Before you double a budget, run this four-layer check — tracking, offer, landing, creative — and you will know exactly where the leak is.",
    sections: [
      {
        heading: "Layer 1 — Tracking & attribution",
        body: "Confirm GA4 events, the Meta Conversions API, and Google Ads conversion actions are firing in real time. Misattributed conversions silently distort ROAS and lead you to scale the wrong campaigns. Run a 24-hour parity check against your CRM or order management system before any budget change.",
      },
      {
        heading: "Layer 2 — Offer strength",
        body: "A weak offer turns even great creative into a slow leak. Pressure-test the headline promise, the bonus stack, the price anchoring, and the urgency mechanism. If sales teams complain about lead quality, the offer is usually the issue — not the audience.",
      },
      {
        heading: "Layer 3 — Landing-page friction",
        body: "Open the landing page on a real mid-range Android phone over 4G. If it takes more than 3 seconds to be interactive, or the form has more than 5 fields, you are paying for clicks that bounce. Trim form length, compress images, lazy-load below-fold, and add visible trust signals above the fold.",
      },
      {
        heading: "Layer 4 — Creative fatigue",
        body: "Pull the last 14 days of creative performance and rank by 3-second view rate, hook rate, and cost per result. If your top creative has lost 25% of its hook rate week-over-week, it is fatigued — refresh hooks before scaling. Increasing budget on a fatigued ad accelerates ad-set CPM inflation.",
      },
    ],
    takeaways: [
      "Don't scale budget without 24-hour tracking parity against your CRM.",
      "Diagnose tracking, offer, landing, and creative — in that order.",
      "Refresh fatigued creative before budget increases, not after.",
    ],
  },
  {
    title: "What makes a Meta Ads creative testing system profitable",
    slug: "profitable-meta-ads-creative-testing-system",
    category: "Meta Ads",
    readTime: "7 min read",
    excerpt:
      "The hooks, proof points, formats, testing cadence, and decision rules that separate random ads from a growth engine.",
    publishedAt: "2026-03-04",
    keywords: [
      "Meta Ads",
      "Facebook Ads",
      "Instagram Ads",
      "Creative Testing",
      "UGC",
    ],
    intro:
      "A profitable Meta Ads account is rarely about one viral ad — it is about a creative testing system that compounds learning every week. Here is the structure I use to find statistically meaningful winners without burning the budget.",
    sections: [
      {
        heading: "Map buyer objections to creative angles",
        body: "Before designing a single creative, list the top 5 objections your sales team hears. Each objection becomes a creative angle — proof, comparison, before-after, demo, or testimonial. Random aesthetic tests waste budget; objection-mapped tests teach you what actually moves buyers.",
      },
      {
        heading: "Hook rate is the leading indicator",
        body: "Optimize for 3-second view rate (hook rate) above 30% before you worry about CTR or ROAS. If the hook does not stop the scroll, the rest of the creative does not matter. Test 3-5 hook variations against the same body to isolate the hook itself.",
      },
      {
        heading: "Run UGC and produced creative side-by-side",
        body: "UGC-style videos from real creators outperform polished studio ads in most consumer categories — but the gap is smaller in premium B2B. Run both formats in the same test and let the cost-per-result decide, not your aesthetic preference.",
      },
      {
        heading: "Decision rules over gut calls",
        body: "Set written kill and scale rules — for example, kill any ad below 1.0x ROAS after ₹10K spend, scale any ad above 2.5x ROAS after ₹15K spend. Documented rules prevent emotional decisions and let the testing system run on autopilot week after week.",
      },
    ],
    takeaways: [
      "Map creative angles to real buyer objections, not aesthetic ideas.",
      "Hook rate > 30% is the gate before you optimize anything downstream.",
      "Run UGC and produced creative side-by-side — let cost-per-result decide.",
      "Write kill/scale rules before launching, not after a bad week.",
    ],
  },
  {
    title:
      "Why your business website is silently losing leads (and how to fix it)",
    slug: "business-website-losing-leads",
    category: "Website Development",
    readTime: "5 min read",
    excerpt:
      "Speed, structure, trust signals, mobile UX, and conversion blocks — the website fundamentals that decide whether traffic becomes leads.",
    publishedAt: "2026-04-09",
    keywords: [
      "Website Development",
      "Conversion Rate Optimization",
      "Landing Page Design",
      "Core Web Vitals",
      "Mobile UX",
    ],
    intro:
      "Most business websites lose 60-80% of their potential leads not because of traffic — but because of how the site is built. Here are the five fixes I make on almost every website project, and what each one does to conversion.",
    sections: [
      {
        heading: "Fix 1 — Speed below 2 seconds on mobile",
        body: "Every additional second of load time drops mobile conversion by ~12%. Compress images to AVIF/WebP, lazy-load below-fold media, defer non-critical JavaScript, and serve from a CDN. On modern Next.js sites, this is built in — but only if you actually use the Image component and dynamic imports.",
      },
      {
        heading: "Fix 2 — One clear action above the fold",
        body: "Visitors decide whether to engage in 5 seconds. Above the fold, surface one headline, one supporting line, one trust signal, and one CTA — not a menu of options. The CTA should restate the outcome, not the action ('Get a free strategy call', not 'Submit').",
      },
      {
        heading: "Fix 3 — Trust blocks where the decision happens",
        body: "Place testimonials, logos, ratings, and result tags next to the CTA — not on a separate page. Trust signals at the exact moment of decision lift form completion rates by 20-40% in our tests.",
      },
      {
        heading: "Fix 4 — Mobile-first form design",
        body: "Reduce form fields to the minimum your sales team actually needs. Use input modes (`inputMode=\"tel\"`, `email`), large touch targets (44px+), and avoid required fields that block submission. If WhatsApp is a primary channel for your audience, offer a WhatsApp button alongside the form.",
      },
      {
        heading: "Fix 5 — SEO + schema on every page",
        body: "Add semantic HTML, descriptive titles and descriptions, Open Graph tags, and JSON-LD schema (Organization, Service, FAQ, Breadcrumb) so Google and AI search engines understand the site. This is now table stakes for ranking and for being cited inside ChatGPT, Perplexity, and Google AI Overviews.",
      },
    ],
    takeaways: [
      "Sub-2-second mobile load is the entry ticket — not a nice-to-have.",
      "One action above the fold beats a menu of options.",
      "Place trust signals where the decision happens, not on a separate page.",
      "Schema markup is now table stakes for SEO and AI search visibility.",
    ],
  },
];

export const caseStudies = [
  {
    title: "Scaled a premium clinic pipeline with Meta Ads and landing-page CRO",
    slug: "premium-clinic-lead-scale",
    industry: "Healthcare",
    objective: "Increase qualified consultation leads while reducing wasted ad spend.",
    result: "3.8x ROAS and 41% lower cost per qualified lead",
    summary:
      "Rebuilt the offer flow, launched segmented Meta campaigns, and introduced conversion-focused landing pages with stronger proof and tracking.",
    metrics: [
      { label: "ROAS", value: "3.8x", trend: "+126%" },
      { label: "Qualified Leads", value: "1,240", trend: "+212%" },
      { label: "CPL", value: "-41%", trend: "Improved" },
      { label: "Conversion Rate", value: "18.6%", trend: "+7.4 pts" },
    ],
    strategy: [
      "Segmented cold and warm audiences by intent and service interest.",
      "Built creative angles around proof, outcomes, and objections.",
      "Optimized landing-page trust blocks, form length, and follow-up speed.",
    ],
    chart: [
      { month: "Jan", leads: 140, roas: 1.8 },
      { month: "Feb", leads: 210, roas: 2.2 },
      { month: "Mar", leads: 330, roas: 2.9 },
      { month: "Apr", leads: 470, roas: 3.4 },
      { month: "May", leads: 620, roas: 3.8 },
    ],
  },
  {
    title: "Improved ecommerce acquisition efficiency through creative testing",
    slug: "ecommerce-creative-performance-system",
    industry: "D2C Ecommerce",
    objective: "Build a repeatable creative testing engine for profitable scaling.",
    result: "2.9x blended ROAS with 34 winning ad variations",
    summary:
      "Introduced a structured testing matrix for hooks, offers, UGC, landing pages, and retargeting sequences.",
    metrics: [
      { label: "Blended ROAS", value: "2.9x", trend: "+81%" },
      { label: "Revenue", value: "+148%", trend: "Scaled" },
      { label: "CAC", value: "-28%", trend: "Improved" },
      { label: "Winners Found", value: "34", trend: "New ads" },
    ],
    strategy: [
      "Mapped buyer objections to creative concepts and UGC briefs.",
      "Separated acquisition, retargeting, and retention campaigns.",
      "Used weekly creative readouts to scale only statistically meaningful winners.",
    ],
    chart: [
      { month: "Jan", leads: 80, roas: 1.4 },
      { month: "Feb", leads: 130, roas: 1.9 },
      { month: "Mar", leads: 180, roas: 2.3 },
      { month: "Apr", leads: 240, roas: 2.6 },
      { month: "May", leads: 310, roas: 2.9 },
    ],
  },
  {
    title: "Built local SEO and GMB demand engine for a service business",
    slug: "local-seo-gmb-demand-engine",
    industry: "Local Services",
    objective: "Increase qualified calls and local discovery without relying only on paid ads.",
    result: "4.6x more local actions and 63% growth in organic calls",
    summary:
      "Optimized local profiles, service pages, review flows, and search intent content to capture high-intent demand.",
    metrics: [
      { label: "Local Actions", value: "4.6x", trend: "+360%" },
      { label: "Organic Calls", value: "+63%", trend: "Growth" },
      { label: "Map Views", value: "+218%", trend: "Visibility" },
      { label: "Reviews", value: "+74", trend: "New proof" },
    ],
    strategy: [
      "Restructured GMB categories, services, posts, and review prompts.",
      "Created service-area landing pages with FAQs and proof.",
      "Connected call tracking and local conversion reporting.",
    ],
    chart: [
      { month: "Jan", leads: 55, roas: 1.2 },
      { month: "Feb", leads: 94, roas: 1.7 },
      { month: "Mar", leads: 138, roas: 2.1 },
      { month: "Apr", leads: 196, roas: 2.7 },
      { month: "May", leads: 253, roas: 3.1 },
    ],
  },
];

export const adminModules = [
  {
    title: "Case Studies",
    href: "/admin/case-studies",
    description: "Results, metrics, strategy breakdowns, screenshots, and charts.",
    count: caseStudies.length,
    icon: LineChart,
  },
  {
    title: "Services",
    href: "/admin/services",
    description: "Service pages, benefits, deliverables, icons, and SEO fields.",
    count: services.length,
    icon: Sparkles,
  },
  {
    title: "Website Projects",
    href: "/admin/website-projects",
    description: "Live website portfolio — titles, URLs, screenshots, tech, and impact.",
    count: websiteProjects.length,
    icon: Monitor,
  },
  {
    title: "Blog",
    href: "/admin/blog",
    description: "Insight posts, categories, tags, rich content, and metadata.",
    count: blogPosts.length,
    icon: FileBadge,
  },
  {
    title: "Media",
    href: "/admin/media",
    description: "Certification files, case screenshots, logos, videos, and OG assets.",
    count: 6,
    icon: DatabaseZap,
  },
  {
    title: "Inquiries",
    href: "/admin/inquiries",
    description: "Qualified leads, budgets, service interest, and follow-up statuses.",
    count: 12,
    icon: Users,
  },
  {
    title: "SEO",
    href: "/admin/seo",
    description: "Titles, descriptions, schema, canonical URLs, sitemap priorities.",
    count: 18,
    icon: Star,
  },
];

export const clientProblems = [
  {
    title: "Ad spend leaks without a clear ROAS story",
    problem: "Campaigns are running, but the numbers don't connect to revenue or qualified pipeline.",
    solution:
      "Rebuilt tracking, cleaner attribution, conversion-first creative, and weekly ROAS reviews tied to real business outcomes.",
    icon: CircleDollarSign,
  },
  {
    title: "Leads come in, but sales calls them junk",
    problem: "Forms fill up with low-intent leads who never qualify or never pick up the phone.",
    solution:
      "Tightened the offer, retargeted lookalikes of best buyers, added qualification fields, and connected CRM handoff.",
    icon: Users,
  },
  {
    title: "Website looks outdated and converts below potential",
    problem: "The site feels slow, the mobile experience is broken, and visitors leave before filling the form.",
    solution:
      "Rebuilt the website on a modern stack — fast, mobile-first, SEO-ready, with conversion blocks engineered around the buyer journey.",
    icon: Monitor,
  },
  {
    title: "Local visibility and organic demand are flat",
    problem: "Maps, Google Business Profile, and search rankings aren't pulling their share of qualified demand.",
    solution:
      "Local SEO, GMB posts, review velocity, service-area pages, and intent content built to compound month after month.",
    icon: MapPinCheck,
  },
  {
    title: "Funnel pages convert below their potential",
    problem: "Traffic is fine, the landing page is the bottleneck — friction, weak proof, slow load, unclear offer.",
    solution:
      "CRO audits, sharper hero copy, trust blocks, faster pages, and form/checkout tightening with measurable lifts.",
    icon: Network,
  },
  {
    title: "Brand looks weaker than the competition",
    problem: "Positioning, messaging, and visuals don't communicate the premium value the business actually delivers.",
    solution:
      "Brand positioning, messaging matrix, premium website design, and consistent creative system across paid, social, and web.",
    icon: Gem,
  },
];

export const whyWorkWithMe = [
  {
    title: "CEO-led, not handed off",
    detail:
      "Strategy and decisions sit with Amit Rai directly. No account-manager telephone game between you and the work.",
    icon: ShieldCheck,
  },
  {
    title: "Marketing + website under one roof",
    detail:
      "Performance marketing, SEO, and website development are run by the same brain — so the funnel and the site finally agree.",
    icon: Layers,
  },
  {
    title: "Performance-first, not vanity-first",
    detail:
      "Every dashboard ties back to qualified leads, ROAS, CAC, and revenue — the numbers your CFO actually cares about.",
    icon: TrendingUp,
  },
  {
    title: "Tracking & analytics done properly",
    detail:
      "GA4 events, conversion APIs, server-side tracking, and CRM handoff configured so the data you scale on is real.",
    icon: BarChart3,
  },
  {
    title: "Creative testing as a system",
    detail:
      "Hooks, formats, and UGC briefs run on a weekly cadence so winners are statistically real — not a lucky ad.",
    icon: WandSparkles,
  },
  {
    title: "Transparent weekly reporting",
    detail:
      "Plain-English weekly reads on what moved, what didn't, what we're killing, and what we're scaling next.",
    icon: LineChart,
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Audit & growth diagnostic",
    detail:
      "Deep audit of your offer, funnel, tracking, ad accounts, GA4, website, and creative library. We name the real bottleneck.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Strategy & 90-day roadmap",
    detail:
      "A written growth plan — channels, budget split, creative angles, KPIs, and what we'll learn in the first 30/60/90 days.",
    icon: Workflow,
  },
  {
    step: "03",
    title: "Build: website, tracking, creatives",
    detail:
      "Website or landing-page build, conversion tracking, creative briefs, and a testing matrix queued up for launch week.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Launch & optimize weekly",
    detail:
      "Campaigns go live with budget pacing, daily monitoring, weekly creative readouts, and bid/audience optimization.",
    icon: Target,
  },
  {
    step: "05",
    title: "Scale what works",
    detail:
      "Only statistically meaningful winners get more budget. Losers get killed early. Compounding wins, not chasing them.",
    icon: TrendingUp,
  },
];

export const faqs = [
  {
    question: "What kind of businesses do you work with?",
    answer:
      "Growth-stage D2C ecommerce brands, healthcare and clinics, local service businesses, B2B SaaS, and app-first companies. Typical engagements start when there is a real offer in market and at least some paid spend already running.",
  },
  {
    question: "What's the typical ad spend range you manage?",
    answer:
      "Most active accounts sit between INR 1L to INR 30L+ per month across Meta and Google. I work with both founder-led brands scaling spend for the first time and established teams looking for a senior performance lead.",
  },
  {
    question: "Do you build websites too, or only run ads?",
    answer:
      "Both. I build modern business websites, landing pages, portfolio websites, e-commerce stores, and lead-generation sites on Next.js, Shopify, and WordPress — engineered for speed, SEO, and conversion. Most clients combine website development with performance marketing.",
  },
  {
    question: "How quickly should I expect to see results?",
    answer:
      "Tracking and creative fixes typically show inside 2-3 weeks. Meaningful ROAS and CAC improvements usually compound across the first 60-90 days as the testing system surfaces real winners. SEO is a 90-180 day horizon.",
  },
  {
    question: "Do you work as a freelancer or a full agency?",
    answer:
      "Brandzoo Media is CEO-led and senior-driven. Engagements are run by Amit Rai directly, supported by a vetted bench of specialists for creative, motion, copy, and dev when projects need them.",
  },
  {
    question: "What does a typical engagement look like?",
    answer:
      "A 30-day diagnostic and build sprint, then a monthly retainer for ongoing performance marketing, creative testing, and reporting. Project-based engagements are also possible for website builds, audits, funnel rebuilds, or one-off launches.",
  },
  {
    question: "How do you report on results?",
    answer:
      "Weekly written readouts (what moved, what didn't, what we're testing next) plus a live dashboard for ROAS, CPL, conversion rate, spend, and pipeline. No 40-slide monthly decks for the sake of it.",
  },
  {
    question: "Do you offer SEO and AI search optimization?",
    answer:
      "Yes. SEO, content clusters, schema, GMB optimization, and AI-search visibility (ChatGPT, Perplexity, Google AI Overviews) are core services. Most growth systems work best when paid acquisition and organic demand reinforce each other.",
  },
];

export const webDevHighlights = [
  {
    title: "Business Websites",
    detail:
      "Premium corporate and service-business websites that communicate trust, expertise, and authority from the first scroll.",
    icon: Building2,
  },
  {
    title: "Landing Pages",
    detail:
      "Single-page conversion machines designed around one offer, one audience, and one clear action.",
    icon: Target,
  },
  {
    title: "Portfolio Websites",
    detail:
      "Personal brand and creator portfolios that turn visits into inquiries, collaborations, and clients.",
    icon: Sparkles,
  },
  {
    title: "E-commerce Websites",
    detail:
      "Shopify, WooCommerce, and headless Next.js storefronts engineered for fast checkout and AOV growth.",
    icon: ShoppingBag,
  },
  {
    title: "Lead Generation Websites",
    detail:
      "Forms, WhatsApp flows, calculators, and quizzes built to capture qualified leads, not just visitors.",
    icon: Users,
  },
  {
    title: "SEO-Optimized Websites",
    detail:
      "Schema, Core Web Vitals, semantic structure, and content systems that rank from launch day.",
    icon: Globe2,
  },
];

export const webDevFeatures = [
  "Mobile-first, fully responsive design",
  "Sub-2-second load times on real devices",
  "On-page SEO, schema markup, and AI-search optimization",
  "Conversion-focused layout, CTAs, and trust blocks",
  "Analytics, pixels, and conversion tracking pre-wired",
  "WhatsApp, lead form, and CRM integrations",
  "Admin-editable content where it matters",
  "Built on modern stacks — Next.js, Shopify, WordPress",
];

export const webDevTech = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Shopify",
  "WooCommerce",
  "WordPress",
  "Framer Motion",
  "Supabase",
  "Vercel",
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getWebsiteProject(slug: string) {
  return websiteProjects.find((project) => project.slug === slug);
}
