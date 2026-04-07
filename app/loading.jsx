"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/app/assets/Images/footer-logo.svg";

export default function AnimatedLogo() {
    return (
        <div className="flex items-center justify-center h-screen bg-black">
            <div className="relative flex items-center justify-center">
                <motion.div
                    className="absolute w-40 h-40 rounded-full border border-gray-400/30"
                    animate={{ rotate: 360 }}
                    transition={{
                        repeat: Infinity,
                        duration: 6,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute w-40 h-40 rounded-full bg-gray-400/10 blur-2xl"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                        repeat: Infinity,
                        duration: 2,
                        ease: "easeInOut",
                    }}
                />
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-black z-10">
                    <Image src={logo} alt="logo" width={60} height={60} />
                </div>

            </div>
        </div>
    );
}