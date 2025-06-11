import Hero  from '@/components/layout/Hero';
import Features  from '@/components/sections/Features';
import About  from '@/components/sections/About';
import  Pricing from '@/components/sections/Pricing';
import Download from '@/components/sections/Download';

export default function HomePage() {
    return (
     <main>

        <Hero />
        <Features />
        <About />
        <Pricing />
        <Download />

      </main>
    )
}