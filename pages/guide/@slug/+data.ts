// pages/guide/@slug/+data.ts

import { getAllGuides, getGuideBySlug } from "@/content/guides";
import type { PageContextServer } from 'vike/types'

export const data = async (pageContext: PageContextServer) => {
    const { slug } = pageContext.routeParams;
    const guide = getGuideBySlug(slug);

    // CORRECTION : On teste 'guide' directement
    if (!guide) {
        throw redirect("/guides"); 
    }
    
    // ... reste du code identique ...

    return {
        guide,
        otherGuides,
        title: `${guide.title} - Parapluie`,
        description: guide.excerpt,
        canonical: `https://parapluie.app/guide/${guide.slug}`,
        ogImage: "https://parapluie.app/og-guides.png",
        jsonLd: [breadcrumbJsonLd, howToJsonLd], // C'est ici que tu nommes la clé
    };
};

export type Data = Awaited<ReturnType<typeof data>>;
