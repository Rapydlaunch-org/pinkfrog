'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const PHRASES = [
    "A cinematic exploration of the untold stories.",
    "Ancient tribes and vibrant cultures of North East India.",
    "Redefining storytelling through the lens of authenticity.",
    "Bringing the spirit of the mountains to the global stage.",
    "Capturing the raw essence of tribal heritage."
];

const HEADING_PHRASES = [
    "THE NORTH",
    "THE HILLS",
    "THE TRIBES",
    "THE SPIRIT",
    "THE LEGENDS"
];

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

    const [headingIndex, setHeadingIndex] = useState(0);
    const [displayHeading, setDisplayHeading] = useState(HEADING_PHRASES[0]);
    const [isHeadingDeleting, setIsHeadingDeleting] = useState(false);

    // Subheading Typing Effect
    useEffect(() => {
        const handleTyping = () => {
            const currentPhrase = PHRASES[index];
            if (isDeleting) {
                setDisplayText(currentPhrase.substring(0, displayText.length - 1));
                setTypingSpeed(30);
            } else {
                setDisplayText(currentPhrase.substring(0, displayText.length + 1));
                setTypingSpeed(Math.random() * 50 + 50); // Variable speed for realism
            }

            if (!isDeleting && displayText === currentPhrase) {
                setTimeout(() => setIsDeleting(true), 3000);
            } else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % PHRASES.length);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, index, typingSpeed]);

    // Heading Typing Effect
    useEffect(() => {
        const handleHeadingTyping = () => {
            const currentHeading = HEADING_PHRASES[headingIndex];
            if (isHeadingDeleting) {
                setDisplayHeading(currentHeading.substring(0, displayHeading.length - 1));
            } else {
                setDisplayHeading(currentHeading.substring(0, displayHeading.length + 1));
            }

            if (!isHeadingDeleting && displayHeading === currentHeading) {
                setTimeout(() => setIsHeadingDeleting(true), 4000);
            } else if (isHeadingDeleting && displayHeading === "") {
                setIsHeadingDeleting(false);
                setHeadingIndex((prev) => (prev + 1) % HEADING_PHRASES.length);
            }
        };

        const timer = setTimeout(handleHeadingTyping, isHeadingDeleting ? 80 : 120);
        return () => clearTimeout(timer);
    }, [displayHeading, isHeadingDeleting, headingIndex]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: [0.16, 1, 0.3, 1] as const
            }
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-transparent"
        >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="Cinematic Background"
                    fill
                    className="object-cover opacity-10 grayscale"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white" />
            </div>

            <motion.div
                className="w-full max-w-[1400px] px-6 md:px-12 relative z-10 flex flex-col items-start h-screen py-32 md:py-40 justify-between"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Top Label */}
                <motion.div
                    variants={itemVariants}
                    className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-frog-green font-bold mb-8 uppercase flex items-center gap-4"
                >
                    <span className="w-16 h-[2px] bg-frog-pink" />
                    [ FEATURED PRODUCTION 2025 ]
                </motion.div>



                <div className="w-full flex flex-col md:flex-row justify-between items-end gap-8 md:gap-12 mt-auto">
                    <div className="flex flex-col items-start gap-8">
                        {/* Main Title - Smaller & Bottom Left */}
                        <motion.h1
                            className="text-4xl md:text-6xl leading-[0.9] font-space font-medium tracking-tighter text-black text-left"
                            variants={itemVariants}
                        >
                            VOICES OF
                            <br />
                            <span className="text-outline min-h-[1.1em] inline-block">
                                {displayHeading}
                                <span className="inline-block w-[2px] md:w-[4px] h-[0.8em] bg-frog-pink ml-1 md:ml-2 animate-pulse align-middle" />
                            </span>
                        </motion.h1>

                        <motion.div variants={itemVariants} className="flex flex-col items-start gap-4">
                            <div className="font-mono text-[10px] text-frog-green font-bold tracking-widest uppercase">
                                Scroll to explore
                            </div>
                            <div className="w-full md:w-[3px] h-[1px] md:h-24 bg-gradient-to-r md:bg-gradient-to-b from-frog-green via-frog-pink to-transparent" />
                        </motion.div>
                    </div>

                    <motion.div variants={itemVariants} className="max-w-md min-h-[80px] md:min-h-[100px] text-right">
                        <p className="text-base md:text-xl text-black/60 leading-relaxed font-light font-mono">
                            <span className="text-frog-green mr-2">{">"}</span>
                            {displayText}
                            <span className="inline-block w-[2px] h-[1em] bg-frog-green ml-1 animate-pulse align-middle" />
                        </p>
                    </motion.div>
                </div>
            </motion.div>

            {/* Side Labels */}
            <div className="absolute left-6 bottom-12 z-20 hidden md:block">
                <div className="font-mono text-[10px] text-frog-green/60 rotate-[-90deg] origin-left tracking-[0.5em] uppercase font-bold">
                    Pink Frog Motion Pictures
                </div>
            </div>

            <div className="absolute right-6 bottom-12 z-20 hidden md:block">
                <div className="font-mono text-[10px] text-frog-pink/60 rotate-[90deg] origin-right tracking-[0.5em] uppercase font-bold">
                    Est. 2024 / Guwahati
                </div>
            </div>

            {/* Pink/Green Glow Accents */}
            <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-frog-green/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-frog-pink/10 blur-[180px] rounded-full pointer-events-none" />
        </section>
    );
}
