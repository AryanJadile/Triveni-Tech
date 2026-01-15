"use client";

import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const form = e.target as HTMLFormElement;
        const formData = {
            name: (form.elements[0] as HTMLInputElement).value,
            email: (form.elements[1] as HTMLInputElement).value,
            message: (form.elements[2] as HTMLTextAreaElement).value,
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to send message');

            setSubmitted(true);
            form.reset();
            setTimeout(() => setSubmitted(false), 5000);
        } catch (error) {
            console.error('Submission error:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="py-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
                    <p className="text-slate-600 text-lg">
                        Have a project in mind? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">Our Location</h4>
                                        <a
                                            href="https://maps.app.goo.gl/URP5ZvE8kDBjxwNC8"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-slate-600 hover:text-primary transition-colors"
                                        >
                                            F-805, Asawari, Off. Sinhagad Road, Nanded city, Pune – 411041
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">Email Us</h4>
                                        <p className="text-slate-600">trivenitechai@gmail.com</p>
                                    </div>
                                </div>



                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-[20px] h-[20px]"
                                        >
                                            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.71 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67ZM16.53 14.84C16.48 14.76 15.66 14.36 15.26 14.16C14.87 13.96 14.67 13.86 14.53 14.06C14.38 14.26 13.98 14.76 13.83 14.91C13.73 15.06 13.58 15.06 13.18 14.86C12.79 14.66 11.51 14.24 10 12.89C8.83 11.85 8.03 10.56 7.83 10.21C7.63 9.87 7.81 9.68 8 9.49C8.18 9.31 8.4 9.01 8.59 8.81C8.74 8.66 8.79 8.51 8.89 8.31C8.99 8.11 8.94 7.96 8.84 7.76C8.74 7.56 8.14 6.06 7.9 5.46C7.65 4.86 7.4 4.96 7.25 4.96C7.11 4.96 6.91 4.96 6.71 4.96C6.51 4.96 6.16 5.04 5.86 5.36C5.56 5.68 4.72 6.48 4.72 8.11C4.72 9.74 5.91 11.33 6.06 11.53C6.21 11.73 8.36 15.04 11.66 16.46C12.44 16.8 13.06 17 13.54 17.16C14.24 17.38 14.88 17.34 15.39 17.27C15.96 17.18 17.14 16.55 17.39 15.85C17.64 15.15 17.64 14.55 17.59 14.46C17.54 14.35 17.39 14.29 16.99 14.09H16.53Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">WhatsApp</h4>
                                        <div className="flex items-center gap-2 text-slate-600 flex-wrap">
                                            <a href="https://wa.me/+918087918306" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+91 80879 18306</a>
                                            <span>\</span>
                                            <a href="https://wa.me/+919922398791" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+91 99223 98791</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="Your Name"
                                    suppressHydrationWarning
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="john@example.com"
                                    suppressHydrationWarning
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                    placeholder="How can we help you?"
                                    suppressHydrationWarning
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {submitted ? "Message Sent!" : isLoading ? "Sending..." : "Send Message"}
                                {!submitted && !isLoading && <Send size={18} />}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
