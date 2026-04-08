"use client";
import React, { useState } from "react";
import MainLayout from "@/app/common/MainLayout";

const FAQsSection = ({
    title = "We're here to help",
    subtitle = "FAQs",
    faqs = [],
}) => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <MainLayout className="py-10 md:py-20 px-4 md:px-30 relative overflow-hidden bg-[#0d0a1a]">
            <div className="absolute left-[-250px] top-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-[#7400FA] opacity-30 blur-[60px] rounded-full pointer-events-none" />
            <div className="absolute right-[-250px] top-1/2 -translate-y-1/2 w-[300px] h-[500px] bg-[#7400FA] opacity-30 blur-[60px] rounded-full pointer-events-none" />
            <p className="text-center text-xs font-semibold tracking-[0.25em] uppercase text-white mb-2">
                {subtitle}
            </p>
            <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-14 tracking-tight">
                {title}
            </h2>
            <div className="space-y-4 ">
                {faqs?.map(({ question, answer }, i) => {
                    const isOpen = openIndex === i;
                    return (
                        <div
                            key={i}
                            className="rounded-xl border border-white/20 bg-black/40 overflow-hidden transition duration-300 hover:border-white/40"
                        >
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : i)}
                                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                            >
                                <span className="text-base md:text-lg font-medium text-white">
                                    {question}
                                </span>
                                <span
                                    className={`w-6 h-6 flex items-center justify-center text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                        }`}
                                >
                                    <svg
                                        viewBox="0 0 12 12"
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M2 4l4 4 4-4"
                                        />
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="px-6 pb-5 text-sm text-white/60 leading-relaxed">
                                    {answer}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </MainLayout>
    );
};

export default FAQsSection;