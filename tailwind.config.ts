import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral surface — white, near-white, cool grays
        surface: {
          DEFAULT: "#FFFFFF",
          50: "#FFFFFF",
          100: "#FAFAFB",
          200: "#F4F5F7",
          300: "#EBECEF",
        },
        // Cool slate for text + borders
        slate: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
          950: "#0A0F1E",
        },
        // Indigo/violet brand
        brand: {
          50: "#EEF0FF",
          100: "#E0E4FF",
          200: "#C5CCFF",
          300: "#A0A9FF",
          400: "#7C83FF",
          500: "#635BFF", // Stripe-ish indigo
          600: "#5048E5",
          700: "#4038B8",
          800: "#2E2990",
          900: "#1E1A66",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Large, readable scale
        xs: ["0.8125rem", { lineHeight: "1.5" }],    // 13px
        sm: ["0.9375rem", { lineHeight: "1.55" }],   // 15px
        base: ["1.0625rem", { lineHeight: "1.65" }], // 17px
        lg: ["1.1875rem", { lineHeight: "1.6" }],    // 19px
        xl: ["1.375rem", { lineHeight: "1.45" }],    // 22px
        "2xl": ["1.75rem", { lineHeight: "1.3" }],   // 28px
        "3xl": ["2.125rem", { lineHeight: "1.2" }],  // 34px
        "4xl": ["2.75rem", { lineHeight: "1.1" }],   // 44px
        "5xl": ["3.5rem", { lineHeight: "1.05" }],   // 56px
        "6xl": ["4.5rem", { lineHeight: "1.02" }],   // 72px
        "7xl": ["5.5rem", { lineHeight: "1" }],      // 88px
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.025em",
        tight: "-0.015em",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-node": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.15)" },
        },
        "flow-dash": {
          to: { strokeDashoffset: "-24" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-node": "pulse-node 3s ease-in-out infinite",
        "flow-dash": "flow-dash 1.2s linear infinite",
        "gradient-shift": "gradient-shift 10s ease-in-out infinite",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(15,23,42,0.04)",
        card: "0 1px 3px rgba(15,23,42,0.04), 0 6px 24px rgba(15,23,42,0.05)",
        "card-lg": "0 2px 8px rgba(15,23,42,0.05), 0 20px 48px rgba(15,23,42,0.08)",
        "card-xl": "0 4px 16px rgba(15,23,42,0.06), 0 32px 72px rgba(15,23,42,0.10)",
        brand: "0 1px 2px rgba(80,72,229,0.15), 0 8px 24px rgba(99,91,255,0.25)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #635BFF 0%, #8B5CF6 50%, #EC4899 100%)",
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,91,255,0.12) 0%, rgba(139,92,246,0.06) 30%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
