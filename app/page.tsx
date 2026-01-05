// Home
import About from "../components/about/about";
import ProcessSection from "@/components/Process/process";
import PortfolioSection from "@/components/portfolio/portfilo";
import IntroSection from "@/components/intro/intro";
import PricingSection from "@/components/pricingSection/pricing";
import Contact from "@/components/contact/contact";
import FAQ from "@/components/FAQ/faq";
export default function HomePage() {
  return (
    
    <div className=" px-4 pb-16 pt-10 max-w-6xl space-y-16">
      <IntroSection />
      <About />

      <ProcessSection />
      <PortfolioSection />
      <FAQ />
      <PricingSection />
      <Contact />
      </div>
  );
}
