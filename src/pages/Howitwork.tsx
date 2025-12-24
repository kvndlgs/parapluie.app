import { useSeo } from '../hooks/useSeo';
import { Layout } from '../components/Layout';
import { HowItWork } from '../sections/HowItWork';

/*
Comment Parapluie détecte-t-il une situation à risque ?
Parapluie analyse différents signaux associés aux arnaques connues afin d’identifier des situations potentiellement problématiques.
Est-ce fiable à 100 % ?
Aucune solution n’est infaillible. Parapluie fournit des indications pour aider à reconnaître les risques, mais la décision finale appartient toujours à l’utilisateur.
*/

export default function HowItWorkPage(){
    useSeo({
        title: "Parapluie - Comment ça marche",
        canonical: "https://parapluie.app/comment-ca-marche",
    });
    return (
        <Layout>
            <HowItWork />
        </Layout>
    )
}