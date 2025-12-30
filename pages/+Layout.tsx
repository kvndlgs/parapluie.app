import React from "react";
import "../src/index.css";
import  ResponsiveNavbar from '../src/components/ResponsiveNavbar';
import Footer from '../src/components/Footer';

type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout({children}): LayoutProps {
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
      <main>
        { children }
      </main>
      <Footer />
    </>
  )
}
