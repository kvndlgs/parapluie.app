import guidesData from '../../../src/content/guides.json';

interface Guide {
    slug: string;
}

export const prerender = async () => {
      return (guidesData as Guide[]).map(guide => `/guide/${guide.slug}`);
};