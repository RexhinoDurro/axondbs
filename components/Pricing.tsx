"use client";

import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { IconArrowRight, IconCheck } from "./ui/Icon";

const perks = [
  "A 60-minute architecture review",
  "A written blueprint with schemas & SLAs",
  "A fixed-price quote within 48 hours",
  "No retainer. No sales deck. No obligation.",
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Tailored to <span className="text-gradient">your scope.</span>
            </>
          }
          description="Every engagement is scoped to your data, your stack and your team. Reach out and we'll send a fixed-price quote — on the house."
        />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-16 max-w-4xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card-lg">
            <div className="grid lg:grid-cols-[1.2fr_1fr]">
              <div className="p-10 sm:p-12">
                <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                  Free quote
                </p>
                <h3 className="mt-4 text-3xl font-semibold tracking-tighter text-slate-900 sm:text-4xl">
                  Contact us for a{" "}
                  <span className="text-gradient">free quote.</span>
                </h3>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  Share your goals and constraints. We&apos;ll respond within
                  one business day with a concrete proposal.
                </p>
                <div className="mt-8">
                  <Button
                    href="#contact"
                    size="lg"
                    icon={<IconArrowRight size={16} />}
                  >
                    Contact for free quote
                  </Button>
                </div>
              </div>

              <div className="border-t border-slate-200 bg-slate-50 p-10 sm:p-12 lg:border-l lg:border-t-0">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  What you&apos;ll receive
                </p>
                <ul className="mt-6 space-y-4">
                  {perks.map((perk) => (
                    <li
                      key={perk}
                      className="flex items-start gap-3 text-[15px] text-slate-700"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500 text-white">
                        <IconCheck size={13} />
                      </span>
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
