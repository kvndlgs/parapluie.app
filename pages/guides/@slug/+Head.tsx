import { useData } from "vike-react/useData";
import type { Data } from "./+data";

export function Head() {
  const { howTo, breadCrumbList, title, description, image, canonical} = useData<Data>();

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
      />
      <script 
       key="json-ld-breadcrumblist"
       type="application/json+ld"
       dangerouslySetInnerHTML={{__html: JSON.stringify(breadCrumbList) }}
       />
       </>
  );
}
