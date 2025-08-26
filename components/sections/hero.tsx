// import { Umbrella } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import LogoLoop from "@/components/logo-loop";

const imageLogos = [
  {
    src: "/orgs/ace.png",
    alt: "Ace",
    href: "",
  },
  {
    src: "/orgs/bingo.png",
    alt: "Friends Bingo",
    href: "",
  },
  {
    src: "/orgs/who.png",
    alt: "who",
    href: "",
  },
  {
    src: "/orgs/residencesoleil.png",
    alt: "Les residences soleils",
    href: "",
  },
  {
    src: "/orgs/canage.png",
    alt: "canasada",
    href: "",
  },
  {
    src: "/orgs/mib.png",
    alt: "MIB",
    href: "",
  },
  {
    src: "/orgs/cnpc.png",
    alt: "cnpc",
    href: "",
  },
];

export const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white  to-accent-foreground/20 h-screen flex items-center justify-center py-12 md:py-16 lg:py-26">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[ultraStandard] font-normal leadind-loose text-accent-foreground">
              Giving Seniors <br />
              The Peace of Mind They Deserve
            </h1>
            <p className="text-lg font-sans font-normal md:text-xl leading-relaxed text-accent-foreground/70 max-w-lg">
              Simple, Real-Time Protection Against Today's Threats.
            </p>
            <div className="flex items-center justify-start gap-4 mt-2">
        
              
              {/* app stores google play buttons goes here */}
            </div>
            <Separator className="hidden lg:block w-[50%] bg-gradient-to-r from-accent-foreground/10 via-accent/60 to-accent-foreground/10" />
          </div>
          <div className="relative ml-22">
            <div className="w-70 h-70 md:w-100 md:h-100 rounded-full bg-gradient-to-br from-accent-5/20 via-input/10 to-white flex items-center justify-center">
              <img
                src="/umbrella.png"
                alt="umbrella"
                className="relative w-full h-auto rotate-30"
              />
            </div>
          </div>
        </div>
      <div className="h-auto pt-14 justify-center">
         <h5 className="text-xl md:text-2xl -m-l-20 leading-tight font-[ultraStandard] font-normal text-sidebar-foreground/80"> Trusted By </h5>
       </div>
      </div>
     
      <div className="absolute -bottom-28 lg:-bottom-18 max-w-screen h-[200px] overflow-hidden opacity-70">
        <LogoLoop
          logos={imageLogos}
          speed={60}
          direction="left"
          logoHeight={40}
          gap={80}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#eae6e9"
          ariaLabel="Technology partners"
        />
      </div>
    </section>
  );
};
