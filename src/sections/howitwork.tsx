export function HowItWork() {
    const steps = [
        {
            id: "01",
            title: "Installez et personnalisez",
            description: "Téléchargez l'application sur le téléphone de votre proche. Ajustez le niveau de protection selon ses besoins — filtrage d'appels, de textos, blocage automatique. Chaque réglage est personnalisable, rien n'est imposé.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            )
        },
        {
            id: "02",
            title: "Protection automatique",
            description: "Chaque appel et texto entrant est analysé en temps réel. Parapluie détecte les tentatives de manipulation, les urgences fabriquées et les patterns d'arnaque connus. Trop sensible? Trop relax? Ajustez l'intensité en un clic.",
            icon: (
                <img src='/walter-in-bush.webp' alt='Walter la mascotte Parapluie surveillant les appels entrants' className="w-8 h-8" />
            )
        },
        {
            id: "03",
            title: "Contrôle partagé",
            description: "Le senior choisit ce que ses contacts de confiance peuvent voir. Les proches configurent leurs propres alertes selon ce qu'ils veulent suivre. Chacun garde le contrôle de son côté, en toute transparence.",
            icon: (
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
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
                    <p className="text-lg text-base-500 max-w-2xl mx-auto">
                        Une protection puissante, simple à mettre en place pour toute la famille.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-base-200 -z-10 transform translate-y-1/2"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="group relative bg-white rounded-3xl p-8 shadow-sm  transition-all duration-300 border border-purple-50 hover:-translate-y-2">

                            {/* Icon Circle */}
                            <div className="w-16 h-16 rounded-2xl bg-brand-primary flex items-center justify-center mb-8 transition-transform duration-300 mx-auto md:mx-0">
                                {step.icon}
                            </div>

                            {/* Big Number Background */}
                            <div className="absolute top-4 right-6 text-8xl font-black text-base-50 opacity-50 transition-colors select-none pointer-events-none">
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
                <div className="mt-16 text-center">
                    <p className="text-sm font-black text-base-650 tracking-widest opacity-80">
                        Prêt à commencer ?
                    </p>
                </div>
            </div>
        </section>
    );
}