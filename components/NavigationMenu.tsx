'use client';


import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function NavigationMenu() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false); // Close mobile menu if open
        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
        } else if (href === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const menuItems = [
        { label: 'HOME', href: '/' },
        { label: 'ABOUT US', href: '#about' },
        { label: 'CONTACT US', href: '#contact' }
    ];

    return (
        <header
            className="fixed top-0 left-0 w-full z-[60] px-6 md:px-12 py-6 flex items-center justify-between transition-all duration-300 bg-gradient-to-r from-white/90 to-black/90 backdrop-blur-md border-b border-white/5"
        >
            <Link href="/" className="flex items-center group relative z-[70]">
                <img
                    src="/logo.svg"
                    alt="Pink Frog Films"
                    className="h-8 md:h-10 w-auto object-contain"
                />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-12">
                {menuItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        onClick={(e) => handleScroll(e, item.href)}
                        className="font-mono text-xs font-bold tracking-[0.2em] text-white hover:text-frog-green transition-colors uppercase relative group"
                    >
                        {item.label}
                        <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-frog-green transition-all duration-300 group-hover:w-full" />
                    </a>
                ))}
            </nav>

            {/* Mobile Navigation Toggle */}
            <button
                className="md:hidden text-white p-2 relative z-[70] hover:text-frog-green transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: '-100%' }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-black z-[65] flex flex-col items-center justify-center md:hidden"
                    >
                        {/* Background Decor */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
                            <img src="/frogfooter.svg" className="absolute -bottom-20 -right-20 w-[80vw] rotate-[-15deg]" alt="" />
                        </div>

                        <nav className="flex flex-col items-center gap-8 relative z-10">
                            {menuItems.map((item, i) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => handleScroll(e, item.href)}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                                    className="font-space text-4xl md:text-6xl font-bold tracking-tighter text-white hover:text-frog-green hover:tracking-widest transition-all duration-300"
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                        </nav>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-12 flex flex-col items-center gap-4"
                        >
                            <div className="w-12 h-[2px] bg-frog-green/50 mb-2" />
                            <p className="font-mono text-[10px] text-white/40 tracking-[0.3em] uppercase">
                                Pink Frog Motion Pictures
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
