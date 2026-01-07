'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

/**
 * 🎁 Subscription Benefits Section
 * 
 * Showcases subscription perks with playful cards and icons.
 * Inspired by the "SUBSCRIPTION BENEFITS" section in reference.
 */

interface Benefit {
    icon: string;
    title: string;
    description: string;
    color: string;
}

const benefits: Benefit[] = [
    {
        icon: '👍',
        title: 'Save 15% every month',
        description: 'on every product',
        color: 'bg-yellow-100'
    },
    {
        icon: '👍',
        title: 'Hassle-free',
        description: 'automated Order',
        color: 'bg-peach-100'
    },
    {
        icon: '👍',
        title: 'Easy to pause',
        description: 'or cancel anytime',
        color: 'bg-purple-100'
    },
    {
        icon: '👍',
        title: 'Free shipping',
        description: 'on all orders',
        color: 'bg-coral-100'
    }
];

export default function SubscriptionBenefits() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

    return (
        <section
            ref={sectionRef}
            className="py-20 px-6 md:px-12 bg-gradient-to-b from-white to-purple-50"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-playful md:text-mega mb-4">
                        SUBSCRIPTION
                        <br />
                        <span className="text-purple-600">BENEFITS</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
                        Join over 1 million happy pets and their humans! 🐾
                    </p>
                </motion.div>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            className={`card-bold p-8 ${benefit.color} relative overflow-hidden`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                                ease: [0.34, 1.56, 0.64, 1] as const
                            }}
                            whileHover={{
                                scale: 1.05,
                                rotate: index % 2 === 0 ? 2 : -2,
                            }}
                        >
                            {/* Icon */}
                            <motion.div
                                className="text-7xl mb-4"
                                animate={{
                                    rotate: [0, -10, 10, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.2
                                }}
                            >
                                {benefit.icon}
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-2xl font-black mb-2 text-gray-900">
                                {benefit.title}
                            </h3>

                            {/* Description */}
                            <p className="text-lg font-semibold text-gray-700">
                                {benefit.description}
                            </p>

                            {/* Decorative Corner Element */}
                            <div className="absolute -top-2 -right-2 w-12 h-12 bg-white border-4 border-black rounded-full flex items-center justify-center text-2xl">
                                ✨
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Below Benefits */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <button className="btn-fun text-xl px-12 py-6">
                        START YOUR SUBSCRIPTION
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
