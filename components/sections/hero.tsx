import { Button } from "@/components/ui/button";
import { Umbrella, AppleIcon, BotIcon } from "lucide-react";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white  to-accent-foreground/20 h-screen flex items-center justify-center py-12 md:py-16 lg:py-26">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[ultraStandard] font-normal leadind-loose text-accent-foreground">
              Handing Back Senior's <br />
              Online Peace of Mind
            </h1>
            <p className="text-lg font-sans font-normal md:text-xl leading-relaxed text-accent-foreground/70 max-w-lg">
              Simple, Effortless Protection Against Today's Threats
            </p>
            <div className="flex items-center justify-start gap-4 mt-2">
              <button className="flex items-center gap-4 justify-between py-1 px-4 border-1 border-[#cecece] rounded-lg">
                <img src="./google-play-svgrepo-com.svg" alt="google-play" className="w-8"/>
                <span className="flex flex-col gap-0 text-start text-[#242424]">
                    <span className="font-light text-sm"> GET IT ON  </span>
                    <span className="font-black text-xl">Google Play </span>
                </span>
              </button>
              <button  className="flex items-center gap-4 justify-between py-1 px-4 border-1 border-[#cecece] rounded-lg">
               <img src="./apple-173-svgrepo-com.svg" alt="app-store" className="w-8" />
               <span className="flex flex-col gap-0 text-start text-[#242424]">
                <span className="text-sm font-normal"> Download on The</span>
                <span className="text-xl font-black">APP STORE</span>
               </span>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-red-200/30 to-red-100/10 flex items-center justify-center">
             <img src='/umbrella.png' alt="umbrella" className="relative w-full h-auto rotate-30"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
