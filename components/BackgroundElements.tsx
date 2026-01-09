'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import GridBackground from './GridBackground';

const Leaf = ({ delay, x }: { delay: number; x: string }) => (
    <motion.div
        initial={{ y: -100, opacity: 0, rotate: 0 }}
        animate={{
            y: ['0vh', '110vh'],
            opacity: [0, 0.2, 0.2, 0],
            rotate: [0, 180, 360, 540],
            x: ['0px', '50px', '-50px', '0px']
        }}
        transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: delay,
            ease: "linear"
        }}
        className="fixed pointer-events-none z-0"
        style={{ left: x }}
    >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C12 2 4 10 4 16C4 19.3137 6.68629 22 10 22C13.3137 22 16 19.3137 16 16C16 14 15 12 15 12L12 2Z" fill="#2CCC4C" fillOpacity="0.1" />
            <path d="M12 2L15 12" stroke="#2CCC4C" strokeOpacity="0.2" strokeWidth="1" />
        </svg>
    </motion.div>
);







const MovingLine = () => (
    <div className="absolute inset-0 pointer-events-none z-0">
        {/* Vertical Track on Right */}
        <div className="absolute right-12 top-0 h-full w-[1px] bg-black/[0.02]">
            {/* Primary Moving Line */}
            <motion.div
                className="w-full bg-frog-green shadow-[0_0_15px_rgba(44,204,76,0.2)]"
                initial={{ height: 0, top: 0 }}
                animate={{
                    height: ['0%', '30%', '0%'],
                    top: ['-10%', '110%', '110%']
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{ position: 'absolute', width: '2px', left: '-0.5px' }}
            />
            {/* Secondary Delayed Line */}
            <motion.div
                className="w-full bg-frog-pink shadow-[0_0_15px_rgba(255,105,180,0.1)]"
                initial={{ height: 0, top: 0 }}
                animate={{
                    height: ['0%', '20%', '0%'],
                    top: ['-10%', '110%', '110%']
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 5
                }}
                style={{ position: 'absolute', width: '1px', left: '0px' }}
            />
        </div>

        {/* Horizontal Scanning Line */}
        <motion.div
            className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-frog-green/10 to-transparent"
            animate={{
                top: ['-5%', '105%']
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
            }}
        />
    </div>
);

export default function BackgroundElements() {
    const [leaves, setLeaves] = useState<{ id: number; x: string; delay: number }[]>([]);

    useEffect(() => {
        const newLeaves = Array.from({ length: 12 }).map((_, i) => ({
            id: i,
            x: `${Math.random() * 100}vw`,
            delay: Math.random() * 20
        }));
        setLeaves(newLeaves);
    }, []);



    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <GridBackground />
            <MovingLine />

            {leaves.map(leaf => (
                <Leaf key={leaf.id} x={leaf.x} delay={leaf.delay} />
            ))}


        </div>
    );
}
