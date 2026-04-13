"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import MainLayout from "@/app/common/MainLayout";
import emailjs from "@emailjs/browser";
import { FiUploadCloud } from "react-icons/fi";
import Notification from "@/app/common/Notification";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7 },
    },
};

const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7 },
    },
};

export default function CareerForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        location: "",
        interest: "",
        experience: "",
        about: "",
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);

    const formRef = useRef();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        setErrors((prev) => ({ ...prev, [id]: "" }));
    };

    const handleFile = (e) => {
        const selectedFile = e.target.files?.[0];
        if (!selectedFile) return;
        if (selectedFile.size > 50000) {
            alert("File too large. Max 50KB");
            return;
        }
        setFile(selectedFile);
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Required";
        if (!formData.email.trim()) newErrors.email = "Required";
        if (!formData.mobile.trim()) newErrors.mobile = "Required";
        if (!formData.location.trim()) newErrors.location = "Required";
        if (!formData.interest.trim()) newErrors.interest = "Required";
        if (!formData.experience.trim()) newErrors.experience = "Required";
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);

        try {
            await emailjs.sendForm(
                "service_ywjxyja",
                "template_d0l44ig",
                formRef.current,
                "Dj2nu5zlYST7TbMu7"
            );

            setSubmitted(true);
            setFormData({
                name: "",
                email: "",
                mobile: "",
                location: "",
                interest: "",
                experience: "",
                about: "",
            });
            setFile(null);

            setTimeout(() => setSubmitted(false), 4000);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <MainLayout className="relative w-full bg-[#0d0b1a] overflow-hidden">
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute right-[-250px] top-30 w-[250px] md:w-[350px] h-[360px] bg-[#7400FA] opacity-20 blur-[60px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute left-[-250px] top-30 w-[250px] md:w-[350px] h-[360px] bg-[#7400FA] opacity-20 blur-[60px] rounded-full pointer-events-none"
            />

            <div className="relative z-10 px-6 md:px-30 py-16 flex flex-col md:flex-row gap-16 items-start">
                <motion.div
                    variants={fadeLeft}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex-1 flex flex-col justify-center gap-8"
                >
                    <div>
                        <h2 className="text-white text-4xl font-bold leading-tight tracking-tight mb-4">
                            <br />
                        </h2>
                        <p className="text-sm leading-relaxed">
                            We believe great work comes from passionate people in a supportive environment. Our culture encourages collaboration, fresh ideas, and continuous growth, while valuing the people behind the results. Whether you’re starting out or experienced, you’ll have the space to learn, contribute, and make a meaningful impact, with your efforts recognized every step of the way.
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="border-l-2 border-purple-500 pl-4">
                            <p className="text-white text-xs uppercase tracking-widest mb-1">
                                Email Id
                            </p>
                            <p className="text-white text-sm font-medium">
                                contact@beeweave.ai
                            </p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex-1 relative rounded-2xl overflow-hidden 
bg-gradient-to-br from-[#14002a] via-[#15012c] to-[#0c0316] 
border border-white/10 max-w-md md:max-w-5xl mx-auto w-full"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(130,57,215,0.15),transparent_70%)] pointer-events-none" />

                    <div className="relative z-10 px-8 py-10">
                        <h3 className="text-white text-xl font-semibold mb-8">
                            Submit Your Profile
                        </h3>

                        <form ref={formRef} onSubmit={handleSubmit}>
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="flex flex-col gap-6"
                            >
                                <motion.div
                                    variants={fadeUp}
                                    custom={1}
                                    className="flex gap-6"
                                >
                                    <div className="flex-1 flex flex-col gap-2">
                                        <label className="text-white/60 text-xs">Name</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="bg-transparent border-b border-white/20 text-white text-sm py-2 focus:outline-none focus:border-[#9b4dff] transition-all duration-300"
                                        />
                                    </div>

                                    <div className="flex-1 flex flex-col gap-2">
                                        <label className="text-white/60 text-xs">Email Id</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="bg-transparent border-b border-white/20 text-white text-sm py-2 focus:outline-none focus:border-[#9b4dff] transition-all duration-300"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={fadeUp}
                                    custom={2}
                                    className="flex gap-6"
                                >
                                    <div className="flex-1 flex flex-col gap-2">
                                        <label className="text-white/60 text-xs">
                                            Mobile Number
                                        </label>
                                        <input
                                            id="mobile"
                                            name="mobile"
                                            type="tel"
                                            value={formData.mobile}
                                            onChange={handleChange}
                                            className="bg-transparent border-b border-white/20 text-white text-sm py-2 focus:outline-none focus:border-[#9b4dff] transition-all duration-300"
                                        />
                                    </div>

                                    <div className="flex-1 flex flex-col gap-2">
                                        <label className="text-white/60 text-xs">Location</label>
                                        <input
                                            id="location"
                                            name="location"
                                            type="text"
                                            value={formData.location}
                                            onChange={handleChange}
                                            className="bg-transparent border-b border-white/20 text-white text-sm py-2 focus:outline-none focus:border-[#9b4dff] transition-all duration-300"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    variants={fadeUp}
                                    custom={3}
                                    className="flex gap-6"
                                >
                                    <div className="flex-1 flex flex-col gap-2">
                                        <label className="text-white/60 text-xs">
                                            Area of Interest
                                        </label>
                                        <input
                                            id="interest"
                                            name="interest"
                                            type="text"
                                            value={formData.interest}
                                            onChange={handleChange}
                                            className="bg-transparent border-b border-white/20 text-white text-sm py-2 focus:outline-none focus:border-[#9b4dff] transition-all duration-300"
                                        />
                                    </div>

                                    <div className="flex-1 flex flex-col gap-2">
                                        <label className="text-white/60 text-xs">
                                            Years of Experience
                                        </label>
                                        <input
                                            id="experience"
                                            name="experience"
                                            type="text"
                                            value={formData.experience}
                                            onChange={handleChange}
                                            className="bg-transparent border-b border-white/20 text-white text-sm py-2 focus:outline-none focus:border-[#9b4dff] transition-all duration-300"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div variants={fadeUp} custom={4}>
                                    <label className="text-white/60 text-xs">
                                        Tell us about yourself
                                    </label>
                                    <textarea
                                        id="about"
                                        name="about"
                                        value={formData.about}
                                        onChange={handleChange}
                                        rows={2}
                                        className="w-full bg-transparent border-b border-white/20 text-white text-sm py-2 focus:outline-none focus:border-[#9b4dff] transition-all duration-300 resize-none"
                                    />
                                </motion.div>

                                <motion.div variants={fadeUp} custom={5}>
                                    <div className="border border-dashed border-white/20 rounded-xl py-12 text-center hover:border-[#9b4dff]/60 transition-all duration-300 relative">
                                        <input
                                            type="file"
                                            name="resume"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleFile}
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                        />
                                        <div className="flex flex-col items-center gap-3 text-white/60">
                                            <FiUploadCloud className="text-3xl text-white/70" />
                                            <p className="text-sm">
                                                <span className="text-white font-medium">
                                                    Choose a file
                                                </span>{" "}
                                                or drag and drop here
                                            </p>
                                            {file && (
                                                <p className="text-xs text-green-400 mt-1">
                                                    {file.name}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    disabled={loading}
                                    type="submit"
                                    className="group relative mt-6 w-full py-3 rounded-xl overflow-hidden text-black text-sm font-semibold transition-all"
                                >
                                    <span className="absolute inset-0 bg-linear-to-b from-white via-[#f3e8ff] to-[#d0a1e1]" />
                                    <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/60 to-transparent translate-x-[-101%] group-hover:translate-x-[101%] transition-transform duration-1000 ease-in-out" />
                                    <span className="relative z-10">
                                        {loading ? "Sending..." : "Submit"}
                                    </span>
                                </motion.button>
                            </motion.div>
                        </form>
                    </div>
                </motion.div>
            </div>

            {submitted && (
                <Notification
                    title="Thank You!"
                    message="Your form has been submitted successfully. Our team will contact you shortly."
                    onClose={() => setSubmitted(false)}
                />
            )}
        </MainLayout>
    );
}