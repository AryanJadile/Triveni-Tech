"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Navigation Items Configuration
 * Centralized list of links used in both Desktop and Mobile navigation.
 */
const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/#services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Internships", href: "/internships" },
];

/**
 * Header Component
 *
 * This component renders the main navigation bar of the application.
 * It includes:
 * - Responsive design (Desktop vs Mobile menu)
 * - Scroll-aware background styling (transparent to white/glassmorphism)
 * - Logo and Brand Name
 * - Navigation Links
 * - "Get Started" Call-to-Action
 */
export default function Header() {
    // State to track if the user has scrolled down to apply styles
    const [isScrolled, setIsScrolled] = useState(false);
    // State to toggle the mobile menu visibility
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    /**
     * Scroll Effect Hook
     * Adds a scroll listener to update the `isScrolled` state when the user scrolls past 10px.
     * This triggers the background color change in the header.
     */
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        // Clean up the event listener on component unmount
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
                isScrolled
                    ? "bg-white border-gray-200 py-3 shadow-sm"
                    : "bg-transparent border-transparent py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0">
                        <Image src="/img/logo.jpg" alt="Triveni Tech Logo" fill className="object-cover" />
                    </div>
                    <span className="text-xl font-bold text-secondary leading-none">
                        Triveni Tech
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-700 hover:text-primary transition-colors hover:bg-slate-50 px-3 py-2 rounded-md"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-5 py-2.5 bg-secondary text-white text-sm font-semibold rounded-full hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20"
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-slate-700"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-white border-b border-gray-100"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 text-slate-700 font-medium"
                                >
                                    {item.name}
                                    <ChevronRight size={16} className="text-slate-400" />
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-4 w-full py-3 bg-secondary text-white text-center font-semibold rounded-lg hover:bg-secondary/90"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
