// pages/blog/latest/+data.ts 

import posts from "../../../src/content/posts.json";

export const data = async () => {
  const allPosts = [...postsData].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return {
    posts: allPosts
  }
  
};

export type Data = Awaited<ReturnType<typeof data>>;
