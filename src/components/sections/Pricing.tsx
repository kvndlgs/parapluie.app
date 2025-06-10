import { Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Basic weather forecasting for casual users',
    features: [
      'On Demand AI Analysis',
      'Limited Real-Time Options',
      'Limited AI Features',
    ],
    buttonText: 'Download Free',
    highlighted: false,
  },
  {
    name: 'Premium',
    price: '$4.99',
    period: 'month',
    description: 'Advanced features and highly customizable',
    features: [
      '7 days free trial',
      'Real-time Alerts',
      'Detailed Reports',
      'Customizable smart alerts',
      'Unlimited location tracking',
      'Advanced Options',
    ],
    buttonText: 'Get Premium',
    highlighted: true,
  },
  {
    name: 'Family',
    price: '$8.99',
    period: 'month',
    description: 'Share premium features with your family',
    features: [
      'All Premium features',
      'Up to 5 family accounts',
      'Family location sharing',
      'Cross-device notifications',
      'Priority customer support',
    ],
    buttonText: 'Choose Family',
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 bg-background" id="subscriptions">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" >
            Choose the plan that fits your needs. No hidden fees or complicated tiers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index}
              className={`border ${
                plan.highlighted 
                  ? 'border-primary shadow-lg shadow-primary/10' 
                  : 'border-border'
              } h-full flex flex-col`}
            >
              <CardHeader>
                <CardTitle className="text-2xl" >{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="ml-2 text-muted-foreground">/{plan.period}</span>
                  )}
                </div>
                <CardDescription className="mt-2" >{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                      <span >{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full ${plan.highlighted ? '' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                  size="lg"
                
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;