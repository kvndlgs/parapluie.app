// pages/podr/@slug/prerender.ts
import { getAllGuides } from "../../../src/content/guides";

export const onBeforePrerenderStart = async () => {
    const posts = getAllGuides();
    return guides.map((guide) => `/guide/${guide.slug}`);
};
