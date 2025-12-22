import { useSeo } from '../hooks/useSeo';
import { useMemo } from 'react';
import { Layout } from '../components/Layout';

const faqItems = [
  {
    question: 'Pourquoi Parapluie a-t-il été créé ?',
    answer: 'Parapluie a été créé pour répondre à un besoin réel : aider les personnes aînées et leurs proches à mieux reconnaître les arnaques téléphoniques et numériques, et à favoriser une communication plus rapide lorsqu’une situation semble à risque.'
  },
  {
    question: 'Parapluie est-il un organisme gouvernemental ?',
    answer: 'Non. Parapluie est un projet indépendant, conçu pour compléter les ressources existantes et faciliter la prévention au quotidien.'
  },
  {
    question: 'Parapluie remplace-t-il les autorités ou les services d’urgence ?',
    answer: "Non. Parapluie ne remplace ni les autorités, ni les services d’urgence. L’application vise à fournir des signaux et de l’information afin d’aider à reconnaître les situations à risque et encourager la discussion entre proches."
  },
  {
    question: "À quel stade de développement se trouve Parapluie ?",
    answer: "Parapluie est actuellement en développement. Certaines fonctionnalités sont en phase de test et une version bêta est prévue. Une liste d’attente permet de suivre l’évolution du projet."
  }
]

export function AboutPage() {
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

  useSeo({
    title: 'À propos | Parapluie',
    canonical: 'https://parapluie.app/a-propos',
    description: "Découvrez la mission de Parapluie, une application québécoise conçue pour aider les aînés et leurs proches à mieux reconnaître les arnaques et favoriser une communication rapide en cas de risque.",
    jsonLd: faqJsonLd,
    jsonLdId: "parapluie-about-jsonld"
  });

  return (
    <Layout>
    <section className="space-y-4">
        <h2 className="text-base-900">Comment Parapluie aide</h2>

          <p className="text-neutral-700">
              Parapluie agit comme une couche de vigilance supplémentaire autour des communications
                  reçues par les aînés.
                    </p>

                      <ul className="list-disc pl-5 space-y-2 text-neutral-700">
                          <li>
                                Identifier des signaux associés aux arnaques téléphoniques ou aux messages frauduleux
                                    </li>
                                        <li>
                                              Alerter les proches aidants lorsqu’une situation semble nécessiter une attention
                                                  </li>
                                                      <li>
                                                            Faciliter la discussion et la prise de décision avant qu’une fraude ne cause des dommages
                                                                </li>
                                                                  </ul>
                                                                  
      
      <h1>À propos de parapluie </h1>
      <div>
        <h2> La motivation  </h2>
      <p>
        Parapluie est né d’un constat simple : les personnes aînées sont de plus en plus ciblées par des arnaques téléphoniques et numériques, et il est souvent difficile pour leurs proches d’en être informés à temps.

        Les tentatives de fraude évoluent rapidement, utilisent la pression, l’urgence ou l’usurpation d’identité, et peuvent passer inaperçues jusqu’à ce qu’il soit trop tard.
      </p>
      </div>
      <div>
        <h2> Le problème </h2>
        <p>
          De nombreuses solutions existantes se concentrent sur le blocage des appels ou la sensibilisation générale.
          Cependant, elles prennent rarement en compte le rôle des proches aidants et le besoin d’être alerté rapidement lorsqu’une situation semble inhabituelle ou à risque.

          Dans bien des cas, les aînés hésitent à en parler par peur de déranger ou par gêne, ce qui complique la prévention.
          </p>
        </div>
        <div>
          <h2> Comment parapluie aide </h2>
          <p>
            Parapluie est une application conçue pour :

            identifier des signaux associés aux arnaques téléphoniques ou aux messages frauduleux

            permettre aux proches aidants de recevoir des alertes en temps réel lorsque cela est pertinent

            centraliser l’information afin de faciliter la prise de décision et la discussion entre proches


            Chaque fonctionnalité est pensée pour rester simple, compréhensible et non intrusive.

            </p>
        </div>
        <div>
          <h2> À qui s'adresse Parapluie</h2>
          <p>
            Parapluie s’adresse principalement :

            aux personnes aînées vivant au Québec

            à leurs proches (famille, proches aidants)

            à toute personne souhaitant réduire les risques liés aux arnaques téléphoniques et numériques
            </p>
          </div>
          <div>
            <h2> État du projet </h2>
            <p>
              Parapluie est actuellement en développement.
              Certaines fonctionnalités sont en phase de test et une version bêta est prévue.

              Une liste d’attente est disponible pour les personnes intéressées à suivre l’évolution du projet ou à participer aux premiers essais.
            </p>
          </div>
          <div>
            <h2> Limites et transparence </h2>
            <p>
              Parapluie ne remplace pas les services d’urgence, les autorités ni le jugement humain.
              L’application vise à fournir des signaux et des informations utiles afin d’aider à reconnaître les situations à risque et à encourager le dialogue entre proches.
              </p>
          </div>
      </section>
      </Layout>
  );
}