import React from 'react';

interface PortfolioItem {
    title: string;
    status: string;
    href: string | null;
    imageSrc: string | null;
}

const portfolioItems: PortfolioItem[] = [
    { title: 'Client Project 01', status: 'Coming Soon', href: null, imageSrc: null },
    { title: 'Client Project 02', status: 'Coming Soon', href: null, imageSrc: null },
    { title: 'Client Project 03', status: 'Coming Soon', href: null, imageSrc: null },
    { title: 'Client Project 04', status: 'Coming Soon', href: null, imageSrc: null },
    { title: 'Client Project 05', status: 'Coming Soon', href: null, imageSrc: null },
    { title: 'Client Project 06', status: 'Coming Soon', href: null, imageSrc: null },
];

const PortfolioPage: React.FC = () => {
    const handleLetsBuild = () => {
        window.location.href = '/#booking-section';
    };

    return (
        <section className="min-h-screen bg-black pt-40 pb-20 px-6 font-sans">
            <div className="max-w-7xl mx-auto space-y-20">

                {/* Header Area */}
                <div className="space-y-6 max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-wider">
                        PORTFOLIO
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                        Coming soon.
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                        New builds will be published here as they ship.
                    </p>

                    {/* Primary CTA (Reused from Hero) */}
                    <div className="relative group inline-flex justify-center items-center mt-4">
                        {/* Animated Glow Ring */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-red-800 to-red-500 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

                        {/* Cosmic red glow behind button */}
                        <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-60 rounded-xl overflow-hidden">
                            <div className="absolute inset-0 animate-pulse"
                                style={{
                                    background: 'radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.4) 0%, transparent 60%)',
                                    filter: 'blur(10px)'
                                }} />
                        </div>

                        <button
                            onClick={handleLetsBuild}
                            className="relative z-10 flex items-center gap-2 bg-white text-black px-8 py-3.5 text-base font-bold hover:bg-gray-100 transition-all rounded-xl cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98] group/btn"
                        >
                            Let’s Build
                        </button>
                    </div>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-white/5 rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300"
                        >
                            {/* Thumbnail Placeholder */}
                            <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-neutral-900 to-black">
                                {/* Subtle Grid Texture */}
                                <div
                                    className="absolute inset-0 opacity-[0.03]"
                                    style={{
                                        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                                        backgroundSize: '20px 20px'
                                    }}
                                />

                                {/* Center Badge */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-500 font-medium">
                                        {item.status}
                                    </span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6 space-y-3">
                                <h3 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Client site publishing soon.
                                </p>
                                {/* Disabled View Site Affordance */}
                                <div className="pt-2">
                                    <span className="text-xs font-bold text-gray-600 cursor-not-allowed uppercase tracking-wider">
                                        View Site
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PortfolioPage;
