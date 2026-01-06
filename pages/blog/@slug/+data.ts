import { redirect } from "vike/abort";
import type { PageContextServer } from "vike/types";
import postsData from "../../../src/content/posts.json";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  content: string;
  image?: string;
  description?: string;
  items: { title: string };
}

const posts = postsData as Post[];

const getPostBySlug = (slug: string) => posts.find((g) => g.slug === slug);
const getAllPosts = () =>
  [...postsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

export const data = async (pageContext: PageContextServer) => {
  const { slug } = pageContext.routeParams;
  const post = getPostBySlug(slug);

  if (!post) {
    throw redirect("/blog");
  }

  const allPosts = getAllPosts();
  const otherPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 2);

  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting", // Majuscules importantes
    headline: post.title,
    description: post.excerpt || post.description || "",
    image: post.image || "https://parapluie.app/og-image.png", // Google l'exige souvent
    datePublished: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: post.author || "Équipe Parapluie",
    },
    publisher: {
      "@type": "Organization",
      name: "Parapluie",
      logo: {
        "@type": "ImageObject",
        url: "https://parapluie.app/logo.png",
      },
    },
  };

  const breadCrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://parapluie.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Posts",
        item: "https://parapluie.app/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://parapluie.app/post/${post.slug}`,
      },
    ],
  };

  return {
    post,
    otherPosts,
    title: `${post.title} - Parapluie`,
    description: post.excerpt,
    canonical: `https://parapluie.app/post/${slug}`,
    blogPosting,
    breadCrumbList,
  };
};

export type Data = Awaited<ReturnType<typeof data>>;
