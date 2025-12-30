import { useEffect, useMemo, useState } from "react";
import Logo  from './Logo';

type NavItem = {
  label: string;
  to?: string;     // route (ex: "/pour-les-aines")
  hash?: string;   // hash (ex: "#comment-ca-marche")
  children?: NavItem[];
};

function isValidItem(x: any): x is NavItem {
  return !!x && typeof x === "object" && typeof x.label === "string";
}

function joinPathAndHash(path: string, hash?: string) {
  if (!hash) return path;
  // force leading #
  const h = hash.startsWith("#") ? hash : `#${hash}`;
  return `${path}${h}`;
}

export default function Navbar() {
  /*
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Close dropdown / mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname, location.hash]);

  // If user lands on "/" with a hash, scroll to it once content is mounted
  useEffect(() => {
    if (!isHome) return;
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    // slight delay so Home sections render
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);

    return () => clearTimeout(t);
  }, [isHome, location.hash]);

  const nav = useMemo(() => {
    const homeSections: Record<string, string> = {
      "À propos": "#a-propos",
      "Comment ça marche ?": "#comment-ca-marche",
      "Abonnements": "#abonnements",
    };

    const makeDual = (pageLabel: string, pagePath: string, sectionHash?: string) => {
      // dropdown with "Section (Accueil)" + "Page"
      const children: NavItem[] = [];

      if (sectionHash) {
        children.push({
          label: "Section (accueil)",
          // on home -> just hash, off home -> "/#hash"
          hash: sectionHash,
        });
      }

      children.push({
        label: "Page complète",
        to: pagePath,
      });

      return {
        label: pageLabel,
        children,
      } satisfies NavItem;
    };

    const left: NavItem[] = [
      makeDual("Comment ça marche ?", "/comment-ca-marche", homeSections["Comment ça marche ?"]),
    ];

    const right: NavItem[] = [
      makeDual("Abonnements", "/abonnements", homeSections["Abonnements"]),
    ];

    return { left, right };
  }, []);

  const handleNavigate = (item: NavItem) => {
    // Parent dropdown should not navigate directly
    if (item.children?.length) return;

    // If item.to exists -> route navigation
    if (item.to) {
      navigate(item.to);
      return;
    }

    // Hash navigation (home sections)
    if (item.hash) {
      const hash = item.hash.startsWith("#") ? item.hash : `#${item.hash}`;

      if (isHome) {
        // just scroll
        const id = hash.replace("#", "");
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // fallback: update hash so effect can try again
          navigate(joinPathAndHash("/", hash));
        }
      } else {
        // redirect to home with hash
        navigate(joinPathAndHash("/", hash));
      }
    }
  };

  const DesktopDropdown = ({ item }: { item: NavItem }) => {
    const isOpen = openDropdown === item.label;
    const children = (item.children ?? []).filter(isValidItem);

    return (
      <div
        className="relative"
        onMouseEnter={() => setOpenDropdown(item.label)}
        onMouseLeave={() => setOpenDropdown(null)}
      >
        <button
          type="button"
          className="text-sm font-medium text-neutral-700 hover:text-neutral-900 transition"
          onClick={() => setOpenDropdown(isOpen ? null : item.label)}
        >
          {item.label}
        </button>

        {isOpen && children.length > 0 && (
          <div className="absolute left-0 mt-3 w-56 rounded-xl border border-neutral-200 bg-white shadow-lg overflow-hidden z-50">
            {children.map((child) => (
              <button
                key={`${item.label}-${child.label}`}
                type="button"
                onClick={() => handleNavigate(child)}
                className="w-full text-left px-4 py-3 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
              >
                {child.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  const MobileSection = ({ item }: { item: NavItem }) => {
    const hasChildren = !!item.children?.length;
    const [open, setOpen] = useState(false);

    if (!hasChildren) {
      return (
        <button
          type="button"
          className="w-full text-left px-4 py-3 rounded-lg text-neutral-800 hover:bg-neutral-50"
          onClick={() => handleNavigate(item)}
        >
          {item.label}
        </button>
      );
    }

    return (
      <div className="px-2">
        <button
          type="button"
          className="w-full text-left px-2 py-3 rounded-lg text-neutral-900 font-medium flex items-center justify-between hover:bg-neutral-50"
          onClick={() => setOpen((v) => !v)}
        >
          {item.label}
          <span className="text-neutral-400">{open ? "–" : "+"}</span>
        </button>
        {open && (
          <div className="pl-2 pb-2">
            {(item.children ?? [])
              .filter(isValidItem)
              .map((child) => (
                <button
                  key={`${item.label}-${child.label}`}
                  type="button"
                  className="w-full text-left px-3 py-2 rounded-lg text-neutral-700 hover:bg-neutral-50"
                  onClick={() => handleNavigate(child)}
                >
                  {child.label}
                </button>
              ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-6xl px-4">
        {/* Desktop
        <div className="hidden md:grid grid-cols-3 items-center h-16">
          {/* 
          <nav className="flex items-center gap-6">
            {nav.left.filter(isValidItem).map((item) => (
              <DesktopDropdown key={item.label} item={item} />
            ))}
          </nav>

          {/* Center logo
          <div className="flex justify-center">
            <a href="/" className="flex items-center gap-2">
              {/* Remplace par ton logo svg si tu veux 
              <Logo variant="full" />
              <div className="leading-tight">
                
                <div className="text-xs text-neutral-500">Protection anti-arnaques</div>
              </div>
            </a>
          </div>

          {/* Right 
          <nav className="flex items-center justify-end gap-6">
            {nav.right.filter(isValidItem).map((item) => (
              <DesktopDropdown key={item.label} item={item} />
            ))}
          </nav>
        </div>

        {/* Mobile 
        <div className="md:hidden flex items-center justify-between h-14">
          <a href="/" className="flex items-center gap-2">
            <Logo variant="icon" />
            
          </a>

          <button
            type="button"
            className="px-3 py-2 rounded-lg border border-neutral-200 text-neutral-700"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? "Fermer" : "Menu"}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4">
            <div className="mt-2 rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
              {[...nav.left, ...nav.right].filter(isValidItem).map((item) => (
                <MobileSection key={item.label} item={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

*/

}