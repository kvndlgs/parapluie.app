
export const data = async () => {
  return {
    title: "Blog – Parapluie",
    description: "Blog et actualités sur la fraude visant les aînés au Québec.",
    canonical: "https://parapluie.app/blog",
  };
};

export type Data = Awaited<ReturnType<typeof data>>;
