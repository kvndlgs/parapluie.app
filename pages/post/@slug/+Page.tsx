import ReactMarkdown from 'react-markdown';
import stripIndent from '../../../utils/stripIndent';
import { useEffect } from "react";
import { usePageContext } from "vike-react/usePageContext";

export default function Page() {
    
    const { post, otherPosts } = useData<Data>(); // On récupère tout d'ici !
    const content = stripIndent(post.content);

    // Get other posts for "Read more" section

    return (
        <>

            {/* Article Header */}
            <section className="pt-32 pb-12 px-6 bg-gradient-to-b from-base-50 to-white">
                <div className="max-w-3xl mx-auto">
                     <div className="inline-flex items-center gap-2 text-sm text-neutral-500">
            <a
              href="/"
              className="hover:text-neutral-800 hover:underline underline-offset-2"
            >
              Blog
            </a>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-700">{post.title}</span>
          </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                            <span key={tag} className="text-xs font-medium bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-base-700 mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 text-base-500">
                        <span className="font-medium">{post.author}</span>
                        <span>•</span>
                        <span>{new Date(post.date).toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        <span>•</span>
                        <span>{post.readTime} de lecture</span>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-12 px-6 bg-white">
                <div className="max-w-3xl mx-auto prose prose-lg prose-base-700">
                    <ReactMarkdown
                        components={{
                            h2: ({ children }) => (
                                <h2 className="text-2xl md:text-3xl font-bold text-base-700 mt-12 mb-6">{children}</h2>
                            ),
                            h3: ({ children }) => (
                                <h3 className="text-xl md:text-2xl font-bold text-base-700 mt-8 mb-4">{children}</h3>
                            ),
                            h4: ({ children }) => (
                                <h4 className="text-lg font-bold text-base-700 mt-6 mb-3">{children}</h4>
                            ),
                            p: ({ children }) => (
                                <p className="text-base-600 leading-relaxed mb-6">{children}</p>
                            ),
                            ul: ({ children }) => (
                                <ul className="list-disc list-inside text-base-600 mb-6 space-y-2">{children}</ul>
                            ),
                            ol: ({ children }) => (
                                <ol className="list-decimal list-inside text-base-600 mb-6 space-y-2">{children}</ol>
                            ),
                            li: ({ children }) => (
                                <li className="text-base-600">{children}</li>
                            ),
                            strong: ({ children }) => (
                                <strong className="font-bold text-base-700">{children}</strong>
                            ),
                            blockquote: ({ children }) => (
                                <blockquote className="border-l-4 border-primary-300 pl-6 py-2 my-6 bg-primary-50 rounded-r-lg italic text-base-600">
                                    {children}
                                </blockquote>
                            ),
                            a: ({ href, children, ...props }) => {
                                  const url = href || '/';
                                    const isExternal = /^https?:\/\//.test(url);

                                      if (isExternal) {
                                          return (
                                                <a
                                                        {...props}
                                                                href={url}
                                                                        target="_blank"
                                                                                rel="noopener noreferrer"
                                                                                        className="text-primary-650 hover:text-primary-750 underline"
                                                                                              >
                                                                                                      {children}
                                                                                                            </a>
                                                                                                                );
                                                                                                                  }

                                                                                                                    return (
                                                                                                                        <a href={url} className="text-primary-650 hover:text-primary-750 underline">
                                                                                                                              {children}
                                                                                                                                  </a>
                                                                                                                                    );
                                                                                                                                    },
                        
                            hr: () => (
                                <hr className="my-12 border-base-200" />
                            ),
                        }}
                    >
                        {content}
                    </ReactMarkdown>
                </div>
            </article>

            {/* Read More Section */}
            {otherPosts.length > 0 && (
                <section className="py-16 px-6 bg-base-50">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-base-700 mb-8">Continuer la lecture</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {otherPosts.map((otherPost) => (
                                <a
                                    key={otherPost.slug}
                                    href={`/post/${otherPost.slug}`}
                                    className="bg-white rounded-xl p-6 border border-base-100 hover:border-primary-200 transition-colors"
                                >
                                    <h3 className="font-bold text-base-700 mb-2 hover:text-primary-650">
                                        {otherPost.title}
                                    </h3>
                                    <p className="text-sm text-base-500">{otherPost.readTime} de lecture</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-16 px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-750 mb-4">
                        Passez à l'action
                    </h2>
                    <p className="text-primary-650 mb-6">
                        Ne laissez pas vos parents vulnérables. Protégez-les avec Parapluie.
                    </p>
                    <a
                        href="/"
                        className="inline-block py-3 px-8 bg-primary-650 rounded-md text-white font-semibold hover:bg-primary-700 transition-colors"
                    >
                        Commencer gratuitement
                    </a>
                </div>
            </section>
        </>
    );
}
