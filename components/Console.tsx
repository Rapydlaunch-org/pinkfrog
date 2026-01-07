'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Console() {
    const [time, setTime] = useState('');
    const [status, setStatus] = useState('SYSTEM READY');
    const [location, setLocation] = useState('NORTH EAST INDIA');

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', { hour12: false }));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 py-12 bg-transparent">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="console-box w-full md:w-[450px]"
            >
                <div className="flex justify-between items-start mb-6 border-b border-frog-pink/10 pb-4">
                    <div className="font-mono text-[10px] text-frog-green font-bold tracking-[0.2em] uppercase">
                        PINK FROG OS v1.0.4
                    </div>
                    <div className="w-2 h-2 rounded-full bg-frog-green animate-pulse" />
                </div>

                <div className="space-y-3">
                    <div className="console-line">
                        <span className="console-label">STATUS:</span>
                        <span className="text-black font-bold">{status}</span>
                    </div>
                    <div className="console-line">
                        <span className="console-label">LOC:</span>
                        <span className="text-black/80">{location}</span>
                    </div>
                    <div className="console-line">
                        <span className="console-label">TIME:</span>
                        <span className="text-black/80">{time}</span>
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-frog-pink/10">
                    <div className="flex items-center gap-3">
                        <span className="text-black/30 font-mono text-[10px] tracking-widest">READY_</span>
                        <span className="terminal-cursor" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
