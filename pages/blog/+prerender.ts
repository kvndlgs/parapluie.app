// pages/blog/+prerender.ts
import { getAllPosts } from '../../../src/content/posts';

export const onBeforePrerenderStart = async () => {
  const posts = getAllPosts();

  // Map to full URLs and ensure uniqueness (just in case)
  const urls = posts.map(post => `/post/${post.slug}`);

  return Array.from(new Set(urls)); // Removes any accidental duplicates
};