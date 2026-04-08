import React from "react";
import AboutHero from "./AboutHero";
import AboutMission from "./AboutMission";
import AboutChoose from "./AboutChoose";
import ProcessSection from "./ProcessSection";
import CtaHero from "@/app/common/CtaHero";
import FAQsSection from "./FAQsSection";
import ClientMarquee from "./ClientMarquee";
import animation_icon from "@/app/assets/Images/animation_icon.svg";


const AboutSection = () => {
  return (
    <>
      <AboutHero />
      <ClientMarquee />
      <AboutMission />
      <AboutChoose />
      <ProcessSection />
      <FAQsSection />
      <CtaHero
        title={`We Are Ready to Help.\nAre You Ready to Grow?`}
        buttonText="Let’s Build Something Together"
        buttonLink="/contact"
        image={animation_icon}
        showGrid={true}
      />
    </>
  );
};

export default AboutSection;
