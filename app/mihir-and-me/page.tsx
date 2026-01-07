'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import NavigationMenu from '@/components/NavigationMenu';
import Footer from '@/components/Footer';

export default function MihirAndMePage() {
    return (
        <main className="relative bg-white text-black font-sans min-h-screen">
            <NavigationMenu />

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center pt-32 pb-20 px-6 md:px-12">
                <div className="max-w-[1400px] w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <Link href="/#about" className="font-mono text-xs text-frog-pink font-bold tracking-[0.3em] uppercase hover:text-frog-green transition-colors">
                                ← BACK
                            </Link>
                            <div className="w-12 h-[2px] bg-frog-pink/30" />
                        </div>
                        <h1 className="text-[12vw] md:text-[8vw] lg:text-[6vw] leading-[0.9] font-space font-medium tracking-tighter mb-12 text-black">
                            THE <span className="text-outline">FOUNDERS</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* Founders Content */}
            <section className="py-20 px-6 md:px-12">
                <div className="max-w-[1400px] mx-auto">
                    {/* Momita Jaisi */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32"
                    >
                        <div className="relative aspect-[3/4] bg-frog-green/5 overflow-hidden border border-frog-pink/10 shadow-[20px_20px_0px_rgba(44,204,76,0.1)]">
                            <Image
                                src="/hero-bg.png"
                                alt="Momita Jaisi"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="font-mono text-xs text-frog-green font-bold tracking-[0.3em] uppercase mb-4">CO-FOUNDER</span>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-space font-medium tracking-tighter mb-6 text-black">
                                Momita Jaisi
                            </h2>
                            <p className="text-xl md:text-2xl text-black/60 font-light leading-relaxed mb-6">
                                Formerly the Scheduler at the prestigious MAMI Film Festival, Momita brings a wealth of experience in international co-productions and festival programming.
                            </p>
                            <p className="text-xl md:text-2xl text-black/60 font-light leading-relaxed mb-6">
                                Her expertise in bridging regional cinema with global audiences has been instrumental in establishing Pink Frog Films' international presence.
                            </p>
                            <p className="text-xl md:text-2xl text-black/60 font-light leading-relaxed">
                                Momita specializes in identifying unique stories from Northeast India and crafting strategies to bring them to international film festivals and markets.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mihir Fadnavis */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                    >
                        <div className="flex flex-col justify-center order-2 lg:order-1">
                            <span className="font-mono text-xs text-frog-pink font-bold tracking-[0.3em] uppercase mb-4">CO-FOUNDER</span>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-space font-medium tracking-tighter mb-6 text-black">
                                Mihir Fadnavis
                            </h2>
                            <p className="text-xl md:text-2xl text-black/60 font-light leading-relaxed mb-6">
                                A journalist-turned-filmmaker, Mihir is known for his multi-perspective narrative style and his ability to blend gritty realism with genre elements.
                            </p>
                            <p className="text-xl md:text-2xl text-black/60 font-light leading-relaxed mb-6">
                                His background in journalism brings a documentary sensibility to his fiction work, creating narratives that feel both authentic and cinematically compelling.
                            </p>
                            <p className="text-xl md:text-2xl text-black/60 font-light leading-relaxed">
                                Mihir's vision for Pink Frog Films is to create a new cinematic language that honors the cultural richness of Northeast India while speaking to universal human experiences.
                            </p>
                        </div>
                        <div className="relative aspect-[3/4] bg-frog-pink/5 overflow-hidden border border-frog-green/10 shadow-[-20px_20px_0px_rgba(255,105,180,0.1)] order-1 lg:order-2">
                            <Image
                                src="/hero-bg.png"
                                alt="Mihir Fadnavis"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                    </motion.div>

                    {/* Vision Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-32 text-center max-w-4xl mx-auto"
                    >
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="w-12 h-[2px] bg-frog-pink/30" />
                            <span className="font-mono text-xs text-frog-green font-bold tracking-[0.3em] uppercase">
                                TOGETHER
                            </span>
                            <div className="w-12 h-[2px] bg-frog-pink/30" />
                        </div>
                        <p className="text-2xl md:text-3xl text-black/80 font-light leading-relaxed">
                            Together, Momita and Mihir have created a studio that champions immersive narratives, bridging the gap between regional authenticity and international appeal. Their complementary skills in production, storytelling, and international distribution make Pink Frog Films a unique voice in contemporary cinema.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
