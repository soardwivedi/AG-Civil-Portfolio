import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  useScrollAnimation,
  staggerContainer,
  fadeInUp,
} from "../hooks/useScrollAnimation";

const skills = [
  { name: "AutoCAD", level: 90, category: "Software" },
  { name: "STAAD Pro", level: 75, category: "Software" },
  { name: "MS Office", level: 92, category: "Software" },
  { name: "Execution Engineering", level: 88, category: "Technical" },
  { name: "Planning & Scheduling", level: 85, category: "Technical" },
  { name: "Billing & Measurement", level: 90, category: "Technical" },
  { name: "Tender Documentation", level: 87, category: "Technical" },
  { name: "Pile Foundation", level: 80, category: "Specialization" },
  { name: "Waterproofing", level: 78, category: "Specialization" },
  { name: "Structure Work", level: 85, category: "Specialization" },
  { name: "Landscape Development", level: 72, category: "Specialization" },
  { name: "WTP & STP Operations", level: 88, category: "Specialization" },
];

const categories = ["Software", "Technical", "Specialization"];

const categoryColors = {
  Software: "#ff6a00",
  Technical: "#ff8c00",
  Specialization: "#ffa500",
};

function SkillBar({ skill, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium text-sm font-sans">
          {skill.name}
        </span>
        <span className="text-[#ff6a00] font-heading font-bold text-sm">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-[#1a1a2e] border border-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: index * 0.06 + 0.3,
            ease: "easeOut",
          }}
          className="h-full relative"
          style={{ background: `linear-gradient(90deg, #ff6a00, #ff9500)` }}
        >
          {/* Shimmer effect */}
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{
              duration: 2,
              delay: index * 0.06 + 1.5,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const { ref, isInView } = useScrollAnimation();

  const groupedSkills = categories.reduce((acc, cat) => {
    acc[cat] = skills.filter((s) => s.category === cat);
    return acc;
  }, {});

  return (
    <section
      id="skills"
      className="relative py-24 bg-[#0d0d14] overflow-hidden"
    >
      {/* Background text */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none overflow-hidden">
        <span className="font-heading font-black text-[15vw] uppercase text-white/[0.02] select-none whitespace-nowrap">
          SKILLS
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="h-1 w-16 bg-[#ff6a00] mx-auto mb-4" />
          <div className="text-[#ff6a00] font-bold text-sm uppercase tracking-widest mb-3">
            Expertise
          </div>
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl uppercase text-white leading-none">
            Technical <span className="text-[#ff6a00]">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto font-sans">
            Proficiency across civil engineering tools, technical execution, and
            specialized domains.
          </p>
        </motion.div>

        {/* Skills Grid by Category */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className="bg-[#13131f] border border-white/5 p-6 hover:border-[#ff6a00]/30 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                <div
                  className="w-3 h-8"
                  style={{ background: categoryColors[category] }}
                />
                <h3 className="font-heading font-black text-xl uppercase text-white tracking-wide">
                  {category}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-5">
                {groupedSkills[category].map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill}
                    index={i + catIndex * 4}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skill Tags cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-wrap gap-3 justify-center"
        >
          {skills.map((skill) => (
            <motion.span
              key={skill.name}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#ff6a00",
                color: "#fff",
              }}
              className="bg-[#13131f] border border-white/10 text-gray-400 text-sm 
                         font-medium py-2 px-4 cursor-default transition-all duration-200
                         hover:border-[#ff6a00]"
            >
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
