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
        <h1 className="text-xl md:text-3xl lg:text-5xl font-medium text-primary mb-8 leading-normal">
          <span className="block pb-2">Real-Time Protection </span>
          <span className="block">Against Scams Powered by AI.</span>
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#" className="flex items-center justify-center text-white rounded">
            <img 
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
              alt="Get it on Google Play" 
              className="h-14 w-22" 
            />
          </a>
          <button className="px-6 py-2 rounded-md font-semibold text-sm sm:w-auto text-primary border-2 border-primary drop-shadow-md hover:bg-primary/10 hover:text-primary/90">
            Early Access
          </button>
        </div>
      </div>
      
      {/* Phone Mockups */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl z-20">
        <img src={Mockup} alt="App Mockup" className="w-full absolute -bottom-52 z-9999" />
      </div>
      
      {/* Bottom Tagline */}
      <div className="absolute bottom-12 left-0 right-0 text-center text-white z-10 px-4">
        <p className="text-lg md:text-xl mb-2">Technology that protects our loved ones from financial exploitation and scams.</p>
        <p className="text-md">Simple, unobtrusive solutions designed specifically for seniors.</p>
      </div>
    </section>
  );
};

export default Hero;