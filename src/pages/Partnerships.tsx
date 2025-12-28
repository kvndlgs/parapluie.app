import { useState } from 'react';
import { Layout } from '../components/Layout';
import { useSeo } from '../hooks/useSeo';
import { WaitlistForm } from '../components/WaitListForm';
import { 
  Handshake, 
  ShieldCheck, 
  TrendingUp, 
  Users 
} from 'lucide-react'; // Assuming you use lucide-react, or swap for icons you have

export default function Partnerships() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useSeo({
    title: "Programme de Partenariat - Parapluie",
    description: "Rejoignez la mission Parapluie. Devenez partenaire et aidez-nous à protéger les aînés contre la fraude téléphonique au Québec.",
    canonical: "https://parapluie.app/partenariats"
  });

  const perks = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary-600" />,
      title: "Impact Social",
      description: "Protégez concrètement les membres les plus vulnérables de votre communauté."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary-600" />,
      title: "Croissance",
      description: "Bénéficiez de commissions attractives pour chaque nouvel abonné protégé."
    },
    {
      icon: <Users className="w-6 h-6 text-primary-600" />,
      title: "Outils Dédiés",
      description: "Accédez à des ressources marketing et un tableau de bord pour suivre votre impact."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <Handshake size={16} />
            <span>Programme Partenaire</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-neutral-900 mb-6 leading-tight">
            Ensemble, créons un bouclier pour nos aînés
          </h1>
          <p className="text-xl text-neutral-600 mb-10 max-w-2xl mx-auto">
            Vous accompagnez des seniors ou leur famille ? Devenez partenaire Parapluie et offrez-leur la tranquillité d'esprit qu'ils méritent.
          </p>
          <button
            onClick={openModal}
            className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-primary-200"
          >
            Rejoindre la liste d'attente partenaire
          </button>
        </div>
      </section>

      {/* Why Partner? Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="p-8 border border-neutral-100 rounded-2xl bg-neutral-50 hover:bg-white hover:shadow-xl transition-all">
                <div className="mb-4 p-3 bg-white inline-block rounded-lg shadow-sm">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{perk.title}</h3>
                <p className="text-neutral-600">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation Quote / Mission */}
      <section className="py-20 px-6 bg-primary-900 text-white rounded-3xl mx-4 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Pourquoi maintenant ?</h2>
          <p className="text-lg text-primary-100 italic">
            "La fraude ciblant les aînés a augmenté de plus de 300% en deux ans. Les solutions actuelles sont passives ; Parapluie est proactif. Nous avons besoin de partenaires de confiance pour diffuser cette protection."
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-primary-500"></div>
            <span className="font-semibold uppercase tracking-widest text-sm">L'Équipe Parapluie</span>
            <div className="h-px w-12 bg-primary-500"></div>
          </div>
        </div>
      </section>

      {/* Modal - Controlled by existing state */}
      {isModalOpen && (
        <WaitlistForm 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          title="Demande de Partenariat"
          description="Laissez-nous vos coordonnées et nous vous contacterons dès l'ouverture du programme affilié."
        />
      )}
    </Layout>
  );
}
