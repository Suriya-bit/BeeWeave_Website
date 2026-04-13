"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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

function page() {
  const [ready, setReady] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const launchDate = new Date(process.env.NEXT_PUBLIC_LAUNCH_DATE);
    const now = new Date();
    if (now < launchDate) {
      router.replace("/launch");
    } else {
      setReady(true);
    }
  }, [router]);

  if (!ready) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }
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
