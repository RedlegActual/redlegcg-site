import React from 'react';
import { Link } from 'react-router-dom';

const RepTallyHub: React.FC = () => {
    return (
        <div className="min-h-screen bg-black pt-32 pb-24 px-6 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-800/10 blur-[130px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-red-900/15 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-black/40 blur-[50px] rounded-full pointer-events-none" />

            <div className="max-w-2xl w-full relative z-10 text-center">
                {/* Logo */}
                <div className="mb-12 flex justify-center">
                    <img
                        src="/assets/reptally-tallyicon.svg"
                        alt="RepTally Logo"
                        className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-[0_0_40px_rgba(220,38,38,0.2)] brightness-0 invert"
                    />
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    RepTally Support & Privacy
                </h1>
                <p className="text-gray-400 text-lg mb-12 max-w-lg mx-auto">
                    Access important information regarding your RepTally data and reach out for assistance.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    <Link
                        to="/reptally/privacy"
                        className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all group flex flex-col h-full items-center text-center justify-center cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-red-500/10 transition-colors">
                            <svg className="w-6 h-6 text-gray-400 group-hover:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-white mb-2">Privacy Policy</h2>
                        <p className="text-gray-400 text-sm">How we handle your data with respect and security.</p>
                    </Link>

                    <Link
                        to="/reptally/support"
                        className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all group flex flex-col h-full items-center text-center justify-center cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-red-500/10 transition-colors">
                            <svg className="w-6 h-6 text-gray-400 group-hover:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </div>
                        <h2 className="text-xl font-bold text-white mb-2">App Support</h2>
                        <p className="text-gray-400 text-sm">Direct assistance for any issues or questions.</p>
                    </Link>
                </div>

                <div className="mt-16 border-t border-white/5 pt-8">
                    <Link to="/" className="text-sm font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-widest">
                        ← Return to Redleg Consulting Group
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RepTallyHub;
