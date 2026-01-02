// Home
import About from "../components/about/about";
import ProcessSection from "@/components/Process/process";
import PortfolioSection from "@/components/portfolio/portfilo";
import IntroSection from "@/components/intro/intro";
import PricingSection from "@/components/pricingSection/pricing";
export default function HomePage() {
  return (
    <div className="space-y-16">
      <IntroSection />
      <About />

      <ProcessSection />
      <PortfolioSection />
      <PricingSection />
      </div>
  );
}
