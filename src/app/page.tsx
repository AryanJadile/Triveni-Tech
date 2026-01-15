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
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-slate-900 text-white text-center"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your digital journey?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Let's discuss how we can help your business grow with our technology solutions.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
          >
            Contact Us Today
          </Link>
        </div>
      </motion.section>
    </div>
  );
}
