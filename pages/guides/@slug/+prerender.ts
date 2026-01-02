import guidesData from '../../../src/content/guides.json';

interface Guide {
    slug: string;
}

export const prerender = async () => {
  // On s'assure que guidesData est bien traité comme un tableau
    // et on retourne la liste des URLs complètes
      return (guidesData as Guide[]).map(guide => `/guide/${guide.slug}`);
};