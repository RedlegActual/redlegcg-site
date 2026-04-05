import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white relative overflow-hidden font-sans">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-900/20 rounded-full blur-[120px] opacity-60 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-red-700/10 rounded-full blur-[150px] opacity-40"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="z-10 text-center px-6 max-w-2xl mx-auto flex flex-col items-center">
        {/* Core Content */}
        <div className="mb-8 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm inline-block shadow-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-neutral-500">
          Under Maintenance
        </h1>
        
        <p className="text-lg md:text-xl text-neutral-400 font-light mb-10 leading-relaxed">
          We are currently performing scheduled maintenance on our system to improve your experience. 
          Please check back shortly.
        </p>

        <div className="flex space-x-2 items-center text-sm font-medium text-neutral-500 uppercase tracking-widest bg-neutral-900/50 px-6 py-3 rounded-full border border-white/5 backdrop-blur-md">
          <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
          </span>
          System Updating
        </div>
      </div>
    </div>
  );
};

export default App;
