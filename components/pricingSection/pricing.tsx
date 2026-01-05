'use client'
import { motion } from "motion/react";
import PricingCards from "../PricingCards";

export default function PricingSection (){
    return (  
      <motion.section 
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
            className="space-y-8" 
            id="pricing">
            <div className="space-y-2">
                <h1 className="text-3xl font-semibold">Pricing</h1>
                <p className="text-muted">
                    Transparent starting prices. Final quote depends on pages, content, integrations, and timeline.
                </p>
            </div>

            <PricingCards />

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h2 className="text-lg font-semibold">What’s included in every plan</h2>
                <ul className="mt-3 grid gap-2 text-sm text-muted md:grid-cols-2">
                    <li>• Responsive layout + accessible UI</li>
                    <li>• Basic SEO + metadata setup</li>
                    <li>• Performance best practices</li>
                    <li>• Deployment guidance (Vercel-ready)</li>
                </ul>
            </div>
        </motion.section>
      )
}