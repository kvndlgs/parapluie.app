export function HowItWork() {
    const steps = [
        {
            id: "01",
            title: "Installer, personnaliser, protéger.",
            description: "Téléchargez l'application, pour vous même ou pour un proche. Ajustez le niveau de protection selon vos besoins — filtrage d'appels, de textos, blocage automatique. Chaque réglage est personnalisable, rien n'est imposé.",
            icon: (
                <img src='/walter-picasso.webp' className="w-36 h-36 scale-x-[-1]" alt='walter-la-mascotte-qui-paint-son-autoportrait' />
            )
        },
        {
            id: "02",
            title: "Votre protection, c'est du sérieux!",
            description: "Chaque appel et texto entrant est analysé en temps réel. Parapluie détecte les tentatives de manipulation, les urgences fabriquées et les patterns d'arnaque connus. Trop sensible? Trop relax? Ajustez l'intensité en un clic.",
            icon: (
                <img src='/walter-cia.webp' className="h-36 w-36 opacity-90" alt='Walter la mascotte Parapluie surveillant les appels entrants' />
            )
        },
        {
            id: "03",
            title: "À deux, c'est mieux.",
            description: "Jouer un role de premier plan dans le bien être de vos proches en tant que contact de confiance, vous receverez des alertes en temp réel lors de tentative de la part des fraudeurs ",
            icon: (
                <img src='/walter-trusted-contact.webp' className='h-36 w-36' alt='walter-parapluie-trusted-contact' />
            )
        }
    ];

    return (
        <section id="howitwork" className="py-24 px-6 bg-primary-50/50 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-base-650 mb-6 tracking-tight">
                        Comment ça fonctionne ?
                    </h2>
                    <p className="text-lg text-base-650 max-w-2xl mx-auto">
                        Un system puissant, simple à mettre en place pour toute la famille.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-base-200 -z-10 transform translate-y-1/2"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-sm  transition-all duration-300 border border-purple-50 hover:-translate-y-2">

                            {/* Icon Circle */}
                            <div className="flex h-xl pb-4 justify-start items-center  transition-transform duration-300 mx-auto md:mx-0">
                                {step.icon}
                            </div>

                            {/* Big Number Background */}
                            <div className="absolute top-4 right-6 text-8xl font-black text-base-100 opacity-50 transition-colors select-none pointer-events-none">
                                {step.id}
                            </div>

                            <h3 className="text-2xl font-bold text-base-650 mb-4 relative z-10">
                                {step.title}
                            </h3>

                            <p className="text-base-600 leading-relaxed relative z-10">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Simple visual cue for what's next */}
                <div className="mt-16 text-center md:mt-20 md:pb-40 pb-16 pt-10 flex flex-col gap-12 items-center">
                    <h2 className="text-4xl font-bold text-base-650">
                        Il y a de la place pour tous sous notre parapluie.
                    </h2>
                    <a href='/subscriptions' className="bg-primary-250 text-primary-25 font-bold rounded-md py-3.5 px-5 border-b-3 border-primary-400"> Voir les plans </a>
                </div>
            </div>
        </section>
    );
}