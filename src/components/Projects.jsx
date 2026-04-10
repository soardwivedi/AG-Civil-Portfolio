import { motion } from 'framer-motion'
import { useScrollAnimation, fadeInUp, staggerContainer } from '../hooks/useScrollAnimation'
import { GiWaterTower, GiFactory } from 'react-icons/gi'
import { MdLocationOn, MdEngineering, MdFactory } from 'react-icons/md'
import { BsBuilding } from 'react-icons/bs'
import { FiCalendar, FiDollarSign } from 'react-icons/fi'

const projects = [
  {
    id: '01',
    title: '300 MLD Water Treatment Plant',
    location: 'Ahmedabad, Gujarat',
    value: '206 Cr',
    type: 'Water Treatment Plant',
    icon: GiWaterTower,
    scope: ['Clariflocculator', 'Filter House', 'Pump House', 'Clear Water Tank'],
    tags: ['WTP', 'Infrastructure', 'EPC'],
    role: 'Project Execution & Estimation',
    status: 'Completed',
    color: '#ff6a00',
  },
  {
    id: '02',
    title: '60 MLD Sewage Treatment Plant & Main Pumping Station',
    location: 'Ahmedabad, Gujarat',
    value: '90 Cr',
    type: 'Sewage Treatment Plant',
    icon: GiFactory,
    scope: ['STP Plant', 'Main Pumping Station', 'Rising Mains', 'Civil Structures'],
    tags: ['STP', 'Pumping Station', 'EPC'],
    role: 'Billing & Project Execution',
    status: 'Completed',
    color: '#ff6a00',
  },
  {
    id: '03',
    title: '65 MLD Sewage Treatment Plant',
    location: 'Gandhinagar, Gujarat',
    value: '95 Cr',
    type: 'Sewage Treatment Plant',
    icon: GiFactory,
    scope: ['STP Infrastructure', 'Mechanical Works', 'Electrical Integration', 'Site Development'],
    tags: ['STP', 'Infrastructure', 'Government'],
    role: 'Estimation & Documentation',
    status: 'Completed',
    color: '#ff6a00',
  },
  {
    id: '04',
    title: '3500 TCD Sugar Plant & 18 MW Cogen Power Plant',
    location: 'Karnal, Haryana',
    value: '80 Cr',
    type: 'Industrial Infrastructure',
    icon: MdFactory,
    scope: ['Sugar Processing Units', 'Cogen Plant', 'Civil Structures', 'Industrial Piping'],
    tags: ['Industrial', 'Power Plant', 'EPC'],
    role: 'Project Execution & Billing',
    status: 'Completed',
    color: '#ff6a00',
  },
]

export default function Projects() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id="projects" className="relative py-24 bg-[#13131f] overflow-hidden">
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
          <div className="text-[#ff6a00] font-bold text-sm uppercase tracking-widest mb-3">Portfolio</div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase text-white leading-none">
            Project <span className="text-[#ff6a00]">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto font-sans">
            Large-scale infrastructure projects executed across India with combined value of over 200+ Crores.
          </p>
        </motion.div>

        {/* Timeline Line (desktop) */}
        <div className="hidden lg:block absolute left-1/2 top-64 bottom-20 w-0.5 bg-[#ff6a00]/20 -translate-x-1/2 z-0" />

        {/* Projects */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative z-10 flex flex-col gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className={`flex flex-col lg:flex-row gap-6 items-start lg:items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Card */}
              <motion.div
                whileHover={{
                  y: -4,
                  boxShadow: '0 20px 50px rgba(255,106,0,0.15)',
                  borderColor: '#ff6a00',
                  transition: { duration: 0.2 },
                }}
                className="flex-1 bg-[#0d0d14] border border-white/10 overflow-hidden group transition-all duration-300"
              >
                {/* Top bar */}
                <div className="h-1 bg-[#ff6a00] w-0 group-hover:w-full transition-all duration-700" />

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#ff6a00]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#ff6a00]/20 transition-colors">
                        <project.icon className="text-[#ff6a00] text-2xl" />
                      </div>
                      <div>
                        <div className="text-gray-500 text-xs uppercase tracking-widest mb-1">
                          {project.type}
                        </div>
                        <h3 className="font-heading font-black text-xl md:text-2xl text-white uppercase leading-tight group-hover:text-[#ff6a00] transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    {/* Value Badge */}
                    <div className="bg-[#ff6a00] text-white font-heading font-black text-lg px-4 py-2 flex-shrink-0">
                      ₹ {project.value}
                    </div>
                  </div>

                  {/* Location & Role */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <MdLocationOn className="text-[#ff6a00]" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-400">
                      <MdEngineering className="text-[#ff6a00]" />
                      <span>{project.role}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-green-400 text-xs font-bold uppercase">{project.status}</span>
                    </div>
                  </div>

                  {/* Scope */}
                  <div className="mb-4">
                    <div className="text-gray-500 text-xs uppercase tracking-wider mb-2">Scope of Work</div>
                    <div className="flex flex-wrap gap-2">
                      {project.scope.map((item) => (
                        <span
                          key={item}
                          className="bg-[#1a1a2e] border border-white/10 text-gray-300 text-xs px-3 py-1
                                     group-hover:border-[#ff6a00]/30 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[#ff6a00] border border-[#ff6a00]/30 text-xs font-bold uppercase 
                                   tracking-wider px-2 py-0.5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Timeline Dot (desktop) */}
              <div className="hidden lg:flex w-12 flex-shrink-0 items-center justify-center">
                <motion.div
                  whileInView={{ scale: [0, 1.3, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="w-6 h-6 bg-[#ff6a00] border-4 border-[#13131f] relative z-10"
                  style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
                />
              </div>

              {/* Number (desktop opposite side) */}
              <div className="hidden lg:flex flex-1 items-center justify-center">
                <span className="font-heading font-black text-8xl text-white/[0.04]">{project.id}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom diagonal */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-[#0d0d14]"
        style={{ clipPath: 'polygon(0 100%, 100% 0, 100% 100%)' }}
      />
    </section>
  )
}
