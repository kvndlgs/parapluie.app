import { useEffect, useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/layout/Hero';
import Features from '@/components/sections/Features';
import About from '@/components/sections/About';
import Pricing from '@/components/sections/Pricing';
import Download from '@/components/sections/Download';
import Footer from '@/components/layout/Footer';
import { LocaleSwitcher } from 'lingo.dev/react-client';



function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    
    <div className="min-h-screen bg-background">
      
      <div className='z-50 fixed w-20 px-3 py-2 text-sm font-regular leading-large text-primary ring-none'>
        <LocaleSwitcher locales={["en", "fr"]} />
      </div>
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Features />
        <About />
        <Pricing />
        <Download />
      </main>
      <Footer />
    </div>
    
    
  );
}

export default App;