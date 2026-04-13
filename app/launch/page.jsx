"use client";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const item = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
    }),
};

const socials = [
    { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61573340975393" },
    { icon: FaInstagram, href: " https://www.instagram.com/beew.eavesap/" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/beeweave-sap-487152403/" },
];


const FlipCard = ({ value, label, delay }) => {

    return (
        <motion.div
            variants={item}
            initial="hidden"
            animate="visible"
            custom={delay}
            className="flex flex-col items-center gap-3"
        >
            <div
                className="relative flex items-center justify-center rounded-2xl overflow-hidden"
                style={{
                    width: "clamp(72px, 15vw, 115px)",
                    height: "clamp(84px, 17vw, 128px)",
                    background: "linear-gradient(160deg, #1e1248 0%, #0d0826 100%)",
                    boxShadow:
                        "0 0 0 1px rgba(140,80,255,0.2), 0 8px 40px rgba(100,40,255,0.3), 0 0 80px rgba(120,60,255,0.1)",
                }}
            >
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "radial-gradient(ellipse at 50% 0%, rgba(160,100,255,0.18) 0%, transparent 65%)",
                    }}
                />
                <div
                    className="absolute top-0 left-0 right-0 rounded-t-2xl pointer-events-none"
                    style={{
                        height: "44%",
                        background:
                            "linear-gradient(180deg, rgba(255,255,255,0.09) 0%, transparent 100%)",
                    }}
                />
                <div
                    className="absolute left-2 right-2 pointer-events-none"
                    style={{
                        top: "50%",
                        height: "1px",
                        background:
                            "linear-gradient(90deg, transparent, rgba(0,0,0,0.7), transparent)",
                    }}
                />
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={value}
                        initial={{ rotateX: -90, opacity: 0 }}
                        animate={{ rotateX: 0, opacity: 1 }}
                        exit={{ rotateX: 90, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeOut" }}
                        className="relative z-10 font-bold text-white tabular-nums select-none"
                        style={{
                            fontSize: "clamp(30px, 6.5vw, 50px)",
                            textShadow:
                                "0 0 20px rgba(180,100,255,0.7), 0 2px 8px rgba(0,0,0,0.5)",
                            letterSpacing: "0.02em",
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {String(value).padStart(2, "0")}
                    </motion.span>
                </AnimatePresence>
                <div
                    className="absolute bottom-0 left-0 right-0 pointer-events-none"
                    style={{
                        height: "30%",
                        background:
                            "linear-gradient(0deg, rgba(0,0,0,0.4) 0%, transparent 100%)",
                    }}
                />
            </div>

            <span
                className="font-semibold tracking-[0.2em] uppercase"
                style={{ fontSize: "10px", color: "rgba(200,160,255,0.7)" }}
            >
                {label}
            </span>
        </motion.div>
    );
};

const Particle = ({ x, y, color, angle, distance }) => (
    <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ left: x, top: y, width: 6, height: 6, background: color }}
        initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
        animate={{
            x: Math.cos(angle) * distance,
            y: Math.sin(angle) * distance,
            opacity: 0,
            scale: 0,
        }}
        transition={{ duration: 0.9, ease: "easeOut" }}
    />
);

const ContributedSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 50,
    });
    const [prev, setPrev] = useState({ ...timeLeft });
    const [done, setDone] = useState(false);
    const [particles, setParticles] = useState([]);
    const [redirectCount, setRedirectCount] = useState(3);
    const sectionRef = useRef(null);

    useEffect(() => {
        const target = new Date(process.env.NEXT_PUBLIC_LAUNCH_DATE);
        const interval = setInterval(() => {
            const now = new Date();
            const diff = target - now;

            if (diff <= 0) {
                localStorage.setItem("launched", "true");
                clearInterval(interval);
                setDone(true);
                confetti({
                    particleCount: 200,
                    spread: 120,
                    origin: { y: 0.6 },
                });

                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!done) return;
        const t = setInterval(() => {
            setRedirectCount((c) => {
                if (c <= 1) {
                    clearInterval(t);
                    window.location.href = "/";
                }
                return c - 1;
            });
        }, 1000);
        return () => clearInterval(t);
    }, [done]);

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden px-6 py-20"
        >
            <motion.div
                initial={{ opacity: 0, scale: 1.2, y: 40 }}
                animate={{ opacity: 0.8, scale: 1.5, y: 0 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] pointer-events-none"
            >
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-full h-full"
                >
                    <img
                        src="/images/homebanner.svg"
                        alt=""
                        aria-hidden="true"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </motion.div>
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 80%, rgba(120,40,220,0.18) 0%, transparent 65%)",
                }}
            />
            <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[50%] w-[140%] md:w-[90%] h-[161px] md:h-[200px] bg-black pointer-events-none z-10"
                style={{ borderRadius: "60% 60% 0 0 / 100% 100% 0 0" }}
            />
            {[
                { top: "12%", left: "6%", size: 20, dur: 3.2, opacity: 0.35 },
                { top: "55%", left: "3%", size: 28, dur: 4.1, opacity: 0.2 },
                { top: "80%", left: "12%", size: 14, dur: 3.7, opacity: 0.25 },
                { top: "10%", right: "6%", size: 17, dur: 3.5, opacity: 0.3 },
                { top: "45%", right: "4%", size: 24, dur: 4.4, opacity: 0.2 },
                { top: "70%", right: "10%", size: 13, dur: 3.0, opacity: 0.28 },
            ].map((r, i) => (
                <motion.div
                    key={i}
                    animate={{ y: [0, -12, 0], rotate: [0, 15, 0] }}
                    transition={{
                        duration: r.dur,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.4,
                    }}
                    className="absolute pointer-events-none rounded-full"
                    style={{
                        top: r.top,
                        left: r.left,
                        right: r.right,
                        width: r.size,
                        height: r.size,
                        border: `2px solid rgba(180,100,255,${r.opacity})`,
                        boxShadow: `0 0 8px rgba(160,80,255,${r.opacity * 0.5})`,
                    }}
                />
            ))}
            <AnimatePresence>
                {particles.map((p) => (
                    <Particle key={p.id} {...p} />
                ))}
            </AnimatePresence>
            <div className="relative z-20 flex flex-col items-center text-center w-full max-w-2xl mx-auto">
                <motion.div
                    animate={{ y: [0, -14, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-60 h-40 mb-10"
                >
                    <img
                        src="/images/animation_icon.svg"
                        alt=""
                        aria-hidden="true"
                        className="w-full h-full object-contain drop-shadow-[0_0_18px_rgba(168,85,247,0.7)]"
                    />
                </motion.div>
                <motion.div
                    variants={item}
                    initial="hidden"
                    animate="visible"
                    custom={0.1}
                    className="font-semibold text-3xl text-white uppercase md:leading-13 "
                >
                    {done ? "We're Live! 🎉" : "Transforming Business Begins In"}
                </motion.div>
                <motion.div
                    variants={item}
                    initial="hidden"
                    animate="visible"
                    custom={1.0}
                    className="flex items-center gap-[9px] my-1"
                >
                    <span className="font-medium tracking-[0.1em] text-[#e0eaff]" style={{ fontSize: "18px" }}>
                        BEEWEAVE
                    </span>
                </motion.div>
                <div className="flex items-center gap-3">
                    {socials?.map((social, i) => (
                        <Link
                            target="_blank"
                            key={i}
                            href={social.href}
                            className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition"
                        >
                            <social.icon size={16} />
                        </Link>
                    ))}
                </div>
                <motion.p
                    variants={item}
                    initial="hidden"
                    animate="visible"
                    custom={0.18}
                    className="mb-8 font-light"
                    style={{ fontSize: "13px", color: "rgba(200,160,255,0.65)" }}
                >
                    {done
                        ? `Redirecting in ${redirectCount}s...`
                        : ""}
                </motion.p>
                <AnimatePresence>
                    {!done && (
                        <motion.div
                            exit={{ opacity: 0, scale: 0.8, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-start justify-center gap-4 sm:gap-6 mb-10 w-full"
                        >
                            <FlipCard value={timeLeft.days} label="Days" delay={0.2} prevValue={prev.days} />
                            <FlipCard value={timeLeft.hours} label="Hours" delay={0.35} prevValue={prev.hours} />
                            <FlipCard value={timeLeft.minutes} label="Minutes" delay={0.5} prevValue={prev.minutes} />
                            <FlipCard value={timeLeft.seconds} label="Seconds" delay={0.65} prevValue={prev.seconds} />
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {done && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="mb-8"
                        >
                            <motion.a
                                href="https://bee-weave-website.vercel.app/"
                                animate={{ boxShadow: ["0 0 0px rgba(168,85,247,0)", "0 0 40px rgba(168,85,247,0.8)", "0 0 0px rgba(168,85,247,0)"] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full font-semibold uppercase tracking-[0.18em] text-black transition-all"
                                style={{ fontSize: "13px", padding: "14px 40px" }}
                            >
                                <span
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            "linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #7c3aed 100%)",
                                    }}
                                />
                                <span
                                    className="absolute inset-0 translate-x-[-101%] group-hover:translate-x-[101%] transition-transform duration-700 ease-out"
                                    style={{
                                        background:
                                            "linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)",
                                    }}
                                />
                                <span className="relative z-10 text-white">Visit Site →</span>
                            </motion.a>
                        </motion.div>
                    )}
                </AnimatePresence>
                {!done && (
                    <motion.div
                        variants={item}
                        initial="hidden"
                        animate="visible"
                        custom={0.75}
                        className="w-full max-w-xs mb-5"
                    >
                        <div
                            className="w-full h-[3px] rounded-full overflow-hidden"
                            style={{ background: "rgba(255,255,255,0.08)" }}
                        >
                            <motion.div
                                className="h-full rounded-full"
                                style={{
                                    background:
                                        "linear-gradient(90deg, #7c3aed, #a855f7, #e879f9)",
                                }}
                                initial={{ width: "0%" }}
                                animate={{
                                    width: `${Math.max(
                                        0,
                                        100 -
                                        ((timeLeft.days * 86400 +
                                            timeLeft.hours * 3600 +
                                            timeLeft.minutes * 60 +
                                            timeLeft.seconds) /
                                            (3 * 86400 + 5 * 3600 + 35 * 60 + 20)) *
                                        100
                                    )}%`,
                                }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                            />
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default ContributedSection;