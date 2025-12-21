import ResponsiveNavBar from './ResponsiveNavbar';
import { Footer } from './Footer';
import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({children}: LayoutProps) {
    return (
        <>
            <ResponsiveNavBar />
            {children}
            <Footer />
        </>
    )
}