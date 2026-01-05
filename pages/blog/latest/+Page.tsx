import { Head } from "vike-react/Head";
import type { Data } from "../latest/+data";
import { useData } from "vike-react/useData";

export default function Page() {
  const { posts } = useData<Data>();

  if (!posts) return;

  return (
    <>
      <Head>
        <title> Dernier Posts – Parapluie </title>
        <meta
          name="description"
          content="Blog et actualités sur la fraude visant les aînés au Québec"
        />
        <link rel="canonical" href="https://parapluie.app/blog/latest" />
      </Head>
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-base-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-base-650 mb-6">
            Blog Parapluie
          </h1>
          <p className="text-lg text-base-600 max-w-2xl mx-auto">
            Conseils et ressources pour protéger vos proches contre la fraude
            téléphonique au Québec.
          </p>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-base-50 rounded-2xl p-8 border border-base-100 hover:border-primary-200 transition-colors"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-primary-100 text-primary-700 px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={`/post/${post.slug}`}>
                  <h2 className="text-2xl font-bold text-base-700 mb-3 hover:text-primary-650 transition-colors">
                    {post.title}
                  </h2>
                </a>
                <p className="text-base-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-base-500">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>
                      {new Date(post.date).toLocaleDateString("fr-CA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span>{post.readTime} de lecture</span>
                  </div>
                  <a
                    href={`/post/${post.slug}`}
                    className="text-primary-650 font-semibold hover:text-primary-750 transition-colors"
                  >
                    Lire →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      /* CTA Section */
      <section className="py-16 px-6 bg-primary-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-750 mb-4">
            Protégez vos parents dès aujourd'hui
          </h2>
          <p className="text-primary-650 mb-6">
            Recevez des alertes en temps réel quand vos proches reçoivent des
            appels suspects.
          </p>
          <a
            href="/"
            className="inline-block py-3 px-8 bg-primary-650 rounded-md text-white font-semibold hover:bg-primary-700 transition-colors"
          >
            Découvrir Parapluie
          </a>
        </div>
      </section>
    </>
  );
}
