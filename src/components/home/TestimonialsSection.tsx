"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "CEO, TechFlow",
        content: "Triveni Tech transformed our digital presence. Their team is incredibly skilled and delivered our project ahead of schedule. Highly recommended!",
        image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
        name: "Snehal Deshmukh",
        role: "Founder, GreenLeaf",
        content: "The best agency we've worked with. They understood our vision perfectly and created a stunning website that has significantly increased our sales.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
        name: "Amit Verma",
        role: "Owner, Spice Garden",
        content: "The RestoFlow POS system they built for us has streamlined our entire operation. Table management and inventory are now effortless. A game-changer for our restaurant!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary font-semibold tracking-wide uppercase text-sm">Testimonials</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Don't just take our word for it. Here's what our partners have to say about working with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative"
                        >
                            <Quote className="absolute top-8 right-8 text-slate-100" size={48} />

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
