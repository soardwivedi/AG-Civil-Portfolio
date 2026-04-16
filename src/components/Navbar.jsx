import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiTriangle } from "react-icons/fi";
import { MdConstruction } from "react-icons/md";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d14]/95 backdrop-blur-md shadow-2xl shadow-black/50 border-b border-[#ff6a00]/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.button
          onClick={() => handleNavClick("#home")}
          className="flex items-center gap-3 group"
          whileHover={{ scale: 1.02 }}
        >
          {/* Geometric Icon */}
          <div className="relative w-10 h-10 flex-shrink-0">
            <div className="absolute inset-0 bg-[#ff6a00] transform rotate-45 group-hover:rotate-[55deg] transition-transform duration-300" />
            <div className="absolute inset-1 bg-[#0d0d14] transform rotate-45" />
            <div className="absolute inset-0 flex items-center justify-center">
              <MdConstruction className="text-[#ff6a00] text-lg z-10" />
            </div>
          </div>
          {/* Text Logo */}
          <div className="flex flex-col leading-none">
            <span className="font-heading font-black text-xl tracking-wider text-white">
              Aggarwal Engineering
            </span>
            <span className="font-heading text-xs tracking-[0.3em] text-gray-400 uppercase">
              Consultancy & Construction
            </span>
          </div>
        </motion.button>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`relative font-sans font-medium text-sm uppercase tracking-wider transition-colors duration-200 group ${
                activeLink === link.href
                  ? "text-[#ff6a00]"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#ff6a00] transition-all duration-300 ${
                  activeLink === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <motion.button
            onClick={() => handleNavClick("#contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#ff6a00] text-white font-heading font-bold text-sm uppercase tracking-widest py-3 px-6 
                       hover:bg-[#e65c00] transition-colors duration-200 border-2 border-[#ff6a00]
                       hover:shadow-lg hover:shadow-[#ff6a00]/30"
          >
            Get Consultation
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white text-2xl p-2 hover:text-[#ff6a00] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0d0d14]/98 backdrop-blur-md border-t border-[#ff6a00]/20 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left font-heading font-bold text-xl uppercase tracking-wider py-2 border-b border-white/10 transition-colors ${
                    activeLink === link.href
                      ? "text-[#ff6a00]"
                      : "text-gray-300"
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
                onClick={() => handleNavClick("#contact")}
                className="bg-[#ff6a00] text-white font-heading font-black uppercase tracking-widest py-3 px-6 mt-2 hover:bg-[#e65c00] transition-colors"
              >
                Get Consultation
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
