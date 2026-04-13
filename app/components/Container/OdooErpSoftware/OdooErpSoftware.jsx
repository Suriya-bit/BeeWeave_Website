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
import { odooBenefits, odooFaqData, odooFeatures, odooImpactData, sapBtpProcessItems } from '@/app/utils/OdooErpSoftwareMock';


const logos = [client1, client2, client3];


const OdooErpSoftware = () => {
    return (
        <>
            <ServiceBanner
                title={
                    <>
                        Stop Overpaying for ERP<br className="hidden md:inline" />
                        Get the Best Odoo ERP
                        <br className="hidden md:inline" />
                        Software Consulting Services in India
                    </>
                }
                subtitle="We provide expert Odoo ERP software consulting and integration services in India, helping businesses move to a smarter, more affordable ERP system built around the way they actually work."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Odoo ERP Software" },
                ]}
            />
            <ServiceIntroSection
                title="Best Odoo Erp Software Consulting, Integration and Migration Services in India "
                description="Odoo is one of the most flexible and affordable ERP platforms available today and Bee Weave knows exactly how to make it work for your business. As a trusted Odoo ERP consulting company in India, we cover everything from Odoo ERP software consulting and integration to full system migration. Our team builds, customises and connects your Odoo platform around your exact business needs, giving you a modern ERP system built for growth."
                buttonText="Begin My Odoo ERP Journey"
                buttonLink="/contact"
            />

            <ServiceFeaturesSection
                title="The Real Results Bee Weave Brings to Your Odoo ERP Journey"
                items={odooFeatures}
            />
            <ServiceBenefitsSection
                title="Key Benefits for Your Business with Our Odoo erp software consulting Services"
                items={odooBenefits}
            />
            <ProcessSection
                title="The Bee Waave's Process"
                items={sapBtpProcessItems}
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
                title="Measurable Business Impact with Odoo Erp "
                description="Make faster, smarter decisions with the power of live insights and real-time visibility across all departments. By having up-to-date data at your fingertips, you can monitor performance, identify opportunities, and respond instantly to changes—ensuring seamless coordination, improved efficiency, and better business outcomes."
                buttonText="Begin My SAP S/4HANA Journey"
                stats={odooImpactData}
            />
            <FAQsSection
                title="Frequently Asked Questions"
                subtitle="FAQs"
                faqs={odooFaqData}
            />
            <CtaHero
                title={`Ready to Stop Overpaying for ERP?`}
                buttonText="Get My Odoo System Ready"
                buttonLink="/contact"
                image={animation_icon}
                showGrid={true}
                subTitle={"Talk to our team today and see the difference Odoo can make for your business. "}
            />
        </>
    )
}

export default OdooErpSoftware