import React, { useEffect } from 'react';

const TermsOfService: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20">
            <div className="max-w-2xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">TERMS OF SERVICE</h1>
                    <p className="text-gray-500 text-sm font-medium tracking-wide upppercase">REDLEG CONSULTING GROUP</p>
                    <p className="text-gray-500 text-sm font-medium tracking-wide upppercase mt-1">Last Updated: February 13, 2026</p>
                </div>

                {/* Content */}
                <div className="space-y-12 text-gray-300 leading-relaxed font-light">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">1. Acceptance of Terms</h2>
                        <p className="mb-4">
                            By accessing redlegcg.com, you agree to these Terms of Service.
                        </p>
                        <p className="mb-4">
                            These Terms are entered into between you and Cody Lancaster, operating as Redleg Consulting Group, a sole proprietorship.
                        </p>
                        <p>
                            If you do not agree, do not use the website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">2. Services</h2>
                        <p className="mb-4">
                            Redleg Consulting Group provides:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Website design</li>
                            <li>Systems architecture</li>
                            <li>Automation consulting</li>
                            <li>Infrastructure advisory</li>
                            <li>AI integration strategy</li>
                        </ul>
                        <p>
                            Specific services are governed by written agreements executed separately between RCG and clients.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">3. No Guarantees</h2>
                        <p className="mb-4">
                            All consulting services are provided based on professional judgment and experience.
                        </p>
                        <p className="mb-4">
                            We do not guarantee:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Specific revenue outcomes</li>
                            <li>Specific traffic outcomes</li>
                            <li>Business performance results</li>
                        </ul>
                        <p>
                            Implementation decisions and business outcomes remain the responsibility of the client.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">4. Intellectual Property</h2>
                        <p className="mb-4">
                            All content on redlegcg.com, including:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Copy</li>
                            <li>Branding</li>
                            <li>Logos</li>
                            <li>Graphics</li>
                            <li>Design elements</li>
                        </ul>
                        <p className="mb-4">
                            are the property of Redleg Consulting Group unless otherwise stated.
                        </p>
                        <p>
                            You may not reproduce or redistribute content without written permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">5. Client Agreements</h2>
                        <p className="mb-4">
                            Any paid engagement requires:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>A separate written agreement</li>
                            <li>Scope definition</li>
                            <li>Payment terms</li>
                            <li>Deliverables</li>
                        </ul>
                        <p>
                            These Terms do not replace signed service contracts.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">6. Limitation of Liability</h2>
                        <p className="mb-4">
                            To the fullest extent permitted by law, Redleg Consulting Group and Cody Lancaster shall not be liable for indirect, incidental, consequential, or special damages arising from use of the website or services. Total liability shall not exceed the amount paid for services, if any, during the twelve (12) months preceding the claim.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">7. Indemnification</h2>
                        <p className="mb-4">
                            You agree to indemnify and hold harmless Redleg Consulting Group and Cody Lancaster from any claims, liabilities, damages, losses, or expenses (including reasonable legal fees) arising from misuse of the website or services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">8. No Professional Advice</h2>
                        <p className="mb-4">
                            Information provided on this website does not constitute legal, financial, tax, or investment advice. Clients are responsible for consulting licensed professionals where appropriate.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">9. Governing Law</h2>
                        <p>
                            These Terms are governed by the laws of the State of Florida, without regard to conflict of law principles, and applicable federal law.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">10. Contact</h2>
                        <p className="mb-4">
                            For questions regarding these Terms or the Privacy Policy, please email:
                        </p>
                        <a href="mailto:contact@redlegcg.com" className="text-red-500 hover:text-red-400 transition-colors inline-block border-b border-red-500/30 hover:border-red-500 pb-0.5 mb-4">
                            contact@redlegcg.com
                        </a>
                        <p>
                            Include “Website Terms” or “Website Privacy” in the subject line and address your message to Cody Lancaster.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
