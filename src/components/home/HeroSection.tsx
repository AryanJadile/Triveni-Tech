"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Rocket, Smartphone } from "lucide-react";

/**
 * HeroSection Component
 *
 * The main landing area of the Home page.
 * Features:
 * - Animated text entrance using Framer Motion
 * - Background decorative bobs (gradients)
 * - Primary Call-to-Actions (CTAs)
 * - Quick feature highlights (Web, App, Marketing)
 */
export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-32">
            {/* Background Decor */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-70"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                            Leading Digital Agency
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
                            Transforming Ideas into <br />
                            <span className="text-primary">Digital Reality</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            We build scalable web applications, mobile apps, and digital strategies to help your startup grow. Experience world-class engineering with a focus on design and performance.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
                            >
                                Start Your Project <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="#services"
                                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-semibold hover:bg-slate-50 transition-all flex items-center justify-center"
                            >
                                Our Services
                            </Link>
                        </div>
                    </motion.div>

                    {/* Feature Highlight */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
                    >
                        <FeatureItem
                            icon={<Code className="text-primary" size={24} />}
                            title="Web Development"
                            desc="Modern, responsive websites using Next.js and React."
                        />
                        <FeatureItem
                            icon={<Smartphone className="text-blue-600" size={24} />}
                            title="App Development"
                            desc="Cross-platform mobile apps for iOS and Android."
                        />
                        <FeatureItem
                            icon={<Rocket className="text-orange-500" size={24} />}
                            title="Digital Marketing"
                            desc="SEO and campaigns to boost your brand visibility."
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
    return (
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-600 text-sm">{desc}</p>
        </div>
    );
}
