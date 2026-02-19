import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RepTallyPrivacy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20">
            <div className="max-w-2xl mx-auto px-6">
                {/* Header */}
                <div className="mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">RepTally Privacy Policy</h1>
                    <p className="text-gray-500 text-sm font-medium tracking-wide upppercase">Last updated: February 13, 2026</p>
                </div>

                {/* Content */}
                <div className="space-y-12 text-gray-300 leading-relaxed font-light">
                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">Overview</h2>
                        <p className="mb-4">
                            RepTally is developed and operated by Cody Lancaster.
                        </p>
                        <p>
                            RepTally is designed with a privacy-first approach. The app does not require an account, does not serve advertisements, and RepTally does not collect, transmit, or store personally identifiable information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">Fitness Disclaimer</h2>
                        <p className="mb-4">
                            RepTally is a general fitness tracking tool and does not provide medical advice. Consult a qualified healthcare professional before beginning any exercise program.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">Data Collection & Storage</h2>
                        <p className="mb-4 font-medium text-white">
                            RepTally is a local-first application.
                        </p>
                        <p className="mb-4">
                            All rep counts, workout logs, and preferences are stored locally on your device. RepTally does not collect, transmit, store, or share personal information on external servers.
                        </p>
                        <p className="mb-4">
                            Cody Lancaster does not have access to any data stored within the app.
                        </p>
                        <p>
                            If you delete the application from your device, all data stored by RepTally is permanently removed.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">Analytics & Diagnostics</h2>
                        <p className="mb-4">
                            RepTally does not use third-party analytics services, tracking technologies, advertising identifiers, or behavioral monitoring systems.
                        </p>
                        <p>
                            If enabled in your device settings, Apple or Google may collect limited anonymous diagnostic information through their operating systems. Such information is managed solely by the platform provider and is not accessible to Cody Lancaster.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">Platform Services</h2>
                        <p className="mb-4">
                            RepTally is distributed through the Apple App Store and Google Play Store. Platform providers may process limited information in accordance with their own privacy policies and terms. RepTally does not control or assume responsibility for platform data practices.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">Payments</h2>
                        <p className="mb-4 font-medium text-white">
                            RepTally is offered as a one-time purchase.
                        </p>
                        <p>
                            All payment transactions are processed securely by Apple (App Store) or Google (Play Store). Cody Lancaster does not process, store, or have access to payment information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">Refunds</h2>
                        <p className="mb-4">
                            Refund requests are handled exclusively through the respective app store provider.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">Children’s Privacy</h2>
                        <p className="mb-4">
                            RepTally is not directed toward children under 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided information, please contact us and we will take appropriate steps to delete it.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">Policy Updates</h2>
                        <p>
                            This Privacy Policy may be updated from time to time. Any changes will be reflected by the updated “Last updated” date above. Continued use of the application after changes are posted indicates acceptance of the revised policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-white mb-4 tracking-tight">Contact</h2>
                        <p className="mb-4">
                            For questions regarding this Privacy Policy, please contact:
                        </p>
                        <a href="mailto:contact@redlegcg.com" className="text-red-500 hover:text-red-400 transition-colors inline-block border-b border-red-500/30 hover:border-red-500 pb-0.5">
                            contact@redlegcg.com
                        </a>
                    </section>
                </div>

                {/* Wordmark Footer */}
                <div className="mt-24 pt-12 border-t border-white/10 flex flex-col items-center text-center">
                    <Link to="/reptally/privacy" className="group">
                        <span className="block text-xl font-bold tracking-tight text-white group-hover:text-red-500 transition-colors">
                            RepTally
                        </span>
                        <span className="block text-xs text-gray-500 mt-2 uppercase tracking-[0.2em] group-hover:text-gray-400 transition-colors">
                            Minimalist Rep Counter
                        </span>
                    </Link>

                    <div className="mt-8 text-xs text-gray-600 space-y-2">
                        <p>redlegcg.com</p>
                        <a href="mailto:contact@redlegcg.com" className="hover:text-gray-400 transition-colors">contact@redlegcg.com</a>
                        <p>© {new Date().getFullYear()} Cody Lancaster</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RepTallyPrivacy;
