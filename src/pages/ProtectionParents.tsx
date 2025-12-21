import { useState } from 'react';
import { Link } from 'react-router-dom';
import ResponsiveNavbar from '../components/ResponsiveNavbar';
import { Modal } from '../components/Modal';
import { WaitlistForm } from '../components/WaitListForm';

export default function ProtectionParents() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <main>
            <ResponsiveNavbar />

            {/* Hero Section */}
            <section className="relative flex flex-col items-center justify-center md:py-24 py-20 px-8 bg-gradient-to-b from-primary-50 to-white min-h-[80vh]">
                <div className="inline-block bg-primary-100 text-primary-750 text-center font-semibold text-xs md:text-sm px-4 py-2 mt-2 rounded-full mb-8 shadow-sm">
                    L'application qui protège vos parents
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-base-650 md:mb-6 mb-3 max-w-4xl text-center">
                    Comment protéger mes parents <br className="hidden md:block" />
                    <span className="text-primary-650">des arnaques téléphoniques?</span>
                </h1>

                <p className="text-lg md:text-xl text-base-600 text-center font-medium max-w-2xl md:mb-10 mb-4 leading-relaxed">
                    Vos parents méritent de répondre au téléphone sans stress. <br className="hidden md:block" />
                    Parapluie surveille leurs appels et vous alerte en temps réel.
                </p>

                <button onClick={openModal} className="py-3 px-6 bg-primary-650 w-50 rounded-md mx-auto text-white text-md hover:bg-primary-700 transition-colors">
                    Protéger mes parents maintenant
                </button>

                <Modal isOpen={isModalOpen} onClose={closeModal} title="Rejoignez la liste d'attente">
                    <WaitlistForm />
                </Modal>
            </section>

            {/* The Problem */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-650 mb-8">
                        Pourquoi vos parents sont-ils ciblés?
                    </h2>
                    <div className="prose prose-lg text-base-600">
                        <p className="text-lg leading-relaxed mb-6">
                            Les fraudeurs ciblent spécifiquement les personnes âgées car elles sont souvent plus confiantes, moins familières avec les nouvelles technologies et plus susceptibles de répondre au téléphone. Au Québec, les fraudes ciblant les aînés ont augmenté de 341% depuis 2022.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Les arnaques les plus courantes incluent l'arnaque grand-parent, les faux représentants du gouvernement ou de banques, et les appels de « support technique ». Ces fraudeurs sont de plus en plus sophistiqués et difficiles à détecter.
                        </p>
                    </div>
                </div>
            </section>

            {/* Types of Scams */}
            <section className="py-20 px-6 bg-base-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-650 mb-8">
                        Les arnaques qui ciblent vos parents
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-base-100">
                            <div className="text-2xl mb-3">👴</div>
                            <h3 className="font-bold text-lg text-base-700 mb-2">Arnaque grand-parent</h3>
                            <p className="text-base-600">Un fraudeur se fait passer pour un petit-enfant en détresse et demande de l'argent d'urgence.</p>
                            <Link to="/arnaque-grand-parent" className="text-primary-650 text-sm font-semibold mt-2 inline-block hover:underline">En savoir plus →</Link>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-base-100">
                            <div className="text-2xl mb-3">🏦</div>
                            <h3 className="font-bold text-lg text-base-700 mb-2">Faux représentants</h3>
                            <p className="text-base-600">Des escrocs prétendent appeler de la banque, du gouvernement ou d'Hydro-Québec pour soutirer des informations.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-base-100">
                            <div className="text-2xl mb-3">💻</div>
                            <h3 className="font-bold text-lg text-base-700 mb-2">Support technique frauduleux</h3>
                            <p className="text-base-600">Des appels prétendant que l'ordinateur est infecté et demandant un accès à distance.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-base-100">
                            <div className="text-2xl mb-3">🏆</div>
                            <h3 className="font-bold text-lg text-base-700 mb-2">Faux prix et loteries</h3>
                            <p className="text-base-600">"Vous avez gagné!" — mais il faut payer des frais pour recevoir le prix inexistant.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="py-20 px-6 bg-primary-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-750 mb-4">
                        La solution: Parapluie
                    </h2>
                    <p className="text-lg text-primary-650 mb-8">
                        Une application qui protège vos parents sans les déranger.
                    </p>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl border border-primary-100 flex gap-4">
                            <div className="text-3xl">🛡️</div>
                            <div>
                                <h3 className="font-bold text-lg text-primary-700 mb-2">Protection intelligente 24/7</h3>
                                <p className="text-primary-600">Parapluie analyse chaque appel et SMS en temps réel grâce à notre IA Walter. Pas besoin que vos parents fassent quoi que ce soit — la protection est automatique.</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-primary-100 flex gap-4">
                            <div className="text-3xl">📱</div>
                            <div>
                                <h3 className="font-bold text-lg text-primary-700 mb-2">Alertes pour les proches aidants</h3>
                                <p className="text-primary-600">Quand un appel suspect est détecté, vous recevez immédiatement une notification. Vous pouvez appeler vos parents pour les prévenir avant qu'il ne soit trop tard.</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-primary-100 flex gap-4">
                            <div className="text-3xl">📊</div>
                            <div>
                                <h3 className="font-bold text-lg text-primary-700 mb-2">Tableau de bord et rapports</h3>
                                <p className="text-primary-600">Suivez les tentatives de fraude bloquées et recevez des rapports hebdomadaires sur la sécurité de vos parents. Tranquillité d'esprit garantie.</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-primary-100 flex gap-4">
                            <div className="text-3xl">🗣️</div>
                            <div>
                                <h3 className="font-bold text-lg text-primary-700 mb-2">100% en français québécois</h3>
                                <p className="text-primary-600">Walter, notre assistant IA, parle français et comprend le contexte local. Vos parents peuvent lui poser des questions s'ils ont un doute sur un appel.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Get Started */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-650 mb-8 text-center">
                        Comment protéger mes parents en 3 étapes
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-primary-650">1</span>
                            </div>
                            <h3 className="font-bold text-lg text-base-700 mb-2">Inscrivez-vous</h3>
                            <p className="text-base-600">Créez votre compte Parapluie en 2 minutes. Aucune carte de crédit requise pour commencer.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-primary-650">2</span>
                            </div>
                            <h3 className="font-bold text-lg text-base-700 mb-2">Installez l'app</h3>
                            <p className="text-base-600">Installez Parapluie sur le téléphone de vos parents. L'interface est simple et conçue pour les aînés.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-2xl font-bold text-primary-650">3</span>
                            </div>
                            <h3 className="font-bold text-lg text-base-700 mb-2">Dormez tranquille</h3>
                            <p className="text-base-600">Recevez des alertes uniquement quand c'est nécessaire. Parapluie travaille en silence pour vous.</p>
                        </div>
                    </div>
                    <div className="mt-12 text-center">
                        <button onClick={openModal} className="py-3 px-8 bg-primary-650 rounded-md text-white text-lg font-semibold hover:bg-primary-700 transition-colors">
                            Commencer gratuitement
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonial / Social Proof */}
            <section className="py-20 px-6 bg-secondary-50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary-750 mb-8">
                        Pourquoi les familles québécoises choisissent Parapluie
                    </h2>
                    <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="bg-white p-6 rounded-2xl border border-secondary-100">
                            <p className="text-secondary-700 italic mb-4">"Ma mère a failli envoyer 5000$ à un fraudeur. Maintenant je suis alerté immédiatement."</p>
                            <p className="text-secondary-600 font-semibold">— Marc, Laval</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-secondary-100">
                            <p className="text-secondary-700 italic mb-4">"Simple à installer, mes parents n'ont rien eu à apprendre. Ça fonctionne tout seul."</p>
                            <p className="text-secondary-600 font-semibold">— Sophie, Montréal</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-secondary-100">
                            <p className="text-secondary-700 italic mb-4">"Le rapport hebdomadaire me rassure. Je sais que mes parents sont protégés."</p>
                            <p className="text-secondary-600 font-semibold">— Jean-François, Québec</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-650 mb-8">
                        Questions fréquentes
                    </h2>
                    <div className="space-y-6">
                        <details className="bg-base-50 p-6 rounded-2xl border border-base-100">
                            <summary className="font-bold text-lg text-base-700 cursor-pointer">Est-ce que mes parents doivent faire quelque chose?</summary>
                            <p className="text-base-600 mt-4">Non! Une fois Parapluie installé, tout est automatique. Vos parents utilisent leur téléphone normalement. L'application analyse les appels et SMS en arrière-plan sans les déranger.</p>
                        </details>
                        <details className="bg-base-50 p-6 rounded-2xl border border-base-100">
                            <summary className="font-bold text-lg text-base-700 cursor-pointer">Combien coûte Parapluie?</summary>
                            <p className="text-base-600 mt-4">Le forfait de base est gratuit et protège un proche. Le forfait Famille à 9,99$/mois permet de protéger jusqu'à 3 seniors avec des fonctionnalités avancées comme les alertes en temps réel et les rapports hebdomadaires.</p>
                        </details>
                        <details className="bg-base-50 p-6 rounded-2xl border border-base-100">
                            <summary className="font-bold text-lg text-base-700 cursor-pointer">Est-ce que Parapluie respecte la vie privée de mes parents?</summary>
                            <p className="text-base-600 mt-4">Absolument. Parapluie analyse les communications pour détecter les fraudes, mais ne stocke pas le contenu des conversations. Seules les alertes de sécurité sont partagées avec vous en tant que proche aidant.</p>
                        </details>
                        <details className="bg-base-50 p-6 rounded-2xl border border-base-100">
                            <summary className="font-bold text-lg text-base-700 cursor-pointer">Comment installer l'application sur le téléphone de mes parents?</summary>
                            <p className="text-base-600 mt-4">L'installation prend moins de 5 minutes. Vous pouvez le faire lors de votre prochaine visite ou nous pouvons vous guider par téléphone. L'interface est conçue pour être simple et accessible.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-20 px-6 bg-primary-100">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-750 mb-6">
                        Protégez vos parents dès aujourd'hui
                    </h2>
                    <p className="text-lg text-primary-650 mb-8">
                        Rejoignez la liste d'attente et soyez parmi les premiers à protéger vos proches.
                    </p>
                    <button onClick={openModal} className="py-3 px-8 bg-primary-650 rounded-md text-white text-lg font-semibold hover:bg-primary-700 transition-colors">
                        Accès anticipé gratuit
                    </button>
                    <p className="text-sm text-primary-600 mt-4">
                        <Link to="/" className="underline hover:text-primary-750">← Retour à l'accueil</Link>
                    </p>
                </div>
            </section>
        </main>
    );
}
