import PawsomeHero from './components/PawsomeHero';
import SubscriptionBenefits from './components/SubscriptionBenefits';
import StatsSection from './components/StatsSection';
import './styles.css';

/**
 * 🐕 Pawsome Pets - Demo Page
 * 
 * A bold, playful pet subscription website inspired by modern pet care brands.
 * 
 * Features:
 * - Vibrant purple/peach/yellow color scheme
 * - Bold typography with massive headlines
 * - Playful animations and interactions
 * - Shadow buttons and card effects
 * - Thought bubbles and decorative icons
 * 
 * Perfect for: Pet subscription services, pet food brands, veterinary services
 */

export default function PawsomePetsDemo() {
    return (
        <main className="relative bg-white">
            {/* Hero Section - Purple gradient with pet & thought bubble */}
            <PawsomeHero />

            {/* Subscription Benefits - 4 colorful cards */}
            <SubscriptionBenefits />

            {/* Stats & Testimonial - Peach background with social proof */}
            <StatsSection />

            {/* Footer CTA */}
            <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-purple-800 text-center">
                <h2 className="text-playful md:text-mega text-white mb-8">
                    READY TO MAKE YOUR
                    <br />
                    <span className="text-yellow-300">PET HAPPY?</span>
                </h2>

                <button className="btn-yellow text-2xl px-16 py-8 mb-8">
                    🐾 START NOW
                </button>

                <p className="text-white/80 text-lg">
                    Join over 1 million happy pets! 🐕💜
                </p>
            </section>
        </main>
    );
}
