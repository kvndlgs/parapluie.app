import type { BlogPost } from '../route';

const mockPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 15',
    content: 'Next.js 15 brings many exciting features including improved performance, better developer experience, and enhanced server components. In this post, we\'ll explore the key features and how to get started.\n\nNext.js 15 introduces several groundbreaking features:\n\n1. **Enhanced Server Components**: Better performance and reduced client-side JavaScript\n2. **Improved Caching**: More intelligent caching strategies\n3. **Better Developer Experience**: Enhanced error messages and debugging tools\n4. **Turbopack Integration**: Faster builds and hot reloads\n\nTo get started, create a new Next.js 15 project:\n\n```bash\nnpx create-next-app@latest my-app\n```\n\nThis will set up a new project with all the latest features enabled by default.',
    excerpt: 'Explore the exciting new features in Next.js 15 and learn how to get started.',
    author: 'John Doe',
    publishedAt: '2024-01-15',
    slug: 'getting-started-nextjs-15'
  },
  {
    id: '2',
    title: 'Mastering React Query',
    content: 'React Query (now TanStack Query) revolutionizes data fetching in React applications. Learn how to implement caching, background updates, and optimistic updates with ease.\n\n## Key Benefits\n\n- **Automatic Caching**: Intelligent caching with stale-while-revalidate strategy\n- **Background Updates**: Keep data fresh without user intervention\n- **Optimistic Updates**: Update UI immediately for better UX\n- **Error Handling**: Built-in error boundaries and retry logic\n\n## Basic Usage\n\n```javascript\nimport { useQuery } from \'@tanstack/react-query\';\n\nfunction Profile() {\n  const { data, isLoading, error } = useQuery({\n    queryKey: [\'profile\'],\n    queryFn: fetchProfile\n  });\n\n  if (isLoading) return \'Loading...\';\n  if (error) return \'Error occurred!\';\n  return <div>{data.name}</div>;\n}\n```',
    excerpt: 'Learn how React Query can revolutionize data fetching in your React applications.',
    author: 'Jane Smith',
    publishedAt: '2024-01-10',
    slug: 'mastering-react-query'
  },
  {
    id: '3',
    title: 'Building Scalable TypeScript Applications',
    content: 'TypeScript provides excellent tooling for building large-scale applications. This guide covers best practices, advanced types, and project organization strategies.\n\n## Project Structure\n\nA well-organized TypeScript project should follow these principles:\n\n1. **Feature-based organization**: Group related files together\n2. **Clear type definitions**: Use interfaces and types effectively\n3. **Consistent naming**: Follow established conventions\n4. **Proper imports**: Use absolute imports and barrel exports\n\n## Advanced Types\n\nTypeScript offers powerful type features:\n\n```typescript\n// Utility types\ntype Partial<T> = {\n  [P in keyof T]?: T[P];\n};\n\n// Conditional types\ntype ApiResponse<T> = T extends string ? string : T;\n\n// Mapped types\ntype Readonly<T> = {\n  readonly [P in keyof T]: T[P];\n};\n```\n\n## Best Practices\n\n- Use strict TypeScript configuration\n- Implement proper error handling\n- Write comprehensive tests\n- Document complex types',
    excerpt: 'Best practices and strategies for building scalable TypeScript applications.',
    author: 'Mike Johnson',
    publishedAt: '2024-01-05',
    slug: 'building-scalable-typescript-apps'
  }
];

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const post = mockPosts.find(p => p.id === id);
  
  if (!post) {
    return Response.json({ error: 'Post not found' }, { status: 404 });
  }
  
  return Response.json({ post });
}