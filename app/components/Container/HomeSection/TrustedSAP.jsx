"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import awardWhite from "@/app/assets/Images/Trusted.svg";
import { features } from "@/app/utils/HomemockData";
import { ArrowRight } from "lucide-react";
import MainLayout from "@/app/common/MainLayout";
import Link from "next/link";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const paragraph = `BEEWEAVE is a team of experienced SAP consultants in India helping businesses take control of their ERP journey. We work with companies of all sizes to implement, migrate and modernize their systems using SAP and Odoo. We believe good technology should make business simpler, not harder. That is why every solution we build is practical, clean and built to grow with you.`;
const words = paragraph.split(" ");

const loopedFeatures = [...features, ...features];

const TrustedSAP = () => {
  const trackRef = useRef(null);
  const xRef = useRef(0);
  const isPausedRef = useRef(false);
  const rafRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const animate = () => {
      if (trackRef.current && !isPausedRef.current) {
        xRef.current -= 0.5;
        const halfWidth = trackRef.current.scrollWidth / 2;
        if (Math.abs(xRef.current) >= halfWidth) {
          xRef.current = 0;
        }
        trackRef.current.style.transform = `translateX(${xRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <MainLayout className="relative overflow-hidden bg-[#05010a]">
      <div onMouseEnter={() => setActive(true)} className="relative overflow-hidden isolate">
        <div
          className={`absolute inset-0 -z-10 pointer-events-none transform-gpu will-change-transform transition-all duration-1000 ease-out ${active ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.25),transparent_50%)]" />
          <div className="absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[200px] bg-[radial-gradient(circle_at_center,#c084fc_0%,transparent_60%)] blur-[60px] rounded-full" />
          <div className="absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] bg-[radial-gradient(circle_at_center,#9333ea_0%,transparent_70%)] blur-[100px] opacity-70 rounded-full" />
        </div>

        <div className="relative px-6 lg:px-30">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto"
          >
            <motion.div
              variants={fadeUp}
              className="flex flex-col items-center gap-2 mb-6"
            >
              <Image src={awardWhite} alt="Award Icon" width={60} height={60} />
              <p className="text-xs font-semibold tracking-widest text-white max-w-sm uppercase mt-2">
                Trusted SAP Consulting and Implementation Services in India
              </p>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-xl md:text-3xl font-bold text-white mb-6"
            >
              WEAVING TECHNOLOGY INTO YOUR BUSINESS
            </motion.h1>

            <p className="text-lg md:text-2xl font-medium leading-relaxed mb-20 max-w-3xl flex flex-wrap justify-center text-center">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.2, color: "#6b7280" }}
                  whileInView={{ opacity: 1, color: "#ffffff" }}
                  transition={{ duration: 0.4, delay: i * 0.02 }}
                  viewport={{ once: true }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </p>

            <motion.h2
              variants={fadeUp}
              className="text-4xl md:text-5xl font-bold text-white mb-4 pt-10 md:pt-20"
            >
              <span className="bg-gradient-to-r from-[#7400FB] to-[#C016F4] bg-clip-text text-transparent">
                Powerful Features
              </span>
              <br />
              to Build & Scale Effortlessly
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-sm text-white mb-12 max-w-sm"
            >
              We cover every aspect of SAP and ERP, giving your business one
              trusted partner for everything.
            </motion.p>
          </motion.div>
        </div>

        <div className="w-full overflow-hidden pb-6">
          <div
            ref={trackRef}
            className="flex gap-6"
            style={{ width: "max-content", willChange: "transform" }}
            onMouseEnter={() => (isPausedRef.current = true)}
            onMouseLeave={() => (isPausedRef.current = false)}
          >
            {loopedFeatures?.map((feature, i) => (
              <div
                key={i}
                className="group will-change-transform transform-gpu"
              >
                <div className="relative p-px rounded-2xl bg-gradient-to-b from-[#9333ea] via-[#7e22ce] to-transparent">
                  <div className="relative flex flex-col w-[300px] h-[500px] md:w-[370px] md:h-[400px] p-6 rounded-2xl overflow-hidden bg-[#0b0018] transition-all duration-300">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(124,58,237,0.12),transparent_65%)] pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7400FB]/10 to-transparent opacity-20 pointer-events-none" />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex flex-col gap-4">
                        <Image src={feature.img} alt="icon" width={50} height={50} />
                        <h3 className="text-base font-semibold text-white">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-white/60 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                      <div className="mt-auto pt-4">
                        <Link
                          href={feature.href}
                          className="group relative inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg overflow-hidden text-black text-sm font-medium transition-all active:scale-95"
                        >
                          <span className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#f3e8ff] to-[#d0a1e1]"></span>
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent translate-x-[-101%] group-hover:translate-x-[101%] transition-transform duration-1000 ease-in-out"></span>
                          <span className="relative z-10 flex items-center justify-between w-full">
                            Explore more
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TrustedSAP;