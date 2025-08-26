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

const CardDecorator = ({ children }: { children: React.ReactNode }) => (
  <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]"
    />
    <div
      aria-hidden
      className="bg-radial to-background absolute inset-0 from-transparent to-75%"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);

export const FeatureCard = ({ item }: Feature) => {
  return (
    <>
      <Card>
        <CardHeader className="pb-1">
          <CardDecorator>
            <img src={item.icon} alt={item.title} />
          </CardDecorator>
          <h3 className="mt-6 font-[ultraStandard] text-2xl font-normal text-accent-foreground">
            {item.title}
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{item.description}</p>
          <ul className="space-y-2">
            {item.points.map((point, i) => (
              <li
                key={i}
                className="flex items-center text-sm text-muted-foreground"
              >
                <CheckCircle className="w-4 h-4 text-accent-secondary mr-3 flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground">
                    {point.subtitle}
                  </div>
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
        </CardContent>
      </Card>
      {/*
      <Card
        key={item.title}
        className="p-6 md:p-8 border-0 bg-card shadow-sm hover:shadow-md transition-shadow"
      >

        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff9999]/20 to-[#ff9999]/5 mb-6 flex items-center justify-center">
          <img src={item.icon} alt={item.title} />
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
                <div className="font-medium text-foreground">
                  {point.subtitle}
                </div>
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
      */}
    </>
  );
};
