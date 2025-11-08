"use client";

// import { useEffect, useState, useRef } from "react";
// import { gsap } from "gsap";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll, Float, Environment } from "@react-three/drei";
import { Walter } from "@/components/Walter";
import { Suspense, useRef } from "react";
import * as THREE from "three";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center pt-16 px-8"
    >
      <div className="hero-bg"></div>
      <div className="absolute inset-0 z-0 ">
        <div className="absolute -bottom-80 left-0 right-0 w-full h-auto z-50">
          <img
            src="cloud-hero-bottom.png"
            alt="cloud-bottom"
            className="w-full h-full object-cover opacity-60 blur-xl"
          />
        </div>
      </div>
      <div className="mt-6 flex -bottom-[100px] mx-auto justify-center absolute -z-10">
        <img
          src="/finalmockup.png"
          alt="Parapluie Mockup"
          className="max-w-35/100 w-full h-auto"
        />
      </div>
      {/* content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <div className="inline-block bg-yellow-100 px-4 py-1 rounded-md shadow-md-neutral-100 mb-6">
          <span className="flex items-center">
            <h5 className="font-bold text-lg mx-2 text-neutral-600"> 341% </h5>
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
          Réagissez a temp grace a notre systême <br /> de prévention des
          menaces et alertes en temp réel.{" "}
        </p>
        <button className="bg-[#8E75F0] px-5 py-3 font-medium tracking-wide text-sm  text-white border-b-3 border-[#614DB2] shadow-lg rounded-xl cursor-pointer">
          Rejoindre la liste d'attente
        </button>
      </div>
    </section>
  );
}
