import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Logo from '@/components/ui/Logo';


interface NavbarProps {
  scrolled: boolean;
}

const Navbar = ({ scrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-30 transition-all duration-300 py-2.5 px-6 lg:px-12',
        {
          'bg-transparent': !scrolled && !isMenuOpen,
          'bg-white/90 backdrop-blur-md shadow-sm': scrolled || isMenuOpen,
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="/">
          <Logo className="w-44"/>
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {['Features', 'Subscriptions'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                'text-primary text-sm font-bold',
                {
                  'text-primary': !scrolled,
                }
              )}
            >
              {item}
            </a>
          ))}
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <a href="#download" className='text-white text-sm font-regular bg-secondary py-2.5 px-3.5 leading-normal rounded-full hidden sm:flex hover:shadow-xl hover:bg-primary'>Early Access</a>
        </nav>

        {/* Mobile Navigation Toggle */}
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          className="lg:hidden p-2 z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X
              className={cn('h-6 w-6', {
                'text-foreground': scrolled,
                'text-primary': !scrolled,
              })}
            />
          ) : (
            <Menu
              className={cn('h-6 w-6', {
                'text-foreground': scrolled,
                'text-primary': !scrolled,
              })}
            />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            'fixed inset-0 bg-white/95 flex flex-col items-center top-52 justify-center transition-all duration-300 sm:hidden drop-shadow-md',
            {
              'opacity-100 visible': isMenuOpen,
              'opacity-0 invisible': !isMenuOpen,
            }
          )}
        >
          {['Features', 'Subscriptions'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm w-full text-center pb-4 pt-6 font-bold text-primary transition-colors bg-white/95"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className='w-full pb-5 pt-4 bg-white/95 flex items-center justify-center'>
          <a href="#download" onClick={() => setIsMenuOpen(false)} className='rounded-full px-3 py-2 bg-primary'>
            Early Access
          </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;