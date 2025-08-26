import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Umbrella } from "lucide-react";

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

export const FeatureCard = ({ item }: Feature) => {
  return (
    <>
      <Card>
        <CardHeader className="pb-1">
          <div className="flex items-center justify-center py-8">
            <img src={item.icon} alt={item.title} className="w-20" />
          </div>

          <h2 className="mt-6 pb-10 font-right-serif text-3xl font-medium text-chart-4">
            {item.title}
          </h2>
        </CardHeader>
        <CardContent className="flex flex-col items-stretch justify-between">
          <p className="text-sm text-start font-watch font-medium">
            {item.description}
          </p>
          <ul className="flex flex-col gap-8 min-h-110">
            {item.points.map((point, i) => (
              <li
                key={i}
                className="flex items-center text-sm text-muted-foreground"
              >
                <CheckCircle className="w-4 h-4 text-accent-secondary mr-3 flex-shrink-0" />
                <div className="font-watch font-medium text-foreground text-start pb-2">
                  <div>{point.subtitle}</div>
                  <div>{point.description}</div>
                </div>
              </li>
            ))}
          </ul>
          {item.cta && (
            <div className="mt-12 pt-4 border-t border-border">
              <Button
                variant="ghost"
                className="text-primary font-watch font-medium hover:text-primary/80 p-0 h-auto"
              >
                {item.cta} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </>
  );
};
