import React from 'react';

const ValueProps: React.FC = () => {
  return (
    <section className="relative overflow-hidden" id="value-props">
      {/* Background Gradient Line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-red-900/40 to-transparent hidden md:block" />

      <div className="max-w-7xl mx-auto px-6 space-y-32 py-32 relative z-10">

        {/* Section 1: Consult - Expose Structural Gaps */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-red-800/20 blur-[100px] rounded-full" />
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
              {/* Visual Representation of Operational Load */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-gray-400 text-sm tracking-wider uppercase">Operational Load</span>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    <span className="text-red-400 text-sm font-bold">Critical</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-red-500/20">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-xs">Manual Workflows</span>
                      <span className="text-red-400 text-xs">84% Load</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-red-600 w-[84%]"></div>
                    </div>
                  </div>

                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-xs">Automated Systems</span>
                      <span className="text-gray-500 text-xs">16% Capacity</span>
                    </div>
                    <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-600 w-[16%]"></div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="bg-red-900/20 p-4 rounded-xl border border-red-500/20 text-center">
                    <div className="text-2xl font-bold text-white mb-1">4</div>
                    <div className="text-[10px] text-red-300 uppercase tracking-wider">Critical Gaps</div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                    <div className="text-2xl font-bold text-gray-500 mb-1">--</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-wider">ROI Projection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/30 border border-red-500/30 text-red-500 text-xs font-bold uppercase tracking-wider">
              01. Understand
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Identify the<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">Friction.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              We look at how your business actually runs — intake, delivery, follow-up, reporting. What’s manual. What’s slow. What’s unclear. You get a clear picture of what’s in the way.
            </p>
          </div>
        </div>

        {/* Section 2: Scale - Scale Without Hiring */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-wider">
              02. Build Stability
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Increase capacity<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">without adding complexity.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Growth should not mean more chaos. We replace fragile manual processes with stable systems. Less rework. Fewer bottlenecks. Built to hold up over time.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full" />
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
              {/* Visual Representation of Scale */}
              <div className="flex flex-col gap-4">
                {/* System Status Row */}
                <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-green-900/20 border border-green-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Lead Intake System</div>
                    <div className="text-xs text-green-500">Active • Autonomous</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className="w-10 h-10 rounded-lg bg-green-900/20 border border-green-500/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">Client Onboarding</div>
                    <div className="text-xs text-green-500">Active • Autonomous</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5 opacity-50">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">...</span>
                  </div>
                  <div>
                    <div className="text-gray-400 font-medium text-sm">Review Cycle</div>
                    <div className="text-xs text-gray-600">Pending Activation</div>
                  </div>
                </div>
              </div>

              {/* Floating Status */}
              <div className="absolute -right-6 top-1/2 -translate-y-1/2 bg-black/90 backdrop-blur-xl p-4 rounded-xl border border-white/10 shadow-2xl flex items-center gap-3 animate-pulse">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                <span className="text-white text-sm font-medium tracking-wide">SYSTEMS ONLINE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Deployment - Custom Systems Architecture */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute inset-0 bg-red-900/20 blur-[100px] rounded-full" />
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative z-10 transform hover:scale-[1.02] transition-transform duration-500">
              {/* Visual Representation of Architecture */}
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] mb-1">Execution Clarity</p>
                    <h3 className="text-4xl font-bold text-white">4 Layers</h3>
                  </div>
                  <div className="text-red-400 flex items-center gap-1 text-xs font-bold bg-red-900/20 border border-red-500/20 px-3 py-1 rounded-lg">
                    PHASE 3
                  </div>
                </div>

                {/* Layer Stack Visual */}
                <div className="space-y-2 mt-4">
                  <div className="p-3 bg-neutral-900/50 rounded-lg border border-white/5 text-xs text-gray-500 flex justify-between">
                    <span>Data</span>
                    <span className="text-green-500">Verified</span>
                  </div>
                  <div className="p-3 bg-neutral-800/50 rounded-lg border border-white/5 text-xs text-gray-400 flex justify-between">
                    <span>Logic</span>
                    <span className="text-green-500">Verified</span>
                  </div>
                  <div className="p-3 bg-neutral-800 rounded-lg border border-white/10 text-sm text-gray-200 font-medium flex justify-between shadow-lg">
                    <span>Interface</span>
                    <span className="text-green-400 animate-pulse"> deploying...</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/10">
                  <div className="flex-1">
                    <div className="text-[10px] text-gray-500 uppercase">System Integrity</div>
                    <div className="text-green-400 text-sm font-bold">Verified</div>
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] text-gray-500 uppercase">Operational Stability</div>
                    <div className="text-green-400 text-sm font-bold">Compounding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-900/30 border border-red-500/30 text-red-500 text-xs font-bold uppercase tracking-wider">
              03. Implement
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Systems Built for<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">How You Actually Work.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Your website and systems should fit the way you work — not force you into a template. We build around your real workflow. Clear structure. Practical automation. Something you can run without guessing.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};


export default ValueProps;
