"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import MainLayout from "@/app/common/MainLayout";
import Linear from "@/app/assets/Images/common_linear.svg";

const ServiceBanner = ({
    title,
    subtitle,
    breadcrumbs = [],
}) => {
    return (
        <MainLayout className="relative min-h-[350px] flex flex-col items-center justify-center text-center px-6 py-30 overflow-hidden bg-black">
            <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #6b5ce7 1px, transparent 1px),
                        linear-gradient(to bottom, #6b5ce7 1px, transparent 1px)
                    `,
                    backgroundSize: "80px 80px",
                }}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <img
                    src={Linear.src}
                    alt="bg glow"
                    className="w-[900px] md:w-[1200px] opacity-80 blur-[10px]"
                />
            </div>
            <div className="absolute inset-0 bg-purple-600/10 blur-3xl pointer-events-none"></div>
            <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
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
                transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
                className="relative text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] mb-5"
            >
                {title}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                className="relative text-sm max-w-[520px] leading-relaxed"
            >
                {subtitle}
            </motion.p>

        </MainLayout>
    );
};

export default ServiceBanner;