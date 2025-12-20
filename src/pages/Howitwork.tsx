import { useSeo } from '../hooks/useSeo';

export function HowItWorkPage(){
    useSeo({
        title: "Parapluie - Comment ça marche",
        canonical: "https://parapluie.app/comment-ca-marche",
    });
    return (
        <section>
            <h1> Comment ca marche </h1>
        </section>
    )
}