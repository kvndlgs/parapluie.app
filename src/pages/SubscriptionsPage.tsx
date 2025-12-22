import { useSeo } from '../hooks/useSeo'
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';

export default function SubscriptionsPage() {
  
  useSeo({
    title: 'Abonnements - Parapluie',
    canonical: 'https://parapluie.app/abonnements'
  });
  
  return (
    <Layout>
<section>
  <Link to='/'> Retourner a l'accueil </Link>
  <h1> Abonnements </h1>
</section>
</Layout>
);
}