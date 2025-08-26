// import { Umbrella } from "lucide-react";
import { Separator } from "@/components/ui/separator";


export const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center py-12 md:py-16 lg:py-26">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-right-serif font-medium text-accent-foreground">
              Giving Seniors <br />
              The Peace of Mind They Deserve
            </h1>
            <p className="text-lg font-watch font-medium md:text-xl max-w-lg">
              Simple, Real-Time Protection Against Today's Threats.
            </p>
            <div className="flex items-center justify-start gap-4 mt-2">
        
              
              {/* app stores google play buttons goes here */}
            </div>
            <Separator className="hidden lg:block w-[50%] bg-gradient-to-r from-accent-foreground/10 via-accent/60 to-accent-foreground/10" />
          </div>
          <div className="relative ml-22">
            <div className="w-70 h-70 md:w-100 md:h-100 rounded-full flex items-center justify-center">
              <img
                src="/umbrella.png"
                alt="umbrella"
                className="relative w-full h-auto rotate-30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
