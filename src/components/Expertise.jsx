import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiHtml5,
  SiNodedotjs, SiExpress, SiPython, SiGraphql,
  SiMongodb, SiMysql, SiPostgresql, SiRedis,
  SiGit, SiDocker, SiVercel, SiPostman,
} from "react-icons/si";
import { FiMonitor, FiServer, FiDatabase, FiTool } from "react-icons/fi";

const areas = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: FiMonitor,
    gradient: "from-indigo-500 to-blue-500",
    glowColor: "rgba(99,102,241,0.15)",
    borderHover: "hover:border-indigo-500/40",
    description: "Building pixel-perfect, responsive interfaces with modern React ecosystem and smooth animations.",
    techs: [
      { icon: SiReact, name: "React.js", color: "#61DAFB" },
      { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
      { icon: SiHtml5, name: "HTML5/CSS3", color: "#E34F26" },
    ],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80",
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: FiServer,
    gradient: "from-purple-500 to-pink-500",
    glowColor: "rgba(168,85,247,0.15)",
    borderHover: "hover:border-purple-500/40",
    description: "Designing robust, scalable server-side applications and RESTful APIs with clean architecture.",
    techs: [
      { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
      { icon: SiExpress, name: "Express.js", color: "#ffffff" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80",
  },
  {
    id: "database",
    title: "Database Management",
    icon: FiDatabase,
    gradient: "from-cyan-500 to-teal-500",
    glowColor: "rgba(6,182,212,0.15)",
    borderHover: "hover:border-cyan-500/40",
    description: "Designing efficient schemas, optimizing queries, and managing both SQL and NoSQL databases.",
    techs: [
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
    ],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&q=80",
  },
  {
    id: "tools",
    title: "Tools & DevOps",
    icon: FiTool,
    gradient: "from-orange-500 to-yellow-500",
    glowColor: "rgba(249,115,22,0.15)",
    borderHover: "hover:border-orange-500/40",
    description: "Streamlining development workflows with modern tooling, version control, and deployment pipelines.",
    techs: [
      { icon: SiGit, name: "Git/GitHub", color: "#F05032" },
      { icon: SiDocker, name: "Docker", color: "#2496ED" },
      { icon: SiVercel, name: "Vercel", color: "#ffffff" },
      { icon: SiPostman, name: "Postman", color: "#FF6C37" },
    ],
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&q=80",
  },
];

function ExpertiseCard({ area, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const Icon = area.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -8, boxShadow: `0 20px 60px ${area.glowColor}` }}
      className={`group glass border border-white/5 ${area.borderHover} rounded-2xl overflow-hidden transition-all duration-400 cursor-default`}
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${area.gradient} opacity-40 z-10`} />
        <img src={area.image} alt={area.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500" />
        {/* Icon badge */}
        <div className={`absolute top-4 left-4 z-20 w-10 h-10 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center shadow-lg`}>
          <Icon className="text-white" size={18} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-poppins font-semibold text-white/90 text-lg mb-2 group-hover:text-white transition-colors">
          {area.title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed mb-5">{area.description}</p>

        {/* Tech icons */}
        <div className="flex flex-wrap gap-2">
          {area.techs.map((tech) => {
            const TechIcon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                whileHover={{ scale: 1.15, y: -2 }}
                title={tech.name}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/15 transition-all cursor-default"
              >
                <TechIcon size={13} style={{ color: tech.color }} />
                <span className="text-white/50 text-xs">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className={`h-0.5 bg-gradient-to-r ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
    </motion.div>
  );
}

export default function Expertise() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="expertise" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-4">
          <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">02. Expertise</span>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }} className="mb-14">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4">
            Areas of <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-white/40 max-w-xl">
            Core domains where I bring deep knowledge and hands-on experience to every project.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, i) => (
            <ExpertiseCard key={area.id} area={area} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
