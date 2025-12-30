import { getAllGuides } from '../../../src/content/guides';
import { Head } from "vike-react/Head";

export default function Page() {
   
    const guides = getAllGuides();
        
    return (
    <>
      <Head>
        <title>
          Guides - Parapluie
        </title>
        <link rel="canonical"
         href="https://parapluie 
         .app/guides"
         />
         <meta name="og:image"
         content="https://parapluie.app/og-guides.png" />
      </Head>
        <section className="py-12">
            
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-base-50 to-white">
          <div className="inline-flex items-center gap-2 text-sm text-neutral-500">
            <Link
              to="/"
              className="hover:text-neutral-800 hover:underline underline-offset-2"
            >
              Accueil
            </Link>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-700">Guides</span>
          </div>
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-base-650 mb-6">
                        Guides Parapluie
                    </h1>
                    <p className="text-lg text-base-600 max-w-2xl mx-auto">
                        Conseils et ressources pour protéger vos proches contre la fraude téléphonique au Québec.
                    </p>
                    
                </div>
            </section>

            {/* Posts Grid */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-8">
                        {guides.map((guide) => (
                            <article key={guide.slug} className="bg-base-50 rounded-2xl p-8 border border-base-100 hover:border-primary-200 transition-colors">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {guide.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link to={`/guide/${guide.slug}`}>
                                    <h2 className="text-2xl font-bold text-base-700 mb-3 hover:text-primary-650 transition-colors">
                                        {guide.title}
                                    </h2>
                                </Link>
                                <p className="text-base-600 mb-4 leading-relaxed">
                                    {guide.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-sm text-base-500">
                                        <span>{guide.author}</span>
                                        <span>•</span>
                                        <span>{new Date(guide.date).toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                        <span>•</span>
                                        <span>{guide.readTime} de lecture</span>
                                    </div>
                                    <Link
                                        to={`/guide/${guide.slug}`}
                                        className="text-primary-650 font-semibold hover:text-primary-750 transition-colors"
                                    >
                                        Lire →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-6 bg-primary-50">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-750 mb-4">
                        Protégez vos parents dès aujourd'hui
                    </h2>
                    <p className="text-primary-650 mb-6">
                        Recevez des alertes en temps réel quand vos proches reçoivent des appels suspects.
                    </p>
                    <Link
                        to="/"
                        className="inline-block py-3 px-8 bg-primary-650 rounded-md text-white font-semibold hover:bg-primary-700 transition-colors"
                    >
                        Découvrir Parapluie
                    </Link>
                </div>
            </section>

            
        </section>
        </>
    
    );
}