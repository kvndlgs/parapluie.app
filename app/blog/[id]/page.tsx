'use client';

import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { use } from 'react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: string;
  publishedAt: string;
  slug: string;
}

interface BlogPostResponse {
  post: BlogPost;
}

async function fetchBlogPost(id: string): Promise<BlogPostResponse> {
  const response = await fetch(`/api/blog/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch blog post');
  }
  return response.json();
}

export default function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['blog-post', id],
    queryFn: () => fetchBlogPost(id),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-6"></div>
            <div className="h-4 bg-gray-200 rounded mb-4"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <h1 className="text-xl font-semibold text-red-800 mb-2">Post Not Found</h1>
            <p className="text-red-600 mb-4">The blog post you're looking for doesn't exist or failed to load.</p>
            <Link 
              href="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const post = data?.post;
  if (!post) return null;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <nav className="mb-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Blog
          </Link>
        </nav>
        
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <header className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center text-gray-600">
                <span>By {post.author}</span>
                <span className="mx-3">•</span>
                <time>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</time>
              </div>
            </header>
            
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                
                if (paragraph.startsWith('```')) {
                  const isClosing = paragraph === '```';
                  if (isClosing) return null;
                  
                  const language = paragraph.replace('```', '');
                  let codeContent = '';
                  let i = index + 1;
                  
                  while (i < post.content.split('\n').length && post.content.split('\n')[i] !== '```') {
                    codeContent += post.content.split('\n')[i] + '\n';
                    i++;
                  }
                  
                  return (
                    <pre key={index} className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6">
                      <code className={`language-${language}`}>
                        {codeContent.trim()}
                      </code>
                    </pre>
                  );
                }
                
                if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ') || paragraph.startsWith('4. ')) {
                  return (
                    <li key={index} className="ml-6 mb-2">
                      {paragraph.replace(/^\d+\. \*\*(.+?)\*\*: (.+)$/, (match, title, desc) => (
                        <>
                          <strong>{title}</strong>: {desc}
                        </>
                      ))}
                    </li>
                  );
                }
                
                if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="ml-6 mb-2">
                      {paragraph.replace('- ', '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')}
                    </li>
                  );
                }
                
                if (paragraph.trim() === '') {
                  return <br key={index} />;
                }
                
                return (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph.replace(/\*\*(.+?)\*\*/g, (match, text) => text).replace(/`(.+?)`/g, (match, code) => code)}
                  </p>
                );
              })}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}