import  { Hero } from '../components/Hero';
import { FeatureCarousel } from '../components/FeatureCarousel';
import { About } from '../sections/About';
import { HowItWork } from '../sections/HowItWork';
import { Subscriptions } from '../sections/Subscriptions';
import { Layout } from '../components/Layout';
import { useState } from 'react';

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => { setIsModalOpen(true); }
    const closeModal = () => { setIsModalOpen(false);}

    return (
        <Layout>
            <Hero openModal={openModal} closeModal={closeModal} isModalOpen={isModalOpen} />
            <section className="w-full relative z-20">
            <FeatureCarousel />
            </section>
            <About />
            <HowItWork />
            <Subscriptions />
        </Layout>
    )
}