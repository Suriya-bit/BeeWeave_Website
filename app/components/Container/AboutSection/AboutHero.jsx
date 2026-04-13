"use client";
import React from "react";
import { motion } from "framer-motion";
import MainLayout from "@/app/common/MainLayout";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: i * 0.15 },
  }),
};

const AboutHero = () => {
  return (
    <MainLayout className="relative min-h-[521px] flex flex-col items-center justify-center text-center px-6 py-30 overflow-hidden bg-[#0d0a1a]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-[700px] md:w-[1200px] h-[320px]">

          <div className="absolute inset-0 rounded-full 
            bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.9)_0%,rgba(147,51,234,0.5)_30%,rgba(147,51,234,0.2)_55%,transparent_75%)] 
            blur-[120px]"
          />

          <div
            className="absolute inset-0 opacity-[0.15] rounded-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage:
                "radial-gradient(circle at center, white 40%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, white 40%, transparent 80%)",
            }}
          />

        </div>
      </motion.div>
      <motion.p
        custom={0}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative text-[#ccc] text-sm mb-7 tracking-wide"
      >
        Home – <strong className="text-white font-semibold">About Us</strong>
      </motion.p>
      <motion.h1
        custom={1}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] mb-5"
      >
        A Little About Us and a Lot
        <br className="hidden md:inline" />
        About What We Believe In
      </motion.h1>
      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative text-sm max-w-[520px] leading-relaxed text-white/70"
      >
        Scroll down and get to know the people, the purpose and the passion
        behind everything BEEWEAVE does.
      </motion.p>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#0d0a1a]" />

    </MainLayout>
  );
};

export default AboutHero;