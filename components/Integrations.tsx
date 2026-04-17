"use client";

import SectionHeading from "./ui/SectionHeading";
import { BrandLogo } from "./brand/IntegrationMarks";
import { integrationBrands } from "@/lib/data";
import Reveal from "./ui/Reveal";

export default function Integrations() {
  return (
    <section
      id="integrations"
      className="relative border-y border-slate-200 bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Integrations"
          title={
            <>
              Plug in to <span className="text-gradient">200+ tools.</span>
            </>
          }
          description="Pre-built connectors for the platforms you already use. Missing one? We ship custom integrations in days, not months."
        />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {integrationBrands.slice(0, 20).map((b) => (
              <div
                key={b.slug}
                title={b.name}
                className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-card"
              >
                <BrandLogo slug={b.slug} name={b.name} size={36} />
                <span className="text-xs font-medium text-slate-600">
                  {b.name}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
