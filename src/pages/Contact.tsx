import { useForm, ValidationError } from '@formspree/react';
import { useEffect } from 'react';
// import { useSeo } from '../hooks/useSeo';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export function Contact() {
  const [state, handleSubmit] = useForm('mldywgll');
  
  useEffect(() => {
    console.log('Formspree state:', state);
    console.log('Erros', state.errors);
  });
  
  if (state.submitting) {
    console.log(state.submitting);
  }
  if (state.succeeded) {
    return (
        
      <div className="text-center py-6 animate-[fadeIn_0.5s_ease-out]">
                <h3 className="text-2xl font-bold text-base-600 mb-2">Votre message a été envoyé!</h3>
            </div>
    );
  }
      
  return (
     
    <main className="pb-16">
         <Link to="/">Retour</Link>

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-base-50 to-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-base-650 mb-6">
                        Dites bonjour!
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-base-600 mb-6"> Via courriel</h2> 
                 <a href="mailto:bonjour@parapluie.app">  
                    <h2 className="text-3xl md:text-4xl text-base-500 underline underline-offset-6 mb-6">
         bonjour@parapluie.app 
         </h2>
         </a>
                </div>
            </section>
   
   <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-base-50 to-white">
                <div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl font-bold text-base-600 mb-6">
                        Ou par ici!
                    </h2>
                    
                    
                </div>
        
       <form
            onSubmit={handleSubmit}
            className="space-y-5"
            name="waitlist"
        >
            <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-base-650 mb-1">
                    Nom complet <small className='text-xs text-base-250'> </small>
                </label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="ex: Walter Water"
                    className="block w-full rounded-lg border border-base-200 px-4 py-3 text-base-700 placeholder-base-400 focus:border-primary-150 focus:ring-primary-150 sm:text-sm outline-none transition-shadow focus:ring-1 focus:ring-opacity-50"
                />
                <ValidationError field='fullName' prefix='Nom' errors={state.errors} />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-base-700 mb-1">
                    Adresse courriel
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="ex: walter@parapluie.app"
                    className="block w-full rounded-lg border border-base-300 px-4 py-3 text-base-700 placeholder-base-500 focus:border-primary-150 focus:ring-primary-150 sm:text-sm outline-none transition-shadow focus:ring-1 focus:ring-opacity-50"
                />
                <ValidationError field='email' prefix='Email' errors={state.errors} />
            </div>
            <div>
<label htmlFor="message" className="block text-sm font-medium text-base-700 mb-1">
                    Votre message 
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Entrer votre message ici..."
         className="block w-full rounded-lg border border-base-300 px-4 pt-2 pb-4 text-base-700 placeholder-base-500 focus:border-primary-150 focus:ring-primary-150 sm:text-sm outline-none transition-shadow focus:ring-1 focus:ring-opacity-50" />
                <ValidationError field='message' prefix='Message' errors={state.errors} />
            </div>
            
            <button
             type="submit"
                disabled={state.submitting}
                className="w-full rounded-lg bg-base-650 px-4 py-3 text-sm font-bold text-white shadow-sm hover:bg-base-500 focus:outline-none focus:ring-1 focus:ring-primary-150 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed transition-all transform active:scale-[0.98]"
            >
                {state.submitting ? (
                    <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envois en cours...
                    </span>
                ) : (
                    "Envoyer votre message"
                )}
            </button>

        </form>
        </section>
        <Footer />
  </main>
  
  );
}