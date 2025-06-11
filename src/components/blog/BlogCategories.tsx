import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogCategories, sampleBlogPosts } from '@/data/blogData';
import { cn } from '@/lib/utils';
import * as Icons from 'lucide-react';

interface BlogCategoriesProps {
  currentCategory?: string;
}

export function BlogCategories({ currentCategory }: BlogCategoriesProps) {
  // Count posts per category
  const getCategoryPostCount = (categorySlug: string) => {
    return sampleBlogPosts.filter(post => post.category.slug === categorySlug).length;
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Browse by Category</h2>
        <p className="text-neutral-600">
          Explore cybersecurity topics organized by area of concern
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogCategories.map((category) => {
          const IconComponent = (Icons as any)[category.icon] || Icons.Shield;
          const postCount = getCategoryPostCount(category.slug);
          const isActive = currentCategory === category.slug;

          return (
            <Link key={category.id} to={`/blog/category/${category.slug}`}>
              <Card className={cn(
                "h-full hover:shadow-lg transition-all duration-300 hover:scale-105",
                isActive && "ring-2 ring-secondary-500 shadow-lg"
              )}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "p-3 rounded-lg text-white",
                      category.color
                    )}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-neutral-900 mb-1 line-clamp-1">
                        {category.name}
                      </h3>
                      <p className="text-sm text-neutral-600 mb-3 line-clamp-2">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          {postCount} article{postCount !== 1 ? 's' : ''}
                        </Badge>
                        {isActive && (
                          <Badge variant="default" className="text-xs">
                            Active
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>

      {/* Quick Stats */}
      <div className="bg-neutral-50 rounded-lg p-6">
        <h3 className="font-semibold text-neutral-900 mb-4">Content Overview</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary-600">
              {sampleBlogPosts.length}
            </div>
            <div className="text-sm text-neutral-600">Total Articles</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {blogCategories.length}
            </div>
            <div className="text-sm text-neutral-600">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">
              {sampleBlogPosts.filter(post => post.threatLevel === 'high' || post.threatLevel === 'critical').length}
            </div>
            <div className="text-sm text-neutral-600">High Priority</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {sampleBlogPosts.filter(post => post.featured).length}
            </div>
            <div className="text-sm text-neutral-600">Featured</div>
          </div>
        </div>
      </div>
    </div>
  );
}