import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi'
import { MdFormatQuote } from 'react-icons/md'
import { staggerContainer, scaleIn } from '../hooks/useScrollAnimation'

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Project Manager',
    company: 'Gujarat Infrastructure Corp.',
    text: 'Excellent expertise in project execution and planning. Abhimanyu delivered outstanding results on our 300 MLD WTP project with precise estimation and on-time execution.',
    rating: 5,
    initials: 'RS',
  },
  {
    id: 2,
    name: 'Sunil Verma',
    role: 'Director',
    company: 'EPC Solutions Ltd.',
    text: 'Highly professional civil engineering consultancy. His knowledge of STP/WTP operations and tender documentation is second to none. Highly recommend for large infrastructure projects.',
    rating: 5,
    initials: 'SV',
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Chief Engineer',
    company: 'Ahmedabad Municipal Corporation',
    text: 'Abhimanyu\'s attention to detail in BOQ preparation and billing saved us significant time and cost. His site inspection reports are thorough and reliable.',
    rating: 5,
    initials: 'AP',
  },
  {
    id: 4,
    name: 'Priya Gupta',
    role: 'Technical Lead',
    company: 'Infrastructure Consultants Pvt. Ltd.',
    text: 'Exceptional understanding of AutoCAD drawings and planning schedules. Delivered all documentation on time and the quality of work exceeded our expectations.',
    rating: 5,
    initials: 'PG',
  },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length)

  const visibleOnDesktop = [
    testimonials[activeIndex % testimonials.length],
    testimonials[(activeIndex + 1) % testimonials.length],
    testimonials[(activeIndex + 2) % testimonials.length],
  ]

  return (
    <section className="relative py-24 bg-[#0d0d14] overflow-hidden">
      {/* Background circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] 
                      bg-[#ff6a00]/3 rounded-full blur-3xl pointer-events-none" />

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
          <div className="text-[#ff6a00] font-bold text-sm uppercase tracking-widest mb-3">Testimonials</div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase text-white leading-none">
            Client <span className="text-[#ff6a00]">Feedback</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto font-sans">
            What clients say about our civil engineering consultancy services.
          </p>
        </motion.div>

        {/* Mobile: Single card */}
        <div className="md:hidden">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="bg-[#13131f] border border-white/10 p-6 relative overflow-hidden"
          >
            <TestimonialCard testimonial={testimonials[activeIndex]} />
          </motion.div>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleOnDesktop.map((t, i) => (
            <motion.div
              key={`${t.id}-${activeIndex}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`bg-[#13131f] border p-6 relative overflow-hidden transition-all duration-300 ${
                i === 0 ? 'border-[#ff6a00]/50' : 'border-white/10 opacity-80'
              }`}
            >
              <TestimonialCard testimonial={t} highlight={i === 0} />
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <button
            onClick={prev}
            className="w-12 h-12 bg-[#13131f] border border-white/20 text-white 
                       hover:bg-[#ff6a00] hover:border-[#ff6a00] transition-all duration-200
                       flex items-center justify-center"
          >
            <FiChevronLeft className="text-xl" />
          </button>
          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`transition-all duration-200 ${
                  i === activeIndex % testimonials.length
                    ? 'w-8 h-2 bg-[#ff6a00]'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 bg-[#13131f] border border-white/20 text-white 
                       hover:bg-[#ff6a00] hover:border-[#ff6a00] transition-all duration-200
                       flex items-center justify-center"
          >
            <FiChevronRight className="text-xl" />
          </button>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, highlight = false }) {
  return (
    <>
      {/* Quote icon */}
      <MdFormatQuote className={`text-5xl mb-4 ${highlight ? 'text-[#ff6a00]' : 'text-white/20'}`} />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <FiStar key={i} className="text-[#ff6a00] fill-[#ff6a00] text-sm" />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-300 text-sm leading-relaxed mb-6 font-sans italic">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 border-t border-white/10 pt-4">
        <div className={`w-10 h-10 flex items-center justify-center font-heading font-black text-sm flex-shrink-0 ${
          highlight ? 'bg-[#ff6a00] text-white' : 'bg-[#1a1a2e] text-[#ff6a00]'
        }`}>
          {testimonial.initials}
        </div>
        <div>
          <div className="font-heading font-bold text-white text-base">{testimonial.name}</div>
          <div className="text-gray-500 text-xs">{testimonial.role}, {testimonial.company}</div>
        </div>
      </div>
    </>
  )
}
