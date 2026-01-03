import guidesData from '../../../src/content/guides.json';

export const data = async () => {
  // On retourne simplement TOUT le tableau trié par date
  const allGuides = [...guidesData].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return {
    guides: allGuides,
    title: "Guides de prévention - Parapluie",
    description: "Conseils et ressources pour protéger vos proches contre la fraude au Québec."
  };
};

export type Data = {
  guides: any[];
  title: string;
  description: string;
  readTime?: string;
  author?: string;
  excerpt?: string;
  date?: string;
  steps?: string[];
};
