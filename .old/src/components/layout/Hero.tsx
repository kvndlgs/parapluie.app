import  { useState } from "react";
import Mockup from "@/assets/mockup.png";
//import heroBg from "@/assets/meshbgbig.png";
//import { Button } from "@/components/ui/button";
import { WaitlistEntry } from "@/types";
//import { Input } from "@/components/ui/input";
import WaitlistForm from "../WaitlistForm";
import { Shield, ArrowRight, Mail, BellRing, ShieldCheck, Sparkle,  } from "lucide-react";


const Hero = () => {
  const [isFullFormVisible, setIsFullFormVisible] = useState<boolean>(false);


  const handleWaitListSubmit = (data: WaitlistEntry): void => {
    console.log('Entry', data);
  };

  const handleError = (error: string): void => {
    console.error('Error saving your info please try again', error);
  }
  
  const handleSuccess = (): void => {
    console.log('Yeeeeehaw');
  }


  return (
    <main className="relative bg-neutral-100 overflow-hidden"> 
        <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(65%_55%_at_50%_0%,rgba(108,11,254,0.25),rgba(108,11,254,0.05)_38%,rgba(10,10,12,0)_75%)]"></div>
        <div className="absolute -top-40 -left-24 w-[60vw] max-w-[900px] aspect-square rounded-full blur-3xl opacity-50 animate-[spin_28s_linear_infinite] mix-blend-screen bg-[radial-gradient(closest-side, rgba(108,11,254,0.55), rgba(108,11,254,0.18) 60%, transparent 70%)]"></div>
        <div className="absolute -bottom-48 -right-24 w-[55vw] max-w-[820px] aspect-square rounded-full blur-3xl opacity-40 animate-[spin_36s_linear_infinite_reverse] mix-blend-screen bg-[radial-gradient(closest-side, rgba(108,11,254,0.45), rgba(108,11,254,0.16) 60%, transparent 70%)]"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80vw] max-w-[1100px] aspect-[2/1] rounded-[56px] blur-2xl opacity-30 animate-pulse bg-[conic-gradient(from 90deg at 50% 50%, rgba(108,11,254,0.28), rgba(108,11,254,0.06), rgba(108,11,254,0.28))]"></div>
      </div>
       <section className="max-w-7xl w-full md:px-4 lg:px-0 px-8  mx-auto min-h-screen h-auto flex items-center justify-center">
        { isFullFormVisible && (
          <WaitlistForm 
            onSubmit={handleWaitListSubmit} 
            onError={handleError} 
            onSuccess={handleSuccess} 
            isFullFormVisible={isFullFormVisible}
            setIsFullFormVisible={setIsFullFormVisible}
          />
        )}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center pt-28 pb-20 md:pt-24 pb-20 md:pb-28">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral/10 bg-primary/5 px-3 py-1.5 text-xs text-neutral/70 backdrop-blur">
              <Shield width={24} height={24}  className="text-primary"/>               
               Early Access
              </div>
              <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl tracking-tight font-black text-primary">
                AI-Powered Protection for Senior Financial Safety
              </h1>
              <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-neutral">
                Join Parapluie Waitlist to get to use our App before anyone else and
                participate in the beta testing.
              </p>

    
              <div className="mt-8 md:mt-10">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 md:gap-3">
                  <div className="relative flex-1">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                      <Mail width="24" height="24" className="text-primary" />                    
                      </div>
                    <input id="email" name="email" type="email"  autoComplete="email" placeholder="you@example.com" className="w-full rounded-xl bg-neutral-200 backdrop-blur placeholder-neutral-600 text-neutral-600 pl-10 pr-4 py-3 md:py-3.5 text-sm md:text-base outline-none border border-white/10 focus:border-primary focus:outline-0 focus:ring-4 focus:ring-primary/15 transition shadow-sm" />
                  </div>
                  <button onClick={() => setIsFullFormVisible(true)} className="group relative inline-flex items-center justify-center gap-2 rounded-xl px-4 md:px-5 py-3 md:py-3.5 text-sm md:text-base font-medium text-white transition focus:outline-none border border-white/10 shadow-sm bg-primary">
                    <span>Join Waitlist</span>
                       <ArrowRight width={24} height={24}/>                    
                    <span className="absolute inset-0 -z-10 rounded-xl ring-0 ring-[#6c0bfeff]/40 transition group-hover:ring-4"></span>
                  </button>
                </div>
                <div className="mt-3 flex items-center gap-3 text-[12px] text-neutral-900">
                  <div className="h-px w-10 bg-primary/10"></div>
                  <span>No spam. Unsubscribe anytime.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">

              <div className="relative rounded-2xl border border-neutral/10 bg-primary/[0.04] backdrop-blur-xl p-6 md:p-7 shadow-xl">
                <div className="absolute inset-0 rounded-2xl pointer-events-none bg-[radial-gradient(120% 90% at 0% 0%, rgba(108,11,254,0.15), rgba(108,11,254,0.0))]"></div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-primary/15 border border-neutral-300">
                    <Sparkle width={18} height={18} className="text-neutral-900" />
                    </div>
                    <div className="">
                      <div className="text-sm font-medium text-neutral-900">Proactive Monitoring</div>
                      <div className="text-xs text-neutral-500">Scans patterns to reduce fraud risk</div>
                    </div>
                  </div>
                  <div className="text-xs text-neutral-500">Private by design</div>
                </div>
                <div className="my-6 h-px w-full bg-primary"></div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-xl border border-neutral-100 bg-primary/[0.03] px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-primary/15 border border-neutral/10 flex items-center justify-center">
                      <ShieldCheck width={18} height={18} className="text-primary" />                     
                       </div>
                      <div>
                        <div className="text-sm text-neutral-900">Suspicious charge flagged</div>
                        <div className="text-xs text-neutral-500">Unusual device + merchant</div>
                      </div>
                    </div>
                    <span className="text-xs text-neutral-500">Real-time</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-neutral/10 bg-primary/[0.03] px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-primary/15 border border-white/10 flex items-center justify-center">
                      <BellRing width={18} height={18} className="text-primary" />                      
                      </div>
                      <div>
                        <div className="text-sm text-neutral-900">Caregiver alerts</div>
                        <div className="text-xs text-neutral-500">Trusted contacts get notified</div>
                      </div>
                    </div>
                    <span className="text-xs text-neutral-500">Secure</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-neutral/10 bg-primary/[0.03] px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-lg bg-primary/15 border border-white/10 flex items-center justify-center">
                      <Sparkle height={18} width={18} className="text-primary" />
                      </div>
                      <div>
                        <div className="text-sm text-neutral-900">Bank-grade encryption</div>
                        <div className="text-xs text-neutral-500">Your data stays yours</div>
                      </div>
                    </div>
                    <span className="text-xs text-neutral-500">End-to-end</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-[12px] text-neutral-500">
                By joining, you agree to receive updates about Parapluie. We respect your privacy.
              </div>
            </div>
          </div>
        </section>
        </div>
        <div className="absolute md:bottom-0 bottom-4 scale-150 left-1/2 transform -translate-x-1/2 w-full max-w-3xl">
        <img
          src={Mockup}
          alt="Parapluie AI-Powered Scams Protection Mockup"
          className="w-full absolute md:-bottom-60 -bottom-20 mx-auto"
        />
      </div>
        </main>
    /**
    <section
      className="relative w-screen max-h-screen flex items-center justify-center py-6 relative bg-primary-100"
      id="home"
    >

      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="parapluie-app-background-image"
          className="absolute object-cover bg-center w-full h-full"
        />
      </div> 

      <div className="z-10 mx-auto text-center lg:px-0 w-3xl">
        <h1 className="text-3xl lg:text-5xl font-black text-primary lg:px-16 mb-4 leading-tight line-length-6 md:leading-tight">
  
            AI-Powered Protection for Senior Financial Safety
   
        </h1>

        <div className="flex flex-col w-full h-auto items-center justify-center gap-4 md:mb-12">
          <p className="align-center w-3/5 text-primary-900 font-medium text-sm">
            {" "}
            Join Parapluie Waitlist to get to use our App before anyone else and
            participate in the beta testing.
          </p>

          <div
            className="flex flex-row items-center justify-center w-1/2 gap-0 my-3 z-10"
          >
            <Input
              id="email"
              placeholder="Enter your email"
              className="w-3/5 max-w-md bg-white text-neutral-600 rounded-tr-none rounded-br-none placeholder:text-neutral-400 ring-transparent"
            />
            { isFullFormVisible && (
              <>
                <WaitlistForm 
                    onSubmit={handleWaitListSubmit} 
                    onError={handleError} 
                    onSuccess={handleSuccess} 
                    isFullFormVisible={isFullFormVisible}
                    setIsFullFormVisible={setIsFullFormVisible}
                />
              </>
            )}
            <Button
              onClick={() => setIsFullFormVisible(!isFullFormVisible)}
              type="submit"
              name="submit"
              className="bg-primary px-8 rounded-tl-none rounded-bl-none border-2 border-primary-600 text-white hover:from-secondary-500 hover:to-secondary-300 transition-all duration-300"
            >
              Join
            </Button>
          </div>

   
          <a href='#' className="flex items-center justify-center text-white rounded">
            <img 
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
              alt="Get it on Google Play" 
              className="h-14 w-22" 
            />
          </a>
          <a href='#' className="w-32 h-10 inline-flex items-center justify-center rounded-md font-regular text-sm text-white
           bg-gradient-to-br from-secondary-600 via-secondary-400 via-secondary-200 via-secondary-100 to-secondary-100 text-secondary-100">
            Early Access
          </a>
        
        </div>
      </div>


      <div className="absolute md:bottom-0 bottom-4 scale-150 md:scale-115  left-1/2 transform -translate-x-1/2 w-full max-w-3xl">
        <img
          src={Mockup}
          alt="Parapluie AI-Powered Scams Protection Mockup"
          className="w-full absolute md:-bottom-52 -bottom-20"
        />
      </div>
    </section>
    */
  );
};

export default Hero;
