"use client";

import { CountUp } from "@/app/common/CountUp";
import Link from "next/link";

const ImpactSection = ({
    title,
    description,
    buttonText,
    stats = [],
}) => {
    return (
        <div className="w-full px-6 md:px-30 py-6 md:py-16 bg-[#0d0a1a]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">
                        {title}
                    </h2>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
                        {description}
                    </p>
                    {buttonText && (
                        <div className="flex justify-center md:justify-start">
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-xl overflow-hidden text-black text-sm font-semibold transition-all active:scale-95"
                            >
                                <span className="absolute inset-0 bg-linear-to-b from-[#ffffff] via-[#f3e8ff] to-[#d0a1e1]"></span>
                                <span
                                    className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent 
    translate-x-[-101%] group-hover:translate-x-[101%] transition-transform duration-1000 ease-in-out"
                                ></span>

                                <span className="relative z-10">
                                    {buttonText}
                                </span>
                            </Link>
                        </div>
                    )}
                </div>
                <div className="grid grid-cols-2">
                    {stats?.map((item, index) => (
                        <div
                            key={index}
                            className="relative p-10 flex flex-col justify-center items-center text-center"
                        >
                            {index % 2 === 0 && (
                                <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />
                            )}
                            {index < 2 && (
                                <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
                            )}
                            <h3 className="text-purple-500 text-4xl md:text-5xl font-semibold mb-3">
                                <CountUp value={item.value} />
                            </h3>
                            <p className="text-gray-400 text-sm">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImpactSection;