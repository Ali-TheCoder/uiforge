"use client";
import { plans } from "@/lib/plans";
import { FormEvent, useState } from "react";
import Button from "@/components/Button";
import AnimatedDotsBackground from "@/components/animateddots";
import { motion } from "motion/react";



export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: FormEvent<HTMLFormElement>) { 
        e.preventDefault();

        const form = e.currentTarget;

        setLoading(true);
        setSuccess(null);
        setError(null);

        const formData = new FormData(form);

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.get("name"),
                email: formData.get("email"),
                plan: formData.get("plan"),
                message: formData.get("message"),
            }),
        });

        const data = await res.json();
        setLoading(false);

        if (!res.ok) {
            setError(data.error || "Something went wrong");
            return;
        }

        setSuccess("Message sent successfully. We'll get back to you soon.");
        form.reset();
    }

    return (
        <motion.section 
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
      }}
      id="contact"
        className="flex md:flex-row flex-col justify-between gap-4">
            <div>
                <h1 className="text-3xl font-semibold">Let's Work Together</h1>
                <p className="mt-4 max-w-3xl text-muted/90 leading-loose">
                If your brand isn’t converting or you’re unsure how to grow your business online, that’s where we come in.
                <br /><br />
                We don’t just build websites—we create strategic portfolio sites, landing pages, and e-commerce stores designed to attract the right audience and convert with purpose.
                <br /><br />
                <span className="text-foreground font-medium">
                    Helping your brand stand out, build trust, and grow with confidence.
                </span>
                </p>

            </div>
            <AnimatedDotsBackground>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4  border border-white/10 bg-white/5 rounded-[1rem] p-6"
                >
                    <input
                        name="name"
                        required
                        placeholder="Your name"
                        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none invalid:border-pink-500 valid:border-teal-500"
                    />

                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="Email address"
                        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none invalid:border-pink-500 valid:border-teal-500"
                    />

                    <select
                        name="plan"
                        className="w-full pr-2 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-text outline-none focus:border-secondary/50"
                    >
                        {plans.map((i)=>{
                            return (
                            <option key={i.id} value={i.name} className="bg-bg text-white">
                                {i.name}
                            </option>
                            )
                        })}

                    </select>

                    <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="Tell us about your project..."
                        className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
                    />

                    <Button className="w-full" type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Message"}
                    </Button>

                    {success && <p className="text-sm text-green-400">{success}</p>}
                    {error && <p className="text-sm text-red-400">{error}</p>}
                </form>
            </ AnimatedDotsBackground>
        </motion.section>
        
    );
}
