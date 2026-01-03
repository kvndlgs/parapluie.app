import { redirect } from "vike/abort";
import type { PageContextServer } from 'vike/types';
import postsData from '../../../src/content/posts.json'; 


export interface Post {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    readTime: string;
    tags: string[];
    content: string;
    image?: string;
    description?: string;
}


const posts = postsData as Post[];

const getPostBySlug = (slug: string) => posts.find(g => g.slug === slug);
const getAllPosts = () => [...postsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());


export const data = async (pageContext: PageContextServer) => {
  const { slug } = pageContext.routeParams;
  const post = getPostBySlug(slug);
  
  if (!post) {
    throw redirect("/blog");
  }

  const allPosts = getAllPosts();
  const otherPosts = allPosts.filter(p => p.slug !== slug).slice(0, 2);

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "blogPosting",   
    "name": post.title,    
    "description": post.excerpt || post.description || "",
  };

  return {
    guide, 
    otherGuides,
    title: `${post.title} - Parapluie`,
    description: guide.excerpt,
    canonical: `https://parapluie.app/post/${slug}`, 
    blogJsonLd
  };
};

export type Data = Awaited<ReturnType<typeof data>>;
