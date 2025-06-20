import { Brain, CircuitBoard, Siren, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Brain className="h-12 w-12 text-primary" />,
    title: 'Emotional Analysis',
    description: 'AI listens during calls to identify high-pressure sales tacticsor emotional manipulation attempts.',
  },
  {
    icon: <CircuitBoard className="h-12 w-12 text-primary" />,
    title: 'Recognize Scam Patterns',
    description: 'System identifies common scam scripts and suspicious conversation patterns.',
  },
  {
    icon: <Siren className="h-12 w-12 text-primary" />,
    title: 'Smart Alerts',
    description: 'Take action when suspicious activity is detected.',
  },
  {
    icon: <Lightbulb className="h-12 w-12 text-primary" />,
    title: 'Suggest Responses',
    description: 'Provides real-time guidance when scam indicators are detected.',
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-primary-100" id="features">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-lg text-primary-800 font-medium max-w-2xl mx-auto">
          Technology that protects our loved ones from financial exploitation and
          scams. Simple, unobtrusive solutions designed specifically for seniors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" id="features">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border bg-white hover:shadow-lg transition-shadow duration-300 drop-shadow-md">
              <CardHeader className="text-center pb-2 text-grey-600">
                <div className="mx-auto mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;