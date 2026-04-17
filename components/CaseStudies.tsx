"use client";

import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import { IconArrowRight } from "./ui/Icon";

type CaseStudy = {
  client: string;
  headline: string;
  metric: string;
  metricLabel: string;
  image: string;
  tags: string[];
};

const cases: CaseStudy[] = [
  {
    client: "Lumen Health",
    headline: "1.3B rows migrated with zero downtime",
    metric: "0",
    metricLabel: "seconds of downtime",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=85",
    tags: ["Postgres", "Zero-downtime", "Healthcare"],
  },
  {
    client: "Tropic Commerce",
    headline: "Query p99 cut from 1.8s to 90ms in one sprint",
    metric: "20×",
    metricLabel: "faster queries",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=85",
    tags: ["Performance", "Indexes", "E-commerce"],
  },
  {
    client: "Atlas Freight",
    headline: "Six brittle scripts replaced with one pipeline",
    metric: "99.99%",
    metricLabel: "pipeline reliability",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1400&q=85",
    tags: ["Integrations", "ETL", "Logistics"],
  },
];

export default function CaseStudies() {
  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Case studies"
          title={
            <>
              Real outcomes.{" "}
              <span className="text-gradient">Real teams.</span>
            </>
          }
          description="A handful of the migrations, rewrites and integrations we've shipped for clients across healthcare, commerce and logistics."
        />

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.client} delay={i * 0.08}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={c.image}
                    alt={c.client}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                  <div className="absolute inset-x-5 bottom-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-300">
                      {c.client}
                    </p>
                    <p className="mt-1 text-3xl font-semibold tracking-tight">
                      {c.metric}
                    </p>
                    <p className="text-xs text-white/70">{c.metricLabel}</p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold leading-snug tracking-tight text-slate-900">
                    {c.headline}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-brand-600 transition-transform group-hover:translate-x-0.5">
                    Read case study
                    <IconArrowRight size={14} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
