// pages/+Head.tsx
import { useData } from 'vike-react/useData';
import { usePageContext } from 'vike-react/usePageContext';
import type { Data } from './+data';

export function Head() {
  const data = useData<Data>();
  const pageContext = usePageContext();
  
  fallback
  const title = pageContext.config.title || "Parapluie - Protection contre les arnaques";
  const canonical = pageContext.data?.canonical || "https://parapluie.app/";
  
  const ogImage = pageContext.data?.ogImage || "https://parapluie.app/og-image.webp";

  return (
    
    <>
      <title>
        {title}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical"
      href={canonical}
      />
      <meta name="og:image"
      content={ogImage}
      />
      <meta name="title" content="Parapluie - Protection contre les arnaques pour les personnes âgées" />
  <meta name="description" content="L'application qui protège vos parents contre les arnaques téléphoniques et la fraude. Protection contre l'arnaque grand-parent, les faux représentants et les appels frauduleux. Alertes en temps réel pour les proches aidants au Québec." />
  <meta name="keywords" content="protection arnaque, fraude personnes âgées, arnaque grand-parent, faux représentant, sécurité seniors, protection famille, app qui protège mes parents, application protection parents âgés, protéger mes parents des arnaques, arnaques téléphoniques personnes âgées, fraude ciblant les aînés, appels frauduleux seniors, application anti-arnaque, bloquer appels frauduleux, alerte arnaque téléphone, mes parents se font arnaquer, protection seniors Québec, arnaque téléphone Québec, sécurité aînés, prévention fraude seniors" />
  <meta name="author" content="Parapluie" />
  <meta name="robots" content="index, follow" />

  <meta property="og:type" content="website" />
  <meta property="og:description" content="L'application qui protège vos parents contre les arnaques téléphoniques. Protection contre l'arnaque grand-parent et les faux représentants. Alertes en temps réel au Québec." />
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:site_name" content="Parapluie" />
  <meta name="twitter:url" content="https://parapluie.app/" />
  <meta name="twitter:title" content="Parapluie - Protection contre les arnaques pour les personnes âgées" />
  <meta name="twitter:description" content="L'application qui protège vos parents contre les arnaques téléphoniques. Protection contre l'arnaque grand-parent et les faux représentants. Alertes en temps réel au Québec." />

  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/apple-icon.png" />
  <meta name="theme-color" content="#725572" />


  <link rel="manifest" href="/manifest.json" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.globalJsonLd) }}
      />
    </>
  );
}
