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
    className="flex items-center py-4 px-6 w-full hover:text-poop-500 text-poop-800 font-monument border-b-1 border-poop-100"
  >
    {children}
  </a>
);

const Link = ({ href, children }: LinkProps) => (
  <a
    href={href}
    className="hover:text-poop-500 md:px-4 transition-opacity text-poop-800 font-monument text-base"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-auto py-4 md:py-2 flex items-center justify-center">
      <div className="md:max-w-7xl w-full flex items-center justify-center md:px-0 px-8 xs:ml-0 sm:-ml-10 md:-ml-24">
        <div className="w-full flex justify-between items-center h-auto">
          <div className="md:hidden">
            <svg
              width="40"
              height="auto"
              viewBox="0 0 240 249"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M139.924 249C133.432 249 124.88 247.038 121.047 237.685C121.047 237.66 107.101 210.182 107.083 210.144C106.843 209.677 106.64 209.274 106.432 208.939L106.476 208.958C51.0244 72.8966 122.543 43.7594 21.3911 106.341C19.8374 107.287 16.7175 108.877 13.3386 108.877C7.69866 108.877 3.80818 104.336 1.77453 95.3864C-11.179 46.0614 49.9886 33.8263 81.2576 18.7153C114.226 8.89572 173.669 -13.1653 210.111 10.7436C222.312 18.8667 230.674 30.8432 234.957 46.3389C250.518 102.614 230.327 152.336 170.77 157.079C166.027 157.306 157.482 156.808 155.151 146.307C155.177 146.225 147.667 118.974 146 112.774L146.031 112.755C142.558 100.564 137.082 64.3572 158.562 63.0643C164.404 63.1589 169.166 66.3186 171.642 71.755C175.21 79.5439 173.524 90.0635 167.442 97.9343C160.621 105.893 174.162 116.508 180.294 108.044C198.401 88.9724 190.128 46.9695 160.065 47.4867C149.189 47.3858 140.265 50.9617 134.455 58.1199C111.194 86.6957 142.223 165.77 158.726 196.875C166.084 211.241 173.719 225.986 171.907 230.773C169.28 240.17 153.737 248.993 139.93 249.006L139.924 249Z"
                fill="#4f3b4fff"
              />
            </svg>
          </div>
          {/* Desktop Menu */}
          <div className="hidden mx-auto md:flex md:justify-between md:gap-12 py-2.5 h-auto text-poop-700 items-center text-sm font-monument">
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
            className="md:hidden cursor-pointer color-poop-800"
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
          <div className="absolute h-auto top-24 bg-white w-full md:hidden border-t z-50 border-b-2 border-poop-50 drop-shadow-md">
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
