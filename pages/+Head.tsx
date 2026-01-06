// pages/+Head.tsx
import React from "react";

export function Head() {

  // On récupère les JSON-LD (soit globaux, soit spécifiques à la page)

  return (
    <>
    
      <script async={true} src="https://www.googletagmanager.com/gtag/js?id=GTM-W6LH2F5W" />

      {/* 2. Tags techniques (Vike ne les gère pas par défaut) */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#725572" />
      <link rel="manifest" href="../assets/manifest.json" />

      {/* 3. Open Graph (Vike-React ne gère pas og:image par défaut) */}
      <meta property="og:image" content="https://parapluie.app/og-image.webp" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
