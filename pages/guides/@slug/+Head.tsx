import { useData } from "vike-react/useData";
import type { Data } from "./+data";

export function Head() {
  const { guideJsonLd, title, description, image, canonical} = useData<Data>();

  // 1. On vérifie que data existe ET que le JSON-LD a des étapes
  if (!guideJsonLd?.step || guideJsonLd.step.length === 0) {
    return null;
  }

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="article" />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* 2. On injecte avec une clé unique pour éviter les doublons lors de l'hydratation */}
      <script
        key="json-ld-howto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(guideJsonLd) }}
      />
    </>
  );
}
