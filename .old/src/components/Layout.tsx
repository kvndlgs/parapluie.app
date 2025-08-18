import React, { FC, useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {
  const [scrolled, setScrolled ] = useState(false);

  useEffect(() => {
  
      const handleScroll = () => {
        const isScrolled = window.scrollY > 10;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      };
  
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrolled]);


 return (
    <div className="min-h-screen bg-background">

    <Navbar scrolled={scrolled} />
     {children}
    <Footer />
  </div>
 )
}

export default Layout;