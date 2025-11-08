"use client";

// import { useEffect, useState, useRef } from "react";
// import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Float, Environment } from "@react-three/drei";
// import { Walter } from "@/components/Walter";
import { HeroScene } from "./HeroScene";
import { Suspense, useRef } from "react";
import * as THREE from "three";

export default function Hero() {
  const scroll = useRef({ position: { y: 0 } });

  return (
    <section
      id="hero"
      className="h-[500vh] w-screen relative  flex-col items-center"
    >
      <div className="hero-bg"></div>
      <div className="sticky top-0 h-screen w-full py-20">
        <Canvas key="hero-canvas" camera={{ position: [0, 0, 5], fov: 50 }}>
          <Suspense fallback={null}>
            <ScrollControls pages={5}>
              <Scroll>
                <HeroScene />
              </Scroll>
              <Scroll html style={{ width: "100%" }}>
                <div className="absolute inset-0 z-0 ">
                  <div className="absolute -bottom-50 left-0 right-0 w-full h-auto z-50">
                    <img
                      src="cloud-hero-bottom.png"
                      alt="cloud-bottom"
                      className="w-full h-full object-cover opacity-60 blur-xl"
                    />
                  </div>
                </div>

                {/* content */}
                <div className="relative z-20 max-w-4xl mx-auto text-center">
                  <div className="inline-block bg-yellow-100 px-4 py-2 rounded-md shadow-md-neutral-100 mb-6">
                    <span className="flex items-center">
                      <h5 className="font-bold text-lg mx-2 text-neutral-600">
                        {" "}
                        341%{" "}
                      </h5>
                      <p className="text-neutral-800 text-sm font-normal">
                        {" "}
                        d'augmentation des fraudes contre les ainés depuis 2022
                      </p>
                    </span>
                  </div>
                  <h1 className="mb-4 font-monument text-poop-700 text-[52px] font-black tracking-tight leading-[62px]">
                    {" "}
                    Protégez vos parents contre <br />
                    les fraudes de type grand-parent <br />
                    et faux représentants
                  </h1>
                  <p className="text-neutral-600 text-sm leading-6 -mt-2.5 pb-5 tracking-wide">
                    {" "}
                    Réagissez a temp grace a notre systême <br /> de prévention
                    des menaces et alertes en temp réel.{" "}
                  </p>
                  <button className="bg-[#8E75F0] px-5 py-3 font-medium tracking-wide text-sm  text-white border-b-3 border-[#614DB2] shadow-lg rounded-xl cursor-pointer">
                    Rejoindre la liste d'attente
                  </button>
                </div>
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
