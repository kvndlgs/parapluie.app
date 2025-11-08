import Navbar from "./components/Navbar";
//import Hero from "./components/Hero";
import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
      </main>
    </div>
  );
}
