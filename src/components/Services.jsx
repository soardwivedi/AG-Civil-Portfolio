import { motion } from "framer-motion";
import {
  useScrollAnimation,
  staggerContainer,
  scaleIn,
} from "../hooks/useScrollAnimation";
import {
  MdCalculate,
  MdListAlt,
  MdReceiptLong,
  MdDescription,
  MdDraw,
  MdSchedule,
  MdWater,
  MdSearch,
  MdBarChart,
  MdEngineering,
} from "react-icons/md";

const services = [
  {
    icon: MdCalculate,
    title: "Project Estimation",
    desc: "Accurate cost estimation for civil and infrastructure projects using market rates and BOQ analysis.",
    color: "#ff6a00",
  },
  {
    icon: MdListAlt,
    title: "BOQ Preparation",
    desc: "Detailed Bill of Quantities preparation for tenders, EPC, and government contracts.",
    color: "#ff6a00",
  },
  {
    icon: MdReceiptLong,
    title: "Billing & Measurement",
    desc: "Precise running account bills, measurement books, and claim management for site works.",
    color: "#ff6a00",
  },
  {
    icon: MdDescription,
    title: "Tender Documentation (DNIT)",
    desc: "Professional preparation of tender documents, DNIT, NIT drafts for government tenders.",
    color: "#ff6a00",
  },
  {
    icon: MdDraw,
    title: "AutoCAD Drawings",
    desc: "Precise 2D drawings including layouts, sections, and as-built drawings for civil structures.",
    color: "#ff6a00",
  },
  {
    icon: MdSchedule,
    title: "Planning & Scheduling",
    desc: "Project bar charts, CPM scheduling, and milestone planning for infrastructure projects.",
    color: "#ff6a00",
  },
  {
    icon: MdWater,
    title: "WTP / STP Consultancy",
    desc: "Expert consultancy for Water and Sewage Treatment Plant design, execution, and commissioning.",
    color: "#ff6a00",
  },
  {
    icon: MdSearch,
    title: "Site Inspection",
    desc: "Detailed site inspection reports, quality checks, and compliance verification on-site.",
    color: "#ff6a00",
  },
  {
    icon: MdBarChart,
    title: "Quantity Surveying",
    desc: "Comprehensive quantity take-off, material reconciliation, and contractor quantity verification.",
    color: "#ff6a00",
  },
  {
    icon: MdEngineering,
    title: "Project Execution Consultancy",
    desc: "End-to-end project execution management for large scale EPC and government infrastructure projects.",
    color: "#ff6a00",
  },
];

export default function Services() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="services"
      className="relative py-24 bg-[#0d0d14] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-[#ff6a00]/3 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="h-1 w-16 bg-[#ff6a00] mx-auto mb-4" />
          <div className="text-[#ff6a00] font-bold text-sm uppercase tracking-widest mb-3">
            What I Offer
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase text-white leading-none">
            Our <span className="text-[#ff6a00]">Services</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto font-sans">
            Comprehensive civil engineering consultancy services tailored for
            infrastructure, government, and EPC projects.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={scaleIn}
              whileHover={{
                y: -8,
                borderColor: "#ff6a00",
                boxShadow: "0 20px 40px rgba(255,106,0,0.2)",
                transition: { duration: 0.2 },
              }}
              className="group relative bg-[#13131f] border border-white/5 p-6 cursor-pointer overflow-hidden
                         transition-all duration-300 hover:bg-[#1a1a2e]"
            >
              {/* Number */}
              <div
                className="absolute top-3 right-4 font-heading font-black text-5xl text-white/[0.04] 
                              group-hover:text-[#ff6a00]/10 transition-colors leading-none"
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Top orange accent */}
              <div className="w-0 h-0.5 bg-[#ff6a00] group-hover:w-full transition-all duration-500 mb-4" />

              {/* Icon */}
              <div
                className="w-12 h-12 bg-[#ff6a00]/10 flex items-center justify-center mb-4
                              group-hover:bg-[#ff6a00]/20 transition-colors duration-200"
              >
                <service.icon className="text-[#ff6a00] text-2xl" />
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-white text-base uppercase tracking-wide mb-2 leading-tight group-hover:text-[#ff6a00] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors font-sans">
                {service.desc}
              </p>

              {/* Arrow */}
              <div
                className="mt-4 text-[#ff6a00] font-bold text-sm opacity-0 group-hover:opacity-100 
                              transition-opacity flex items-center gap-1"
              >
                Learn More <span>→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
