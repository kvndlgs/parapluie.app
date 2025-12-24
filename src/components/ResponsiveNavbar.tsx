import { useState, useEffect } from 'react';
import Logo from './Logo'; // Corrected import

interface NavItem {
  label: string;
    href: string;
    }

    const menuItems: NavItem[] = [
      { label: 'À Propos', href: '#a-propos' },
        { label: 'Comment ça marche ?', href: '#comment-ca-marche' },
          { label: 'Abonnement', href: '#abonnements' },
            { label: 'Dashboard', href: 'https://dashboard.parapluie.app' },
            ];
            
            const ResponsiveNavbar = () => {
              const [scrolled, setScrolled] = useState(false);
                const [isOpen, setIsOpen] = useState(false);

                  const toggleMenu = () => {
                      setIsOpen(!isOpen);
                        };
                          // Smooth scroll handler
                            const scrollToSection = (e: React.MouseEvent, id: string) => {
               e.preventDefault();
          const element = document.getElementById(id);
                         if (element) {
        
        element.scrollIntoView({ behavior: 'smooth' });
                                                  }
                                                    };
                             useEffect(() => {
                          const handleScroll = () => {
                                                                setScrolled(window.scrollY > 20);
                                                                    };
                                                                        window.addEventListener('scroll', handleScroll);
                                                                            return () => window.removeEventListener('scroll', handleScroll);
                                                                              }, []);

                                                                                return (

                                                                                    <nav className={`
                                                                                          fixed top-2 left-2 right-2 z-30
                                                                                                transition-all duration-300
                                                                                                      flex justify-between px-4 md:justify-center items-center
                                                                                                            py-4 rounded-full
                                                                                                                  ${scrolled
                                                                                                                          ? 'backdrop-blur-xl bg-primary-25/93 shadow-sm'
                                                                                                                                  : 'backdrop-blur-md bg-white'
                                                                                                                                        }
                                                                                                                                            `} /*className="sticky w-full flex justify-between px-4 md:justify-center items-center bg-[rgba(255,255,255,0.95)] backdrop-blur-[12px] py-4 rounded-full"*/>
                                                                                                                                                  {/* Mobile Logo (visible on mobile, hidden on desktop) */}
                                                                                                                                                        <div className="md:hidden">
                                                                                                                                                                <Logo variant='icon' />
                                                                                                                                                                      </div>

                                                                                                                                                                            {/* Desktop Navigation (hidden on mobile) */}
                                                                                                                                                                                  <div className="hidden md:flex items-center gap-16">
                                                                                                                                                                                          <div className="hidden md:flex space-x-12  font-medium text-base-750">
                                                                                                                                                                                                    <a href="#a-propos" onClick={(e) => scrollToSection(e, 'a-propos')} className="hover:text-brand-primary transition-colors">À Propos</a>
                                                                                                                                                                                                              <a href="comment-ca-marche" onClick={(e) => scrollToSection(e, 'comment-ca-marche')} className="hover:text-brand-primary transition-colors">Comment ça marche ?</a>
                                                                                                                                                                                                                      </div>

                                                                                                                                                                                                                              <Logo variant='full' /> {/* Full logo for desktop */}

                                                                                                                                                                                                                                      <div className="hidden md:flex space-x-12  font-medium text-base-750">
                                                                                                                                                                                                                                                <a onClick={(e) => scrollToSection(e, 'abonnements')} className="hover:text-brand-primary cursor-pointer transition-colors">Abonnement</a>
                                                                                                                                                                                                                                                          <a href="https://dashboard.parapluie.app" className="hover:text-brand-primary cursor-pointer transition-colors">Tableau de bord</a>
                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                        </div>

                                                                                                                                                                                                                                                                              {/* Hamburger Menu (visible on mobile, hidden on desktop) */}
                                                                                                                                                                                                                                                                                    <div className="md:hidden cursor-pointer w-8 h-8 flex items-center justify-between md:justify-center transition-transform duration-100" onClick={toggleMenu}>
                                                                                                                                                                                                                                                                                            {!isOpen ? <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                                                                                                                                                                                                                      <rect x="9" y="14" width="18" height="2" rx="1" fill="#755775" />
                                                                                                                                                                                                                                                                                                                <rect x="9" y="20" width="18" height="2" rx="1" fill="#755775" />
                                                                                                                                                                                                                                                                                                                        </svg> : <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                                                                                                                                                                                                                                                  <rect x="12.136" y="10.793" width="18" height="2" rx="1" transform="rotate(45 12.136 10.793)" fill="#755775" />
                                                                                                                                                                                                                                                                                                                                            <rect x="11.136" y="23.793" width="18" height="2" rx="1" transform="rotate(-45 11.136 23.793)" fill="#755775" />
                                                                                                                                                                                                                                                                                                                                                    </svg>
                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                                                                                                                        {/* Mobile Menu (visible when open on mobile) */}
                                                                                                                                                                                                                                                                                                                                                                              {isOpen && (

                                                                                                                                                                                                                                                                                                                                                                                      <div className="md:hidden flex flex-col w-94/100 left-0 right-0 absolute top-20 mx-auto bg-primary-50/97 backdrop-blur-2xl rounded-2xl p-4 shadow-md">
                                                                                                                                                                                                                                                                                                                                                                                                {menuItems.map(item => (
                                                                                                                                                                                                                                                                                                                                                                                                            <a
                                                                                                                                                                                                                                                                                                                                                                                                                          key={item.href}
                                                                                                                                                                                                                                                                                                                                                                                                                                     href={item.href}
                                                                                                                                                                                                                                                                                                                                                                                                                                                      className="py-2 text-base-750"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                  >
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                {item.label}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            </a>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    )}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        </nav>

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          );
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          };

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          export default ResponsiveNavbar