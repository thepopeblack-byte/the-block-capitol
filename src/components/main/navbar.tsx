import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems: { name: string; sectionId?: string; link?: string }[] = [
  { name: "Home", sectionId: "hero" },
  { name: "About", sectionId: "who-we-are" },
  { name: "Programmes", sectionId: "blockchain-courses" },
  { name: "Events", link: "/events" },
  { name: "Community", sectionId: "join-network" },
  // { name: "Blog", link: "/blog" },
  { name: "Contact", sectionId: "footer" },
];

const Navbar = () => {
  const { pathname, hash } = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
    if (pathname === "/" && hash) {
      const frame = requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [pathname, hash]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle smooth scrolling for section navigation
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav
      aria-label="Main navigation"
      className={`flex justify-between items-center py-4 px-6 md:px-12 lg:px-24 fixed top-0 left-0 right-0 z-20 transition-all ${pathname !== "/" || isSticky ? "bg-white/95 backdrop-blur-sm" : "bg-transparent"
        }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/" aria-label="The BlockCapitol home"><img src="/main-logo.png" alt="The BlockCapitol" width={50} height={50} /></Link>
      </motion.div>
      <motion.ul
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:flex space-x-6 text-secondary font-medium"
      >
        {navItems.map(({ name, sectionId, link }) => (
          <li key={name} className="relative group cursor-pointer">
            {sectionId ? (
              <Link
                to={`/#${sectionId}`}
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    handleScroll(sectionId);
                  }
                }}
                className="hover:text-red-800 transition-colors duration-300"
              >
                {name}
              </Link>
            ) : (
              <Link
                to={link!}
                aria-current={pathname === link ? "page" : undefined}
                className="hover:text-red-800 transition-colors duration-300"
              >
                {name}
              </Link>
            )}
            <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </li>
        ))}
      </motion.ul>
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="hidden lg:block bg-secondary hover:bg-red-700 text-white px-4 py-2 rounded"
      >
        Join Cohort
      </motion.button>
      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-dark" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} aria-controls="mobile-navigation">
          {isOpen ? <X /> : <Menu size={20} />}
        </button>
      </div>
      {isOpen && (
        <motion.ul
          id="mobile-navigation"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-20 left-0 right-0 flex flex-col items-center space-y-4 p-4 text-secondary text-left font-medium lg:hidden h-[calc(100dvh-80px)] overflow-y-auto bg-white"
        >
          {navItems.map(({ name, sectionId, link }) => (
            <li key={name} className="relative group cursor-pointer px-3">
              {sectionId ? (
                <Link
                  to={`/#${sectionId}`}
                  onClick={(e) => {
                    if (pathname === "/") {
                      e.preventDefault();
                      handleScroll(sectionId);
                    }
                  }}
                  className="hover:text-red-800 transition-colors duration-300"
                >
                  {name}
                </Link>
              ) : (
                <Link
                  to={link!}
                  aria-current={pathname === link ? "page" : undefined}
                  className="hover:text-red-800 transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  {name}
                </Link>
              )}
              <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-red-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </li>
          ))}
          <button className="bg-secondary hover:bg-red-700 text-white px-4 py-3 rounded">
            Join Cohort
          </button>
        </motion.ul>
      )}
    </nav>
  );
};

export default Navbar;
