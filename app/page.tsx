import HeroSection  from "@/components/hero-section"
import ScrollSection from "@/components/scroll-section";
import FeatureSection from '@/components/feature-section';
//import WeatherScene from "@/components/weather-scene"

export default function Home() {
  return (
    <main className="relative">
        <HeroSection />
        <ScrollSection />
        <FeatureSection />
    </main>
  );
}
