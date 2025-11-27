import { useState } from 'react';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import { Hero } from './components/Hero';
import { FeatureCarousel } from './components/FeatureCarousel';
import { HowItWork } from './sections/howitwork';
import { About } from './sections/about';
import { Footer } from './components/footer';

function App() {
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
      <Footer openModal={openModal} />
    </main>
  );
}

export default App;

