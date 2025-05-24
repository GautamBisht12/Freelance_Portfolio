import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Navbar = ({ scrollY }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Skills", to: "skills" },
    { name: "Experience", to: "experience" },
    { name: "Certificates", to: "certificates" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-4 left-0 right-0 z-50 mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-2 rounded-full ${
        scrollY > 20 ? "glass shadow-lg " : "bg-transparent"
      } transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-xl md:text-2xl font-bold cursor-pointer"
        >
          <span className="text-light-primary dark:text-dark-primary">
            BiSHT
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="nav-link"
              activeClass="text-light-primary dark:text-dark-primary"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Theme Switcher */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => toggleTheme("light")}
            className={`p-2 rounded-full transition-colors ${
              theme === "light"
                ? "bg-light-primary/20 text-light-primary"
                : "text-light-foreground/70 dark:text-dark-foreground/70 hover:text-light-primary dark:hover:text-dark-primary"
            }`}
            aria-label="Light Theme"
          >
            <FaSun className="text-lg" />
          </button>

          <button
            onClick={() => toggleTheme("dark")}
            className={`p-2 rounded-full transition-colors ${
              theme === "dark"
                ? "bg-dark-primary/20 text-dark-primary"
                : "text-light-foreground/70 dark:text-dark-foreground/70 hover:text-light-primary dark:hover:text-dark-primary"
            }`}
            aria-label="Dark Theme"
          >
            <FaMoon className="text-lg" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-2 p-2 rounded-md md:hidden"
            aria-label="Toggle Menu"
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span
                className={`block h-0.5 bg-current rounded transition-all duration-300 ${
                  isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-current rounded transition-all duration-300 ${
                  isOpen ? "opacity-0" : "w-4"
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-current rounded transition-all duration-300 ${
                  isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden mt-4 py-4 px-2 glass rounded-xl shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="nav-link px-4 py-3 hover:bg-light-foreground/5 dark:hover:bg-dark-foreground/5 rounded-md"
                activeClass="text-light-primary dark:text-dark-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
