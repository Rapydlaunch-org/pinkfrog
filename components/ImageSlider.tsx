'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const slides = [
    // Lords of Lockdown
    {
        id: 1,
        image: '/projects/01.jpg',
        title: 'LORDS OF LOCKDOWN',
        subtitle: 'A gripping tale of resilience and humanity'
    },
    {
        id: 2,
        image: '/projects/02.jpg',
        title: 'LORDS OF LOCKDOWN',
        subtitle: 'Capturing the unseen moments of the pandemic'
    },
    {
        id: 3,
        image: '/projects/03.jpg',
        title: 'LORDS OF LOCKDOWN',
        subtitle: 'Stories that echo through silence'
    },
    {
        id: 4,
        image: '/projects/04.jpg',
        title: 'LORDS OF LOCKDOWN',
        subtitle: 'Witness the power of human connection'
    },
    {
        id: 5,
        image: '/projects/05.jpg',
        title: 'LORDS OF LOCKDOWN',
        subtitle: 'Every face tells a story of survival'
    },
    {
        id: 6,
        image: '/projects/1.jpg',
        title: 'CHINGUM',
        subtitle: 'Navigating the shadows of uncertainty'
    },
    {
        id: 7,
        image: '/projects/2.jpg',
        title: 'CHINGUM',
        subtitle: 'Hope shines brightest in the dark'
    },
    // Chingum
    {
        id: 8,
        image: '/projects/3.jpg',
        title: 'CHINGUM',
        subtitle: 'A vibrant journey of colors and emotions'
    },
    {
        id: 9,
        image: '/projects/4.jpg',
        title: 'CHINGUM',
        subtitle: 'Celebrating the spirit of youth and dreams'
    },
    {
        id: 10,
        image: '/projects/5.jpg',
        title: 'CHINGUM',
        subtitle: 'Moments that stick with you forever'
    },
    {
        id: 11,
        image: '/projects/chingum/chingum-stills-5.jpg',
        title: 'CHINGUM',
        subtitle: 'Laughter, love, and endless memories'
    },
    {
        id: 12,
        image: '/projects/chingum/chingum-stills-4.jpg',
        title: 'CHINGUM',
        subtitle: 'A cinematic treat for the soul'
    }
];

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[currentIndex].image}
                        alt={slides[currentIndex].title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
                </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end items-start px-6 md:px-12 z-10 w-full pb-32 md:pb-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`title-${currentIndex}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="text-left w-full max-w-4xl"
                    >
                        <h1 className="text-4xl md:text-6xl leading-[0.9] font-changa font-medium tracking-tighter text-white uppercase drop-shadow-lg mb-4">
                            {slides[currentIndex].title}
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 font-light font-mono tracking-wide">
                            {slides[currentIndex].subtitle}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className="group relative"
                    >
                        <div className={`w-12 h-1 transition-all duration-500 ${index === currentIndex
                            ? 'bg-frog-pink'
                            : 'bg-white/30 group-hover:bg-white/50'
                            }`} />
                    </button>
                ))}
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-4 z-20"
            >
                <span className="font-mono text-[10px] text-white/60 tracking-widest uppercase rotate-90 origin-center">
                    Scroll
                </span>
                <div className="w-[2px] h-20 bg-gradient-to-b from-frog-green via-frog-pink to-transparent" />
            </motion.div>
        </section>
    );
}
