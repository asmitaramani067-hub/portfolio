import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiLayers, FiMonitor, FiServer, FiZap, FiTool } from "react-icons/fi";

const services = [
  { icon: FiLayers, title: "Full Stack Web Development", description: "End-to-end web application development from database design to polished UI, using React, Node.js, and modern databases.", tags: ["React", "Next.js", "Node.js", "MongoDB"], gradient: "from-indigo-500 to-blue-600", glow: "hover:shadow-indigo-500/20" },
  { icon: FiMonitor, title: "Frontend Development", description: "Pixel-perfect, responsive React-based interfaces with smooth animations, accessibility, and exceptional user experience.", tags: ["React", "Tailwind", "Framer Motion"], gradient: "from-purple-500 to-pink-600", glow: "hover:shadow-purple-500/20" },
  { icon: FiServer, title: "Backend API Development", description: "Robust, scalable REST APIs with Node.js and Express. Clean architecture, proper authentication, and thorough documentation.", tags: ["Node.js", "Express", "REST API"], gradient: "from-cyan-500 to-teal-600", glow: "hover:shadow-cyan-500/20" },
  { icon: FiZap, title: "Website Optimization", description: "Performance audits and optimizations — Core Web Vitals, lazy loading, code splitting, and SEO improvements.", tags: ["Performance", "SEO", "Core Web Vitals"], gradient: "from-orange-500 to-yellow-600", glow: "hover:shadow-orange-500/20" },
  { icon: FiTool, title: "Bug Fixing & Maintenance", description: "Diagnosing and resolving complex bugs, refactoring legacy code, and keeping your application healthy and up-to-date.", tags: ["Debugging", "Refactoring", "Support"], gradient: "from-green-500 to-emerald-600", glow: "hover:shadow-green-500/20" },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto" ref={ref}>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-4">
          <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">04. Services</span>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
          className="font-poppins font-bold text-4xl md:text-5xl mb-4">
          What I <span className="gradient-text">Offer</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
          className="text-white/40 mb-14 max-w-xl">Services I provide to help bring your ideas to life.</motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative glass border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl ${s.glow} cursor-default`}>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} p-0.5 mb-5`}>
                  <div className="w-full h-full rounded-[10px] bg-[#0a0a0f] flex items-center justify-center">
                    <Icon className="text-white/80" size={20} />
                  </div>
                </div>
                <h3 className="font-poppins font-semibold text-white/90 text-lg mb-3 group-hover:text-white transition-colors">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-5">{s.description}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-white/5 text-white/40 text-xs border border-white/5">{tag}</span>
                  ))}
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
