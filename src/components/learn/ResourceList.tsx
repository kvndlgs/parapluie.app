import { ExternalLink, Clock, BookOpen, Video, PenTool as Tool, Image } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LearningResource } from '@/types/learn';
import { cn } from '@/lib/utils';

interface ResourceListProps {
  resources: LearningResource[];
  title?: string;
}

export function ResourceList({ resources, title = "Additional Resources" }: ResourceListProps) {
  const getResourceIcon = (type: LearningResource['type']) => {
    switch (type) {
      case 'video':
        return Video;
      case 'tool':
        return Tool;
      case 'infographic':
        return Image;
      default:
        return BookOpen;
    }
  };

  const difficultyColors = {
    beginner: 'bg-green-100 text-green-800 border-green-200',
    intermediate: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    advanced: 'bg-red-100 text-red-800 border-red-200'
  };

  const typeColors = {
    article: 'bg-blue-100 text-blue-800',
    guide: 'bg-purple-100 text-purple-800',
    video: 'bg-red-100 text-red-800',
    tool: 'bg-green-100 text-green-800',
    infographic: 'bg-orange-100 text-orange-800'
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-neutral-900">{title}</h2>
      
      <div className="grid gap-4">
        {resources.map((resource) => {
          const IconComponent = getResourceIcon(resource.type);
          
          return (
            <Card key={resource.id} className="hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-neutral-100 rounded-lg">
                    <IconComponent className="w-5 h-5 text-neutral-600" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h3 className="font-semibold text-neutral-900 line-clamp-1">
                        {resource.title}
                      </h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {resource.isExternal && (
                          <ExternalLink className="w-4 h-4 text-neutral-400" />
                        )}
                      </div>
                    </div>
                    
                    <p className="text-neutral-600 text-sm mb-3 line-clamp-2">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center gap-3 mb-4">
                      <Badge 
                        variant="outline" 
                        className={cn('text-xs', difficultyColors[resource.difficulty])}
                      >
                        {resource.difficulty}
                      </Badge>
                      
                      <Badge 
                        variant="secondary" 
                        className={cn('text-xs', typeColors[resource.type])}
                      >
                        {resource.type}
                      </Badge>
                      
                      {resource.readTime && (
                        <div className="flex items-center gap-1 text-xs text-neutral-500">
                          <Clock className="w-3 h-3" />
                          {resource.readTime} min
                        </div>
                      )}
                    </div>
                    
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm"
                      className="w-full sm:w-auto"
                    >
                      <a 
                        href={resource.url} 
                        target={resource.isExternal ? "_blank" : "_self"}
                        rel={resource.isExternal ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-2"
                      >
                        <IconComponent className="w-4 h-4" />
                        {resource.type === 'tool' ? 'Use Tool' : 'Read More'}
                        {resource.isExternal && <ExternalLink className="w-3 h-3" />}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      {resources.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <BookOpen className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-neutral-900 mb-2">No resources available</h3>
            <p className="text-neutral-600">
              Resources for this topic are being prepared. Check back soon!
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}