
import React, { useEffect, useRef } from 'react';
import Wordmark from './Wordmark';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Desktop Only: Apply only when (hover: hover) and (pointer: fine)
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isDesktop) return;

    let rafId: number;
    let rect = hero.getBoundingClientRect();

    // Initialize positions
    let targetX = rect.width / 2;
    let targetY = rect.height / 3; // Start slightly higher
    let currentX = targetX;
    let currentY = targetY;
    let isHovering = false;

    const handleMouseMove = (e: MouseEvent) => {
      isHovering = true;
      // Get fresh rect to ensure accuracy
      rect = hero.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      isHovering = false;
    };

    const handleResize = () => {
      rect = hero.getBoundingClientRect();
    };

    const animate = () => {
      const maxY = rect.height - 280; // Fade height exclusion

      // Determine destination based on state
      let destX = targetX;
      let destY = targetY;

      if (!isHovering) {
        // Drift toward a rest point inside safe zone when inactive
        destX = rect.width / 2;
        destY = rect.height / 3;
      } else {
        // Clamp cursor target to safe zone when active
        destX = Math.max(0, Math.min(rect.width, targetX));
        destY = Math.max(0, Math.min(maxY, targetY));
      }

      // Adaptive Smoothing Logic
      // Calculate proximity to the bottom boundary (safe zone edge)
      const distToEdge = Math.max(0, maxY - currentY);
      const edgeThreshold = 300; // Pixel distance where slowing begins
      const proximity = Math.min(1, distToEdge / edgeThreshold); // 0 (at edge) to 1 (far away)

      // Dynamic lerp factors:
      // When NOT hovering: very slow drift (0.01)
      // When hovering: 0.1 (crisp) far from edge, dropping to 0.02 (heavy) near edge
      let lerpFactorX = isHovering ? 0.1 : 0.01;
      let lerpFactorY = isHovering ? (0.02 + (0.08 * proximity)) : 0.01;

      // Interpolate current position toward destination
      currentX += (destX - currentX) * lerpFactorX;
      currentY += (destY - currentY) * lerpFactorY;

      // Update CSS variables directly
      hero.style.setProperty('--hero-mask-x', `${currentX}px`);
      hero.style.setProperty('--hero-mask-y', `${currentY}px`);

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    // Start animation loop
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center pt-4 pb-20 overflow-hidden bg-black group/hero"
      style={{
        // Default values to prevent layout shift before JS loads or if mouse hasn't moved
        '--hero-mask-x': '50%',
        '--hero-mask-y': '50%',
      } as React.CSSProperties}
    >
      {/* Layer 1: Base Background (handled by bg-black on section) */}

      {/* Layer 2: Subtle Technical Grid */}
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Layer 3: Radial Mask Reveal of Fort Clinch */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-700 ease-out"
        style={{
          maskImage: 'radial-gradient(circle 600px at var(--hero-mask-x) var(--hero-mask-y), black 0%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(circle 600px at var(--hero-mask-x) var(--hero-mask-y), black 0%, transparent 70%)',
        }}
      >
        <img
          src="/assets/cannons.png"
          alt="Fort Clinch Background"
          className="w-full h-full object-cover grayscale opacity-30 blur-[2px] scale-105"
        />
      </div>

      {/* Teddy Style Bottom Fade */}
      <div className="absolute bottom-0 inset-x-0 h-[280px] bg-gradient-to-t from-black to-transparent pointer-events-none z-0" />

      {/* Logo */}
      <div className="mb-12 md:mb-20 relative z-10 mt-4 flex flex-col items-center">
        <h2 className="text-red-500 font-extrabold text-4xl md:text-6xl tracking-tight leading-none">
          REDLEG
        </h2>
        <span className="text-white font-semibold tracking-[0.15em] text-sm md:text-xl mt-1 md:mt-2">
          CONSULTING GROUP
        </span>
      </div>

      {/* Headlines */}
      <div className="text-center max-w-5xl px-4 md:px-6 relative z-10 transition-all duration-1000 w-full">

        <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] md:text-7xl font-bold tracking-tight mb-6 md:mb-8 opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards] leading-[1.1] md:leading-[1.1] px-2">
          <span className="text-white block md:inline">Websites Built With Precision.</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-300 to-red-500 animate-gradient-x block md:inline md:ml-3">Designed For Growth.</span>
        </h1>

        <p className="text-gray-400 text-base md:text-xl leading-relaxed max-w-2xl mx-auto mb-8 md:mb-12 opacity-0 animate-[fadeInUp_1s_ease-out_0.4s_forwards] font-light px-4">
          Veteran-led web design and systems consulting<br className="hidden md:block" /> so your business runs clearly and confidently.
        </p>

        {/* Hero Dashboard Graphic (Reduced Size) */}
        <div className="relative z-10 w-full max-w-3xl mx-auto mb-8 md:mb-0 opacity-0 animate-[fadeInUp_1s_ease-out_0.5s_forwards] scale-[0.85] md:scale-90 origin-top">
          <div className="absolute inset-0 bg-red-900/10 blur-[80px] rounded-full" />

          {/* Main Dashboard Glass Panel */}
          <div className="glass-panel w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl border border-white/10 relative z-10 overflow-hidden flex flex-col shadow-2xl group hover:border-white/20 transition-all duration-500 bg-black/40 backdrop-blur-md">

            {/* Dashboard Header */}
            <div className="h-10 border-b border-white/10 flex items-center justify-between px-6 bg-white/5">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="text-[10px] font-mono text-gray-400 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="hidden xs:inline">System Status: Active</span>
                <span className="xs:hidden">Active</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 p-4 md:p-6 flex gap-6 relative">
              {/* Background Grid */}
              <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '30px 30px' }}
              />

              {/* Left Column: Founder Block */}
              <div className="hidden md:flex flex-col gap-4 w-56 z-10">
                {/* Profile Card */}
                <div className="bg-white/5 rounded-2xl p-3 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-red-900/20 flex items-center justify-center border border-red-500/20 overflow-hidden flex-shrink-0">
                    <img
                      src="/assets/field-artillery-insignia.png"
                      alt="Redleg Icon"
                      className="w-full h-full object-contain object-center scale-125"
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="text-sm font-bold text-white leading-none">Cody Lancaster</div>
                    <div className="text-[10px] font-medium text-red-400/90 mt-1">Redleg Consulting Group</div>
                  </div>
                </div>

                {/* Status Box */}
                <div className="bg-neutral-900/50 rounded-2xl p-4 border border-white/10 flex flex-col h-full group/status hover:bg-white/5 transition-all relative overflow-hidden justify-center items-center text-center">
                  <div className="flex flex-col gap-0.5 z-10 w-full">
                    <span className="text-[10px] text-gray-500 uppercase tracking-wider mb-2">Availability</span>
                    <div className="text-xl font-bold text-white leading-none">Open</div>
                    <div className="text-[10px] text-green-400 mt-1.5">Currently Booking</div>
                  </div>
                  {/* Red Glow Background */}
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-red-900/10 blur-xl rounded-full" />
                </div>
              </div>

              {/* Right Column: Stack & Highlights */}
              <div className="flex-1 flex flex-col z-10 gap-3 md:gap-4">
                {/* Stack Row */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <div className="bg-white/5 rounded-xl p-2 md:p-3 border border-white/5 hover:border-white/10 transition-colors flex flex-col items-center text-center justify-center h-full">
                    <div className="text-gray-400 text-[8px] md:text-[10px] uppercase tracking-wider">WEBSITES</div>
                    <div className="text-xs md:text-sm font-bold text-white mt-0.5">Fast</div>
                    <div className="text-green-400 text-[8px] md:text-[10px] mt-0.5 flex items-center justify-center gap-1">
                      Built for real users
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-2 md:p-3 border border-white/5 hover:border-white/10 transition-colors flex flex-col items-center text-center justify-center h-full">
                    <div className="text-gray-400 text-[8px] md:text-[10px] uppercase tracking-wider">SYSTEMS</div>
                    <div className="text-xs md:text-sm font-bold text-white mt-0.5">Clean</div>
                    <div className="text-green-400 text-[8px] md:text-[10px] mt-0.5 flex items-center justify-center gap-1">
                      Simple to run
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5 hidden md:flex flex-col items-center text-center hover:border-white/10 transition-colors justify-center h-full">
                    <div className="text-gray-400 text-[10px] uppercase tracking-wider">AUTOMATION</div>
                    <div className="text-sm font-bold text-white mt-0.5">Practical</div>
                    <div className="text-green-400 text-[10px] mt-0.5 flex items-center justify-center gap-1">
                      Saves time, stays stable
                    </div>
                  </div>
                </div>

                {/* Highlight Panel */}
                <div className="flex-1 bg-white/5 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col group/chart hover:border-white/20 transition-all justify-center items-center p-3 md:p-4 min-h-[80px]">
                  <div className="text-center space-y-1 z-10">
                    <h3 className="text-lg md:text-2xl font-bold text-white tracking-widest leading-none">Built around your business.</h3>
                    <div className="flex items-center justify-center gap-2 text-[10px] md:text-xs text-gray-400 uppercase tracking-widest pt-1 flex-wrap">
                      <span>Understand</span>
                      <span className="text-red-500">→</span>
                      <span>Build</span>
                      <span className="text-red-500 hidden sm:inline">→</span>
                      <span className="hidden sm:inline">Improve</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent"></div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="opacity-0 animate-[fadeInUp_1s_ease-out_0.6s_forwards] relative group mt-4 md:mt-8 inline-flex justify-center items-center pb-8 md:pb-0">
          {/* Animated Glow Ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-red-800 to-red-500 rounded-xl blur-[2px] md:blur opacity-30 md:opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

          {/* Cosmic red glow behind button */}
          <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-30 md:opacity-60 rounded-xl overflow-hidden">
            <div className="absolute inset-0 animate-[cosmicShift_14s_ease-in-out_infinite]"
              style={{
                background: 'radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.4) 0%, transparent 60%)',
                filter: 'blur(10px)'
              }} />
          </div>

          <button
            onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative z-10 flex items-center gap-2 bg-white text-black px-6 py-3 md:px-8 md:py-3.5 text-base font-bold hover:bg-gray-100 transition-all rounded-xl cursor-pointer hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] md:hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98] group/btn"
          >
            Let’s Build
          </button>
        </div>
      </div>

      {/* Enhanced Breathing Horizon Glow */}
      <div className="absolute bottom-60 left-[-30%] w-[160%] h-[400px] z-0 pointer-events-none animate-[pulse_8s_ease-in-out_infinite]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(185, 28, 28, 0.2) 0%, transparent 75%)',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '50% / 100% 100% 0 0',
          filter: 'blur(40px)'
        }} />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cosmicShift {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.7;
          }
          25% {
            transform: translate(8px, -6px) scale(1.05);
            opacity: 1;
          }
          50% {
            transform: translate(-6px, 8px) scale(0.98);
            opacity: 0.6;
          }
          75% {
            transform: translate(4px, 4px) scale(1.02);
            opacity: 0.85;
          }
        }

        @keyframes cosmicButtonGlow {
          0%, 100% {
            transform: scale(1) translate(0, 0);
            opacity: 0.6;
          }
          33% {
            transform: scale(1.1) translate(3px, -3px);
            opacity: 0.8;
          }
          66% {
            transform: scale(1.05) translate(-3px, 3px);
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
