'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';


export default function Footer() {
    const [showModal, setShowModal] = useState(false);

    const pathname = usePathname();
    const router = useRouter();

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');

        if (pathname === '/') {
            const elem = document.getElementById(targetId);
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth' });
            } else if (href === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            router.push(`/${href}`);
        }
    };

    return (
        <footer className="relative py-24 px-6 md:px-12 overflow-hidden bg-[#050505]">
            {/* Dynamic Mesh-style Gradient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-frog-green/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-frog-pink/20 blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
            </div>

            {/* Big Green Frog Bottom Right - Scaled and refined */}
            <motion.img
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                whileInView={{ opacity: 0.8, scale: 1, rotate: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                src="/footer.svg"
                alt=""
                className="absolute -bottom-[20px] -right-[40px] w-[400px] md:w-[650px] pointer-events-none select-none z-0 mix-blend-screen opacity-60"
            />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 mb-20">
                    {/* Brand Section */}
                    <div className="lg:col-span-7">
                        <Link href="/" className="inline-block mb-10 group">
                            <img
                                src="/Frog.svg"
                                alt="Pink Frog Films"
                                className="h-16 md:h-24 w-auto object-contain transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(44,204,76,0.5)]"
                            />
                        </Link>

                        <div className="flex flex-col gap-4 mb-2">
                            <span className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-frog-green font-bold uppercase flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-frog-pink/50" />
                                PINK FROG FILMS
                            </span>
                        </div>

                        <h2 className="text-[6vw] lg:text-[4vw] leading-[0.85] font-space font-medium tracking-tighter mb-10 text-white flex flex-wrap items-baseline gap-x-[0.3em]">
                            <span className="opacity-100 whitespace-nowrap">LET'S TELL</span>
                            <span className="text-outline whitespace-nowrap">YOUR STORY.</span>
                        </h2>

                        <button
                            onClick={() => setShowModal(true)}
                            className="group relative flex items-center gap-6 p-1 pr-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:border-frog-green/30"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-frog-green/10 flex items-center justify-center border border-frog-green/20 group-hover:scale-110 transition-transform duration-500 overflow-hidden relative">
                                <div className="absolute inset-0 bg-frog-green opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 text-frog-green group-hover:text-black transition-colors">
                                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-white/40 group-hover:text-frog-green transition-colors font-bold">
                                    COLLABORATE
                                </span>
                                <span className="font-space text-lg md:text-xl text-white">LETS CONNECT</span>
                            </div>
                        </button>
                    </div>

                    {/* Links & Socials Container */}
                    <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-12 lg:pt-16">
                        {/* Links Section */}
                        <div className="space-y-8">
                            <h3 className="font-mono text-[11px] text-frog-pink font-bold tracking-[0.4em] uppercase opacity-70">Navigation</h3>
                            <ul className="flex flex-col gap-5">
                                {[
                                    { label: 'HOME', href: '#home' },
                                    { label: 'WORKS', href: '#work' },
                                    { label: 'Posters', href: '#featured-posters' },
                                    { label: 'ABOUT', href: '#about' },

                                    { label: 'CONTACT', href: '#contact' }
                                ].map((item) => (
                                    <li key={item.label}>
                                        <a
                                            href={item.href}
                                            onClick={(e) => handleScroll(e, item.href)}
                                            className="group flex items-center gap-3 font-space text-2xl lg:text-3xl text-white/70 hover:text-white transition-all duration-300"
                                        >
                                            <span className="w-0 h-[2px] bg-frog-green group-hover:w-8 transition-all duration-300"></span>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Social Section */}
                        <div className="space-y-8">
                            <h3 className="font-mono text-[11px] text-frog-green font-bold tracking-[0.4em] uppercase opacity-70">SOCIALS</h3>
                            <div className="flex flex-col gap-6">
                                {[
                                    { name: 'INSTAGRAM', url: '#' },
                                    { name: 'VIMEO', url: '#' },
                                    { name: 'LINKEDIN', url: '#' }
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        className="group relative inline-flex flex-col"
                                    >
                                        <span className="font-mono text-sm text-white/50 group-hover:text-frog-pink transition-colors tracking-widest font-bold">
                                            {social.name}
                                        </span>
                                        <div className="h-[1px] w-12 bg-white/10 mt-1 group-hover:w-full group-hover:bg-frog-pink transition-all duration-500"></div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
                    <div className="flex flex-col gap-3">
                        <div className="font-mono text-[9px] md:text-[10px] text-white/20 tracking-[0.2em] uppercase">
                            © 2024 PINK FROG MOTION PICTURES. ALL RIGHTS RESERVED.
                        </div>
                        <div className="font-mono text-[9px] md:text-[10px] text-white/30 tracking-[0.15em] uppercase flex items-center gap-2">
                            <span>Designed and developed by</span>
                            <a href="https://kalp.ltd" target="_blank" rel="noopener noreferrer" className="text-frog-green/50 hover:text-frog-pink transition-colors border-b border-frog-green/20">
                                Kalp Intelligence
                            </a>
                        </div>
                    </div>


                </div>
            </div>

            {/* Contact Modal */}
            <AnimatePresence>
                {showModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowModal(false)}
                        className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 30, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.95, y: 30, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-2xl bg-[#0a0a0a]/80 border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] relative flex flex-col md:flex-row min-h-[450px]"
                        >
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-8 right-8 z-20 text-white/30 hover:text-white transition-all duration-300 hover:rotate-90"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {/* Left: Contact Info */}
                            <div className="w-full md:w-[65%] p-12 flex flex-col justify-center text-white relative z-10">
                                <div className="space-y-10">
                                    <div className="relative">
                                        <div className="absolute -left-4 top-0 w-1 h-full bg-frog-green/50 rounded-full" />
                                        <h3 className="font-changa text-4xl font-bold mb-1 tracking-tight">PINK FROG</h3>
                                        <p className="font-mono text-frog-green tracking-[0.2em] text-xs uppercase font-bold">Founder's Office</p>
                                    </div>

                                    <div className="space-y-6">
                                        <a href="mailto:momitajaisi@pinkfrogfilms.in" className="group flex flex-col gap-1 w-fit">
                                            <span className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase font-bold">Email Us</span>
                                            <span className="font-mono text-sm md:text-base text-white/80 group-hover:text-frog-pink transition-colors flex items-center gap-3">
                                                connect@pinkfrogfilms.in
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                                                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </a>

                                        <div className="flex flex-col gap-1 w-fit">
                                            <span className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase font-bold">Call Us</span>
                                            <span className="font-mono text-sm md:text-base text-white/80">+91 8451825813</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Frog Illustration */}
                            <div className="w-full md:w-[35%] relative flex items-end justify-center overflow-hidden bg-gradient-to-br from-frog-green/5 to-transparent">
                                <img
                                    src="/frogfooter.svg"
                                    alt="Pink Frog"
                                    className="w-[180%] max-w-none absolute -bottom-[15%] -right-[20%] opacity-90 transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </footer>
    );
}
