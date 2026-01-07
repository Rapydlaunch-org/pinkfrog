'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface TheaterSectionProps {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    videoSrc?: string; // Optional for now, can use placeholder
    posterColor: string;
    align?: 'left' | 'right';
}

export default function TheaterSection({
    id,
    title,
    subtitle,
    description,
    videoSrc,
    posterColor,
    align = 'left'
}: TheaterSectionProps) {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { amount: 0.5 });
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        if (isInView) {
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
        }
    }, [isInView]);

    return (
        <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#201D1D]">
            {/* Dynamic Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#201D1D]/50 to-[#201D1D] z-10 pointer-events-none" />

            <div className="relative w-full h-full flex flex-col items-center justify-center">

                {/* Movie Details (Moved to Top) */}
                <motion.div
                    className="absolute top-24 left-0 right-0 z-40 px-6 md:px-20 text-center pointer-events-none"
                    initial={{ opacity: 0, y: -50 }}
                    animate={isPlaying ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-2 font-bartle tracking-wide text-shadow-lg">{title}</h2>
                    <h3 className="text-lg md:text-xl text-[#2CCC4C] font-bold tracking-widest uppercase">{subtitle}</h3>
                </motion.div>

                {/* Theater Screen Container */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-[90%] md:w-[80%] aspect-video rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10 z-20 mt-20"
                >
                    {/* Video Placeholder / Content */}
                    <div className={`absolute inset-0 ${posterColor} flex items-center justify-center overflow-hidden`}>
                        {/* Simulated Video Content */}
                        <motion.div
                            className="absolute inset-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"
                            animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />

                        {isPlaying ? (
                            <div className="text-center z-10">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <p className="text-xl text-white/80 mt-4 uppercase tracking-[0.5em]">Now Playing</p>
                                </motion.div>

                                {/* Simulated Moving Elements in "Video" */}
                                <motion.div
                                    className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/20 rounded-full blur-2xl"
                                    animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                />
                            </div>
                        ) : (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                                <div className="w-20 h-20 rounded-full border-4 border-white/30 flex items-center justify-center">
                                    <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent ml-2" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Screen Glare/Reflection */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                </motion.div>

                {/* Audience Silhouette - Parallax Effect */}
                <div className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none translate-y-[10%] opacity-90">
                    <svg viewBox="0 0 1440 320" className="w-full h-auto text-black fill-current">
                        <path d="M0,320 L1440,320 L1440,200 C1400,220 1350,210 1320,180 C1290,150 1250,160 1220,190 C1180,210 1150,200 1120,170 C1090,140 1050,150 1020,180 C980,200 950,190 920,160 C890,130 850,140 820,170 C780,190 750,180 720,150 C690,120 650,130 620,160 C580,180 550,170 520,140 C490,110 450,120 420,150 C380,170 350,160 320,130 C290,100 250,110 220,140 C180,160 150,150 120,120 C90,90 50,100 0,130 Z" />
                        {/* Detailed Audience Heads */}
                        <g transform="translate(0, 100)">
                            {[...Array(20)].map((_, i) => (
                                <circle key={i} cx={50 + i * 75 + Math.random() * 20} cy={150 + Math.random() * 30} r={20 + Math.random() * 10} />
                            ))}
                        </g>
                    </svg>
                    {/* Ambient Light from Screen hitting audience */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>



            </div>
        </section>
    );
}
