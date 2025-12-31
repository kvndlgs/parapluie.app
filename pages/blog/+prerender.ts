// pages/blog/+prerender.ts
import { getAllPosts } from '../../src/content/posts';

const onBeforePrerenderStart = async () => {
  const posts = getAllPosts();
  const urls = posts.map(post => `/blog/${post.slug}`);
  return Array.from(new Set(urls));
};

export default onBeforePrerenderStart;