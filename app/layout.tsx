import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parapluie",
  description: "Protection contre les arnaques",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <meta name="apple-mobile-web-app-title" content="Parapluie" />
      </head>
      <body>{children}</body>
    </html>
  );
}
