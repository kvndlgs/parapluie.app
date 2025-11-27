
export function Footer() {
    return (
        <div className="relative w-full">
            {/* Footer Top Wave (Purple -> Dark) */}
            <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%]">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="var(--primary-250)"></path>
                </svg>
            </div>

            <footer className="w-full bg-primary-250  pt-6 pb-12 px-6 text-center">
                <div className="max-w-7xl mx-auto flex flex-col items-center">


                    {/* Optional: Add footer navigation or links here similar to image */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-sm text-primary-25">
                        <a href="#" className="hover:text-white text-base-750 transition-colors">Abonnement</a>
                        <a href="#howitwork" className="hover:text-white transition-colors">Comment ça marche ?</a>
                        <a href="#" className="hover:text-white transition-colors">Blog</a>
                        <a href="#" className="hover:text-white transition-colors">Contact</a>
                        <a href='/privacy-policy.md' className="hover:text-white transition-colors"> Politiques de confidentialités </a>
                    </div>
                    <div className='flex flex-col items-center justify-start w-full gap-3'>
                        <svg width="36" height="37" viewBox="0 0 240 249" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M139.924 249C133.432 249 124.88 247.038 121.047 237.685C121.047 237.66 107.101 210.182 107.083 210.144C106.843 209.677 106.64 209.274 106.432 208.939L106.476 208.958C51.0244 72.8966 122.543 43.7594 21.3911 106.341C19.8374 107.287 16.7175 108.877 13.3386 108.877C7.69866 108.877 3.80818 104.336 1.77453 95.3864C-11.179 46.0614 49.9886 33.8263 81.2576 18.7153C114.226 8.89572 173.669 -13.1653 210.111 10.7436C222.312 18.8667 230.674 30.8432 234.957 46.3389C250.518 102.614 230.327 152.336 170.77 157.079C166.027 157.306 157.482 156.808 155.151 146.307C155.177 146.225 147.667 118.974 146 112.774L146.031 112.755C142.558 100.564 137.082 64.3572 158.562 63.0643C164.404 63.1589 169.166 66.3186 171.642 71.755C175.21 79.5439 173.524 90.0635 167.442 97.9343C160.621 105.893 174.162 116.508 180.294 108.044C198.401 88.9724 190.128 46.9695 160.065 47.4867C149.189 47.3858 140.265 50.9617 134.455 58.1199C111.194 86.6957 142.223 165.77 158.726 196.875C166.084 211.241 173.719 225.986 171.907 230.773C169.28 240.17 153.737 248.993 139.93 249.006L139.924 249Z" fill="var(--primary-400)" />
                        </svg>
                        <p className="text-xs font-medium text-primary-25">© 2025 Walter Corp. Tous droits réservés.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}



