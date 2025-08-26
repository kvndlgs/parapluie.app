"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
// import { Button } from "@/components/ui/button";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "ghost";
  size?: "default" | "lg";
  onClick: () => void;
}

const navItems: NavItem[] = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Features",
    href: "#features"
  },
  {
    label: "Subscriptions",
    href: "#subscriptions",
  },
  {
    label: "Blog",
    href: "/blog",
    dropdown: [
      { label: 'Articles', href: '/blog'},
      { label: "Latest Articles", href: "/blog/latest" },
      { label: "Most Read", href: "/blog/most-read" },
    ],
  },
  {
    label: "Early Access",
    href: "/early-access",
  },
];

interface DesktopDropdownProps {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const DesktopDropdown = ({
  item,
  isOpen,
  onToggle,
  onClose,
}: DesktopDropdownProps) => {
  return (
    <div className="relative">
      <button
        className="flex items-center space-x-1 px-3 py-2 text-sm text-accent-foreground-600 hover:text-accent-foreground/90 transition-colors rounded-md hover:bg-muted"
        onClick={onToggle}
        onMouseEnter={onToggle}
      >
        <span>{item.label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`absolute top-full left-0 mt-1 w-48 rounded-b-lg shadow-md transition-all duration-200 transform ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-1"
        } `}
        onMouseLeave={onClose}
      >
        <div className="py-2 bg-white">
          {item.dropdown?.map((dropdownItem) => (
            <a
              key={dropdownItem.label}
              href={dropdownItem.href}
              className="block px-4 py-2 rounded-b-l-md font-sans text-sm text-accent-foreground hover:text-accent-foreground/90 transition-all"
              onClick={onClose}
            >
              {dropdownItem.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

interface DesktopNavLinkProps {
  item: NavItem;
}

const DesktopNavLink = ({ item }: DesktopNavLinkProps) => {
  return (
    <a
      href={item.href}
      className="px-3 py-4 font-sans text-sm text-accent-foreground hover:text-accent-foreground/90 transition-all"
    >
      {item.label}
    </a>
  );
};

interface MobileDropdownProps {
  item: NavItem;
  index: number;
  activeDropdown: number | null;
  onToggle: (index: number) => void;
  onLinkClick: () => void;
}

const MobileDropdown = ({
  item,
  index,
  activeDropdown,
  onToggle,
  onLinkClick,
}: MobileDropdownProps) => {
  return (
    <div className="space-y-1">
      <button
        onClick={() => onToggle(index)}
        className="flex items-center justify-between w-full px-3 py-3 text-base text-accent-foreground hover:text-accent-foreground/90 transition-all"
      >
        <span className="font-sans"> {item.label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-200 ${
            activeDropdown === index ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          activeDropdown === index
            ? "max-h-48 opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-4 py-2 space-y-1">
          {item.dropdown?.map((dropdownItem) => (
            <a
              key={dropdownItem.label}
              href={dropdownItem.href}
              onClick={onLinkClick}
              className=" block px-3 py-2 font-sans text-sm text-accent-foreground hover:text-accent-foreground/90 transition-all"
            >
              {dropdownItem.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

interface MobileNavLinkProps {
  item: NavItem;
  onLinkClick: () => void;
}

const MobileNavLink = ({ item, onLinkClick }: MobileNavLinkProps) => {
  return (
    <a
      href={item.href}
      className="px-3 py-2 font-sans text-sm text-accent-foreground hover:text-accent-foreground/80 transition-all rounded-md hover:bg-slate-100"
    >
      {item.label}
    </a>
  );
};

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <a href="/" className={`flex items-center space-x-2 ${className}`}>
      <svg
        width="29"
        height="38"
        viewBox="0 0 29 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.0136 29.9107C17.2311 29.8579 17.4479 29.7922 17.6629 29.7133C17.7457 29.6828 17.8276 29.6505 17.9083 29.6168L18.5115 31.2574C18.5784 31.2192 18.6439 31.182 18.7098 31.1548C18.7671 31.1313 18.8326 31.1582 18.8568 31.2146L18.8589 31.2203L20.1249 34.6629L20.1339 34.6875L20.1351 34.6902L20.1366 34.6945L20.1396 34.7022L20.1538 34.7371L20.1685 34.7708C20.4781 35.4573 21.2712 35.7975 21.9895 35.5337C22.7409 35.2576 23.1262 34.4249 22.8501 33.6738C22.7538 33.4119 22.5902 33.1949 22.3863 33.0348C22.3682 33.0206 22.3498 33.007 22.3312 32.9938L22.3119 32.9802C22.3006 32.9724 22.2894 32.9649 22.2784 32.9578C22.2682 32.9512 22.2578 32.9446 22.2471 32.9381C22.2384 32.9328 22.2292 32.9273 22.2199 32.9219L22.2195 32.9217C22.2145 32.9188 22.2093 32.9158 22.202 32.9117L22.2004 32.9108L22.2 32.9106L22.1997 32.9103L22.1981 32.9094L22.1976 32.9092L22.1973 32.909L22.1967 32.9086L22.1964 32.9084L22.1933 32.9065L22.191 32.9052L22.1859 32.9017L22.1853 32.9016L22.1833 32.9001L22.183 32.9C21.9501 32.7426 21.794 32.5476 21.7428 32.3238C21.6908 32.0959 21.7587 31.8853 21.8812 31.7284C22.1014 31.4466 22.5337 31.2946 22.9179 31.462L22.9362 31.4703L22.9368 31.4706L22.9537 31.4786L22.954 31.4788L22.9544 31.4789L22.9569 31.4802L22.9583 31.481L22.9653 31.4845L22.9702 31.4868L22.9729 31.4883L22.9787 31.4916C23.5998 31.8359 24.1055 32.3967 24.3697 33.1153C24.9544 34.7055 24.1388 36.4683 22.5481 37.0527C20.9703 37.6324 19.2226 36.8353 18.6236 35.2706L18.6232 35.2696L17.3317 31.7574C17.309 31.6957 17.3437 31.628 17.4065 31.6099L17.4107 31.6087L17.415 31.6079C17.4929 31.595 17.5614 31.5834 17.6244 31.5718L17.0136 29.9107ZM22.7924 33.3809L22.7786 33.3585C22.7768 33.3558 22.7749 33.3531 22.7732 33.3504C22.7797 33.3604 22.7862 33.3706 22.7924 33.3809ZM17.4012 31.7275L17.4024 31.7315C17.4015 31.729 17.4008 31.7264 17.4004 31.7239C17.4006 31.7251 17.4008 31.7263 17.4012 31.7275Z"
          fill="#392D38"
        />
        <path
          d="M6.82856 0.202514C6.91305 0.171352 7.00735 0.210924 7.04435 0.293026L7.60222 1.53109L7.99389 1.67016C17.0627 3.72618 24.789 9.91717 28.102 18.9269C28.1883 19.1615 28.271 19.3966 28.3502 19.6322C28.402 19.7859 28.336 19.9542 28.1955 20.0354C25.1222 21.8127 22.4729 24.1108 20.3206 26.7717L19.727 27.5313C19.6795 27.5943 19.6323 27.6576 19.5854 27.7209C19.0454 28.4074 18.3145 28.9576 17.4343 29.281C16.5607 29.6019 15.6542 29.6574 14.8035 29.4885C14.703 29.4647 14.6023 29.4413 14.5016 29.4185L13.5878 29.2274C10.2259 28.5812 6.71856 28.5329 3.22428 29.1555C3.0647 29.1839 2.86933 28.9973 2.80949 28.8467C2.72401 28.6316 2.67778 28.5155 2.59744 28.297C-0.718409 19.2795 1.1637 9.55184 6.75289 2.11229L6.92611 1.76944L6.55152 0.474426C6.52653 0.388029 6.57261 0.297 6.657 0.265877L6.82856 0.202514Z"
          fill="#392D38"
        />
      </svg>
    </a>
  );
};

interface MobileMenuToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileMenuToggle = ({ isOpen, onToggle }: MobileMenuToggleProps) => {
  return (
    <button
      onClick={onToggle}
      className="lg:hidden p-2 rounded-md font-sans text-accent-foreground hover:text-accent-foreground/90  transition-all"
      aria-label="Toggle mobile menu"
      aria-expanded={isOpen}
    >
      <div className="relative w-6 h-6">
        <Menu
          className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
            isOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
        <X
          className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
            isOpen ? "rotate-0 opacity-100" : "rotate-180 opacity-0"
          }`}
        />
      </div>
    </button>
  );
};

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = "" }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<
    number | null
  >(null);

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest("nav")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const handleDropdownToggle = (index: number): void => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleDesktopDropdownToggle = (index: number): void => {
    setActiveDesktopDropdown(activeDesktopDropdown === index ? null : index);
  };

  const closeDesktopDropdown = (): void => {
    setActiveDesktopDropdown(null);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background backdrop-blur-md border-b border-accent-foreground/5"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* logo */}
            <Logo />

            {/* desktop navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <DesktopDropdown
                      item={item}
                      isOpen={activeDesktopDropdown === index}
                      onToggle={() => handleDesktopDropdownToggle(index)}
                      onClose={closeDesktopDropdown}
                    />
                  ) : (
                    <DesktopNavLink item={item} />
                  )}
                </div>
              ))}
            </div>

            {/* mobile burger button */}
            <MobileMenuToggle
              isOpen={isMobileMenuOpen}
              onToggle={toggleMobileMenu}
            />
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`lg:hidden fixed left-0 right-0 bg-white border-b border-accent-foreground shadow-lg transition-all duration-300 ease-out ${
            isMobileMenuOpen
              ? "top-16 opacity-100 visibile"
              : "top-12 opacity-0 invisible"
          }`}
        >
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navItems.map((item, index) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <MobileDropdown
                    item={item}
                    index={index}
                    activeDropdown={activeDropdown}
                    onToggle={handleDropdownToggle}
                    onLinkClick={closeMobileMenu}
                  />
                ) : (
                  <MobileNavLink item={item} onLinkClick={closeMobileMenu} />
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />
    </>
  );
}
