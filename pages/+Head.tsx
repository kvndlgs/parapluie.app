// pages/+Head.tsx
import React from "react";
import { useData } from 'vike-react/useData';
import { usePageContext } from 'vike-react/usePageContext';
import type { Data } from './+data';

export function Head() {
  const data = useData<Data>();
  const pageContext = usePageContext();

  // On récupère les JSON-LD (soit globaux, soit spécifiques à la page)
  const scripts = data?.globalJsonLd || [];
  const guideScript = data?.guideJsonLd; 

  return (
    <>
      {/* 1. GTM en priorité absolue */}
      <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-W6LH2F5W');` }} />

      {/* 2. Tags techniques (Vike ne les gère pas par défaut) */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#725572" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />

      {/* 3. Open Graph (Vike-React ne gère pas og:image par défaut) */}
      <meta property="og:image" content={pageContext.data?.ogImage || "https://parapluie.app/og-image.webp"} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      {/* 4. JSON-LD propre */}
      {scripts.map((json, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }} />
      ))}
      
      {guideScript && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guideScript) }} />
      )}
    </>
  );
}
