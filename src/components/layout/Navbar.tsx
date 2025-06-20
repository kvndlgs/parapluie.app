import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from '@/components/ui/Logo';
import { MobileLogo } from '@/components/ui/Logo';
import { Link } from 'react-router-dom';


interface NavbarProps {
  scrolled: boolean;
}

const Links = [
  {
    label: 'Features',
    url: '#features'
  },
  {
    label: 'Subscriptions',
    url: '#subscriptions'
  },
  {
    label: 'Blog',
    url: '#'
  },
  {
    label: 'Learn',
    url: '#'
  }
]

const Navbar = ({ scrolled }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-30 transition-all duration-300 py-5 px-8 lg:px-16',
        {
          'bg-transparent': !scrolled && !isMenuOpen,
          'bg-white/90 backdrop-blur-md shadow-sm': scrolled || isMenuOpen,
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <>
        <Link to="/" className='hidden md:flex'>
          <Logo className="fill-primary [&>]:fill-currentColor hover:fill-primary-700 transition-all transition-ease-in duration-400" />
        </Link>
        <Link to="/" className="lg:hidden">
          <MobileLogo className="fill-primary [&>]:fill-currentColor hover:fill-primary-700 transition-all transition-ease-in duration-400" />
        </Link>
        </>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {Links.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              className={cn(
                'text-primary text-sm font-regular',
                {
                  'text-primary': !scrolled,
                }
              )}
            >
              {link.label}
            </Link>
          ))}
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <Link to="/" className="border-gradient-r-primary py-2 px-4 rounded-full text-sm font-medium">
            Early Access
          </Link> 
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
            'fixed inset-0 bg-white/95 flex flex-col items-center top-[300px] justify-center transition-all duration-300 sm:hidden drop-shadow-md',
            {
              'opacity-100 visible': isMenuOpen,
              'opacity-0 invisible': !isMenuOpen,
            }
          )}
        >
          {Links.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              className="text-sm w-full text-center pb-4 pt-6 font-bold text-primary transition-colors bg-white/95"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/" className="border-gradient-r-primary py-2 px-4 rounded-full text-sm font-medium">
           Early Acess
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;