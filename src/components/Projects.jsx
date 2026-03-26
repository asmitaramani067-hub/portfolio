import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  { title: "E-Commerce Platform", description: "A full-stack e-commerce application with product management, cart, authentication, and payment integration.", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80", tags: ["React", "Node.js", "MongoDB", "Tailwind"], github: "https://github.com", live: "https://example.com", gradient: "from-indigo-500/20 to-purple-500/20" },
  { title: "Task Management App", description: "A collaborative project management tool with real-time updates, drag-and-drop boards, and team features.", image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80", tags: ["React", "Express", "MySQL", "Socket.io"], github: "https://github.com", live: "https://example.com", gradient: "from-cyan-500/20 to-blue-500/20" },
  { title: "Analytics Dashboard", description: "An interactive dashboard with charts, data visualization, and real-time metrics tracking.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80", tags: ["React", "Node.js", "REST API", "Chart.js"], github: "https://github.com", live: "https://example.com", gradient: "from-purple-500/20 to-pink-500/20" },
  { title: "Blog CMS", description: "A headless CMS with rich text editing, media management, SEO tools, and a public-facing blog frontend.", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80", tags: ["React", "MongoDB", "Tailwind", "Vercel"], github: "https://github.com", live: "https://example.com", gradient: "from-orange-500/20 to-yellow-500/20" },
];

function Card({ project, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }} className="group glass border border-white/5 hover:border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} z-10`} />
        <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="w-10 h-10 rounded-xl bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-indigo-500/80 transition-colors">
            <FiGithub size={16} />
          </a>
          <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live demo"
            className="w-10 h-10 rounded-xl bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-indigo-500/80 transition-colors">
            <FiExternalLink size={16} />
          </a>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-poppins font-semibold text-white/90 text-lg mb-2 group-hover:text-white transition-colors">{project.title}</h3>
        <p className="text-white/40 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-lg bg-indigo-500/10 text-indigo-300/70 text-xs border border-indigo-500/20">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto" ref={ref}>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-4">
          <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">05. Projects</span>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
          className="font-poppins font-bold text-4xl md:text-5xl mb-4">
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
          className="text-white/40 mb-14 max-w-xl">A selection of projects I've built — from concept to deployment.</motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => <Card key={p.title} project={p} index={i} />)}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="text-center mt-12">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white/60 hover:text-white hover:border-indigo-500/40 transition-all duration-300 hover:scale-105">
            <FiGithub size={16} /> View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
