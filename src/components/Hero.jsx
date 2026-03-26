import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin, FiDownload, FiArrowDown } from "react-icons/fi";

const particles = [
  { x: "8%", y: "18%", s: 6, d: 0 }, { x: "82%", y: "12%", s: 10, d: 1 },
  { x: "62%", y: "72%", s: 8, d: 2 }, { x: "22%", y: "78%", s: 5, d: 0.5 },
  { x: "91%", y: "48%", s: 12, d: 1.5 }, { x: "44%", y: "28%", s: 4, d: 3 },
  { x: "14%", y: "58%", s: 7, d: 2.5 }, { x: "72%", y: "88%", s: 9, d: 0.8 },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* BG glows */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/10 rounded-full blur-[80px] animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Particles */}
      {particles.map((p, i) => (
        <motion.div key={i} className="absolute rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20"
          style={{ left: p.x, top: p.y, width: p.s, height: p.s }}
          animate={{ y: [0, -28, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4 + p.d, repeat: Infinity, delay: p.d, ease: "easeInOut" }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/20 text-sm text-indigo-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          className="font-poppins font-bold text-5xl md:text-7xl lg:text-8xl mb-4 leading-tight">
          Hi, I'm <span className="gradient-text">Ishita</span>
        </motion.h1>

        {/* Typing */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-3xl text-white/60 font-light mb-6 h-10">
          <TypeAnimation sequence={["Software Engineer", 2000, "Full Stack Developer", 2000, "React developer", 2000, "Problem Solver", 2000]}
            wrapper="span" speed={50} repeat={Infinity} className="text-white/70" />
        </motion.div>

        {/* Description */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/40 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          3 years of experience building scalable web applications. Turning ideas into elegant, performant digital experiences.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a href="#projects" className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:scale-105">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-3.5 rounded-xl glass border border-white/10 text-white/80 font-medium hover:border-indigo-500/50 hover:text-white transition-all duration-300 hover:scale-105">
            Get In Touch
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-4">
          {[{ icon: FiGithub, href: "https://github.com/asmitaramani067-hub?tab=repositories", label: "GitHub" }, { icon: FiLinkedin, href: "https://www.linkedin.com/in/asmita-ramani-1b8171226/", label: "LinkedIn" }].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="w-11 h-11 rounded-xl glass border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300 hover:scale-110">
              <Icon size={18} />
            </a>
          ))}
          <a href="/resume.pdf" className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass border border-white/10 text-white/50 hover:text-white hover:border-cyan-500/50 text-sm transition-all duration-300 hover:scale-105">
            <FiDownload size={15} /> Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <FiArrowDown size={16} />
      </motion.a>
    </section>
  );
}
