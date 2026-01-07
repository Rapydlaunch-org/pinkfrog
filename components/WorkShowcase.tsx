'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { movies } from '@/lib/movies';
import Link from 'next/link';
import Image from 'next/image';

export default function WorkShowcase() {
    const [activeTab, setActiveTab] = useState<'Films' | 'Visuals'>('Films');
    const [modalVideo, setModalVideo] = useState<string | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    // Filter movies only if we had status filtering, but now we just show all for Films tab
    const displayMovies = movies;

    // Aggregated screenshots for the Visuals tab
    const allScreenshots = movies.map(m => m.screenshots).flat();

    return (
        <section id="work" className="py-24 px-6 md:px-12 w-full min-h-screen relative">
            <div className="max-w-[1400px] mx-auto">

                {/* Header & Tabs */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-space font-bold mb-4 tracking-tighter text-black">
                            Film & TV
                        </h2>
                        <p className="font-space text-gray-500 text-lg uppercase tracking-wide">
                            PINK FROG'S HOMEGROWN STYLE OF FILMMAKING
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => setActiveTab('Films')}
                            className={`px-8 py-3 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300 ${activeTab === 'Films' ? 'bg-[#D94F5C] text-white shadow-lg shadow-red-500/20' : 'border border-black/10 hover:border-black/30 bg-transparent text-black/60'}`}
                        >
                            Films
                        </button>
                        <button
                            onClick={() => setActiveTab('Visuals')}
                            className={`px-8 py-3 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-300 ${activeTab === 'Visuals' ? 'bg-[#D94F5C] text-white shadow-lg shadow-red-500/20' : 'border border-black/10 hover:border-black/30 bg-transparent text-black/60'}`}
                        >
                            Visuals
                        </button>
                    </div>
                </div>

                {/* Content Area */}
                <div className="min-h-[60vh] flex items-center">
                    {activeTab === 'Films' && (
                        /* Horizontal Scroll Carousel for Films */
                        <div className="flex gap-8 overflow-x-auto pb-16 snap-x hide-scrollbar w-full">
                            {displayMovies.map((movie) => (
                                <div key={movie.id} className="group relative flex flex-col gap-6 min-w-[85vw] md:min-w-[400px] snap-center">
                                    {/* Poster Card */}
                                    <div className="relative aspect-[9/14] w-full overflow-hidden rounded-[32px] bg-black shadow-2xl">
                                        <Image
                                            src={movie.image}
                                            alt={movie.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-40"
                                        />

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <h3 className="text-3xl font-space font-black text-white text-center leading-none uppercase mb-4 drop-shadow-lg">
                                                {movie.title}
                                            </h3>

                                            <div className="flex flex-col w-full gap-3 px-4">
                                                <button
                                                    onClick={() => setModalVideo(movie.video)}
                                                    className="w-full py-4 bg-white text-black font-mono text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors rounded-lg flex items-center justify-center gap-2"
                                                >
                                                    <span className="text-[10px]">▶</span> WATCH TRAILER
                                                </button>

                                                <Link
                                                    href={`/movies/${movie.slug}`}
                                                    className="w-full py-4 border border-white/50 text-white font-mono text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white/10 hover:border-white transition-all rounded-lg flex items-center justify-center"
                                                >
                                                    KNOW MORE
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Title Below */}
                                    <div className="px-2">
                                        <h4 className="font-space font-black text-2xl uppercase tracking-tight text-frog-green mb-2">
                                            {movie.title}
                                        </h4>
                                        <span className="font-mono text-[10px] text-gray-400 uppercase tracking-[0.2em]">
                                            {movie.category} • {movie.year}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {activeTab === 'Visuals' && (
                        /* Scrollable Visuals Gallery */
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                            {allScreenshots.map((shot, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative aspect-video rounded-2xl overflow-hidden group cursor-zoom-in shadow-lg"
                                    onClick={() => setSelectedImage(shot)}
                                >
                                    <Image
                                        src={shot}
                                        alt={`Visual ${index + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <span className="font-mono text-xs text-white tracking-widest uppercase border border-white/30 px-4 py-2 rounded-full backdrop-blur-md">View Full</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {modalVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setModalVideo(null)}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
                    >
                        <div className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl relative">
                            <button className="absolute top-4 right-4 text-white hover:text-frog-green z-10 font-bold" onClick={() => setModalVideo(null)}>✕ CLOSE</button>
                            <iframe
                                src={modalVideo}
                                className="w-full h-full"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Image Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
                    >
                        <div className="relative w-full max-w-7xl max-h-[90vh] aspect-video">
                            <Image
                                src={selectedImage}
                                alt="Full Screen"
                                fill
                                className="object-contain"
                            />
                            <button className="absolute top-4 right-4 text-white hover:text-frog-green z-10 font-bold text-xl" onClick={() => setSelectedImage(null)}>✕</button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
