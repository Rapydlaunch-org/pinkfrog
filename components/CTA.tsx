'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * 📞 CTA / Contact Section - Page 4
 * 
 * Final bold statement with dual CTAs.
 * Encourages action with confident, playful copy.
 * 
 * Features:
 * - Large headline
 * - Primary CTA (Start a project)
 * - Secondary CTA (Email us)
 * - Celebration animation from frog
 */

export default function CTA() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

    const handleStartProject = () => {
        // In production, this would open a contact form or booking system
        window.location.href = 'mailto:hello@pinkfrog.studio?subject=Let\'s Create Something Amazing';
    };

    const handleEmail = () => {
        window.location.href = 'mailto:hello@pinkfrog.studio';
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="min-h-screen flex items-center justify-center px-6 md:px-12 bg-gradient-to-br from-pink-100 via-frog-50 to-pink-50 relative overflow-hidden"
        >
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-20 w-64 h-64 bg-frog-300 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-300 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl w-full text-center relative z-10">
                {/* Main Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as const }}
                    className="text-hero md:text-massive text-foreground mb-8"
                >
                    Got a story
                    <br />
                    worth the{' '}
                    <span className="text-frog-500">leap?</span>
                </motion.h2>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-2xl md:text-4xl text-foreground/80 mb-16 max-w-3xl mx-auto leading-relaxed"
                >
                    Let's create something unforgettable together.
                    Films that move. Stories that matter.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    {/* Primary CTA */}
                    <motion.button
                        onClick={handleStartProject}
                        className="btn-primary text-lg md:text-xl px-8 md:px-12 py-4 md:py-6"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Start a project
                    </motion.button>

                    {/* Secondary CTA */}
                    <motion.button
                        onClick={handleEmail}
                        className="btn-secondary text-lg md:text-xl px-8 md:px-12 py-4 md:py-6"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Email us
                    </motion.button>
                </motion.div>

                {/* Contact info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-16 space-y-4"
                >
                    <p className="text-lg md:text-xl text-foreground/60">
                        <a
                            href="mailto:hello@pinkfrog.studio"
                            className="hover:text-frog-500 transition-colors duration-300 font-semibold"
                        >
                            hello@pinkfrog.studio
                        </a>
                    </p>
                    <p className="text-base md:text-lg text-foreground/50">
                        Based everywhere. Creating for everyone.
                    </p>
                </motion.div>

                {/* Footer tagline */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-24 pt-12 border-t border-foreground/10"
                >
                    <p className="text-xl md:text-2xl font-bold text-foreground/70">
                        🐸 Pink Frog Studio
                    </p>
                    <p className="text-base md:text-lg text-foreground/50 mt-2">
                        Stories that leap. Films worth jumping for.
                    </p>

                    {/* Copyright */}
                    <p className="text-sm text-foreground/40 mt-8">
                        © {new Date().getFullYear()} Pink Frog Studio. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
