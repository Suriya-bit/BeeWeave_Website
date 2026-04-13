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
import ImpactSection from '../ServicesSection/ImpactSection';
import FAQsSection from '../ServicesSection/ServiceFAQSection';
import CtaHero from '@/app/common/CtaHero';
import animation_icon from "@/app/assets/Images/animation_icon.svg";
import { sapBtpBenefits, sapBtpFaqData, sapBtpFeatures, SapBtpimpactData, sapBtpProcessItems } from '@/app/utils/SapBtpMockData';


const logos = [client1, client2, client3];


const SapBtp = () => {
    return (
        <>
            <ServiceBanner
                title={
                    <>
                        Connect, Integrate and Innovate  <br className="hidden md:inline" />
                        with Expert SAP BTP Integration Services in India
                    </>
                }
                subtitle="BEEWEAVE's SAP BTP integration services in India connect your SAP systems, automate your workflows and extend your ERP without touching the core, giving your organisation a smarter and more capable technology environment."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "SAP BTP" },
                ]}
            />

            <ServiceIntroSection
                title="Best SAP BTP Integration Services in India "
                description="BEEWEAVE is a trusted SAP BTP integration partner in India bringing deep expertise across SAP Business Technology Platform. We connect your SAP systems with third party tools, build smart extensions and automate complex workflows without touching your core ERP. Our team delivers a fully connected and intelligent SAP landscape your organisation can rely on. From integration suite and application development to data analytics and low code extensions, BEEWEAVE covers everything your SAP landscape needs to perform at its best."
                buttonText="Begin My SAP BTP Journey"
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
                title="The Real Impact BEEWEAVE Delivers to Your SAP BTP Integration Journey"
                items={sapBtpFeatures}
            />
            <ServiceBenefitsSection
                title="Key Benefits for Your Business with Our SAP BTP consulting Services"
                items={sapBtpBenefits}
            />
            <ProcessSection
                title="The BEEWEAVE's Process"
                items={sapBtpProcessItems}
            />
            <ImpactSection
                title="Measurable Business Impact with SAP BTP"
                description="Make faster, smarter decisions with the power of live insights and real-time visibility across all departments. By having up-to-date data at your fingertips, you can monitor performance, identify opportunities, and respond instantly to changes—ensuring seamless coordination, improved efficiency, and better business outcomes."
                buttonText="Begin My SAP BTP Journey"
                stats={SapBtpimpactData}
            />
            <FAQsSection
                title="Frequently Asked Questions"
                subtitle="FAQs"
                faqs={sapBtpFaqData}
            />
            <CtaHero
                title={`Ready to Build a Smarter SAP Landscape?`}
                buttonText="Start My SAP BTP Journey"
                buttonLink="/contact"
                image={animation_icon}
                showGrid={true}
                subTitle={"BEEWEAVE is here to connect, integrate and extend your SAP systems the right way. "}
            />
        </>
    )
}

export default SapBtp