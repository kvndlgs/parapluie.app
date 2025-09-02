import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Umbrella } from "lucide-react";

interface FeatureItem {
  icon: React.ReactElement;
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
 
      <Card className="p-4 bg-white">
        <CardHeader>
          <div className="flex items-center justify-center py-8">
             {item.icon}
          </div>

          <h2 className="mt-4 pb-4 font-serif text-3xl font-[400] text-chart-4">
            {item.title}
          </h2>
        </CardHeader>
        <CardContent className="flex flex-col justify-between">
          <p className="text-sm text-start font-watch font-bold">
            {item.description}
          </p>
          <ul className="flex flex-col gap-4">
            {item.points.map((point, i) => (
              <li
                key={i}
                className="flex items-center text-sm text-muted-foreground"
              >
                <CheckCircle className="w-4 h-4 text-muted not-[]:mr-3 flex-shrink-0" />
                <div className="font-sans font-[600] text-foreground text-start pb-2">
                  <div>{point.subtitle}</div>
                  <div>{point.description}</div>
                </div>
              </li>
            ))}
          </ul>
          {item.cta && (
            <div className="p-4 mt-2 self-end">
              <Button
                variant="ghost"
                className="text-crime-500 font-sans font-[600] hover:text-primary/80 p-0 h-auto"
              >
                {item.cta} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
  );
};
