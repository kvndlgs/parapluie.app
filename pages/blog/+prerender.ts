import { getAllPosts } from '@/content/posts';  // or relative path

const onBeforePrerenderStart = async () => {
  const posts = getAllPosts();
  return posts.map(post => `/post/${post.slug}`);
};

export default onBeforePrerenderStart;