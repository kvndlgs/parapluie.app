import { useParams, Link, Navigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Calendar, Clock, User, ArrowLeft, Tag, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { SocialShare } from '@/components/blog/SocialShare';
import { BlogCard } from '@/components/blog/BlogCard';
import { sampleBlogPosts } from '@/data/blogData';
import { cn } from '@/lib/utils';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  
  const post = sampleBlogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = sampleBlogPosts
    .filter(p => p.id !== post.id && p.category.id === post.category.id)
    .slice(0, 3);

  const threatLevelColors = {
    low: 'bg-green-100 text-green-800 border-green-200',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    high: 'bg-orange-100 text-orange-800 border-orange-200',
    critical: 'bg-red-100 text-red-800 border-red-200'
  };

  // Split content into paragraphs and render with proper formatting
  const renderContent = (content: string) => {
    const sections = content.split('\n\n').filter(section => section.trim());
    
    return sections.map((section, index) => {
      const trimmedSection = section.trim();
      
      // Headers
      if (trimmedSection.startsWith('# ')) {
        return (
          <h1 key={index} className="text-3xl font-bold text-neutral-900 mb-6">
            {trimmedSection.substring(2)}
          </h1>
        );
      }
      
      if (trimmedSection.startsWith('## ')) {
        return (
          <h2 key={index} className="text-2xl font-semibold text-neutral-900 mb-4 mt-8">
            {trimmedSection.substring(3)}
          </h2>
        );
      }
      
      if (trimmedSection.startsWith('### ')) {
        return (
          <h3 key={index} className="text-xl font-semibold text-neutral-900 mb-3 mt-6">
            {trimmedSection.substring(4)}
          </h3>
        );
      }

      // Lists
      if (trimmedSection.includes('\n- ')) {
        const items = trimmedSection.split('\n').filter(line => line.trim().startsWith('- '));
        return (
          <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-neutral-700 leading-relaxed">
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
          <ol key={index} className="list-decimal pl-6 mb-4 space-y-2">
            {items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-neutral-700 leading-relaxed">
                {item.replace(/^\d+\.\s*/, '')}
              </li>
            ))}
          </ol>
        );
      }

      // Bold text
      if (trimmedSection.startsWith('**') && trimmedSection.endsWith('**')) {
        return (
          <p key={index} className="font-semibold text-neutral-900 mb-4">
            {trimmedSection.slice(2, -2)}
          </p>
        );
      }

      // Regular paragraphs
      return (
        <p key={index} className="text-neutral-700 mb-4 leading-relaxed">
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
          <Button variant="ghost" asChild className="text-neutral-600 hover:text-neutral-900">
            <Link to="/blog" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8">
          {/* Category and Threat Level */}
          <div className="flex items-center gap-3 mb-4">
            <Badge className={cn('text-white', post.category.color)}>
              {post.category.name}
            </Badge>
            {post.threatLevel && (
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
            )}
            {post.featured && (
              <Badge variant="secondary">
                Featured
              </Badge>
            )}
            {post.isAiGenerated && (
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                AI-Generated
              </Badge>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-600 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author.name}
            </div>
          </div>

          {/* Author and Share */}
          <div className="flex items-center justify-between pb-6 border-b">
            <div className="flex items-center gap-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>
                  {post.author.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-neutral-900">{post.author.name}</div>
                {post.author.bio && (
                  <div className="text-sm text-neutral-600">{post.author.bio}</div>
                )}
              </div>
            </div>
            <SocialShare 
              title={post.title}
              url={`/blog/${post.slug}`}
              description={post.excerpt}
            />
          </div>
        </header>

        {/* Hero Image */}
        {post.image && (
          <div className="mb-8">
            <div className="aspect-video relative overflow-hidden rounded-lg">
              <img
                src={post.image.url}
                alt={post.image.alt}
                className="w-full h-full object-cover"
              />
            </div>
            {post.image.caption && (
              <p className="text-sm text-neutral-600 text-center mt-2 italic">
                {post.image.caption}
              </p>
            )}
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {renderContent(post.content)}
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <Separator className="my-8" />

        {/* Article Footer */}
        <div className="bg-neutral-50 rounded-lg p-6 mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Found this helpful?</h3>
              <p className="text-neutral-600">Share it with others who might benefit from this information.</p>
            </div>
            <SocialShare 
              title={post.title}
              url={`/blog/${post.slug}`}
              description={post.excerpt}
            />
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}