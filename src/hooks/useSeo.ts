import { useEffect } from "react";

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

interface UseSeoOptions {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: JsonLd;
  jsonLdId?: string;
}

export function useSeo({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  jsonLd,
  jsonLdId = "parapluie-jsonld",
}: UseSeoOptions) {
  useEffect(() => {
    if (typeof document === "undefined") return;

    // 1. Titles
    if (title) {
      document.title = title;
    }

    // 2. Metadata helper function to avoid repetition
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.head.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    if (description) updateMeta("description", description);

    // 3. Image Fallback (Fixing the non-existent walter-og.png)
    const finalImage = ogImage || "https://parapluie.app/og-image.webp";

    // 4. Open Graph (Facebook/LinkedIn)
    if (title) updateMeta("og:title", title, true);
    if (description) updateMeta("og:description", description, true);
    updateMeta("og:image", finalImage, true);
    updateMeta("og:type", ogType, true);

    // 5. Twitter Tags (Ensuring "Large Card" display)
    updateMeta("twitter:card", "summary_large_image");
    if (title) updateMeta("twitter:title", title);
    if (description) updateMeta("twitter:description", description);
    updateMeta("twitter:image", finalImage);

    // 6. Canonical
    if (canonical) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // 7. JSON-LD
    if (jsonLd) {
      let script = document.getElementById(jsonLdId) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = jsonLdId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(jsonLd);
    }
  }, [title, description, canonical, ogImage, ogType, jsonLd, jsonLdId]);
}
