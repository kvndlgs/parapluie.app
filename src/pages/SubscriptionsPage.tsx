import { useSeo } from '../hooks/useSeo'
import { Link } from 'react-router-dom';

export function SubscriptionsPage() {
  
  useSeo({
    title: 'Abonnements - Parapluie',
    canonical: 'https://parapluie.app/abonnements'
  });
  
  return (
    
<section>
  <Link to='/'> Retourner a l'accueil </Link>
  <h1> Abonnements </h1>
</section>
);
}