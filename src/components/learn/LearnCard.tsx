import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LearningTopic } from '@/types/learn';
import { cn } from '@/lib/utils';
import * as Icons from 'lucide-react';

interface LearnCardProps {
    topic: LearningTopic;
    sectionColor: string;
}

export function LearnCard({ topic, sectionColor }: LearnCardProps) {


    const difficultyColors = {
        beginner: 'bg-green-100 text-green-800',
        intermediate: 'bg-orange-100 text-orange-800',
        advanced: 'bg-red-100 text-red-800'
    };

    return (
        <Card className='h-full hover:shadow-lg transition-shadow duration-300'>
            <CardHeader className='pb-4'>
                <div className='flex items-start gap-3'>
                    <div className={cn('p-2 rounded-lg text-white', sectionColor)}>
                     {/*   <IconComponent className='w-5 h-5' /> */}
                    </div>
                </div>
                <CardTitle>{topic.title}</CardTitle>
                <p className='text-sm text-neutral line-clamp-2'>
                    {topic.description}
                </p>
            </CardHeader>
            <CardContent className='pt-0'>
                {/* summary*/}
                <div className='mb-4'>
                    <p className='text-sm text-neutral-700 line-clamp-3'>
                        {topic.summary}
                    </p>
                </div>
                {/* key takeaways */}
                <div className='mb-4'>
                    <h4 className='text-sm font-medium text-neutral-800 mb-2'> Key Takeaways: </h4>
                    <ul className='text-xs text-neutral-600 space-y-1'>
                        {/* topic.keyTakeaways.slice(0, 2).map((takeaway, index) => {
                            <li key={index} className='flex items-start gap-1'>
                                <span className='text-secondary mt-1'>.</span>
                                <span className='line-clamp-1'>{takeaway}</span>
                            </li>
                        })
                       */}
                        {topic.keyTakeaways.length > 2 && (
                            <li className='text-neutral italic'>
                                +{topic.keyTakeaways.length - 2} more insight...
                            </li>
                        )}
                    </ul>
                </div>
                {/* Resources Preview */}
                <div className="mb-4">
                    <h4 className="text-sm font-medium text-neutral-800 mb-2">Resources:</h4>
                    <div className="space-y-2">
                        {topic.resources.slice(0, 2).map((resource) => (
                            <div key={resource.id} className="flex items-center gap-2 text-xs">
                                <ExternalLink className="w-3 h-3 text-neutral-400" />
                                <span className="text-neutral-600 line-clamp-1">{resource.title}</span>
                                <Badge
                                    variant="outline"
                                    className={cn('text-xs', difficultyColors[resource.difficulty])}
                                >
                                    {resource.difficulty}
                                </Badge>
                            </div>
                        ))}
                        {topic.resources.length > 2 && (
                            <div className="text-xs text-neutral italic">
                                +{topic.resources.length - 2} more resources
                            </div>
                        )}
                    </div>
                </div>
                {/* Action Button */}
                <Button asChild className="w-full" size="sm">
                    <Link to={`/learn/${topic.id}`}>
                        <Icons.BookOpen className="w-4 h-4 mr-2" />
                        Start Learning
                    </Link>
                </Button>
            </CardContent>
        </Card>
    )
}