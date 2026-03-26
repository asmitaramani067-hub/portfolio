import { FiGithub, FiLinkedin, FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold font-poppins">IS</div>
          <span className="text-white/30 text-sm">Ishita</span>
        </div>
        <p className="text-white/20 text-sm flex items-center gap-1.5">
          Built with <FiHeart className="text-pink-500" size={12} /> using React & Tailwind CSS
        </p>
        <div className="flex items-center gap-3">
          {[{ icon: FiGithub, href: "https://github.com", label: "GitHub" }, { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" }].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="w-8 h-8 rounded-lg glass border border-white/5 hover:border-indigo-500/30 flex items-center justify-center text-white/30 hover:text-white/70 transition-all duration-300">
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
