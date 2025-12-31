// /pages/guide/@slug/+data.ts

import { redirect } from "vike/abort";
import type { PageContextServer } from 'vike/types'
import { getGuideBySlug, getAllGuides } from '@/content/guides'; // Ajuste le chemin

export const data = async (pageContext: PageContextServer) => {
    const { slug } = pageContext.routeParams;
    const guide = getGuideBySlug(slug);

    if (!guide) {
        // En mode prerender, on évite le redirect brutal si possible
        // ou on s'assure qu'il n'est lancé qu'en runtime
        throw redirect("/guides");
    };
        
    const allGuides = getAllGuides();
    const otherGuides = allGuides.filter(p => p.slug !== slug).slice(0, 2);

    const guideJsonLd = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": guide.title,
      "description": guide.excerpt || guide.description || "",
      "image": guide.image || "https://parapluie.app/og-guides.png",
      // FIX ICI: Ajout du ? avant .map et du || [] au cas où steps n'existe pas
      "step": guide.steps?.map((step: any, index: number) => ({
        "@type": "HowToStep",
        "position": index + 1,
        "name": step.title || `Étape ${index + 1}`,
        "itemListElement": [{
          "@type": "HowToDirection",
          "text": step.content || ""
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
