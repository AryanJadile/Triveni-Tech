"use client";

import ProjectCard from "@/components/portfolio/ProjectCard";
import { motion } from "framer-motion";

const projects = [
    {
        title: "RestoFlow POS System",
        category: "Web Application",
        description: "A comprehensive Point of Sale solution for restaurants with table management, inventory tracking, and real-time sales analytics.",
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
        title: "Corporate Brand Identity",
        category: "Digital Marketing",
        description: "Complete rebranding strategy, logo design, and social media kit for a tech startup.",
        image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2700&q=80",
    },
];

export default function PortfolioPage() {
    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-white py-20 lg:py-28 border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-3xl mx-auto"
                    >
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">
                            Our Work
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                            Building Digital <span className="text-primary">Masterpieces</span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Explore our portfolio of successful projects. We combine creativity with technical excellence to deliver results that matter.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <ProjectCard {...project} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 px-4 md:px-6">
                <div className="bg-secondary rounded-3xl py-20 text-white text-center shadow-xl mx-auto max-w-7xl overflow-hidden relative">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-2xl"></div>

                    <div className="relative z-10 container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a project in mind?</h2>
                        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
                            Let's collaborate to bring your ideas to life. Our team is ready to start building.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 transform hover:-translate-y-1"
                        >
                            Start Your Project
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
