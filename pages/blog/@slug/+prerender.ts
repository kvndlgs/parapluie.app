import postsData from '../../../src/content/posts.json';

interface Post {
  slug: string;
}

export const prerender = () => {
      // Vike saura exactement quelles pages générer au build
        return (postsData as Post[]).map(post => `/post/${post.slug}`);
};