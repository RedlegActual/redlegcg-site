
import React from 'react';

const CompletionPage: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-20 pb-40 px-6 bg-black">
      {/* Background Glow */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-red-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
        <div className="inline-block p-4 rounded-full bg-green-500/10 mb-8 border border-green-500/20 animate-[fadeInUp_0.5s_ease-out_forwards]">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
          Application Received
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light">
          We received your information.
        </p>

        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            What Happens Next?
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            We will review your systems and infrastructure constraints. If you fit our criteria for a partnership, we will reach out directly to schedule your audit.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default CompletionPage;
