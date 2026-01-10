"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Code, Laptop, UserCheck, Calendar, BookOpen } from "lucide-react";
import Link from "next/link";
import { ScrollReveal, PopIn } from "@/components/ui/ScrollReveal";

export default function InternshipsPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-secondary text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Internship Program 2026</h1>
                    <p className="text-xl text-slate-200 leading-relaxed max-w-2xl mx-auto mb-8">
                        Join our comprehensive internship program designed for CS & IT students. Gain hands-on experience and mentorship from industry experts.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                    >
                        Apply Now
                    </Link>
                </div>
            </section>

            {/* Highlights & Tech Stack */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        {/* Highlights */}
                        <ScrollReveal>
                            <div>
                                <h2 className="text-3xl font-bold text-secondary mb-8 flex items-center gap-3">
                                    <Laptop className="text-primary" /> Internship Highlights
                                </h2>
                                <ul className="space-y-6">
                                    <HighlightItem text="Mentorship from Industry Experts" />
                                    <HighlightItem text="Internship Certificate + Project Report" />
                                    <HighlightItem text="Resume & Interview Preparation" />
                                    <HighlightItem text="Hybrid Mode: Online / Offline Options" />
                                    <HighlightItem text="Hands-on Projects in Web Dev, Python, AI/ML, and more" />
                                    <HighlightItem text="Limited Seats Available!" />
                                </ul>
                            </div>
                        </ScrollReveal>

                        {/* Tech Stack */}
                        <ScrollReveal delay={0.2}>
                            <div>
                                <h2 className="text-3xl font-bold text-secondary mb-8 flex items-center gap-3">
                                    <Code className="text-primary" /> Tech Stack
                                </h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <TechCard title="React JS" />
                                    <TechCard title="MERN Stack" />
                                    <TechCard title="Java Full Stack" />
                                    <TechCard title="Python" />
                                    <TechCard title="Web Development" />
                                    <TechCard title="Data Science" />
                                    <TechCard title="AWS" />
                                    <TechCard title="Flutter" />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <ScrollReveal width="100%">
                        <h2 className="text-3xl font-bold text-secondary mb-12">Program Benefits</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <PopIn delay={0.1}><BenefitCard icon={<UserCheck size={32} />} title="Career Growth" desc="Unlock opportunities for career advancement and skill development." /></PopIn>
                            <PopIn delay={0.2}><BenefitCard icon={<Calendar size={32} />} title="Flexible Learning" desc="Hybrid mode offering both online and offline learning options." /></PopIn>
                            <PopIn delay={0.3}><BenefitCard icon={<BookOpen size={32} />} title="Practical Experience" desc="Work on live projects to build a strong professional portfolio." /></PopIn>
                        </div>
                    </ScrollReveal>
                    <div className="mt-16 p-8 bg-white rounded-2xl border border-slate-100 shadow-sm max-w-3xl mx-auto">
                        <h3 className="text-2xl font-bold text-secondary mb-4">How to Apply?</h3>
                        <p className="text-slate-600 mb-6">
                            Send your CV or Cover Letter to our email below or call us for more information.
                        </p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <div className="px-6 py-3 bg-slate-100 rounded-lg text-secondary font-medium">
                                trivenitechai@gmail.com
                            </div>
                            <div className="px-6 py-3 bg-slate-100 rounded-lg text-secondary font-medium">
                                +91 8087918306
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function HighlightItem({ text }: { text: string }) {
    return (
        <li className="flex items-start gap-4">
            <div className="mt-1 text-primary shrink-0">
                <CheckCircle2 size={20} />
            </div>
            <span className="text-lg text-slate-700">{text}</span>
        </li>
    );
}

function TechCard({ title }: { title: string }) {
    return (
        <div className="bg-slate-50 border border-slate-100 p-4 rounded-lg text-center font-medium text-slate-700 hover:bg-white hover:shadow-md transition-all">
            {title}
        </div>
    )
}

function BenefitCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm">
            <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
            <p className="text-slate-600">{desc}</p>
        </div>
    )
}
