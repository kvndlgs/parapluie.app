import React from "react";
import "@/index.css";
import  ResponsiveNavbar from '@/components/ResponsiveNavbar';
import Footer from '@/components/Footer';
import { usePageContext } from 'vike-react/usePageContext';


type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout({children}): LayoutProps {
  const { isHydrating } = usePageContext();
  return (
    <>
      {/* GTM Noscript - Placé au début du body */}
      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-W6LH2F5W" 
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      <ResponsiveNavbar/>
      <main className="py-8 md:py-24">
        { children }
      </main>
      {!isHydrating && <Footer />}  {/* Only render Footer after hydration */}
      {/* Or just accept double footer temporarily and fix later */}
    </>
  )
}
