"use client";

import { Canvas } from "@react-three/fiber";
import {
  ScrollControls,
  Scroll,
  Environment,
  useScroll,
} from "@react-three/drei";
import { HeroScene } from "./HeroScene";
import { Suspense, useRef } from "react";
import { useFrame } from "@react-three/fiber";

// Component to keep content fixed until animation completes
function HeroContent() {
  const scroll = useScroll();
  const contentRef = useRef<HTMLDivElement>(null);

  useFrame(() => {
    if (!contentRef.current) return;

    const scrollOffset = scroll.offset;

    // Keep content fixed until 80% of animation is done
    if (scrollOffset < 0.8) {
      contentRef.current.style.transform = `translateY(0px)`;
    } else {
      // After animation, let it scroll naturally
      contentRef.current.style.transform = `translateY(${(scrollOffset - 0.8) * 100}vh)`;
    }
  });

  return (
    <div
      ref={contentRef}
      className="relative z-20 max-w-4xl mx-auto text-center mt-15"
    >
      <div className="inline-block bg-primary-50 px-4 py-2 rounded-md shadow-md mb-6">
        <span className="flex items-center">
          <h5 className="font-monument text-lg mx-2 text-red-400"> 341% </h5>
          <p className="text-neutral-800 text-sm font-normal">
            d'augmentation des fraudes contre les ainés depuis 2022
          </p>
        </span>
      </div>
      <h1 className="mb-4 font-monument-condensed-black text-poop-800 text-[52px] font-black tracking-tight leading-[62px]">
        Protégez vos parents contre <br />
        les fraudes de type grand-parent <br />
        et faux représentants
      </h1>
      <p className="text-neutral-600 font-monument text-sm leading-6 -mt-2.5 pb-5 tracking-wide">
        Réagissez a temp grace a notre systême <br /> de prévention des menaces
        et alertes en temp réel.
      </p>
      <button className="bg-primary-400 px-6 pt-3.5 pb-3 font-medium tracking-wide text-sm text-white border-b-6 border-primary-600/90 shadow-lg rounded-xl cursor-pointer">
        Accès anticipé
      </button>
    </div>
  );
}

export default function Hero() {
  const scroll = useRef({ position: { y: 0 } });

  return (
    <section
      id="hero"
      className="h-[500vh] w-screen  relative  flex-col items-center"
    >
      <div className="hero-bg"></div>
      <div className="absolute top-0 h-screen w-full">
        <Canvas key="hero-canvas" camera={{ position: [0, 0, 5], fov: 50 }}>
          <Suspense fallback={null}>
            <ScrollControls pages={2} damping={0}>
              <Scroll>
                <HeroScene />
              </Scroll>
              <Scroll html style={{ width: "100%" }}>
                <HeroContent />
              </Scroll>
            </ScrollControls>

            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />
            <Environment preset="sunset" />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
}
