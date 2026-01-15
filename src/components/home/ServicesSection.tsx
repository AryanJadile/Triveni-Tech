import { useState } from "react";
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
        details: "We build high-performance, SEO-optimized websites tailored to your brand. From simple landing pages to complex enterprise web applications, our full-stack solutions ensure scalability, security, and a seamless user experience across all devices."
    },
    {
        icon: <Smartphone size={32} />,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.",
        details: "Our mobile development team specializes in creating intuitive apps using Flutter and React Native. We focus on performance, offline capabilities, and native device feature integration to provide your users with a top-tier mobile experience."
    },
    {
        icon: <Palette size={32} />,
        title: "UI/UX Design",
        description: "User-centric design solutions that combine aesthetics with functionality to drive engagement.",
        details: "We don't just design screens; we craft experiences. Our design process involves user research, wireframing, prototyping, and high-fidelity UI design to ensure your product is not only beautiful but also intuitive and easy to use."
    },
    {
        icon: <Megaphone size={32} />,
        title: "Digital Marketing",
        description: "Data-driven marketing strategies including SEO, PPC, and social media to grow your brand reach.",
        details: "Accelerate your growth with our comprehensive digital marketing services. We offer SEO optimization, targeted Pay-Per-Click campaigns, and social media management to increase your visibility and convert leads into loyal customers."
    },
    {
        icon: <Server size={32} />,
        title: "Cloud Solutions",
        description: "Scalable cloud architecture using AWS, Azure, and Google Cloud for secure and high-performance infrastructure.",
        details: "Leverage the power of the cloud with our expert architectural services. We help you migrate, manage, and optimize your infrastructure on AWS, Azure, or GCP, ensuring high availability, security compliance, and cost-efficiency."
    },
    {
        icon: <Database size={32} />,
        title: "Data Analytics",
        description: "Transform your data into actionable insights with our advanced analytics and reporting solutions.",
        details: "Turn raw data into strategic assets. Our analytics services include data warehousing, visualization, and predictive modeling to help you make informed business decisions and identify new opportunities for growth."
    },
    {
        icon: <Code size={32} />,
        title: "MERN Stack",
        description: "Full-stack web development using MongoDB, Express.js, React, and Node.js for specialized solutions.",
        details: "Build dynamic, high-performance web applications with the MERN stack. Our expertise in MongoDB, Express, React, and Node.js allows us to deliver rapid prototypes and scalable production-ready applications with a unified JavaScript codebase."
    },
    {
        icon: <Coffee size={32} />,
        title: "Java Full Stack",
        description: "Enterprise-grade application development using Java, Spring Boot, and modern frontend frameworks.",
        details: "For mission-critical enterprise systems, our Java Full Stack services provide robust, secure, and scalable solutions. We combine the power of Spring Boot microservices with modern frontends to build resilient software architectures."
    },
    {
        icon: <Terminal size={32} />,
        title: "Python Development",
        description: "Robust backend development, scripting, and automation using Python and Django/Flask.",
        details: "Harness the versatility of Python for backend API development, data processing scripts, and automation tools. We utilize frameworks like Django and Flask to build secure and maintainable server-side logic."
    },
    {
        icon: <BarChart size={32} />,
        title: "Data Science",
        description: "Advanced data modeling, machine learning, and AI solutions to solve complex business problems.",
        details: "Unlock the potential of AI with our Data Science services. From predictive algorithms to Natural Language Processing, we build custom machine learning models that automate processes and solve complex analytical challenges."
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
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

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
                            className="h-full"
                        >
                            <ServiceCard
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                details={service.details}
                                isExpanded={expandedIndex === index}
                                onToggle={() => handleToggle(index)}
                                className="h-full"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
