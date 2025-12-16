import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useSeo } from "../hooks/useSeo"; // <- adjust path if needed

const faqItems = [
  {
    question: "Comment protéger mes parents des arnaques téléphoniques ?",
    answer:
      "Parapluie analyse en temps réel les appels et SMS reçus par vos parents. Notre IA Walter détecte les tentatives de fraude comme l'arnaque grand-parent ou les faux représentants, et vous alerte immédiatement en tant que proche aidant.",
  },
  {
    question: "Qu'est-ce que l'arnaque grand-parent et comment s'en protéger ?",
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

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((current) => (current === i ? null : i));
  };

  // Build FAQ JSON-LD once
  
  const faqJsonLd = useMemo(
    () => ({
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
    }),
    []
  );
  

  // Apply SEO
  
  useSeo({
    title: "FAQ – Support Parapluie",
    description:
      "Questions fréquentes sur Parapluie, l’application qui protège vos parents et grands-parents des arnaques téléphoniques et SMS au Québec.",
    canonical: "https://parapluie.app/support/faq",
    jsonLd: faqJsonLd,
    jsonLdId: "parapluie-faq-jsonld",
  });
  

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <Link
        to="/"
        className="text-purple-600 hover:underline text-sm font-medium"
      >
        ← Retourner à l'accueil
      </Link>

      <h1 className="text-4xl font-bold mt-6 mb-10 text-base-700">
        Foire aux questions
      </h1>

      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className="border border-base-200 rounded-xl bg-white shadow-sm"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-5 py-4 font-medium flex justify-between items-center"
            >
              {item.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>

            {openIndex === index && (
              <div className="px-5 pb-4 text-slate-600 border-t border-slate-100">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}