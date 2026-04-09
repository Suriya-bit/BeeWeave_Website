"use client";

import { CountUp } from "@/app/common/CountUp";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

const ImpactSection = ({
    title,
    description,
    buttonText,
    stats = [],
}) => {
    return (
        <div className="w-full px-6 md:px-30 py-6 md:py-16 bg-[#0d0a1a]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4 text-center md:text-left">
                        {title}
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md mx-auto md:mx-0 text-center md:text-left">
                        {description}
                    </p>
                    {buttonText && (
                        <div className="flex justify-center md:justify-start">
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-xl overflow-hidden text-black text-sm font-semibold transition-all active:scale-95"
                            >
                                <span className="absolute inset-0 bg-linear-to-b from-[#ffffff] via-[#f3e8ff] to-[#d0a1e1]"></span>

                                <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent translate-x-[-101%] group-hover:translate-x-[101%] transition-transform duration-1000 ease-in-out"></span>

                                <span className="relative z-10">
                                    {buttonText}
                                </span>
                            </Link>
                        </div>
                    )}
                </motion.div>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2"
                >
                    {stats?.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            transition={{ duration: 0.5, ease: "easeOut" }}
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
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
};

export default ImpactSection;