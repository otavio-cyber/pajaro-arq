"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function SideMenuMobile() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Toggle */}
      <button
        onClick={() => setOpen(true)}
        className="fixed top-4 left-4 z-40 text-white"
      >
        ☰
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#1D1818]"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-white"
            >
              ✕
            </button>

            <nav className="flex h-full flex-col items-center justify-center gap-8 text-white text-lg">
              <a onClick={() => setOpen(false)} href="#home">Home</a>
              <a onClick={() => setOpen(false)} href="#sobre">Sobre</a>
              <a onClick={() => setOpen(false)} href="#projetos">Projetos</a>
              <a onClick={() => setOpen(false)} href="#servicos">Serviços</a>
              <a onClick={() => setOpen(false)} href="#contato">Contato</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
