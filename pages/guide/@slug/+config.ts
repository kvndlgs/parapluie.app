import { getAllGuides } from "@/content/guides";

export default {
  // ... tes autres configs (title, etc.)
  
  onBeforePrerenderStart: async () => {
    const guides = getAllGuides();
    return guides.map(p => `/guide/${p.slug}`);
  }
};
