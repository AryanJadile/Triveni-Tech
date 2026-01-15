export const metadata = {
    title: 'Privacy Policy - Triveni Tech',
    description: 'Privacy policy and GDPR compliance information for Triveni Tech.',
};

export default function PrivacyPage() {
    return (
        <div className="py-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8">Privacy Policy (GDPR-Compliant)</h1>
                    <div className="prose prose-slate max-w-none">
                        <p className="text-slate-600 mb-6">
                            <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </p>
                        <p className="text-slate-600 mb-6">
                            Triveni Tech (“we”, “our”, “us”) respects your privacy and is committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR) and applicable data protection laws.
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">1. Information We Collect</h2>
                            <p className="text-slate-600 mb-4">We may collect:</p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
                                <li><strong>Personal data:</strong> Name, email address, phone number</li>
                                <li><strong>Business information:</strong> Shared via forms or emails</li>
                                <li><strong>Technical data:</strong> IP address, browser type, device data</li>
                                <li><strong>Usage data:</strong> Website interaction and analytics data</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">2. Legal Basis for Processing (GDPR)</h2>
                            <p className="text-slate-600 mb-4">We process personal data under the following legal bases:</p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
                                <li>Your consent</li>
                                <li>Contractual necessity</li>
                                <li>Legitimate business interests</li>
                                <li>Legal obligations</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">3. How We Use Your Data</h2>
                            <p className="text-slate-600 mb-4">We use collected data to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
                                <li>Respond to inquiries and provide services</li>
                                <li>Improve our website and services</li>
                                <li>Communicate project updates or offers</li>
                                <li>Ensure security and prevent fraud</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">4. Data Sharing</h2>
                            <p className="text-slate-600 mb-4">
                                We do not sell or rent personal data. Data may be shared only with trusted service providers or when legally required.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">5. Data Retention</h2>
                            <p className="text-slate-600 mb-4">
                                We retain personal data only for as long as necessary to fulfill business or legal purposes.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">6. Your GDPR Rights</h2>
                            <p className="text-slate-600 mb-4">You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
                                <li>Access your personal data</li>
                                <li>Request correction or deletion</li>
                                <li>Withdraw consent at any time</li>
                                <li>Restrict or object to processing</li>
                                <li>Request data portability</li>
                            </ul>
                            <p className="text-slate-600 mb-4">
                                You may exercise these rights by contacting us.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">7. Cookies</h2>
                            <p className="text-slate-600 mb-4">
                                We use cookies to enhance user experience and analyze traffic. You can manage cookie preferences through your browser settings.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">8. Data Security</h2>
                            <p className="text-slate-600 mb-4">
                                We implement technical and organizational measures to protect personal data against unauthorized access, loss, or misuse.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">9. International Data Transfers</h2>
                            <p className="text-slate-600 mb-4">
                                If data is transferred outside your country, we ensure appropriate safeguards are in place.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">10. Changes to This Policy</h2>
                            <p className="text-slate-600 mb-4">
                                We may update this Privacy Policy periodically. Updates will be posted on this page.
                            </p>
                        </section>

                        <section className="border-t border-slate-100 pt-8 mt-12">
                            <h2 className="text-2xl font-semibold text-primary mb-4">11. Contact & Data Requests</h2>
                            <p className="text-slate-600 mb-4">
                                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at:
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
