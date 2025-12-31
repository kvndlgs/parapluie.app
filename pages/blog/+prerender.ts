// pages/blog/+prerender.ts (or wherever it is)
import { getAllPosts } from '../../src/content/posts';  // Same idea—count the ../

export const onBeforePrerenderStart = async () => {
  const posts = getAllPosts();
  const urls = posts.map(post => `/blog/${post.slug}`);  // Adjust route as needed
  return Array.from(new Set(urls));
};