import { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import ResponsiveNavbar from './components/ResponsiveNavbar';
import { Hero } from './components/Hero';
import { FeatureCarousel } from './components/FeatureCarousel';
import { HowItWork } from './sections/howitwork';
import Subscriptions from './sections/subscriptions';
import  { SubscriptionsPage } from './pages/Subscriptions';
import { AboutPage } from './pages/About';
import { Footer } from './components/footer';
import ArnaqueGrandParent from './pages/ArnaqueGrandParent';
import ProtectionParents from './pages/ProtectionParents';
import Blog from './pages/Blog';
import About from './sections/about.tsx'
import { Support } from './pages/Support'
import { Media } from './pages/Media';
import { FAQ } from './pages/FAQ';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';


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
  <HelmetProvider>
<Routes>
  {/* Marketing */}
  <Route path="/" element={<HomePage />} />
  <Route path="/a-propos" element={<AboutPage />} />
  <Route path="/media" element={<Media />} />
  <Route path="/abonnements" element={<SubscriptionsPage/>} />
  <Route path="/protection-parents" element={<ProtectionParents />} />
  <Route path="/arnaque-grand-parent" element={<ArnaqueGrandParent />} />

  {/* Support */}
  <Route path="/support" element={<Support/>} />
  <Route path="/support/contact" element={<Contact />} />
  <Route path="/support/faq" element={<FAQ />} />

  {/* Contenu */}
  <Route path="/blog" element={<Blog />} />
  <Route path="/post/:slug" element={<BlogPost />} />
</Routes>
</HelmetProvider>
  );
}

export default App;
