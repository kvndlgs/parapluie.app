import { useEffect } from "react";

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

interface UseSeoOptions {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;    // Added to interface
  ogType?: string;     // Added to interface
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
    // 1. Safety check first (crucial for mobile builds)
    if (typeof document === "undefined") return;

    // 2. Standard Meta Tags
    if (title) {
      document.title = title;
    }

    if (description) {
      let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }

    // 3. Open Graph Tags (The "Social Magic")
    const ogTags = [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: ogImage || "https://parapluie.app/walter-og.png" },
      { property: "og:type", content: ogType },
    ];

    ogTags.forEach(({ property, content }) => {
      if (!content) return;
      let element = document.head.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    });

    // 4. Canonical
    if (canonical) {
      let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    // 5. JSON-LD
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
