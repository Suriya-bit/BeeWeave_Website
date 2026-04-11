"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
  const [active, setActive] = useState(false);

  return (
    <MainLayout className="relative px-6 lg:px-30 py-10 overflow-hidden">
      <div onMouseEnter={() => setActive(true)} className="relative">

        <div
          className={`absolute inset-0 pointer-events-none transform-gpu will-change-transform 
transition-all duration-1000 ease-out 
${active ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.45),transparent_45%)]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] bg-[radial-gradient(circle_at_center,#c084fc_0%,transparent_60%)] blur-[60px] rounded-full" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] bg-[radial-gradient(circle_at_center,#9333ea_0%,transparent_70%)] blur-[100px] opacity-80 rounded-full" />
        </div>

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
                className="group relative flex flex-col gap-4 p-8 rounded-2xl h-full border border-[#7400FA]/30 bg-[#12002a] transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.25),transparent_70%)]" />

                <div className="flex flex-col gap-3 relative z-10">
                  <Image src={card.img} alt="icon" width={40} height={40} />
                  <h3 className="text-lg font-semibold text-white max-w-[241px]">
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

      </div>
    </MainLayout>
  );
};

export default WhyChooseSection;