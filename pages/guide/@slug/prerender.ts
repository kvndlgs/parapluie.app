// pages/guide/@slug/prerender.ts
import { getAllGuides } from "../../../src/content/guides";

export const onBeforePrerenderStart = async () => {
    const guides = getAllGuides();
    return guides.map((guide) => `/guide/${guide.slug}`);
};
