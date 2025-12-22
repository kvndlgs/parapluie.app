import { Modal } from './Modal';
import { WaitlistForm } from './WaitListForm';

interface HeroProps {
    openModal: () => void;
    isModalOpen: boolean;
    closeModal: () => void;
}

export function Hero({ openModal, isModalOpen, closeModal }: HeroProps) {


    return (
        <section className="relative flex flex-col 
        items-center justify-center md:py-24 py-20 px-8 
        bg-[linear-gradient(to bottom, #F5F0FA 0%, white 80%)]  
        w-screen overflow-hidden">
        
             <img
                 src="/bg2.webp"
                     alt="Protection contre les scams pour les aînés"
                         aria-hidden="true"
                             className="absolute inset-0 h-full w-full object-cover"
                                 fetchPriority="high"
                                     decoding="async"
                         />
<div className="z-10">
            {/* Badge */}
            <div className="inline-block bg-primary-100 text-primary-850 text-center font-semibold text-xs md:text-sm px-4 py-2 mt-2 rounded-full mb-8 shadow-sm">
                341% d'augmentation des fraudes contre les aînés depuis 2022
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tighter text-base-650 md:mb-6 mb-3 max-w-4xl text-center">
                L'application qui protège vos parents <br className="hidden md:block" /> contre les arnaques téléphoniques
            </h1>
            {/* SEO: Secondary heading for query variations */}
            <h2 className="sr-only">Protection contre l'arnaque grand-parent et les faux représentants au Québec</h2>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-base-600 text-center font-medium max-w-2xl md:mb-10 mb-4 leading-relaxed">
                Réagissez à temps grâce à notre système de prévention <br className="hidden md:block" />
                des menaces et alertes en temps réel
            </p>

            {/* CTA */}
            <button onClick={openModal} className="py-3 px-6 bg-base-650 w-50 rounded-md mx-auto text-white text-md">
                Accès anticipé
            </button>
</div>
            {/* Modal Integration */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title="Rejoignez la liste d'attente"
            >
                <WaitlistForm />
            </Modal>
            

        </section >
    )
}