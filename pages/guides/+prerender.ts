import { getAllGuides } from '../../src/content/guides';  // or relative path

const onBeforePrerenderStart = async () => {
  const guides = getAllGuides();
  return guides.map(guide => `/guide/${guide.slug}`);
};

export default onBeforePrerenderStart;