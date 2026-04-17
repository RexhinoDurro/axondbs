"use client";

import { motion } from "framer-motion";
import Reveal from "./ui/Reveal";
import {
  IconBolt,
  IconLock,
  IconBranch,
  IconActivity,
  IconCloud,
  IconSparkle,
  IconCheck,
} from "./ui/Icon";

const featureA = [
  { icon: IconBolt, text: "Query performance gains of 10–100x" },
  { icon: IconLock, text: "End-to-end encryption with rotating keys" },
  { icon: IconBranch, text: "Infra-as-code with full audit history" },
];

const featureB = [
  { icon: IconActivity, text: "Real-time anomaly detection on every table" },
  { icon: IconCloud, text: "Adaptive scaling that costs 30% less than autopilot" },
  { icon: IconSparkle, text: "Quarterly architecture reviews with a real human" },
];

export default function FeatureSplit() {
  return (
    <section className="relative border-b border-slate-200 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl space-y-28 px-6 sm:space-y-36 sm:px-8">
        {/* Row 1 */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                Performance
              </p>
              <h3 className="mt-4 text-4xl font-semibold tracking-tighter text-slate-900 sm:text-5xl">
                The database layer you{" "}
                <span className="text-gradient">deserve.</span>
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                We tune engines, rewrite slow queries, denormalize where it
                pays and add the right indexes — not the most indexes. Your
                p99 should feel like your p50.
              </p>
              <ul className="mt-8 space-y-3">
                {featureA.map((f) => {
                  const Ico = f.icon;
                  return (
                    <li
                      key={f.text}
                      className="flex items-start gap-3 text-[15px] text-slate-700"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                        <Ico size={13} />
                      </span>
                      {f.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <PerformanceVisual />
          </Reveal>
        </div>

        {/* Row 2 */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="lg:order-2">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
                Observability
              </p>
              <h3 className="mt-4 text-4xl font-semibold tracking-tighter text-slate-900 sm:text-5xl">
                See everything. <br />
                <span className="text-gradient">Fix anything.</span>
              </h3>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                A single pane of glass across every database, every pipeline,
                every dependency. AxonDBS sends you the fire alarms — and the
                extinguisher.
              </p>
              <ul className="mt-8 space-y-3">
                {featureB.map((f) => {
                  const Ico = f.icon;
                  return (
                    <li
                      key={f.text}
                      className="flex items-start gap-3 text-[15px] text-slate-700"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                        <Ico size={13} />
                      </span>
                      {f.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:order-1">
            <ObservabilityVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function PerformanceVisual() {
  return (
    <div className="relative">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-card-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=85"
          alt="Code editor"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
      </div>

      {/* Floating query card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -left-4 bottom-10 w-[300px] rounded-xl border border-slate-200 bg-white p-5 shadow-card-xl"
      >
        <div className="rounded-lg bg-slate-900 p-4 font-mono text-[12px]">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-slate-700" />
            <span className="h-2 w-2 rounded-full bg-slate-700" />
            <span className="h-2 w-2 rounded-full bg-slate-700" />
            <span className="ml-2 text-[11px] text-slate-500">query.sql</span>
          </div>
          <p>
            <span className="text-brand-300">SELECT</span>{" "}
            <span className="text-slate-200">u.id, count(*)</span>
          </p>
          <p>
            <span className="text-brand-300">FROM</span>{" "}
            <span className="text-slate-200">users u</span>
          </p>
          <p>
            <span className="text-brand-300">WHERE</span>{" "}
            <span className="text-slate-200">o.created_at {">"} 7d</span>
          </p>
        </div>
        <div className="mt-4 flex items-end justify-between border-t border-slate-100 pt-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Before
            </p>
            <p className="text-xl font-semibold text-slate-400 line-through">
              1.8s
            </p>
          </div>
          <IconCheck size={18} className="text-brand-500" />
          <div className="text-right">
            <p className="text-xs font-medium uppercase tracking-wider text-brand-700">
              After
            </p>
            <p className="text-xl font-semibold text-brand-600">92ms</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function ObservabilityVisual() {
  const bars = [30, 45, 38, 58, 72, 60, 82, 70, 90, 76, 88, 95, 82, 92];

  return (
    <div className="relative">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-card-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85"
          alt="Analytics dashboard on laptop"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
      </div>

      {/* Floating throughput card */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -right-4 top-10 w-[300px] rounded-xl border border-slate-200 bg-white p-5 shadow-card-xl"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Throughput · 24h
            </p>
            <p className="mt-1 text-xl font-semibold text-slate-900">
              1.2M<span className="text-sm font-normal text-slate-500"> req/s</span>
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-medium text-brand-700">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            Live
          </span>
        </div>

        <div className="mt-4 flex h-20 items-end gap-1">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.03, ease: "easeOut" }}
              className="flex-1 rounded-sm bg-gradient-to-t from-brand-500 to-brand-300"
            />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-center">
          <MiniStat label="p50" value="12ms" />
          <MiniStat label="p99" value="74ms" />
          <MiniStat label="errors" value="0.002%" />
        </div>
      </motion.div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}
