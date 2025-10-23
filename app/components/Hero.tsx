export default function Hero() {
  return (
    <section className="w-screen h-screen relative overflow-hidden">
      <img
        src="/bg.png"
        alt="hero"
        className="absolute min-h-screen -top-40 left-0 w-full object-cover bg-center-top -z-10"
      />

      <div className="max-w-3xl py-16 mx-auto text-center">
        <div className="inline-flex items-center justify-center py-2 px-4 bg-[#FEF3C7] drop-shadow-lg drop-shadow-blur drop-shadow-[300, 15%, 25%]/10 rounded-sm mb-6">
          <p className="text-poop-purple-500 text-sm font-monument font-normal">
            <span className="font-black text-base">341%</span> d'augmentation
            des fraudes contre les ainés depuis 2022
          </p>
        </div>
        <h1 className="text-4xl md:text-5xl font-monument font-black leading-tight mb-6 text-poop-purple-700">
          Proteger vos parents contre
          <br />
          la fraude de type
          <br />
          grand-parent et faux representants
        </h1>
        <p className="text-base font-monument font-normal mb-8 max-w-xl mx-auto text-poop-purple-500">
          Réagissez a temp grace a notre systeme de prévention
          <br />
          des menaces et alertes en temps réel
        </p>
        <button className="bg-[#8B5CF6] text-white px-8 py-3 rounded-full font-monument  hover:bg-[#7C3AED] transition-colors">
          Rejoindre la liste d'attente
        </button>
      </div>
    </section>
  );
}
