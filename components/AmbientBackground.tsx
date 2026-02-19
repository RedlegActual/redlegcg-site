import React from 'react';

interface AmbientBackgroundProps {
    startBelowHero?: boolean;
}

const AmbientBackground: React.FC<AmbientBackgroundProps> = ({ startBelowHero = false }) => {
    return (
        <div
            className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
            aria-hidden="true"
            style={{
                // On homepage, shift background down by 100vh so it starts after Hero.
                // On other pages, start at top (0).
                top: startBelowHero ? '100vh' : '0',
                minHeight: startBelowHero ? 'calc(100% - 100vh)' : '100%'
            }}
        >
            {/* 1. Base dark fill (in case of transparency issues) */}
            <div className="absolute inset-0 bg-black" />

            {/* 2. Faint Stars (Static - Ultra Low Opacity) */}
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: `radial-gradient(1px 1px at 20px 30px, #ffffff, rgba(0,0,0,0)),
                           radial-gradient(1px 1px at 40px 70px, #ffffff, rgba(0,0,0,0)),
                           radial-gradient(1px 1px at 50px 160px, #ffffff, rgba(0,0,0,0)),
                           radial-gradient(1.5px 1.5px at 80px 10px, #ffffff, rgba(0,0,0,0)),
                           radial-gradient(1.5px 1.5px at 90px 40px, #ffffff, rgba(0,0,0,0)),
                           radial-gradient(1px 1px at 130px 80px, #ffffff, rgba(0,0,0,0))`,
                    backgroundSize: '200px 200px'
                }}
            />

            {/* 3. Faint Grid (Red-Tinted, Large Scale) */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(220, 38, 38, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '80px 80px'
                }}
            />

            {/* 4. Slow Gradient Wash (Deep Red / Faint Gold) */}
            <div className="absolute inset-0 opacity-[0.10]">
                <div
                    className="absolute inset-0 animate-[drift_60s_ease-in-out_infinite]"
                    style={{
                        background: `radial-gradient(circle at 10% 10%, rgba(60, 10, 10, 0.4) 0%, transparent 50%),
                         radial-gradient(circle at 90% 10%, rgba(40, 30, 10, 0.2) 0%, transparent 50%),
                         radial-gradient(circle at 90% 90%, rgba(60, 10, 10, 0.4) 0%, transparent 50%),
                         radial-gradient(circle at 10% 90%, rgba(20, 0, 0, 0.4) 0%, transparent 50%)`
                    }}
                />
            </div>

            <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes drift {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
        }
      `}</style>
        </div>
    );
};

export default AmbientBackground;
