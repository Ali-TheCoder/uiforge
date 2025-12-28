import Link from "next/link";
import Button from "@/components/Button";
import PricingCards from "@/components/PricingCards";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-2rem border border-white/10 bg-black/10 p-8 md:p-12">
        <div className="absolute inset-0 opacity-40 mask-[radial-gradient(600px_260px_at_30%_20%,black,transparent)]">
          <div className="h-full w-full bg-[conic-gradient(from_180deg_at_50%_50%,var(--color-primary),var(--color-secondary),var(--color-accent),var(--color-primary))]" />
        </div>

        <div className="relative max-w-2xl space-y-5">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-muted">
            Next.js • Tailwind • TypeScript
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            UI Forge builds elegant, fast websites that look premium—and sell.
          </h1>
          <p className="text-base text-muted md:text-lg">
            We’re a two-person design & development studio crafting modern company sites, e-commerce storefronts,
            and custom web apps with a strong UI system.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/pricing">See Pricing</Button>
            <Button href="/work" variant="ghost">
              Explore Work
            </Button>
          </div>

          <div className="pt-3 text-sm text-muted">
            Or email us:{" "}
            <Link className="text-text underline decoration-white/20 hover:decoration-white/50" href="/contact">
              get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { t: "Premium UI", d: "Clean typography, spacing, and component consistency." },
          { t: "Performance", d: "Next.js-first builds with smart routing & modern patterns." },
          { t: "Conversion-ready", d: "Clear CTA, sections that explain value, and SEO basics." },
        ].map((c) => (
          <div key={c.t} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-semibold">{c.t}</div>
            <div className="mt-2 text-sm text-muted">{c.d}</div>
          </div>
        ))}
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold">Plans</h2>
            <p className="mt-1 text-sm text-muted">
              Choose a package that matches your project scope.
            </p>
          </div>
          <Link href="/pricing" className="text-sm text-muted hover:text-text">
            Full details →
          </Link>
        </div>

        <PricingCards />
      </section>
    </div>
  );
}
