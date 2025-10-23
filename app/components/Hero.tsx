"use client";

// import { useEffect, useState, useRef } from "react";
// import { gsap } from "gsap";

export default function Hero() {
  //  const [currentFrame, setCurrentFrame] = useState(1);
  //  const [opacity, setOpacity] = useState(0);
  //  const [translateY, setTranslateY] = useState(0);
  //  const [scrollProgress, setScrollProgress] = useState(0);
  // const totalFrames = 9;
  // const animationCompleteRef = useRef(false);

  /*
  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#pin-walter",
      start: "top top",
      end: "+=3000",
      endTrigger: "#about",
      scrub: true,
      pin: true,
      markers: true,
    },
  });

  timeline.to("#hero", {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut",
  });


  useEffect(() => {
   let accumulatedScroll = 0;
    const scrollThreshold = 3000; // Total scroll delta needed to complete animation

    const handleWheel = (e: WheelEvent) => {
      if (animationCompleteRef.current) {
        // Animation complete, allow normal scrolling
        return;
      }

      // Prevent default scrolling during animation
      e.preventDefault();

      // Accumulate scroll delta
      accumulatedScroll += Math.abs(e.deltaY);
      const progress = Math.min(accumulatedScroll / scrollThreshold, 1);
      setScrollProgress(progress);

      // Calculate opacity and position
      let newOpacity = 0;
      let newTranslateY = 0;

      if (progress < 0.15) {
        // Fade in phase (0-15%)
        newOpacity = progress / 0.15;
        newTranslateY = 0;
      } else if (progress >= 0.15 && progress < 0.7) {
        // Main animation phase (15-70%) - fully visible, rotating
        newOpacity = 1;
        newTranslateY = 0;
      } else if (progress >= 0.7) {
        // Fade out and move up phase (70-100%)
        const fadeProgress = (progress - 0.7) / 0.3;
        newOpacity = 1 - fadeProgress;
        newTranslateY = -fadeProgress * 300; // Move up 300px as it fades
      }

      setOpacity(newOpacity);
      setTranslateY(newTranslateY);

      // Map progress to frame number (1-9)
      const frameIndex = Math.floor(progress * totalFrames) + 1;
      const clampedFrame = Math.min(Math.max(frameIndex, 1), totalFrames);
      setCurrentFrame(clampedFrame);

      // When animation completes
      if (progress >= 1 && !animationCompleteRef.current) {
        animationCompleteRef.current = true;
        // Re-enable scrolling by removing the listener
        window.removeEventListener("wheel", handleWheel);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };

  }, []);
  */

  return (
    <section id="hero" className="w-screen h-screen relative overflow-hidden">
      <img
        src="/bg2.png"
        alt="herobg"
        className="absolute min-h-screen -top-20 left-0 w-full object-cover bg-center-top -z-10"
      />

      {/*
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ease-out"
        style={{
          opacity,
          transform: `translateY(${translateY}px)`,
        }}
      >
        <img
          src={`/walter-spritesheet/walter-${currentFrame}.png`}
          id="pin-walter"
          alt="Walter animation"
          className="w-40 h-40 object-contain"
        />
      </div>
      */}
      <div className="max-w-3xl py-12 md:py-16 mx-auto text-center relative z-10">
        <div className="md:w-74/100 w-84/100  flex mx-auto items-center justify-center py-2 px-4 md:px-2 bg-[#FEF3C7] drop-shadow-lg drop-shadow-blur drop-shadow-[300, 15%, 25%]/10 rounded-sm md:mb-6 mb-8">
          <p className="text-poop-600 text-sm font-monument font-normal flex items-center gap-2 md:gap-4">
            <p className="font-monument-black md:text-2xl text-lg  text-[hsl(0,90%,70%)]">
              341%
            </p>{" "}
            d'augmentation des fraudes contre les ainés depuis 2022
          </p>
        </div>
        <h1 className="w-80/100 mx-auto text-[40px] leading-[50px] md:text-[54px] md:w-full  align-center self-stretch md:leading-[68px] font-monument font-black  md:mb-3 text-poop-purple-700">
          Proteger vos parents contre
          <br />
          la fraude de type
          <br />
          grand-parent et faux representants
        </h1>
        <p className="md:text-[18px] leading-[32px]  font-monument font-normal mb-8 w-76/100 md:w-full mx-auto text-poop-purple-500">
          Réagissez a temp grace a notre systeme de prévention
          <br />
          des menaces et alertes en temps réel
        </p>
        <button className="bg-gradient-primary text-white px-8 py-3 rounded-full font-monument  hover:bg-[#7C3AED] transition-colors">
          Rejoindre la liste d'attente
        </button>
      </div>
    </section>
  );
}

/*


display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 13px 10px;
gap: 10px;

width: 218px;
height: 45px;

background: linear-gradient(185.68deg, #A68FFE -33.75%, #7E5DFE 113.85%);
border-bottom: 3px solid #532CE8;
border-radius: 200px;


flex: none;
order: 2;
flex-grow: 0;

*/
