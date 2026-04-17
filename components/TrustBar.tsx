import { integrationBrands } from "@/lib/data";
import { BrandLogo } from "./brand/IntegrationMarks";

export default function TrustBar() {
  // Doubled list + translateX(-50%) keyframe = seamless infinite loop.
  // Each item carries its own trailing margin (no flex gap, no container
  // padding), which keeps the repeat unit exactly one copy wide — so when the
  // track wraps back to 0% it's visually identical to -50% and there's no jump.
  const loop = [...integrationBrands, ...integrationBrands];

  return (
    <section className="relative border-y border-slate-200 bg-white py-12 sm:py-16">
      <div className="mx-auto mb-8 max-w-7xl px-6 sm:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-wider text-slate-500">
          Trusted by engineering teams at 120+ companies
        </p>
      </div>

      <div className="relative overflow-hidden mask-fade-x">
        <div className="marquee-track flex w-max items-center">
          {loop.map((b, i) => (
            <div
              key={`${b.slug}-${i}`}
              title={b.name}
              aria-hidden={i >= integrationBrands.length}
              className="mr-12 flex shrink-0 items-center gap-3 text-slate-500 transition-colors duration-300 hover:text-slate-900 sm:mr-16"
            >
              <BrandLogo slug={b.slug} name={b.name} size={28} />
              <span className="text-[15px] font-medium tracking-tight whitespace-nowrap">
                {b.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
