"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import animation_icon from "@/app/assets/Images/animation_icon.svg";
import Image from "next/image";

function GridBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(139,92,246,0.07) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139,92,246,0.07) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  );
}

export default function CtaHero() {
  return (
    <section className="relative w-full bg-black overflow-hidden flex items-center justify-center  md:py-10 px-4">
      <GridBackground />
      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0]
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <Image
            src={animation_icon}
            alt="animation icon"
            width={400}
            height={400}
          />
        </motion.div>
        <motion.h2
          className="text-xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          We Are Ready to Help.
          <br />
          Are You Ready to Grow?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
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
      </div>
    </section>
  );
}
