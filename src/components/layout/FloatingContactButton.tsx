"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, X, MessageSquare } from "lucide-react";

export default function FloatingContactButton() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

    const contactOptions = [
        {
            icon: (
                <img
                    src="/img/whatsapp_logo.jpg"
                    alt="WhatsApp"
                    className="w-full h-full object-cover"
                />
            ),
            label: "WhatsApp",
            href: "https://wa.me/+918087918306",
            color: "bg-white overflow-hidden",
            delay: 0.1
        },
        {
            icon: <Phone size={24} />,
            label: "Call Now",
            href: "tel:+919922398791",
            color: "bg-blue-500",
            delay: 0.05
        },
        {
            icon: <Mail size={24} />,
            label: "Email Us",
            href: "mailto:trivenitechai@gmail.com",
            color: "bg-red-500", // Standard email color often red/orange, or I can use slate
            delay: 0
        }
    ];

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <div className="flex flex-col gap-3 mb-2 items-end">
                        {contactOptions.map((option, index) => (
                            <motion.a
                                key={option.label}
                                href={option.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                                transition={{ duration: 0.3, delay: option.delay }}
                                className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg shadow-slate-900/10 hover:scale-110 transition-transform ${option.color} relative group`}
                            >
                                {option.icon}
                                {/* Tooltip label */}
                                <span className="absolute right-full mr-3 bg-white text-slate-700 px-3 py-1 rounded-lg text-sm font-medium shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    {option.label}
                                </span>
                            </motion.a>
                        ))}
                    </div>
                )}
            </AnimatePresence>

            <button
                onClick={toggleOpen}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 ${isOpen ? "bg-slate-800 rotate-[360deg]" : "bg-[#22457d] hover:scale-105"
                    }`}
            >
                {isOpen ? (
                    <X className="text-white" size={28} />
                ) : (
                    <MessageSquare className="text-white" size={28} />
                )}
            </button>
        </div>
    );
}
