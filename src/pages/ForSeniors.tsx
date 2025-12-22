import { useSeo } from '../hooks/useSeo';

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