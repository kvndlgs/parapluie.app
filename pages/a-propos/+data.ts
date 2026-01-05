// pages/a-propos/+data.ts

export const data = async () => {
  const faqItems = [
    {
      question: "Pourquoi Parapluie a-t-il été créé ?",
      answer:
        "Parapluie a été créé pour répondre à un besoin réel : aider les personnes aînées et leurs proches à mieux reconnaître les arnaques téléphoniques et numériques, et à favoriser une communication plus rapide lorsqu’une situation semble à risque.",
    },
    {
      question: "Parapluie est-il un organisme gouvernemental ?",
      answer:
        "Non. Parapluie est un projet indépendant, conçu pour compléter les ressources existantes et faciliter la prévention au quotidien.",
    },
    {
      question:
        "Parapluie remplace-t-il les autorités ou les services d’urgence ?",
      answer:
        "Non. Parapluie ne remplace ni les autorités, ni les services d’urgence. L’application vise à fournir des signaux et de l’information afin d’aider à reconnaître les situations à risque et encourager la discussion entre proches.",
    },
    {
      question: "À quel stade de développement se trouve Parapluie ?",
      answer:
        "Parapluie est actuellement en développement. Certaines fonctionnalités sont en phase de test et une version bêta est prévue. Une liste d’attente permet de suivre l’évolution du projet.",
    },
  ];

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  const canonical = "https://parapluie.app/a-propos";

  return {
    title: "À propos – Parapluie",
    description:
      "Questions fréquentes sur Parapluie, l’application qui protège vos parents au Québec.",
    aboutJsonLd,
    canonical
  };
};

export type Data = Awaited<ReturnType<typeof data>>;
