'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function FrogAnimation() {
  const { scrollYProgress } = useScroll();

  // Move frog horizontally across the screen
  const x = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], ["5%", "85%", "10%", "90%", "20%", "80%"]);
  // Move frog vertically (jumping effect)
  const y = useTransform(scrollYProgress, (pos) => {
    // Create a series of jumps
    const jumpCount = 10;
    const jumpHeight = 50;
    return Math.abs(Math.sin(pos * Math.PI * jumpCount)) * -jumpHeight;
  });

  const rotation = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <motion.div
      className="fixed bottom-12 z-50 pointer-events-none"
      style={{ left: x, y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.3, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as const }}
    >
      {/* Frog Image */}
      <div className="relative">
        <motion.img
          src="/frog.png"
          alt="Pink Frog Mascot"
          className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-2xl relative z-10"
          style={{ rotate: rotation }}
          animate={{
            scaleY: [1, 0.8, 1] // Squash and stretch
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Realistic Shadow */}
        <motion.div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-3 md:w-20 md:h-4 bg-black/50 blur-md rounded-[100%]"
          animate={{
            scale: [1, 0.6, 1],
            opacity: [0.5, 0.1, 0.5]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </motion.div>
  );
}
