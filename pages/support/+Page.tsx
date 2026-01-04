import { Head } from "vike-react/Head";

export default function Page() {
  return (
    <>
    <Head>
      <title> Support - Parapluie </title>
      <link rel="canonical" href="https://parapluie.app/support" />
    </Head>
      <section className="min-h-screen bg-white text-neutral-900">
        {/* HERO */}
        <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-4 pb-10 pt-12 sm:px-6 lg:px-8">
          {/* Fil d’ariane */}
          <div className="inline-flex items-center gap-2 text-sm text-neutral-500">
            <a
              href="/"
              className="hover:text-neutral-800 hover:underline underline-offset-2"
            >
              Accueil
            </a>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-700">Support</span>
          </div>

          <header className="space-y-4">
            <p className="inline-flex rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
              Aide & prévention des arnaques
            </p>
            <h1 className="text-3xl font-extrabold tracking-tight text-base-900 sm:text-4xl">
              Besoin d’aide? Walter est là pour vous.
            </h1>
            <p className="max-w-2xl text-base text-neutral-600 sm:text-lg">
              Questions sur l’application, doute sur un appel, ou besoin de
              ressources pour protéger vos parents? On vous accompagne, étape
              par étape.
            </p>
          </header>
        </section>

        {/* GRID SECTIONS */}
        <section className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* FAQ */}
            <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-50">
                  <span className="text-lg">❓</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-base-900">
                    Questions fréquentes
                  </h2>
                  <p className="text-sm text-neutral-500">
                    Installation, fonctionnement, sécurité, Walter…
                  </p>
                </div>
              </div>

              <p className="mb-4 text-sm text-neutral-600">
                Retrouvez rapidement les réponses aux questions les plus
                courantes concernant Parapluie et la protection de vos parents.
              </p>

              <div className="mt-auto">
                <a
                  href="/support/faq"
                  className="inline-flex items-center rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-500"
                >
                  Consulter la FAQ →
                </a>
              </div>
            </article>

            <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50">
                  <span className="text-lg">🛡️</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-base-900">
                    Guides anti-fraude
                  </h2>
                  <p className="text-sm text-neutral-500">
                    Exemples réels, conseils et prévention.
                  </p>
                </div>
              </div>

              <p className="mb-4 text-sm text-neutral-600">
                Comprenez les arnaques les plus fréquentes au Québec (arnaque
                grand-parent, faux représentants, fraude bancaire…) avec des
                explications simples et concrètes.
              </p>

              <div className="mt-auto flex flex-wrap gap-3">
                <a
                  href="/arnaque-grand-parent"
                  className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 hover:border-emerald-400 hover:text-emerald-600"
                >
                  Arnaque grand-parent
                </a>

                <a
                  href="/protection-parents"
                  className="inline-flex items-center rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-800 hover:border-emerald-400 hover:text-emerald-600"
                >
                  Protéger ses parents
                </a>
              </div>
            </article>

            {/* Contact support */}
            <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50">
                  <span className="text-lg">📞</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-base-900">
                    Contacter le support
                  </h2>
                  <p className="text-sm text-neutral-500">
                    Une question ou un problème?
                  </p>
                </div>
              </div>

              <p className="mb-4 text-sm text-neutral-600">
                Une situation louche, un appel suspect ou un souci technique?
                Écrivez-nous, et on vous répond dès que possible.
              </p>

              <div className="mt-auto">
                <a
                  href="/support/contact"
                  className="inline-flex items-center rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-400"
                >
                  Contacter le support ✉️
                </a>
              </div>
            </article>

            {/* Ressources officielles */}
            <article className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50">
                  <span className="text-lg">🏛️</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-base-900">
                    Ressources officielles
                  </h2>
                  <p className="text-sm text-neutral-500">
                    Pour les situations plus graves.
                  </p>
                </div>
              </div>

              <p className="mb-4 text-sm text-neutral-600">
                Certains cas doivent être signalés aux autorités. Voici vers qui
                se tourner en cas de fraude avérée ou de perte d’argent.
              </p>

              <ul className="mt-auto space-y-2 text-sm text-neutral-600">
                <li>• Centre antifraude du Canada</li>
                <li>• Service de police local</li>
                <li>• Ressources d’aide aux aînés (FADOQ, CIUSSS, etc.)</li>
              </ul>
            </article>
          </div>
        </section>
      </section>
    </>
  );
}
