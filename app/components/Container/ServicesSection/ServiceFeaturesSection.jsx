"use client";
import MainLayout from "@/app/common/MainLayout";

const ServiceFeaturesSection = ({ title, items = [] }) => {
    return (
        <MainLayout className="w-full py-20 px-6 md:px-30 bg-[#0d0a1a]">

            <h2 className="text-center text-white text-xl md:text-3xl font-semibold mb-14 max-w-sm md:max-w-2xl mx-auto leading-snug">
                {title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items?.map((item, index) => (
                    <div
                        key={index}
                        className="rounded-2xl bg-gradient-to-br from-[#8239D7]  p-[1px] overflow-hidden"
                    >
                        <div className="h-full rounded-[15px] bg-gradient-to-br from-[#0F0021] to-[#1a0033] p-10">
                            <h3 className="text-white text-lg font-semibold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>

                        </div>
                    </div>
                ))}
            </div>
        </MainLayout>
    );
};

export default ServiceFeaturesSection;