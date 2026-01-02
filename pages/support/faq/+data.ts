// pages/support/faq/+data.ts
export const data = async () => {
  const faqItems = [
    {
      question: "Comment protéger mes parents des arnaques téléphoniques ?",
      answer:
        "Parapluie analyse en temps réel les appels et SMS reçus par vos parents. Notre IA Walter détecte les tentatives de fraude comme l'arnaque grand-parent ou les faux représentants, et vous alerte immédiatement en tant que proche aidant.",
    },
    {
      question:
        "Qu'est-ce que l'arnaque grand-parent et comment s'en protéger ?",
      answer:
        "L'arnaque grand-parent est une fraude où un escroc appelle en se faisant passer pour un petit-enfant en détresse demandant de l'argent urgent. Parapluie détecte ces appels suspects grâce à l'analyse du langage et du contexte.",
    },
    {
      question:
        "Existe-t-il une application pour protéger les personnes âgées contre la fraude ?",
      answer:
        "Oui, Parapluie est spécialement conçue pour protéger les seniors québécois contre la fraude téléphonique. L'application inclut des alertes en temps réel et un assistant IA francophone nommé Walter.",
    },
    {
      question:
        "Comment savoir si mes parents reçoivent des appels frauduleux ?",
      answer:
        "Avec Parapluie, vous recevez des alertes en temps réel lorsque vos parents reçoivent des appels ou SMS suspects. Le tableau de bord permet de suivre les tentatives de fraude et les rapports hebdomadaires.",
    },
    {
      question: "Mes parents se font arnaquer au téléphone, que faire ?",
      answer:
        "Installez Parapluie sur le téléphone de vos parents pour une protection proactive. Vous serez alerté automatiquement lors de tentatives de fraude. Vous pouvez aussi signaler les incidents au Centre antifraude du Canada.",
    },
    {
      question:
        "Comment fonctionne la protection contre les faux représentants ?",
      answer:
        "Parapluie utilise l'IA pour détecter les appels frauduleux provenant de personnes se faisant passer pour des banques, le gouvernement ou d'autres institutions. L'analyse du contexte permet d'identifier rapidement ces tentatives.",
    },
    {
      question: "L'application Parapluie est-elle disponible au Québec ?",
      answer:
        "Oui, Parapluie est conçue pour les seniors québécois. L'application et l'assistant Walter communiquent entièrement en français et comprennent le contexte local.",
    },
    {
      question:
        "Combien coûte une application de protection contre les arnaques pour seniors ?",
      answer:
        "Parapluie offre un forfait gratuit de base. Le forfait Famille à 9,99$/mois protège jusqu’à 3 seniors et inclut les alertes en temps réel et rapports avancés.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return {
    title: "FAQ – Parapluie",
    description:
      "Questions fréquentes sur Parapluie, l’application qui protège vos parents au Québec.",
    faqJsonLd,
    faqItems, // On les passe aussi pour que +Page.tsx les utilise
  };
};

export type Data = Awaited<ReturnType<typeof data>>;
