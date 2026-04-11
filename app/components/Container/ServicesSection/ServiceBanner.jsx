"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import MainLayout from "@/app/common/MainLayout";

const ServiceBanner = ({
    title,
    subtitle,
    breadcrumbs = [],
}) => {
    return (
        <MainLayout className="relative min-h-[350px] flex flex-col items-center justify-center text-center px-6 py-30 overflow-hidden bg-[#0d0a1a]">

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-[600px] md:w-[1000px] h-[320px]">

                    <div className="absolute inset-0 rounded-full 
            bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.9)_0%,rgba(147,51,234,0.5)_30%,rgba(147,51,234,0.2)_55%,transparent_75%)] 
            blur-[100px]"
                    />

                    <div
                        className="absolute inset-0 opacity-[0.15] rounded-full"
                        style={{
                            backgroundImage:
                                "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
                            backgroundSize: "60px 60px",
                            maskImage:
                                "radial-gradient(circle at center, white 40%, transparent 80%)",
                            WebkitMaskImage:
                                "radial-gradient(circle at center, white 40%, transparent 80%)",
                        }}
                    />

                </div>
            </div>

            <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative text-[#ccc] text-sm mb-7 tracking-wide"
            >
                {breadcrumbs?.map((item, index) => (
                    <span key={index}>
                        {item.href ? (
                            <Link href={item.href} className="hover:text-white transition">
                                {item.label}
                            </Link>
                        ) : (
                            <strong className="text-white font-semibold">
                                {item.label}
                            </strong>
                        )}
                        {index !== breadcrumbs.length - 1 && " – "}
                    </span>
                ))}
            </motion.p>

            <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.15 }}
                className="relative text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] mb-5"
            >
                {title}
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative text-sm max-w-[520px] leading-relaxed text-white/70"
            >
                {subtitle}
            </motion.p>
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#0d0a1a]" />

        </MainLayout>
    );
};

export default ServiceBanner;