"use client"
import { motion } from "motion/react";
import { Card, CardContent } from "../card";
import Button from "@/components/Button";
import Elite from "@/public/Elite.jpeg"
import AhmadMV from "@/public/ahmadmv.jpeg"
import Image from "next/image";
const projects = [
    {"Name":"Elite-Sport" , "href":"https://elite-sport-beta.vercel.app/" , "descrption":"A fast, accessible marketing site with focus on performance.","img":Elite},
    {"Name":"Ahmad Movahedi Portfilo" , "href":"https://ahmadmovahedi.vercel.app/" , "descrption":"Portfolio of Ahmad Movahedi . specializing in Next.js, React, and modern web development.","img":AhmadMV}
]
export default function PortfolioSection () {
    return(
    <motion.section 
      id="portfolio"
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    className="flex flex-col justify-between  p-8 md:p-12">
         {/* Header Section */}
        <div className="text-start flex flex-col items-start mb-12">
          <h1 className="mb-3 text-5xl mx-auto">Portfolio</h1>
          <h1 className="mb-3 text-2xl mx-auto">Works we are proud of</h1>
        </div>

        {/*content Section */}
        <div className="flex flex-col gap-4 max-w-5xl ">
           {projects.map((i)=>{
            return(<Card
            key={i.Name}
            className="
                relative overflow-hidden rounded-3xl p-4 sm:p-6
                flex flex-col sm:flex-row gap-6
                items-center sm:items-start

                border border-slate-700
                bg-gradient-to-br from-purple-700 via-purple-600 to-indigo-700
                bg-[radial-gradient(rgba(255,255,255,0.2)_1px,transparent_1px)]
                bg-[size:20px_20px]

                transition-all duration-300
                hover:shadow-xl hover:scale-[1.03]
            "
            >
            {/* Image */}
            <div className="flex-shrink-0">
                <Image
                src={i.img}
                alt={i.Name}
                className="
                    object-cover sm:w-40 sm:h-60
                    rounded-2xl object-cover
                    transition-transform duration-300
                    group-hover:scale-105
                "
                />
            </div>

            {/* Content */}
            <CardContent className="flex flex-col gap-4 text-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
                {i.Name}
                </h3>

                <p className="text-slate-300 text-base sm:text-lg max-w-xl">
                {i.descrption}
                </p>

                <span
                className="
                    inline-flex w-fit items-center gap-2 rounded-full
                    border border-white/15 bg-white/5
                    px-3 py-1 text-xs sm:text-sm text-muted
                "
                >
                Next.js • Tailwind • TypeScript • Express.js
                </span>

                <Button href={i.href} className="w-fit mt-2">Overview</Button>
            </CardContent>
            </Card>)
           })}
            

        </div>
    </motion.section>)
}