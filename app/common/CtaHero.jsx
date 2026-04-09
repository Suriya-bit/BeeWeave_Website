"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import MainLayout from "./MainLayout";
import { usePathname } from "next/navigation";

function GridBackground({ show = true }) {

  if (!show) return null;

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const CtaHero = ({
  title = "We Are Ready to Help.\nAre You Ready to Grow?",
  buttonText = "Let’s Build Something Together",
  buttonLink = "/contact",
  image,
  showGrid = true,
  subTitle
}) => {
  const pathname = usePathname()
  return (
    <MainLayout className={`relative w-full  overflow-hidden flex items-center justify-center md:py-10 px-4 ${pathname !== "/" ? "bg-[#0d0a1a]" : ""}`}>
      <GridBackground show={showGrid} />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        {image && (
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            animate={{ y: [0, -12, 0] }}
            className="mb-6"
          >
            <Image src={image} alt="cta icon" width={400} height={400} />
          </motion.div>
        )}
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="text-xl md:text-5xl font-bold text-white leading-tight tracking-tight mb-5 whitespace-pre-line max-w-2xl"
        >
          {title}
        </motion.h2>
        {subTitle && (
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-md  text-white mb-8 max-w-xl"
          >
            {subTitle}
          </motion.p>
        )}
        <motion.div variants={fadeUp} transition={{ duration: 0.6 }}>
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
    </MainLayout>
  );
};

export default CtaHero;