import React, { useState } from 'react';

interface FeatureSlide {
    title: string;
    description: string;
    image: string; // Changed from ReactNode to string for image URL
}

// TODO: Replace these placeholder URLs with your actual local assets
// Example: image: "/assets/screenshots/dashboard.png"
const features: FeatureSlide[] = [
    {
        title: "Protection des appels et messages en temps réel",
        description: "Restez sans crainte, Walter est à l'affût, 24 heures sur 24 pour assurer qu'aucun appel ou message suspect ne vous soit transmis.",
        // Using a placeholder service to simulate a 9:19.5 phone screenshot
        image: "/mockup/ct1.webp"
    },
    {
        title: "Intelligence Artificielle Bienveillante",
        description: "Notre IA analyse le langage et le contexte pour détecter les tentatives de manipulation, tout en respectant la confidentialité absolue des conversations.",
        image: "/mockup/ct.webp"
    }
];

export const FeatureCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % features.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
    };

    return (
        <div className="w-full bg-[#7a5c7f] text-white py-24 px-4 overflow-hidden relative">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">

                {/* Left: 3D Phone Mockup */}
                <div className="relative w-full md:w-1/2 flex justify-center items-center perspective-1000">
                    {/* Decorative blurred circles behind phone */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-400 rounded-full blur-3xl opacity-20"></div>

                    {/* Phone Body Container 
              Dimensions set to approx 9:19.5 ratio (iPhone standard)
              w-[280px] h-[600px] approximates this well for desktop display
          */}
                    <div className="relative w-[280px] h-[600px] bg-base-100 rounded-[3rem] p-3 shadow-2xl transform transition-all duration-700 ease-out md:rotate-[-12deg] md:hover:rotate-0 border-[6px] border-base-100 ring-1 ring-white/20">

                        {/* Notch (Dynamic Island style) */}
                        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-7 bg-base-50 rounded-full z-20 pointer-events-none"></div>

                        {/* Screen Area */}
                        <div className="w-full h-full bg-base-50 rounded-[2.5rem] overflow-hidden relative">
           
          
                            <img
                                src={features[currentIndex].image}
                                alt={features[currentIndex].title}
                                className="w-full h-full object-cover animate-[fadeIn_0.5s_ease-out]"
                            />

                            {/* Optional: Screen gloss reflection */}
                            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-10"></div>
                        </div>

                        {/* Side Buttons (Pure CSS decoration) */}
                        <div className="absolute top-28 -left-[8px] w-[2px] h-8 bg-base-50 rounded-l"></div> {/* Mute switch */}
                        <div className="absolute top-40 -left-[8px] w-[2px] h-14 bg-base-50 rounded-l"></div> {/* Volume Up */}
                        <div className="absolute top-56 -left-[8px] w-[2px] h-14 bg-base-50 rounded-l"></div> {/* Volume Down */}
                        <div className="absolute top-44 -right-[8px] w-[2px] h-20 bg-base-50 rounded-r"></div> {/* Power */}
                    </div>
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-1/2 text-center md:text-left z-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                        {features[currentIndex].title}
                    </h2>
                    <p className="text-lg md:text-xl text-purple-100 leading-relaxed mb-10 opacity-90">
                        {features[currentIndex].description}
                    </p>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-center md:justify-start gap-4">
                        <button
                            onClick={prevSlide}
                            className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm group"
                            aria-label="Previous feature"
                        >
                            <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="flex gap-3">
                            {features.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'}`}
                                    aria-label={`Go to slide ${idx + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="p-4 rounded-full bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm group"
                            aria-label="Next feature"
                        >
                            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};