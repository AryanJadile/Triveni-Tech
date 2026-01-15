"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Check, ArrowRight } from "lucide-react";

const services = [
    { id: "web", name: "Web Development", basePrice: 15000 },
    { id: "app", name: "App Development", basePrice: 25000 },
    { id: "marketing", name: "Digital Marketing", basePrice: 8000 },
    { id: "uiux", name: "UI/UX Design", basePrice: 10000 },
];

const complexityLevels = [
    { id: "basic", name: "Basic", multiplier: 1, desc: "MVP / Simple" },
    { id: "standard", name: "Standard", multiplier: 2, desc: "Professional / Dynamic" },
    { id: "premium", name: "Premium", multiplier: 4, desc: "Enterprise / Custom" },
];

export default function QuoteCalculator() {
    const [selectedService, setSelectedService] = useState(services[0]);
    const [selectedComplexity, setSelectedComplexity] = useState(complexityLevels[1]);
    const [showModal, setShowModal] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleGetEstimate = () => {
        setShowModal(true);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const phone = formData.get("phone") as string;
        const name = formData.get("name") as string;
        const organization = formData.get("organization") as string;

        try {
            const response = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    organization,
                    phone,
                    service: selectedService.name,
                    complexity: selectedComplexity.name
                }),
            });

            if (!response.ok) throw new Error('Failed to submit');

            setSubmitted(true);
            setShowModal(false);
        } catch (error) {
            console.error('Submission error:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 overflow-hidden relative h-full flex flex-col">


            <div className="relative z-10 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        <Calculator size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Get an Estimate</h3>
                        <p className="text-slate-500 text-sm">Select options to see a price range</p>
                    </div>
                </div>

                {submitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-green-50 border border-green-100 rounded-xl p-8 text-center"
                    >
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Check size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">Thank You!</h4>
                        <p className="text-slate-600">
                            We have received your requirements. Our team will analyze them and send you a detailed estimate shortly.
                        </p>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="mt-6 px-6 py-2 bg-white border border-green-200 text-green-700 font-semibold rounded-lg hover:bg-green-100 transition-colors shadow-sm"
                        >
                            Get Another Estimate
                        </button>
                    </motion.div>
                ) : (
                    <>
                        {/* Services */}
                        <div className="mb-8">
                            <label className="block text-sm font-semibold text-slate-900 mb-4">I need help with...</label>
                            <div className="grid grid-cols-2 gap-3">
                                {services.map((service) => (
                                    <button
                                        key={service.id}
                                        onClick={() => setSelectedService(service)}
                                        className={`p-3 rounded-lg text-sm font-medium transition-all border text-left flex items-center justify-between group ${selectedService.id === service.id
                                            ? "border-primary bg-primary/5 text-primary"
                                            : "border-slate-200 text-slate-600 hover:border-primary/50"
                                            }`}
                                    >
                                        {service.name}
                                        {selectedService.id === service.id && (
                                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                                <Check size={16} />
                                            </motion.div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Complexity */}
                        <div className="mb-10">
                            <label className="block text-sm font-semibold text-slate-900 mb-4">Project Complexity</label>
                            <div className="grid grid-cols-3 gap-3">
                                {complexityLevels.map((level) => (
                                    <button
                                        key={level.id}
                                        onClick={() => setSelectedComplexity(level)}
                                        className={`p-3 rounded-lg transition-all border text-center relative overflow-hidden ${selectedComplexity.id === level.id
                                            ? "border-primary bg-primary/5 text-primary shadow-sm"
                                            : "border-slate-200 text-slate-600 hover:border-primary/50"
                                            }`}
                                    >
                                        <div className="text-sm font-bold mb-1">{level.name}</div>
                                        <div className="text-[10px] opacity-80">{level.desc}</div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Action Button */}
                        <button
                            onClick={handleGetEstimate}
                            className="w-full py-4 bg-[#1c365f] text-white font-bold rounded-xl hover:bg-[#1c365f]/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#1c365f]/20 mt-auto"
                        >
                            Get Estimate <ArrowRight size={18} />
                        </button>
                    </>
                )}
            </div>

            {/* Lead Capture Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 relative"
                    >
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>

                        <div className="text-center mb-8">
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Almost there!</h3>
                            <p className="text-slate-600">Enter your phone number to receive your personalized estimate.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Organization Name</label>
                                <input
                                    type="text"
                                    name="organization"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                    placeholder="Company Ltd."
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
                                    placeholder="+91 98765 43210"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all disabled:opacity-70"
                            >
                                {isLoading ? "Processing..." : "Submit"}
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
