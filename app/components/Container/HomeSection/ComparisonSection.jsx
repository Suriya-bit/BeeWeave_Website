"use client";
import React from "react";
import { motion } from "framer-motion";
import MainLayout from "@/app/common/MainLayout";

const leftPoints = [
  "Generic implementation approach",
  "Limited flexibility for business needs",
  "Integration challenges with multiple systems",
  "High manual effort in operations",
  "Delayed reporting and insights",
  "Difficult to scale with growth",
];

const rightPoints = [
  "Tailored implementation based on your business",
  "Flexible and scalable system design",
  "Seamless integration across platforms",
  "Automated workflows to reduce manual work",
  "Real-time data and insights",
  "Built for long-term business growth",
];

const ComparisonSection = () => {
  return (
    <MainLayout className="relative px-6 lg:px-24 py-16 overflow-hidden ">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 
          bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.4),transparent_30%)]"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[900px] h-[100px] 
          bg-[radial-gradient(circle_at_center,#c084fc_0%,transparent_50%)] 
          blur-[80px] opacity-100 rounded-full"
        />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          w-[1200px] h-[300px] 
          bg-[radial-gradient(circle_at_center,#9333ea_0%,transparent_70%)] 
          blur-[160px] opacity-80 rounded-full"
        />
      </div>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Why Partners <br /> Choose Bee Weave
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid md:grid-cols-2  relative"
      >
        <div className="relative p-1px rounded-2xl bg-linear-to-b from-white/10 to-transparent">
          <div className="h-full w-full rounded-2xl bg-[#0b0018] p-8 backdrop-blur-xl">
            <h3 className="text-white text-lg font-semibold mb-3">
              Other ERP Solutions
            </h3>
            <div className="h-px w-full bg-linear-to-r from-[#7400FA] to-transparent mb-6" />
            <ul className="space-y-4">
              {leftPoints.map((item, i) => (
                <li key={i} className="relative text-sm text-white/60 pb-3">
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-white/10 to-transparent" />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative p-1px rounded-2xl bg-linear-to-b from-[#9333ea] via-[#7400FA] to-transparent  -mt-5 md:mt-0 md:-ml-10">
          <div className="h-full w-full rounded-2xl bg-linear-to-b from-[#7400FA] via-[#5b00d1] to-[#140024] p-8 backdrop-blur-xl">
            <h3 className="text-white text-lg font-semibold mb-3">
              Bee Weave Approach
            </h3>
            <div className="h-px w-full bg-linear-to-r from-white/70 to-transparent mb-6" />
            <ul className="space-y-4">
              {rightPoints.map((item, i) => (
                <li key={i} className="relative text-sm text-white pb-3">
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-white/20 to-transparent" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </MainLayout>
  );
};

export default ComparisonSection;
