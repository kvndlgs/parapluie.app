// pages/guide/@slug/+Head.tsx
export function Head() {
  const data = useData<Data>();
  return (
    <>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta property="og:image" content={data.ogImage} />
      <meta property="og:type" content="article" />
      <link rel="canonical" href={data.canonical} />
      {/* CORRECTION : data.jsonLd (correspond au return du +data.ts) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.jsonLd) }}
      />
    </>
  );
}
