"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative min-h-[321px] flex flex-col items-center justify-center text-center px-6 py-30 overflow-hidden bg-[#0d0a1a]">
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #6b5ce7 1px, transparent 1px),
            linear-gradient(to bottom, #6b5ce7 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative text-[#ccc] text-sm mb-7 tracking-wide"
      >
        Home – <strong className="text-white font-semibold">About Us</strong>
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
        className="relative text-white text-3xl sm:text-4xl md:text-5xl  font-semibold leading-[1.15]  mb-5"
      >
        A Little About Us and a Lot
        <br className="hidden md:inline" />
        About What We Believe In
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
        className="relative  text-sm max-w-[520px] leading-relaxed"
      >
        Scroll down and get to know the people, the purpose and the passion
        behind everything Bee Weave does.
      </motion.p>
    </section>
  );
};

export default AboutHero;
