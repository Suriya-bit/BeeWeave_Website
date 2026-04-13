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
import { cloudBenefits, cloudConsultancyFaqData, cloudFeatures, cloudImpactData, cloudProcessItems } from '@/app/utils/CloudMockData';


const logos = [client1, client2, client3];

const CloudTransformation = () => {
    return (
        <>
            <ServiceBanner
                title={
                    <>
                        Transform the Way Your Business Works  <br className="hidden md:inline" />
                        with Trusted Cloud Consulting Services in India
                    </>
                }
                subtitle="We are a trusted cloud consulting company in India helping businesses migrate, modernise 
and build digital environments which are built to perform, scale and grow with your business.
"
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Cloud Transformation" },
                ]}
            />
            <ServiceIntroSection
                title="Best Cloud Consulting & Transformation Services in India"
                description="Cloud technology has changed the way businesses work and Bee Weave is here to help yours keep up. We are a leading cloud consulting company in India with hands-on experience across AWS, Microsoft Azure and Google Cloud Platform. Our cloud transformation services take the stress out of moving to the cloud, giving your business a secure, reliable and cost friendly environment to operate and grow from. Whether you are migrating legacy systems, building a hybrid cloud environment or planning a complete cloud migration strategy, Bee Weave brings the right expertise and a structured approach to make your cloud journey smooth, successful and built for long term business growth."
                buttonText="Begin My Cloud Journey"
                buttonLink="/contact"
            />
            <ServiceFeaturesSection
                title="The Real Value Bee Weave Brings to Your Cloud Transformation Journey"
                items={cloudFeatures}
            />
            <ServiceBenefitsSection
                title="Key Benefits for Your Business with Our Cloud Consulting Services"
                items={cloudBenefits}
            />
            <ProcessSection
                title="The Bee Waave's Process"
                items={cloudProcessItems}
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
                title="Measurable Business Impact with Cloud Transformation"
                description="Make faster, smarter decisions with the power of live insights and real-time visibility across all departments. By having up-to-date data at your fingertips, you can monitor performance, identify opportunities, and respond instantly to changes—ensuring seamless coordination, improved efficiency, and better business outcomes."
                buttonText="Begin My Cloud Journey"
                stats={cloudImpactData}
            />
            <FAQsSection
                title="Frequently Asked Questions"
                subtitle="FAQs"
                faqs={cloudConsultancyFaqData}
            />
            <CtaHero
                title={`
Your Business Deserves a Better Cloud Partner
`}
                buttonText="Start My Cloud Journey"
                buttonLink="/contact"
                image={animation_icon}
                subTitle={"Talk to our cloud experts today and take the first step towards a smarter, faster and more secure cloud environment"}
                showGrid={true}
            />
        </>
    )
}

export default CloudTransformation