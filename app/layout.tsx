import Providers from "@/app/providers";
import type { Metadata, Viewport } from "next";
import type { WebSite, WithContext } from "schema-dts";
import { SITE_INFO } from "@/config/site";
import localFont from "next/font/local";
import Navbar from "@/components/navbar";
import "./globals.css";


const rightSerif = localFont({
  src: [
    {
      path: "./fonts/PP Right Serif - Wide Medium.otf",
      weight: "600",
      style: "medium",
    },
    {
      path: "./fonts/PP Right Serif - Wide Black.otf",
      weight: "900",
      style: "black",
    },
  ],
  variable: '--font-right-serif'
});

const watchSans = localFont({
  src: [
    {
      path: "./fonts/PPWatch-Extralight.otf",
      weight: "200",
      style: "ultra-light",
    },
    {
      path: "./fonts/PPWatch-Medium.otf",
      weight: "600",
      style: "medium",
    },
    {
      path: "./fonts/PPWatch-Bold.otf",
      weight: "800",
      style: "bold",
    },
  ],
  variable: '--font-watch'
});

function getWebSiteJsonLd(): WithContext<WebSite> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
  };
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: "/",
  },
  title: {
    template: `%s - ${SITE_INFO.name}`,
    default: SITE_INFO.name,
  },
  description: SITE_INFO.description,
  keywords: SITE_INFO.keywords,
  authors: [
    {
      name: "Kevin Desloges",
      url: "kvds.space",
    },
  ],
  creator: "Kevin Desloges",
  openGraph: {
    siteName: SITE_INFO.name,
    url: "/",
    type: "website",
    images: [
      {
        url: SITE_INFO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@daiilyAI",
    images: [SITE_INFO.ogImage],
  },
  icons: {
    icon: [
      {
        url: "/app/favicon.ico",
        sizes: "any",
      },
      {
        url: "/app/icon0.svg",
        type: "image/svg+xml",
      },
    ],
    apple: {
      url: "/app/apple-icon.png",
      type: "image/png",
      sizes: "180x180",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "",
};

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white">
      <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
      <p className="text-lg text-gray-600">We're working hard to bring you something amazing. Stay tuned!</p>
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <meta name="apple-mobile-web-app-title" content="Parapluie" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getWebSiteJsonLd()).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <html lang="en">
        <body className={`bg-crime-50/90 py-2 px-3.5 md:py-[22px] md:px-[44px] ${watchSans.variable} ${rightSerif.variable} antialiase`}>
          <Providers>
{/*
            <Navbar />
            {children}
  */     }      <ComingSoon />
          </Providers>
        </body>
      </html>
    </>
  );
}
