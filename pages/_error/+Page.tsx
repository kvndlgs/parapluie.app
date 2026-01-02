import errorImg from "../../assets/error.jpg";
export { Page };

function Page() {
  return (
    <>
      <div className="py-12  min-w-screen min-h-screen flex flex-col items-center justify-center">
        <img src={errorImg} alt="erreur 404" className="p-6 w-24" />
        <h1 className="font-bold text-3xl text-base-650">404 - Oups !</h1>
        <p className="text-lg Text-base-650">
          Cette page n'existe pas ou Walter l'a égarée.
        </p>
        <a href="/">Retour à l'accueil</a>
      </div>
    </>
  );
}
