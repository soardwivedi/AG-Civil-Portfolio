import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'
import { fadeInLeft, fadeInRight } from '../hooks/useScrollAnimation'

const projectTypes = [
  'WTP / STP Project',
  'Industrial Infrastructure',
  'Project Estimation',
  'BOQ Preparation',
  'Tender Documentation',
  'Site Inspection',
  'AutoCAD Drawings',
  'Planning & Scheduling',
  'General Consultancy',
  'Other',
]

const contactInfo = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'abhigarg15071999@gmail.com',
    href: 'mailto:abhigarg15071999@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+91 9813584799',
    href: 'tel:+919813584799',
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Jind, Haryana, India',
    href: null,
  },
]

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email'
  }
  if (!form.phone.trim()) {
    errors.phone = 'Phone is required'
  } else if (!/^[+\d\s()-]{7,15}$/.test(form.phone)) {
    errors.phone = 'Enter a valid phone number'
  }
  if (!form.projectType) errors.projectType = 'Please select a project type'
  if (!form.message.trim()) errors.message = 'Message is required'
  return errors
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', projectType: '', message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', phone: '', projectType: '', message: '' })
    }, 1500)
  }

  const inputClass = (field) =>
    `w-full bg-[#0d0d14] border ${errors[field] ? 'border-red-500' : 'border-white/10'} 
     text-white placeholder-gray-600 py-3 px-4 font-sans text-sm
     focus:outline-none focus:border-[#ff6a00] transition-colors duration-200`

  return (
    <section id="contact" className="relative py-24 bg-[#0d0d14] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-[#ff6a00]/3 to-transparent pointer-events-none" />

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
          <div className="text-[#ff6a00] font-bold text-sm uppercase tracking-widest mb-3">Contact Us</div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase text-white leading-none">
            Get <span className="text-[#ff6a00]">Consultation</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto font-sans">
            Ready to start your project? Get in touch for expert civil engineering consultancy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="bg-[#13131f] border border-white/10 p-6 md:p-8 flex-1">
              <h3 className="font-heading font-black text-2xl uppercase text-white mb-2">
                Contact <span className="text-[#ff6a00]">Details</span>
              </h3>
              <p className="text-gray-400 text-sm mb-8 font-sans">
                Available for consultancy projects across India. Reach out to discuss your infrastructure requirements.
              </p>

              <div className="flex flex-col gap-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-[#ff6a00]/10 border border-[#ff6a00]/20 flex items-center 
                                    justify-center flex-shrink-0 group-hover:bg-[#ff6a00]/20 transition-colors">
                      <item.icon className="text-[#ff6a00] text-xl" />
                    </div>
                    <div>
                      <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">{item.label}</div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-white font-medium hover:text-[#ff6a00] transition-colors font-sans text-sm break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-white font-medium font-sans text-sm">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919813584799"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-3 bg-green-600/10 border border-green-600/30 
                           text-green-400 font-heading font-bold uppercase tracking-widest text-sm py-3 px-6
                           hover:bg-green-600/20 transition-all duration-200"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#13131f] border border-white/10 p-6 md:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div className="w-20 h-20 bg-[#ff6a00]/10 border border-[#ff6a00]/30 flex items-center justify-center mb-6">
                    <FiCheck className="text-[#ff6a00] text-4xl" />
                  </div>
                  <h3 className="font-heading font-black text-2xl text-white uppercase mb-2">Request Sent!</h3>
                  <p className="text-gray-400 font-sans">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 bg-[#ff6a00] text-white font-heading font-bold uppercase text-sm tracking-widest py-3 px-8 hover:bg-[#e65c00] transition-colors"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                  <h3 className="font-heading font-black text-2xl uppercase text-white mb-4">
                    Request <span className="text-[#ff6a00]">Consultation</span>
                  </h3>

                  {/* Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your Name *"
                        className={inputClass('name')}
                      />
                      {errors.name && <FieldError msg={errors.name} />}
                    </div>
                    <div>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Email Address *"
                        className={inputClass('email')}
                      />
                      {errors.email && <FieldError msg={errors.email} />}
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone Number *"
                        className={inputClass('phone')}
                      />
                      {errors.phone && <FieldError msg={errors.phone} />}
                    </div>
                    <div>
                      <select
                        name="projectType"
                        value={form.projectType}
                        onChange={handleChange}
                        className={`${inputClass('projectType')} cursor-pointer`}
                        style={{ colorScheme: 'dark' }}
                      >
                        <option value="" disabled>Project Type *</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t} className="bg-[#13131f]">{t}</option>
                        ))}
                      </select>
                      {errors.projectType && <FieldError msg={errors.projectType} />}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Describe your project requirements... *"
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <FieldError msg={errors.message} />}
                  </div>

                  {/* Submit */}
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(255,106,0,0.4)' }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="bg-[#ff6a00] text-white font-heading font-black uppercase tracking-widest 
                               text-sm py-4 px-8 border-2 border-[#ff6a00] hover:bg-[#e65c00] 
                               transition-all duration-200 flex items-center justify-center gap-3
                               disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Request Consultation
                        <FiSend />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function FieldError({ msg }) {
  return (
    <div className="flex items-center gap-1 mt-1 text-red-400 text-xs">
      <FiAlertCircle className="flex-shrink-0" />
      <span>{msg}</span>
    </div>
  )
}
