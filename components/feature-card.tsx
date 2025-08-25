import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

interface FeatureItem {
  icon: string;
  title: string;
  description?: string;
  points: {
    subtitle: string;
    description: string;
  }[];
  cta: string;
}

interface Feature {
    item: FeatureItem;
}

export const FeatureCard = ({item}: Feature) => {
  return (
    <div className="grid lg:grid-flow-col lggrid-rows-2 grid-cols-4 gap-4">

        <Card
          key={item.title}
          className="p-6 md:p-8 border-0 bg-card shadow-sm hover:shadow-md transition-shadow"
        >
          {/* Decorative accent */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff9999]/20 to-[#ff9999]/5 mb-6 flex items-center justify-center">
            {item.icon}
          </div>

          <h3 className="text-xl md:text-2xl font-[ultraStandard] font-normal mb-4 text-foreground">
            {item.title}
          </h3>

          <p className="text-muted-foreground  font-sans leading-relaxed mb-6">
            {item.description}
          </p>

          <ul className="space-y-2">
            {item.points.map((point, i) => (
              <li
                key={i}
                className="flex items-center text-sm text-muted-foreground"
              >
                <CheckCircle className="w-4 h-4 text-accent-secondary mr-3 flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">{point.subtitle}</div>
                  <div>{point.description}</div>
                </div>
              </li>
            ))}
          </ul>

          {item.cta && (
            <div className="mt-6 pt-4 border-t border-border">
              <Button
                variant="ghost"
                className="text-primary hover:text-primary/80 p-0 h-auto"
              >
                {item.cta} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </Card>
    </div>
  );
};
