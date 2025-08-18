import { Shield, BookOpen, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function LearnHero() {
  const highlights = [
    {
      icon: Shield,
      title: "Expert-Curated",
      description: "Content reviewed by cybersecurity professionals",
      color: "text-secondary-600 bg-secondary-100"
    },
    {
      icon: BookOpen,
      title: "Easy to Understand",
      description: "Complex topics explained in simple terms",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: Users,
      title: "Real-World Focus",
      description: "Practical scenarios you might actually encounter",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: Target,
      title: "Actionable Advice",
      description: "Clear steps you can take to improve your security",
      color: "text-orange-600 bg-orange-100"
    }
  ];

  return (
    <div className="relative bg-gradient-to-b from-secondary-100 via-secondary-200 to-white pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-secondary-600 mb-6">
           Learning Center
          </h1>
          <p className="text-xl text-neutral-800 max-w-3xl mx-auto mb-8 leading-relaxed">
            Master the fundamentals of web security and social engineering prevention with 
            our comprehensive, easy-to-understand learning resources. Build confidence in 
            your digital safety knowledge.
          </p>
          <div className="bg-white rounded-lg shadow-sm border p-4 max-w-2xl mx-auto">
            <p className="text-sm text-neutral-600 mb-2">
              <strong>What you'll learn:</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-neutral-700">
              <div>• Recognize common online threats</div>
              <div>• Create strong password strategies</div>
              <div>• Spot social engineering tactics</div>
              <div>• Respond to suspicious activities</div>
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-3 rounded-full ${highlight.color} mb-4`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Learning Path Overview */}
        <div className="mt-16 bg-white rounded-lg shadow-sm border p-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6 text-center">
            Your Learning Journey
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-secondary-600 mb-3">
                1. Web Security Fundamentals
              </h3>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-secondary-500 mt-1">•</span>
                  <span>Understand common online threats and how they work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-500 mt-1">•</span>
                  <span>Learn password security and two-factor authentication</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary-500 mt-1">•</span>
                  <span>Develop safe browsing and online shopping habits</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-secondary-600 mb-3">
                2. Social Engineering Defense
              </h3>
              <ul className="space-y-2 text-neutral-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Recognize manipulation tactics and primary flags</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Study real-world attack scenarios and responses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1">•</span>
                  <span>Build effective response strategies and verification habits</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}