import Providers from '@/app/providers';
import type { Metadata } from "next";
import localFont from 'next/font/local';
import Navbar from '@/components/navbar'
import "./globals.css";

const ultraStandard = localFont({
  src: [
    {
     path: './fonts/GT-Ultra-Standard-Light-Trial.woff2',
     weight: '200',
     style: 'light'
    },
    {
      path: './fonts/GT-Ultra-Standard-Regular-Trial.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/GT-Ultra-Standard-Bold-Trial.woff2',
      weight: '800',
      style: 'bold'
    }
  ]
});

const standard = localFont({
  src: [
    {
      path: './fonts/GT-Standard-S-Standard-Light-Trial.woff2',
      weight: '200',
      style: 'light'
    },
    {
      path: './fonts/GT-Standard-S-Standard-Regular-Trial.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/GT-Standard-S-Standard-Medium-Trial.woff2',
      weight: '500',
      style: 'medium'
    }
  ]
})




export const metadata: Metadata = {
  title: "Parapluie",
  description: "Handing Back Seniors' Online Peace of Mind."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <head>
      <meta name="apple-mobile-web-app-title" content="Parapluie" />
    </head>
    <html lang="en">
      <body
        className={`${standard} ${ultraStandard} antialiase`}
      >
        <Providers>
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  </>
  );
}
