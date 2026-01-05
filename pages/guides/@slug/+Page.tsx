// pages/guide/@slug/+Pages.tsx

import ReactMarkdown from "react-markdown";
import stripIndent from "../../../src/utils/stripIndent";
import { useData } from "vike-react/useData";
import type { Data } from "./+data";

export default function Page() {
  const { guide, otherGuides } = useData<Data>();

  if (!guide && otherGuides) return;

  const content = stripIndent(guide.content);

  return (
    <>
      <section className="pt-32 pb-12 px-6 b:g-gradient-to-b from-base-50 to-white">
        <div className="max-w-3xl mx-auto py-12">
          <div className="inline-flex items-center gap-2 text-sm text-neutral-500">
            <a
              href="/guides"
              className="hover:text-neutral-800 hover:underline underline-offset-2"
            >
              Guides
            </a>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-700">{guide.title}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {guide.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium bg-primary-100 text-primary-700 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-base-700 mb-6 leading-tight">
            {guide.title}
          </h1>
          <div className="flex items-center gap-4 text-base-500">
            <span className="font-medium">{guide.author}</span>
            <span>•</span>
            <span>
              {new Date(guide.date).toLocaleDateString("fr-CA", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>•</span>
            <span>{guide.readTime} de lecture</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto prose prose-lg prose-base-700">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="text-2xl md:text-3xl font-bold text-base-700 mt-12 mb-6">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl md:text-2xl font-bold text-base-700 mt-8 mb-4">
                  {children}
                </h3>
              ),
              h4: ({ children }) => (
                <h4 className="text-lg font-bold text-base-700 mt-6 mb-3">
                  {children}
                </h4>
              ),
              p: ({ children }) => (
                <p className="text-base-600 leading-relaxed mb-6">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside text-base-600 mb-6 space-y-2">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside text-base-600 mb-6 space-y-2">
                  {children}
                </ol>
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
                const url = href || "/";
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
                  <a
                    href={url}
                    className="text-primary-650 hover:text-primary-750 underline"
                  >
                    {children}
                  </a>
                );
              },

              hr: () => <hr className="my-12 border-base-200" />,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </article>

      {/* Read More Section */}
      {otherGuides.length > 0 && (
        <section className="py-16 px-6 bg-base-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-base-700 mb-8">
              Continuer la lecture
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherGuides.map((otherGuide) => (
                <a
                  key={otherGuide.slug}
                  href={`/guide/${otherGuide.slug}`}
                  className="bg-white rounded-xl p-6 border border-base-100 hover:border-primary-200 transition-colors"
                >
                  <h3 className="font-bold text-base-700 mb-2 hover:text-primary-650">
                    {otherGuide.title}
                  </h3>
                  <p className="text-sm text-base-500">
                    {otherGuide.readTime} de lecture
                  </p>
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
