// pages/guide/@slug/prerender.ts
import { getAllGuides } from '../../../src/content/guides';

export const prerender = async () => {
  const guides = getAllGuides();
  
  // On ne génère des pages QUE pour les guides qui existent
  // Vike n'appellera jamais le +data.ts avec un mauvais slug pendant le build
  return guides.map(guide => `/guide/${guide.slug}`);
};
