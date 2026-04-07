"use client";

import Image from "next/image";
import client1 from "@/app/assets/Images/client1.svg";
import client2 from "@/app/assets/Images/client2.svg";
import client3 from "@/app/assets/Images/client3.svg";

const logos = [client1, client2, client3];
const ClientMarquee = () => {
  return (
    <section className="w-full py-16 overflow-hidden bg-[#0d0a1a]">

      <h2 className="text-center text-white text-lg md:text-3xl font-semibold mb-10">
        A Community of Brands We Are Proud to Serve
      </h2>
      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-linear-to-r from-[#0d0a1a] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-linear-to-l from-[#0d0a1a] to-transparent z-10" />
        <div className="flex w-max animate-marquee gap-16">
          {[...Array(6)]
            .flatMap(() => logos)
            .map((logo, i) => (

              <div
                key={i}
                className="group flex items-center justify-center min-w-[250px] opacity-70 hover:opacity-100 transition duration-300"
              >
                <Image
                  src={logo}
                  alt="client"
                  width={120}
                  height={60}
                  className="
  object-contain 
  transition duration-300
  group-hover:invert group-hover:brightness-0
  group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]
"
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ClientMarquee;