import { useState } from 'react';
import { Head } from "vike-react/Head";
import { Modal } from '../../components/Modal';
import { WaitlistForm } from '../../components/WaitListForm';
import { 
  Handshake, 
  ShieldCheck, 
  TrendingUp, 
  Users 
} from 'lucide-react'; // Assuming you use lucide-react, or swap for icons you have

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const perks = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary-300" />,
      title: "Impact Social",
      description: "Protégez concrètement les membres les plus vulnérables de votre communauté."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary-300" />,
      title: "Croissance",
      description: "Bénéficiez de commissions attractives pour chaque nouvel abonné protégé."
    },
    {
      icon: <Users className="w-6 h-6 text-primary-300" />,
      title: "Outils Dédiés",
      description: "Accédez à des ressources marketing et un tableau de bord pour suivre votre impact."
    }
  ];

  return (
    <>
      <Head>
        <title>Programme de partenariat - Parapluie </title>
    <meta name="description" content="Rejoignez la mission Parapluie. Devenez partenaire et aidez-nous à protéger les aînés contre la fraude téléphonique au Québec." />
    <link rel="canonical" href="https://parapluie.app/partenariats"
    />
      </Head>
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-base-100 text-base-700 text-sm font-medium mb-6">
            <Handshake size={16} />
            <span>Programme Partenaire</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-base-750 mb-6 leading-tight">
            Ensemble, créons un bouclier pour nos aînés
          </h1>
          <p className="text-xl tbg-base-600 mb-10 max-w-2xl mx-auto">
            Vous accompagnez des seniors ou leur famille ? Devenez partenaire Parapluie et offrez-leur la tranquillité d'esprit qu'ils méritent.
          </p>
          <button
            onClick={openModal}
            className="px-8 py-4 bg-base-750 hover:bg-base-600 text-white font-bold rounded-md transition-all transform hover:scale-105 shadow-lg shadow-base-200"
          >
            Rejoindre le programme de partenariat
          </button>
        </div>
      </section>

      {/* Why Partner? Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="p-8 border border-base-100 rounded-md bg-base-50">
                <div className="mb-4 p-3 bg-white inline-block rounded-md">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-bold text-base-750 mb-2">{perk.title}</h3>
                <p className="text-neutral-600">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validation Quote / Mission */}
      <section className="py-20 px-6 bg-primary-300 text-white rounded-3xl mx-4 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-primary-800">Pourquoi maintenant ?</h2>
          <p className="text-lg text-primary-800 italic">
            "La fraude ciblant les aînés a augmenté de plus de 300% en deux ans. Les solutions actuelles sont passives ; Parapluie est proactif. Nous avons besoin de partenaires de confiance pour diffuser cette protection."
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-primary-300"></div>
            <span className="font-semibold uppercase tracking-widest text-sm">L'Équipe Parapluie</span>
            <div className="h-px w-12 bg-primary-300"></div>
          </div>
        </div>
      </section>

         {/* Modal Integration */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title="Programme partenaire"
            >
                <WaitlistForm
  formText="Rejoignez le programme partenaire en priorité"
  buttonText="Devenir partenaire"
  confirmationText="Merci ! Vous serez informé·e en premier du lancement du programme affilié."
/>
            </Modal>
            
      
    </>
  );
}
