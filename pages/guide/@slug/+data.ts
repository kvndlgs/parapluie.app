// /pages/guide/@slug/+data.ts

import { redirect } from "vike/abort";
import type { PageContextServer } from 'vike/types'
import { getGuideBySlug, getAllGuides } from '@/content/guides'; // Ajuste le chemin

export const data = async (pageContext: PageContextServer) => {
    const { slug } = pageContext.routeParams;
    const guide = getGuideBySlug(slug);

    if (!guides) {
        throw redirect("/guides");
    }

    const allGuides = getAllGuides();
    const otherGuides = allGuides.filter(p => p.slug !== slug).slice(0, 2);

    const guideJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": guide.title,
  "description": guide.description,
  "image": guide.image,
  "step": guide.steps.map((step, index) => ({
    "@type": "HowToStep",
    "position": index + 1,
    "name": step.title,
    "itemListElement": [{
      "@type": "HowToDirection",
      "text": step.content
    }]
  }))
};


    return {
        guide,
        otherGuides,
        title: `${guide.title} - Parapluie`,
        description: guide.excerpt,
        canonical: `https://parapluie.app/guide/${slug}`,
        guideJsonLd,
    };
};


export type Data = Awaited<ReturnType<typeof data>>;
