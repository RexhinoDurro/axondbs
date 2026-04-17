"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import {
  IconArrowRight,
  IconMail,
  IconPhone,
  IconPin,
} from "./ui/Icon";

type Status = "idle" | "submitting" | "sent";

export default function CtaBanner() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 py-24 sm:py-32"
    >
      {/* Gradient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(99,91,255,0.28) 0%, rgba(139,92,246,0.14) 40%, transparent 80%)",
        }}
      />
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Left: copy + contact info */}
          <Reveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
                Let&apos;s talk
              </p>
              <h2 className="mt-4 text-5xl font-semibold tracking-tightest text-white sm:text-6xl">
                Scale your data with{" "}
                <span className="text-gradient">confidence.</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
                Tell us about your stack. We&apos;ll respond within one
                business day with a free architecture review and a fixed-price
                quote — no sales deck attached.
              </p>

              <ul className="mt-10 space-y-4">
                <ContactItem
                  icon={<IconMail size={15} />}
                  label="Email"
                  value="reditola@axondbs.com"
                  href="mailto:reditola@axondbs.com"
                />
                <ContactItem
                  icon={<IconPhone size={15} />}
                  label="Phone"
                  value="+1 (904) 866-1738"
                  href="tel:+19048661738"
                />
                <ContactItem
                  icon={<IconPin size={15} />}
                  label="Based in"
                  value="Jacksonville, Florida"
                />
              </ul>
            </div>
          </Reveal>

          {/* Right: contact form */}
          <Reveal delay={0.12}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-300">
        {icon}
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
          {label}
        </p>
        <p className="text-[15px] text-white">{value}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <li>
        <a
          href={href}
          className="group flex items-center gap-4 transition-colors"
        >
          <span className="contents group-hover:[&>span:first-child]:bg-brand-500/25">
            {content}
          </span>
        </a>
      </li>
    );
  }
  return <li className="flex items-center gap-4">{content}</li>;
}

function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    // No backend wired — compose a mailto so the submission lands in the user's
    // mail client, prefilled. Swap this block for a fetch() to an API route
    // when a backend is ready.
    const subject = `AxonDBS inquiry — ${form.name || "Website lead"}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company: ${form.company}` : "",
      "",
      form.message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:reditola@axondbs.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    // Brief "sent" acknowledgement so the user sees feedback even if their
    // mail client opens in a new window.
    window.setTimeout(() => setStatus("sent"), 400);
  };

  return (
    <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-card-xl backdrop-blur-md sm:p-8">
      {/* Subtle card gradient sheen */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(99,91,255,0.08), transparent 60%)",
        }}
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold tracking-tight text-white">
            Send us a message
          </h3>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Replying
          </span>
        </div>
        <p className="mt-1.5 text-sm text-slate-400">
          Replies typically within one business day.
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Cooper"
              required
            />
            <Field
              label="Work email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@company.com"
              required
            />
          </div>
          <Field
            label="Company"
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company (optional)"
          />
          <TextArea
            label="How can we help?"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Tell us about your stack, your team size, and what's getting in the way."
            required
          />

          <div className="flex flex-col items-stretch gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-slate-400">
              By submitting, you agree to our privacy terms.
            </p>
            <Button
              size="lg"
              icon={<IconArrowRight size={16} />}
              className="justify-center"
            >
              {status === "sent" ? "Sent — check your email" : "Send message"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
        {label}
        {required && <span className="ml-1 text-brand-300">*</span>}
      </span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-slate-500 transition-colors focus:border-brand-400 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-brand-500/30"
      />
    </label>
  );
}

function TextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
        {label}
        {required && <span className="ml-1 text-brand-300">*</span>}
      </span>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={5}
        className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-[15px] text-white placeholder:text-slate-500 transition-colors focus:border-brand-400 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-brand-500/30"
      />
    </label>
  );
}
