// pages/guides/index/+data.ts

import guidesData from "../../../src/content/guides.json";

export const data = async () => {
  const allGuides = [...guidesData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  return {
    guides: allGuides,
  };
};

export type Data = Awaited<ReturnType<typeof data>>;
