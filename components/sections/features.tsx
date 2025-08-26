import { FeatureCard } from "@/components/feature-card";
const iconPlaceholder = "/umbrella.png";

const features = [
  {
    icon: iconPlaceholder,
    title: "Advanced Voice Anylisis",
    points: [
      {
        subtitle: "Detect Manipulation",
        description:
          "AI listens during calls to identify high-pressure sales tactics or emotional manipulation attempts.",
      },
      {
        subtitle: "Recognize Scam Patterns",
        description:
          "System identifies common scam scripts and suspiciou conversation patterns.",
      },
      {
        subtitle: "Suggest Responses",
        description:
          "Provides real-time guidance when scam indicators are detected.",
      },
    ],
    cta: "Learn More",
  },
  {
    icon: iconPlaceholder,
    title: "Digital Document Protection",
    points: [
      {
        subtitle: "Scam Language Detection",
        description:
          "Analyzes emails, texts, and documents for common scam language patterns.",
      },
      {
        subtitle: "Visual Verification",
        description:
          "Identifies fake logos, doctored documents, and suspicious links.",
      },
      {
        subtitle: "Simplifies Complex Terms",
        description:
          "Translates complicated financial and legal jargon into understandable language.",
      },
    ],
    cta: "Learn More",
  },
  {
    icon: iconPlaceholder,
    title: "Smart Behavioral Protection",
    points: [
      {
        subtitle: "Pattern Recognition",
        description:
          "System learns normal usage and financial patterns. It identifies unusual deviations that might indicate fraud.",
      },
      {
        subtitle: "Emotional Analysis",
        description:
          "Recognizes signs of duress or confusion. Helps prevent decisions made under pressure or cognitive strain.",
      },
      {
        subtitle: "Adaptive Security",
        description:
          "Increases protections automatically during vulnerable times. Extra safeguards activate during late-night hours.",
      },
    ],
    cta: "Learn More",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-16 md:py-32 dark:bg-transparent">
      <div className="@container mx-auto max-w-6xl px-6">
        <div className="text-center lg:pb-14 pb-8">
          <h2 className="text-balance text-4xl font-right-serif font-medium lg:text-5xl">
            Some Features And Shit
          </h2>
        </div>
        <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} item={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
