import { useSeo } from '../hooks/useSeo';

export default function Media() {
 
  useSeo({
    title: 'Media - Parapluie',
    canonical: 'https://parapluie.app/media'
  });
    
  return (

    <section>
      <h1> Media </h1>
    </section>
    
  )
}