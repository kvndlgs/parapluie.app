// pages/a-propos/+Head.tsx
import { useData } from "vike-react/useData";
import type { Data } from "./+data";

export function Head() {
  const data = useData<Data>();
  return (
    <>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta property="og:image" content={data.ogImage} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={data.canonical} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.jsonLd) }} // Correction ici
      />
    </>
  );
}
