"use client";

import clsx from "clsx";
import type { ReactNode, MouseEventHandler } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  icon?: ReactNode;
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  icon,
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-200 ease-out";
  const sizes = {
    md: "px-5 py-2.5 text-[15px]",
    lg: "px-7 py-3.5 text-[16px]",
  };
  const variants = {
    primary:
      "bg-brand-500 text-white shadow-brand hover:bg-brand-600 hover:shadow-[0_2px_4px_rgba(80,72,229,0.2),0_12px_32px_rgba(99,91,255,0.35)] hover:-translate-y-[1px] active:translate-y-0",
    secondary:
      "bg-white text-slate-900 border border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-card hover:-translate-y-[1px] active:translate-y-0",
    ghost:
      "text-slate-700 hover:text-slate-900 hover:bg-slate-100",
  };

  const cls = clsx(base, sizes[size], variants[variant], className);

  const inner = (
    <>
      <span>{children}</span>
      {icon && (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <button onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}
