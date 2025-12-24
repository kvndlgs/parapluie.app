import ResponsiveNavBar from './ResponsiveNavbar';
// import Navbar from "./Navbar";
import { Footer } from './Footer';
import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({children}: LayoutProps) {
    return (
        <>
            <ResponsiveNavBar />
            <main className="min-h-screen w-full py-12">
            {children}
            </main>
            <Footer />
        </>
    )
}