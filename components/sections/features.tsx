import { FeatureCard } from '@/components/feature-card';

const features = [
  {
    icon: "",
    title: "Voice Anylisis",
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
    icon: "",
    title: "Digital Document Protection",
    points: [
      {
        subtitle: "Scam Language Detection",
        description: "Analyzes emails, texts, and documents for common scam language patterns.",
      },
      {
        subtitle: "Visual Verification",
        description: "Identifies fake logos, doctored documents, and suspicious links.",
      },
      {
        subtitle: "Simplifies Complex Terms",
        description: "Translates complicated financial and legal jargon into understandable language.",
      },
    ],
    cta: "Learn More",
  },
      {
    icon: "",
    title: "Smart Behavioral Protection",
    points: [
      {
        subtitle: "Pattern Recognition",
        description: "System learns normal usage and financial patterns. It identifies unusual deviations that might indicate fraud.",
      },
      {
        subtitle: "Emotional Analysis",
        description: "Recognizes signs of duress or confusion. Helps prevent decisions made under pressure or cognitive strain.",
      },
      {
        subtitle: "Adaptive Security",
        description: "Increases protections automatically during vulnerable times. Extra safeguards activate during late-night hours.",
      },
    ],
    cta: "Learn More",
  },
];

export const Features = () => {
    return (
        <section id="features" className="w-screen h-auto bg-gradient-to-t from-accent-foreground/40 via-accent-foreground/30 to-accent-foreground/20 flex flex-col items-between">
            <div className="w-full h-auto flex items-center justify-center">
                <h1 className="text-8xl md:text-4xl sm:text-2xl text-white font-[ultraStandard] font-normal py-18"> What Can Parapluie Do ? </h1>
            </div>
            <div className="w-full h-auto flex items-center justify-center py-18">
                { features.map((feature, index) => (
                    <FeatureCard
                      key={feature.title}
                      item={feature}
                    />
                ))}
          </div>
        </section>
    )
}