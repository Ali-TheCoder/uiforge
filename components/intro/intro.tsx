"use client"
import Button from "@/components/Button";
import { motion } from "motion/react"
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/converted_image.svg"
export default function IntroSection () {
    return <motion.section 
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/10 p-8 md:p-12">
        <div className="absolute inset-0 opacity-40 mask-[radial-gradient(600px_260px_at_30%_20%,black,transparent)]">
          <div className="h-full w-full bg-[conic-gradient(from_180deg_at_50%_50%,var(--color-primary),var(--color-secondary),var(--color-accent),var(--color-primary))]" />
        </div>

        <div className="flex flex-row justify-between">
          <div
            className="relative max-w-2xl space-y-5">

            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            UI Forge designed Websites to convert visitors into customers.
            </h1>
            <p className="text-base text-muted md:text-lg">
              Strategy-led websites for personal brands, e-commerce brands, and growing companies.
            </p>
            {/* <Image src={logo} alt="UI Forge Logo"  className="w-[20rem] rounded-lg" /> */}

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="#pricing">See Plans</Button>
              <Button href="#portfolio" variant="ghost">
                Explore Work
              </Button>
            </div>

            <div className="pt-3 text-sm text-muted">
              Or email us:{" "}
              <Link className="text-text underline decoration-white/20 hover:decoration-white/50" href="#contact">
                get in touch
              </Link>
            </div>
          </div>

          <Image src={logo} alt="UI Forge Logo" className="max-w-[20rem] rounded-2xl md:block hidden" />
        </div>

       
      </motion.section>
}