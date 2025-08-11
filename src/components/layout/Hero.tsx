import  { useState } from "react";
import Mockup from "@/assets/mockup.png";
// import heroBg from "@/assets/meshbgbig.png";
import { Button } from "@/components/ui/button";
import { WaitlistEntry } from "@/types";
import { Input } from "@/components/ui/input";
import WaitlistForm from "../WaitlistForm";


const Hero = () => {
  const [isFullFormVisible, setIsFullFormVisible] = useState<boolean>(false);


  const handleWaitListSubmit = (data: WaitlistEntry): void => {
    console.log('eereirueiru', data);
  };

  const handleError = (error: string): void => {
    console.error('Error nigga', error);
  }
  
  const handleSuccess = (): void => {
    console.log('Yeeeeehaw');
  }


  return (
    <section
      className="relative w-screen h-screen flex items-center justify-center py-6 overflow-hidden"
      id="home"
    >
      {/* Purple Gradient Background 
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="parapluie-app-background-image"
          className="absolute object-cover bg-center w-full h-full"
        />
      </div> */}
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 lg:px-0">
        <h1 className="text-3xl lg:text-4xl font-black text-primary lg:px-16 mb-4 leading-tight">
          <span className="block md:pb-2">
            AI-Powered Protection for Senior Financial Safety
          </span>
        </h1>

        <div className="flex flex-col w-full items-center justify-center gap-4 md:mb-12">
          <p className="align-center w-3/5 text-primary-900 font-medium text-sm">
            {" "}
            Join Parapluie Waitlist to get to use our App before anyone else and
            participate in the beta testing.
          </p>

          <div
            className="flex flex-row items-center justify-center w-1/2 gap-0 my-3"
          >
            <Input
              placeholder="Enter your email"
              className="w-3/5 max-w-md bg-white text-neutral-600 rounded-tr-none rounded-br-none placeholder:text-neutral-400 ring-transparent"
            />
            { isFullFormVisible && (
              <>
                <WaitlistForm 
                    onSubmit={handleWaitListSubmit} 
                    onError={handleError} 
                    onSuccess={handleSuccess} 
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

          {/*
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
          */}
        </div>
      </div>

      {/* Phone Mockups */}
      <div className="absolute md:bottom-0 bottom-4 scale-150 md:scale-110  left-1/2 transform -translate-x-1/2 w-full max-w-3xl">
        <img
          src={Mockup}
          alt="Parapluie AI-Powered Scams Protection Mockup"
          className="w-full absolute md:-bottom-52 -bottom-20"
        />
      </div>
    </section>
  );
};

export default Hero;
