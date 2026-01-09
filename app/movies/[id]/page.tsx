'use client';

import { useParams, useRouter } from 'next/navigation';
import { movies, Movie } from '@/lib/movies';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function MovieDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        const found = movies.find(m => m.slug === params.id);
        if (found) {
            setMovie(found);
        } else {
            // Handle 404 cleanly or redirect
            // router.push('/'); 
        }
    }, [params.id, router]);

    // Auto-scroll to hash target (e.g., #visuals) when page loads
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            // Small delay to ensure DOM is fully rendered
            const timer = setTimeout(() => {
                const element = document.getElementById(hash.substring(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [movie]);

    if (!movie) return <div className="min-h-screen bg-black text-white flex items-center justify-center font-mono">LOADING_PROJECT_DATA...</div>;

    return (
        <main className="min-h-screen bg-[#050505] text-white selection:bg-frog-pink selection:text-white">
            {/* Header / Nav */}
            <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference">
                <Link href="/#work" className="font-mono text-xs font-bold tracking-[0.2em] hover:text-frog-green transition-colors uppercase">
                    ← BACK TO INDEX
                </Link>

                <div className="flex items-center gap-4">
                    <div className="relative group">
                        <select
                            onChange={(e) => router.push(`/movies/${e.target.value}`)}
                            value={params.id}
                            className="appearance-none bg-transparent font-space font-bold text-xl uppercase tracking-tight outline-none cursor-pointer pr-8 text-white hover:text-frog-green transition-colors text-right"
                        >
                            {movies.map(m => (
                                <option key={m.id} value={m.slug} className="bg-black text-white font-mono text-xs">
                                    {m.title}
                                </option>
                            ))}
                        </select>
                        <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-xs">▼</span>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-[80vh] w-full flex flex-col justify-end pb-24 px-6 md:px-12 border-b border-white/10">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={movie.image}
                        alt={movie.title}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="font-mono text-xs text-frog-green font-bold tracking-[0.3em] uppercase border border-frog-green/30 px-3 py-1 rounded-full">{movie.category}</span>
                        <span className="font-mono text-xs text-white/60 tracking-[0.3em] uppercase">{movie.year}</span>
                    </div>
                    <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-black font-space tracking-tighter text-white uppercase mb-8">
                        {movie.title}
                    </h1>
                </div>
            </section>

            {/* Content: Thesis & Summary */}
            <section className="py-24 px-6 md:px-12 bg-[#050505]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <span className="font-mono text-xs text-frog-pink font-bold tracking-[0.3em] uppercase block mb-6">SYNOPSIS</span>
                        <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                            {movie.summary}
                        </p>
                    </div>
                    <div>
                        <span className="font-mono text-xs text-frog-green font-bold tracking-[0.3em] uppercase block mb-6">DIRECTOR'S THESIS</span>
                        <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed font-mono border-l-2 border-frog-green/20 pl-8">
                            "{movie.thesis}"
                        </p>
                    </div>
                </div>
            </section>

            {/* Screenshots Gallery - Auto Scrolling */}
            <section id="visuals" className="py-24 border-t border-white/5 bg-[#080808] overflow-hidden">
                <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
                    <h3 className="text-3xl md:text-5xl font-space font-bold uppercase">VISUALS</h3>
                </div>

                {/* Marquee Wrapper */}
                <div className="relative w-full flex overflow-hidden group">
                    <motion.div
                        className="flex gap-8 px-4"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30, // Adjust speed here
                            repeatType: "loop"
                        }}
                        style={{ width: "max-content" }}
                        whileHover={{ animationPlayState: "paused" }} // CSS Pause is better for Framer Motion loop interruptions, but we can try simple hover logic if needed, or rely on framer motion controls. 
                    // Actually, framer motion 'animate' prop overrides CSS hover directly often. 
                    // Let's use a simpler CSS-based marquee approach or just pure Framer with a hover state handling.
                    // Ideally, for infinite loop, we duplicate the array.
                    >
                        {/* We duplicate the array to ensure smooth seamless looping */}
                        {[...movie.screenshots, ...movie.screenshots, ...movie.screenshots].map((shot, index) => (
                            <div
                                key={index}
                                className="relative flex-none w-[80vw] md:w-[40vw] aspect-video cursor-zoom-in group/item"
                                onClick={() => setSelectedImage(shot)}
                            >
                                <Image
                                    src={shot}
                                    alt={`Screenshot ${index}`}
                                    fill
                                    className="object-cover rounded-lg border border-white/10 group-hover/item:border-frog-green/50 transition-colors duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="font-mono text-xs tracking-widest uppercase border border-white/30 px-4 py-2 rounded-full backdrop-blur-md">View Full</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Hover Overlay to Pause (CSS Based Hook) */}
                    <div className="absolute inset-0 pointer-events-none group-hover:bg-transparent" />
                </div>

                {/* Note: Ideally we want the animation to pause on hover. 
                    Since Framer Motion's continuous loop is hard to pause effortlessly without controls, 
                    we can add a style tag or class to pause it. 
                */}
                <style jsx global>{`
                    .group:hover .flex {
                        animation-play-state: paused !important;
                    }
                `}</style>
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
                            <Image
                                src={selectedImage}
                                alt="Fullscreen view"
                                fill
                                className="object-contain"
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

            {/* Simple footer for this page */}
            <footer className="py-12 text-center border-t border-white/5">
                <p className="font-mono text-[10px] text-white/30 tracking-widest">© 2026 PINK FROG MOTION PICTURES</p>
            </footer>
        </main>
    );
}
