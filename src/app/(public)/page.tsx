"use client";

import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Link from "next/link";
import { motion } from "framer-motion";

/**
 * Home Page
 *
 * The landing page of the application, assembling key sections:
 * - HeroSection: Introduction and CTAs
 * - ServicesSection: Grid of services offered
 * - Call to Action: Final prompt for user engagement
 */
export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />

      {/* Call to Action Section */}
      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-12 px-4 md:px-6"
      >
        <div className="bg-[#f0f8ff] rounded-3xl py-20 text-center shadow-xl mx-auto max-w-7xl overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-[#1c365f]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-[#1c365f]/5 rounded-full blur-2xl"></div>

          <div className="relative z-10 container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#1c365f]">Ready to start your digital journey?</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10">
              Let's discuss how we can help your business grow with our technology solutions.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#1c365f] text-white font-bold rounded-full hover:bg-[#1c365f]/90 transition-all shadow-lg shadow-[#1c365f]/25"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
