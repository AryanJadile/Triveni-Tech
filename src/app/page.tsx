import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";

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

      {/* Call to Action Section */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your digital journey?</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
            Let's discuss how we can help your business grow with our technology solutions.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
