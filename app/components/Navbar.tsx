"use client";
import Logo from "./Logo";

import { useState } from "react";
import Wordmark from "./wordmark";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-auto py-5 flex items-center justify-center">
      <div className="max-w-7xl flex items-center justify-between -ml-30">
        <div className="flex justify-between items-center h-auto">
          <div className="md:hidden">
            <Logo />
          </div>
          {/* Desktop Menu */}
          <div className="hidden mx-auto md:flex md:justify-between md:gap-12 py-6 h-auto items-center font-monument">
            <a
              href="#"
              className="hover:opacity-70 transition-opacity text-[hsl(300, 15%, 44%)] font-monument"
            >
              À propos
            </a>
            <a
              href="#"
              className="hover:opacity-70 transition-opacity  text-[hsl(300, 15%, 44%)] font-monument"
            >
              Comment ça marche ?
            </a>
            <a href="/">
              {" "}
              <Logo />
            </a>
            <a
              href="#"
              className="hover:opacity-70 transition-opacity  text-[hsl(300, 15%, 44%)]"
            >
              Abonnements
            </a>
            <a
              href="#"
              className="hover:opacity-70 transition-opacity  text-[hsl(300, 15%, 44%)] font-monument"
            >
              Blog
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col gap-4">
              <a
                href="#"
                className="hover:underline  text-[hsl(300, 15%, 44%)] font-monument"
              >
                À propos
              </a>
              <a
                href="#"
                className="hover:underline  text-[hsl(300, 15%, 44%)] font-monument"
              >
                Comment ça marche ?
              </a>
              <a
                href="#"
                className="hover:underline  text-[hsl(300, 15%, 44%)] font-monument"
              >
                Abonnements
              </a>
              <a
                href="#"
                className="hover:underline  text-[hsl(300, 15%, 44%)] font-monument"
              >
                Blog
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
