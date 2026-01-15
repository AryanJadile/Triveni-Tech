"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const studentTestimonials = [
    {
        name: "Anjali Gupta",
        role: "Research Intern",
        content: "The internship provided me with real-world exposure to AI and Machine Learning. The mentorship was outstanding, and I learned so much more than I could have in a classroom.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
        name: "Aryan Jadile",
        role: "Web Development Intern",
        content: "I started with basic knowledge of HTML/CSS and left with a full stack project under my belt. The hands-on projects were challenging and incredibly rewarding.",
        image: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
        name: "Sneha Reddy",
        role: "App Dev Intern",
        content: "Working on a live Flutter app was a game-changer for my career. The team at Triveni Tech supported me every step of the way.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
];

export default function StudentTestimonialsSection() {
    return (
        <section className="py-20 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm">Success Stories</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
                        Hear from Our Interns
                    </h2>
                    <p className="text-slate-600 text-lg">
                        See how our internship program has helped students launch their careers in technology.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {studentTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-50 p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative"
                        >
                            <Quote className="absolute top-8 right-8 text-slate-200" size={48} />

                            <p className="text-slate-600 mb-8 relative z-10 leading-relaxed">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div>
                                    <h4 className="font-bold text-slate-900 text-sm">{testimonial.name}</h4>
                                    <p className="text-slate-500 text-xs">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
