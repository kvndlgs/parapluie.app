import { useRouteError } from 'react-router-dom';
import { Layout } from "../components/Layout";
import { useSeo } from "../hooks/useSeo";

export default function NotFound() {
    useSeo({
        title: "404 - Parapluie"
    });

    const error = useRouteError();
    return (
        <Layout>
        <section className="min-h-screen w-full py-24 flex items-center justify-center">
            <h1>404 - Page introuvable</h1>
            <p> { error ==  '404' ? "La page que vous cherchez n'existe pas." : "" }  </p>
        </section>
        </Layout>
    )
}
