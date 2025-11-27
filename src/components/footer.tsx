import Logo from './Logo';

export function Footer() {
    return (
        <div className="relative w-full">
            {/* Footer Top Wave (Purple -> Dark) */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#faf5ff"></path>
                </svg>
            </div>

            <footer className="w-full bg-brand-dark text-white pt-6 pb-12 px-6 text-center">
                <div className="max-w-7xl mx-auto flex flex-col items-center">

                    {/* Optional: Add footer navigation or links here similar to image */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm text-base-300">
                        <a href="#" className="hover:text-white transition-colors">Abonnement</a>
                        <a href="#howitwork" className="hover:text-white transition-colors">Comment ça marche ?</a>
                        <a href="#" className="hover:text-white transition-colors">Blog</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                    </div>

                    <span className="font-extrabold text-xl mb-4 opacity-50 tracking-tight">PARAPLUIE</span>
                    <p className="text-sm text-base-400">© 2025 Parapluie Inc. Tous droits réservés.</p>
                </div>
            </footer>
        </div>
    )
}



