import React from 'react';

const GridBackground = () => (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
            className="absolute inset-0"
            style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                maskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)',
            }}
        />
        {/* Subtle Pink/Green Accents on the grid lines */}
        <div
            className="absolute inset-0 opacity-10"
            style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(44, 204, 76, 0.02) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 105, 180, 0.02) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
            }}
        />
    </div>
);

export default GridBackground;
