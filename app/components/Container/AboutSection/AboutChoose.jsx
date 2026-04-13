"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { aboutscards } from "@/app/utils/AboutmockData";
import MainLayout from "@/app/common/MainLayout";

const cardFade = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
  }),
};

const itemFade = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  }),
};

const AboutChoose = () => {
  return (
    <MainLayout className="relative px-6 lg:px-30 py-28 bg-[#0d0a1a] overflow-x-hidden">
      <div className="relative z-10">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={itemFade}
          custom={0.2}
          className="text-2xl md:text-3xl font-bold text-white text-center mb-14 leading-snug"
        >
          Values That Drive Smart
          <br />
          ERP Transformation
        </motion.h2>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
            w-[1200px] md:w-[1600px] h-[700px] 
            bg-[radial-gradient(circle_at_center,rgba(130,57,215,0.6)_0%,rgba(130,57,215,0.35)_30%,rgba(130,57,215,0.15)_55%,transparent_75%)] 
            blur-[160px] rounded-full pointer-events-none z-0"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch relative z-10">
            {aboutscards?.map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardFade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="group relative flex flex-col justify-between gap-4 p-8 rounded-2xl h-full 
                border border-[#7400FA]/30 bg-[#0b0018] 
                transition-all duration-300 
                hover:border-[#9b4dff] hover:shadow-[0_0_35px_rgba(116,0,250,0.35)]"
              >
                <div className="flex flex-col gap-3">
                  <motion.div
                    variants={itemFade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.2}
                  >
                    <Image src={card.img} alt="icon" width={40} height={40} />
                  </motion.div>

                  <motion.h3
                    variants={itemFade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.3}
                    className="text-lg font-semibold text-white max-w-[241px]"
                  >
                    {card.title}
                  </motion.h3>

                  <motion.p
                    variants={itemFade}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.4}
                    className="text-sm text-white/60 leading-relaxed"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutChoose;