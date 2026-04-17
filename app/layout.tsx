import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AxonDBS — Database platforms engineered in Jacksonville",
  description:
    "AxonDBS designs, operates and integrates the data platforms behind fast-growing companies. Managed databases, custom software and integrations, shipped by a senior team in Jacksonville.",
  keywords: [
    "database",
    "managed database",
    "data solutions",
    "software integrations",
    "Jacksonville",
    "Florida",
    "AxonDBS",
    "ETL",
    "analytics",
  ],
  authors: [{ name: "AxonDBS" }],
  openGraph: {
    title: "AxonDBS — Database platforms engineered in Jacksonville",
    description:
      "Managed databases, custom software and integrations, shipped by a senior team in Jacksonville.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
