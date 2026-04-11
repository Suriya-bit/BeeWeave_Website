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
                        AI Powered SAP Services  <br className="hidden md:inline" />
                        Transforming Businesses Across India
                    </>
                }
                subtitle="We are a trusted AI with SAP Service Company in India empowering businesses to transform their SAP environment with intelligent automation and generative AI capabilities."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "AI with SAP" },
                ]}
            />
            <ServiceIntroSection
                title="
Best AI Powered SAP Service Company in India"
                description="
Bee Weave is a trusted AI powered SAP service company in India helping businesses make the most of their SAP investment. We use the latest artificial intelligence tools to automate workflows, improve accuracy and give your team the insights they need to grow. Our dedicated team of SAP and AI experts work closely with your business to understand your goals and deliver solutions that actually make a difference. Every solution we build is easy to use, fully secure and designed to scale as your business grows and evolves over time.
"
                buttonText="Get Started with AI Powered SAP Services"
                buttonLink="/contact"
            />
            <ServiceFeaturesSection
                title="See What Bee Weave AI Powered SAP Services Actually Do for Your Business"
                items={features}
            />
            <ServiceBenefitsSection
                title="Key Benefits for Your Business with Our AI Powered SAP "
                items={benefits}
            />
            <ProcessSection
                title="The Bee Waave's Process"
                items={processItems}
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
            <ImpactSection
                title="Measurable Business Impact with AI Powered SAP"
                description="Make faster, smarter decisions with the power of live insights and real-time visibility across all departments. By having up-to-date data at your fingertips, you can monitor performance, identify opportunities, and respond instantly to changes—ensuring seamless coordination, improved efficiency, and better business outcomes."
                buttonText="Begin My AI Powered SAP Journey"
                stats={impactData}
            />
            <FAQsSection
                title="Frequently Asked Questions"
                subtitle="FAQs"
                faqs={faqData}
            />
            <CtaHero
                title={`The Future of SAP is Already Here`}
                buttonText="See beeAI in Action"
                buttonLink="/contact"
                image={animation_icon}
                showGrid={true}
                subTitle={"Contact us today and see what intelligent SAP automation can do for you. "}
            />
        </>
    )
}

export default AiWithSap