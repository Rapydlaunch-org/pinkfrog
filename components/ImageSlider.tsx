'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const slides = [
    // Chingum
    {
        id: 1,
        image: '/projects/3.jpg',
        title: 'CHINGUM',

    },
    {
        id: 2,
        image: '/projects/01.jpg',
        title: 'LORDS OF LOCKDOWN',

    },
    {
        id: 3,
        image: '/projects/2.jpg',
        title: 'CHINGUM',

    },

    {
        id: 4,
        image: '/projects/02.jpg',
        title: 'LORDS OF LOCKDOWN',

    },
    {
        id: 5,
        image: '/projects/4.jpg',
        title: 'CHINGUM',

    },
    {
        id: 6,
        image: '/projects/03.jpg',
        title: 'LORDS OF LOCKDOWN',

    },

    {
        id: 7,
        image: '/projects/chingum/chingum-stills-5.jpg',
        title: 'CHINGUM',

    },
    {
        id: 8,
        image: '/projects/04.jpg',
        title: 'LORDS OF LOCKDOWN',

    },
    {
        id: 9,
        image: '/projects/chingum/chingum-stills-4.jpg',
        title: 'CHINGUM',

    },
    // Lords of Lockdown



    {
        id: 10,
        image: '/projects/05.jpg',
        title: 'LORDS OF LOCKDOWN',

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

            {/* Content Overlay & Navigation */}
            <div className="absolute bottom-12 left-0 right-0 px-6 md:px-12 z-20 w-full flex items-center">

                {/* Title - Left Aligned */}
                <div className="flex-1 pointer-events-none">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`title-${currentIndex}`}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="text-left pointer-events-auto"
                        >
                            <h1 className="text-4xl md:text-5xl leading-[0.9] font-changa font-medium tracking-tighter text-white uppercase drop-shadow-lg m-0">
                                {slides[currentIndex].title}
                            </h1>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Dots - Centered */}
                <div className="absolute left-1/2 -translate-x-1/2 flex gap-3 pointer-events-auto">
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

            </div>



            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-4 z-20 cursor-pointer"
                onClick={() => {
                    const postersSection = document.getElementById('featured-posters');
                    if (postersSection) {
                        postersSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
            >
                <span className="font-mono text-[10px] text-white/60 tracking-widest uppercase rotate-90 origin-center">
                    Scroll
                </span>
                <div className="w-[2px] h-20 bg-gradient-to-b from-frog-green via-frog-pink to-transparent" />
            </motion.div>
        </section>
    );
}
