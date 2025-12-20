import { useSeo } from '../hooks/useSeo';

export function ForCaregivers(){
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