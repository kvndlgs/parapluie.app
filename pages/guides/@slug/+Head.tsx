// pages/guide/@slug/+Head.tsx

import { useData } from "vike-react/useData";
import type { Data } from "./+data";

export function Head() {
  const data = useData<Data>();
  const hasSteps = data?.guideJsonLd?.step && data.guideJsonLd.step.length > 0;
  return (
    <>
      <title>{data?.title}</title>
      <meta name="description" content={data.description} />
      <meta property="og:title" content={data.title} />
      <meta property="og:image" content={data.image} />
      <meta property="og:type" content="article" />
      <meta property="og:description" content={data.description} />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <link rel="canonical" href={data.canonical} />
       {hasSteps && (
                <script
                          type="application/ld+json"
                                    id="json-ld-guide" // Ajouter un ID aide à déboguer
                                              dangerouslySetInnerHTML={{ __html: JSON.stringify(data.guideJsonLd) }}
                                                      />
                                           )}
</>
   )
}
