"use client"
import { CodeXml, Goal, Paintbrush, Rocket } from "lucide-react";
import { motion } from "motion/react";
export default function ProcessSection (){
    return  <motion.section
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
     id="process"
     className="flex flex-col rounded-[2rem] border border-white/10 bg-black/10 p-8 md:p-12">
        <div className="text-start  flex flex-col items-start mb-5">
          <h1 className="mb-3 text-5xl mx-auto">Process</h1>
          <p className="
            mx-auto
            max-w-xl sm:max-w-2xl lg:max-w-3xl
            px-4 sm:px-0
            text-sm sm:text-base lg:text-lg
            leading-relaxed sm:leading-7 lg:leading-8
            text-slate-400  text-muted flex flex-col gap-1
            ">
            <span> Let’s follow this structured yet flexible process to make your vision great.</span>
            </p>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
        {[
          { t: "Assessment", d: "Get access to your client portal, share your vision, and receive a custom proposal.",i:<Goal /> },
          { t: "Design a clean UI", d: "We craft a design strategy and help you provide the necessary content. Then I bring it all together to do a perfect design.",i:<Paintbrush /> },
          { t: "Development", d: "Once the design is approved, it gets transformed into a fully functional User Interface." ,i:<CodeXml />},
          { t: "Launch & iterate", d: "Final refinements, a smooth launch, and your website is ready to Shine!.",i:<Rocket /> },
        ].map((c) => (
          <div key={c.t} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-semibold flex items-center gap-1"><span>{c.i}</span> {c.t} </div>
            <div className="mt-2 text-sm text-muted">{c.d}</div>
          </div>
        ))}
        </div>
     
      </motion.section>
}