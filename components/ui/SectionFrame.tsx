import clsx from "clsx";
import type { ReactNode } from "react";

type Tone = "cream" | "rose" | "butter" | "paper" | "ink";

type SectionFrameProps = {
  id?: string;
  n: string;
  kicker: string;
  tone?: Tone;
  children: ReactNode;
  showRunningHeader?: boolean;
  className?: string;
};

const toneMap: Record<Tone, string> = {
  cream: "bg-cream-100",
  rose: "bg-rose-100",
  butter: "bg-butter-100",
  paper: "bg-paper-100",
  ink: "bg-ink text-cream-100",
};

export default function SectionFrame({
  id,
  n,
  kicker,
  tone = "cream",
  children,
  showRunningHeader = true,
  className,
}: SectionFrameProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative border-b-2 border-ink",
        toneMap[tone],
        className,
      )}
    >
      {showRunningHeader && (
        <div
          className={clsx(
            "border-b border-dashed",
            tone === "ink" ? "border-cream-100/30" : "border-ink-300",
          )}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
            <span className="running-header">
              AxonDBS Quarterly &middot; Vol. IV &middot; Spring MMXXVI
            </span>
            <span
              className={clsx(
                "running-header",
                tone === "ink" ? "!text-cream-100/70" : "",
              )}
            >
              &sect; {n} &middot; {kicker}
            </span>
          </div>
        </div>
      )}
      {children}
    </section>
  );
}
