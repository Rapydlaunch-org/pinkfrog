'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import NavigationMenu from '@/components/NavigationMenu';

export default function LordsOfLockdown() {
    const containerRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <main ref={containerRef} className="bg-[#050505] min-h-screen text-white selection:bg-frog-pink selection:text-black overflow-x-hidden">
            {/* Header / Nav */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference">
                <a href="/#work" className="font-mono text-xs font-bold tracking-[0.2em] hover:text-frog-green transition-colors uppercase">
                    ← BACK TO INDEX
                </a>
            </nav>


            {/* HERO SECTION */}
            <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                    >
                        <source src="/lords.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#050505]" />
                    <div className="absolute inset-0 bg-[url('/bg-texture.png')] opacity-20 mix-blend-overlay" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-4 max-w-7xl mx-auto mt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        {/* Movie Poster */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="mb-12 flex justify-center"
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 bg-frog-green/20 blur-3xl group-hover:bg-frog-green/30 transition-all duration-500" />
                                <img
                                    src="/lords-poster.jpg"
                                    alt="Lords of Lockdown Poster"
                                    className="relative w-64 md:w-80 lg:w-96 rounded-lg border-2 border-white/10 group-hover:border-frog-green/50 transition-all duration-500 shadow-2xl"
                                />
                            </div>
                        </motion.div>

                        <h1 className="text-[12vw] md:text-[8vw] leading-[0.8] font-slackey text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-6 drop-shadow-[0_0_30px_rgba(44,204,76,0.2)]">
                            LORDS OF<br />LOCKDOWN
                        </h1>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mt-12">
                            <div className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-frog-green rounded-full animate-pulse" />
                                <span className="font-mono text-xs md:text-sm tracking-[0.2em] text-frog-green uppercase">
                                    Documentary Feature
                                </span>
                            </div>
                            <span className="hidden md:block w-px h-4 bg-white/20" />
                            <div className="font-mono text-xs md:text-sm tracking-[0.2em] text-white/60 uppercase">
                                Dir. Mihir Fadnavis
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                >
                    <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase">Scroll to Explore</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-frog-green to-transparent" />
                </motion.div>
            </section>

            {/* SYNOPSIS SECTION */}
            <section className="relative py-32 px-6 md:px-12 bg-[#050505] checked-grid">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-3xl">
                            <h2 className="font-mono text-xs md:text-sm tracking-[0.2em] text-frog-green mb-12 uppercase">
                                THE<br />TRUTH<br />UNLOCKED
                            </h2>

                            <div className="space-y-8 font-mono text-sm md:text-base text-white/70">
                                <p>
                                    Through exclusive footage and raw, unfiltered interviews, we journey into the heart of a system pushed to its breaking point. It's not just a story of survival; it's a testament to the resilience of the human spirit when stripped of its daily freedoms. The film challenges our understanding of authority, community, and the fragile social contracts that bind us together.
                                </p>
                            </div>

                            <div className="mt-8 p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg">
                                <p className="font-mono text-xs text-frog-green mb-2">&gt; CRITICAL_ACCLAIM_LOG</p>
                                <p className="font-mono text-sm italic text-white/80">
                                    "A visceral, haunting, and ultimately necessary document of our times."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* DIRECTOR'S THESIS */}
            <section className="relative py-32 px-6 md:px-12 bg-[#080808] border-y border-white/5 checked-grid">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col items-center">
                        <div className="w-full max-w-3xl">
                            <h2 className="font-mono text-xs md:text-sm tracking-[0.2em] text-frog-green mb-12 uppercase">
                                DIRECTOR'S<br />THESIS
                            </h2>

                            <div className="space-y-8 font-mono text-sm md:text-base text-white/70">
                                <p>
                                    <span className="text-frog-pink font-bold text-xl mr-2">"</span>
                                    I wanted to capture the silence. Not just the physical silence of empty streets, but the psychological silence that descended upon us all.
                                </p>
                                <p>
                                    This film isn't about the virus; it's about the void it created and what rushed in to fill it. We saw the best and worst of humanity amplified in a vacuum. My goal was to document this without judgment, acting as a mirror to a society in stasis.
                                </p>
                                <p>
                                    Every frame is a question: Who are we when no one is watching? Who are we when we are alone?
                                    <span className="text-frog-pink font-bold text-xl ml-2">"</span>
                                </p>
                            </div>

                            <div className="mt-12 flex items-center gap-4">
                                <div className="h-px flex-1 bg-white/10" />
                                <span className="font-slackey text-xl text-white">Mihir Fadnavis</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PRESS RELEASE KIT - Moved before VISUALS */}
            <section className="relative py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5 checked-grid">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-[6vw] md:text-[3vw] font-slackey text-white mb-8">
                        PRESS RESOURCES
                    </h2>
                    <p className="font-mono text-white/50 mb-12 max-w-2xl mx-auto">
                        Download the official press kit, high-resolution stills, and poster art for "Lords of Lockdown".
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <button className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-frog-green hover:border-frog-green/50 transition-all duration-300">
                            <div className="absolute inset-0 w-full h-full bg-frog-green/10 group-hover:bg-frog-green/20 transition-all duration-300 translate-y-full group-hover:translate-y-0" />
                            <span className="relative font-mono font-bold text-frog-green group-hover:text-white transition-colors flex items-center gap-3">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                DOWNLOAD PRESS KIT
                            </span>
                        </button>

                        <button className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-full border border-white/20 hover:border-white/40 transition-all duration-300">
                            <span className="relative font-mono font-bold text-white/70 group-hover:text-white transition-colors">
                                VIEW TRAILER ON VIMEO
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* VISUALS / GALLERY - Auto Scrolling Marquee */}
            <section className="relative py-24 border-t border-white/5 bg-[#080808] checked-grid overflow-hidden">
                <div className="px-6 md:px-12 mb-12 flex justify-center">
                    <div className="text-center">
                        <h2 className="text-[10vw] md:text-[5vw] font-slackey text-transparent bg-clip-text bg-gradient-to-r from-frog-green to-white mb-4">
                            VISUALS
                        </h2>
                        <div className="flex justify-center">
                            <div className="w-24 h-1 bg-frog-pink" />
                        </div>
                    </div>
                </div>

                {/* Marquee Wrapper */}
                <div className="relative w-full flex overflow-hidden group">
                    <motion.div
                        className="flex gap-8 px-4"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30,
                            repeatType: "loop"
                        }}
                        style={{ width: "max-content" }}
                    >
                        {/* We duplicate the array to ensure smooth seamless looping */}
                        {[
                            { src: "/hero-slide-1.png", label: "Scene_01 // Isolation" },
                            { src: "/locks.png", label: "Key_Visual // The Lockdown" },
                            { src: "/hero-slide-2.png", label: "Scene_05 // Streets" },
                            { src: "/hero-slide-3.png", label: "Scene_08 // Hope" },
                            { src: "/hero-slide-1.png", label: "Scene_11 // Reflection" }
                        ].concat([
                            { src: "/hero-slide-1.png", label: "Scene_01 // Isolation" },
                            { src: "/locks.png", label: "Key_Visual // The Lockdown" },
                            { src: "/hero-slide-2.png", label: "Scene_05 // Streets" },
                            { src: "/hero-slide-3.png", label: "Scene_08 // Hope" },
                            { src: "/hero-slide-1.png", label: "Scene_11 // Reflection" }
                        ]).concat([
                            { src: "/hero-slide-1.png", label: "Scene_01 // Isolation" },
                            { src: "/locks.png", label: "Key_Visual // The Lockdown" },
                            { src: "/hero-slide-2.png", label: "Scene_05 // Streets" },
                            { src: "/hero-slide-3.png", label: "Scene_08 // Hope" },
                            { src: "/hero-slide-1.png", label: "Scene_11 // Reflection" }
                        ]).map((image, index) => (
                            <div
                                key={index}
                                className="relative flex-none w-[80vw] md:w-[40vw] aspect-video cursor-zoom-in group/item"
                                onClick={() => setSelectedImage(image.src)}
                            >
                                <img
                                    src={image.src}
                                    alt={image.label}
                                    className="w-full h-full object-cover rounded-lg border border-white/10 group-hover/item:border-frog-green/50 transition-colors duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="font-mono text-xs tracking-widest uppercase border border-white/30 px-4 py-2 rounded-full backdrop-blur-md">View Full</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Lightbox / Fullscreen Viewer */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.9 }}
                            className="relative max-w-[90vw] max-h-[85vh] aspect-video w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Fullscreen view"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>

                        {/* Controls */}
                        <div className="absolute top-6 right-6 flex gap-4">
                            <a
                                href={selectedImage}
                                download
                                className="px-6 py-3 bg-white/10 hover:bg-frog-green hover:text-black transition-all rounded-full font-mono text-xs tracking-widest uppercase backdrop-blur-md"
                                onClick={(e) => e.stopPropagation()}
                            >
                                Download
                            </a>
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                            >
                                ✕
                            </button>
                        </div>

                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] text-white/50 tracking-[0.3em]">
                            PRESS ESC TO CLOSE
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Simple footer matching Chingum page */}
            <footer className="py-12 text-center border-t border-white/5 bg-[#050505] checked-grid">
                <p className="font-mono text-[10px] text-white/30 tracking-widest">© 2026 PINK FROG MOTION PICTURES</p>
            </footer>

            {/* CSS for checked grid background */}
            <style jsx>{`
                .checked-grid {
                    background-image: 
                        linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
                    background-size: 40px 40px;
                }
            `}</style>
        </main>
    );
}
