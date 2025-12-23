import { useSeo } from '../hooks/useSeo';
import { Layout } from '../components/Layout';
import { HowItWork } from '../sections/HowItWork';

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