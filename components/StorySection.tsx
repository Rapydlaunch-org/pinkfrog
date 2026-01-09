'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

import GridBackground from './GridBackground';

export default function StorySection() {
    return (
        <section
            id="story"
            className="min-h-screen w-full flex items-center justify-center px-6 md:px-12 bg-white relative overflow-hidden"
        >
            {/* Background Glow */}
            <GridBackground />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-frog-green/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-7xl w-full flex flex-col items-center gap-12">
                {/* System Ready Console */}
                <div className="console-box w-full max-w-md self-start md:ml-12">
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

                <div className="text-center">
                    <p className="text-[5vw] md:text-[2.5vw] font-bold leading-[1.1] font-space tracking-tight text-black uppercase opacity-90 hover:opacity-100 transition-opacity duration-500">
                        PINK FROG FILMS IS A DYNAMIC FILM STUDIO CRAFTING DISTINCT, COLORFUL NARRATIVES THAT LEAP OFF THE SCREEN AND INTO THE CULTURAL CONVERSATION. WE STRIVE TO CAPTURE THE AUTHENTIC VOICE OF NORTHEAST INDIA, SHARING ITS UNTOLD NUANCES WITH THE WORLD.
                    </p>
                </div>
            </div>
        </section>
    );
}
