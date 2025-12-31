import { getAllGuides } from "../../../src/content/guides";

export default {
  // ... tes autres configs (title, etc.)
  
  onBeforePrerenderStart: async () => {
    const guides = getAllGuides();
    return guides.map(g => `/guide/${g.slug}`);
  }
};
