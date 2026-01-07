'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NavigationMenu() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show header if at top or scrolling up
            if (currentScrollY < 10 || currentScrollY < lastScrollY) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 10) {
                // Hide header on scroll down
                setIsVisible(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
        } else if (href === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-[60] px-6 md:px-12 py-6 flex items-center justify-between transition-all duration-300 
            ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
            bg-transparent backdrop-blur-sm`}
        >
            <Link href="/" className="flex items-center group">
                <img
                    src="/logo.svg"
                    alt="Pink Frog Films"
                    className="h-8 md:h-10 w-auto object-contain"
                />
            </Link>

            <nav className="flex items-center gap-8 md:gap-12">
                <a
                    href="/"
                    onClick={(e) => handleScroll(e, '/')}
                    className="font-mono text-xs font-bold tracking-[0.2em] text-black hover:text-frog-green transition-colors uppercase"
                >
                    Home
                </a>
                <a
                    href="#about"
                    onClick={(e) => handleScroll(e, '#about')}
                    className="font-mono text-xs font-bold tracking-[0.2em] text-black hover:text-frog-green transition-colors uppercase"
                >
                    About Us
                </a>
                <a
                    href="#contact"
                    onClick={(e) => handleScroll(e, '#contact')}
                    className="font-mono text-xs font-bold tracking-[0.2em] text-black hover:text-frog-green transition-colors uppercase"
                >
                    Contact Us
                </a>
            </nav>
        </header>
    );
}
