// pages/blog/latest/+data.ts
import { redirect } from "vike/abort";
import type { PageContextServer } from "vike/types";
import { getAllPosts } from "@/content/posts"; // Ajuste le chemin

export const data = async (pageContext: PageContextServer) => {
  const allPosts = getAllPosts();

  // 2. The "Latest" post is simply the first one in the sorted array
  const post = allPosts[0];

  // 3. Get the "next" two posts for the "Read More" section
  const otherPosts = allPosts.slice(1, 3);

  if (!post) {
    throw redirect("/blog");
  }

  return {
    post,
    otherPosts,
    title: "Articles récents - Parapluie",
    description: "Derniers articles du blog",
    canonical: "https://parapluie.app/blog/latest",
  };
};

export type Data = Awaited<ReturnType<typeof data>>;
