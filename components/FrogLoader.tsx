'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FrogLoaderProps {
    onComplete: () => void;
}

const BOOT_LOGS = [
    "INITIALIZING PINK FROG OS...",
    "LOADING CINEMATIC ASSETS...",
    "CONNECTING TO NORTH EAST GATEWAY...",
    "MOUNTING STORY MODULES...",
    "CALIBRATING FROG VISION...",
    "SYSTEM READY."
];

export default function FrogLoader({ onComplete }: FrogLoaderProps) {
    const [progress, setProgress] = useState(0);
    const [currentLog, setCurrentLog] = useState(0);

    useEffect(() => {
        const progressTimer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressTimer);
                    setTimeout(onComplete, 1000);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        const logTimer = setInterval(() => {
            setCurrentLog((prev) => (prev < BOOT_LOGS.length - 1 ? prev + 1 : prev));
        }, 400);

        return () => {
            clearInterval(progressTimer);
            clearInterval(logTimer);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white font-mono">
            <div className="w-full max-w-md px-12">
                {/* Logo Area */}
                <div className="flex justify-center mb-12">
                    <motion.div
                        className="relative w-16 h-16"
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <div
                            className="absolute inset-0 w-full h-full"
                            style={{
                                maskImage: 'url(/Frog.svg)',
                                WebkitMaskImage: 'url(/Frog.svg)',
                                maskSize: 'contain',
                                WebkitMaskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                WebkitMaskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskPosition: 'center',
                                maskMode: 'alpha',
                                WebkitMaskMode: 'alpha',
                            } as any}
                        >
                            {/* Empty State Background */}
                            <div className="absolute inset-0 bg-gray-400 opacity-20" />

                            {/* Water Fill */}
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 bg-frog-green"
                                animate={{
                                    height: `${progress}%`,
                                }}
                                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Boot Logs */}
                <div className="h-24 mb-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentLog}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-[10px] tracking-[0.2em] text-frog-green text-center uppercase"
                        >
                            {BOOT_LOGS[currentLog]}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-[1px] bg-black/5 relative overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-frog-green"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Percentage */}
                <div className="mt-4 flex justify-between items-center">
                    <span className="text-[10px] text-black/20 tracking-widest">LOADING_SYSTEM</span>
                    <span className="text-xs text-black/60 tracking-widest">{progress}%</span>
                </div>
            </div>

            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>
        </div>
    );
}
