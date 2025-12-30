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
      <ResponsiveNavbar/>
      <main>
        { children }
      </main>
      <Footer />
    </>
  )
}
