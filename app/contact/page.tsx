"use client";

import { useState } from "react";
import Button from "@/components/Button";
// import { useSearchParams } from "next/navigation";


export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    // const searchParams = useSearchParams();
    // const defaultPlan = searchParams.get("plan");



    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);
        setError(null);

        const formData = new FormData(e.currentTarget);

        const res = await fetch("/api/contact", {
            method: "POST",
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
        e.currentTarget.reset();
    }

    return (
        <div className="mx-auto max-w-xl space-y-6">
            <div>
                <h1 className="text-3xl font-semibold">Contact UI Forge</h1>
                <p className="mt-2 text-muted">
                    Tell us about your project and we’ll reply within 24 hours.
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6"
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
                    <option value="corporate" className="bg-bg text-white">
                        Corporate Website
                    </option>
                    <option value="ecommerce" className="bg-bg text-white">
                        E-commerce Store
                    </option>
                    <option value="custom" className="bg-bg text-white">
                        Custom Web App
                    </option>

                </select>

                <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 outline-none"
                />

                <Button className="w-full" type="submit">
                    {loading ? "Sending..." : "Send Message"}
                </Button>

                {success && <p className="text-sm text-green-400">{success}</p>}
                {error && <p className="text-sm text-red-400">{error}</p>}
            </form>
        </div>
    );
}
