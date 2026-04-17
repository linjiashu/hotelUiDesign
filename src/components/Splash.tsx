import { motion } from 'motion/react';

export default function Splash() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 z-50 bg-white flex flex-col items-center justify-center space-y-4"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-32 h-32 bg-gradient-to-br from-blue-800 to-blue-900 rounded-2xl flex items-center justify-center shadow-2xl"
      >
        <span className="text-white text-4xl font-bold font-serif tracking-tight">HTL</span>
      </motion.div>
      <motion.p
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-500 tracking-[0.3em] text-sm mt-4"
      >
        小程序启动页
      </motion.p>
    </motion.div>
  );
}
