"use client";
import MainLayout from "@/app/common/MainLayout";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const ServiceFeaturesSection = ({ title, items = [] }) => {
    return (
        <MainLayout className="w-full py-20 px-6 md:px-30 bg-[#0d0a1a]">
            <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center text-white text-xl md:text-3xl font-semibold mb-14 max-w-sm md:max-w-2xl mx-auto leading-snug"
            >
                {title}
            </motion.h2>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {items?.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="rounded-2xl bg-gradient-to-br from-[#8239D7] p-[1px] overflow-hidden"
                    >
                        <div className="h-full rounded-[15px] bg-gradient-to-br from-[#0F0021] to-[#1a0033] p-10">

                            <h3 className="text-white text-lg font-semibold mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>

                        </div>
                    </motion.div>
                ))}
            </motion.div>

        </MainLayout>
    );
};

export default ServiceFeaturesSection;