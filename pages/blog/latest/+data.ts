// pages/blog/latest/+data.ts
import { redirect } from "vike/abort";
// import type { PageContextServer } from "vike/types";
import posts from "../../../src/content/posts.json";



export const data = async () => {

  // 2. The "Latest" post is simply the first one in the sorted array
  const post = posts[0];

  // 3. Get the "next" two posts for the "Read More" section
  const otherPosts = posts.slice(1, 3);

  if (!post) {
    throw redirect("/blog");
  }

  return {
   
    post,
            
    otherPosts,
            
    title: `${post.title} - Parapluie`,
        
    description: post.excerpt,
       
    canonical: `https://parapluie.app/blog/latest`,                             };
  
};

export type Data = Awaited<ReturnType<typeof data>>;
