import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Clock, User, Tag, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BlogPost } from '@/types/blog';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const threatLevelColors = {
    low: 'bg-green-100 text-green-800 border-green-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    high: 'bg-orange-100 text-orange-800 border-orange-200',
    critical: 'bg-red-100 text-red-800 border-red-200'
  };

  const CardWrapper = featured ? 'div' : Card;
  const cardProps = featured ? {} : { className: 'h-full hover:shadow-lg transition-shadow duration-300' };

  return (
    <CardWrapper {...cardProps}>
      {featured && (
        <div className="relative overflow-hidden rounded-lg bg-white shadow-xl">
          <div className="aspect-video relative">
            <img
              src={post.image.url}
              alt={post.image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-white/90 text-neutral-900">
                Featured
              </Badge>
            </div>
            {post.threatLevel && (
              <div className="absolute top-4 right-4">
                <Badge
                  variant="outline"
                  className={cn(
                    'capitalize',
                    threatLevelColors[post.threatLevel]
                  )}
                >
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  {post.threatLevel} Risk
                </Badge>
              </div>
            )}
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Badge
                className={cn('text-white', post.category.color)}
              >
                {post.category.name}
              </Badge>
              <span className="text-sm text-neutral-500">
                {format(new Date(post.publishedAt), 'MMM d, yyyy')}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-3 line-clamp-2">
              <Link 
                to={`/blog/${post.slug}`}
                className="hover:text-secondary-600 transition-colors"
              >
                {post.title}
              </Link>
            </h2>
            <p className="text-neutral-600 mb-4 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>
                    {post.author.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <div className="font-medium text-neutral-900">{post.author.name}</div>
                  <div className="flex items-center gap-2 text-neutral-500">
                    <Clock className="w-3 h-3" />
                    {post.readTime} min read
                  </div>
                </div>
              </div>
              <Link 
                to={`/blog/${post.slug}`}
                className="text-secondary-600 hover:text-secondary-800 font-medium"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      )}

      {!featured && (
        <>
          <CardHeader className="p-0">
            <div className="aspect-video relative overflow-hidden rounded-t-lg">
              <img
                src={post.image.url}
                alt={post.image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              {post.threatLevel && (
                <div className="absolute top-2 right-2">
                  <Badge
                    variant="outline"
                    className={cn(
                      'capitalize text-xs',
                      threatLevelColors[post.threatLevel],
                      'bg-white/90'
                    )}
                  >
                    <AlertTriangle className="w-2 h-2 mr-1" />
                    {post.threatLevel}
                  </Badge>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Badge
                variant="secondary"
                className={cn('text-xs text-white', post.category.color)}
              >
                {post.category.name}
              </Badge>
              <span className="text-xs text-neutral-500">
                {format(new Date(post.publishedAt), 'MMM d')}
              </span>
            </div>
            <h3 className="font-semibold text-neutral-900 mb-2 line-clamp-2 hover:text-secondary-600 transition-colors">
              <Link to={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h3>
            <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-neutral-500">
              <div className="flex items-center gap-1">
                <User className="w-3 h-3" />
                {post.author.name}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}m
              </div>
            </div>
            <div className="flex flex-wrap gap-1 mt-3">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  <Tag className="w-2 h-2 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </>
      )}
    </CardWrapper>
  );
}