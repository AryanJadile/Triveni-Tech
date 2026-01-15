"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
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

export default function Header() {
    const pathname = usePathname(); // Get current path
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // ... (useEffect)

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-white border-gray-200 py-3 shadow-sm"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                {/* ... */}
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
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors px-3 py-2 rounded-md",
                                    isActive
                                        ? "text-[#1c365f] font-bold bg-slate-50"
                                        : "text-slate-700 hover:text-primary hover:bg-slate-50"
                                )}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                    <Link
                        href="/contact"
                        className="px-5 py-2.5 bg-secondary text-white text-sm font-semibold rounded-full hover:bg-secondary/90 transition-all shadow-lg shadow-secondary/20"
                    >
                        Contact Us
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                {/* ... */}
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
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={cn(
                                            "flex items-center justify-between p-3 rounded-lg font-medium",
                                            isActive
                                                ? "bg-slate-50 text-[#1c365f] font-bold"
                                                : "hover:bg-slate-50 text-slate-700"
                                        )}
                                    >
                                        {item.name}
                                        <ChevronRight size={16} className={cn("text-slate-400", isActive && "text-[#1c365f]")} />
                                    </Link>
                                );
                            })}
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
