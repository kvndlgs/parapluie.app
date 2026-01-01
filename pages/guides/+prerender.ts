import guides from '../../src/content/guides.json';

export const prerender = () => {
  // Vike saura exactement quelles pages générer au build
    return guides.map(guide => `/guide/${guide.slug}`);
};
