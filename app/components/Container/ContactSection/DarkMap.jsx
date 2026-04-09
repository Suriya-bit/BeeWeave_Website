"use client";

import Image from "next/image";
import ContactBg from "@/app/assets/Images/contact-bg.svg";

export default function DarkMap() {
    return (
        <div className="w-full h-[200px] md:h-[600px] overflow-hidden relative bg-[#0d0b1a] ">
            <Image
                src={ContactBg}
                alt="Contact Background"
                fill
                className="object-contain"
                priority
            />
        </div>
    );
}