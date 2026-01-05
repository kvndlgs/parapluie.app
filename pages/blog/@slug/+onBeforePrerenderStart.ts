import postsData from "../../../src/content/posts.json";

interface Post {
  slug: string;
}

const onBeforePrerenderStart = () => {
  const posts = postsData as Post[];

  return posts.map((post) => `/post/${post.slug}`);
};

export default onBeforePrerenderStart;
