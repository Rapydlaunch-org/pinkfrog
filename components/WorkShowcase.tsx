'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { movies } from '@/lib/movies';
import Link from 'next/link';
import Image from 'next/image';
import GridBackground from './GridBackground';

export default function WorkShowcase() {
    const [selectedMovieId, setSelectedMovieId] = useState(movies[0].id);
    const [viewMode, setViewMode] = useState<'trailer' | 'visuals'>('trailer');
    const videoRef = useRef<HTMLVideoElement>(null);

    const selectedMovie = movies.find(m => m.id === selectedMovieId) || movies[0];

    // Reset view mode to trailer when switching movies
    const handleMovieSelect = (id: string) => {
        setSelectedMovieId(id);
        setViewMode('trailer');
    };

    // Auto-play video when movie or mode changes
    useEffect(() => {
        if (viewMode === 'trailer' && videoRef.current) {
            videoRef.current.load();
            videoRef.current.play().catch(e => console.log('Autoplay prevented:', e));
        }
    }, [selectedMovieId, viewMode]);

    return (
        <section id="work" className="w-full min-h-screen relative overflow-hidden flex flex-col justify-center py-10 md:py-0">
            <GridBackground />

            <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-6 md:gap-20 items-center justify-center h-full">

                {/* Left Side: Viewer (Video or Visuals) */}
                <div className="w-full md:w-2/3 lg:w-3/5 aspect-video relative bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                    <AnimatePresence mode="wait">
                        {viewMode === 'trailer' ? (
                            <motion.div
                                key={`video-${selectedMovie.id}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full relative group"
                            >
                                {selectedMovie.video.includes('drive.google.com') ? (
                                    <iframe
                                        src={selectedMovie.video}
                                        className="w-full h-full object-cover"
                                        allow="autoplay; fullscreen"
                                        allowFullScreen
                                    />
                                ) : (
                                    <video
                                        ref={videoRef}
                                        className="w-full h-full object-cover"
                                        loop
                                        muted
                                        playsInline
                                        controls
                                    >
                                        <source src={selectedMovie.video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                            </motion.div>
                        ) : (
                            <motion.div
                                key={`visuals-${selectedMovie.id}`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-full h-full relative bg-gray-900 grid grid-cols-2 gap-2 p-2 overflow-y-auto"
                            >
                                {selectedMovie.screenshots.slice(0, 4).map((shot, idx) => (
                                    <div key={idx} className="relative aspect-video rounded-lg overflow-hidden">
                                        <Image
                                            src={shot}
                                            alt={`Screenshot ${idx}`}
                                            fill
                                            className="object-cover hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                ))}
                                {selectedMovie.screenshots.length === 0 && (
                                    <div className="col-span-2 flex items-center justify-center text-white/50 font-mono">
                                        NO VISUALS AVAILABLE
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Right Side: Controls & List */}
                <div className="w-full md:w-1/3 lg:w-2/5 flex flex-col items-start gap-8 md:gap-12">

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

                        {/* Actions for Selected Movie */}
                        {/* <button
                            onClick={() => setViewMode('visuals')}
                            className={`flex items-center gap-4 text-left group transition-all duration-300 ${viewMode === 'visuals' ? 'text-frog-pink translate-x-4' : 'text-gray-600 hover:text-black hover:translate-x-2'
                                }`}
                        >
                            <span className="w-12 h-8 border border-current rounded-full flex items-center justify-center font-mono text-[10px]">
                                01
                            </span>
                            <span className="font-space font-bold text-2xl uppercase tracking-tighter">
                                VISUALS
                            </span>
                        </button> */}

                        <Link
                            href={`/movies/${selectedMovie.slug}`}
                            className="flex items-center gap-4 text-left group text-gray-600 hover:text-black hover:translate-x-2 transition-all duration-300"
                        >
                            <span className="w-12 h-8 border border-current rounded-full flex items-center justify-center font-mono text-[10px]">
                                02
                            </span>
                            <span className="font-space font-bold text-2xl uppercase tracking-tighter">
                                FILM DETAILS
                            </span>
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    );
}
