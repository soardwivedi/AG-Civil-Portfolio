import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiArrowUp,
} from "react-icons/fi";
import { MdConstruction } from "react-icons/md";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Project Estimation",
  "BOQ Preparation",
  "Billing & Measurement",
  "Tender Documentation",
  "AutoCAD Drawings",
  "WTP / STP Consultancy",
];

export default function Footer() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#0a0a12] border-t border-white/10 overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,106,0,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,106,0,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orange accent line */}
      <div className="h-1 bg-[#ff6a00] w-full" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-3 mb-4 group"
            >
              <div className="relative w-10 h-10 flex-shrink-0">
                <div className="absolute inset-0 bg-[#ff6a00] transform rotate-45 group-hover:rotate-[55deg] transition-transform duration-300" />
                <div className="absolute inset-1 bg-[#0a0a12] transform rotate-45" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <MdConstruction className="text-[#ff6a00] text-lg z-10" />
                </div>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-black text-xl tracking-wider text-white">
                  Aggarwal Engineering
                </span>
                <span className="font-heading text-xs tracking-[0.3em] text-gray-400 uppercase">
                  Consultancy & Construction
                </span>
              </div>
            </button>
            <p className="text-gray-500 text-sm leading-relaxed font-sans mb-6">
              Professional Civil Engineering Consultancy specializing in
              infrastructure projects, STP/WTP, and EPC project execution across
              India.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#13131f] border border-white/10 flex items-center justify-center
                           text-gray-400 hover:bg-[#0077B5] hover:text-white hover:border-[#0077B5] 
                           transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://wa.me/919813584799"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#13131f] border border-white/10 flex items-center justify-center
                           text-gray-400 hover:bg-[#25D366] hover:text-white hover:border-[#25D366] 
                           transition-all duration-200"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="mailto:abhigarg15071999@gmail.com"
                className="w-10 h-10 bg-[#13131f] border border-white/10 flex items-center justify-center
                           text-gray-400 hover:bg-[#ff6a00] hover:text-white hover:border-[#ff6a00] 
                           transition-all duration-200"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-black text-lg uppercase tracking-wider text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#ff6a00]" />
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-gray-500 hover:text-[#ff6a00] text-sm font-sans transition-colors duration-200
                               flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-[#ff6a00] group-hover:w-4 transition-all duration-200" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-black text-lg uppercase tracking-wider text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#ff6a00]" />
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNavClick("#services")}
                    className="text-gray-500 hover:text-[#ff6a00] text-sm font-sans transition-colors duration-200
                               flex items-center gap-2 group text-left"
                  >
                    <span className="w-0 h-0.5 bg-[#ff6a00] group-hover:w-4 transition-all duration-200 flex-shrink-0" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-black text-lg uppercase tracking-wider text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-[#ff6a00]" />
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:abhigarg15071999@gmail.com"
                className="flex items-start gap-3 text-gray-500 hover:text-[#ff6a00] transition-colors group"
              >
                <FiMail className="mt-0.5 flex-shrink-0 group-hover:text-[#ff6a00]" />
                <span className="text-sm font-sans break-all">
                  abhigarg15071999@gmail.com
                </span>
              </a>
              <a
                href="tel:+919813584799"
                className="flex items-center gap-3 text-gray-500 hover:text-[#ff6a00] transition-colors group"
              >
                <FiPhone className="flex-shrink-0 group-hover:text-[#ff6a00]" />
                <span className="text-sm font-sans">+91 9813584799</span>
              </a>
              <div className="flex items-start gap-3 text-gray-500">
                <FiMapPin className="mt-0.5 flex-shrink-0" />
                <span className="text-sm font-sans">Jind, Haryana, India</span>
              </div>
            </div>

            {/* Download Resume */}
            <a
              href="/resume.pdf"
              download
              className="mt-6 inline-flex items-center gap-2 border border-[#ff6a00]/40 text-[#ff6a00] 
                         text-sm font-heading font-bold uppercase tracking-widest py-2 px-4
                         hover:bg-[#ff6a00] hover:text-white transition-all duration-200"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm font-sans text-center sm:text-left">
            © 2026{" "}
            <span className="text-[#ff6a00] font-bold">
              Aggarwal Engineering Consultancy & Construction
            </span>
            . All Rights Reserved.
          </p>
          <p className="text-gray-700 text-xs font-sans">
            Designed by{" "}
            <span className="text-gray-600">
              {" "}
              Aggarwal Engineering Consultancy & Construction
            </span>
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, backgroundColor: "#e65c00" }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 w-12 h-12 bg-[#ff6a00]/80 text-white flex items-center justify-center
                   shadow-lg shadow-[#ff6a00]/30 z-40 hover:bg-[#ff6a00] transition-colors"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="text-lg" />
      </motion.button>
    </footer>
  );
}
