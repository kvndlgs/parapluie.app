// /pages/post/@slug/+Head

import type { Data } from "./+data";
import { useData } from 'vike-react/useData';

export function Head() {
  const data = useData<Data>();
  return (
    <>
      <title>
        {data.title}</title>
      <meta name="description" content={data.description} />
      <link rel="canonical" href={data.canonical} />
      <script
        type="application/ld+json"
       dangerouslySetInnerHTML={{ __html: JSON.stringify(data.blogJsonLd) }}
      />
    </>
  );
}
