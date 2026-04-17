import type { SVGProps } from "react";

type IconProps = Omit<SVGProps<SVGSVGElement>, "stroke"> & {
  size?: number;
  stroke?: number;
};

const base = (size: number, stroke: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: stroke,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export function IconDatabase({ size = 22, stroke = 1.4, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.5" />
      <path d="M4.5 5.5v6c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-6" />
      <path d="M4.5 11.5v6c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5v-6" />
    </svg>
  );
}

export function IconShield({ size = 22, stroke = 1.4, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <path d="M12 3 4.5 5.5v6.2c0 4.6 3.2 8.6 7.5 10.3 4.3-1.7 7.5-5.7 7.5-10.3V5.5L12 3Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </svg>
  );
}

export function IconCode({ size = 22, stroke = 1.4, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <path d="m8 7-5 5 5 5" />
      <path d="m16 7 5 5-5 5" />
      <path d="m13.5 5-3 14" />
    </svg>
  );
}

export function IconFlow({ size = 22, stroke = 1.4, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <circle cx="5.5" cy="5.5" r="2.5" />
      <circle cx="18.5" cy="5.5" r="2.5" />
      <circle cx="12" cy="18.5" r="2.5" />
      <path d="M7 7.5c1 2.5 2.5 4 5 5M17 7.5c-1 2.5-2.5 4-5 5" />
    </svg>
  );
}

export function IconChart({ size = 22, stroke = 1.4, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <path d="M3 3v18h18" />
      <path d="m7 15 4-5 3 3 5-7" />
    </svg>
  );
}

export function IconLock({ size = 22, stroke = 1.4, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
      <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
      <circle cx="12" cy="15.5" r="1" fill="currentColor" />
    </svg>
  );
}

export function IconGlobe({ size = 22, stroke = 1.4, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.8 3.2 2.8 14.8 0 18M12 3c-2.8 3.2-2.8 14.8 0 18" />
    </svg>
  );
}

export function IconBolt({ size = 22, stroke = 1.4, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <path d="M13 3 4 14h7l-1 7 9-11h-7l1-7Z" />
    </svg>
  );
}

export function IconActivity({ size = 22, stroke = 1.4, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <path d="M3 12h4l3-8 4 16 3-8h4" />
    </svg>
  );
}

export function IconCloud({ size = 22, stroke = 1.4, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <path d="M7 18a4.5 4.5 0 0 1-.5-9A6 6 0 0 1 18 10a4 4 0 0 1-.5 8H7Z" />
    </svg>
  );
}

export function IconBranch({ size = 22, stroke = 1.4, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <circle cx="6" cy="5" r="2" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="18" cy="7" r="2" />
      <path d="M6 7v10M6 13c0-3 2-6 6-6h4" />
    </svg>
  );
}

export function IconArrowRight({ size = 18, stroke = 1.6, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function IconArrowUpRight({
  size = 16,
  stroke = 1.6,
  ...rest
}: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export function IconCheck({ size = 16, stroke = 1.8, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <path d="m4 12 5 5 11-11" />
    </svg>
  );
}

export function IconPlus({ size = 18, stroke = 1.6, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function IconMenu({ size = 20, stroke = 1.6, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <path d="M4 7h16M4 17h16" />
    </svg>
  );
}

export function IconClose({ size = 20, stroke = 1.6, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <path d="m6 6 12 12M6 18 18 6" />
    </svg>
  );
}

export function IconPin({ size = 16, stroke = 1.5, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <path d="M12 21c-4-5-7-8.5-7-12a7 7 0 0 1 14 0c0 3.5-3 7-7 12Z" />
      <circle cx="12" cy="9" r="2.4" />
    </svg>
  );
}

export function IconStar({ size = 14, stroke = 1.4, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest} fill="currentColor">
      <path d="m12 3 2.6 5.6 6.2.7-4.6 4.2 1.3 6-5.5-3.2-5.5 3.2 1.3-6L3 9.3l6.2-.7L12 3Z" />
    </svg>
  );
}

export function IconQuote({ size = 36, stroke = 0, ...rest }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="currentColor" {...rest}>
      <path d="M14 12c-5 2-8 7-8 14v10h12V24h-6c0-4 2-7 5-8l-3-4Zm20 0c-5 2-8 7-8 14v10h12V24h-6c0-4 2-7 5-8l-3-4Z" />
    </svg>
  );
}

export function IconSparkle({ size = 16, stroke = 1.4, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />
    </svg>
  );
}

export function IconLinkedin({ size = 16, stroke: _s, ...rest }: IconProps) {
  void _s;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...rest}>
      <path d="M4.98 3.5A2.5 2.5 0 0 1 7.5 6a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 2.48-2.5ZM3 8.75h5V21H3V8.75ZM10 8.75h4.8v1.75h.07c.67-1.2 2.3-2.1 4.13-2.1 4.4 0 5.2 2.65 5.2 6.1V21h-5v-5.6c0-1.34-.02-3.06-2-3.06-2 0-2.3 1.44-2.3 2.96V21h-5V8.75Z" />
    </svg>
  );
}

export function IconTwitter({ size = 16, stroke: _s, ...rest }: IconProps) {
  void _s;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...rest}>
      <path d="M18.9 3H22l-7.3 8.35L23.3 21h-6.7l-5.25-6.87L5.35 21H2.25l7.82-8.93L1.9 3h6.86l4.74 6.27L18.9 3Zm-1.2 16.1h1.68L7.44 4.8H5.64l12.06 14.3Z" />
    </svg>
  );
}

export function IconGithub({ size = 16, stroke: _s, ...rest }: IconProps) {
  void _s;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...rest}>
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.1.63-1.35-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.5 9.5 0 0 1 12 6.82c.85 0 1.71.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.3.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export function IconMail({ size = 16, stroke = 1.5, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function IconPhone({ size = 16, stroke = 1.5, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <path d="M4.5 4.5h3l1.8 4-2 1.5a12 12 0 0 0 6.7 6.7l1.5-2 4 1.8v3A2 2 0 0 1 17.5 21 15 15 0 0 1 3 6.5 2 2 0 0 1 4.5 4.5Z" />
    </svg>
  );
}

export function IconCursor({ size = 16, stroke = 1.5, ...rest }: IconProps) {
  return (
    <svg {...base(size, stroke)} {...rest}>
      <path d="M4 3v18l5-5h10L4 3Z" />
    </svg>
  );
}
