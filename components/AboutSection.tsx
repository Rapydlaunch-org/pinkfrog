'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, Download, Maximize2 } from 'lucide-react';

const posters = [
    { id: 1, src: '/projects/poster1.jpeg', alt: 'Poster 1' },
    { id: 2, src: '/projects/poster2.jpg', alt: 'Poster 2' },
    { id: 3, src: '/projects/poster3.jpeg', alt: 'Poster 3' },
    { id: 4, src: '/projects/poster4.jpg', alt: 'Poster 4' },
    { id: 5, src: '/projects/poster5.jpg', alt: 'Poster 5' },
    { id: 6, src: '/projects/poster6.jpg', alt: 'Poster 6' },
    { id: 7, src: '/projects/poster7.jpg', alt: 'Poster 7' },
    { id: 8, src: '/projects/poster8.jpg', alt: 'Poster 8' },
];

export default function AboutSection() {
    const [selectedPoster, setSelectedPoster] = useState<typeof posters[0] | null>(null);

    return (
        <section id="about" className="relative w-full text-black">

            {/* 1. Minimal Full-Screen About Intro */}
            <div className="min-h-screen w-full flex flex-col items-center justify-center relative px-6 md:px-12 py-20 overflow-hidden bg-white/50 backdrop-blur-md">
                <div className="max-w-7xl mx-auto w-full z-10 my-auto">
                    <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                        {/* LEFT: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-left"
                        >


                            <div className="space-y-6 text-base md:text-lg text-black/70 font-light leading-relaxed mb-10">
                                <p>
                                    PINK FROG FILMS IS A DYNAMIC FILM STUDIO CRAFTING DISTINCT, COLORFUL NARRATIVES THAT LEAP OFF THE SCREEN AND INTO THE CULTURAL CONVERSATION. WE STRIVE TO CAPTURE THE AUTHENTIC VOICE OF NORTHEAST INDIA, SHARING ITS UNTOLD NUANCES WITH THE WORLD.
                                </p>
                            </div>

                            <a
                                href="/mihir-and-me"
                                className="inline-block px-10 py-4 rounded-full border border-black/20 hover:bg-black hover:text-white transition-all duration-300 font-mono text-sm tracking-widest uppercase hover:scale-105"
                            >
                                Read More
                            </a>
                        </motion.div>

                        {/* RIGHT: Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-[4/5] md:aspect-square rounded-[32px] overflow-hidden shadow-2xl"
                        >
                            {/* Placeholder image from available assets */}
                            <img
                                src="/hero-slide-2.png"
                                alt="Pink Frog Team"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 2. Scrollable Posters Section */}
            <div className="py-20 border-t border-black/5 bg-black/5 backdrop-blur-sm overflow-hidden">
                <div className="w-full">
                    <h3 className="font-mono text-xs text-frog-green font-bold tracking-[0.3em] uppercase mb-8 ml-6 md:ml-12 max-w-[1600px] mx-auto">
                        FEATURED POSTERS
                    </h3>

                    <div className="relative w-full overflow-hidden">
                        <motion.div
                            className="flex gap-8 w-max"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 30,
                            }}
                            whileHover={{ animationPlayState: "paused" }}
                        >
                            {[...posters, ...posters].map((poster, i) => (
                                <motion.div
                                    key={`${poster.id}-${i}`}
                                    className="relative group w-[280px] md:w-[360px] aspect-[2/3] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl shadow-xl border border-white/20 select-none bg-white"
                                    onClick={() => setSelectedPoster(poster)}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={poster.src}
                                        alt={poster.alt}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 text-white transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                            <Maximize2 size={32} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Poster Preview Modal */}
            <AnimatePresence>
                {selectedPoster && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPoster(null)}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
                    >
                        <button
                            onClick={() => setSelectedPoster(null)}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={32} />
                        </button>

                        <div
                            className="relative max-h-full max-w-full flexflex-col items-center"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image area
                        >
                            <motion.img
                                layoutId={`poster-${selectedPoster.id}`}
                                src={selectedPoster.src}
                                alt={selectedPoster.alt}
                                className="max-h-[85vh] max-w-full object-contain rounded-lg shadow-2xl"
                            />

                            <a
                                href={selectedPoster.src}
                                download
                                className="mt-6 mx-auto flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold font-space uppercase tracking-wider hover:scale-105 transition-transform w-fit"
                            >
                                <Download size={20} />
                                Download Poster
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>



        </section>
    );
}
