import React from 'react';

const Testimonials: React.FC = () => {


  return (
    <section className="py-32 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* About Section - Split Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side: Photo */}
          <div className="relative group">
            <div className="absolute inset-0 bg-red-800/20 blur-[60px] rounded-full" />
            <div className="glass-panel p-4 rounded-3xl border border-white/10 relative z-10 transform hover:scale-[1.01] transition-transform duration-500">
              <div className="aspect-[4/5] bg-neutral-900 rounded-2xl border border-white/5 overflow-hidden relative group">
                {/* Cody Lancaster Portrait */}
                <img
                  src="assets/cody-lancaster-portrait.jpg"
                  alt="Cody Lancaster"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ filter: 'saturate(0.55) brightness(0.78) contrast(1.18) grayscale(0.12) hue-rotate(-6deg)' }}
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-bl from-black/70 via-transparent to-transparent pointer-events-none z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none z-10" />

                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="inline-flex px-3 py-1 rounded-full bg-red-900/60 border border-red-500/30 backdrop-blur-md mb-3">
                    <span className="text-xs font-bold text-red-400">FOUNDER</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Cody Lancaster</h3>
                  <p className="text-white/60 text-sm">U.S. Army Veteran</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-wider mb-6">
                ABOUT REDLEG CONSULTING GROUP
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">
                "Structure matters.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">In business, it protects outcomes."</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Field artillery trained me to work with precision and discipline. I bring that same approach to building websites and digital systems for businesses. <a href="https://www.fieldartillery.org/the-story-of-the-redleg" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors underline decoration-white/20 hover:decoration-red-500/50 underline-offset-4">Redleg</a> is the traditional nickname for U.S. Army Field Artillery. The goal is simple: remove confusion, build stability, and support long-term growth.
              </p>
              <p className="text-white font-medium text-lg border-l-4 border-red-600 pl-4">
                Thoughtful systems. Built carefully.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="glass-panel p-4 rounded-xl border border-white/10">
                <div className="text-red-500 mb-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <h4 className="font-bold text-white text-sm">Systems & Site Architecture</h4>
              </div>
              <div className="glass-panel p-4 rounded-xl border border-white/10">
                <div className="text-red-500 mb-2">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h4 className="font-bold text-white text-sm">Automation That Fits</h4>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
