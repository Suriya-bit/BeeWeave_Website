"use client";
import { useRef } from "react";
import MainLayout from "@/app/common/MainLayout";
import { industries } from "@/app/utils/HomemockData";
import linear from "@/app/assets/Images/award-linear.svg";
import Image from "next/image";
import { motion, useAnimationFrame } from "framer-motion";

const Item = ({ label }) => (
  <div className="flex flex-col items-center gap-3 min-w-[121px]">
    <div className="w-16 h-16 rounded-full flex items-center justify-center border border-purple-700/50 bg-purple-900/20">
      <Image src={linear} alt="icon" width={28} height={28} />
    </div>
    <span className="text-md text-white font-medium text-center">
      {label}
    </span>
  </div>
);

export default function IndustriesFaq() {
  const x = useRef(0);
  const containerRef = useRef(null);
  useAnimationFrame((t, delta) => {
    const speed = 0.05;
    x.current -= speed * delta;
    if (containerRef.current) {
      const width = containerRef.current.scrollWidth / 2;
      if (Math.abs(x.current) >= width) {
        x.current = 0;
      }
      containerRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  return (
    <div className="text-white font-sans">
      <MainLayout className="py-20 px-4">
        <h2 className="text-center text-xl md:text-5xl font-semibold mb-14">
          Industries We Serve
        </h2>
        <div className="overflow-hidden w-full">
          <div ref={containerRef} className="flex gap-6 w-max">
            {[...industries, ...industries, ...industries].map((item, index) => (
              <Item key={index} label={item.label} />
            ))}
          </div>
        </div>
      </MainLayout>
    </div>
  );
}