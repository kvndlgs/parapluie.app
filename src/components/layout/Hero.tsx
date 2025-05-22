import Mockup from '@/assets/mockup.png';
import heroBg from '@/assets/meshg.png';

const Hero = () => {
  return (
    <section className="relative w-screen h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Purple Gradient Background */}
      <div className="absolute inset-0 z-0">
       <img src={heroBg} className='asolute object-cover bg-top-left w-full h-full'/>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center px-6 lg:px-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 -mt-16 md:-mt-0leading-tight">
          <span className="block md:pb-2">Real-Time Protection </span>
          <span className="block">Against Scams Powered by AI.</span>
        </h1>
        
        <div className="flex flex-row w-full items-center justify-center gap-2 md:mb-12">
          <a href='#' className="flex items-center justify-center text-white rounded">
            <img 
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
              alt="Get it on Google Play" 
              className="h-14 w-22" 
            />
          </a>
          <a href='#' className="w-32 h-10 inline-flex items-center justify-center rounded-md font-regular  text-sm text-white
           bg-[#1E1E1E] border-2 border-[#616161] hover:bg-[#616161]/95 transition-colors duration-300">
            Early Access
          </a>
        </div>
      </div>
      
      {/* Phone Mockups */}
      <div className="absolute md:bottom-0 bottom-4 scale-150 md:scale-110  left-1/2 transform -translate-x-1/2 w-full max-w-3xl z-20">
        <img src={Mockup} alt="App Mockup" className="w-full absolute md:-bottom-52 z-9999 -bottom-20" />
      </div>
  
    </section>
  );
};

export default Hero;