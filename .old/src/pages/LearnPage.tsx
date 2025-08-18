import { LearnHero } from '@/components/learn/LearnHero';
import { LearnCard } from '@/components/learn/LearnCard';
import { learningSections } from '@/data/learningData';
import * as Icons from 'lucide-react';

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <LearnHero />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Learning Sections */}
        {learningSections.map((section) => {
          const SectionIcon = (Icons as any)[section.icon] || Icons.BookOpen;
          
          return (
            <section key={section.id} className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-lg text-white ${section.color}`}>
                  <SectionIcon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-neutral-900">
                    {section.title}
                  </h2>
                  <p className="text-neutral-600 mt-1">
                    {section.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.topics.map((topic) => (
                  <LearnCard 
                    key={topic.id} 
                    topic={topic} 
                    sectionColor={section.color}
                  />
                ))}
              </div>
            </section>
          );
        })}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-secop-50 to-purple-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Ready to Strengthen Your Digital Security?
          </h2>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            Start with any topic that interests you. Each learning module is designed to be 
            completed independently, so you can learn at your own pace and focus on what 
            matters most to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#web-security" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Start with Web Security
            </a>
            <a 
              href="#social-engineering" 
              className="border border-neutral-300 text-neutral-700 px-6 py-3 rounded-lg hover:bg-neutral-50 transition-colors"
            >
              Learn Social Engineering Defense
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}