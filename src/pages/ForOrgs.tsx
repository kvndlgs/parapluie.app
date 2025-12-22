import { useSeo } from "../hooks/useSeo";

export default function ForOrgs(){
    useSeo({
        title: " Parapluie - Pour les organisations",
        canonical: "https://parapluie.app/pour-les-organisations",
    });
    return (
        <section>
            <h1> Pour les organisations </h1>
        </section>
    )
}