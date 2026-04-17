"use client";

import { steps } from "@/lib/data";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

export default function Process() {
  return (
    <section id="process" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              From first call to{" "}
              <span className="text-gradient">production in weeks.</span>
            </>
          }
          description="A calm, predictable process that respects your team's time and gives you concrete milestones from day one."
        />

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.06}>
              <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg">
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-white/95 px-3 text-sm font-semibold text-brand-600 shadow-sm backdrop-blur">
                    {step.n}
                  </span>
                </div>
                <div className="p-7 sm:p-8">
                  <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                    {step.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
