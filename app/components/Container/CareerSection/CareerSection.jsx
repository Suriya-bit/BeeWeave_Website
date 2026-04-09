import React from 'react'
import ServiceBanner from '../ServicesSection/ServiceBanner'
import CareerForm from './CarrerForm'
import ClientMarquee from '../AboutSection/ClientMarquee'
import Benefits from './Benefits'

const CareerSection = () => {
    return (
        <>
            <ServiceBanner
                title={
                    <>

                        Build Your Future With Us Where <br className="hidden md:inline" />
                        Passion Meets Opportunity
                    </>
                }
                subtitle="We’re always looking for passionate, talented individuals who want to grow, learn, and make an impact. If you believe you can add value, we’d love to hear from you."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Career" },
                ]}
            />
            <ClientMarquee />
            <CareerForm />
            <Benefits />
        </>
    )
}

export default CareerSection