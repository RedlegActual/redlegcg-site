import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20">
            <div className="max-w-2xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">PRIVACY POLICY</h1>
                    <p className="text-gray-500 text-sm font-medium tracking-wide upppercase">REDLEG CONSULTING GROUP</p>
                    <p className="text-gray-500 text-sm font-medium tracking-wide upppercase mt-1">Last Updated: February 13, 2026</p>
                </div>

                {/* Content */}
                <div className="space-y-12 text-gray-300 leading-relaxed font-light">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">1. Overview</h2>
                        <p className="mb-4">
                            Redleg Consulting Group (“RCG”, “we”, “us”, or “our”) operates redlegcg.com.
                        </p>
                        <p className="mb-4">
                            Redleg Consulting Group is operated as a sole proprietorship by Cody Lancaster, located in the State of Florida, United States.
                        </p>
                        <p className="mb-4">
                            We respect your privacy.
                        </p>
                        <p className="mb-4">
                            We collect only the information necessary to communicate with you and provide consulting services.
                        </p>
                        <p className="mb-4">
                            We do not sell personal data.
                            <br />
                            We do not run invasive tracking systems.
                            <br />
                            We do not engage in behavioral profiling.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">2. Information We Collect</h2>
                        <p className="mb-4">
                            We may collect:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Business information you voluntarily provide</li>
                            <li>Information submitted through contact or intake forms</li>
                        </ul>
                        <p>
                            This information is provided directly by you.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">3. How We Use Information</h2>
                        <p className="mb-4">
                            We use submitted information to:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Respond to inquiries</li>
                            <li>Review system or infrastructure requests</li>
                            <li>Communicate next steps</li>
                            <li>Provide consulting services</li>
                        </ul>
                        <p>
                            We do not sell, rent, or trade personal information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">4. Data Storage</h2>
                        <p className="mb-4">
                            Information may be stored securely through:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Email systems</li>
                            <li>Website hosting providers</li>
                            <li>CRM or secure internal tools</li>
                        </ul>
                        <p>
                            We take reasonable measures to protect submitted information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">5. Third-Party Services</h2>
                        <p className="mb-4">
                            Our website may use standard infrastructure tools such as:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Hosting providers</li>
                            <li>Form handling services</li>
                        </ul>
                        <p className="mb-4">
                            We may use privacy-focused website analytics to understand general traffic patterns. We do not use analytics tools to intentionally collect personally identifiable information, and we do not combine analytics data with information voluntarily submitted through forms.
                        </p>
                        <p className="mb-4">
                            These providers operate under their own privacy policies.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">6. Data Retention</h2>
                        <p className="mb-4">
                            We retain submitted information only as long as reasonably necessary to respond to inquiries, provide services, or comply with legal obligations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">7. Security</h2>
                        <p className="mb-4">
                            While reasonable safeguards are implemented, no method of internet transmission or electronic storage is completely secure. By using the website, you acknowledge and accept this inherent risk.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">8. Your Rights</h2>
                        <p className="mb-4">
                            You may request:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Access to information you have submitted</li>
                            <li>Correction of inaccurate information</li>
                            <li>Deletion of your submitted information</li>
                        </ul>
                        <p className="mb-4">
                            Requests may be sent to:
                        </p>
                        <a href="mailto:contact@redlegcg.com" className="text-red-500 hover:text-red-400 transition-colors inline-block border-b border-red-500/30 hover:border-red-500 pb-0.5">
                            contact@redlegcg.com
                        </a>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">9. Updates</h2>
                        <p className="mb-4">
                            We may update this policy as needed.
                        </p>
                        <p>
                            The “Last Updated” date reflects the most recent revision.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">10. Contact</h2>
                        <p className="mb-4">
                            For privacy-related questions:
                        </p>
                        <a href="mailto:contact@redlegcg.com" className="text-red-500 hover:text-red-400 transition-colors inline-block border-b border-red-500/30 hover:border-red-500 pb-0.5">
                            contact@redlegcg.com
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
