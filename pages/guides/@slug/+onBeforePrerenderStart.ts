import guidesData from "../../../src/content/guides.json";

interface Guide {
  slug: string;
}

const onBeforePrerenderStart = () => {
  const guides = guidesData as Guide[];

  return guides.map((guide) => `/guide/${guide.slug}`);
};

export default onBeforePrerenderStart;
