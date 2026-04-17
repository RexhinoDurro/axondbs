"use client";

import Logo from "./brand/Logo";
import {
  IconGithub,
  IconLinkedin,
  IconTwitter,
} from "./ui/Icon";

const columns = [
  {
    title: "Product",
    links: [
      { label: "Managed DBs", href: "#services" },
      { label: "Integrations", href: "#integrations" },
      { label: "Analytics", href: "#services" },
      { label: "Security", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#top" },
      { label: "Process", href: "#process" },
      { label: "Careers", href: "#contact" },
      { label: "Press", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#contact" },
      { label: "Case studies", href: "#contact" },
      { label: "Changelog", href: "#contact" },
      { label: "Status", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#contact" },
      { label: "Terms", href: "#contact" },
      { label: "SOC 2", href: "#contact" },
      { label: "DPA", href: "#contact" },
    ],
  },
];

const socials = [
  { Icon: IconTwitter, href: "#", label: "Twitter" },
  { Icon: IconLinkedin, href: "#", label: "LinkedIn" },
  { Icon: IconGithub, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-slate-600">
              AxonDBS is a Jacksonville-based studio engineering the database
              platforms, custom software and integrations that power modern
              businesses.
            </p>
            <div className="mt-6 space-y-1.5 text-sm text-slate-600">
              <p>
                <a
                  href="mailto:reditola@axondbs.com"
                  className="hover:text-slate-900"
                >
                  reditola@axondbs.com
                </a>
              </p>
              <p>+1 (904) 866-1738</p>
              <p>Jacksonville, Florida</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-sm font-semibold text-slate-900">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-slate-600 transition-colors hover:text-slate-900"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} AxonDBS, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
              >
                <s.Icon size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
