export const data = async () => {
  const mainJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Parapluie",
    "applicationCategory": "SecurityApplication",
    "operatingSystem": "iOS, Android",
    "description": "Application de protection contre les arnaques pour les personnes âgées.",
    "url": "https://parapluie.app"
  };
  
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Parapluie",
    "url": "https://parapluie.app"
  };
 
  return {
    globalJsonLd: [mainJsonLd, orgJsonLd]
  };
};

export type Data = Awaited<ReturnType<typeof data>>;
