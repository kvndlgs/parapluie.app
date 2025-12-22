import { Link } from 'react-router-dom';
import { useSeo } from '../hooks/useSeo';
import { Layout } from '../components/Layout';
import { getAllPosts } from '../content/posts';

export default function Blog() {
    const posts = getAllPosts();
   
    useSeo({
        title: 'Blog - Parapluie',
        canonical: 'https://parapluie.app/blog'
    });
        
    return (

        <Layout>
        <main>
            <Link to="/">
                Retourner a l'accueil 
            </Link>
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-base-50 to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-base-650 mb-6">
                        Blog Parapluie
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
                        {posts.map((post) => (
                            <article key={post.slug} className="bg-base-50 rounded-2xl p-8 border border-base-100 hover:border-primary-200 transition-colors">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="text-xs font-medium bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link to={`/post/${post.slug}`}>
                                    <h2 className="text-2xl font-bold text-base-700 mb-3 hover:text-primary-650 transition-colors">
                                        {post.title}
                                    </h2>
                                </Link>
                                <p className="text-base-600 mb-4 leading-relaxed">
                                    {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 text-sm text-base-500">
                                        <span>{post.author}</span>
                                        <span>•</span>
                                        <span>{new Date(post.date).toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                        <span>•</span>
                                        <span>{post.readTime} de lecture</span>
                                    </div>
                                    <Link
                                        to={`/post/${post.slug}`}
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

            
        </main>
    </Layout>
    );
}