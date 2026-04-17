import HomeSection from "./components/Container/HomeSection/HomeSection";
import TrustedSAP from "./components/Container/HomeSection/TrustedSAP";
import ResultsSection from "./components/Container/HomeSection/ResultsSection";
import WhyChooseSection from "./components/Container/HomeSection/WhyChooseSection";
import ProcessSection from "./components/Container/HomeSection/ProcessSection";
import ComparisonSection from "./components/Container/HomeSection/ComparisonSection";
import IndustriesFaq from "./components/Container/HomeSection/Industriesfaq";
import FAQsSection from "./components/Container/HomeSection/FAQsSection";
import CtaHero from "./common/CtaHero";
import animation_icon from "@/app/assets/Images/animation_icon.svg";
import ClientMarquee from "./components/Container/AboutSection/ClientMarquee";

export const metadata = {
  title: "SAP Consulting & Implementation Services in India | BeeWeave",
  description:
    "Bee Weave is your SAP consulting and implementation partner in India, delivering end-to-end SAP deployment and expert support to improve business performance.",
  alternates: {
    canonical: "https://www.beeweave.ai/",
  },
};

function page() {
  return (
    <>
      <HomeSection />
      <TrustedSAP />
      <ResultsSection />
      <WhyChooseSection />
      <ClientMarquee />
      <ProcessSection />
      <ComparisonSection />
      <IndustriesFaq />
      <FAQsSection />
      <CtaHero
        title={`We Are Ready to Help.\nAre You Ready to Grow?`}
        buttonText="Let's Make It Happen"
        buttonLink="/contact"
        image={animation_icon}
        showGrid={true}
      />
    </>
  );
}

export default page;
