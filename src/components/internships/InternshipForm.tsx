"use client";

import { useState } from "react";
import { Upload, CheckCircle2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * InternshipForm Component
 *
 * A functional form for students to apply for internships.
 * Features:
 * - Fields: Full Name, Email, Phone, College/University, Department, Year of Study
 * - File Upload: Resume (PDF/DOCX)
 * - Validation: Basic HTML5 validation + File type check
 * - State: Loading, Success, Error handling
 */
export default function InternshipForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [fileName, setFileName] = useState<string | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedDomain, setSelectedDomain] = useState("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsLoading(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center"
            >
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Received!</h3>
                <p className="text-slate-600 mb-8">
                    Thank you for your interest in Triveni Tech. We have received your details and will get back to you soon.
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
                >
                    Submit Another Application
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-secondary mb-6">Apply Now</h3>

            <div className="space-y-4">
                {/* Full Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-slate-900"
                        placeholder="John Doe"
                    />
                </div>

                {/* Email - Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            required
                            suppressHydrationWarning
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-slate-900"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            required
                            suppressHydrationWarning
                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-slate-900"
                            placeholder="+91 98765 43210"
                        />
                    </div>
                </div>

                {/* Education */}
                <div>
                    <label htmlFor="college" className="block text-sm font-medium text-slate-700 mb-1">College / University</label>
                    <input
                        type="text"
                        id="college"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-slate-900"
                        placeholder="University of Pune"
                    />
                </div>

                {/* Internship Domain */}
                {/* Internship Domain */}
                <div className="relative">
                    <label className="block text-sm font-medium text-slate-700 mb-1">Internship Domain</label>
                    <div className="relative">
                        <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className={`w-full px-4 py-3 rounded-xl border shadow-sm text-left flex items-center justify-between transition-all outline-none ${isDropdownOpen
                                ? "border-primary ring-2 ring-primary/20"
                                : "border-slate-200 hover:border-primary/50"
                                } bg-white`}
                        >
                            <span className={selectedDomain ? "text-slate-900" : "text-slate-400"}>
                                {selectedDomain || "Select a Domain"}
                            </span>
                            <div className={`transition-transform duration-200 text-slate-500 ${isDropdownOpen ? "rotate-180 text-primary" : ""}`}>
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                                </svg>
                            </div>
                        </button>

                        <AnimatePresence>
                            {isDropdownOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute z-50 left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden"
                                >
                                    <ul className="max-h-60 overflow-y-auto py-2">
                                        {[
                                            "Web Development",
                                            "MERN Stack",
                                            "React JS",
                                            "Java Full Stack",
                                            "Python Development",
                                            "Data Science",
                                            "AWS Cloud",
                                            "Mobile App Development (Flutter)"
                                        ].map((domain) => (
                                            <li
                                                key={domain}
                                                onClick={() => {
                                                    setSelectedDomain(domain);
                                                    setIsDropdownOpen(false);
                                                }}
                                                className="px-4 py-2.5 hover:bg-slate-50 text-slate-700 cursor-pointer transition-colors flex items-center justify-between group"
                                            >
                                                <span className={selectedDomain === domain ? "font-medium text-primary" : ""}>
                                                    {domain}
                                                </span>
                                                {selectedDomain === domain && (
                                                    <CheckCircle2 size={16} className="text-primary" />
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Resume Upload */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Resume / CV</label>
                    <div className="relative">
                        <input
                            type="file"
                            id="resume"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            required
                            className="opacity-0 absolute inset-0 w-full h-full cursor-pointer z-10"
                        />
                        <div className="w-full px-4 py-4 rounded-lg border-2 border-dashed border-slate-300 hover:border-primary transition-colors flex items-center justify-center gap-2 text-slate-500 bg-slate-50">
                            {fileName ? (
                                <span className="text-secondary font-medium flex items-center gap-2">
                                    <CheckCircle2 size={16} className="text-green-500" />
                                    {fileName}
                                </span>
                            ) : (
                                <>
                                    <Upload size={20} />
                                    <span>Upload Resume (PDF, DOCX)</span>
                                </>
                            )}
                        </div>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">Max file size: 5MB</p>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-2 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    {isLoading ? "Submitting..." : "Submit Application"}
                </button>
            </div>
        </form>
    );
}
