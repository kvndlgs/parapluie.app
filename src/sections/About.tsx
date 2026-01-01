import CountUp from "@/components/react-bits/CountUp";

export function About() {
  return (
    <section
      id="a-propos"
      className="py-24 px-6 bg-white relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-bg opacity-50 skew-x-12 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-base-650 mb-6 tracking-tight">
            Protégez vos parents contre la fraude
          </h2>
          {/* SEO: Query-rich subheading */}
          <h3 className="sr-only">
            Sécurité téléphonique pour personnes âgées au Québec - Prévention
            des arnaques
          </h3>
          <p className="text-xl text-base-600 max-w-2xl font-medium">
            Pourquoi nous avons décidé de dire "ça suffit" aux fraudes ciblant
            nos aînés.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: The Context (Large, spans 7 cols) */}
          <div className="md:col-span-7 bg-base-50 rounded-3xl p-8 md:p-10 bento-card border border-base-100">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full flex items-center justify-center mb-6 text-xl">
                🗞️
              </div>

              <h3 className="text-2xl font-bold text-base-750 mb-4">
                C'est la même histoire...
              </h3>
            </div>
            <p className="text-base-650 leading-relaxed text-lg">
              Chaque semaine, l'actualité nous le rappelle. Une personne âgée
              qui perd ses économies à cause d'un appel frauduleux. Un
              grand-parent qui reçoit un texto de son « petit-fils en détresse
              ». Une arnaque de faux représentant qui cible les plus
              vulnérables. Ce n'est pas juste une statistique — c'est des
              milliers de familles québécoises touchées.
            </p>
            <p className="text-base-650 leading-relaxed text-lg mt-4 font-medium">
              C'est pas juste une statistique — c'est des milliers de familles
              québécoises touchées.
            </p>
          </div>

          {/* Card 2: The Stat (High Impact, spans 5 cols) */}
          <div className="md:col-span-5 bg-red-50 rounded-3xl p-8 md:p-10 bento-card border border-red-100 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 text-[200px] opacity-5 font-black text-error-650 leading-none select-none">
              %
            </div>
            <div className="relative z-10">
              <span className="block text-error-650 font-bold uppercase tracking-wider text-sm mb-2">
                Depuis 2022
              </span>
              <div className="text-7xl md:text-8xl font-black text-error-750 mb-2 tracking-tighter">
                <CountUp
                  from={0}
                  to={341}
                  separator=","
                  direction="up"
                  duration={1}
                  className="count-up-text"
                />{" "}
                %
              </div>
              <p className="text-xl font-semibold text-error-650">
                d'augmentation des fraudes visant les aînés.
              </p>
            </div>
          </div>

          {/* Card 3: The Gap (Spans 5 cols) */}
          <div className="md:col-span-5 bg-primary-50 rounded-3xl p-8 md:p-10 bento-card border border-primary-100">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10  rounded-full flex items-center justify-center mb-6 text-xl">
                🩻
              </div>
              <h3 className="text-xl font-extrabold text-primary-750 mb-4 tracking-wide">
                Le problème actuel
              </h3>
            </div>
            <p className="text-primary-750 mb-6 text-lg">
              Les solutions existantes? Trop complexes pour nos aînés, ou trop
              froides.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start text-primary-650">
                <svg
                  className="w-5 h-5 mr-2 text-primary-650 mt-1 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Des listes noires contournées en 2 sec.
              </li>
              <li className="flex items-start text-primary-650">
                <svg
                  className="w-5 h-5 mr-2 text-primary-650 mt-1 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Des avertissements que personne ne lit.
              </li>
            </ul>
          </div>

          {/* Card 4: The Solution (Brand Color, spans 7 cols) */}
          <div className="md:col-span-7 bg-secondary-50 rounded-3xl p-8 md:p-10 bento-card text-white flex border border-secondary-100 flex-col justify-between relative overflow-hidden">
            {/* Abstract decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="relative z-10">
              <h3 className="text-2xl text-secondary-750 font-bold mb-4 flex items-center">
                <span className="p-2 rounded-lg mr-3">☔</span>
                La réponse Parapluie
              </h3>
              <p className="text-secondary-650 text-lg md:text-xl leading-relaxed mb-6">
                Parapluie analyse les appels et messages en temps réel — pas
                juste les numéros, mais le langage, le contexte, les tactiques
                de manipulation. Une protection intelligente qui travaille en
                silence.
              </p>
              <div className="inline-block border-t pt-6">
                <p className="font-regular text-xl text-secondary-650 italic">
                  "Parce que nos parents méritent de répondre au téléphone sans
                  stress."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
