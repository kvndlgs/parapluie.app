// pages/guide/@slug/prerender.ts
import { getAllPosts } from '../../../src/content/posts';

export const prerender = async () => {
  const posts = getAllPosts();
  
  // On ne génère des pages QUE pour les guides qui existent
  // Vike n'appellera jamais le +data.ts avec un mauvais slug pendant le build
  return posts.map(post => `/post/${post.slug}`);
};
