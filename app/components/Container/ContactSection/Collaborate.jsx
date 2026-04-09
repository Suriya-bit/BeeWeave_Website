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

        try {
            const result = await emailjs.send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                {
                    name: formData.name,
                    email: formData.email,
                    mobile: formData.mobile,
                    subject: formData.subject,
                    interest: formData.interest,
                },
                "YOUR_PUBLIC_KEY"
            );
            console.log("SUCCESS!", result.text);
            setSubmitted(true);
            setFormData({
                name: "",
                email: "",
                mobile: "",
                subject: "",
                interest: "",
            });
            setErrors({});
            setTimeout(() => setSubmitted(false), 4000);
        } catch (error) {
            console.error("FAILED...", error);
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
                        <div className="border-l-2 border-purple-500 pl-4">
                            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Email Id</p>
                            <p className="text-white text-sm font-medium">suriya.govind@beesap.ai</p>
                        </div>
                        <div className="border-l-2 border-purple-500 pl-4">
                            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Phone Number</p>
                            <p className="text-white text-sm font-medium">99400 626 85 / 979 108 108 3</p>
                        </div>
                        <div className="border-l-2 border-purple-500 pl-4">
                            <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Address</p>
                            <p className="text-white text-sm font-medium leading-relaxed">
                                No. 1, A Block, Flat no.S-1, VOC Street, Ram Nagar,<br />
                                Ambattur Chennai - 600 053
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 relative">
                    <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-gray-500" />
                    <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-gray-500" />
                    <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-gray-500" />
                    <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-gray-500" />
                    <div className="px-6 py-8">
                        <h3 className="text-white text-xl font-semibold mb-6">Contact us</h3>
                        <div className="flex flex-col gap-5">
                            <div className="flex gap-4">
                                <div className="flex-1 flex flex-col gap-1">
                                    <label className="text-gray-400 text-xs">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-gray-600 text-white text-sm py-1.5 focus:outline-none focus:border-purple-400 transition-colors placeholder-gray-600"
                                        placeholder=""
                                    />
                                    {errors.name && <span className="text-red-400 text-xs">{errors.name}</span>}
                                </div>
                                <div className="flex-1 flex flex-col gap-1">
                                    <label className="text-gray-400 text-xs">Email Id</label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-gray-600 text-white text-sm py-1.5 focus:outline-none focus:border-purple-400 transition-colors placeholder-gray-600"
                                        placeholder=""
                                    />
                                    {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
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
                                        className="bg-transparent border-b border-gray-600 text-white text-sm py-1.5 focus:outline-none focus:border-purple-400 transition-colors placeholder-gray-600"
                                        placeholder=""
                                    />
                                    {errors.mobile && <span className="text-red-400 text-xs">{errors.mobile}</span>}
                                </div>
                                <div className="flex-1 flex flex-col gap-1">
                                    <label className="text-gray-400 text-xs">Subject</label>
                                    <input
                                        id="subject"
                                        type="text"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="bg-transparent border-b border-gray-600 text-white text-sm py-1.5 focus:outline-none focus:border-purple-400 transition-colors placeholder-gray-600"
                                        placeholder=""
                                    />
                                    {errors.subject && <span className="text-red-400 text-xs">{errors.subject}</span>}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-gray-400 text-xs">Tell us about your interest in</label>
                                <input
                                    id="interest"
                                    type="text"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    className="bg-transparent border-b border-gray-600 text-white text-sm py-1.5 focus:outline-none focus:border-purple-400 transition-colors placeholder-gray-600"
                                    placeholder=""
                                />
                                {errors.interest && <span className="text-red-400 text-xs">{errors.interest}</span>}
                            </div>
                            {submitted && (
                                <p className="text-green-400 text-sm text-center">✓ Message sent! We'll get back to you soon.</p>
                            )}
                            <button
                                onClick={handleSubmit}
                                className="mt-3 w-full bg-white text-gray-900 font-semibold text-sm py-3 rounded-sm hover:bg-purple-100 transition-colors duration-200 tracking-wide"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}