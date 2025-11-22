export function Hero() {
    return (
        <section className="relative flex flex-col 
        items-center justify-center -z-10 py-24 px-8 
        bg-[linear-gradient(to bottom, #F5F0FA 0%, white 80%)]  
        w-screen 
        min-h-screen 
        bg-[url('/bg2.png')] 
        bg-center bg-cover"
        >
            {/* Stat badge */}
            <div className="bg-[#E7E1FF] color-[#29147B] leading-tighter font-bold md:w-md md:py-3 md:px-4 w-[99%] py-2 px-2 text-center md:text-md text-sm mb-6 rounded-full md:leading-tight">
                341% d'augmentation des fraudes contre les ainés depuis 2022
            </div>

            {/* Headline */}
            <h1 className="headline text-3xl md:text-5xl text-[#725572] md:max-w-4/8 md:tracking-wide leading-tight font-black mb-2 text-center">
                Proteger vos parents contre la fraude de type
                grand-parent et faux représentants
            </h1>

            {/* Subtext */}
            <p className="text-sm md:text-lg font-regular mb-6 max-w-4/12 text-center">
                Réagissez à temps grace à notre système de prévention
                des menaces et alertes en temps réel
            </p>

            {/* CTA */}
            <button className="cta-primary py-3 px-6 bg-[#725572] w-50 mx-auto rounded-lg text-white text-md">
                Accès anticipé
            </button>

        </section >
    )
}