// /pages/post/@slug/+data.ts
import { redirect } from "vike/abort";
import type { PageContextServer } from "vike/types";
import { getPostBySlug, getAllPosts } from "../../../src/content/posts"; // Ajuste le chemin

export const data = async (pageContext: PageContextServer) => {
  const { slug } = pageContext.routeParams;
  const post = getPostBySlug(slug);

  if (!post) {
    throw redirect("/blog");
  }

  const allPosts = getAllPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: { "@type": "Person", name: post.author },
  };

  return {
    post,
    otherPosts,
    title: `${post.title} - Parapluie`,
    description: post.excerpt,
    canonical: `https://parapluie.app/post/${slug}`,
    blogJsonLd,
  };
};

export type Data = Awaited<ReturnType<typeof data>>;
