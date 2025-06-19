import Mockup from '@/assets/mockup.png';
import heroBg from '@/assets/meshbgbig.png';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero = () => {
  return (
    <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Purple Gradient Background */}
      <div className="absolute inset-0 z-0">
       <img src={heroBg} alt="parapluie-app-background-image" className='absolute object-cover bg-center w-full h-full'/>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6 lg:px-0">
        <h1 className="text-4xl lg:text-5xl font-black text-primary lg:px-16 mb-8 -mt-16 md:-mt-4 leading-tight">
          <span className="block md:pb-2" >AI-Powered Protection for Senior Financial Safety</span>
        </h1>
        
        <div className="flex flex-row w-full items-center justify-center gap-4 md:mb-12">
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full max-w-md bg-white/90 text-primary placeholder:text-muted-foreground focus:ring-2 focus:ring-secondary-500 focus:border-transparent"
          />
          <Button className="bg-primary shadow-lg text-white hover:from-secondary-500 hover:to-secondary-300 transition-all duration-300">
            Join Waitlist
          </Button>
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
      <div className="absolute md:bottom-0 bottom-4 scale-150 md:scale-110  left-1/2 transform -translate-x-1/2 w-full max-w-3xl z-20">
        <img src={Mockup} alt="Parapluie AI-Powered Scams Protection Mockup" className="w-full absolute md:-bottom-52 z-9999 -bottom-20" />
      </div>
  
    </section>
  );
};

export default Hero;