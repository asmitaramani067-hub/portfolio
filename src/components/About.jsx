import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiBriefcase, FiCode, FiAward, FiCoffee, FiCheckCircle } from "react-icons/fi";

const stats = [
  { icon: FiBriefcase, value: "3+", label: "Years Experience" },
  { icon: FiCode, value: "20+", label: "Projects Built" },
  { icon: FiAward, value: "2+", label: "Years at o2h" },
  { icon: FiCoffee, value: "∞", label: "Cups of Coffee" },
];

const experiences = [
  {
    role: "Software Engineer",
    company: "o2h Technology",
    period: "Aug 2023 – Present",
    type: "Full-time",
    description:
      "Leading full-stack development of scalable web applications, collaborating with cross-functional teams to deliver high-quality solutions.",
    points: [
      "Develop and maintain full-stack web applications using React and Node.js",
      "Design and implement RESTful APIs with Express.js and MongoDB",
      "Optimize application performance and improve Core Web Vitals",
      "Collaborate with designers and product managers in agile sprints",
      "Write clean, maintainable code following best practices",
      "Participate in code reviews and technical planning sessions",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "o2h Technology",
    period: "2023",
    type: "Internship",
    description:
      "Gained hands-on experience building real-world web applications and contributing to production codebases.",
    points: [
      "Built responsive frontend interfaces using React.js and Tailwind CSS",
      "Developed backend APIs with Node.js and Express",
      "Worked with MySQL and MongoDB for data management",
      "Integrated third-party APIs and services",
    ],
  },
];

function TimelineItem({ exp, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div ref={ref} className="relative flex gap-6 md:gap-10">
      {/* Left — date + line */}
      <div className="flex flex-col items-center">
        {/* Icon circle */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="w-11 h-11 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center z-10 shadow-lg shadow-indigo-500/30 shrink-0"
        >
          <FiBriefcase className="text-white" size={16} />
        </motion.div>
        {/* Vertical line */}
        {index < experiences.length - 1 && (
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-px flex-1 bg-gradient-to-b from-indigo-500/50 to-transparent origin-top mt-2"
            style={{ minHeight: 60 }}
          />
        )}
      </div>

      {/* Right — card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="glass border border-white/5 hover:border-indigo-500/25 rounded-2xl p-6 mb-8 flex-1 transition-colors group"
      >
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <div>
            <h3 className="font-poppins font-semibold text-white text-lg group-hover:text-indigo-300 transition-colors">
              {exp.role}
            </h3>
            <p className="text-indigo-400 text-sm font-medium">{exp.company}</p>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-white/30 text-xs">{exp.period}</span>
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs">
              {exp.type}
            </span>
          </div>
        </div>

        <p className="text-white/40 text-sm leading-relaxed mt-3 mb-4">{exp.description}</p>

        {/* Bullet points */}
        <ul className="space-y-2">
          {exp.points.map((point, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.07 }}
              className="flex items-start gap-2.5 text-white/50 text-sm"
            >
              <FiCheckCircle className="text-indigo-400 mt-0.5 shrink-0" size={14} />
              {point}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">01. About</span>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
        </motion.div>

        {/* Top — avatar + bio */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px]" style={{ overflow: "visible" }}>

              {/* Rings — clipped so they never show above the container top */}
              <div style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: "9999px", zIndex: 0, pointerEvents: "none" }}>
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute inset-4 rounded-full border border-purple-500/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* Image — sits above rings, overflows top */}
              <div style={{ position: "absolute", inset: "2rem", zIndex: 10, overflow: "visible" }}>
                <div className="w-full h-full rounded-full border border-indigo-500/20" style={{ position: "relative", overflow: "hidden" }}>
                  <img
                    src="/profile.jpg"
                    alt="Ishita"
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "166%",
                      objectFit: "cover",
                      objectPosition: "center 10%",
                      top: "-54%",
                      left: "-19",
                      mixBlendMode: "screen",
                    }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 hidden items-center justify-center text-3xl font-bold font-poppins text-white">
                    IS
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 glass border border-white/10 rounded-2xl px-4 py-3 text-center"
              >
                <p className="text-white/40 text-[10px] tracking-widest uppercase mb-0.5">Full Stack Developer</p>
                <p className="text-white/40 text-[10px] tracking-widest uppercase">Freelancer</p>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -left-4 glass border border-white/10 rounded-2xl px-4 py-2 text-sm"
              >
                <span className="gradient-text font-semibold">3 yrs exp</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 leading-tight">
              Crafting digital{" "}
              <span className="gradient-text">experiences</span>
            </h2>

            <p className="text-white/50 leading-relaxed mb-4">
              I am a passionate Software Engineer with 3 years of hands-on experience in building scalable and efficient web applications. My journey in the tech industry began in 2023 at o2h Technology, where I started as a Full Stack Developer Intern and quickly transitioned into a full-time Software Engineer role in August 2023.
            </p>
            <p className="text-white/50 leading-relaxed mb-8">
              I specialize in modern JavaScript frameworks, particularly{" "}
              <span className="text-indigo-400 font-medium">React</span> and{" "}
              <span className="text-indigo-400 font-medium">Next.js</span>, combined with robust
              backend technologies. My approach focuses on writing clean, maintainable code while
              delivering exceptional user experiences.
            </p>

            <p className="text-white/50 leading-relaxed mb-8">
              I am now looking to expand my work as a service provider, helping businesses and individuals build high-quality web applications, improve performance, and bring their ideas to life.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05, y: -4 }}
              className="glass border border-white/5 hover:border-indigo-500/30 rounded-2xl p-6 text-center transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 group-hover:bg-indigo-500/20 flex items-center justify-center mx-auto mb-3 transition-colors">
                <Icon className="text-indigo-400" size={20} />
              </div>
              <p className="font-poppins font-bold text-3xl gradient-text mb-1">{value}</p>
              <p className="text-white/40 text-sm">{label}</p>
            </motion.div>
          ))}
        </motion.div> */}

        {/* Experience timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">Experience</span>
            <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
          </div>

          <div>
            {experiences.map((exp, i) => (
              <TimelineItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
