"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import benefit1 from "@/app/assets/Images/benefit1.svg";
import benefit2 from "@/app/assets/Images/benefit2.svg";
import benefit3 from "@/app/assets/Images/benefit3.svg";
import benefit4 from "@/app/assets/Images/benefit4.svg";
import benefit5 from "@/app/assets/Images/benefit5.svg";
import benefit6 from "@/app/assets/Images/benefit6.svg";
import benefit7 from "@/app/assets/Images/benefit7.svg";
import benefit8 from "@/app/assets/Images/benefit8.svg";

import MainLayout from "@/app/common/MainLayout";

const benefits = [
    { text: "Flexible work environment", icon: benefit1 },
    { text: "Career advancement", icon: benefit2 },
    { text: "Learning & growth", icon: benefit3 },
    { text: "Real project exposure", icon: benefit4 },
    { text: "Friendly team culture", icon: benefit5 },
    { text: "Work-life balance", icon: benefit6 },
    { text: "Recognition for your work", icon: benefit7 },
    { text: "Open communication", icon: benefit8 },
];

const loopData = [...benefits, ...benefits];
console.log(loopData);


const Benefits = () => {
    return (
        <MainLayout className="relative w-full bg-[#0d0b1a] text-white py-20 overflow-hidden">

            <div className="text-center mb-12 px-6">
                <h2 className="text-4xl font-semibold mb-3">
                    Perks and benefits
                </h2>
                <p className=" max-w-md mx-auto">
                    From team hikes to virtual game nights, we keep the vibe alive—
                    wherever we are.
                </p>
            </div>
            <div className="overflow-hidden">
                <motion.div
                    className="flex gap-14 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "linear",
                    }}
                >
                    {loopData.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center min-w-[140px]"
                        >
                            <div className="w-15 h-15 min-w-[40px] bg-[#F2D2FD] rounded-full mb-4 flex items-center justify-center">
                                <Image
                                    src={item.icon}
                                    alt={item.text}
                                    className="w-10 h-10 object-contain"
                                />
                            </div>
                            <span className="text-sm text-white/90">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </MainLayout>
    );
};

export default Benefits;