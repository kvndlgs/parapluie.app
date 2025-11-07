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
