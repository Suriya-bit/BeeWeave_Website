"use client";
import MainLayout from "@/app/common/MainLayout";
import award_white from "@/app/assets/Images/award-white.svg";
import Image from "next/image";
const ServiceBenefitsSection = ({ title, items = [] }) => {
    return (
        <MainLayout className="w-full  md:py-20 px-6 md:px-30 bg-[#0d0a1a]">
            <h2 className="text-center text-white text-xl md:text-3xl font-semibold mb-5 md:mb-16 max-w-lg mx-auto">
                {title}
            </h2>
            <div className="flex lg:grid lg:grid-cols-4 overflow-x-auto lg:overflow-visible scrollbar-hide gap-4 px-2">
                {items?.map((item, index) => (
                    <div
                        key={index}
                        className="
        flex-shrink-0 
        w-[calc(100%/1.2)] sm:w-[calc(100%/2.2)] md:w-[calc(100%/3.2)] 
        lg:w-auto 
        px-4 py-6 relative
      "
                    >
                        {index !== items.length - 1 && (
                            <div className=" absolute top-6 right-0 h-[70%] w-[1px] bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />
                        )}

                        <div className="flex justify-start mb-4">
                            <Image src={award_white} alt="Benefit Icon" className="w-12 h-12" />
                        </div>

                        <h3 className="text-white text-lg font-semibold mb-2">
                            {item.title}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </MainLayout>
    );
};

export default ServiceBenefitsSection;