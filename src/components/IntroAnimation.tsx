"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function IntroAnimation({
  onFinish,
}: {
  onFinish: () => void
}) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
      onFinish()
    }, 3200) // já reduzimos o tempo

    return () => clearTimeout(timer)
  }, [onFinish])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1D1818]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{
              scale: 1.15,
              opacity: 1,
              y: [0, -3, 0],
            }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
              y: {
                delay: 1.2,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="/pajaro-bird.png"
              alt="Pajaro logo"
              width={200}
              height={200}
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
