'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { movies } from '@/lib/movies';
import Link from 'next/link';
import Image from 'next/image';
import GridBackground from './GridBackground';

export default function WorkShowcase() {
    const [selectedMovieId, setSelectedMovieId] = useState(movies[0].id);
    const videoRef = useRef<HTMLVideoElement>(null);

    const selectedMovie = movies.find(m => m.id === selectedMovieId) || movies[0];

    const handleMovieSelect = (id: string) => {
        setSelectedMovieId(id);
    };

    // Auto-play video when movie changes
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));
        }
    }, [selectedMovieId]);

    return (
        <section id="work" className="w-full relative overflow-hidden flex flex-col justify-center py-12 md:py-20">
            <GridBackground />

            <div className="max-w-[1300px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-center">

                {/* Left Side: Viewer (Video or Visuals) - SYSTEM ERROR VIBE */}
                <div className="w-full lg:w-[55%] aspect-video relative">
                    {/* Outer Glitch Container */}
                    <div className="w-full h-full relative system-error-container">

                        {/* Error Border Frame */}
                        <div className="absolute inset-0 border-4 border-frog-pink z-30 pointer-events-none animate-pulse-border">
                            {/* Corner Brackets */}
                            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-yellow-400"></div>
                            <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-yellow-400"></div>
                            <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-yellow-400"></div>
                            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-yellow-400"></div>
                        </div>

                        {/* Warning Header */}
                        <div className="absolute top-0 left-0 right-0 bg-frog-pink text-white px-4 py-2 z-40 flex items-center gap-3 font-mono text-xs md:text-sm animate-glitch-header">
                            <span className="animate-pulse">⚠</span>
                            <span className="tracking-wider">SYSTEM_ERROR_0xPINKFROG</span>
                            <span className="ml-auto opacity-70">PLAYBACK_MODULE</span>
                        </div>

                        {/* Main Video Container */}
                        <div className="w-full h-full bg-black overflow-hidden relative">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`video-${selectedMovie.id}`}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-full h-full relative group"
                                >
                                    {selectedMovie.video.includes('drive.google.com') ? (
                                        <iframe
                                            src={selectedMovie.video}
                                            className="w-full h-full object-cover crt-effect"
                                            allow="autoplay; fullscreen"
                                            allowFullScreen
                                        />
                                    ) : (
                                        <video
                                            ref={videoRef}
                                            className="w-full h-full object-cover crt-effect"
                                            loop
                                            muted
                                            playsInline
                                            controls
                                        >
                                            <source src={selectedMovie.video} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video>
                                    )}

                                    {/* CRT Scan Lines Overlay */}
                                    <div className="absolute inset-0 pointer-events-none z-20 scanlines"></div>

                                    {/* Chromatic Aberration Effect */}
                                    <div className="absolute inset-0 pointer-events-none z-20 chromatic-aberration"></div>

                                    {/* VHS Tracking Lines */}
                                    <div className="absolute inset-0 pointer-events-none z-20 vhs-tracking"></div>

                                    {/* Random Glitch Overlay */}
                                    <div className="absolute inset-0 pointer-events-none z-20 glitch-overlay"></div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Bottom Status Bar */}
                            <div className="absolute bottom-0 left-0 right-0 bg-black/90 border-t-2 border-frog-pink px-4 py-2 z-40 font-mono text-xs text-green-400 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="animate-pulse">●</span>
                                    <span>REC</span>
                                    <span className="text-frog-green">|</span>
                                    <span className="text-yellow-400">{selectedMovie.title.toUpperCase()}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500">
                                    <span>[{selectedMovie.year}]</span>
                                    <span className="animate-pulse">▶</span>
                                </div>
                            </div>
                        </div>

                        {/* Flickering Vignette */}
                        <div className="absolute inset-0 pointer-events-none z-10 vignette-flicker"></div>
                    </div>

                    <style jsx>{`
                        .system-error-container {
                            filter: contrast(1.1) saturate(1.2);
                        }

                        @keyframes pulse-border {
                            0%, 100% { opacity: 1; }
                            50% { opacity: 0.6; }
                        }

                        .animate-pulse-border {
                            animation: pulse-border 2s ease-in-out infinite;
                        }

                        @keyframes glitch-header {
                            0%, 90%, 100% { transform: translateX(0); }
                            92% { transform: translateX(-2px); }
                            94% { transform: translateX(2px); }
                            96% { transform: translateX(-1px); }
                        }

                        .animate-glitch-header {
                            animation: glitch-header 5s infinite;
                        }

                        .crt-effect {
                            filter: brightness(1.1) contrast(1.2);
                        }

                        .scanlines {
                            background: repeating-linear-gradient(
                                0deg,
                                rgba(0, 0, 0, 0.15),
                                rgba(0, 0, 0, 0.15) 1px,
                                transparent 1px,
                                transparent 2px
                            );
                            animation: scanline-move 8s linear infinite;
                        }

                        @keyframes scanline-move {
                            0% { transform: translateY(0); }
                            100% { transform: translateY(100%); }
                        }

                        .chromatic-aberration {
                            background: 
                                radial-gradient(circle at 30% 50%, rgba(255, 105, 180, 0.05) 0%, transparent 50%),
                                radial-gradient(circle at 70% 50%, rgba(44, 204, 76, 0.05) 0%, transparent 50%);
                            mix-blend-mode: screen;
                        }

                        .vhs-tracking {
                            background: linear-gradient(
                                90deg,
                                transparent 0%,
                                rgba(255, 255, 255, 0.05) 50%,
                                transparent 100%
                            );
                            animation: vhs-track 3s linear infinite;
                        }

                        @keyframes vhs-track {
                            0% { transform: translateX(-100%); }
                            100% { transform: translateX(100%); }
                        }

                        .glitch-overlay {
                            animation: glitch-effect 7s infinite;
                        }

                        @keyframes glitch-effect {
                            0%, 90%, 100% {
                                background: transparent;
                            }
                            91% {
                                background: linear-gradient(
                                    90deg,
                                    rgba(255, 105, 180, 0.1) 0%,
                                    rgba(44, 204, 76, 0.1) 50%,
                                    rgba(255, 105, 180, 0.1) 100%
                                );
                                transform: translateX(2px);
                            }
                            92% {
                                background: transparent;
                                transform: translateX(-2px);
                            }
                            93% {
                                background: linear-gradient(
                                    180deg,
                                    rgba(255, 255, 0, 0.1) 0%,
                                    transparent 50%
                                );
                                transform: translateX(0);
                            }
                        }

                        .vignette-flicker {
                            background: radial-gradient(
                                ellipse at center,
                                transparent 0%,
                                rgba(0, 0, 0, 0.3) 100%
                            );
                            animation: vignette-pulse 4s ease-in-out infinite;
                        }

                        @keyframes vignette-pulse {
                            0%, 100% { opacity: 0.5; }
                            50% { opacity: 0.8; }
                        }
                    `}</style>
                </div>

                {/* Right Side: Controls & List */}
                <div className="w-full lg:w-[40%] flex flex-col items-start gap-8 md:gap-12">

                    {/* Header */}
                    <div>
                        <h2 className="text-4xl font-space font-bold tracking-tighter text-black mb-2">
                            OUR WORK
                        </h2>
                        <div className="h-1 w-20 bg-frog-pink"></div>
                    </div>

                    {/* Navigation List */}
                    <div className="flex flex-col w-full gap-6">

                        {/* Movies List */}
                        {movies.map((movie) => (
                            <button
                                key={movie.id}
                                onClick={() => handleMovieSelect(movie.id)}
                                className={`group flex items-center justify-between w-full p-4 border rounded-2xl transition-all duration-300 ${selectedMovieId === movie.id
                                    ? 'bg-black border-black text-white shadow-xl scale-105'
                                    : 'bg-white/50 border-gray-300 text-gray-500 hover:bg-white hover:border-black hover:text-black'
                                    }`}
                            >
                                <span className={`font-space font-bold text-lg md:text-xl uppercase tracking-tight`}>
                                    {movie.title}
                                </span>
                                <span className={`font-mono text-sm tracking-widest ${selectedMovieId === movie.id ? 'text-frog-green' : 'text-gray-400'
                                    }`}>
                                    {movie.year}
                                </span>
                            </button>
                        ))}

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-300 my-2"></div>

                        <Link
                            href={`/movies/${selectedMovie.slug}`}
                            className="flex items-center gap-4 text-left group text-gray-600 hover:text-black hover:translate-x-2 transition-all duration-300"
                        >
                            <span className="w-12 h-8 border border-current rounded-full flex items-center justify-center font-mono text-[10px]">
                                01
                            </span>
                            <span className="font-space font-bold text-2xl uppercase tracking-tighter">
                                FILM DETAILS
                            </span>
                        </Link>
                        <Link
                            href={`/movies/${selectedMovie.slug}#visuals`}
                            className="flex items-center gap-4 text-left group text-gray-600 hover:text-black hover:translate-x-2 transition-all duration-300"
                        >
                            <span className="w-12 h-8 border border-current rounded-full flex items-center justify-center font-mono text-[10px]">
                                02
                            </span>
                            <span className="font-space font-bold text-2xl uppercase tracking-tighter">
                                VISUALS
                            </span>
                        </Link>


                    </div>

                </div>
            </div>
        </section>
    );
}
