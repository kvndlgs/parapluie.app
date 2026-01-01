// /pages/post/@slug/+data.ts

import { redirect } from "vike/abort";
import type { PageContextServer } from "vike/types";
import posts from "@/content/posts.json";


interface Post {
    slug: string;
      
    title: string;
        
    excerpt: string;
          
    date: string;
            
    author: string;
              
    readTime: string;
                
    tags: string[];
                 
    content: string;
                            

}

export const data = async (pageContext: PageContextServer) => {
  const { slug } = pageContext.routeParams;
  const post = (posts as Post[]).find(p => p.slug === slug);

  if (!post) {
    throw redirect("/blog");
  }


  const otherPosts = (posts as Post[]).filter((p) => p.slug !== slug).slice(0, 2);

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
  };

  return {
    post,
    otherPosts,
    title: `${post.title} - Parapluie`,
    description: post.excerpt,
    canonical: `https://parapluie.app/post/${slug}`,
    blogJsonLd,
  };
};

export type Data = Awaited<ReturnType<typeof data>>;