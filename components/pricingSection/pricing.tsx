import Link from "next/link";
import PricingCards from "../PricingCards";

export default function PricingSection (){
    return (  <section className="space-y-5">
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
      </section>)
}