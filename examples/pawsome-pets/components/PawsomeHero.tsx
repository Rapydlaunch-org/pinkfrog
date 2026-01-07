'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * 🐕 Pawsome Pets Hero
 * 
 * Bold, playful hero section inspired by modern pet care brands.
 * Features:
 * - Vibrant purple gradient background
 * - Animated pet character
 * - Thought bubble with icon
 * - Bold shadow buttons
 * - Playful emoji/icon decorations
 */

export default function PawsomeHero() {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-600 via-purple-500 to-purple-700 px-6 md:px-12 py-20 flex items-center">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 text-9xl">🐾</div>
                <div className="absolute top-40 right-20 text-7xl">💛</div>
                <div className="absolute bottom-40 left-1/4 text-6xl">🦴</div>
                <div className="absolute bottom-20 right-1/3 text-8xl">🐕</div>
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as const }}
                >
                    {/* Main Headline */}
                    <motion.h1
                        className="text-mega text-white mb-6 leading-none"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        WE TAKE CARE OF OUR
                        <br />
                        <span className="text-yellow-300">BEST FRIENDS</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Your pet's a healthy gastrointestinal tract and
                        them live a longer life. You care about your
                        pet's health. We do too!
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <button className="btn-yellow inline-flex items-center gap-3">
                            <span className="text-2xl">🛒</span>
                            <span>SHOP NOW</span>
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right: Pet Image with Thought Bubble */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    {/* Thought Bubble */}
                    <motion.div
                        className="thought-bubble absolute -top-10 left-1/2 -translate-x-1/2 z-20 w-32 h-32"
                        animate={{
                            y: [0, -10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <span className="text-6xl">🦴</span>
                    </motion.div>

                    {/* Pet Image Placeholder */}
                    <motion.div
                        className="relative w-full aspect-square max-w-md mx-auto"
                        onHoverStart={() => setIsHovering(true)}
                        onHoverEnd={() => setIsHovering(false)}
                        animate={{
                            rotate: isHovering ? [0, -5, 5, 0] : 0,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                    >
                        {/* Circular Background */}
                        <div className="absolute inset-0 bg-white/20 rounded-full backdrop-blur-sm border-4 border-white/30" />

                        {/* Pet Emoji/Icon (placeholder for actual image) */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <motion.span
                                className="text-[20rem] leading-none"
                                animate={{
                                    scale: isHovering ? 1.1 : 1,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                🐶
                            </motion.span>
                        </div>
                    </motion.div>

                    {/* Curved Arrow Pointing Down */}
                    <motion.div
                        className="absolute -bottom-20 left-1/2 -translate-x-1/2"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <svg
                            width="120"
                            height="80"
                            viewBox="0 0 120 80"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 10 Q 60 60, 110 10"
                                stroke="#fbbf24"
                                strokeWidth="6"
                                fill="none"
                                strokeLinecap="round"
                            />
                            <path
                                d="M 110 10 L 100 5 M 110 10 L 105 20"
                                stroke="#fbbf24"
                                strokeWidth="6"
                                strokeLinecap="round"
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
                className="absolute top-1/4 right-10 text-6xl"
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                😊
            </motion.div>

            <motion.div
                className="absolute bottom-1/4 left-10 text-5xl"
                animate={{
                    y: [0, 15, 0],
                    rotate: [0, -10, 0],
                }}
                transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                }}
            >
                🎾
            </motion.div>
        </section>
    );
}
