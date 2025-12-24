import { useSeo } from '../hooks/useSeo';
/*
Parapluie enregistre-t-il mes appels ?
Non. L’application n’est pas conçue pour enregistrer les appels ou écouter les conversations.
Puis-je désactiver certaines fonctionnalités ?
Oui. Les paramètres sont ajustables afin que l’application reste confortable et adaptée à vos besoins.
Est-ce que Parapluie fonctionne tout seul ?
Certaines fonctionnalités fonctionnent automatiquement, mais l’application reste conçue pour accompagner, pas pour remplacer votre jugement.

*/

export default function ForSeniors(){
    useSeo({
        title: "Parapluie - Pour les aînés",
        canonical: "https://parapluie.app/pour-les-aines",
    });
    return (
        <section>
            <h1> Pour les aînés </h1>
        </section>
    )
}