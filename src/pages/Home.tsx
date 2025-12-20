import { useState } from 'react';
import  { Hero } from '../components/Hero';
import ResponsiveNavbar from '../components/ResponsiveNavbar';
import { FeatureCarousel } from '../components/FeatureCarousel';
import { About } from '../sections/About';
import { HowItWork } from '../sections/HowItWork';
import { Subscriptions } from '../sections/Subscriptions';
import { Footer } from '../components/Footer';

export function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <main>
            <ResponsiveNavbar />
            <Hero openModal={openModal} closeModal={closeModal} isModalOpen={isModalOpen} />
            <section className="w-full relative z-20">
            <FeatureCarousel />
            </section>
            <About />
            <HowItWork />
            <Subscriptions />
            <Footer openModal={openModal} />
        </main>
    )
}