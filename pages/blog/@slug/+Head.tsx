// /pages/post/@slug/+Head

import type { Data } from "./+data";
import { useData } from "vike-react/useData";

export function Head() {
  const  data  = useData<Data>();
 
  if(!data) return null;

  return (
    <>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <link rel="canonical" href={data.canonical} />
      <script
        key="json-ld-blogposting"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.blogPosting) }}
      />
      <script
       key="json-ld-breadcumblist"
       type="application/ld+json"
       dangerouslySetInnerHTML={{__html: JSON.stringify(data.breadCrumbList)}}
    />
       </>
  );
}
