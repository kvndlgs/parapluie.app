// pages/blog/index/+data.ts

import postsData from "../../../src/content/posts.json";

export const data = async () => {
  const allPosts = [...postsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return {
    posts: allPosts,
  };
};

export type Data = Awaited<ReturnType<typeof data>>;
