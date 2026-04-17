import clsx from "clsx";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  tone?: "dark" | "light";
};

export default function Logo({
  className,
  showWordmark = true,
  tone = "dark",
}: LogoProps) {
  const stroke = tone === "dark" ? "#0F172A" : "#FFFFFF";
  const textClass = tone === "dark" ? "text-slate-900" : "text-white";

  return (
    <div className={clsx("flex items-center gap-2.5", className)}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="16" cy="16" r="2.2" fill={stroke} />
        <circle cx="5" cy="8" r="1.4" fill={stroke} />
        <circle cx="27" cy="7" r="1.2" fill={stroke} />
        <circle cx="4" cy="24" r="1.2" fill={stroke} />
        <circle cx="28" cy="25" r="1.4" fill={stroke} />
        <circle cx="16" cy="29" r="1.2" fill={stroke} />
        <circle cx="16" cy="3" r="1.2" fill={stroke} />
        <g stroke={stroke} strokeWidth="1" strokeLinecap="round">
          <line x1="16" y1="16" x2="5" y2="8" />
          <line x1="16" y1="16" x2="27" y2="7" />
          <line x1="16" y1="16" x2="4" y2="24" />
          <line x1="16" y1="16" x2="28" y2="25" />
          <line x1="16" y1="16" x2="16" y2="29" />
          <line x1="16" y1="16" x2="16" y2="3" />
        </g>
      </svg>
      {showWordmark && (
        <span
          className={clsx(
            "font-display text-[22px] leading-none tracking-tight",
            textClass,
          )}
        >
          axon<span className="italic">dbs</span>
        </span>
      )}
    </div>
  );
}
