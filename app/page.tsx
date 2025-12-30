"use client"
import Link from "next/link";
import Button from "@/components/Button";
import PricingCards from "@/components/PricingCards";
import { motion } from "motion/react"
import About from "../components/about/about";
import ProcessSection from "@/components/Process/process";
export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/10 p-8 md:p-12">
        <div className="absolute inset-0 opacity-40 mask-[radial-gradient(600px_260px_at_30%_20%,black,transparent)]">
          <div className="h-full w-full bg-[conic-gradient(from_180deg_at_50%_50%,var(--color-primary),var(--color-secondary),var(--color-accent),var(--color-primary))]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-2xl space-y-5">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-muted">
            Next.js • Tailwind • TypeScript
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            UI Forge builds elegant, fast websites that look premium—and sell.
          </h1>
          <p className="text-base text-muted md:text-lg">
             Design & Development  crafting modern company sites, e-commerce storefronts,
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
        </motion.div>
      </section>
      <About />

     <ProcessSection />

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
