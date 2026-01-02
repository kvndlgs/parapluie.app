import { useState } from "react";

const pricingTiers = [
  {
    name: "Basic",
    price: { monthly: "0,00", yearly: "0,00" },

    description: "Protection pour ainées de base.",
    features: [
      "Jusqu'a 1 ainé",
      "Analyse des appels & textos",
      "Clavarder avec Walter",
    ],
    cta: {
      monthly: "Commencer",
      yearly: "Commencer",
    },
    href: {
      monthly: "dashboard.parapluie.app/signup",
      yearly: "dashboard.parapluie.app/signup",
    },
    featured: false,
  },
  {
    name: "Famille",
    price: {
      monthly: "9,99",
      yearly: "99,99",
    },
    href: {
      monthly: "https://buy.stripe.com/aFaeVe92k7IwfS94zucZa01",
      yearly: "https://buy.stripe.com/cNicN6cew8MA49rgiccZa00",
    },
    description: "La solution complète pour protéger toute la famille.",
    features: [
      "Jusqu'a 3 ainées",
      "Alertes en temps réel",
      "Tableu de bord proches aidants",
      "Rapports hebdomadaires",
    ],
    cta: {
      monthly: "Choisir le plan Famille Mensuel",
      yearly: "Choisir le plan Famille Annuel",
    },
    featured: true,
  },
  {
    name: "Établissements",
    price: { monthly: "", yearly: "" },
    href: { monthly: "#contact", yearly: "#contact" },
    description: "Pour les résidences et organismes.",
    features: [
      "Nombre d'aînés illimité",
      "Facturation adaptée",
      "Accompagnement personnalisé",
    ],
    cta: { monthly: "Nous contacter", yearly: "Nous contacter" },
    featured: false,
  },
];

const CheckIcon = () => (
  <svg
    className="w-5 h-5 mr-3 text-primary-500 mt-0.5 shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

export function Subscriptions() {
  const [period, setPeriod] = useState<"monthly" | "yearly">("monthly");
  return (
    <section
      id="abonnements"
      className="py-24 px-6 bg-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-100 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-base-650 mb-6 tracking-tight">
            Selectionner le plan qui vous convient le mieu.
          </h2>
        </div>
        {/* Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-base-50 p-1 rounded-full flex">
            <button
              onClick={() => setPeriod("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                period === "monthly"
                  ? "bg-white text-primary-250 shadow"
                  : "text-base-650"
              }`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setPeriod("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                period === "yearly"
                  ? "bg-white text-primary-250 shadow"
                  : "text-base-650"
              }`}
            >
              Annuel <span className="text-green-600 text-xs ml-1">-17%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl p-8 md:p-10 border transition-all duration-300 flex flex-col ${
                tier.featured
                  ? "md:scale-105 bg-base-50 border-primary-200 shadow-lg z-10"
                  : "bg-base-50 border-base-100 shadow-sm hover:-translate-y-2"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-base-650 text-white px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap">
                  Le plus populaire
                </div>
              )}

              <h3 className="text-2xl font-bold text-base-750 mb-2">
                {tier.name}
              </h3>

              <div className="mb-4">
                <span className="text-5xl font-black text-primary-250">
                  {period === "monthly"
                    ? tier.price.monthly
                    : tier.price.yearly}
                </span>
                <span className="text-base text-base-650 font-semibold">
                  {period === "monthly" ? `/mois` : `/an`}
                </span>
              </div>

              <p className="text-base-650 mb-6 text-sm leading-relaxed">
                {tier.description}
              </p>

              <ul className="space-y-3 mb-8 grow">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-base-650">
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={
                  /*period === 'monthly' ? tier.href.monthly : tier.href.yearly*/ "#about"
                }
                className={`w-full rounded-lg font-bold py-3.5 px-4 transition-all cursor-pointer text-center block ${
                  tier.featured
                    ? "bg-primary-250 text-white hover:bg-base-350 border-b-3 border-primary-400"
                    : "bg-base-650 text-white hover:bg-base-500"
                }`}
              >
                {period === "monthly" ? tier.cta.monthly : tier.cta.yearly}
              </a>
            </div>
          ))}
        </div>

        {/* Trust badges / Additional info */}
        <div className="mt-16 text-center">
          <p className="text-base-650 text-sm">
            Paiement sécurisé " Satisfait ou remboursé 30 jours " Support en
            français
          </p>
        </div>
      </div>
    </section>
  );
}
