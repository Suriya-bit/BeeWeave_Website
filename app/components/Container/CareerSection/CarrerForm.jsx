"use client";
import { useState } from "react";
import MainLayout from "@/app/common/MainLayout";
import emailjs from "@emailjs/browser";
import { FiUploadCloud } from "react-icons/fi";

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
        if (!formData.location.trim()) newErrors.location = "Required";
        if (!formData.interest.trim()) newErrors.interest = "Required";
        if (!formData.experience.trim()) newErrors.experience = "Required";
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
                location: "",
                interest: "",
                experience: "",
                about: "",
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
                            Why Join Us <br />
                        </h2>
                        <p className="text-sm leading-relaxed">
                            We believe great work comes from passionate people in a supportive environment. Our culture encourages collaboration, fresh ideas, and continuous growth, while valuing the people behind the results. Whether you’re starting out or experienced, you’ll have the space to learn, contribute, and make a meaningful impact, with your efforts recognized every step of the way.
                        </p>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="border-l-2 border-purple-500 pl-4">
                            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Email Id</p>
                            <p className="text-white text-sm font-medium">suriya.govind@beesap.ai</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 relative">
                    <div className="px-6 py-8">
                        <h3 className="text-white text-xl font-semibold mb-6">
                            Submit Your Profile
                        </h3>
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4">
                                <div className="flex-1 flex flex-col gap-1">
                                    <label className="text-gray-400 text-xs">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-gray-600 text-white text-sm py-1.5 focus:outline-none focus:border-purple-400"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col gap-1">
                                    <label className="text-gray-400 text-xs">Email Id</label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-gray-600 text-white text-sm py-1.5 focus:outline-none focus:border-purple-400"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1 flex flex-col gap-1">
                                    <label className="text-gray-400 text-xs">Mobile Number</label>
                                    <input
                                        id="mobile"
                                        type="tel"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-gray-600 text-white text-sm py-1.5 focus:outline-none focus:border-purple-400"
                                    />
                                </div>
                                <div className="flex-1 flex flex-col gap-1">
                                    <label className="text-gray-400 text-xs">Location</label>
                                    <input
                                        id="location"
                                        type="text"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-gray-600 text-white text-sm py-1.5 focus:outline-none focus:border-purple-400"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-1 flex flex-col gap-1">
                                    <label className="text-gray-400 text-xs">Area of Interest</label>
                                    <input
                                        id="interest"
                                        type="text"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-gray-600 text-white text-sm py-1.5 focus:outline-none focus:border-purple-400"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col gap-1">
                                    <label className="text-gray-400 text-xs">Years of Experience</label>
                                    <input
                                        id="experience"
                                        type="text"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-gray-600 text-white text-sm py-1.5 focus:outline-none focus:border-purple-400"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-gray-400 text-xs">
                                    Tell us about yourself
                                </label>
                                <textarea
                                    id="about"
                                    value={formData.about}
                                    onChange={handleChange}
                                    rows={2}
                                    className="bg-transparent border-b border-gray-600 text-white text-sm py-1.5 focus:outline-none focus:border-purple-400 resize-none"
                                />
                            </div>

                            <div className="border-2 border-dashed border-gray-600 rounded-md p-10 text-center text-gray-400">
                                <div className="flex flex-col items-center gap-3">
                                    <FiUploadCloud className="text-3xl text-white/70" />
                                    <p className="text-sm">
                                        <span className="text-white font-medium">Choose a file</span> or drag
                                        and drop here
                                    </p>
                                </div>
                            </div>
                            <button
                                disabled={loading}
                                onClick={handleSubmit}
                                className="mt-3 w-full bg-white text-gray-900 font-semibold text-sm py-3 rounded-md hover:bg-purple-100 transition"
                            >
                                {loading ? "Sending..." : "Submit"}
                            </button>

                            {submitted && (
                                <p className="text-green-400 text-sm text-center">
                                    ✓ Profile submitted successfully!
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}