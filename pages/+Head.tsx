// pages/+Head.tsx
import React from "react";
import { useData } from "vike-react/useData";
//import { usePageContext } from 'vike-react/usePageContext';
import type { Data } from "./+data";
const favicon = "../../assets/favicon.ico";
const manifest = "../../assets/manifest.json";

export function Head() {
  const data = useData<Data>();

  if(!data) return;

  // On récupère les JSON-LD (soit globaux, soit spécifiques à la page)

  return (
    <>
      {/* 1. GTM en priorité absolue */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-W6LH2F5W');`,
        }}
      />

      {/* 2. Tags techniques (Vike ne les gère pas par défaut) */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#725572" />
      <link rel="manifest" href={manifest} />
      <link rel="icon" href={favicon} />

      {/* 3. Open Graph (Vike-React ne gère pas og:image par défaut) */}
      <meta property="og:image" content={data.ogImg} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      {/* 4. JSON-LD propre */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.mainJsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.orgJsonLd) }}
      />
    </>
  );
}
