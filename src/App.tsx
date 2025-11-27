import ResponsiveNavbar from './components/ResponsiveNavbar';
import { Hero } from './components/Hero';
import { FeatureCarousel } from './components/FeatureCarousel';
import { HowItWork } from './sections/howitwork';
import { About } from './sections/about';
import { Footer } from './components/footer';

function App() {
  return (
    <main>
      <ResponsiveNavbar />
      <Hero />
      <section className="w-full relative z-20">
        <FeatureCarousel />
      </section>
      <About />
      <HowItWork />
      <Footer />
    </main>
  );
}

export default App;

