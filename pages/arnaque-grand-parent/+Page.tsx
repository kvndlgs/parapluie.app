import { useState } from 'react';
import { Modal } from '@/components/Modal';
import { WaitlistForm } from '@/components/WaitListForm';
import { Head } from "vike-react/Head";

export default function Page() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <Head>
              <title>
                Arnaque grand-parent 
              </title>
              <link rel="canonical"
              href="https://parapluie.app/arnaque-grand-parent" />
            </Head>
            <section className="relative flex flex-col items-center justify-center md:py-24 py-20 px-8 bg-gradient-to-b from-red-50 to-white min-h-[80vh]">
                <div className="inline-block bg-error-100 text-error-750 text-center font-semibold text-xs md:text-sm px-4 py-2 mt-2 rounded-full mb-8 shadow-sm">
                    Fraude #1 ciblant les aînés au Québec
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-base-650 md:mb-6 mb-3 max-w-4xl text-center">
                    Protégez vos parents contre <br className="hidden md:block" />
                    <span className="text-error-650">l'arnaque grand-parent</span>
                </h1>

                <p className="text-lg md:text-xl text-base-600 text-center font-medium max-w-2xl md:mb-10 mb-4 leading-relaxed">
                    Des fraudeurs se font passer pour vos proches en détresse. <br className="hidden md:block" />
                    Parapluie détecte ces appels avant qu'il ne soit trop tard.
                </p>

                <button onClick={openModal} className="py-3 px-6 bg-base-650 w-50 rounded-md mx-auto text-white text-md hover:bg-base-700 transition-colors">
                    Protéger mes parents maintenant
                </button>

                <Modal isOpen={isModalOpen} onClose={closeModal} title="Rejoignez la liste d'attente">
                    <WaitlistForm />
                </Modal>
            </section>

            {/* What is Grandparent Scam */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-650 mb-8">
                        Qu'est-ce que l'arnaque grand-parent?
                    </h2>
                    <div className="prose prose-lg text-base-600">
                        <p className="text-lg leading-relaxed mb-6">
                            L'arnaque grand-parent est une fraude téléphonique où un escroc appelle une personne âgée en se faisant passer pour un petit-enfant ou un proche en situation d'urgence. Le fraudeur prétend avoir besoin d'argent immédiatement — souvent pour payer une caution, des frais médicaux ou un billet d'avion.
                        </p>
                        <p className="text-lg leading-relaxed mb-6">
                            Ces appels sont conçus pour créer la panique et empêcher la victime de réfléchir ou de vérifier l'histoire. Les escrocs demandent souvent de garder l'appel secret « pour ne pas inquiéter les autres membres de la famille ».
                        </p>
                    </div>
                </div>
            </section>

            {/* Warning Signs */}
            <section className="py-20 px-6 bg-base-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-650 mb-8">
                        Comment reconnaître une arnaque grand-parent?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-2xl border border-base-100">
                            <div className="text-2xl mb-3">🚨</div>
                            <h3 className="font-bold text-lg text-base-700 mb-2">Urgence extrême</h3>
                            <p className="text-base-600">L'appelant insiste sur le fait que c'est urgent et qu'il faut agir immédiatement.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-base-100">
                            <div className="text-2xl mb-3">🤫</div>
                            <h3 className="font-bold text-lg text-base-700 mb-2">Demande de secret</h3>
                            <p className="text-base-600">"Ne dis rien à personne" — le fraudeur veut éviter toute vérification.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-base-100">
                            <div className="text-2xl mb-3">💸</div>
                            <h3 className="font-bold text-lg text-base-700 mb-2">Paiement inhabituel</h3>
                            <p className="text-base-600">Demande de virement, cartes-cadeaux ou crypto-monnaie plutôt qu'un chèque.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-base-100">
                            <div className="text-2xl mb-3">😢</div>
                            <h3 className="font-bold text-lg text-base-700 mb-2">Manipulation émotionnelle</h3>
                            <p className="text-base-600">L'appelant joue sur l'amour familial et la peur pour manipuler la victime.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How Parapluie Helps */}
            <section className="py-20 px-6 bg-secondary-50">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary-750 mb-8">
                        Comment Parapluie protège vos parents
                    </h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-2xl border border-secondary-100">
                            <h3 className="font-bold text-lg text-secondary-700 mb-2">Analyse en temps réel</h3>
                            <p className="text-secondary-600">Notre IA Walter analyse le contenu des conversations — pas seulement les numéros — pour détecter les tactiques de manipulation typiques de l'arnaque grand-parent.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-secondary-100">
                            <h3 className="font-bold text-lg text-secondary-700 mb-2">Alertes instantanées</h3>
                            <p className="text-secondary-600">Dès qu'un appel suspect est détecté, vous recevez une alerte en tant que proche aidant. Vous pouvez intervenir avant que vos parents ne transfèrent de l'argent.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl border border-secondary-100">
                            <h3 className="font-bold text-lg text-secondary-700 mb-2">Protection proactive</h3>
                            <p className="text-secondary-600">Parapluie fonctionne en arrière-plan, sans déranger vos parents. La protection est silencieuse mais constante.</p>
                        </div>
                    </div>
                    <div className="mt-10 text-center">
                        <button onClick={openModal} className="py-3 px-8 bg-secondary-650 rounded-md text-white text-lg font-semibold hover:bg-secondary-700 transition-colors">
                            Commencer à protéger mes parents
                        </button>
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="py-20 px-6 bg-error-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-error-750 mb-8">
                        L'arnaque grand-parent en chiffres
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <div className="text-5xl font-black text-error-650 mb-2">341%</div>
                            <p className="text-error-700">d'augmentation des fraudes ciblant les aînés depuis 2022</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-error-650 mb-2">$9,400</div>
                            <p className="text-error-700">perte moyenne par victime au Canada</p>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-error-650 mb-2">70%</div>
                            <p className="text-error-700">des victimes ont plus de 60 ans</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-650 mb-8">
                        Questions fréquentes sur l'arnaque grand-parent
                    </h2>
                    <div className="space-y-6">
                        <details className="bg-base-50 p-6 rounded-2xl border border-base-100">
                            <summary className="font-bold text-lg text-base-700 cursor-pointer">Comment les fraudeurs obtiennent-ils les informations sur ma famille?</summary>
                            <p className="text-base-600 mt-4">Les escrocs utilisent les réseaux sociaux, les annuaires publics et parfois des fuites de données pour recueillir des informations sur les familles. Ils peuvent connaître les noms des petits-enfants et d'autres détails personnels.</p>
                        </details>
                        <details className="bg-base-50 p-6 rounded-2xl border border-base-100">
                            <summary className="font-bold text-lg text-base-700 cursor-pointer">Que faire si mes parents ont déjà été victimes?</summary>
                            <p className="text-base-600 mt-4">Contactez immédiatement votre banque et le Centre antifraude du Canada (1-888-495-8501). Installez ensuite Parapluie pour prévenir les futures tentatives.</p>
                        </details>
                        <details className="bg-base-50 p-6 rounded-2xl border border-base-100">
                            <summary className="font-bold text-lg text-base-700 cursor-pointer">Parapluie fonctionne-t-il sur tous les téléphones?</summary>
                            <p className="text-base-600 mt-4">Parapluie sera disponible sur iOS et Android, compatible avec la majorité des téléphones intelligents utilisés par les seniors.</p>
                        </details>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 bg-primary-100">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary-750 mb-6">
                        Ne laissez pas l'arnaque grand-parent toucher votre famille
                    </h2>
                    <p className="text-lg text-primary-650 mb-8">
                        Rejoignez des milliers de familles québécoises qui protègent leurs aînés avec Parapluie.
                    </p>
                    <button onClick={openModal} className="py-3 px-8 bg-primary-650 rounded-md text-white text-lg font-semibold hover:bg-primary-700 transition-colors">
                        Accès anticipé gratuit
                    </button>
                    <p className="text-sm text-primary-600 mt-4">
                        <a href="/" className="underline hover:text-primary-750">← Retour à l'accueil</a>
                    </p>
                </div>
            </section>
        </>
    );
}
