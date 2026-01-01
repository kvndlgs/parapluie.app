import posts from '../../src/content/posts.json';

export const prerender = () => {
      // Vike saura exactement quelles pages générer au build
        return posts.map(post => `/post/${post.slug}`);
};