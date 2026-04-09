import React from 'react'
import ServiceBanner from '../ServicesSection/ServiceBanner'
import ClientMarquee from '../ServicesSection/ServicesClientSection'
import client1 from "@/app/assets/Images/client1.svg";
import client2 from "@/app/assets/Images/client2.svg";
import client3 from "@/app/assets/Images/client3.svg";
import ServiceIntroSection from '../ServicesSection/ServiceIntroSection';
import ServiceFeaturesSection from '../ServicesSection/ServiceFeaturesSection';
import ServiceBenefitsSection from '../ServicesSection/ServiceBenefitsSection';
import ProcessSection from '../ServicesSection/ProcessSection';
import FAQsSection from '../ServicesSection/ServiceFAQSection';
import CtaHero from '@/app/common/CtaHero';
import animation_icon from "@/app/assets/Images/animation_icon.svg";
import { riseWithSapBenefits, riseWithSapFaqData, riseWithSapFeatures, riseWithSapProcessItems } from '@/app/utils/RIseWithSapMock';

const logos = [client1, client2, client3];

const RiseWithSap = () => {
    return (
        <>
            <ServiceBanner
                title={
                    <>
                        Take Your Business Higher <br className="hidden md:inline" />
                        with Reliable RISE
                        <br className="hidden md:inline" />
                        with SAP Consulting Services in India
                    </>
                }
                subtitle="We offer expert RISE with SAP consulting services in India, helping businesses make a smooth move to the cloud and establish a solid foundation for continuous innovation and growth."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Rise with SAP" },
                ]}
            />
            <ServiceIntroSection
                title="Best RISE with SAP Consulting Services in India"
                description="Moving to SAP cloud is a big step and Bee Weave makes sure your business takes it the right way. We provide expert RISE with SAP consulting services in India, helping businesses plan, execute and complete their cloud transition without disruption. Our team brings the right skills, a clear process and genuine dedication to every project, giving your business a modern and future ready SAP cloud environment."
                buttonText="Get Started with RISE with SAP"
                buttonLink="/contact"
            />
            <ClientMarquee
                title={
                    <>
                        A Community of Brands
                        We Are Proud to Serve
                    </>
                }
                logos={logos}
            />
            <ServiceFeaturesSection
                title="What Bee Weave Delivers for Your Business with RISE with SAP?
                "
                items={riseWithSapFeatures}
            />
            <ServiceBenefitsSection
                title="Key Benefits for Your Business with Our RISE with SAP Services"
                items={riseWithSapBenefits}
            />
            <ProcessSection
                title="The Bee Waave's Process"
                items={riseWithSapProcessItems}
            />
            <FAQsSection
                title="Frequently Asked Questions"
                subtitle="FAQs"
                faqs={riseWithSapFaqData}
            />
            <CtaHero
                title={`Your Cloud Journey Starts with One Decision`}
                buttonText="Begin My RISE with SAP Journey"
                buttonLink="/contact"
                image={animation_icon}
                showGrid={true}
                subTitle={"Bee Weave is ready to make your RISE with SAP transition smooth and successful."}
            />
        </>
    )
}

export default RiseWithSap