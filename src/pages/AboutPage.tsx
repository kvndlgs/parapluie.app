import { useSeo } from '../hooks/useSeo';

export function AboutPage() {
  useSeo({
    title: 'À propos | Parapluie',
    canonical: 'https://parapluie.app/#a-propos'
  });
  
  return (

      <section>
      <h1>À propos</h1>
      {/* contenu… */}
      </section>
  );
}