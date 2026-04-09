"use client";
import MainLayout from "@/app/common/MainLayout";
import award_white from "@/app/assets/Images/award-white.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const ServiceBenefitsSection = ({ title, items = [] }) => {
    return (
        <MainLayout className="w-full md:py-20 px-6 md:px-30 bg-[#0d0a1a]">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center text-white text-xl md:text-3xl font-semibold mb-5 md:mb-16 max-w-lg mx-auto"
            >
                {title}
            </motion.h2>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="
          flex flex-nowrap
          overflow-x-auto
          scrollbar-hide
          scroll-smooth
          gap-4 px-2
        "
            >
                {items?.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="
              flex-shrink-0
              w-[85%] sm:w-[45%] md:w-[30%] lg:w-[380px]
              px-4 py-6 relative
            "
                    >
                        {index !== items.length - 1 && (
                            <div className="absolute top-6 right-0 h-[70%] w-[1px] bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />
                        )}
                        <div className="flex justify-start mb-4">
                            <Image
                                src={award_white}
                                alt="Benefit Icon"
                                className="w-12 h-12"
                            />
                        </div>
                        <h3 className="text-white text-lg font-semibold mb-2">
                            {item.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </MainLayout>
    );
};

export default ServiceBenefitsSection;