import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import { MdEngineering, MdConstruction, MdWater } from "react-icons/md";
import { GiWaterTower, GiBrickWall, GiFactory } from "react-icons/gi";

const floatingShapes = [
  { size: 60, top: "15%", left: "5%", delay: 0, opacity: 0.15 },
  { size: 40, top: "70%", left: "3%", delay: 1, opacity: 0.1 },
  { size: 80, top: "30%", right: "8%", delay: 0.5, opacity: 0.12 },
  { size: 50, top: "75%", right: "5%", delay: 1.5, opacity: 0.08 },
  { size: 30, top: "50%", left: "50%", delay: 2, opacity: 0.07 },
];

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0d0d14]"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,106,0,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,106,0,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Diagonal orange accent bar */}
      <div
        className="absolute top-0 left-0 w-2 h-full bg-[#ff6a00]"
        style={{ clipPath: "polygon(0 0, 100% 5%, 100% 95%, 0 100%)" }}
      />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-heading font-black text-[12vw] uppercase text-white/[0.02] select-none whitespace-nowrap">
          CIVIL ENGINEERING
        </span>
      </div>

      {/* Floating Geometric Shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="absolute border-2 border-[#ff6a00]"
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            left: shape.left,
            right: shape.right,
            opacity: shape.opacity,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 45, 90, 135, 180],
          }}
          transition={{
            duration: 6 + i,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Glowing orange circle */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#ff6a00]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#ff6a00]/8 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#ff6a00]/10 border border-[#ff6a00]/30 
                         text-[#ff6a00] text-xs font-bold uppercase tracking-widest py-2 px-4 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff6a00] animate-pulse" />
              Civil Engineering Consultancy
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-heading font-black text-5xl md:text-6xl lg:text-7xl uppercase leading-none mb-6"
            >
              Professional{" "}
              <span className="text-[#ff6a00] relative">
                Civil
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute -bottom-1 left-0 right-0 h-1 bg-[#ff6a00] origin-left"
                />
              </span>
              <br />
              Engineering
              <br />
              <span className="text-gray-400">Consultancy</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-lg font-sans"
            >
              Providing expert services in estimation, project execution, tender
              documentation, and infrastructure consultancy.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(255,106,0,0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll("#contact")}
                className="bg-[#ff6a00] text-white font-heading font-black text-sm uppercase 
                           tracking-widest py-4 px-8 border-2 border-[#ff6a00] 
                           hover:bg-[#e65c00] transition-all duration-200
                           flex items-center gap-3"
              >
                Get Consultation
                <FiArrowRight className="text-lg" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleScroll("#projects")}
                className="border-2 border-white/40 text-white font-heading font-black text-sm 
                           uppercase tracking-widest py-4 px-8 hover:border-[#ff6a00] 
                           hover:text-[#ff6a00] transition-all duration-200
                           flex items-center gap-3"
              >
                View Projects
                <FiPlay className="text-lg" />
              </motion.button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex flex-wrap gap-8"
            >
              {[
                { value: "5+", label: "Years Experience" },
                { value: "200+ Cr", label: "Project Value" },
                { value: "4", label: "Major Projects" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-heading font-black text-3xl text-[#ff6a00]">
                    {stat.value}
                  </span>
                  <span className="text-gray-400 text-xs uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side – Visual Panel */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            {/* Main card */}
            <div className="relative bg-[#13131f] border border-[#ff6a00]/20 p-8 overflow-hidden">
              {/* Orange corner accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 bg-[#ff6a00] opacity-80"
                style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }}
              />

              {/* Infrastructure illustration */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4 p-4 bg-[#1a1a2e] border-l-4 border-[#ff6a00]">
                  <GiWaterTower className="text-[#ff6a00] text-4xl flex-shrink-0" />
                  <div>
                    <div className="font-heading font-bold text-white text-lg">
                      300 MLD Water Treatment Plant
                    </div>
                    <div className="text-gray-400 text-sm">
                      Ahmedabad, Gujarat
                    </div>
                    <div className="text-[#ff6a00] text-sm font-bold mt-1">
                      ₹ 206 Crore
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#1a1a2e] border-l-4 border-[#ff6a00]/60">
                  <GiFactory className="text-[#ff6a00]/80 text-4xl flex-shrink-0" />
                  <div>
                    <div className="font-heading font-bold text-white text-lg">
                      65 MLD Sewage Treatment Plant
                    </div>
                    <div className="text-gray-400 text-sm">
                      Gandhinagar, Gujarat
                    </div>
                    <div className="text-[#ff6a00] text-sm font-bold mt-1">
                      ₹ 95 Crore
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#1a1a2e] border-l-4 border-[#ff6a00]/40">
                  <MdEngineering className="text-[#ff6a00]/60 text-4xl flex-shrink-0" />
                  <div>
                    <div className="font-heading font-bold text-white text-lg">
                      3500 TCD Sugar Plant
                    </div>
                    <div className="text-gray-400 text-sm">Karnal, Haryana</div>
                    <div className="text-[#ff6a00] text-sm font-bold mt-1">
                      ₹ 80 Crore
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-gray-400 text-sm">
                  Infrastructure Projects
                </span>
                <span className="text-[#ff6a00] font-bold text-sm uppercase tracking-wider">
                  View All →
                </span>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-[#ff6a00] text-white p-4 shadow-2xl"
            >
              <div className="font-heading font-black text-2xl">5+</div>
              <div className="text-xs uppercase tracking-wider font-bold">
                Years Exp.
              </div>
            </motion.div>

            {/* Decorative circles */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-[#ff6a00]/30 rounded-full" />
            <div className="absolute -top-8 -right-8 w-32 h-32 border border-[#ff6a00]/10 rounded-full" />
          </motion.div>
        </div>
      </div>

      {/* Bottom diagonal divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-[#13131f]"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />
    </section>
  );
}
