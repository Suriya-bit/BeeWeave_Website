"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MissionIcon from "@/app/assets/Images/mission.svg";
import VisionIcon from "@/app/assets/Images/vision.svg";
import MainLayout from "@/app/common/MainLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const cards = [
  {
    label: "Mission",
    icon: MissionIcon,
    text: "To help businesses across India unlock the full potential of their technology by delivering expert SAP and Odoo consulting services that are practical, scalable and built around real business needs.",
  },
  {
    label: "Vision",
    icon: VisionIcon,
    text: "To be the most trusted SAP and Odoo consulting partner in India, known for building intelligent, future-ready business systems that empower organizations to grow without limits.",
  },
];

const AnimatedText = ({ text }) => (
  <p className="text-sm leading-relaxed text-white/60">
    {text.split(" ").map((word, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.03 }}
        viewport={{ once: true }}
        className="inline-block mr-1"
      >
        {word}
      </motion.span>
    ))}
  </p>
);

const AboutMission = () => {
  return (
    <MainLayout className="relative w-full bg-[#0d0a1a] overflow-hidden py-16 px-6 md:px-30">
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[100px]  opacity-15 rounded-full blur-[100px]" />
      <div className="relative z-10 grid md:grid-cols-2 gap-12 ">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          <h2 className="text-white font-black text-3xl leading-snug mb-5">
            We Are BEEWEAVE and We Mean Business
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/60 text-sm leading-relaxed"
          >
            BEEWEAVE is a India based SAP and Odoo consulting company
            built for businesses that refuse to settle for average technology.
            We are a team of experienced SAP consultants, cloud architects and
            AI engineers driven by one shared goal: Helping businesses run
            smarter and grow faster. Our expertise covers SAP S/4HANA
            implementation, Odoo ERP delivery, cloud transformation and AI
            powered automation through our very own beeAI platform. Everything
            your business needs under one roof. We do not just deliver
            technology. We show up as partners, stay through every challenge
            and remain by your side well after we go live.
          </motion.p>
        </motion.div>
        <div className="flex flex-col gap-4">
          {cards?.map((card, i) => (
            <motion.div
              key={card.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              className="group relative flex gap-4 items-start rounded-2xl p-10 border border-white/10 overflow-hidden transition-all duration-300
                bg-[linear-gradient(135deg,rgba(116,0,250,0.08),rgba(10,5,30,0.92))]
                hover:bg-[linear-gradient(135deg,rgba(130,57,215,0.45),rgba(10,5,30,0.92))]
                hover:border-purple-500/40"
            >
              <div className="w-18 h-18 min-w-[48px] rounded-xl  flex items-center justify-center">
                <Image
                  src={card.icon}
                  alt={card.label}
                  width={24}
                  height={24}
                  className="w-18 h-18"
                />
              </div>
              <div>
                <h3 className="text-white text-base font-bold mb-2">
                  {card.label}
                </h3>
                <AnimatedText text={card.text} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutMission;