import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

/**
 * Footer Component
 *
 * This component renders the site-wide footer including:
 * - Brand information and social links
 * - Quick navigation links
 * - Service links
 * - Contact information
 * - Copyright and legal links
 */
export default function Footer() {
    return (
        <footer className="bg-secondary text-slate-200 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">Triveni Tech</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Empowering businesses with cutting-edge technology solutions.
                            We build scalable, robust, and beautiful digital experiences.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <SocialIcon icon={<Facebook size={18} />} href="#" />
                            <SocialIcon icon={<Twitter size={18} />} href="#" />
                            <SocialIcon icon={<Instagram size={18} />} href="#" />
                            <SocialIcon icon={<Linkedin size={18} />} href="#" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <FooterLink href="/">Home</FooterLink>
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/services">Services</FooterLink>
                            <FooterLink href="/careers">Careers</FooterLink>
                            <FooterLink href="/contact">Contact</FooterLink>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
                        <ul className="space-y-3 text-sm">
                            <FooterLink href="#">Web Development</FooterLink>
                            <FooterLink href="#">App Development</FooterLink>
                            <FooterLink href="#">UI/UX Design</FooterLink>
                            <FooterLink href="#">Digital Marketing</FooterLink>
                            <FooterLink href="#">Cloud Solutions</FooterLink>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary mt-1 shrink-0" size={18} />
                                <span>F-805, Asawari, Off. Sinhagad Road, Nanded city, Pune – 411041</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary shrink-0" size={18} />
                                <span>+91 8087918306</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary shrink-0" size={18} />
                                <span>trivenitechai@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Triveni Tech. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode; href: string }) {
    return (
        <Link
            href={href}
            className="p-2 bg-slate-800 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
        >
            {icon}
        </Link>
    );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="hover:text-primary transition-colors flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-primary transition-colors" />
                {children}
            </Link>
        </li>
    );
}
