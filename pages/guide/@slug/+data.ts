// pages/guide/@slug/+data.ts
// ...
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

export const prerender = async () => {
  // On récupère TOUS les guides pour connaître leurs slugs
  const allGuides = getAllGuides(); 
  
  return allGuides.map((guide) => {
    return {
      // Vike va créer un dossier pour chaque URL
      url: `/guide/${guide.slug}`,
      // Optionnel : on peut déjà fournir les données pour éviter de 
      // ré-exécuter la fonction data() pendant le build
      pageContext: {
        data: {
          guide,
          title: `${guide.title} - Parapluie`,
          // ... ajoute les autres champs si tu veux optimiser le build
        }
      }
    };
  });
};