
import React from 'react';

const Wordmark: React.FC = () => {
    return (
        <div className="text-3xl md:text-4xl font-bold tracking-wider">
            <span className="text-white uppercase">Redleg</span>
            <span
                className="uppercase text-transparent bg-clip-text ml-1"
                style={{
                    backgroundImage: 'linear-gradient(90deg, #ff3c3c 0%, #ff7a00 40%, #ffd700 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    color: 'transparent'
                }}
            >
                CG
            </span>
        </div>
    );
};

export default Wordmark;
