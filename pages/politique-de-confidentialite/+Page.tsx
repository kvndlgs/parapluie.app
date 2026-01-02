import { Head } from "vike-react/Head";

export default function Page() {
  return (
    <>
      <Head>
        <title>Politiques de confidentialité - Parapluie</title>

        <a
          rel="canonical"
          href="https://parapluie.app/politique-de-confidentialite"
        />
      </Head>
      <div className="inline-flex items-center gap-2 text-sm text-neutral-500">
        <a
          href="/"
          className="hover:text-neutral-800 hover:underline underline-offset-2"
        >
          Accueil
        </a>
        <span className="text-neutral-400">/</span>
        <span className="text-neutral-700">Politique de confidentialité</span>
      </div>

      <section>
        <h1 id="politique-de-confidentialité">Politique de confidentialité</h1>
        <p>
          <strong>
            Parapluie — Application de protection contre les arnaques
          </strong>
        </p>
        <p>
          <em>Dernière mise à jour : 30 novembre 2025</em>
        </p>
        <br />
        <h2 id="introduction">1. Introduction</h2>
        <p>
          Walter Corps (« nous », « notre » ou « nos ») exploite l’application
          mobile Parapluie (le « Service »). Cette politique de confidentialité
          explique comment nous collectons, utilisons, stockons et protégeons
          vos informations personnelles lorsque vous utilisez notre Service.
        </p>
        <p>
          En utilisant Parapluie, vous acceptez les pratiques décrites dans
          cette politique. Si vous n’acceptez pas cette politique, veuillez ne
          pas utiliser le Service.
        </p>
        <h2 id="données-collectées">2. Données collectées</h2>
        <p>
          Pour fournir notre service de protection contre les arnaques, nous
          collectons les types de données suivants :
        </p>
        <h3 id="informations-de-compte">2.1 Informations de compte</h3>
        <p>
          Lors de la création de votre compte, nous collectons votre adresse
          courriel et les informations nécessaires à l’authentification.
        </p>
        <h3 id="données-dappels-téléphoniques">
          2.2 Données d’appels téléphoniques
        </h3>
        <p>
          Lorsqu’un appel est analysé par Walter, notre assistant IA, nous
          collectons :
        </p>
        <ul>
          <li>Le numéro de téléphone de l’appelant</li>
          <li>L’horodatage de l’appel</li>
        </ul>
        <p>
          Nous ne collectons pas et n’enregistrons pas le contenu audio des
          appels.
        </p>
        <h3 id="données-de-messages-textes-sms">
          2.3 Données de messages textes (SMS)
        </h3>
        <p>Lorsqu’un SMS est analysé, nous collectons :</p>
        <ul>
          <li>Le numéro de téléphone de l’expéditeur</li>
          <li>Le contenu du message pour analyse</li>
          <li>La langue détectée</li>
          <li>La présence de liens ou numéros de téléphone dans le message</li>
        </ul>
        <h3 id="résultats-danalyse">2.4 Résultats d’analyse</h3>
        <p>Pour chaque événement analysé, nous stockons :</p>
        <ul>
          <li>
            Le niveau de menace évalué (aucun, faible, moyen, élevé, critique)
          </li>
          <li>Le score de menace</li>
          <li>
            L’analyse détaillée de Walter incluant les indicateurs de risque
            identifiés et les recommandations
          </li>
          <li>Le statut de l’événement (bloqué, autorisé, en attente, etc.)</li>
        </ul>
        <h3 id="données-de-paiement">2.5 Données de paiement</h3>
        <p>
          Les paiements sont traités par Stripe. Nous ne collectons, ne stockons
          et n’avons jamais accès à vos informations de carte de crédit. Seul
          Stripe gère ces données conformément à leurs propres politiques de
          confidentialité.
        </p>
        <h2 id="utilisation-des-données">3. Utilisation des données</h2>
        <p>Nous utilisons vos données exclusivement pour :</p>
        <ul>
          <li>
            Analyser les appels et SMS entrants afin de détecter les tentatives
            d’arnaque
          </li>
          <li>Vous fournir des recommandations de sécurité personnalisées</li>
          <li>Améliorer la précision de notre système de détection</li>
          <li>
            Vous permettre de consulter votre historique d’événements de
            sécurité
          </li>
          <li>
            Notifier vos contacts de confiance en cas de menace élevée (si vous
            avez activé cette fonctionnalité)
          </li>
        </ul>
        <h2 id="stockage-et-sécurité-des-données">
          4. Stockage et sécurité des données
        </h2>
        <p>
          Vos données sont stockées sur des serveurs sécurisés situés au Canada
          (AWS ca-central-1), conformément aux lois canadiennes sur la
          protection des données. Nous utilisons Supabase comme infrastructure
          de base de données, avec chiffrement des données au repos et en
          transit.
        </p>
        <p>
          L’analyse des messages est effectuée via une fonction edge sécurisée
          utilisant l’intelligence artificielle (Llama 3.3 via Groq). Les
          données sont traitées en temps réel et les résultats sont stockés dans
          votre compte pour consultation ultérieure.
        </p>
        <h2 id="partage-des-données">5. Partage des données</h2>
        <p>
          Nous ne vendons jamais vos données personnelles. Nous partageons vos
          données uniquement avec :
        </p>
        <ul>
          <li>
            <strong>Groq</strong> — pour l’analyse IA des messages (données
            traitées sans rétention)
          </li>
          <li>
            <strong>Stripe</strong> — pour le traitement des paiements
          </li>
          <li>
            <strong>Autorités légales</strong> — si requis par la loi
          </li>
        </ul>
        <h2 id="vos-droits">6. Vos droits</h2>
        <p>Conformément aux lois applicables, vous avez le droit de :</p>
        <ul>
          <li>Accéder à vos données personnelles</li>
          <li>Corriger vos données inexactes</li>
          <li>Supprimer votre compte et toutes les données associées</li>
          <li>Exporter vos données dans un format portable</li>
          <li>Retirer votre consentement à tout moment</li>
        </ul>
        <p>
          Pour exercer ces droits, contactez-nous à
          <strong>info@parapluie.app</strong>.
        </p>
        <h2 id="conservation-des-données">7. Conservation des données</h2>
        <p>
          Nous conservons vos données d’événements de sécurité tant que votre
          compte est actif. Lors de la suppression de votre compte, toutes vos
          données personnelles sont supprimées dans un délai de 30 jours.
        </p>
        <h2 id="protection-des-mineurs">8. Protection des mineurs</h2>
        <p>
          Parapluie n’est pas destiné aux personnes de moins de 18 ans. Nous ne
          collectons pas sciemment de données personnelles auprès de mineurs.
        </p>
        <h2 id="modifications-de-cette-politique">
          9. Modifications de cette politique
        </h2>
        <p>
          Nous pouvons mettre à jour cette politique de temps à autre. Nous vous
          informerons de tout changement important par courriel ou via une
          notification dans l’application.
        </p>
        <h2 id="nous-contacter">10. Nous contacter</h2>
        <p>
          Pour toute question concernant cette politique de confidentialité ou
          vos données personnelles
        </p>
        <p>
          <strong>Walter Corps</strong>
          <br />
          Courriel : info@parapluie.app
          <br />
          Site web : https://parapluie.app
        </p>
      </section>
    </>
  );
}
