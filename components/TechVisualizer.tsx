'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function TechVisualizer() {
    const [items, setItems] = useState<{ label: string; value: string }[]>([
        { label: 'TARGET', value: 'CHINGUM' },
        { label: 'TARGET', value: 'LORDS OF LOCKDOWN' },
        { label: 'STATUS', value: 'DISTRIBUTED' },
        { label: 'RENDER', value: 'COMPLETE' },
    ]);

    return (
        <div className="w-full max-w-md border-l-2 border-frog-pink/30 pl-6 hidden md:block">
            <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] text-frog-pink uppercase tracking-widest">DATA STREAM</span>
                <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="w-1 h-3 bg-frog-pink/50"
                            style={{ opacity: 0.3 + (i * 0.3) }}
                        />
                    ))}
                </div>
            </div>

            <div className="font-mono text-[10px] text-frog-pink/70 space-y-2">
                {items.map((item, i) => (
                    <ScrambleItem key={i} label={item.label} value={item.value} delay={i * 2000} />
                ))}
            </div>

            <div className="mt-6 flex gap-4">
                <div className="flex-1">
                    <div className="text-[9px] text-frog-pink mb-1">UPLOAD</div>
                    <div className="h-1 bg-frog-pink/20 w-full overflow-hidden">
                        <motion.div
                            className="h-full bg-frog-pink"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <div className="text-[9px] text-frog-pink mb-1">ENCRYPT</div>
                    <div className="h-1 bg-frog-pink/20 w-full overflow-hidden">
                        <motion.div
                            className="h-full bg-frog-pink"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function ScrambleItem({ label, value, delay }: { label: string; value: string; delay: number }) {
    const [text, setText] = useState('------------------'.slice(0, value.length));

    useEffect(() => {
        const timeout = setTimeout(() => {
            let iterations = 0;
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@&%';

            const interval = setInterval(() => {
                setText(prev =>
                    value
                        .split('')
                        .map((letter, index) => {
                            if (index < iterations) {
                                return value[index];
                            }
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join('')
                );

                if (iterations >= value.length) {
                    clearInterval(interval);
                }

                iterations += 1 / 3;
            }, 50);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timeout);
    }, [value, delay]);

    return (
        <div className="flex justify-between items-center group">
            <span className="opacity-50 text-[9px] tracking-wider">{`> ${label}`}</span>
            <span className="text-frog-pink font-bold tracking-widest group-hover:bg-frog-pink group-hover:text-white px-1 transition-colors">
                {text}
            </span>
        </div>
    );
}
