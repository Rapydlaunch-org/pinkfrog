'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

import GridBackground from './GridBackground';
import TechVisualizer from './TechVisualizer';

export default function StorySection() {
    return (
        <section
            id="story"
            className="w-full flex items-center justify-center px-6 md:px-12 bg-white relative overflow-hidden py-16 md:py-24"
        >
            {/* Background Glow */}
            <GridBackground />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-frog-green/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl w-full flex flex-col items-center gap-12">
                <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-start relative z-10 px-4">
                    {/* System Ready Console */}
                    <div className="console-box w-full max-w-sm">
                        <div className="flex justify-between items-center mb-4 border-b border-frog-pink/20 pb-2">
                            <span className="text-[10px] text-frog-green uppercase tracking-widest">PINK FROG OS V1.0.4</span>
                            <div className="w-2 h-2 rounded-full bg-frog-green animate-pulse"></div>
                        </div>
                        <div className="space-y-1 font-mono text-xs">
                            <div className="console-line">
                                <span className="console-label">STATUS:</span>
                                <span>SYSTEM READY</span>
                            </div>
                            <div className="console-line">
                                <span className="console-label">LOC:</span>
                                <span>NORTH EAST INDIA</span>
                            </div>
                            <div className="console-line">
                                <span className="console-label">TIME:</span>
                                <span>{new Date().toLocaleTimeString('en-US', { hour12: false })}</span>
                            </div>
                        </div>
                        <div className="mt-4 text-xs font-mono text-frog-green/50">
                            READY<span className="terminal-cursor"></span>
                        </div>
                    </div>

                    <TechVisualizer />
                </div>

                <div className="text-center w-full max-w-[1100px] mx-auto">
                    <p className="text-[5.5vw] md:text-[2.2vw] font-bold leading-[1.05] font-space tracking-tight text-black uppercase opacity-90 transition-opacity duration-500">
                        Pink Frog Films is a dynamic film studio crafting distinct, colorful narratives that leap off the screen and into the cultural conversation. We strive to capture the authentic voice of Northeast India, sharing its untold nuances with the world.  </p>
                </div>
            </div>
        </section>
    );
}
