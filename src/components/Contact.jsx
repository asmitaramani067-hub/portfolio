import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FiSend, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto" ref={ref}>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="flex items-center gap-3 mb-4">
          <span className="text-indigo-400 text-sm font-medium tracking-widest uppercase">06. Contact</span>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-500/30 to-transparent" />
        </motion.div>

        <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
          className="font-poppins font-bold text-4xl md:text-5xl mb-4">
          Let's <span className="gradient-text">Work Together</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.2 }}
          className="text-white/40 mb-14 max-w-xl">
          Have a project in mind? I'd love to hear about it. Send me a message and let's build something great.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.form initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }}
            onSubmit={handleSubmit} className="space-y-5">
            {[{ name: "name", label: "Your Name", type: "text", placeholder: "John Doe" }, { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com" }].map((f) => (
              <div key={f.name}>
                <label className="block text-white/50 text-sm mb-2">{f.label}</label>
                <input type={f.type} name={f.name} value={form[f.name]} onChange={handleChange} placeholder={f.placeholder} required
                  className="w-full glass border border-white/10 focus:border-indigo-500/50 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-colors bg-transparent" />
              </div>
            ))}
            <div>
              <label className="block text-white/50 text-sm mb-2">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required rows={5}
                className="w-full glass border border-white/10 focus:border-indigo-500/50 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm outline-none transition-colors bg-transparent resize-none" />
            </div>
            <motion.button type="submit" disabled={status !== "idle"} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 disabled:opacity-60">
              {status === "sending" ? (
                <span className="flex items-center gap-2">
                  <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block" />
                  Sending...
                </span>
              ) : status === "sent" ? "Message Sent ✓" : <><FiSend size={16} /> Send Message</>}
            </motion.button>
          </motion.form>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.4 }}
            className="flex flex-col justify-between">
            <div className="glass border border-white/5 rounded-2xl p-8 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4">
                <FiMail className="text-white" size={20} />
              </div>
              <h3 className="font-poppins font-semibold text-white/90 text-xl mb-2">Ready to start a project?</h3>
              <p className="text-white/40 text-sm leading-relaxed mb-4">
                I'm currently available for freelance work and full-time opportunities. Let's discuss how I can help you achieve your goals.
              </p>
              <a href="mailto:your@email.com" className="text-indigo-400 hover:text-indigo-300 text-sm transition-colors">your@email.com</a>
            </div>

            <div className="space-y-3">
              {[{ icon: FiGithub, label: "GitHub", handle: "@yourusername", href: "https://github.com" }, { icon: FiLinkedin, label: "LinkedIn", handle: "Ishita", href: "https://linkedin.com" }].map(({ icon: Icon, label, handle, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 glass border border-white/5 hover:border-indigo-500/30 rounded-xl p-4 transition-all duration-300 group hover:scale-[1.02]">
                  <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-indigo-500/10 flex items-center justify-center transition-colors">
                    <Icon className="text-white/50 group-hover:text-indigo-400 transition-colors" size={18} />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-medium group-hover:text-white transition-colors">{label}</p>
                    <p className="text-white/30 text-xs">{handle}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
