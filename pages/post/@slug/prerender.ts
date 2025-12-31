// pages/podr/@slug/prerender.ts
import { getAllPosts } from "../../../src/content/posts";

export const onBeforePrerenderStart = async () => {
    const posts = getAllPosts();
    return posts.map((post) => `/post/${post.slug}`);
};
