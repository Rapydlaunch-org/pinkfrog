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

            <div className="relative z-10 max-w-7xl w-full text-center">
                <p className="text-[7vw] md:text-[3.5vw] font-bold leading-[1.1] font-space tracking-tight text-black uppercase opacity-90 hover:opacity-100 transition-opacity duration-500">
                    PINK FROG FILMS IS A DYNAMIC FILM STUDIO CRAFTING DISTINCT, COLORFUL NARRATIVES THAT LEAP OFF THE SCREEN AND INTO THE CULTURAL CONVERSATION. WE STRIVE TO CAPTURE THE AUTHENTIC VOICE OF NORTHEAST INDIA, SHARING ITS UNTOLD NUANCES WITH THE WORLD.
                </p>
            </div>
        </section>
    );
}
