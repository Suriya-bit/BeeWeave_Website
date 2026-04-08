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
import { benefits, processItems, features, impactData, faqData } from '@/app/utils/AiWithSapMockData';
import ImpactSection from '../ServicesSection/ImpactSection';
import FAQsSection from '../ServicesSection/ServiceFAQSection';
import CtaHero from '@/app/common/CtaHero';
import animation_icon from "@/app/assets/Images/animation_icon.svg";


const logos = [client1, client2, client3];


const AiWithSap = () => {
    return (
        <>
            <ServiceBanner
                title={
                    <>
                        Power Up Your Business with India's <br className="hidden md:inline" />
                        Expert SAP S/4HANA Consulting and
                        <br className="hidden md:inline" />
                        Implementation Services!
                    </>
                }
                subtitle="We provide expert SAP S/4HANA consulting and implementation services in Chennai, helping businesses move to a smarter ERP system and build a stronger foundation for long term growth."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "AI with SAP" },
                ]}
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
            <ServiceIntroSection
                title="Trusted S/4HANA Consulting & Implementation Services in India"
                description="Bee Waave offers S/4HANA consulting and implementation services across India to help businesses move to SAP the right way. We cover everything your business needs to get started and succeed. Our SAP consultants combine deep technical knowledge with real business understanding, giving your business a clean, reliable and future ready system. We stay committed through every stage of your journey, making sure your S/4HANA implementation delivers real value and lasting results for your business."
                buttonText="Begin My SAP S/4HANA Journey"
                buttonLink="/contact"
            />
            <ServiceFeaturesSection
                title="What Bee Weave Delivers for Your Business with SAP S/4HANA?"
                items={features}
            />
            <ServiceBenefitsSection
                title="Key Benefits for Your Business with Our SAP S/4HANA Services"
                items={benefits}
            />
            <ProcessSection
                title="The Bee Waave's Process"
                items={processItems}
            />
            <ImpactSection
                title="Measurable Business Impact with SAP S/4HANA"
                description="Make faster, smarter decisions with the power of live insights and real-time visibility across all departments. By having up-to-date data at your fingertips, you can monitor performance, identify opportunities, and respond instantly to changes—ensuring seamless coordination, improved efficiency, and better business outcomes."
                buttonText="Begin My SAP S/4HANA Journey"
                stats={impactData}
            />
            <FAQsSection
                title="Frequently Asked Questions"
                subtitle="FAQs"
                faqs={faqData}
            />
            <CtaHero
                title={`The Right Time to Move to SAP S/4HANA is Now`}
                buttonText="Let’s Build Something Together"
                buttonLink="/contact"
                image={animation_icon}
                showGrid={true}
            />
        </>
    )
}

export default AiWithSap