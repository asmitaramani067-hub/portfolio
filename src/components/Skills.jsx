import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss,
  SiHtml5, SiCss, SiBootstrap, SiRedux,
  SiNodedotjs, SiExpress, SiGraphql, SiPython, SiLaravel,
  SiStrapi, SiReactos,
  SiPostgresql, SiMysql, SiMongodb, SiGit, SiBitbucket, SiGithub,
} from "react-icons/si";
import { FiCode, FiServer, FiDatabase, FiTool, FiSmartphone, FiLayout, FiCloud } from "react-icons/fi";

const categories = [
  {
    label: "Frontend",
    icon: FiLayout,
    color: "text-indigo-400",
    bar: "from-indigo-500 to-blue-500",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Redux Thunk", icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    label: "Backend",
    icon: FiServer,
    color: "text-purple-400",
    bar: "from-purple-500 to-pink-500",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#ffffff" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Strapi", icon: SiStrapi, color: "#8C4BFF" },
      { name: "API Dev", icon: FiCode, color: "#22d3ee" },
    ],
  },
  {
    label: "Mobile",
    icon: FiSmartphone,
    color: "text-cyan-400",
    bar: "from-cyan-500 to-teal-500",
    skills: [
      { name: "React Native", icon: SiReactos, color: "#61DAFB" },
    ],
  },
  {
    label: "Database",
    icon: FiDatabase,
    color: "text-green-400",
    bar: "from-green-500 to-emerald-500",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "DBMS", icon: FiDatabase, color: "#f59e0b" },
    ],
  },
  {
    label: "Tools & Cloud",
    icon: FiTool,
    color: "text-orange-400",
    bar: "from-orange-500 to-yellow-500",
    skills: [
      { name: "AWS", icon: FiCloud, color: "#FF9900" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "Bitbucket", icon: SiBitbucket, color: "#0052CC" },
    ],
  },
];

function SkillCard({ skill, delay }) {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, delay }}
      whileHover={{ scale: 1.08, y: -4 }}
      className="flex flex-col items-center justify-center gap-2.5 p-4 rounded-xl glass border border-white/5 hover:border-white/15 transition-all duration-300 cursor-default group aspect-square"
    >
      <div
        className="w-10 h-10 flex items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${skill.color}18` }}
      >
        <Icon size={24} style={{ color: skill.color }} />
      </div>
      <span className="text-white/50 text-xs text-center leading-tight group-hover:text-white/80 transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
}

function Category({ cat, sectionInView }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const CatIcon = cat.icon;

  return (
    <div ref={ref} className="mb-12">
      {/* Category header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-6"
      >
        <span className={`text-lg font-bold ${cat.color}`}>//</span>
        <CatIcon className={cat.color} size={18} />
        <h3 className="font-poppins font-semibold text-white/80 text-lg">{cat.label}</h3>
        <div className="flex-1 h-px bg-white/5" />
      </motion.div>

      {/* Skill cards grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
        {cat.skills.map((skill, i) => (
          <SkillCard key={skill.name} skill={skill} delay={inView ? i * 0.05 : 0} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* BG glow */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">03. Skills</span>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="mb-3"
        >
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-3">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-white/40 max-w-xl">
            Expertise across the modern development stack
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-px bg-gradient-to-r from-indigo-500/40 via-purple-500/20 to-transparent origin-left mb-12"
        />

        {/* Categories */}
        {categories.map((cat) => (
          <Category key={cat.label} cat={cat} sectionInView={inView} />
        ))}
      </div>
    </section>
  );
}
