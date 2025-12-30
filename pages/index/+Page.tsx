import { Hero } from '../../src/components/Hero';
import { FeatureCarousel } from '../../src/components/FeatureCarousel';
import { About } from '../../src/sections/About';
import { HowItWork } from '../../src/sections/HowItWork';
import { Subscriptions } from '../../src/sections/Subscriptions';
import { useState, useEffect } from 'react';
import { usePageContext } from 'vike-react/usePageContext'; // Remplaçant de useLocation
import { Head } from "vike-react/Head";

export default function Page() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pageContext = usePageContext();

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Gestion du scroll vers les ancres (#)
    useEffect(() => {
        // Dans le navigateur, on utilise window.location.hash
        const hash = window.location.hash;
        if (hash) {
            const id = hash.replace("#", "");
            const el = document.getElementById(id);
            if (el) {
                // On attend une frame pour s'assurer que le DOM est prêt
                requestAnimationFrame(() => {
                    el.scrollIntoView({ behavior: "smooth" });
                });
            }
        }
    }, [pageContext.urlPathname]); // Se déclenche à chaque changement de page

    return (
        <>
  <Head>
  <title>Parapluie - Protection contre les arnaques</title>
  <meta property="og:image" content="https://parapluie.app/og-image.webp" />
  <link rel="canonical" href="https://parapluie.app/" />
</Head>
            <Hero openModal={openModal} closeModal={closeModal} isModalOpen={isModalOpen} />
            <section className="w-full relative z-20">
               <FeatureCarousel />
            </section>
            <About />
            <HowItWork />
            <Subscriptions />
        </>
    );
}
