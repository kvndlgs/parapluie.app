import HeroSection  from "@/components/hero-section"
import ScrollSection from "@/components/scroll-section";
import FeatureSection from '@/components/feature-section';

export default function Home() {
  return (
    <main className="relative">
        <HeroSection />
        <ScrollSection />
        <FeatureSection />
    </main>
  );
}
