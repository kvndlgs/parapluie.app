import { Check } from 'lucide-react';
import AboutImg from '@/assets/elder.png'

const advantages = [
  'Scam Language Detection',
  'Visual Verification',
  'Simplify Complex Terms',
  'Pattern Recognition',
  'Emotional Analysis',
  'Adaptive Security',
];

const About = () => {
  return (
    <section className="py-20 bg-muted/30" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Financial Wellness Support</h2>
            <p className="text-lg mb-6 text-muted-foreground">
            Sends friendly payment
reminders. Tracks recurring
expenses to prevent overlooked
bills.
            </p>
            <p className="text-lg mb-8 text-muted-foreground">
            Provides simplified financial
tools. Large, readable displays
with intuitive controls.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-3 mt-1">
                    <Check className="h-5 w-5 text-primary" />
                  </div>
                  <p>{advantage}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src={AboutImg}
              alt="Smartphone with weather app" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;