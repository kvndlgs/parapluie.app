import { getAllPosts } from "../../../src/content/posts";

export default {
  // ... tes autres configs (title, etc.)
  
  onBeforePrerenderStart: async () => {
    const posts = getAllPosts();
    return posts.map(p => `/post/${p.slug}`);
  }
};
