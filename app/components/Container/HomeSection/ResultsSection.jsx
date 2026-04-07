"use client";
import React from "react";
import { motion } from "framer-motion";
import { results } from "@/app/utils/HomemockData";
import MainLayout from "@/app/common/MainLayout";
import { CountUp } from "@/app/common/CountUp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
  }),
};

const cell = "px-4 py-8 flex flex-col gap-4";
const statNum = "text-4xl font-bold text-[#7400FA]";
const statTxt = "text-xs text-white leading-tight max-w-[100px]";
const borderT = "border-t border-[#7400FA]/30";
const borderTL = "border-t border-l border-[#7400FA]/30";
const borderLOnly = "border-l border-[#7400FA]/30";

const ResultsSection = () => {
  return (
    <MainLayout className="relative px-6 lg:px-30 py-20 overflow-hidden ">
      <div className="absolute left-[-250px] bottom-0 w-[380px] h-[500px] bg-[#7400FA] opacity-30 blur-[60px] rounded-full pointer-events-none" />
      <div className="absolute right-[-250px] top-0 w-[380px] h-[500px] bg-[#7400FA] opacity-30 blur-[60px] rounded-full pointer-events-none" />
      <div className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="p-4 flex items-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-linear-to-r from-[#7400FB] to-[#C016F4] bg-clip-text text-transparent leading-tight">
              Results You Can Expect with Our SAP Solutions
            </h2>
          </motion.div>
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`${cell} ${borderLOnly}`}
          >
            <h3 className="text-lg font-semibold text-white">
              {results[0].title}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">
              {results[0].description}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <CountUp value={results[0].stat} className={statNum} />
              <span className={statTxt}>{results[0].statLabel}</span>
            </div>
          </motion.div>
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`${cell} ${borderT}`}
          >
            <h3 className="text-lg font-semibold text-white">
              {results[1].title}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">
              {results[1].description}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <CountUp value={results[1].stat} className={statNum} />
              <span className={statTxt}>{results[1].statLabel}</span>
            </div>
          </motion.div>
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`${cell} ${borderTL}`}
          >
            <h3 className="text-lg font-semibold text-white">
              {results[2].title}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">
              {results[2].description}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <CountUp value={results[2].stat} className={statNum} />
              <span className={statTxt}>{results[2].statLabel}</span>
            </div>
          </motion.div>
          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`${cell} ${borderT}`}
          >
            <h3 className="text-lg font-semibold text-white">
              {results[3].title}
            </h3>
            <p className="text-sm text-white/50 leading-relaxed">
              {results[3].description}
            </p>
            <div className="flex items-center gap-3 mt-2">
              <CountUp value={results[3].stat} className={statNum} />
              <span className={statTxt}>{results[3].statLabel}</span>
            </div>
          </motion.div>
          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`${cell} ${borderTL} relative overflow-hidden`}
          >
            <div className="relative overflow-hidden rounded-2xl p-6 border border-[#9333ea]/30 bg-[#0b0018]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(116,0,250,0.18),transparent_70%)] pointer-events-none" />

              <h3 className="text-xl md:text-2xl font-semibold text-white relative z-10 leading-snug">
                {results[4].title}
              </h3>

              <p className="text-sm md:text-base text-white/60 leading-relaxed mt-4 relative z-10 max-w-sm">
                {results[4].description}
              </p>

              <div className="flex items-center gap-4 mt-6 relative z-10">
                <CountUp
                  value={results[4].stat}
                  className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#9333ea] to-[#c084fc] bg-clip-text text-transparent"
                />
                <span className="text-sm md:text-base text-white font-medium leading-tight">
                  {results[4].statLabel}
                </span>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[120px] bg-[#9333ea]/20 blur-[60px] rounded-full pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ResultsSection;
