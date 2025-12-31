import errorImg from "../ ../assets/error.jpg";
import { Head } from "vike/Head";
export { Page }

function Page() {
  return (
    <>
      <Head>
        <title> 404 - Parapluie </title>
      </Head>
    <div className="py-12  min-w-screen min-h-screen flex items-center justify-center">
      <img src={errorImg} alt="erreur 404" className="p-6" />
      <h1 className="font-bold text-3xl text-base-650">404 - Oups !</h1>
      <p className="text-lg Text-base-650">Cette page n'existe pas ou Walter l'a égarée.</p>
      <a href="/">Retour à l'accueil</a>
    </div>
    </>
  )
}
