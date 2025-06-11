import { Link } from 'react-router-dom';
import { Shield, ArrowRight, Users, AlertTriangle, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export function BlogHero() {
  const highlights = [
    {
      icon: Shield,
      title: "Latest Threats",
      description: "Stay updated on emerging cybersecurity risks",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: Users,
      title: "Senior-Focused",
      description: "Content designed specifically for older adults",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: Lock,
      title: "Practical Tips",
      description: "Real-world protection strategies you can use today",
      color: "text-purple-600 bg-purple-100"
    }
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-blue-600 rounded-full">
              <Shield className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Stay Safe in the
            <span className="text-blue-600"> Digital World</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Expert cybersecurity guidance written in plain language. Learn how to protect yourself 
            from online threats, AI scams, and digital fraud with practical, easy-to-follow advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-base px-8 py-3">
              <Link to="/blog/ai-voice-cloning-scams-seniors">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Read Latest Alert
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="text-base px-8 py-3">
              <Link to="/blog/categories">
                Browse All Topics
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex p-3 rounded-full ${highlight.color} mb-4`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-600">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-sm border p-6 max-w-4xl mx-auto">
            <p className="text-sm text-gray-500 mb-4">Trusted by thousands of readers</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Monthly Readers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Security Articles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">Expert</div>
                <div className="text-sm text-gray-600">Reviewed Content</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">Free</div>
                <div className="text-sm text-gray-600">Always Free Access</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}