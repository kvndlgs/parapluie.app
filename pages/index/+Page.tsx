import { Hero } from "@/components/Hero";
import { FeatureCarousel } from "@/components/FeatureCarousel";
import { About } from "@/sections/About";
import { HowItWork } from "@/sections/HowItWork";
import { Subscriptions } from "@/sections/Subscriptions";
import { useState, useEffect } from "react";
import { usePageContext } from "vike-react/usePageContext"; // Remplaçant de useLocation
import { Head } from "vike-react/Head";
import { useData } from "vike-react/useData";
import type { Data } from "./+data";

export default function Page() {
  const { mainJsonLd, orgJsonLd, ogImg } = useData<Data>();
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
        <title> Parapluie - Protection contre les escroqueries </title>
        <link rel="canonical" href="https://parapluie.app/" />
        <meta property="og:image" content={ogImg} />
        <script
          type="application/json+ld"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(mainJsonLd) }}
        />
        <script
          type="application/json+ld"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </Head>
      <Hero
        openModal={openModal}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
      />
      <section className="w-full relative z-20">
        <FeatureCarousel />
      </section>
      <About />
      <HowItWork />
      <Subscriptions />
    </>
  );
}
