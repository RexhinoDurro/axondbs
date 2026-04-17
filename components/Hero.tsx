"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Button from "./ui/Button";
import { IconArrowRight } from "./ui/Icon";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden hero-bg pt-32 sm:pt-40"
    >
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 grid-bg opacity-60"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-24 sm:px-8 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-4 py-1.5 text-sm text-slate-700 shadow-sm backdrop-blur transition-all hover:border-brand-300 hover:shadow-card"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Now onboarding for Q2 2026
            <span className="text-slate-400 transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>

          {/* Headline */}
          <h1 className="mt-8 text-5xl font-semibold tracking-tightest text-slate-900 sm:text-6xl md:text-7xl">
            The nervous system{" "}
            <span className="text-gradient">for your data.</span>
          </h1>

          {/* Subhead */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            AxonDBS designs, operates and integrates the data platforms behind
            fast-growing companies — so your team ships features instead of
            babysitting infrastructure.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button href="#contact" size="lg" icon={<IconArrowRight size={16} />}>
              Get started
            </Button>
            <Button href="#services" variant="secondary" size="lg">
              Contact sales
            </Button>
          </div>
        </motion.div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-20 max-w-5xl"
        >
          {/* Outer glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-4 rounded-3xl opacity-50 blur-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(99,91,255,0.35), rgba(139,92,246,0.25), rgba(236,72,153,0.35))",
            }}
          />

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card-xl">
            {/* Inner gradient wash */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 55% 75% at 50% 50%, rgba(99,91,255,0.08) 0%, rgba(236,72,153,0.05) 55%, transparent 85%)",
              }}
            />

            {/* Top status bar */}
            <div className="relative flex items-center justify-between border-b border-slate-200 bg-white/80 px-5 py-3 backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-200" />
                <span className="ml-3 text-xs font-medium text-slate-500">
                  axon.console / overview
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                All systems operational
              </span>
            </div>

            <DataNetwork />

            {/* Bottom live metrics strip */}
            <LiveStrip />
          </div>

          {/* Floating stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="pointer-events-none absolute -left-3 top-16 hidden rounded-xl border border-slate-200 bg-white/95 px-4 py-3 shadow-card backdrop-blur md:block"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              P99 latency
            </p>
            <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
              74<span className="text-slate-400">ms</span>
            </p>
            <p className="mt-1 text-xs font-medium text-emerald-600">
              ↓ 96% vs baseline
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="pointer-events-none absolute -right-3 bottom-20 hidden rounded-xl border border-slate-200 bg-white/95 px-4 py-3 shadow-card backdrop-blur md:block"
          >
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Uptime · 90d
            </p>
            <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
              99.99<span className="text-brand-500">%</span>
            </p>
            <p className="mt-1 text-xs font-medium text-slate-500">
              across 8 regions
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Data-flow visualization.
 *
 * Layout: 3 source services on the left → central AxonDB hub → 3 destinations
 * on the right. Curved bezier edges connect them. Packets (small circles) ride
 * along each path via SVG <animateMotion> with staggered starts, producing a
 * continuous sense of data flowing in and fanning out.
 *
 * Everything is declarative SVG — no JS animation loop, cheap to render.
 */
function DataNetwork() {
  // Edge path definitions (source x,y → hub, and hub → destination x,y).
  // Hub is at (600, 280). Source column x=180, dest column x=1020.
  const paths = {
    inApi:      "M 180 130 C 330 130, 440 270, 540 275",
    inEvents:   "M 180 280 C 330 280, 440 280, 540 280",
    inWebhooks: "M 180 430 C 330 430, 440 290, 540 285",
    outAnalytics: "M 660 275 C 760 275, 880 130, 1020 130",
    outApp:       "M 660 280 C 760 280, 880 280, 1020 280",
    outWarehouse: "M 660 285 C 760 285, 880 430, 1020 430",
  };

  const sources = [
    { id: "inApi", x: 180, y: 130, label: "API", color: "#10B981", sub: "REST" },
    { id: "inEvents", x: 180, y: 280, label: "Events", color: "#3B82F6", sub: "Kafka" },
    { id: "inWebhooks", x: 180, y: 430, label: "Webhooks", color: "#F59E0B", sub: "HTTP" },
  ];

  const destinations = [
    { id: "outAnalytics", x: 1020, y: 130, label: "Analytics", color: "#EC4899", sub: "BI" },
    { id: "outApp", x: 1020, y: 280, label: "Application", color: "#635BFF", sub: "Edge" },
    { id: "outWarehouse", x: 1020, y: 430, label: "Warehouse", color: "#8B5CF6", sub: "OLAP" },
  ];

  // Multiple packets per edge, staggered, for a continuous stream.
  const packets: { path: keyof typeof paths; color: string; dur: number; begin: number }[] = [
    { path: "inApi", color: "#10B981", dur: 2.6, begin: 0 },
    { path: "inApi", color: "#10B981", dur: 2.6, begin: 1.3 },
    { path: "inEvents", color: "#3B82F6", dur: 2.2, begin: 0.5 },
    { path: "inEvents", color: "#3B82F6", dur: 2.2, begin: 1.6 },
    { path: "inWebhooks", color: "#F59E0B", dur: 2.9, begin: 0.9 },
    { path: "inWebhooks", color: "#F59E0B", dur: 2.9, begin: 2.3 },
    { path: "outAnalytics", color: "#EC4899", dur: 2.6, begin: 0.3 },
    { path: "outAnalytics", color: "#EC4899", dur: 2.6, begin: 1.7 },
    { path: "outApp", color: "#635BFF", dur: 2.2, begin: 0.8 },
    { path: "outApp", color: "#635BFF", dur: 2.2, begin: 1.9 },
    { path: "outWarehouse", color: "#8B5CF6", dur: 2.9, begin: 0.4 },
    { path: "outWarehouse", color: "#8B5CF6", dur: 2.9, begin: 1.8 },
  ];

  return (
    <svg
      viewBox="0 0 1200 560"
      xmlns="http://www.w3.org/2000/svg"
      className="relative block aspect-[15/7] w-full"
      aria-hidden
    >
      <defs>
        {/* Define each path once, reference from <use> + <animateMotion>. */}
        {Object.entries(paths).map(([id, d]) => (
          <path key={id} id={`p-${id}`} d={d} />
        ))}

        {/* Gradient edges — direction matters (ingress: color → indigo; egress: indigo → color). */}
        <linearGradient id="g-in-api" x1="0" x2="1">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#635BFF" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="g-in-events" x1="0" x2="1">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#635BFF" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="g-in-webhooks" x1="0" x2="1">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#635BFF" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="g-out-analytics" x1="0" x2="1">
          <stop offset="0%" stopColor="#635BFF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#EC4899" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="g-out-app" x1="0" x2="1">
          <stop offset="0%" stopColor="#635BFF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#635BFF" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="g-out-warehouse" x1="0" x2="1">
          <stop offset="0%" stopColor="#635BFF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.7" />
        </linearGradient>

        {/* Hub glow */}
        <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#635BFF" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#EC4899" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="hub-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#635BFF" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>

        {/* Drop shadow for nodes */}
        <filter id="node-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0F172A" floodOpacity="0.08" />
        </filter>
      </defs>

      {/* Background dot grid */}
      <g opacity="0.4">
        {Array.from({ length: 11 }).map((_, r) =>
          Array.from({ length: 23 }).map((__, c) => (
            <circle
              key={`${r}-${c}`}
              cx={40 + c * 52}
              cy={40 + r * 48}
              r="1.1"
              fill="#CBD5E1"
            />
          )),
        )}
      </g>

      {/* Edges (rendered via <use> pointing at the defined path) */}
      <use href="#p-inApi" stroke="url(#g-in-api)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <use href="#p-inEvents" stroke="url(#g-in-events)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <use href="#p-inWebhooks" stroke="url(#g-in-webhooks)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <use href="#p-outAnalytics" stroke="url(#g-out-analytics)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <use href="#p-outApp" stroke="url(#g-out-app)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <use href="#p-outWarehouse" stroke="url(#g-out-warehouse)" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Hub pulse rings */}
      <g>
        {[0, 1, 2].map((i) => (
          <circle
            key={i}
            cx="600"
            cy="280"
            r="60"
            fill="none"
            stroke="#635BFF"
            strokeWidth="1.5"
            opacity="0"
          >
            <animate
              attributeName="r"
              values="60;110"
              dur="2.8s"
              begin={`${i * 0.9}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.45;0"
              dur="2.8s"
              begin={`${i * 0.9}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>

      {/* Hub glow + body */}
      <circle cx="600" cy="280" r="120" fill="url(#hub-glow)" />
      <circle
        cx="600"
        cy="280"
        r="58"
        fill="url(#hub-fill)"
        filter="url(#node-shadow)"
      />
      <circle cx="600" cy="280" r="58" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />

      {/* Hub label */}
      <text
        x="600"
        y="274"
        textAnchor="middle"
        fontSize="15"
        fontWeight="700"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fill="#FFFFFF"
        letterSpacing="-0.01em"
      >
        AxonDB
      </text>
      <text
        x="600"
        y="294"
        textAnchor="middle"
        fontSize="11"
        fontWeight="500"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fill="rgba(255,255,255,0.75)"
        letterSpacing="0.04em"
      >
        HUB · 74ms
      </text>

      {/* Source nodes */}
      {sources.map((n) => (
        <Node key={n.id} x={n.x} y={n.y} label={n.label} sub={n.sub} color={n.color} />
      ))}

      {/* Destination nodes */}
      {destinations.map((n) => (
        <Node key={n.id} x={n.x} y={n.y} label={n.label} sub={n.sub} color={n.color} />
      ))}

      {/* Packets flowing along paths */}
      {packets.map((p, i) => (
        <g key={i}>
          <circle r="5" fill={p.color} opacity="0.95">
            <animateMotion
              dur={`${p.dur}s`}
              begin={`${p.begin}s`}
              repeatCount="indefinite"
              rotate="auto"
            >
              <mpath href={`#p-${p.path}`} />
            </animateMotion>
          </circle>
          {/* Trailing glow */}
          <circle r="10" fill={p.color} opacity="0.25">
            <animateMotion
              dur={`${p.dur}s`}
              begin={`${p.begin}s`}
              repeatCount="indefinite"
            >
              <mpath href={`#p-${p.path}`} />
            </animateMotion>
          </circle>
        </g>
      ))}
    </svg>
  );
}

function Node({
  x,
  y,
  label,
  sub,
  color,
}: {
  x: number;
  y: number;
  label: string;
  sub: string;
  color: string;
}) {
  const W = 140;
  const H = 56;
  const isRight = x > 600;
  // Anchor: right column nodes start at x and extend right; left column nodes
  // end at x + W and extend to the left. Keep rects inside the canvas.
  const rx = isRight ? x : x - W;
  const ry = y - H / 2;

  return (
    <g filter="url(#node-shadow)">
      <rect
        x={rx}
        y={ry}
        width={W}
        height={H}
        rx={12}
        fill="#FFFFFF"
        stroke="#E2E8F0"
        strokeWidth="1.2"
      />
      {/* Colored accent bar on the inside edge */}
      <rect
        x={isRight ? rx : rx + W - 3}
        y={ry + 10}
        width={3}
        height={H - 20}
        rx={1.5}
        fill={color}
      />
      {/* Status dot */}
      <circle
        cx={isRight ? rx + 18 : rx + W - 18}
        cy={ry + 18}
        r="4"
        fill={color}
      >
        <animate attributeName="opacity" values="1;0.4;1" dur="2.2s" repeatCount="indefinite" />
      </circle>
      {/* Label */}
      <text
        x={isRight ? rx + 32 : rx + W - 32}
        y={ry + 22}
        textAnchor={isRight ? "start" : "end"}
        fontSize="13"
        fontWeight="600"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fill="#0F172A"
        letterSpacing="-0.01em"
      >
        {label}
      </text>
      {/* Sub label */}
      <text
        x={isRight ? rx + 18 : rx + W - 18}
        y={ry + 42}
        textAnchor={isRight ? "start" : "end"}
        fontSize="11"
        fontWeight="500"
        fontFamily="var(--font-inter), system-ui, sans-serif"
        fill="#64748B"
        letterSpacing="0.02em"
      >
        {sub}
      </text>
    </g>
  );
}

/**
 * Live metrics ribbon at the bottom of the console card. The request counter
 * ticks up when the card is in view, giving the whole thing a sense of "now".
 */
function LiveStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });
  const [count, setCount] = useState(1_284_502);

  useEffect(() => {
    if (!inView) return;
    const id = window.setInterval(() => {
      setCount((c) => c + Math.floor(60 + Math.random() * 140));
    }, 700);
    return () => window.clearInterval(id);
  }, [inView]);

  const bars = [42, 55, 48, 62, 70, 58, 75, 68, 82, 74, 88, 92, 80, 90, 85];

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-2 gap-4 border-t border-slate-200 bg-white/70 px-5 py-4 backdrop-blur sm:grid-cols-4"
    >
      <div>
        <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
          Requests · today
        </p>
        <p className="mt-1 text-lg font-semibold tabular-nums text-slate-900">
          {count.toLocaleString()}
        </p>
      </div>
      <div>
        <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
          Ingress rate
        </p>
        <p className="mt-1 text-lg font-semibold text-slate-900">
          18.4K<span className="text-sm font-normal text-slate-500"> /s</span>
        </p>
      </div>
      <div>
        <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
          Errors · 1h
        </p>
        <p className="mt-1 text-lg font-semibold text-emerald-600">0.002%</p>
      </div>
      <div>
        <p className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
          Throughput · last min
        </p>
        <div className="mt-2 flex h-6 items-end gap-0.5">
          {bars.map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-[1px] bg-gradient-to-t from-brand-500 to-brand-300"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
