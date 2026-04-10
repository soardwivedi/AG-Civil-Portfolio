import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiZoomIn, FiX } from 'react-icons/fi'
import { GiWaterTower, GiFactory, GiBrickWall, GiPipes } from 'react-icons/gi'
import { MdEngineering, MdConstruction, MdWater, MdFoundation } from 'react-icons/md'
import { BsBuilding } from 'react-icons/bs'

const galleryItems = [
  {
    id: 1,
    title: 'Water Treatment Plant',
    subtitle: 'Clariflocculator Unit',
    category: 'WTP',
    icon: GiWaterTower,
    bg: 'from-blue-900/50 to-[#0d0d14]',
    accent: '#3b82f6',
  },
  {
    id: 2,
    title: 'Sewage Treatment Plant',
    subtitle: 'Aeration Tank Structure',
    category: 'STP',
    icon: GiFactory,
    bg: 'from-[#ff6a00]/30 to-[#0d0d14]',
    accent: '#ff6a00',
  },
  {
    id: 3,
    title: 'Main Pumping Station',
    subtitle: 'Pump House Infrastructure',
    category: 'Pumping',
    icon: GiPipes,
    bg: 'from-green-900/40 to-[#0d0d14]',
    accent: '#22c55e',
  },
  {
    id: 4,
    title: 'Site Inspection',
    subtitle: 'Quality Control Check',
    category: 'Inspection',
    icon: MdEngineering,
    bg: 'from-yellow-900/40 to-[#0d0d14]',
    accent: '#eab308',
  },
  {
    id: 5,
    title: 'Industrial Plant',
    subtitle: 'Sugar Cogen Plant',
    category: 'Industrial',
    icon: MdConstruction,
    bg: 'from-purple-900/40 to-[#0d0d14]',
    accent: '#a855f7',
  },
  {
    id: 6,
    title: 'Filter House',
    subtitle: 'Rapid Sand Filter Units',
    category: 'WTP',
    icon: MdWater,
    bg: 'from-cyan-900/40 to-[#0d0d14]',
    accent: '#06b6d4',
  },
  {
    id: 7,
    title: 'Foundation Work',
    subtitle: 'Pile Foundation Execution',
    category: 'Structure',
    icon: MdFoundation,
    bg: 'from-red-900/40 to-[#0d0d14]',
    accent: '#ef4444',
  },
  {
    id: 8,
    title: 'Infrastructure Structures',
    subtitle: 'Civil Structure Work',
    category: 'Infrastructure',
    icon: BsBuilding,
    bg: 'from-orange-900/40 to-[#0d0d14]',
    accent: '#f97316',
  },
]

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="relative py-24 bg-[#13131f] overflow-hidden">
      {/* Top diagonal */}
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-[#0d0d14]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="h-1 w-16 bg-[#ff6a00] mx-auto mb-4" />
          <div className="text-[#ff6a00] font-bold text-sm uppercase tracking-widest mb-3">Portfolio Gallery</div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase text-white leading-none">
            Project <span className="text-[#ff6a00]">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto font-sans">
            Visual showcase of infrastructure projects — WTP, STP, pumping stations, and industrial plants.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="relative group cursor-pointer overflow-hidden aspect-square"
              onClick={() => setSelected(item)}
            >
              {/* Image placeholder with gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.bg} group-hover:scale-110 transition-transform duration-500`}
              />

              {/* Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <item.icon
                  className="text-8xl opacity-20 group-hover:opacity-30 group-hover:scale-110 
                               transition-all duration-500"
                  style={{ color: item.accent }}
                />
              </div>

              {/* Grid lines decoration */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,106,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,106,0,0.5) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px',
                }}
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-[#ff6a00]/0 group-hover:bg-[#ff6a00]/20 
                              transition-all duration-300 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  className="bg-white text-[#0d0d14] p-3 opacity-0 group-hover:opacity-100 
                             transition-all duration-300 scale-75 group-hover:scale-100"
                >
                  <FiZoomIn className="text-xl" />
                </motion.div>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent 
                              p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="font-heading font-bold text-white text-sm uppercase">{item.title}</div>
                <div className="text-gray-300 text-xs">{item.subtitle}</div>
                <div
                  className="text-xs font-bold uppercase tracking-wider mt-1"
                  style={{ color: item.accent }}
                >
                  #{item.category}
                </div>
              </div>

              {/* Category badge */}
              <div
                className="absolute top-3 left-3 text-white text-xs font-bold uppercase tracking-wider px-2 py-1"
                style={{ backgroundColor: item.accent + '99' }}
              >
                {item.category}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="relative bg-[#13131f] border border-[#ff6a00]/30 max-w-lg w-full p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <FiX className="text-2xl" />
            </button>
            <div className={`w-full aspect-video bg-gradient-to-br ${selected.bg} flex items-center justify-center mb-6`}>
              <selected.icon className="text-9xl opacity-30" style={{ color: selected.accent }} />
            </div>
            <h3 className="font-heading font-black text-2xl text-white uppercase">{selected.title}</h3>
            <p className="text-gray-400 mt-2">{selected.subtitle}</p>
            <span
              className="inline-block mt-3 text-xs font-bold uppercase tracking-wider px-3 py-1 border"
              style={{ color: selected.accent, borderColor: selected.accent + '50' }}
            >
              #{selected.category}
            </span>
          </motion.div>
        </motion.div>
      )}

      {/* Bottom diagonal */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-[#0d0d14]"
        style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}
      />
    </section>
  )
}
