'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import FrogLoader from '@/components/FrogLoader';
import ImageSlider from '@/components/ImageSlider';
import CompanyIntro from '@/components/CompanyIntro';
import Console from '@/components/Console';
import StorySection from '@/components/StorySection';
import WorkShowcase from '@/components/WorkShowcase';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    // Handle hash navigation after loader completes
    useEffect(() => {
        if (!isLoading) {
            const hash = window.location.hash;
            if (hash) {
                // Small timeout to ensure DOM is ready
                setTimeout(() => {
                    const id = hash.replace('#', '');
                    const element = document.getElementById(id);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            }
        }
    }, [isLoading]);

    return (
        <main className="relative bg-transparent text-white font-sans min-h-screen overflow-x-hidden">
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        key="loader"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-[100]"
                    >
                        <FrogLoader onComplete={() => setIsLoading(false)} />
                    </motion.div>
                )}
            </AnimatePresence>

            {!isLoading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Hero Image Slider */}
                    <ImageSlider />

                    {/* Console Section (Scrollable) */}
                    <Console />

                    {/* Story Section */}
                    <StorySection />

                    {/* Work Showcase Section */}
                    <WorkShowcase />

                    {/* About Section */}
                    <AboutSection />

                    {/* Contact Section */}
                    <ContactSection />

                    {/* Footer Section */}
                    <Footer />
                </motion.div>
            )}
        </main>
    );
}
