'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

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

const Insect = ({ id, x, y }: { id: number, x: number, y: number }) => (
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 0.8, opacity: 0.2, x: [0, 10, -10, 0], y: [0, -10, 10, 0] }}
        exit={{ scale: 0, opacity: 0 }}
        className="fixed pointer-events-none z-0"
        style={{ left: x, top: y }}
    >
        <div className="w-2 h-2 bg-black/10 rounded-full relative">
            <div className="absolute -left-1 -top-0.5 w-2 h-1 bg-black/5 rounded-full rotate-45" />
            <div className="absolute -right-1 -top-0.5 w-2 h-1 bg-black/5 rounded-full -rotate-45" />
        </div>
    </motion.div>
);

const JumpingFrog = ({ onJump, tongueTarget }: { onJump: (x: number, y: number) => void, tongueTarget: { x: number, y: number } | null }) => {
    const [isJumping, setIsJumping] = useState(false);

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            <motion.div
                initial={{ x: '-10vw', y: '85vh' }}
                animate={{
                    x: '110vw',
                    y: [
                        '85vh', '60vh', '85vh', '60vh', '85vh', '60vh', '85vh', '60vh', '85vh'
                    ]
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    repeatDelay: 1,
                    ease: "linear",
                    times: [0, 0.125, 0.25, 0.375, 0.5, 0.625, 0.75, 0.875, 1]
                }}
                onUpdate={(latest: any) => {
                    const yVal = parseFloat(latest.y);
                    if (yVal < 65 && !isJumping) {
                        setIsJumping(true);
                        onJump(parseFloat(latest.x), yVal);
                    } else if (yVal > 80) {
                        setIsJumping(false);
                    }
                }}
                className="absolute"
            >
                <div className="relative w-24 h-24">
                    {/* Tongue Strike Animation */}
                    <AnimatePresence>
                        {tongueTarget && (
                            <motion.div
                                initial={{ height: 0 }}
                                animate={{ height: 100 }}
                                exit={{ height: 0 }}
                                className="absolute bg-frog-pink origin-top rounded-full"
                                style={{
                                    width: '6px',
                                    left: '50%',
                                    top: '40%',
                                    rotate: Math.atan2(tongueTarget.y - (window.innerHeight * 0.85), tongueTarget.x - (window.innerWidth * 0.5)) * (180 / Math.PI) - 90,
                                }}
                            />
                        )}
                    </AnimatePresence>


                    <motion.img
                        src="/frog.svg"
                        alt="Jumping Frog"
                        className="w-full h-full opacity-30 object-contain"
                        style={{ filter: "drop-shadow(0px 10px 10px rgba(0,0,0,0.3))" }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

const FlatGrid = () => (
    <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none">
        <div
            className="absolute inset-0"
            style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
                maskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 95%)',
            }}
        />
        {/* Subtle Pink/Green Accents on the grid lines */}
        <div
            className="absolute inset-0 opacity-10"
            style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(44, 204, 76, 0.02) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 105, 180, 0.02) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
            }}
        />
    </div>
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
    const [insects, setInsects] = useState<{ id: number; x: number; y: number }[]>([]);
    const [leaves, setLeaves] = useState<{ id: number; x: string; delay: number }[]>([]);
    const [tongueTarget, setTongueTarget] = useState<{ x: number; y: number } | null>(null);

    useEffect(() => {
        const newLeaves = Array.from({ length: 12 }).map((_, i) => ({
            id: i,
            x: `${Math.random() * 100}vw`,
            delay: Math.random() * 20
        }));
        setLeaves(newLeaves);

        const interval = setInterval(() => {
            if (insects.length < 3) {
                setInsects(prev => [...prev, {
                    id: Date.now(),
                    x: 100 + Math.random() * (window.innerWidth - 200),
                    y: 200 + Math.random() * 400
                }]);
            }
        }, 2000);

        return () => clearInterval(interval);
    }, [insects.length]);

    const handleJump = (frogX: number, frogY: number) => {
        const actualX = (window.innerWidth * frogX / 100);
        const actualY = (window.innerHeight * frogY / 100);

        const targetInsect = insects.find(insect => {
            const dist = Math.sqrt(Math.pow(insect.x - actualX, 2) + Math.pow(insect.y - actualY, 2));
            return dist < 250;
        });

        if (targetInsect) {
            setTongueTarget({ x: targetInsect.x, y: targetInsect.y });
            setTimeout(() => {
                setInsects(prev => prev.filter(i => i.id !== targetInsect.id));
                setTongueTarget(null);
            }, 200);
        }
    };

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <FlatGrid />
            <MovingLine />

            {leaves.map(leaf => (
                <Leaf key={leaf.id} x={leaf.x} delay={leaf.delay} />
            ))}

            <AnimatePresence>
                {insects.map(insect => (
                    <Insect key={insect.id} id={insect.id} x={insect.x} y={insect.y} />
                ))}
            </AnimatePresence>

            <JumpingFrog onJump={handleJump} tongueTarget={tongueTarget} />
        </div>
    );
}
