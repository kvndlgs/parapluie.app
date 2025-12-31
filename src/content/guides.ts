export interface Guide {
        slug: string;
            title: string;
                excerpt: string;
                    date: string;
                        author: string;
                            readTime: string;
                                tags: string[];
                                    content: string;
                                    }

                                    export const guides: Guide[] = [
            {    steps: [
      { title: "Ne donnez aucune info", content: "Votre banque ne demandera jamais votre NIP ou mot de passe par téléphone." },
      { title: "Raccrochez poliment", content: "Si on vous met de la pression, raccrochez immédiatement." },
      { title: "Validez par vous-même", content: "Rappelez l'organisme en utilisant le numéro officiel sur votre facture." }
    ]            
                
            },       {
                                            slug: "comment-reagir-appel-sms-suspect-guide-seniors",
                                                title: "Appel ou SMS suspect : les bons réflexes à adopter immédiatement",
                                                    excerpt: "Même si l'interlocuteur semble crédible, les fraudeurs sont passés maîtres dans l'art de la manipulation. Apprenez comment réagir face à un doute.",
                                                        date: "2024-12-22",
                                                            author: "Équipe Parapluie",
                                                                readTime: "5 min",
                                                                    tags: ["prévention", "SMS frauduleux", "réflexes sécurité", "Québec"],
                                                                        content: `
                                                                        ## Ça a l'air vrai, mais est-ce que ça l'est?

                                                                        Aujourd'hui, les fraudeurs utilisent des technologies pour afficher de **faux numéros de téléphone** (comme celui de votre banque ou d'Hydro-Québec) sur votre écran. Ils peuvent même utiliser l'intelligence artificielle pour imiter des voix connues. 

                                                                        Le secret de leur réussite? Créer un sentiment d'urgence pour vous empêcher de réfléchir.

                                                                        ### Face à un appel : La règle d'or

                                                                        Si vous recevez un appel inattendu, même si le nom de l'institution s'affiche sur votre téléphone :

                                                                        1. **Ne donnez jamais d'informations personnelles** : Votre banque ne vous demandera jamais votre NIP, votre NAS ou votre mot de passe par téléphone.
                                                                        2. **Raccrochez poliment** : Si on vous met de la pression ou qu'on vous menace, raccrochez. C'est le moyen le plus sûr de reprendre le contrôle.
                                                                        3. **Validez par vous-même** : Trouvez le numéro officiel de l'organisme (au dos de votre carte bancaire ou sur votre facture d'Hydro) et rappelez-les vous-même.

                                                                        ### Face à un SMS (Message texte) : Attention aux liens

                                                                        L'arnaque par SMS (appelée *smishing*) est en forte progression au Québec. Elle prend souvent la forme d'un remboursement d'impôt ou d'un problème avec un colis.

                                                                        - **Ne cliquez jamais sur un lien** dans un SMS provenant d'un inconnu.
                                                                        - **Observez l'expéditeur** : Un numéro à 10 chiffres pour une banque est souvent signe de fraude.
                                                                        - **Supprimez le message** : Si vous n'attendiez pas de virement ou de colis, c'est probablement une tentative de fraude.

                                                                        ### Les 3 réflexes "Parapluie"

                                                                        **1. Respirez et ralentissez**
                                                                        Les fraudeurs veulent que vous agissiez vite. Prenez une pause. Si c'est vraiment important, ils laisseront un message ou vous pourrez les rappeler plus tard.

                                                                        **2. Contactez un proche de confiance**
                                                                        Avant de faire quoi que ce soit, appelez un enfant, un petit-enfant ou un ami. Expliquez-leur la situation. Un regard extérieur permet souvent de déceler l'arnaque instantanément.

                                                                        **3. Utilisez la protection technologique**
                                                                        L'application Parapluie agit comme un filtre : elle analyse la provenance des appels et vous avertit si l'appelant est reconnu pour des activités suspectes, protégeant ainsi votre tranquillité d'esprit.

                                                                        ### Exemples concrets au Québec

                                                                        > **"Votre compte est bloqué, appuyez sur 1 pour parler à un agent."**
                                                                        > -> *Réflexe : Raccrochez. Appelez votre banque avec le numéro derrière votre carte.*

                                                                        > **"Hydro-Québec : Un remboursement de 125,40$ vous attend. Cliquez ici."**
                                                                        > -> *Réflexe : Ne cliquez pas. Hydro-Québec n'envoie jamais de remboursements par message texte.*

                                                                        > **"Ici l'Agence du revenu du Canada, vous avez un solde impayé sous peine d'arrestation."**
                                                                        > -> *Réflexe : Le gouvernement n'utilise jamais de ton menaçant et ne demande pas de paiement par cartes-cadeaux ou cryptomonnaie.*

                                                                        ### Ressources en cas de doute

                                                                        - **Info-Santé/Social (811)** : Pour parler à quelqu'un si vous vous sentez stressé par un appel.
                                                                        - **Le Centre antifraude du Canada** : 1-888-495-8501 pour signaler une tentative.
                                                                        - **Votre service de police local** : Si vous avez partagé des informations bancaires.

                                                                        ---

                                                                        *Reprenez le contrôle de votre téléphone. [Installez Parapluie](/) pour bloquer les tentatives de fraude avant même qu'elles ne vous atteignent.*
                                                                        `
                                                                        }
                                                                        ];

                                                                        export function getGuideBySlug(slug: string): Guide | undefined {
                                                                            return guides.find(guide => guide.slug === slug);
                                                                            }

                                                                        export function getAllGuides(): Guide[] {
                                                                                return guides.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
                                                                        }



