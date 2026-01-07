'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const FooterInsect = ({ id, x, y }: { id: number, x: number, y: number }) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 0.8, opacity: 0.2, x: [0, 10, -10, 0], y: [0, -10, 10, 0] }}
        exit={{ scale: 0, opacity: 0 }}
        className="absolute pointer-events-none z-0"
        style={{ left: x, top: y }}
    >
        <div className="w-2 h-2 bg-black/10 rounded-full relative">
            <div className="absolute -left-1 -top-0.5 w-2 h-1 bg-black/5 rounded-full rotate-45" />
            <div className="absolute -right-1 -top-0.5 w-2 h-1 bg-black/5 rounded-full -rotate-45" />
        </div>
    </motion.div>
);

const FooterJumpingFrog = ({ index, onJump, tongueTarget }: { index: number, onJump: (x: number, y: number) => void, tongueTarget: { x: number, y: number } | null }) => {
    const [isJumping, setIsJumping] = useState(false);
    const startX = (index * 20) + Math.random() * 10; // Distribute across width

    return (
        <motion.div
            initial={{ x: `${startX}%`, y: '85%' }}
            animate={{
                x: [`${startX}%`, `${startX + 5}%`, `${startX - 5}%`, `${startX}%`],
                y: ['85%', '65%', '85%', '65%', '85%']
            }}
            transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            onUpdate={(latest: any) => {
                const yVal = parseFloat(latest.y);
                const xVal = parseFloat(latest.x);
                if (yVal < 75 && !isJumping) {
                    setIsJumping(true);
                    onJump(xVal, yVal);
                } else if (yVal > 80) {
                    setIsJumping(false);
                }
            }}
            className="absolute w-12 h-12 md:w-16 md:h-16 pointer-events-none"
        >
            <div className="relative w-full h-full">
                <AnimatePresence>
                    {tongueTarget && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 40 }}
                            exit={{ height: 0 }}
                            className="absolute bg-frog-pink origin-top rounded-full"
                            style={{
                                width: '3px',
                                left: '50%',
                                top: '40%',
                                rotate: Math.atan2(tongueTarget.y - 85, tongueTarget.x - startX) * (180 / Math.PI) - 90,
                            }}
                        />
                    )}
                </AnimatePresence>
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-60">
                    <ellipse cx="50" cy="60" rx="35" ry="25" fill="#FF69B4" fillOpacity="0.4" />
                    <circle cx="30" cy="35" r="12" fill="#FF69B4" fillOpacity="0.4" />
                    <circle cx="70" cy="35" r="12" fill="#FF69B4" fillOpacity="0.4" />
                    <circle cx="30" cy="35" r="8" fill="white" fillOpacity="0.3" />
                    <circle cx="70" cy="35" r="8" fill="white" fillOpacity="0.3" />
                    <circle cx="30" cy="35" r="4" fill="#2CCC4C" fillOpacity="0.4" />
                    <circle cx="70" cy="35" r="4" fill="#2CCC4C" fillOpacity="0.4" />
                </svg>
            </div>
        </motion.div>
    );
};

export default function Footer() {
    const [insects, setInsects] = useState<{ id: number; x: number; y: number }[]>([]);
    const [tongueTargets, setTongueTargets] = useState<({ x: number; y: number } | null)[]>([null, null, null, null, null]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (insects.length < 10) {
                setInsects(prev => [...prev, {
                    id: Date.now(),
                    x: Math.random() * 100,
                    y: 20 + Math.random() * 60
                }]);
            }
        }, 1500);
        return () => clearInterval(interval);
    }, [insects.length]);

    const handleJump = (frogIndex: number, frogX: number, frogY: number) => {
        const targetInsect = insects.find(insect => {
            const dist = Math.sqrt(Math.pow(insect.x - frogX, 2) + Math.pow(insect.y - frogY, 2));
            return dist < 20;
        });

        if (targetInsect) {
            setTongueTargets(prev => {
                const next = [...prev];
                next[frogIndex] = { x: targetInsect.x, y: targetInsect.y };
                return next;
            });
            setTimeout(() => {
                setInsects(prev => prev.filter(i => i.id !== targetInsect.id));
                setTongueTargets(prev => {
                    const next = [...prev];
                    next[frogIndex] = null;
                    return next;
                });
            }, 200);
        }
    };

    return (
        <footer className="bg-white text-black py-20 px-6 md:px-12 border-t border-frog-pink/10 relative overflow-hidden">
            {/* Footer Frogs Animation Layer */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
                <AnimatePresence>
                    {insects.map(insect => (
                        <FooterInsect key={insect.id} id={insect.id} x={`${insect.x}%` as any} y={`${insect.y}%` as any} />
                    ))}
                </AnimatePresence>
                {[0, 1, 2, 3, 4].map((i) => (
                    <FooterJumpingFrog
                        key={i}
                        index={i}
                        onJump={(x, y) => handleJump(i, x, y)}
                        tongueTarget={tongueTargets[i]}
                    />
                ))}
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 md:mb-20">
                    {/* Brand Section */}
                    <div className="md:col-span-6">
                        <Link href="/" className="inline-block mb-8">
                            <img
                                src="/logo.svg"
                                alt="Pink Frog Films"
                                className="h-12 md:h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                            />
                        </Link>
                        <h2 className="text-[10vw] md:text-[4vw] leading-[0.9] font-space font-medium tracking-tighter mb-8">
                            LET'S TELL <br />
                            <span className="text-outline">YOUR STORY.</span>
                        </h2>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-6 md:gap-8 group"
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
                            <span className="font-mono text-xs md:text-sm tracking-[0.4em] uppercase text-black/40 group-hover:text-frog-green transition-colors font-bold">Start a Project</span>
                        </Link>
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

                    {/* Contact Section */}
                    <div className="md:col-span-3">
                        <h3 className="font-mono text-[10px] text-frog-green font-bold tracking-[0.3em] uppercase mb-6 md:mb-8">Contact</h3>
                        <div className="space-y-4 font-mono text-[10px] md:text-xs text-black/60">
                            <p className="font-bold">GUWAHATI, ASSAM</p>
                            <p>NORTH EAST INDIA</p>
                            <a href="mailto:hello@pinkfrog.studio" className="block hover:text-frog-pink transition-colors font-bold">HELLO@PINKFROG.STUDIO</a>
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
                    <div className="flex flex-wrap gap-6 md:gap-8">
                        {['INSTAGRAM', 'VIMEO', 'LINKEDIN'].map((social) => (
                            <a key={social} href="#" className="font-mono text-[8px] md:text-[10px] text-black/40 hover:text-frog-green tracking-widest transition-colors font-bold">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
