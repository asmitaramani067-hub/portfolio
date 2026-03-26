import { motion } from "framer-motion";

export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0f]">
      <motion.div
        className="relative w-20 h-20 mb-8"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 animate-spin-slow opacity-60 blur-sm" />
        <div className="absolute inset-1 rounded-xl bg-[#0a0a0f] flex items-center justify-center">
          <span className="gradient-text font-poppins font-bold text-2xl">IS</span>
        </div>
      </motion.div>

      <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      </div>

      <motion.p
        className="mt-4 text-white/30 text-xs font-poppins tracking-widest uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Loading...
      </motion.p>
    </div>
  );
}
