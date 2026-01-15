"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe, Lightbulb, Users } from "lucide-react";
import { ScrollReveal, PopIn } from "@/components/ui/ScrollReveal";

/**
 * About Page
 *
 * Displays detailed information about Triveni Tech.
 * Sections:
 * - Who We Are: Company overview
 * - Mission & Vision: Core values
 * - Why Choose Us: Key differentiators
 * - Stats: Numerical achievements
 *
 * Uses `ScrollReveal` for entrance animations on distinct sections.
 */
export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-secondary text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Who We Are</h1>
                        <p className="text-xl text-slate-200 leading-relaxed">
                            Triveni Tech is a premier digital solutions agency based in Pune. We merge creativity with technology to build digital products that drive growth and innovation for businesses worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <ScrollReveal>
                            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 h-full">
                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                                    <Lightbulb size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-secondary mb-4">Our Mission</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    To empower businesses by delivering cutting-edge technology solutions that streamline operations, enhance user experiences, and drive sustainable growth in the digital era.
                                </p>
                            </div>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2}>
                            <div className="bg-slate-50 p-10 rounded-2xl border border-slate-100 h-full">
                                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                                    <Globe size={24} />
                                </div>
                                <h2 className="text-2xl font-bold text-secondary mb-4">Our Vision</h2>
                                <p className="text-slate-600 leading-relaxed">
                                    To be a globally recognized technology partner known for innovation, quality, and a client-first approach, setting new standards in the software industry.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <ScrollReveal width="100%">
                            <h2 className="text-3xl font-bold text-secondary mb-4">Why Choose Triveni Tech?</h2>
                            <p className="text-slate-600">
                                We bring years of experience and a passion for technology to every project.
                            </p>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <PopIn delay={0.1}>
                            <FeatureCard
                                title="Expert Team"
                                desc="Our team consists of highly skilled developers, designers, and strategists."
                            />
                        </PopIn>
                        <PopIn delay={0.2}>
                            <FeatureCard
                                title="Custom Solutions"
                                desc="We don't believe in one-size-fits-all. We build solutions tailored to your needs."
                            />
                        </PopIn>
                        <PopIn delay={0.3}>
                            <FeatureCard
                                title="On-Time Delivery"
                                desc="We respect your time and ensure timely delivery of all projects without compromising quality."
                            />
                        </PopIn>
                        <PopIn delay={0.4}>
                            <FeatureCard
                                title="24/7 Support"
                                desc="Our dedicated support team is always available to assist you with any issues."
                            />
                        </PopIn>
                        <PopIn delay={0.5}>
                            <FeatureCard
                                title="Affordable Pricing"
                                desc="Top-tier quality services at competitive prices to maximize your ROI."
                            />
                        </PopIn>
                        <PopIn delay={0.6}>
                            <FeatureCard
                                title="Latest Technology"
                                desc="We stay updated with the latest trends to keep your business ahead of the curve."
                            />
                        </PopIn>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <StatItem number="60+" label="Projects Completed" />
                        <StatItem number="50+" label="Happy Clients" />
                        <StatItem number="2+" label="Years Experience" />
                        <StatItem number="24/7" label="Support" />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 px-4 md:px-6">
                <div className="bg-[#f0f8ff] rounded-3xl py-20 text-center shadow-xl mx-auto max-w-7xl overflow-hidden relative">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#1c365f]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-[#1c365f]/5 rounded-full blur-2xl"></div>

                    <div className="relative z-10 container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1c365f]">Ready to innovate?</h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10">
                            Join us on our journey to shape the future of technology. Whether you're a client or a future team member, we'd love to hear from you.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-4 bg-[#1c365f] text-white font-bold rounded-full hover:bg-[#1c365f]/90 transition-all shadow-lg shadow-[#1c365f]/25 transform hover:-translate-y-1"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm flex items-start gap-4">
            <div className="mt-1 text-primary shrink-0">
                <CheckCircle2 size={20} />
            </div>
            <div>
                <h3 className="text-lg font-bold text-secondary mb-2">{title}</h3>
                <p className="text-slate-600 text-sm">{desc}</p>
            </div>
        </div>
    );
}

function StatItem({ number, label }: { number: string; label: string }) {
    return (
        <div>
            <div className="text-4xl md:text-5xl font-bold text-[#1c365f] mb-2">{number}</div>
            <div className="text-[#1c365f] font-medium">{label}</div>
        </div>
    )
}
