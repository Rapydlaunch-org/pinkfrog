'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useSpring, AnimatePresence } from 'framer-motion';

export default function FrogCursor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isMoving, setIsMoving] = useState(false);
    const [isEating, setIsEating] = useState(false);
    const [isChewing, setIsChewing] = useState(false);
    const [tongueTarget, setTongueTarget] = useState<{ x: number, y: number } | null>(null);
    const moveTimer = useRef<NodeJS.Timeout | null>(null);

    const springConfig = { damping: 30, stiffness: 250 };
    const frogX = useSpring(0, springConfig);
    const frogY = useSpring(0, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            frogX.set(e.clientX);
            frogY.set(e.clientY);
            setIsMoving(true);
            setIsChewing(false);

            if (moveTimer.current) clearTimeout(moveTimer.current);

            moveTimer.current = setTimeout(() => {
                setIsMoving(false);
                checkForFood(e.clientX, e.clientY);
            }, 400);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (moveTimer.current) clearTimeout(moveTimer.current);
        };
    }, [frogX, frogY]);

    const checkForFood = (x: number, y: number) => {
        if (isEating || isChewing) return;

        // Get all elements at the cursor position
        const elements = document.elementsFromPoint(x, y);

        // Find the most suitable text element to eat
        const target = elements.find(el => {
            // Never eat the frog itself or the root layout containers
            if (el.id === 'frog-cursor' || el.tagName === 'BODY' || el.tagName === 'HTML' || el.tagName === 'MAIN') return false;

            const style = window.getComputedStyle(el);
            const isVisible = style.display !== 'none' && style.visibility !== 'hidden' && parseFloat(style.opacity) > 0;

            // Check if it's a text-heavy element or an interactive one
            const isText = ['SPAN', 'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'B', 'I', 'STRONG', 'A', 'BUTTON', 'LABEL'].includes(el.tagName);

            // Also check if the element has direct text content
            const hasDirectText = Array.from(el.childNodes).some(node => node.nodeType === Node.TEXT_NODE && node.textContent?.trim().length! > 0);

            return isVisible && (isText || hasDirectText);
        });

        if (target instanceof HTMLElement) {
            eatElement(target);
        }
    };

    const eatElement = (el: HTMLElement) => {
        setIsEating(true);
        const rect = el.getBoundingClientRect();
        const targetX = rect.left + rect.width / 2;
        const targetY = rect.top + rect.height / 2;

        setTongueTarget({ x: targetX, y: targetY });

        const originalTransition = el.style.transition;
        const originalTransform = el.style.transform;
        const originalOpacity = el.style.opacity;

        // Phase 1: Strike (Faster)
        el.style.transition = 'all 0.05s ease-out';
        el.style.transform = `${originalTransform} scale(1.1) rotate(2deg)`;

        setTimeout(() => {
            // Phase 2: Pull (Faster)
            el.style.transition = 'all 0.2s cubic-bezier(0.6, -0.28, 0.735, 0.045)';
            el.style.transform = `scale(0) translate(${(mousePos.x - targetX)}px, ${(mousePos.y - targetY)}px) rotate(20deg)`;
            el.style.opacity = '0';
            el.style.pointerEvents = 'none';

            setTimeout(() => {
                setTongueTarget(null);
                setIsEating(false);
                setIsChewing(true);

                setTimeout(() => {
                    setIsChewing(false);
                }, 800);

                // Reappear after 5 seconds
                setTimeout(() => {
                    el.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    el.style.transform = originalTransform;
                    el.style.opacity = originalOpacity;
                    el.style.pointerEvents = '';

                    setTimeout(() => {
                        el.style.transition = originalTransition;
                    }, 800);
                }, 5000);
            }, 200);
        }, 50);
    };

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            {/* Tongue */}
            <AnimatePresence>
                {tongueTarget && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{
                            height: Math.sqrt(Math.pow(tongueTarget.x - mousePos.x, 2) + Math.pow(tongueTarget.y - mousePos.y, 2)),
                            transition: { duration: 0.05, ease: "easeOut" }
                        }}
                        exit={{
                            height: 0,
                            transition: { duration: 0.2, ease: "easeIn" }
                        }}
                        className="absolute bg-[#FF69B4] rounded-full shadow-[0_0_15px_rgba(255,105,180,0.6)]"
                        style={{
                            width: '10px',
                            left: mousePos.x,
                            top: mousePos.y,
                            transformOrigin: 'top center',
                            rotate: Math.atan2(tongueTarget.y - mousePos.y, tongueTarget.x - mousePos.x) * (180 / Math.PI) - 90,
                        }}
                    >
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#FF69B4] rounded-full" />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Animated Pink Frog Cursor */}
            <motion.div
                id="frog-cursor"
                style={{ x: frogX, y: frogY, translateX: '-50%', translateY: '-50%' }}
                className="absolute flex items-center justify-center"
            >
                <div className="relative w-20 h-20">
                    <motion.img
                        src="/frog.svg"
                        alt="Frog Cursor"
                        className="w-full h-full drop-shadow-[0_0_15px_rgba(255,105,180,0.3)]"
                        animate={{
                            scale: isEating ? [1, 1.4, 1.2] : isChewing ? [1.2, 1.1, 1.2] : 1,
                            rotate: isMoving ? [0, -10, 10, 0] : 0,
                            y: isMoving ? [0, -15, 0] : 0
                        }}
                        transition={{
                            rotate: { repeat: Infinity, duration: 0.4 },
                            y: { repeat: Infinity, duration: 0.4 },
                            scale: isChewing ? { repeat: Infinity, duration: 0.3 } : { duration: 0.3 }
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
}
