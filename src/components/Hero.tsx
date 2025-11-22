export function Hero() {
    return (
        <section className="relative flex flex-col items-center justify-center -z-10 -mt-10 px-8 bg-[linear-gradient(to bottom, #F5F0FA 0%, white 80%)]  w-screen h-screen bg-[url('/bg2.png')] bg-center bg-cover">
            {/* Stat badge */}
            <div className="bg-[#E7E1FF] color-[#180D45] font-bold md:w-1/4 md:py-4 md:px-6 w-6/7 py-2 px-3 text-center md:text-md text-xs mb-12 rounded-full leading-tight">
                341% d'augmentation des fraudes contre les ainés depuis 2022
            </div>

            {/* Headline */}
            <h1 className="headline text-4xl md:text-5xl text-[#725572] md:max-w-[98%] md:tracking-wide leading-tight font-black mb-4 text-center">
                Proteger vos parents contre la fraude de type
                grand-parent et faux représentants
            </h1>

            {/* Subtext */}
            <p className="subtext text-md font-regular mb-10 max-w-9/10 text-center">
                Réagissez à temps grace à notre système de prévention
                des menaces et alertes en temps réel
            </p>

            {/* CTA */}
            <button className="cta-primary py-3 px-6 bg-[#725572] w-50 mx-auto rounded-lg text-white font-bold text-md">
                Accès anticipé
            </button>

        </section >
    )
}