"use client";

import { useState } from "react";
import { integrationBrands } from "@/lib/data";

type LogoProps = {
  slug: string;
  name: string;
  size?: number;
  className?: string;
  color?: string;
};

// simpleicons removed several brands due to trademark policy (AWS, Salesforce,
// Slack, etc.). Inline SVGs keep them on-brand without the CDN 404.
const overrides: Record<string, (size: number) => JSX.Element> = {
  amazonaws: (size) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="64" height="64" rx="10" fill="#232F3E" />
      <text
        x="32"
        y="30"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize="17"
        fill="#FFFFFF"
        letterSpacing="-0.5"
      >
        aws
      </text>
      <path
        d="M16 42 Q 32 52 48 42"
        stroke="#FF9900"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M45 39 L49 42 L45 45"
        stroke="#FF9900"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  salesforce: (size) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M27 12c2-3 5.5-5 9.5-5 5 0 9.2 3.2 11 7.5 1.5-.9 3.2-1.4 5-1.4 5.8 0 10.5 4.8 10.5 10.8S58.3 34.7 52.5 34.7c-.7 0-1.4-.1-2.1-.2-1.3 2.5-4 4.2-7 4.2-1.3 0-2.5-.3-3.6-.9-1.5 3.2-4.8 5.4-8.6 5.4-4 0-7.4-2.4-8.8-5.8-.7.1-1.4.2-2.2.2-4.6 0-8.3-3.7-8.3-8.4 0-3.1 1.7-5.9 4.2-7.3-.5-1.2-.8-2.5-.8-3.9 0-5.6 4.6-10.1 10.2-10.1 3.3 0 6.3 1.6 8.2 4.1"
        fill="#00A1E0"
      />
    </svg>
  ),
  slack: (size) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        fill="#E01E5A"
        d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
      />
      <path
        fill="#36C5F0"
        d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
      />
      <path
        fill="#2EB67D"
        d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
      />
      <path
        fill="#ECB22E"
        d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
      />
    </svg>
  ),
};

export function BrandLogo({
  slug,
  name,
  size = 28,
  className,
  color,
}: LogoProps) {
  const [failed, setFailed] = useState(false);

  // Local override wins.
  if (overrides[slug]) {
    return (
      <span className={`inline-flex shrink-0 items-center justify-center ${className ?? ""}`}>
        {overrides[slug](size)}
      </span>
    );
  }

  if (failed) {
    return (
      <span
        style={{ width: size, height: size }}
        className={`inline-flex shrink-0 items-center justify-center rounded-md bg-slate-100 font-semibold text-slate-700 ${className ?? ""}`}
      >
        <span style={{ fontSize: Math.max(10, size * 0.42) }}>
          {name
            .split(/[\s-]+/)
            .map((w) => w[0])
            .slice(0, 2)
            .join("")
            .toUpperCase()}
        </span>
      </span>
    );
  }

  const src = color
    ? `https://cdn.simpleicons.org/${slug}/${color}`
    : `https://cdn.simpleicons.org/${slug}`;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={name}
      width={size}
      height={size}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export { integrationBrands };
