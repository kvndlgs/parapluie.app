import postsData from '../../../src/content/posts.json';

interface Post {
  slug: string;
}

export const prerender = () => {
        return (postsData as Post[]).map(post => `/post/${post.slug}`);
};