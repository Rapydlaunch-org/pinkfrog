'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function AboutSection() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section id="about" className="relative w-full text-black">

            {/* 1. Minimal Full-Screen About Intro */}
            <div className="h-screen w-full flex flex-col items-center justify-center relative px-6 md:px-12 py-20 overflow-hidden bg-white/50 backdrop-blur-md">
                <div className="max-w-7xl mx-auto w-full z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        {/* LEFT: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-left"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="font-mono text-xs text-frog-green font-bold tracking-[0.3em] uppercase">WHO WE ARE</span>
                                <div className="w-12 h-[2px] bg-frog-green/50" />
                            </div>

                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-changa font-medium tracking-tight mb-8 leading-tight">
                                We champion immersive narratives bridging <span className="text-frog-green">authenticity</span> & <span className="text-frog-pink">innovation</span>.
                            </h2>

                            <p className="text-xl md:text-2xl text-black/60 font-light leading-relaxed mb-10">
                                Pink Frog Films is dedicated to the untold stories of North East India. From the acclaimed documentary <span className="text-black font-medium">Lords of Lockdown</span> and the horror-noir <span className="text-black font-medium">Chingum</span>, we transform local nuances into universal cinema.
                            </p>

                            <a
                                href="/mihir-and-me"
                                className="inline-block px-10 py-4 rounded-full border border-black/20 hover:bg-black hover:text-white transition-all duration-300 font-mono text-sm tracking-widest uppercase hover:scale-105"
                            >
                                Read More
                            </a>
                        </motion.div>

                        {/* RIGHT: Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative aspect-[4/5] md:aspect-square rounded-[32px] overflow-hidden shadow-2xl"
                        >
                            {/* Placeholder image from available assets */}
                            <img
                                src="/hero-slide-2.png"
                                alt="Pink Frog Team"
                                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 2. Team / Stats Section */}
            <div className="py-20 px-6 border-t border-black/5 bg-black/5 backdrop-blur-sm">
                <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
                    {[
                        { label: 'PROJECTS', value: '50+' },
                        { label: 'AWARDS', value: '12' },
                        { label: 'YEARS', value: '08' },
                        { label: 'CLIENTS', value: '30+' },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-4xl md:text-6xl font-space font-medium text-black mb-2">{stat.value}</div>
                            <div className="font-mono text-[10px] text-frog-green font-bold tracking-widest uppercase">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>



        </section>
    );
}
