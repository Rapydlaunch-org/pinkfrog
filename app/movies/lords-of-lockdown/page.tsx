'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Footer from '@/components/Footer';
import NavigationMenu from '@/components/NavigationMenu';

export default function LordsOfLockdown() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <main ref={containerRef} className="bg-[#050505] min-h-screen text-white selection:bg-frog-pink selection:text-black overflow-x-hidden">
            {/* Navigation is likely global, but adding here just in case or if we need a specific one. 
            The layout.tsx already includes NavigationMenu, so we might not need to import it here if it's in layout.
            Checking layout.tsx... yes it is. So I won't include it here to avoid duplication.
        */}

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
            <section className="relative py-32 px-6 md:px-12 bg-[#050505]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
                        <div className="md:col-span-4 sticky top-32">
                            <h2 className="text-[10vw] md:text-[4vw] leading-[0.9] font-slackey text-frog-pink mb-8">
                                THE<br />TRUTH<br />UNLOCKED
                            </h2>
                            <div className="w-12 h-1 bg-frog-green mb-8" />
                            <div className="font-mono text-xs tracking-widest text-white/40 uppercase mb-2">Synopsis</div>
                            <div className="font-mono text-xs tracking-widest text-white/40 uppercase">
                                / / 2024
                            </div>
                        </div>

                        <div className="md:col-span-8">
                            <p className="font-mono text-lg md:text-2xl leading-relaxed text-white/90 mb-12">
                                When the world stood still, chaos erupted in the shadows. <span className="text-frog-green">Lords of Lockdown</span> peels back the curtain on the unprecedented events that unfolded during the global pandemic's most restrictive phase.
                            </p>
                            <p className="font-mono text-sm md:text-base leading-relaxed text-white/60 mb-8">
                                Through exclusive footage and raw, unfiltered interviews, we journey into the heart of a system pushed to its breaking point. It's not just a story of survival; it's a testament to the resilience of the human spirit when stripped of its daily freedoms. The film challenges our understanding of authority, community, and the fragile social contracts that bind us together.
                            </p>
                            <div className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm rounded-lg">
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
            <section className="relative py-32 px-6 md:px-12 bg-[#080808] border-y border-white/5">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
                        <div className="w-full md:w-1/2 relative">
                            <div className="aspect-[3/4] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
                                {/* Placeholder for Director Image if available, otherwise utilizing a styled box or reusing an asset in a creative way */}
                                <div className="w-full h-full bg-[#111] flex items-center justify-center border border-white/10 relative group">
                                    <div className="absolute inset-0 bg-[url('/bg-texture.png')] opacity-30" />
                                    <span className="font-mono text-6xl text-white/5 font-bold group-hover:text-frog-green/20 transition-colors">DIR.</span>
                                </div>
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-frog-pink" />
                        </div>

                        <div className="w-full md:w-1/2">
                            <h2 className="text-[8vw] md:text-[3.5vw] leading-[0.9] font-slackey text-white mb-12">
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

            {/* VISUALS / GALLERY */}
            <section className="relative py-32 px-6 md:px-12 bg-[#050505]">
                <div className="max-w-7xl mx-auto mb-20">
                    <h2 className="text-[10vw] md:text-[5vw] font-slackey text-transparent bg-clip-text bg-gradient-to-r from-frog-green to-white text-center mb-4">
                        VISUALS
                    </h2>
                    <div className="flex justify-center">
                        <div className="w-24 h-1 bg-frog-pink" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {/* Gallery Item 1 */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="group relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-[#111]"
                    >
                        <img src="/hero-slide-1.png" alt="Scene 1" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <span className="font-mono text-frog-green text-xs tracking-widest uppercase">Scene_01 // Isolation</span>
                        </div>
                    </motion.div>

                    {/* Gallery Item 2 - Large Center */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="group relative aspect-video md:aspect-auto md:row-span-2 overflow-hidden rounded-lg border border-white/10 bg-[#111]"
                    >
                        <img src="/locks.png" alt="Locks" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <span className="font-mono text-frog-pink text-xs tracking-widest uppercase">Key_Visual // The Lockdown</span>
                        </div>
                    </motion.div>

                    {/* Gallery Item 3 */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="group relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-[#111]"
                    >
                        <img src="/hero-slide-2.png" alt="Scene 2" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <span className="font-mono text-frog-green text-xs tracking-widest uppercase">Scene_05 // Streets</span>
                        </div>
                    </motion.div>

                    {/* Gallery Item 4 */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="group relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-[#111]"
                    >
                        <img src="/hero-slide-3.png" alt="Scene 3" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <span className="font-mono text-frog-green text-xs tracking-widest uppercase">Scene_08 // Hope</span>
                        </div>
                    </motion.div>

                    {/* Gallery Item 5 */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="group relative aspect-video overflow-hidden rounded-lg border border-white/10 bg-[#111]"
                    >
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                        >
                            <source src="/lords.mp4" type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <span className="font-mono text-frog-pink text-xs tracking-widest uppercase">Clip // Trailer</span>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* PRESS RELEASE KIT */}
            <section className="relative py-32 px-6 md:px-12 bg-[#080808] border-t border-white/5">
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

            <Footer />
        </main>
    );
}
