"use client";
import MainLayout from "@/app/common/MainLayout";
import Link from "next/link";

const ServiceIntroSection = ({
    title,
    description,
    buttonText,
    buttonLink = "#",
}) => {
    return (
        <MainLayout className="w-full  text-center md:py-20 px-6 bg-[#0d0a1a]">
            <h2 className="text-white text-xl md:text-3xl font-semibold mb-6 leading-snug max-w-3xl mx-auto">
                {title}
            </h2>
            <p className="text-gray-300 max-w-5xl mx-auto text-sm md:text-base leading-relaxed mb-8">
                {description}
            </p>
            {buttonText && (
                <Link
                    href={buttonLink}
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
            )}

        </MainLayout>
    );
};

export default ServiceIntroSection;