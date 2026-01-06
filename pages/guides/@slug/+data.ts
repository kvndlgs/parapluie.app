import { redirect } from "vike/abort";
import type { PageContextServer } from "vike/types";
import guidesData from "../../../src/content/guides.json";

export interface Guide {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  content: string;
  steps?: { title: string; content: string }[];
  items: {
    title: string;
  };
  image?: string;
  description?: string;
}

const guides = guidesData as Guide[];

const getGuideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
const getAllGuides = () =>
  [...guides].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );


export const data = async (pageContext: PageContextServer) => {
  const { slug } = pageContext.routeParams;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    throw redirect("/guides");
  }

  const allGuides = getAllGuides();
  const otherGuides = allGuides.filter((p) => p.slug !== slug).slice(0, 2);

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
        name: "Guides",
        item: "https://parapluie.app/guides",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: `https://parapluie.app/guide/${guide.slug}`,
      },
    ],
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `https://parapluie.app/guide/${slug}#howto`,
    name: guide.title,
    description: guide.excerpt || guide.description || "",
    image: guide.image || "https://parapluie.app/og-guides.png",
    step:
      guide.steps?.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: (step.title || "").replace(/"/g, '\"'),
        itemListElement: [
          {
            "@type": "HowToDirection",
            text: (step.content || "").replace(/\n/g, " ").replace(/"/g, '\"'),
          },
        ],
      })) || [],
  };


  return {
    guide,
    otherGuides,
    title: `${guide.title} - Parapluie`,
    description: guide.excerpt,
    canonical: `https://parapluie.app/guide/${slug}`,
    image: "https://parapluie.app/og-guides.png", // Utilise une URL absolue idéalement
    howTo,
    breadCrumbList,
  };
};

export type Data = Awaited<ReturnType<typeof data>>;
