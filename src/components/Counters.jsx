import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useEffect } from "react";
import { FiAward, FiBriefcase, FiTrendingUp, FiEye } from "react-icons/fi";

const counters = [
  {
    value: 5,
    suffix: "+",
    label: "Years Experience",
    sublabel: "In Infrastructure & EPC Projects",
    icon: FiAward,
    color: "#ff6a00",
  },
  {
    value: 4,
    suffix: "",
    label: "Major Infrastructure Projects",
    sublabel: "WTP, STP, Industrial Plants",
    icon: FiBriefcase,
    color: "#ff6a00",
  },
  {
    value: 200,
    suffix: "+ Cr",
    label: "Crore Project Value",
    sublabel: "Cumulative Project Portfolio",
    icon: FiTrendingUp,
    color: "#ff6a00",
  },
  {
    value: 50,
    suffix: "+",
    label: "Site Inspections",
    sublabel: "Quality & Compliance Checks",
    icon: FiEye,
    color: "#ff6a00",
  },
];

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  return (
    <span
      ref={ref}
      className="font-heading font-black text-5xl md:text-6xl text-white leading-none"
    >
      <motion.span>{display}</motion.span>
      <span className="text-[#ff6a00]">{suffix}</span>
    </span>
  );
}

export default function Counters() {
  return (
    <section className="relative py-20 bg-[#ff6a00] overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Diagonal top */}
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-[#0d0d14]"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span className="font-heading font-black text-[15vw] uppercase text-black/10 select-none whitespace-nowrap">
          EXPERTISE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading font-black text-3xl md:text-4xl uppercase text-white/90 tracking-wider">
            Numbers That Define Our Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {counters.map((counter, index) => (
            <motion.div
              key={counter.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="bg-black/20 backdrop-blur-sm border border-white/20 p-6 text-center 
                         hover:bg-black/30 hover:border-white/40 transition-all duration-300"
            >
              <counter.icon className="text-white/80 text-3xl mx-auto mb-4" />
              <AnimatedCounter value={counter.value} suffix={counter.suffix} />
              <div className="font-heading font-bold text-white text-lg uppercase tracking-wide mt-2 leading-tight">
                {counter.label}
              </div>
              <div className="text-white/60 text-xs mt-1 font-sans">
                {counter.sublabel}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Diagonal bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-[#13131f]"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      />
    </section>
  );
}
