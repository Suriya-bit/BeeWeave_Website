"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import MainLayout from "./MainLayout";
import { usePathname } from "next/navigation";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CtaHero = ({
  title = "We Are Ready to Help.\nAre You Ready to Grow?",
  buttonText = "Let’s Build Something Together",
  buttonLink = "/contact",
  image,
  subTitle,
}) => {
  const pathname = usePathname();

  return (
    <MainLayout
      className={`relative w-full overflow-hidden flex items-center justify-center py-16 px-4 ${pathname !== "/" ? "bg-[#0d0a1a]" : ""
        }`}
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[600px] md:w-[1000px] h-[300px]">
          <div
            className="absolute inset-0 rounded-full 
            bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.9)_0%,rgba(147,51,234,0.5)_30%,rgba(147,51,234,0.2)_55%,transparent_75%)] 
            blur-[100px]"
          />
          <div
            className="absolute inset-0 opacity-[0.15] rounded-full"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage:
                "radial-gradient(circle at center, white 40%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, white 40%, transparent 80%)",
            }}
          />
        </div>
      </div>

      {/* CONTENT */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {/* IMAGE */}
        {image && (
          <motion.div
            variants={fadeUp}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full flex justify-center"
            >
              <Image
                src={image}
                alt="cta icon"
                width={400}
                height={400}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}

        {/* TITLE */}
        <motion.h2
          variants={fadeUp}
          className="text-2xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5 whitespace-pre-line max-w-2xl"
        >
          {title}
        </motion.h2>

        {/* SUBTITLE */}
        {subTitle && (
          <motion.p
            variants={fadeUp}
            className="text-base text-white/80 mb-8 max-w-xl"
          >
            {subTitle}
          </motion.p>
        )}

        {/* BUTTON */}
        <motion.div variants={fadeUp}>
          <Link
            href={buttonLink}
            className="group relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-xl overflow-hidden text-black text-sm font-semibold transition-all active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-b from-[#ffffff] via-[#f3e8ff] to-[#d0a1e1]" />
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent translate-x-[-101%] group-hover:translate-x-[101%] transition-transform duration-1000 ease-in-out" />
            <span className="relative z-10">{buttonText}</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* ❌ REMOVED bottom gradient line */}
    </MainLayout>
  );
};

export default CtaHero;