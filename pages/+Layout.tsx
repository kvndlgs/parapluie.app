import React from "react";
import "@/index.css";
import ResponsiveNavbar from "@/components/ResponsiveNavbar";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* GTM Noscript - Placé au début du body */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-W6LH2F5W"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      <ResponsiveNavbar />
      <main className="py-8 md:py-24">{children}</main>
      <Footer />
    </>
  );
}
