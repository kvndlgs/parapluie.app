import ResponsiveNavbar from './components/ResponsiveNavbar';
import { Hero } from './components/Hero';
import { FeatureCarousel } from './components/FeatureCarousel';

function App() {
  return (
    <>
      <ResponsiveNavbar />
      <Hero />
      <section className="w-full relative z-20">
        <FeatureCarousel />
      </section>
    </>
  );
}

export default App;

