import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, Menu, X } from "lucide-react";
import { contactEmailUrl } from "../../data/site";

const navItems = [
  { name: "Home", to: "/" },
  { name: "Our hub", to: "/#who-we-are" },
  { name: "Cohorts", to: "/#blockchain-courses" },
  { name: "Events", to: "/events" },
  { name: "Community", to: "/#join-network" },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onOutside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1050px)");
    const onDesktop = () => {
      if (desktop.matches) setIsOpen(false);
    };
    document.addEventListener("keydown", onEscape);
    document.addEventListener("pointerdown", onOutside);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.removeEventListener("keydown", onEscape);
      document.removeEventListener("pointerdown", onOutside);
      desktop.removeEventListener("change", onDesktop);
    };
  }, [isOpen]);
  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-container header-inner">
        <Link
          className="brand"
          to="/"
          aria-label="The BlockCapitol home"
          onClick={() => setIsOpen(false)}
        >
          <img src="/main-logo.png" alt="" width="42" height="46" />
          <span>
            <span className="brand-small">The</span>
            <span>
              Block<span className="brand-accent">Capitol</span>
            </span>
          </span>
        </Link>
        <nav
          className={isOpen ? "main-nav is-open" : "main-nav"}
          id="main-navigation"
          aria-label="Main navigation"
        >
          {navItems.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              aria-current={
                `${pathname}${hash}` === to ||
                (pathname === "/events" && to === "/events")
                  ? "page"
                  : undefined
              }
              onClick={() => {
                setIsOpen(false);
                if (`${pathname}${hash}` === to) {
                  if (hash)
                    document.getElementById(hash.slice(1))?.scrollIntoView();
                  else window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            >
              {name}
            </Link>
          ))}
          <a
            className="button button-primary mobile-community-link"
            href={contactEmailUrl}
          >
            Email our team <Mail size={17} aria-hidden="true" />
          </a>
        </nav>
        <a className="button button-primary header-cta" href={contactEmailUrl}>
          Email our team <Mail size={17} aria-hidden="true" />
        </a>
        <button
          className="menu-toggle"
          type="button"
          ref={toggleRef}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          aria-controls="main-navigation"
        >
          {isOpen ? (
            <X size={23} aria-hidden="true" />
          ) : (
            <Menu size={23} aria-hidden="true" />
          )}
        </button>
      </div>
    </header>
  );
}
