import AppPreview from '@/assets/ai-protection.png';

const Download = () => {
  return (
    <section className="py-24 bg-primary/5" id="download">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 rounded-3xl" />
          <div className="bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-center">
              <div className="md:pr-6 text-left">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4">Health and Financial Integration
                </h3>
                <p className="text-base md:text-lg mb-6">
                  Whether it's rain, shine, snow, or anything in between, Parapluie keeps you 
                  prepared with accurate forecasts and timely notifications.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  Recognizes how health status affects
                  financial judgment
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  Links medication schedules with
                  financial safeguards.
                  </div>
                  <div className="bg-background/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
                  Adds safeguards during times of
                  potential cognitive fluctuation.
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-[240px] h-[480px] rounded-3xl overflow-hidden border-8 border-foreground/10 shadow-2xl">
                  <img 
                    src={AppPreview}
                    alt="Parapluie app on smartphone" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;