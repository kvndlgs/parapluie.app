// pages/+data.ts

export const data = async () => {
  const mainJsonLd = 
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Parapluie",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "iOS, Android",
    "description": "Application de protection contre les arnaques pour les personnes âgées. Protégez vos parents contre la fraude de type grand-parent et faux représentants.",
    "url": "https://parapluie.app",
    "author": {
      "@type": "Organization",
      "name": "Parapluie",
      "url": "https://parapluie.app"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "CAD",
      "availability": "https://schema.org/PreOrder"
    },
    "inLanguage": "fr-CA",
    "audience": {
      "@type": "PeopleAudience",
      "suggestedMinAge": 18,
      "audienceType": "Familles et proches aidants"
    }
  
}
  
const orgJsonLd = 
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Parapluie",
    "alternateName": ["Parapluie App", "Parapluie Québec", "Parapluie Protection", "Application Parapluie"],
    "url": "https://parapluie.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://parapluie.app/logo.png",
      "width": 512,
      "height": 512
    },
    "description": "Application de protection contre les arnaques téléphoniques pour les personnes âgées au Québec. Protégez vos parents contre l'arnaque grand-parent et les faux représentants.",
    "slogan": "Protégez vos parents contre la fraude",
    "foundingDate": "2024",
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Montréal",
        "addressRegion": "QC",
        "addressCountry": "CA"
      }
    },
    "areaServed": {
      "@type": "Place",
      "name": "Québec, Canada"
    },
    "sameAs": [
      "https://x.com/ParapluieAI",
      "https://www.reddit.com/user/parapluie_app"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["French", "fr-CA"]
    },
    "brand": {
      "@type": "Brand",
      "name": "Parapluie",
      "logo": "https://parapluie.app/logo.png",
      "slogan": "Protégez vos parents contre la fraude"
    },
    "knowsAbout": [
      "Protection contre les arnaques",
      "Arnaque grand-parent",
      "Fraude téléphonique",
      "Sécurité des personnes âgées",
      "Prévention de la fraude",
      "Faux représentants"
    ]
  
 }
 
 const globalJsonLd = [
   mainJsonLd,
   orgJsonLd
 ]
}

export type Data = Awaited<ReturnType<typeof data>>;