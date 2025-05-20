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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 lg:px-12',
        {
          'bg-transparent': !scrolled && !isMenuOpen,
          'bg-white/90 backdrop-blur-md shadow-sm': scrolled || isMenuOpen,
        }
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Features', 'Subscriptions', 'Get In Touch'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                'text-primary font-medium',
                {
                  'text-primary': !scrolled,
                }
              )}
            >
              {item}
            </a>
          ))}
          {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
          <button className='text-primary border-2 border-primary py-1.5 px-3 rounded-full'>Early Access</button>
        </nav>

        {/* Mobile Navigation Toggle */}
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          className="md:hidden p-2 z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X
              className={cn('h-6 w-6', {
                'text-foreground': scrolled,
                'text-white': !scrolled,
              })}
            />
          ) : (
            <Menu
              className={cn('h-6 w-6', {
                'text-foreground': scrolled,
                'text-white': !scrolled,
              })}
            />
          )}
        </button>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            'fixed inset-0 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden',
            {
              'opacity-100 visible': isMenuOpen,
              'opacity-0 invisible': !isMenuOpen,
            }
          )}
        >
          {['Features', 'Subscriptions', 'Get In Touch'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xl font-medium text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <Button size="lg" className="mt-4" onClick={() => setIsMenuOpen(false)}>
            Early Access
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;