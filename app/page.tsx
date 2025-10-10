import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Display } from "@/components/sections/display";


export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <Features />
      <Display />
    </main>
  );
}
