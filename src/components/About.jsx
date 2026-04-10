import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInLeft, fadeInRight, staggerContainer, fadeInUp } from '../hooks/useScrollAnimation'
import { MdEngineering, MdVerified, MdWork } from 'react-icons/md'
import { GiWaterTower, GiFactory, GiBrickWall } from 'react-icons/gi'
import { FiDownload, FiAward, FiMap } from 'react-icons/fi'
import { BsBuilding, BsGearFill } from 'react-icons/bs'

const expertiseItems = [
  { icon: GiWaterTower, label: 'Water & Sewage Treatment Plants', color: '#ff6a00' },
  { icon: BsBuilding, label: 'Infrastructure Projects', color: '#ff6a00' },
  { icon: BsGearFill, label: 'EPC Project Execution', color: '#ff6a00' },
  { icon: MdWork, label: 'Planning & Billing', color: '#ff6a00' },
]

const highlights = [
  { icon: FiAward, value: '5+ Years', label: 'Professional Experience' },
  { icon: BsBuilding, value: '200+ Cr', label: 'Total Project Value' },
  { icon: FiMap, value: '4 Major', label: 'Infrastructure Projects' },
]

export default function About() {
  const { ref: leftRef, isInView: leftInView } = useScrollAnimation()
  const { ref: rightRef, isInView: rightInView } = useScrollAnimation()

  return (
    <section id="about" className="relative py-24 bg-[#13131f] overflow-hidden">
      {/* Top diagonal */}
      <div
        className="absolute top-0 left-0 right-0 h-20 bg-[#0d0d14]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, #ff6a00 0, #ff6a00 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left – Illustration / Visual */}
          <motion.div
            ref={leftRef}
            variants={fadeInLeft}
            initial="hidden"
            animate={leftInView ? 'visible' : 'hidden'}
            className="relative order-2 lg:order-1"
          >
            {/* Main Visual Card */}
            <div className="relative bg-[#0d0d14] border border-[#ff6a00]/20 p-8 overflow-hidden">
              {/* Orange accent diagonal */}
              <div
                className="absolute top-0 left-0 w-40 h-40 bg-[#ff6a00]/10"
                style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
              />

              {/* Profile area */}
              <div className="flex flex-col items-center text-center mb-8">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-[#ff6a00]/10 border-4 border-[#ff6a00]/40 flex items-center justify-center overflow-hidden">
                    <MdEngineering className="text-7xl text-[#ff6a00]" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-[#ff6a00] p-2">
                    <MdVerified className="text-white text-lg" />
                  </div>
                </div>
                <h3 className="font-heading font-black text-2xl text-white uppercase">Abhimanyu Garg</h3>
                <p className="text-[#ff6a00] font-bold text-sm uppercase tracking-widest mt-1">Civil Engineer</p>
                <p className="text-gray-400 text-sm mt-2">Jind, Haryana, India</p>
              </div>

              {/* Highlight stats */}
              <div className="grid grid-cols-3 gap-4">
                {highlights.map((item) => (
                  <div key={item.label} className="bg-[#1a1a2e] p-3 text-center border border-white/5 hover:border-[#ff6a00]/30 transition-colors">
                    <item.icon className="text-[#ff6a00] text-2xl mx-auto mb-2" />
                    <div className="font-heading font-black text-xl text-white">{item.value}</div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider leading-tight mt-1">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Download Resume */}
              <a
                href="/resume.pdf"
                download
                className="mt-6 w-full flex items-center justify-center gap-3 bg-[#ff6a00]/10 border border-[#ff6a00]/40 
                           text-[#ff6a00] font-heading font-bold uppercase tracking-widest text-sm py-3 px-6
                           hover:bg-[#ff6a00] hover:text-white transition-all duration-200"
              >
                <FiDownload />
                Download Resume
              </a>
            </div>

            {/* Floating decoration */}
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -top-6 -left-6 w-24 h-24 border-2 border-[#ff6a00]/20"
              style={{ borderStyle: 'dashed' }}
            />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute -bottom-4 -right-4 w-16 h-16 border border-[#ff6a00]/30"
              style={{ borderStyle: 'dashed' }}
            />
          </motion.div>

          {/* Right – Content */}
          <motion.div
            ref={rightRef}
            variants={fadeInRight}
            initial="hidden"
            animate={rightInView ? 'visible' : 'hidden'}
            className="order-1 lg:order-2"
          >
            <div className="h-1 w-16 bg-[#ff6a00] mb-4" />
            <div className="text-[#ff6a00] font-bold text-sm uppercase tracking-widest mb-2">About</div>
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase leading-none text-white mb-6">
              Abhimanyu <br /><span className="text-[#ff6a00]">Garg</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed mb-4 font-sans">
              A passionate Civil Engineer with over{' '}
              <span className="text-[#ff6a00] font-bold">5 years of experience</span> in large-scale
              infrastructure and EPC projects including{' '}
              <span className="text-white font-semibold">Sewage Treatment Plants (STP)</span>,{' '}
              <span className="text-white font-semibold">Water Treatment Plants (WTP)</span>,
              Pumping Stations, and Industrial Infrastructure.
            </p>

            <p className="text-gray-400 text-base leading-relaxed mb-6 font-sans">
              Having worked on projects valued up to{' '}
              <span className="text-[#ff6a00] font-bold">200+ Crores</span>, Abhimanyu specializes in
              project execution, estimation, billing, tender documentation, and site inspection.
              His experience spans government departments and leading engineering companies across India.
            </p>

            {/* Expertise Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {expertiseItems.map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ x: 5, borderColor: '#ff6a00' }}
                  className="flex items-center gap-3 p-3 bg-[#0d0d14] border border-white/10 
                             hover:border-[#ff6a00]/50 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-[#ff6a00]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-[#ff6a00] text-xl" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#ff6a00] text-white font-heading font-black text-sm uppercase tracking-widest 
                           py-3 px-8 hover:bg-[#e65c00] transition-colors border-2 border-[#ff6a00]"
              >
                Get Consultation
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white/30 text-white font-heading font-black text-sm uppercase 
                           tracking-widest py-3 px-8 hover:border-[#ff6a00] hover:text-[#ff6a00] transition-all"
              >
                View Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom diagonal */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-[#0d0d14]"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
      />
    </section>
  )
}
