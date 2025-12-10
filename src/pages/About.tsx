import { Helmet } from "react-helmet-async";

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>À propos – Parapluie</title>
        <link 
          rel="canonical" 
          href="https://parapluie.app/#a-propos"
        />
      </Helmet>

      <h1>À propos</h1>
      {/* contenu… */}
    </>
  );
}