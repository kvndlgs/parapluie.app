import postsData from "../../../src/content/posts.json"

export const data = async () => {
  // On retourne simplement TOUT le tableau trié par date
  const allPosts = [...postsData].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return {
    guides: allPosts,
    title: "Blog - Parapluie.",
    description: "Conseils et ressources pour protéger vos proches contre la fraude au Québec."
  };
};

export type Data = {
  posts: any[];
  title: string;
  description: string;
  readTime: string;
  excerpt: string;
  tags: string[]
  date: string;
  author: string;
};
