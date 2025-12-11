import { useEffect } from "react";

type JsonLd = Record < string, unknown > | Record < string, unknown > [];

interface UseSeoOptions {
  title ? : string;
  description ? : string;
  canonical ? : string;
  jsonLd ? : JsonLd;
  jsonLdId ? : string; // optional: unique id if you want multiple scripts
}

export function useSeo({
  title,
  description,
  canonical,
  jsonLd,
  jsonLdId = "parapluie-jsonld",
}: UseSeoOptions) {
  useEffect(() => {
    // only run in browser
    if (typeof document === "undefined") return;
    
    // <title>
    if (title) {
      document.title = title;
    }
    
    // <meta name="description">
    if (description) {
      let meta = document.querySelector < HTMLMetaElement > (
        'meta[name="description"]'
      );
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.content = description;
    }
    
    // <link rel="canonical">
    if (canonical) {
      let link = document.querySelector < HTMLLinkElement > (
        'link[rel="canonical"]'
      );
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
    
    // <script type="application/ld+json">
    if (jsonLd) {
      let script = document.getElementById(jsonLdId) as |
        HTMLScriptElement |
        null;
      
      if (!script) {
        script = document.createElement("script");
        script.id = jsonLdId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      
      script.text = JSON.stringify(jsonLd);
    }
  }, [title, description, canonical, jsonLd, jsonLdId]);
}