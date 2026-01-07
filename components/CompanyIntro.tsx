'use client';

import { motion } from 'framer-motion';

export default function CompanyIntro() {
    return (
        <section id="intro" className="bg-white py-24 md:py-32">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-12 h-[2px] bg-frog-pink/30" />
                        <span className="font-mono text-xs text-frog-green font-bold tracking-[0.3em] uppercase">
                            WHO WE ARE
                        </span>
                        <div className="w-12 h-[2px] bg-frog-pink/30" />
                    </div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl leading-tight font-space font-medium tracking-tight text-black mb-8">
                        Pink Frog Films is a dynamic film studio crafting distinct, colorful narratives that leap off the screen and into the cultural conversation.
                    </h2>

                    <p className="text-xl md:text-2xl text-black/60 font-light leading-relaxed">
                        We strive to capture the authentic voice of Northeast India, sharing its untold nuances with the world.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
