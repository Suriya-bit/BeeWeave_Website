"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import awardWhite from "@/app/assets/Images/award-white.svg";
import { cards } from "@/app/utils/HomemockData";
import MainLayout from "@/app/common/MainLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

const WhyChooseSection = () => {
  return (
    <MainLayout className="relative px-6 lg:px-30 py-10 overflow-hidden">
      <div
        className="absolute inset-0 
bg-[radial-gradient(circle_at_center,rgba(130,57,215,0.15),transparent_65%)] 
pointer-events-none"
      />
      <div
        className="absolute left-1/2 top-[50%] -translate-x-1/2 -translate-y-1/2 
  w-[950px] h-[260px] 
  bg-[radial-gradient(circle_at_center,#8239D7_0%,#7400FA00_70%)] 
  blur-[120px] rounded-full pointer-events-none"
      />
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-white text-center mb-10 leading-snug"
        >
          Why Choose Bee Weave for SAP & Odoo
          <br />
          ERP Consulting & Implementation Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {cards?.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative flex flex-col gap-4 p-8 rounded-2xl h-full 
              border border-[#7400FA]/30 bg-[#0b0018] 
              transition-all duration-300 
              hover:border-[#9b4dff] hover:shadow-[0_0_35px_rgba(116,0,250,0.35)]"
            >
              <div className="flex flex-col gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10">
                  <Image src={awardWhite} alt="icon" width={20} height={20} />
                </div>
                <h3 className="text-lg font-semibold text-white max-w-[241px] group-hover:text-[#9b4dff] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default WhyChooseSection;
