// pages/guide/@slug/+Head.tsx

import { useData } from "vike-react/useData";
import type { Data } from "./+data";

export function Head() {
  const data = useData<Data>();
  return (
    <>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta property="og:title" content={data.title} />
      <meta property="og:image" content={data.image} />
      <meta property="og:type" content="article" />
      <meta property="og:description" content={data.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <link rel="canonical" href={data.canonical} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data.guideJsonLd) }}
        />
    
    </>
  );
}
