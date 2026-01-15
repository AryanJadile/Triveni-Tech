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

    const calculatePrice = () => {
        const min = selectedService.basePrice * selectedComplexity.multiplier;
        const max = min * 1.5;
        return {
            min: min.toLocaleString("en-IN"),
            max: max.toLocaleString("en-IN")
        };
    };

    const price = calculatePrice();

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                        <Calculator size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">Get an Estimate</h3>
                        <p className="text-slate-500 text-sm">Select options to see a price range</p>
                    </div>
                </div>

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

                {/* Result */}
                <div className="bg-slate-900 rounded-xl p-6 text-white text-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                        <p className="text-slate-400 text-sm mb-2 uppercase tracking-wider font-medium">Estimated Cost</p>
                        <div className="text-3xl md:text-4xl font-bold mb-4">
                            ₹{price.min} <span className="text-slate-500 text-2xl font-normal">-</span> ₹{price.max}
                        </div>
                        <p className="text-slate-400 text-xs mb-0">
                            *This is a ballpark estimate. Final quote may vary based on specific requirements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
