'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * 🌟 Stats & Social Proof Section
 * 
 * Bold stats section with playful icons and testimonial.
 * Inspired by the peach "OVER 1 MILLION" section in reference.
 */

export default function StatsSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

    return (
        <section
            ref={sectionRef}
            className="py-20 px-6 md:px-12 bg-gradient-to-br from-orange-200 via-peach-200 to-yellow-200 relative overflow-hidden"
        >
            {/* Floating Decorative Icons */}
            <motion.div
                className="absolute top-10 left-10 text-6xl"
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 15, 0],
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
                className="absolute top-20 right-20 text-7xl"
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
                🌭
            </motion.div>

            <motion.div
                className="absolute bottom-20 left-1/4 text-5xl"
                animate={{
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                🎮
            </motion.div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Main Stat */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as const }}
                >
                    <h2 className="text-mega md:text-ultra leading-none mb-4">
                        OVER 1 MILLION
                        <br />
                        <span className="text-6xl md:text-8xl">& HEALTHY</span>
                        <br />
                        <span className="text-6xl md:text-8xl">DOGS AND</span>
                    </h2>
                </motion.div>

                {/* Testimonial Card */}
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <div className="card-bold bg-white p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-start gap-6">
                            {/* Avatar */}
                            <motion.div
                                className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-4 border-black flex items-center justify-center text-5xl flex-shrink-0"
                                whileHover={{ scale: 1.1, rotate: 360 }}
                                transition={{ duration: 0.5 }}
                            >
                                👤
                            </motion.div>

                            {/* Testimonial Content */}
                            <div className="flex-1">
                                {/* Name Badge */}
                                <div className="inline-block bg-yellow-200 border-3 border-black rounded-full px-6 py-2 mb-4">
                                    <p className="font-black text-lg">
                                        Guillaume Marc ⭐⭐⭐⭐
                                    </p>
                                </div>

                                {/* Quote */}
                                <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
                                    "My 8 year old Labrador has been using Pawsome for 6 months now.
                                    His energy levels are amazing and his coat has never looked better!
                                    Highly recommend! 🐕💛"
                                </p>

                                {/* Pet Info */}
                                <div className="mt-4 flex items-center gap-3">
                                    <span className="text-4xl">🐕</span>
                                    <p className="font-semibold text-gray-600">
                                        Max, 8 year old Labrador
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Additional Stats */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    {[
                        { icon: '🏆', stat: '98%', label: 'Happy Pets' },
                        { icon: '💚', stat: '1M+', label: 'Customers' },
                        { icon: '⭐', stat: '4.9/5', label: 'Rating' }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            className="card-bold bg-white p-6 text-center"
                            whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 3 : -3 }}
                        >
                            <div className="text-6xl mb-3">{item.icon}</div>
                            <div className="text-5xl font-black text-purple-600 mb-2">{item.stat}</div>
                            <div className="text-xl font-bold text-gray-700">{item.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
