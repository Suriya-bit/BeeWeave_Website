"use client";
import React from "react";
import Image from "next/image";
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
    [
        { text: "Flexible work environment", icon: benefit1 },
        { text: "Career advancement", icon: benefit2 },
    ],
    [
        { text: "Learning & growth", icon: benefit3 },
        { text: "Real project exposure", icon: benefit4 },
    ],
    [
        { text: "Friendly team culture", icon: benefit5 },
        { text: "Work-life balance", icon: benefit6 },
    ],
    [
        { text: "Recognition for your work", icon: benefit7 },
        { text: "Open communication", icon: benefit8 },
    ],
];

const Benefits = () => {
    return (
        <MainLayout className="w-full   bg-[#0d0b1a] text-white py-16 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 ">
                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                        Perks and benefits
                    </h2>
                    <p className="text-sm md:text-base max-w-md">
                        From team hikes to virtual game nights, we keep the vibe alive—
                        wherever we are. Because fun fuels creativity.
                    </p>
                </div>
                <div className="space-y-6">
                    {benefits?.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-10"
                        >
                            {row.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-15 h-15 min-w-[40px] bg-[#F2D2FD] rounded-lg flex items-center justify-center">
                                        <Image
                                            src={item.icon}
                                            alt={item.text}
                                            className="w-10 h-10 object-contain"
                                        />
                                    </div>
                                    <span className="text-sm md:text-base">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default Benefits;