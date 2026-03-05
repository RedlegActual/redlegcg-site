import React from 'react';
import { Link } from 'react-router-dom';

const RepTallySupport: React.FC = () => {
    return (
        <div className="min-h-screen bg-black pt-32 pb-24 px-6 relative overflow-hidden">
            {/* Subtle Background Red Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-3xl mx-auto relative z-10">

                {/* Header */}
                <div className="mb-16">
                    <Link to="/reptally" className="inline-flex items-center text-red-500 hover:text-red-400 font-bold text-sm tracking-widest uppercase mb-8 transition-colors">
                        <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to RepTally
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <img src="/assets/reptally-tallyicon.svg" alt="RepTally Icon" className="w-12 h-12 md:w-16 md:h-16 object-contain brightness-0 invert" />
                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">App Support</h1>
                    </div>
                    <p className="text-gray-400 text-lg">
                        Direct assistance for any issues or questions regarding the RepTally application.
                    </p>
                </div>

                {/* Support Content */}
                <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/5 space-y-12">

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Our Commitment</h2>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            RepTally was built with precision and intent to serve its users reliably. If the app is not functioning as intended, or if you encounter any issues whatsoever, we operate in good faith to resolve them immediately. Your operational trust is our primary concern.
                        </p>
                    </section>

                    <section>
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                Direct Contact
                            </h2>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Point of Contact</p>
                                    <p className="text-lg text-white font-medium">Cody Lancaster</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Response Time Focus</p>
                                    <p className="text-lg text-white font-medium">Within 24 Hours</p>
                                </div>
                                <div className="pt-4 border-t border-white/5">
                                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-3">Email Address</p>
                                    <a href="mailto:contact@redlegcg.com" className="inline-flex items-center justify-center w-full sm:w-auto bg-white text-black font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
                                        contact@redlegcg.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="text-sm text-gray-500 border-t border-white/5 pt-8">
                        <p>
                            When reaching out, please include your device type (iOS/Android), the current version of the app you are running, and a brief description of the friction point. This allows us to diagnose and deploy a fix rapidly without adding unnecessary back-and-forth.
                        </p>
                    </section>

                </div>

                {/* Wordmark Footer */}
                <div className="mt-24 pt-12 border-t border-white/10 flex flex-col items-center text-center">
                    <Link to="/reptally" className="group flex flex-col items-center">
                        <img src="/assets/reptally-lockup.svg" alt="RepTally Lockup" className="w-48 h-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" />
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

export default RepTallySupport;
