"use client";

import { services, type Service } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import {
  IconDatabase,
  IconCode,
  IconFlow,
  IconChart,
  IconShield,
  IconCheck,
  IconArrowRight,
} from "./ui/Icon";

const iconMap = {
  database: IconDatabase,
  code: IconCode,
  flow: IconFlow,
  chart: IconChart,
  shield: IconShield,
};

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              One partner for your{" "}
              <span className="text-gradient">entire data stack.</span>
            </>
          }
          description="AxonDBS replaces the patchwork of consultants, managed services and side-projects your team has been duct-taping together."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.06}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon];

  return (
    <a
      href="#contact"
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-card-lg"
    >
      {/* Image header */}
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
        <div className="absolute left-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-brand-600 shadow-sm backdrop-blur">
          <Icon size={20} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900">
          {service.title}
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
          {service.description}
        </p>

        <ul className="mt-5 space-y-2">
          {service.points.map((p) => (
            <li
              key={p}
              className="flex items-center gap-2 text-sm text-slate-700"
            >
              <IconCheck size={14} className="shrink-0 text-brand-500" />
              {p}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex items-center gap-1.5 text-sm font-medium text-brand-600 transition-transform group-hover:translate-x-0.5">
          Learn more
          <IconArrowRight size={14} />
        </div>
      </div>
    </a>
  );
}
