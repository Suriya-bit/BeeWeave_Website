"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import MainLayout from "@/app/common/MainLayout";
import { steps } from "@/app/utils/HomemockData";
import Link from "next/link";

const ProcessSection = () => {
  const [active, setActive] = useState(-1);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    stepRefs.current.forEach((ref, i) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive((prev) => (i > prev ? i : prev));
          } else {
            const rect = entry.boundingClientRect;
            if (rect.top > 0) {
              setActive((prev) => (prev >= i ? i - 1 : prev));
            }
          }
        },
        { threshold: 0.4 },
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <MainLayout className="relative px-6 lg:px-30 py-10 md:py-20 overflow-hidden">
      <div className="absolute right-[-250px] top-0 w-[380px] h-[500px] bg-[#7400FA] opacity-20 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute left-[-250px] bottom-0 w-[380px] h-[500px] bg-[#7400FA] opacity-20 blur-[90px] rounded-full pointer-events-none" />
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <div className="flex flex-col gap-5">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-white md:leading-13 mb-8"
          >
            Our{" "}
            <span className="bg-linear-to-r from-[#7400FB] to-[#C016F4] bg-clip-text text-transparent">
              6-Step
            </span>{" "}
            SAP &<br />
            Odoo Implementation
            <br />
            Process
          </motion.h2>
          <div>
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
          </div>
        </div>
        <div className="flex flex-col">
          {steps?.map((step, i) => (
            <motion.div
              key={i}
              ref={(el) => (stepRefs.current[i] = el)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.08 }}
              onClick={() => setActive(i)}
              className="flex gap-4 cursor-pointer group"
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-all duration-500 ${active >= i
                      ? "bg-[#40B0FF] text-white shadow-[0_0_12px_2px_rgba(64,176,255,0.45)]"
                      : "bg-white/10 text-white/50 group-hover:bg-[#7400FA]/40 group-hover:text-white"
                    }`}
                >
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className="relative w-px flex-1 my-1 min-h-[33px] bg-white/8 overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 w-full bg-linear-to-b bg-[#40B0FF]"
                      animate={{ height: active > i ? "100%" : "0%" }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    />
                  </div>
                )}
              </div>
              <div className="pb-10">
                <h3
                  className={`text-lg font-semibold transition-colors duration-300 ${active >= i
                      ? "text-white"
                      : "text-white/50 group-hover:text-white/80"
                    }`}
                >
                  {step.title}
                </h3>
                <p
                  className={`text-xs leading-relaxed mt-1 max-w-xs transition-colors duration-300 ${active >= i ? "text-white/60" : "text-white/30"
                    }`}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProcessSection;
