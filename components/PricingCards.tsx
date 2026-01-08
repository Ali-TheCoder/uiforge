// 
import { plans } from "@/lib/plans";

export default function PricingCards() {
    return (
        <div className="grid gap-4 md:grid-cols-4">
            {plans.map((p) => (
                <div
                    key={p.id}
                    className={[
                        "relative overflow-hidden rounded-3xl border p-5 backdrop-blur-xl",
                        p.highlight ? "border-white/20 bg-white/10" : "border-white/10 bg-card",
                    ].join(" ")}
                >
                    {p.highlight && (
                        <div className="absolute right-4 top-4 rounded-full bg-accent/20 px-3 py-1 text-xs text-accent border border-accent/30">
                            Most popular
                        </div>
                    )}

                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold">{p.name}</h3>
                        <p className="text-sm text-muted">{p.tagline}</p>
                    </div>

                    <div className="mt-4 flex items-end gap-2">
                        <div className="text-3xl font-semibold">${p.priceFrom}</div>
                        <div className="pb-1 text-sm text-muted">from</div>
                    </div>

                    <div className="mt-3 grid gap-2 text-sm">
                        <div className="flex items-center justify-between rounded-2xl bg-black/20 px-3 py-2 border border-white/10">
                            <span className="text-muted">Delivery</span>
                            <span>{p.delivery}</span>
                        </div>
                        <div className="flex items-center justify-between rounded-2xl bg-black/20 px-3 py-2 border border-white/10">
                            <span className="text-muted">Best for</span>
                            <span className="text-right">{p.bestFor}</span>
                        </div>
                    </div>

                    <ul className="mt-4 space-y-2 text-sm text-muted">
                        {p.features.map((f,index) => (
                            <li key={index} className="flex gap-2">
                                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary/80" />
                                <span>{f}</span>
                            </li>
                        ))}
                    </ul>

                    {/* <div className="mt-5">
                        <Button
                            href={`#contact?plan=${p.id}`}
                            className={p.highlight ? "w-full" : "w-full bg-white/10 hover:bg-white/15 border border-white/10"}
                            variant={p.highlight ? "primary" : "ghost"}
                        >
                            Choose {p.name}
                        </Button>
                    </div> */}
                </div>
            ))}
        </div>
    );
}
