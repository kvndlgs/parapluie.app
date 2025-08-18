
import Navbar from '@/components/navbar';
import type { Metadata } from "next";
import {  Gantari } from "next/font/google";
import "./globals.css";


const GantariSans = Gantari({
  variable: "--font-gantari-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Parapluie | Peace of mind for Seniors.",
  description: "Peace of mind for Seniors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GantariSans.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
