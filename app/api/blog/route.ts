export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  slug: string;
}

const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 15',
    content: 'Next.js 15 brings many exciting features including improved performance, better developer experience, and enhanced server components. In this post, we\'ll explore the key features and how to get started.',
    excerpt: 'Explore the exciting new features in Next.js 15 and learn how to get started.',
    author: 'John Doe',
    publishedAt: '2024-01-15',
    slug: 'getting-started-nextjs-15'
  },
  {
    id: '2',
    title: 'Mastering React Query',
    content: 'React Query (now TanStack Query) revolutionizes data fetching in React applications. Learn how to implement caching, background updates, and optimistic updates with ease.',
    excerpt: 'Learn how React Query can revolutionize data fetching in your React applications.',
    author: 'Jane Smith',
    publishedAt: '2024-01-10',
    slug: 'mastering-react-query'
  },
  {
    id: '3',
    title: 'Building Scalable TypeScript Applications',
    content: 'TypeScript provides excellent tooling for building large-scale applications. This guide covers best practices, advanced types, and project organization strategies.',
    excerpt: 'Best practices and strategies for building scalable TypeScript applications.',
    author: 'Mike Johnson',
    publishedAt: '2024-01-05',
    slug: 'building-scalable-typescript-apps'
  }
];

export async function GET() {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return Response.json({
    posts: mockPosts,
    total: mockPosts.length
  });
}