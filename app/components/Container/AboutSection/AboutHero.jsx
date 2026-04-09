"use client";
import React from "react";
import { motion } from "framer-motion";
import Linear from "@/app/assets/Images/common_linear.svg";

const AboutHero = () => {
  return (
    <section className="relative min-h-[521px] flex flex-col items-center justify-center text-center px-6 py-30 overflow-hidden bg-[#0d0a1a]">
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
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={Linear.src}
          alt="bg glow"
          className="w-[900px] md:w-[1200px] opacity-80"
        />
      </div>
      <motion.p className="relative text-[#ccc] text-sm mb-7 tracking-wide">
        Home – <strong className="text-white font-semibold">About Us</strong>
      </motion.p>
      <motion.h1 className="relative text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.15] mb-5">
        A Little About Us and a Lot
        <br className="hidden md:inline" />
        About What We Believe In
      </motion.h1>

      <motion.p className="relative text-sm max-w-[520px] leading-relaxed">
        Scroll down and get to know the people, the purpose and the passion
        behind everything Bee Weave does.
      </motion.p>

    </section>
  );
};

export default AboutHero;
