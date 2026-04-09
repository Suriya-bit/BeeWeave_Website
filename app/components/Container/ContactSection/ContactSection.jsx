import React from 'react'
import ServiceBanner from '../ServicesSection/ServiceBanner'
import Collaborate from './Collaborate'
import DarkMap from './DarkMap'

const ContactSection = () => {
    return (
        <>
            <ServiceBanner
                title={
                    <>
                        An Easy Way to Connect With Us and  <br className="hidden md:inline" />
                        a Real Passion to Help
                    </>
                }
                subtitle="Reach out to our team  for any inquiries, support, or collaborations, and let us help you connect, communicate, and take the next step with confidence."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Contact" },
                ]}
            />
            <Collaborate />
            <DarkMap />
        </>
    )
}

export default ContactSection