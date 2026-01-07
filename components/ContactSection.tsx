'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
    return (
        <section id="contact" className="min-h-screen w-full flex items-center justify-center py-24 relative overflow-hidden">
            <div className="max-w-[1200px] w-full px-6 md:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-[12vw] md:text-[8vw] leading-[0.85] font-black font-space tracking-tighter text-black uppercase select-none">
                        SAY <span className="text-frog-green">HELLO</span>
                    </h2>
                </motion.div>

                <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-black/10 shadow-xl max-w-4xl mx-auto">
                    <form className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-2 group">
                                <label className="font-mono text-[10px] text-frog-green tracking-[0.2em] uppercase opacity-70 group-focus-within:opacity-100 transition-opacity">
                                    NAME
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full bg-transparent border-b border-black/20 pb-4 text-xl text-black placeholder-black/20 focus:outline-none focus:border-frog-green transition-colors font-space"
                                />
                            </div>

                            <div className="space-y-2 group">
                                <label className="font-mono text-[10px] text-frog-green tracking-[0.2em] uppercase opacity-70 group-focus-within:opacity-100 transition-opacity">
                                    EMAIL
                                </label>
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full bg-transparent border-b border-black/20 pb-4 text-xl text-black placeholder-black/20 focus:outline-none focus:border-frog-green transition-colors font-space"
                                />
                            </div>
                        </div>

                        <div className="space-y-2 group">
                            <label className="font-mono text-[10px] text-frog-green tracking-[0.2em] uppercase opacity-70 group-focus-within:opacity-100 transition-opacity">
                                MESSAGE
                            </label>
                            <textarea
                                rows={4}
                                placeholder="Tell us about your project..."
                                className="w-full bg-transparent border-b border-black/20 pb-4 text-xl text-black placeholder-black/20 focus:outline-none focus:border-frog-green transition-colors font-space resize-none"
                            />
                        </div>

                        <div className="flex justify-center pt-4">
                            <button type="button" className="group relative px-12 py-4 bg-black text-white rounded-full overflow-hidden font-bold font-space text-lg tracking-wide hover:scale-105 transition-transform duration-300">
                                <span className="relative z-10 font-black">SEND MESSAGE</span>
                                <div className="absolute inset-0 bg-frog-green translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                <div className="absolute top-1/4 -left-[10%] w-[40%] h-[40%] bg-frog-green/30 blur-[150px] rounded-full" />
                <div className="absolute bottom-1/4 -right-[10%] w-[40%] h-[40%] bg-frog-pink/30 blur-[150px] rounded-full" />
            </div>
        </section>
    );
}
