// pages/guides/+prerender.ts
import { getAllGuides } from '@/content/guides';

export const onBeforePrerenderStart = async () => {
  const guides = getAllGuides();

  // Map to full URLs and ensure uniqueness (just in case)
  const urls = guides.map(guide => `/guide/${guide.slug}`);

  return Array.from(new Set(urls)); // Removes any accidental duplicates
};