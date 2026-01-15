export const metadata = {
    title: 'Terms & Conditions - Triveni Tech',
    description: 'Terms and conditions for using Triveni Tech services and website.',
};

export default function TermsPage() {
    return (
        <div className="py-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Terms & Conditions</h1>
                    <div className="prose prose-slate max-w-none">
                        <p className="text-slate-600 mb-6">
                            <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                        <p className="text-slate-600 mb-6">
                            Welcome to Triveni Tech. By accessing or using our website and services, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use our services.
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">1. Services</h2>
                            <p className="text-slate-600 mb-4">
                                Triveni Tech provides technology and digital services including web & application development, AI & automation, POS systems, data analytics, and digital growth solutions. All services are provided based on mutually agreed scope, timelines, and pricing.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">2. Use of Website</h2>
                            <p className="text-slate-600 mb-4">
                                You agree to use our website only for lawful purposes and in a manner that does not violate any applicable laws or regulations.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">3. Intellectual Property</h2>
                            <p className="text-slate-600 mb-4">
                                All content on this website, including text, graphics, logos, designs, and software, is the property of Triveni Tech unless otherwise stated. Unauthorized use, reproduction, or distribution is prohibited.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">4. Client Responsibilities</h2>
                            <p className="text-slate-600 mb-4">
                                Clients agree to provide accurate information, timely approvals, and required content/resources to ensure smooth project execution.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">5. Payments</h2>
                            <p className="text-slate-600 mb-4">
                                Payment terms, milestones, and pricing will be defined in project agreements or invoices. Delays in payment may impact project timelines.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">6. Limitation of Liability</h2>
                            <p className="text-slate-600 mb-4">
                                Triveni Tech shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">7. Termination</h2>
                            <p className="text-slate-600 mb-4">
                                We reserve the right to suspend or terminate services if these Terms are violated or if required by law.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">8. Third-Party Links</h2>
                            <p className="text-slate-600 mb-4">
                                Our website may contain links to third-party websites. We are not responsible for their content, policies, or practices.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">9. Changes to Terms</h2>
                            <p className="text-slate-600 mb-4">
                                We may update these Terms & Conditions at any time. Continued use of our website constitutes acceptance of the updated terms.
                            </p>
                        </section>

                        <section className="border-t border-slate-100 pt-8 mt-12">
                            <h2 className="text-2xl font-semibold text-primary mb-4">10. Contact Information</h2>
                            <p className="text-slate-600 mb-4">
                                If you have any questions about these Terms, please contact us at:
                            </p>
                            <p className="text-slate-600">
                                <strong>Email:</strong> <a href="mailto:trivenitechai@gmail.com" className="text-primary hover:underline">trivenitechai@gmail.com</a>
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}
