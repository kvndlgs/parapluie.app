import { useData } from "vike-react/useData";
import type { Data } from "./+data";

export function Head() {
  const  data  = useData<Data>();
  if(!data) return null;

  return (
    <>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta property="og:title" content={data.title} />
      <meta property="og:image" content={data.image} />
      <meta property="og:type" content="article" />
      <meta property="og:description" title={data.description} />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" title={data.description} />
      <link rel="canonical" href={data.canonical} />

    
      <script
        key="json-ld-howto"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.howTo) }}
      />
    
      <script 
       key="json-ld-breadcrumblist"
       type="application/ld+json"
       dangerouslySetInnerHTML={{__html: JSON.stringify(data.breadCrumbList) }}
       />
       </>
  );
}
