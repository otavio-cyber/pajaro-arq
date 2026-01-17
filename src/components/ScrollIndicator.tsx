"use client"

import { motion } from "framer-motion"

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="fixed bottom-6 left-1/2 z-30 -translate-x-1/2 rounded-full bg-[#1D1818]/70 px-4 py-3 backdrop-blur-sm"
    >
      <div className="flex flex-col items-center gap-[2px]">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="block h-2 w-2 rotate-45 border-b border-r border-[#848283]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              duration: 1.2,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 1.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
