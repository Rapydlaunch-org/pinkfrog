'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';


export default function Footer() {
    const [showModal, setShowModal] = useState(false);

    return (
        <footer className="bg-white text-black py-20 px-6 md:px-12 border-t border-frog-pink/10 relative overflow-hidden">
            {/* Big Green Frog Bottom Right */}
            <img
                src="/footer.svg"
                alt=""
                className="absolute -bottom-[10px] -right-[20px] w-[350px] md:w-[500px] opacity-100 pointer-events-none select-none z-0 transform "
            />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 md:mb-20">
                    {/* Brand Section */}
                    <div className="md:col-span-6">
                        <Link href="/" className="inline-block mb-8">
                            <img
                                src="/Frog.svg"
                                alt="Pink Frog Films"
                                className="h-12 md:h-20 w-auto object-contain hover:scale-105 transition-transform"
                            />
                        </Link>
                        <h2 className="text-[10vw] md:text-[4vw] leading-[0.9] font-space font-medium tracking-tighter mb-8">
                            LET'S TELL <br />
                            <span className="text-outline">YOUR STORY.</span>
                        </h2>
                        <button
                            onClick={() => setShowModal(true)}
                            className="inline-flex items-center gap-6 md:gap-8 group text-left"
                        >
                            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-frog-green/30 flex items-center justify-center group-hover:bg-frog-green group-hover:border-frog-green transition-all duration-500 overflow-hidden">
                                <motion.div
                                    className="relative z-10 flex items-center justify-center"
                                    whileHover={{ x: 5, y: -5 }}
                                >
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-frog-green group-hover:text-white transition-colors">
                                        <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </motion.div>
                                <div className="absolute inset-0 bg-frog-pink translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-20" />
                            </div>
                            <span className="font-mono text-xs md:text-sm tracking-[0.4em] uppercase text-black/40 group-hover:text-frog-green transition-colors font-bold">
                                LETS CONNECT
                            </span>
                        </button>
                    </div>

                    {/* Links Section */}
                    <div className="md:col-span-3">
                        <h3 className="font-mono text-[10px] text-frog-pink font-bold tracking-[0.3em] uppercase mb-6 md:mb-8">Navigation</h3>
                        <ul className="grid grid-cols-2 md:grid-cols-1 gap-4">
                            {[
                                { label: 'HOME', href: '#home' },
                                { label: 'WORKS', href: '#work' },
                                { label: 'ABOUT', href: '#about' },
                                { label: 'STUDIO', href: '#story' },
                                { label: 'CONTACT', href: '#contact' }
                            ].map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById(item.href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="font-space text-lg md:text-xl hover:text-frog-green transition-colors cursor-pointer"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section - Updated */}
                    <div className="md:col-span-3">
                        <h3 className="font-mono text-[10px] text-frog-green font-bold tracking-[0.3em] uppercase mb-6 md:mb-8">SOCIALS</h3>
                        <div className="flex flex-col gap-4 font-mono text-[10px] md:text-xs text-black/60">
                            {['INSTAGRAM', 'VIMEO', 'LINKEDIN'].map((social) => (
                                <a key={social} href="#" className="hover:text-frog-green transition-colors font-bold tracking-widest">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-frog-green/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div className="flex flex-col gap-2">
                        <div className="font-mono text-[8px] md:text-[10px] text-black/20 tracking-widest uppercase">
                            © 2024 PINK FROG MOTION PICTURES. ALL RIGHTS RESERVED.
                        </div>
                        <div className="font-mono text-[8px] md:text-[9px] text-black/30 tracking-widest uppercase">
                            Designed and developed by <a href="https://kalp.ltd" target="_blank" rel="noopener noreferrer" className="text-frog-green/60 hover:text-frog-pink transition-colors cursor-pointer">Kalp Intelligence (Kalp.ltd)</a>
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
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-2xl bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row min-h-[400px]"
                        >
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-6 right-6 z-20 text-white/50 hover:text-white transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>

                            {/* Left: Contact Info */}
                            <div className="w-full md:w-3/5 p-12 flex flex-col justify-center text-white relative z-10">
                                <div className="space-y-8">
                                    <div>
                                        <h3 className="font-space text-3xl font-bold mb-2">MOMITA JAISI</h3>
                                        <p className="font-mono text-frog-green tracking-widest text-sm uppercase">CEO, Pink Frog Films</p>
                                    </div>

                                    <div className="space-y-4 font-mono text-sm md:text-base text-gray-300">
                                        <a href="mailto:momitajaisi@pinkfrogfilms.in" className="flex items-center gap-3 hover:text-frog-pink transition-colors">
                                            <span className="w-8 h-[1px] bg-gray-500"></span>
                                            momitajaisi@pinkfrogfilms.in
                                        </a>
                                        <div className="flex items-center gap-3">
                                            <span className="w-8 h-[1px] bg-gray-500"></span>
                                            +91 9867992549
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Frog Illustration */}
                            <div className="w-full md:w-2/5 relative flex items-end justify-center overflow-hidden">
                                <img
                                    src="/frogfooter.svg"
                                    alt="Pink Frog"
                                    className="w-[160%] max-w-none absolute -bottom-[10%] -right-[15%] opacity-100 transform rotate-0"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </footer >
    );
}
