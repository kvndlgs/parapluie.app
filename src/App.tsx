import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import { Hero } from './components/Hero';
import { FeatureCarousel } from './components/FeatureCarousel';
import { HowItWork } from './sections/howitwork';
import { About } from './sections/about';
import Subscriptions from './sections/subscriptions';
import { Footer } from './components/footer';
import ArnaqueGrandParent from './pages/ArnaqueGrandParent';
import ProtectionParents from './pages/ProtectionParents';

function HomePage() {
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
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/arnaque-grand-parent" element={<ArnaqueGrandParent />} />
      <Route path="/protection-parents" element={<ProtectionParents />} />
    </Routes>
  );
}

export default App;
