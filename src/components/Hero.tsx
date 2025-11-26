import { useState } from 'react';
import { Modal } from './Modal';
import { WaitlistForm } from './WaitListForm';

export function Hero() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);


    return (
        <section className="relative flex flex-col 
        items-center justify-center md:py-24 py-20 px-8 
        bg-[linear-gradient(to bottom, #F5F0FA 0%, white 80%)]  
        w-screen 
        min-h-screen 
        bg-[url('/bg2.png')] 
        bg-center bg-cover"
        >

            {/* Badge */}
            <div className="inline-block bg-primary-100 text-primary-500 text-center font-semibold text-xs md:text-sm px-4 py-2 mt-2 rounded-full mb-8 shadow-sm">
                341% d'augmentation des fraudes contre les aînés depuis 2022
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tighter text-base-700 md:mb-6 mb-3 max-w-4xl text-center">
                Protéger vos parents contre la fraude de type grand-parent <br className="hidden md:block" />
                et faux représentants
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-base-650 max-w-2xl md:mb-10 mb-4 leading-relaxed">
                Réagissez à temps grâce à notre système de prévention <br className="hidden md:block" />
                des menaces et alertes en temps réel
            </p>

            {/* CTA */}
            <button onClick={openModal} className="cta-primary py-3 px-6 bg-base-650 w-50 mx-auto rounded-lg text-white text-md">
                Accès anticipé
            </button>
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