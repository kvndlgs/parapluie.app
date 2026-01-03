// pages/guide/@slug/+prerender.ts
import guidesData from '../../../src/content/guides.json';

export const prerender = async () => {
  return (guidesData as any[]).map(guide => `/guide/${guide.slug}`);
};
