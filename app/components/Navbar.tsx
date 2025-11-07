"use client";
import Logo from "./Logo";
import { useState } from "react";

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const MobileLink = ({ href, children }: LinkProps) => (
  <a
    href={href}
    className="flex items-center py-3 px-6 w-full hover:text-primary-300 text-poop-500 font-monument font-normal border-b-1 border-poop-100"
  >
    {children}
  </a>
);

const Link = ({ href, children }: LinkProps) => (
  <a
    href={href}
    className="hover:text-primary-300 md:px-4 transition-opacity text-poop-500 font-monument font-normal text-md"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-auto py-2 flex items-center justify-center">
      <div className="md:max-w-7xl w-full flex items-center justify-center md:px-0 px-8 xs:ml-0 sm:-ml-10 md:-ml-24">
        <div className="w-full flex justify-between items-center h-auto">
          <div className="md:hidden">
            <Logo />
          </div>
          {/* Desktop Menu */}
          <div className="hidden mx-auto md:flex md:justify-between md:gap-12 py-2.5 h-auto items-center text-sm font-monument">
            <Link href="#about">À propos</Link>
            <Link href="#howitworks">Comment ça marche ?</Link>
            <a href="/" className="w-[76px]">
              {" "}
              <Logo />
            </a>
            <Link href="#subscriptions">Abonnements</Link>
            <Link href="/blog">Blog</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden cursor-pointer color-poop-purple-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-5 h-5"
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
          <div className="absolute h-auto top-24 bg-white w-full md:hidden border-t z-50 border-b-2 border-poop-100 drop-shadow-md">
            <div className="flex flex-col">
              <MobileLink href="#">À propos</MobileLink>
              <MobileLink href="#">Comment ça marche ?</MobileLink>
              <MobileLink href="#">Abonnements</MobileLink>
              <MobileLink href="#">Blog</MobileLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
