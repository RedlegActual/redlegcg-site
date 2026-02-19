import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  const isLegalPage = ['/privacy', '/terms', '/reptally/privacy'].includes(location.pathname);

  return (
    <footer className="py-20 border-t border-white/5 relative bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex flex-col items-center sm:items-start">
              <h2 className="text-red-500 font-extrabold text-2xl tracking-tight leading-none">
                REDLEG
              </h2>
              <span className="text-white font-semibold tracking-[0.15em] text-[0.6rem] mt-1">
                CONSULTING GROUP
              </span>
            </div>
            <p className="text-gray-400 max-w-sm text-center sm:text-left">
              Clear systems. Built for long-term growth.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end justify-center md:justify-end gap-4 relative">
            <span className="text-xs text-gray-500 opacity-60 pointer-events-none select-none">Proverbs 3:5–6</span>

            {/* Hidden Verse Text - Revealed on Selection */}
            <p className="hidden md:block absolute top-full right-0 mt-2 w-96 text-right text-[10px] leading-relaxed text-transparent selection:bg-white selection:text-black pointer-events-auto">
              Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.
            </p>

            {isLegalPage && (
              <a href="/" className="text-gray-400 hover:text-white transition-colors relative z-10">
                Home
              </a>
            )}
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 Redleg Consulting Group. All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-600">
            <a href="/portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/reptally/privacy" className="hover:text-white transition-colors">RepTally Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
