"use client"
import { motion } from "motion/react";
import { faqs_1 , faqs_2 } from "@/lib/faq";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../accordion";
export default function FAQ () {
    return(
    <motion.section  
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    id="faq"
    className="flex flex-col gap-5">
        <div className="text-center mb-12">
          <h1 className="mb-3 text-5xl mx-auto">Frequently Asked Questions</h1>
          <p className=" mx-auto
            max-w-xl sm:max-w-2xl lg:max-w-3xl
            px-4 sm:px-0
            text-sm sm:text-base lg:text-lg
            leading-relaxed sm:leading-7 lg:leading-8
            text-slate-400  text-muted flex flex-col gap-1">
            Everything you need to know about our design and development services
          </p>
        </div>
      <div className="flex justify-between md:flex-row flex-col gap-10 ">
       
        <Accordion type="single" collapsible className="w-full rounded-[2rem] border border-white/10 bg-black/10 p-8 md:p-12">
          {faqs_1.map((faq) => (
            <AccordionItem key={`faq1-${faq.id}`} value={`faq1-item-${faq.id}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="max-w-full">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Accordion type="single" collapsible className="w-full rounded-[2rem] border border-white/10 bg-black/10 p-8 md:p-12">
          {faqs_2.map((faq) => (
            <AccordionItem key={`faq2-${faq.id}`} value={`faq2-item-${faq.id}`}>
              <AccordionTrigger >{faq.question}</AccordionTrigger>
              <AccordionContent className="max-w-full ">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
        
    </motion.section>
    )
}