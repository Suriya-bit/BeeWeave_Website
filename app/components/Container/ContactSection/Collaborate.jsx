"use client";
import { useState } from "react";
import MainLayout from "@/app/common/MainLayout";
import emailjs from "@emailjs/browser";

export default function Collaborate() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        subject: "",
        interest: "",
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        setErrors((prev) => ({ ...prev, [id]: "" }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Required";
        if (!formData.email.trim()) newErrors.email = "Required";
        if (!formData.mobile.trim()) newErrors.mobile = "Required";
        if (!formData.subject.trim()) newErrors.subject = "Required";
        if (!formData.interest.trim()) newErrors.interest = "Required";
        return newErrors;
    };

    const handleSubmit = async () => {
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setLoading(true);
        try {
            await emailjs.send(
                "service_ywjxyja",
                "template_3gwekfq",
                formData,
                "Dj2nu5zlYST7TbMu7"
            );
            setSubmitted(true);
            setFormData({
                name: "",
                email: "",
                mobile: "",
                subject: "",
                interest: "",
            });

            setTimeout(() => setSubmitted(false), 4000);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <MainLayout className="relative w-full bg-[#0d0b1a] overflow-hidden">
            <div className="absolute right-[-250px] top-30 w-[250px] md:w-[350px] h-[360px] bg-[#7400FA] opacity-20 blur-[60px] rounded-full pointer-events-none" />
            <div className="absolute left-[-250px] top-30 w-[250px] md:w-[350px] h-[360px] bg-[#7400FA] opacity-20 blur-[60px] rounded-full pointer-events-none" />
            <div className="relative z-10 px-6 md:px-30 py-16 flex flex-col md:flex-row gap-16 items-start">
                <div className="flex-1 flex flex-col justify-center gap-8">
                    <div>
                        <h2 className="text-white text-4xl  font-bold leading-tight tracking-tight mb-4">
                            We're here to connect<br />
                            collaborate and <span className="text-white">Create.</span>
                        </h2>
                        <p className="text-sm leading-relaxed">
                            Questions, ideas or partnership opportunities? Reach out—our team's ready to help.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="border-l-4 border-purple-500 pl-4">
                            <p className="text-gra  y-500 text-xs uppercase tracking-widest mb-1">Email Id</p>
                            <p className="text-white text-sm font-medium">suriya.govind@beesap.ai</p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4">
                            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Phone Number</p>
                            <p className="text-white text-sm font-medium">99400 626 85 / 979 108 108 3</p>
                        </div>
                        <div className="border-l-4 border-purple-500 pl-4">
                            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Address</p>
                            <p className="text-white text-sm font-medium leading-relaxed">
                                No. 1, A Block, Flat no.S-1, VOC Street, Ram Nagar,<br />
                                Ambattur Chennai - 600 053
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 relative rounded-2xl overflow-hidden 
bg-gradient-to-br from-[#14002a] via-[#15012c] to-[#0c0316] 
border border-white/10 shadow-[0_0_40px_rgba(130,57,215,0.2)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(130,57,215,0.15),transparent_70%)] pointer-events-none" />
                    <div className="relative z-10 px-8 py-10">
                        <h3 className="text-white text-xl font-semibold mb-8">
                            Contact us
                        </h3>
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-6">
                                <div className="flex-1 flex flex-col gap-2">
                                    <label className="text-white/60 text-xs">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-white/20 text-white text-sm py-2 
            focus:outline-none focus:border-[#9b4dff] transition-all duration-300"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col gap-2">
                                    <label className="text-white/60 text-xs">Email Id</label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-white/20 text-white text-sm py-2 
            focus:outline-none focus:border-[#9b4dff] transition-all duration-300"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-1 flex flex-col gap-2">
                                    <label className="text-white/60 text-xs">Mobile Number</label>
                                    <input
                                        id="mobile"
                                        type="tel"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-white/20 text-white text-sm py-2 
            focus:outline-none focus:border-[#9b4dff] transition-all duration-300"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col gap-2">
                                    <label className="text-white/60 text-xs">Subject</label>
                                    <input
                                        id="subject"
                                        type="text"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-white/20 text-white text-sm py-2 
            focus:outline-none focus:border-[#9b4dff] transition-all duration-300"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-white/60 text-xs">
                                    Tell us about your interest in
                                </label>
                                <input
                                    id="interest"
                                    type="text"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="bg-transparent border-b border-white/20 text-white text-sm py-2 
          focus:outline-none focus:border-[#9b4dff] transition-all duration-300"
                                />
                            </div>
                            <button
                                disabled={loading}
                                onClick={handleSubmit}
                                className="group relative mt-6 w-full py-7 rounded-xl 
  text-white text-sm font-semibold transition-all active:scale-95 overflow-hidden"
                            >
                                <span className="absolute inset-0 rounded-xl p-[1px] 
  bg-gradient-to-r from-[#ffffff80] via-[#c084fc] to-[#ffffff80]">
                                    <span className="flex items-center justify-center w-full h-full rounded-xl 
    bg-gradient-to-b from-[#14002a] via-[#15012c] to-[#0c0316]">
                                        <span className="relative z-10">
                                            {loading ? "Sending..." : "Submit"}
                                        </span>

                                    </span>
                                </span>
                            </button>
                            {submitted && (
                                <p className="text-green-400 text-sm text-center">
                                    ✓ Message sent! We'll get back to you soon.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}