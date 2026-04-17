export type ServiceKey =
  | "database"
  | "code"
  | "flow"
  | "chart"
  | "shield";

export type Service = {
  title: string;
  description: string;
  icon: ServiceKey;
  points: string[];
  image: string;
};

// Unsplash hotlinked photo URLs (publicly hosted CDN).
export const services: Service[] = [
  {
    title: "Managed databases",
    description:
      "Production-grade Postgres, Mongo, ClickHouse and Redis with zero-downtime migrations, automated backups and point-in-time recovery.",
    icon: "database",
    points: ["99.99% SLA", "PITR backups", "Auto-scaling", "24/7 on-call"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Custom software",
    description:
      "Bespoke applications, APIs and internal tools engineered around your data by a team that ships every single week.",
    icon: "code",
    points: ["TypeScript + Go", "API design", "Internal tools", "Mobile apps"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Integrations & ETL",
    description:
      "Stitch together your entire stack — Stripe, Salesforce, HubSpot, Snowflake, Kafka — with pipelines you never have to babysit.",
    icon: "flow",
    points: ["200+ connectors", "CDC streams", "Schema drift alerts", "SLA monitoring"],
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Analytics & BI",
    description:
      "Real-time dashboards, custom metrics and warehouse modeling so every team makes decisions on fresh, trustworthy data.",
    icon: "chart",
    points: ["Sub-second queries", "Self-serve dashboards", "dbt models", "Embedded analytics"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Security & compliance",
    description:
      "SOC 2 Type II, HIPAA and GDPR-ready controls baked in. Encryption at rest, in flight and in use — audited everywhere.",
    icon: "shield",
    points: ["SOC 2 · HIPAA", "KMS + HSM", "RBAC + audit", "Pen-tested quarterly"],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80",
  },
];

export type Stat = {
  value: number;
  suffix: string;
  label: string;
  hint: string;
};

export const stats: Stat[] = [
  { value: 120, suffix: "+", label: "Clients served", hint: "from seed startups to public companies" },
  { value: 2.4, suffix: "B", label: "Records migrated", hint: "without a single byte lost" },
  { value: 99.99, suffix: "%", label: "Platform uptime", hint: "measured over the last 24 months" },
  { value: 48, suffix: "", label: "US states reached", hint: "plus clients in 14 countries" },
];

export type Step = {
  n: string;
  title: string;
  body: string;
  image: string;
};

export const steps: Step[] = [
  {
    n: "01",
    title: "Discover",
    body: "A free 60-minute architecture review. We map your data flows, bottlenecks and growth targets — no slides, just a whiteboard.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "02",
    title: "Design",
    body: "You get a concrete blueprint: schemas, pipelines, SLAs, a migration runbook and a fixed-price quote. Approve in 48 hours.",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "03",
    title: "Deploy",
    body: "We cut over behind a feature flag. Dual-write, verify, switch. Most migrations are invisible to your end users.",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
  },
  {
    n: "04",
    title: "Operate",
    body: "24/7 on-call, weekly health reports, quarterly roadmap reviews. We behave like your platform team — because we are.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  logo?: string;
};

// Real people portraits from Unsplash.
export const testimonials: Testimonial[] = [
  {
    quote:
      "AxonDBS migrated 1.3 billion rows from a legacy Oracle instance to Postgres with zero downtime. I still can't believe how smooth it was — our customers never noticed.",
    name: "Marcus Rivera",
    role: "VP Engineering",
    company: "Lumen Health",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
  },
  {
    quote:
      "They don't just ship code, they own outcomes. Our query p99 dropped from 1.8s to 90ms in a single sprint and has stayed there for eight months.",
    name: "Priya Shah",
    role: "CTO",
    company: "Tropic Commerce",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80",
  },
  {
    quote:
      "Best engineering partner we've ever had. The integrations they built between Stripe, Salesforce and our warehouse replaced six fragile scripts overnight.",
    name: "Daniel Okafor",
    role: "Head of Data",
    company: "Atlas Freight",
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=256&q=80",
  },
  {
    quote:
      "We had been burned by three previous consultants. AxonDBS delivered the discovery doc in 48 hours and every number in it turned out to be correct.",
    name: "Elena Kowalski",
    role: "Director of Platform",
    company: "Harbor Logistics",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=256&q=80",
  },
  {
    quote:
      "Their weekly health report is the first thing I open on Monday. It reads like a great piece of writing — you actually understand what the data is doing.",
    name: "James Whitaker",
    role: "CEO",
    company: "Palmtree Payments",
    avatar:
      "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&w=256&q=80",
  },
  {
    quote:
      "Picking AxonDBS was the best decision our board made last year. They replaced a full platform team at a fraction of the cost and the output is better.",
    name: "Amelia Foster",
    role: "COO",
    company: "Riptide Finance",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80",
  },
];

// Short inline quotes scattered across the page.
export const shortQuotes = [
  {
    quote: "Feels like hiring a world-class platform team on day one.",
    name: "Priya Shah",
    role: "CTO, Tropic Commerce",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=128&q=80",
  },
  {
    quote: "Zero downtime across 1.3B rows. Still a miracle to us.",
    name: "Marcus Rivera",
    role: "VP Eng, Lumen Health",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=128&q=80",
  },
  {
    quote: "Replaced six fragile scripts overnight.",
    name: "Daniel Okafor",
    role: "Head of Data, Atlas",
    avatar:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=128&q=80",
  },
];

export type Tier = {
  name: string;
  price: string;
  cadence: string;
  tagline: string;
  features: string[];
  popular?: boolean;
};

export const tiers: Tier[] = [
  {
    name: "Starter",
    price: "$2,400",
    cadence: "/month",
    tagline: "For growing teams that need a dedicated database partner.",
    features: [
      "1 managed database cluster",
      "Daily backups + 7-day PITR",
      "Business-hours support",
      "Monthly health report",
      "Up to 50 GB storage",
    ],
  },
  {
    name: "Growth",
    price: "$6,800",
    cadence: "/month",
    tagline: "Everything in Starter, plus the integrations layer you've been missing.",
    features: [
      "Up to 4 database clusters",
      "24/7 on-call response",
      "ETL pipelines + CDC",
      "Custom dashboards",
      "Quarterly architecture reviews",
      "Up to 500 GB storage",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    tagline: "White-glove, regulated-industry and multi-region deployments.",
    features: [
      "Unlimited clusters & regions",
      "SOC 2 / HIPAA / GDPR package",
      "Dedicated Slack channel",
      "Named solutions architect",
      "99.99% uptime SLA",
      "Custom software team",
    ],
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Where are you based and do you work remotely?",
    a: "Our HQ is in Jacksonville, Florida, but our team is distributed across the Americas. We work with clients in any timezone and can match your working hours.",
  },
  {
    q: "What database engines do you support?",
    a: "Postgres, MySQL, MongoDB, Redis, ClickHouse, DynamoDB, Snowflake and BigQuery in production. We're engine-agnostic and will recommend the right tool for your workload.",
  },
  {
    q: "Can you work with our existing cloud provider?",
    a: "Yes. AWS, GCP, Azure, Fly, Railway, Render — we deploy inside your cloud account, so you own the infrastructure and we own the operation.",
  },
  {
    q: "How long does a typical migration take?",
    a: "Small migrations (under 100 GB) land in 2–3 weeks. Enterprise migrations with complex schemas and zero-downtime requirements run 6–12 weeks. We scope this precisely during discovery.",
  },
  {
    q: "What compliance frameworks do you cover?",
    a: "We are SOC 2 Type II certified and have completed engagements under HIPAA, GDPR, PCI-DSS and FedRAMP Moderate. We can share our ISMS on request under NDA.",
  },
  {
    q: "Do you offer fixed-price engagements?",
    a: "Yes. After the free discovery we return a fixed-price quote for the design and migration phase. Operations are billed as a monthly retainer from our pricing tiers.",
  },
];

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

// Real brand logos via simpleicons CDN — returns real SVG marks.
// Format: https://cdn.simpleicons.org/{slug}/{hex-without-hash}
export const integrationBrands = [
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Redis", slug: "redis" },
  { name: "ClickHouse", slug: "clickhouse" },
  { name: "Snowflake", slug: "snowflake" },
  { name: "Amazon AWS", slug: "amazonaws" },
  { name: "Google Cloud", slug: "googlecloud" },
  { name: "Vercel", slug: "vercel" },
  { name: "Stripe", slug: "stripe" },
  { name: "Salesforce", slug: "salesforce" },
  { name: "HubSpot", slug: "hubspot" },
  { name: "Slack", slug: "slack" },
  { name: "Apache Kafka", slug: "apachekafka" },
  { name: "Docker", slug: "docker" },
  { name: "Kubernetes", slug: "kubernetes" },
  { name: "GitHub", slug: "github" },
  { name: "Linear", slug: "linear" },
  { name: "Datadog", slug: "datadog" },
  { name: "Grafana", slug: "grafana" },
  { name: "dbt", slug: "dbt" },
];
