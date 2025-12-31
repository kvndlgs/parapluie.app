// pages/guides/+prerender.ts
import { getAllGuides } from '../../src/content/guides';

const onBeforePrerenderStart = async () => {
  const guides = getAllGuides();
  const urls = guides.map(guide => `/guide/${guide.slug}`);
  return Array.from(new Set(urls));
};

export default onBeforePrerenderStart;