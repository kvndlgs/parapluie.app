import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, ExternalLink, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ResourceList } from '@/components/learn/ResourceList';
import { learningSections } from '@/data/learningData';
import { cn } from '@/lib/utils';
import * as Icons from 'lucide-react';

export function LearningTopicPage() {
  const { topicId } = useParams<{ topicId: string }>();
  
  // Find the topic across all sections
  let topic = null;
  let section = null;
  
  for (const sec of learningSections) {
    const foundTopic = sec.topics.find(t => t.id === topicId);
    if (foundTopic) {
      topic = foundTopic;
      section = sec;
      break;
    }
  }
  
  if (!topic || !section) {
    return <Navigate to="/learning" replace />;
  }

  const IconComponent = (Icons as any)[topic.icon] || Icons.BookOpen;

  // Split content into sections for better rendering
  const renderContent = (content: string) => {
    const sections = content.split('\n\n').filter(section => section.trim());
    
    return sections.map((section, index) => {
      const trimmedSection = section.trim();
      
      // Headers
      if (trimmedSection.startsWith('# ')) {
        return (
          <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6 mt-8 first:mt-0">
            {trimmedSection.substring(2)}
          </h1>
        );
      }
      
      if (trimmedSection.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-semibold text-gray-900 mb-4 mt-8">
            {trimmedSection.substring(3)}
          </h2>
        );
      }
      
      if (trimmedSection.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-gray-900 mb-3 mt-6">
            {trimmedSection.substring(4)}
          </h3>
        );
      }

      // Bold text (standalone)
      if (trimmedSection.startsWith('**') && trimmedSection.endsWith('**') && !trimmedSection.includes('\n')) {
        return (
          <p key={index} className="font-semibold text-gray-900 mb-4">
            {trimmedSection.slice(2, -2)}
          </p>
        );
      }

      // Lists
      if (trimmedSection.includes('\n- ')) {
        const items = trimmedSection.split('\n').filter(line => line.trim().startsWith('- '));
        return (
          <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-gray-700 leading-relaxed">
                {item.substring(2)}
              </li>
            ))}
          </ul>
        );
      }

      // Numbered lists
      if (/^\d+\./.test(trimmedSection)) {
        const items = trimmedSection.split('\n').filter(line => /^\d+\./.test(line.trim()));
        return (
          <ol key={index} className="list-decimal pl-6 mb-6 space-y-2">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-gray-700 leading-relaxed">
                {item.replace(/^\d+\.\s*/, '')}
              </li>
            ))}
          </ol>
        );
      }

      // Regular paragraphs
      return (
        <p key={index} className="text-gray-700 mb-4 leading-relaxed">
          {trimmedSection}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <div className="border-b bg-white sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Button variant="ghost" asChild className="text-gray-600 hover:text-gray-900">
            <Link to="/learning" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Learning Center
            </Link>
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Topic Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className={cn('p-3 rounded-lg text-white', section.color)}>
              <IconComponent className="w-6 h-6" />
            </div>
            <Badge variant="secondary" className="text-sm">
              {section.title}
            </Badge>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {topic.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {topic.description}
          </p>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold text-blue-900 mb-3">
              What You'll Learn
            </h2>
            <p className="text-blue-800 mb-4">
              {topic.summary}
            </p>
            <div className="grid gap-2">
              {topic.keyTakeaways.map((takeaway, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-blue-800 text-sm">{takeaway}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        {/* Quick Read Content */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <IconComponent className="w-5 h-5" />
              5-Minute Quick Read
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            {renderContent(topic.quickReadContent)}
          </CardContent>
        </Card>

        {/* Infographic */}
        {topic?.infoGraphic && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Quick Reference Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <img
                  src={topic.infoGraphic?.url}
                  alt={topic.infoGraphic?.alt}
                  className="max-w-full h-auto rounded-lg shadow-sm mx-auto"
                />
                {topic.infoGraphic?.caption && (
                  <p className="text-sm text-gray-600 mt-3 italic">
                    {topic.infoGraphic?.caption}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        <Separator className="my-8" />

        {/* External Resources */}
        <ResourceList resources={topic.resources} title="Trusted External Resources" />

        {/* Navigation */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button variant="outline" asChild>
              <Link to="/learning" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Learning Center
              </Link>
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">
                Found this helpful? Share your knowledge!
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a 
                    href={`https://twitter.com/intent/tweet?text=Just learned about ${topic.title} - great resource for cybersecurity education!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Share
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}