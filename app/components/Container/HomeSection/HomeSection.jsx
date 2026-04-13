"use client";
import React from "react";
import Link from "next/link";
import MainLayout from "@/app/common/MainLayout";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: "easeOut" },
  },
};

const HomeSection = () => {
  return (
    <MainLayout className="relative min-h-screen bg-black flex flex-col items-center pt-10 md:pt-40 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.2, y: 40 }}
        animate={{ opacity: 0.8, scale: 1.5, y: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full"
        >
          <Image
            src="/images/homebanner.svg"
            alt="bg"
            fill
            className="object-cover"
          />
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[50%] w-[140%] md:w-[90%] h-[161px] md:h-[200px] bg-black rounded-t-[60%_120%] pointer-events-none z-10" />
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mx-auto w-full"
      >
        <motion.p
          variants={item}
          className="text-xs font-semibold tracking-[0.2em] text-white uppercase mb-6"
        >
          India's Premier Digital Orchestrators
        </motion.p>
        <motion.h1
          variants={item}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.10] mb-6 md:mb-8"
        >
          Stop Settling. You've Found{" "}
          <span className="hidden md:inline">
            <br />
          </span>
          the Best SAP Consulting{" "}
          <span className="hidden md:inline">
            <br />
          </span>
          Services in India.
        </motion.h1>

        <motion.p
          variants={item}
          className="text-sm md:text-base lg:text-lg font-medium text-white mb-10 md:mb-10 leading-relaxed max-w-3xl"
        >
          Getting SAP right takes the right partner. Our SAP implementation
          services in India bring the skills, experience and local presence your
          business needs to succeed.
        </motion.p>

        <motion.div variants={item}>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-xl overflow-hidden text-black text-sm font-semibold transition-all active:scale-95"
          >
            <span className="absolute inset-0 bg-linear-to-b from-[#ffffff] via-[#f3e8ff] to-[#d0a1e1]"></span>
            <span
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent 
    translate-x-[-101%] group-hover:translate-x-[101%] transition-transform duration-1000 ease-in-out"
            ></span>

            <span className="relative z-10">
              Let’s Build Something Together
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </MainLayout>
  );
};

export default HomeSection;
