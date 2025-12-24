import { useSeo } from '../hooks/useSeo';

/*
Comment suis-je alerté en cas de risque ?
Lorsqu’une situation est jugée inhabituelle ou potentiellement frauduleuse, une alerte peut être envoyée au proche aidant selon les paramètres choisis.
Puis-je choisir quand recevoir des alertes ?
Oui. Les alertes sont configurables afin d’éviter les notifications inutiles et de respecter le quotidien de chacun.
Parapluie permet-il d’écouter les appels ?
Non. Parapluie ne permet pas l’écoute à distance des appels et ne vise pas à surveiller les conversations.
*/

export default function ForCaregivers(){
    useSeo({
        title: "Parapluie - Pour la famille et les proches aidants",
        canonical: "https://parapluie.app/pour-les-soignants",
    });
    return (
        <section> 
            <h1> Pour la famille et les proches aidants </h1>
        </section>
    )
}