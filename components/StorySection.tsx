'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function StorySection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { amount: 0.5 });
    const [activeLine, setActiveLine] = useState(0);

    const storyLines = [
        {
            text: "Deep in the misty hills",
            highlight: false
        },
        {
            text: "Where ancient rhythms beat",
            highlight: false
        },
        {
            text: "Closer to the roots",
            highlight: false
        },
        {
            text: "Untold tales of tribes",
            highlight: false
        },
        {
            text: "Raw. Authentic. Timeless.",
            highlight: true
        },
        {
            text: "Spirit of the mountains",
            highlight: false
        }
    ];

    useEffect(() => {
        if (isInView) {
            const interval = setInterval(() => {
                setActiveLine((prev) => (prev + 1) % storyLines.length);
            }, 3000); // Change line every 3 seconds
            return () => clearInterval(interval);
        }
    }, [isInView, storyLines.length]);

    return (
        <section
            id="story"
            ref={sectionRef}
            className="min-h-screen flex items-center justify-center px-6 md:px-12 bg-transparent relative overflow-hidden border-b border-frog-pink/10"
        >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-frog-green/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl w-full text-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeLine}
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.6 }}
                        className="min-h-[150px] md:min-h-[200px] flex items-center justify-center"
                    >
                        <h2
                            className={`
                                text-[12vw] md:text-[8vw] font-medium leading-[0.9] font-space tracking-tighter
                                ${storyLines[activeLine].highlight ? 'text-outline' : 'text-black/80'}
                            `}
                        >
                            {storyLines[activeLine].text.toUpperCase()}
                        </h2>
                    </motion.div>
                </AnimatePresence>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-3 mt-12">
                    {storyLines.map((_, index) => (
                        <div
                            key={index}
                            className={`h-1 rounded-full transition-all duration-500 ${index === activeLine ? 'w-8 bg-frog-green' : 'w-2 bg-black/10'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
