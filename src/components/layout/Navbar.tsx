import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Logo from '@/components/ui/Logo';
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
    url: '/blog'
  },
  {
    label: 'Learn',
    url: '/learn'
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
        'fixed top-0 left-0 right-0 z-30 transition-all duration-300 py-5 px-8 lg:px-12',
        {
          'bg-transparent': !scrolled && !isMenuOpen,
          'bg-white/90 backdrop-blur-md shadow-sm': scrolled || isMenuOpen,
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/">
          <Logo className="fill-primary [&>]:fill-currentColor hover:fill-primary-700 transition-all transition-ease-in duration-400" />
        </Link>
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
          <Link to="#" className='max-w-screen max-h-screen sm:flex'>
           <div className="w-[160px] h-12 flex items-center justify-center p-[3px] bg-gradient-to-r from-[#8438ff] via-[#ff5d38]] to-[#c738ff] rounded-full hover:from-[#c738ff] hover:via-[#ff5d38] hover:to-[#8438ff] transition-all duration-400">
             <div className="h-full w-full flex items-center justify-center bg-white/95 text-sm text-primary font-medium rounded-full leading-loose">
              Early Access
              </div>
           </div>
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
            'fixed inset-0 bg-white/95 flex flex-col items-center top-48 justify-center transition-all duration-300 sm:hidden drop-shadow-md',
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
          <div className='w-full pb-5 pt-4 bg-white/95 flex items-center justify-center'>
          <Link to="#download" onClick={() => setIsMenuOpen(false)} className='rounded-full px-3 py-2 bg-primary'>
            Early Access
          </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;