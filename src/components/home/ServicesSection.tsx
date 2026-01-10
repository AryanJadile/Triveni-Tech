"use client";

import { Monitor, Smartphone, Palette, Megaphone, Server, Database, Code, Coffee, Terminal, BarChart } from "lucide-react";
import ServiceCard from "../services/ServiceCard";
import { motion } from "framer-motion";

/**
 * List of Services
 * Defines the content for each service card including icon, title, and description.
 * This array drives the grid generation in the component.
 */
const services = [
    {
        icon: <Monitor size={32} />,
        title: "Web Development",
        description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
    },
    {
        icon: <Smartphone size={32} />,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.",
    },
    {
        icon: <Palette size={32} />,
        title: "UI/UX Design",
        description: "User-centric design solutions that combine aesthetics with functionality to drive engagement.",
    },
    {
        icon: <Megaphone size={32} />,
        title: "Digital Marketing",
        description: "Data-driven marketing strategies including SEO, PPC, and social media to grow your brand reach.",
    },
    {
        icon: <Server size={32} />,
        title: "Cloud Solutions",
        description: "Scalable cloud architecture using AWS, Azure, and Google Cloud for secure and high-performance infrastructure.",
    },
    {
        icon: <Database size={32} />,
        title: "Data Analytics",
        description: "Transform your data into actionable insights with our advanced analytics and reporting solutions.",
    },
    {
        icon: <Code size={32} />,
        title: "MERN Stack",
        description: "Full-stack web development using MongoDB, Express.js, React, and Node.js for specialized solutions.",
    },
    {
        icon: <Coffee size={32} />,
        title: "Java Full Stack",
        description: "Enterprise-grade application development using Java, Spring Boot, and modern frontend frameworks.",
    },
    {
        icon: <Terminal size={32} />,
        title: "Python Development",
        description: "Robust backend development, scripting, and automation using Python and Django/Flask.",
    },
    {
        icon: <BarChart size={32} />,
        title: "Data Science",
        description: "Advanced data modeling, machine learning, and AI solutions to solve complex business problems.",
    },
];

/**
 * ServicesSection Component
 *
 * Displays a grid of services offered by Triveni Tech.
 * - Uses `framer-motion` for entrance animations (staggered fade-up).
 * - Maps over the `services` array to render `ServiceCard` components.
 */
export default function ServicesSection() {
    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm">Our Expertise</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
                        Services We Provide
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Comprehensive technology solutions tailored to meet the unique needs of your business.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <ServiceCard
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
