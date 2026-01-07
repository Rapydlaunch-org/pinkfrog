'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Home, Film, BookOpen, Clapperboard, Mail } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomMenu() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState('hero');

    const menuItems = [
        { id: 'home', label: 'Home', icon: Home, href: '/' },
        { id: 'work', label: 'Work', icon: Film, href: '/work' },
        { id: 'about', label: 'About', icon: BookOpen, href: '/about' },
        { id: 'studio', label: 'Studio', icon: Clapperboard, href: '/studio' },
        { id: 'contact', label: 'Contact', icon: Mail, href: '/contact' },
    ];

    return (
        <motion.div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
        >
            <div className="flex items-center gap-2 px-4 py-3 bg-[#201D1D]/80 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
                {menuItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.id}
                            href={item.href}
                            className={`
                                relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                                ${isActive ? 'text-[#201D1D] bg-[#2CCC4C]' : 'text-white/60 hover:text-white hover:bg-white/10'}
                            `}
                        >
                            <span className="flex items-center gap-2">
                                <item.icon size={18} />
                                <span className="hidden md:inline">{item.label}</span>
                            </span>
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-[#2CCC4C] rounded-full -z-10"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                        </Link>
                    );
                })}
            </div>
        </motion.div>
    );
}
