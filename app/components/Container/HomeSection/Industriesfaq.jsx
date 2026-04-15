"use client";
import { useRef } from "react";
import MainLayout from "@/app/common/MainLayout";
import { industries } from "@/app/utils/HomemockData";
import { useAnimationFrame } from "framer-motion";

const Item = ({ label, icon }) => (
  <div className="flex flex-col items-center gap-3 min-w-[140px] group">
    <div className="w-16 h-16 rounded-full flex items-center justify-center border border-purple-700/50 bg-purple-900/20 transition-all duration-300  group-hover:bg-purple-800/40">
      {icon}
    </div>
    <span className="text-sm  text-white font-medium text-center">
      {label}
    </span>
  </div>
);


export default function IndustriesFaq() {
  const x = useRef(0);
  const containerRef = useRef(null);
  useAnimationFrame((t, delta) => {
    const speed = 0.06;
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
      <MainLayout className="py-10 md:py-20 px-4">
        <h2 className="text-center text-2xl md:text-5xl font-semibold mb-14">
          Industries We Serve
        </h2>
        <div className="overflow-hidden w-full">
          <div
            ref={containerRef}
            className="flex gap-10 w-max will-change-transform"
          >
            {[...industries, ...industries].map((item, index) => (
              <Item
                key={index}
                label={item.label}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </MainLayout>
    </div>
  );
}