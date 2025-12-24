import  { Hero } from '../components/Hero';
import { FeatureCarousel } from '../components/FeatureCarousel';
import { About } from '../sections/About';
import { HowItWork } from '../sections/HowItWork';
import { Subscriptions } from '../sections/Subscriptions';
import { Layout } from '../components/Layout';
import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

export default function Home() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => { setIsModalOpen(true); }
    const closeModal = () => { setIsModalOpen(false);}
    const location = useLocation();
    
    useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      // petit delay pour laisser le layout se rendre
      setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 0);
    }
  }, [location.hash]);
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