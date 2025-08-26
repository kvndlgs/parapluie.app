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
    href: "#features",
  },
  {
    label: "Subscriptions",
    href: "#subscriptions",
  },
  {
    label: "Blog",
    href: "/blog",
    dropdown: [
      { label: "Articles", href: "/blog" },
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
        <span className="font-watch font-medium text-primary">
          {item.label}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-primary transition-transform duration-200 ${
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
              className="block px-4 py-2 font-watch font-medium text-sm text-primary hover:text-crime-500 transition-all"
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
      className="px-3 py-4 font-watch font-medium text-sm text-primary hover:text-crime-500 transition-all"
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
        <span className="font-watch font-medium text-primary">
          {" "}
          {item.label}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-primary transition-transform duration-200 ${
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
              className=" block px-3 py-2 font-watch font-medium text-sm text-primary hover:text-crime-500 transition-all"
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
      className="px-3 py-2 font-watch font-medium text-sm text-primary hover:text-crime-500 transition-all rounded-md hover:bg-slate-100"
    >
      {item.label}
    </a>
  );
};

interface LogoProps {
  className?: string;
  fill?: string;
}


const Logo = ({ className, fill }: LogoProps) => {
  return (
    <a href="/" className={`flex items-center space-x-2`}>
      <svg
        width="35"
        height="48"
        viewBox="0 0 35 48"
        xmlns="http://www.w3.org/2000/svg"
        className={className ? className : ""}
      >
        <path
          d="M20.5015 38.5021C20.7789 38.4337 21.0552 38.3483 21.3294 38.2462C21.4352 38.2067 21.54 38.1646 21.6429 38.121L22.4134 40.2467C22.4989 40.1972 22.5829 40.1491 22.6671 40.114C22.7403 40.0835 22.8233 40.1185 22.8542 40.1916L22.8568 40.1988L24.4741 44.659L24.4924 44.7101L24.5295 44.7987C24.925 45.688 25.9379 46.1291 26.8551 45.7874C27.8146 45.4297 28.3059 44.3501 27.9532 43.3769C27.8303 43.0379 27.622 42.7565 27.3616 42.5491C27.3387 42.5309 27.3148 42.5141 27.2912 42.497L27.2674 42.4789C27.2529 42.4688 27.2377 42.4585 27.2236 42.4493C27.2107 42.4408 27.1974 42.4319 27.1839 42.4236C27.1728 42.4167 27.1604 42.4099 27.1486 42.4029C27.1425 42.3993 27.1356 42.3947 27.1265 42.3895L27.1238 42.3892L27.1197 42.3853L27.1117 42.3815L27.1061 42.3769L27.1029 42.3754C26.8055 42.1715 26.6056 41.9183 26.5403 41.6285C26.4738 41.3332 26.5596 41.0599 26.716 40.8567C26.9971 40.4916 27.5497 40.295 28.0402 40.5117L28.0638 40.5219L28.0866 40.5337L28.0898 40.5352L28.0918 40.5371L28.101 40.5405L28.103 40.5424L28.1074 40.5435L28.111 40.5462L28.1178 40.5504C28.9108 40.9964 29.5567 41.7227 29.8942 42.6534C30.6407 44.7134 29.5998 46.9976 27.5689 47.7549C25.5542 48.5059 23.3224 47.4732 22.5574 45.4462L20.9072 40.8944C20.8783 40.8146 20.9228 40.7264 21.003 40.7029L21.0081 40.7023L21.0128 40.7006C21.1123 40.6838 21.2009 40.669 21.2814 40.6539L20.5015 38.5021Z"
          fill={fill ? fill : "none"}
        />
        <path
          d="M7.49569 0.0135996C7.60349 -0.0265412 7.72428 0.0249808 7.77147 0.131238L8.48337 1.7346L8.98335 1.91487C20.5638 4.57849 30.4302 12.5995 34.6607 24.2721C34.7708 24.5758 34.8765 24.8802 34.9776 25.1852C35.0436 25.3842 34.9593 25.6024 34.7802 25.7078C30.8559 28.0102 27.4726 30.9882 24.7243 34.4355L23.9653 35.42C23.9049 35.5012 23.8447 35.5827 23.7849 35.6644C23.0955 36.5538 22.1621 37.2669 21.0382 37.6858C19.9227 38.1016 18.7652 38.1743 17.6789 37.9555C17.5506 37.9246 17.4221 37.8945 17.2934 37.8649L16.1268 37.6171C11.8339 36.78 7.35494 36.7167 2.89301 37.5233C2.68923 37.5601 2.43986 37.3188 2.36345 37.1237C2.25432 36.845 2.1947 36.6948 2.09218 36.4119C-2.14196 24.7294 0.261482 12.1263 7.39857 2.48796L7.62018 2.04392L7.14183 0.366443C7.10996 0.254668 7.16832 0.136629 7.27579 0.0961484L7.49569 0.0135996Z"
          fill={fill ? fill : "none"}
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
      className="lg:hidden p-2 rounded-md font-watch font-medium text-primary hover:text-crime-500  transition-all"
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
        className={`fixed top-0 left-0 bg-white/80 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background backdrop-blur-md"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* logo */}
             <Logo className="path:fill-pink-500" />
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
          className={`lg:hidden fixed left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-out ${
            isMobileMenuOpen
              ? "top-16 opacity-100 visibile"
              : "top-12 opacity-0 invisible"
          }`}
        >
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto bg-accent">
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
