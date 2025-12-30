// pages/blog/latest/+Head

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
    </>
  );
}
