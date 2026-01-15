import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin } from "lucide-react";

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
                        <div className="flex items-center gap-3">
                            <img src="/img/footer_logo_white.png" alt="Triveni Tech Logo" className="w-12 h-12 object-contain" />
                            <h3 className="text-xl font-bold text-white leading-none">Triveni Tech</h3>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Empowering businesses with cutting-edge technology solutions.
                            We build scalable, robust, and beautiful digital experiences.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            <FooterLink href="/">Home</FooterLink>
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/services">Services</FooterLink>
                            <FooterLink href="/portfolio">Portfolio</FooterLink>
                            <FooterLink href="/contact">Contact</FooterLink>
                        </ul>
                    </div>

                    {/* Connect With Us */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Connect With Us</h4>
                        <div className="flex flex-col gap-4">
                            <SocialLink
                                icon={<Instagram size={20} />}
                                label="Instagram"
                                href="https://www.instagram.com/triveni_tech2025/"
                                color="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500"
                            />
                            <SocialLink
                                icon={<Linkedin size={20} />}
                                label="LinkedIn"
                                href="https://www.linkedin.com/company/triveni-tech/"
                                color="bg-[#0077b5]"
                            />
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <a
                                    href="https://maps.app.goo.gl/URP5ZvE8kDBjxwNC8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 hover:text-[#f0f8ff] hover:scale-105 transition-all group origin-left"
                                >
                                    <MapPin className="text-white mt-1 shrink-0 group-hover:text-[#f0f8ff] transition-colors" size={18} />
                                    <span>F-805, Asawari, Off. Sinhagad Road, Nanded city, Pune – 411041</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center gap-3 group">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-[18px] h-[18px] text-white shrink-0 group-hover:text-[#f0f8ff] group-hover:scale-105 transition-all"
                                    >
                                        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.71 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM16.53 14.84C16.48 14.76 15.66 14.36 15.26 14.16C14.87 13.96 14.67 13.86 14.53 14.06C14.38 14.26 13.98 14.76 13.83 14.91C13.73 15.06 13.58 15.06 13.18 14.86C12.79 14.66 11.51 14.24 10 12.89C8.83 11.85 8.03 10.56 7.83 10.21C7.63 9.87 7.81 9.68 8 9.49C8.18 9.31 8.4 9.01 8.59 8.81C8.74 8.66 8.79 8.51 8.89 8.31C8.99 8.11 8.94 7.96 8.84 7.76C8.74 7.56 8.14 6.06 7.9 5.46C7.65 4.86 7.4 4.96 7.25 4.96C7.11 4.96 6.91 4.96 6.71 4.96C6.51 4.96 6.16 5.04 5.86 5.36C5.56 5.68 4.72 6.48 4.72 8.11C4.72 9.74 5.91 11.33 6.06 11.53C6.21 11.73 8.36 15.04 11.66 16.46C12.44 16.8 13.06 17 13.54 17.16C14.24 17.38 14.88 17.34 15.39 17.27C15.96 17.18 17.14 16.55 17.39 15.85C17.64 15.15 17.64 14.55 17.59 14.46C17.54 14.35 17.39 14.29 16.99 14.09H16.53Z" />
                                    </svg>
                                    <div className="flex items-center gap-2">
                                        <a
                                            href="https://wa.me/+918087918306"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[#f0f8ff] hover:scale-105 inline-block transition-all"
                                        >
                                            +91 8087918306
                                        </a>
                                        <span>\</span>
                                        <a
                                            href="https://wa.me/+919922398791"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-[#f0f8ff] hover:scale-105 inline-block transition-all"
                                        >
                                            +91 99223 98791
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a
                                    href="mailto:trivenitechai@gmail.com"
                                    className="flex items-center gap-3 hover:text-[#f0f8ff] hover:scale-105 transition-all group origin-left"
                                >
                                    <Mail className="text-white shrink-0 group-hover:text-[#f0f8ff] transition-colors" size={18} />
                                    <span>trivenitechai@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
                    <p>&copy; 2025 Triveni Tech. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0 md:mr-24">
                        <Link href="/privacy" className="hover:text-[#f0f8ff] hover:scale-105 inline-block transition-all">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-[#f0f8ff] hover:scale-105 inline-block transition-all">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}



function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="hover:text-[#f0f8ff] hover:scale-105 transition-all flex items-center gap-2 group origin-left">
                <span className="w-1.5 h-1.5 bg-slate-600 rounded-full group-hover:bg-[#f0f8ff] transition-colors" />
                {children}
            </Link>
        </li>
    );
}

function SocialLink({ icon, label, href, color }: { icon: React.ReactNode; label: string; href: string; color: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 group p-1 transition-all duration-300"
        >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg ${color} group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>
            <span className="font-medium text-slate-300 group-hover:text-white transition-colors">
                {label}
            </span>
        </a>
    );
}
