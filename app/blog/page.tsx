'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  slug: string;
}

interface BlogResponse {
  posts: BlogPost[];
  total: number;
}

async function fetchBlogPosts(): Promise<BlogResponse> {
  const response = await fetch('/api/blog');
  if (!response.ok) {
    throw new Error('Failed to fetch blog posts');
  }
  return response.json();
}

export default function BlogPage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: fetchBlogPosts,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-primary py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-right-serif font-medium text-accent-foreground mb-8">Blog</h1>
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
                <div className="h-6 bg-gray-200 rounded mb-4"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-primary-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-right-serif font-medium text-accent-foreground mb-8">Blog</h1>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-600 font-watch font-medium">Failed to load blog posts. Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-serif text-accent-foreground">Blog</h1>
          <Link 
            href="/" 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
        
        <div className="space-y-6">
          {data?.posts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="p-6">
                <div className="flex items-center font-sans text-sm text-gray-500 mb-2">
                  <span>By {post.author}</span>
                  <span className="mx-2">•</span>
                  <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
                </div>
                
                <h2 className="text-2xl font-serif font-normal text-accent-foreground mb-3">
                  <Link 
                    href={`/blog/${post.id}`}
                    className="hover:text-accent-foreground/80 transition-colors duration-200"
                  >
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-gray-600 mb-4 font-sans leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-accent-foreground font-sans font-medium"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        {data?.posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No blog posts available yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}