// /pages/guide/@slug/+data.ts

import { redirect } from "vike/abort";
import type { PageContextServer } from 'vike/types'
import { getGuideBySlug, getAllGuides } from '@/content/guides';

export const data = async (pageContext: PageContextServer) => {
    const { slug } = pageContext.routeParams;
    const guide = getGuideBySlug(slug);

    // FIX 1: Utilise 'guide' (sans s)
    if (!guide) {
        throw redirect("/guides");
    }

    const allGuides = getAllGuides();
    const otherGuides = allGuides.filter(p => p.slug !== slug).slice(0, 2);

    // FIX 2: Assure-toi que .description ou .excerpt existe sur ton objet
    const guideJsonLd = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": guide.title,
      "description": guide.excerpt || guide.description, 
      "image": guide.image || "https://parapluie.app/og-guides.png",
      "step": guide.steps?.map((step: any, index: number) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.title,
        "itemListElement": [{
          "@type": "HowToDirection",
          "text": step.content
        }]
      })) || []
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
