"use client";
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const ProcessSection = ({ title = "The BEEWEAVE's Process", items = [] }) => {
    return (
        <div className="w-full py-16 px-6 md:px-20 bg-[#0d0a1a]">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-center text-white text-2xl md:text-3xl font-semibold mb-10"
            >
                {title}
            </motion.h2>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
                {items?.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="relative flex rounded-[14px] bg-[#110128] overflow-hidden"
                    >
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-10 w-[80%] h-[600px] bg-[#860fee] opacity-30 blur-[50px] rounded-full pointer-events-none z-0" />
                        <div className="w-[60px] md:w-[100px] flex-shrink-0 bg-[rgb(15,0,33)] border-r border-[rgba(160,100,255,0.35)] rounded-[15px] flex items-center justify-center text-white text-[16px] font-bold z-10">
                            {String(index + 1).padStart(2, "0")}
                        </div>
                        <div className="z-10 px-[18px] py-[20px] flex flex-col justify-center">
                            <h3 className="text-white text-2xl font-semibold mb-[7px] leading-[1.3]">
                                {item.title}
                            </h3>

                            <p className="text-gray-300 text-[12.5px] leading-[1.65]">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ProcessSection;