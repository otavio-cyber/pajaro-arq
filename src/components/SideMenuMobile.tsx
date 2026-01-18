"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function SideMenuMobile() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Toggle Button */}
      <button
  onClick={() => setOpen(!open)}
  className="fixed right-5 top-[40px] z-50 flex h-10 w-10 items-center justify-center bg-[#1D1818] md:hidden"
>

        <span className="relative block h-4 w-4">
          <span
            className={`absolute left-0 top-0 h-px w-full bg-[#848283] transition-transform duration-300 ${
              open ? "rotate-45 top-1/2" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 h-px w-full bg-[#848283] transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 bottom-0 h-px w-full bg-[#848283] transition-transform duration-300 ${
              open ? "-rotate-45 bottom-1/2" : ""
            }`}
          />
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30 bg-black/30 md:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Menu */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="fixed left-0 top-0 z-40 h-screen w-[55vw] bg-[#1D1818] pt-32 md:hidden"

            >
              <nav className="flex flex-col gap-8 px-8 text-[#848283]">
                <a href="#home" onClick={() => setOpen(false)}>
                  HOME
                </a>
                <a href="#sobre" onClick={() => setOpen(false)}>
                  SOBRE
                </a>
                <a href="#projetos" onClick={() => setOpen(false)}>
                  PROJETOS
                </a>
                <a href="#servicos" onClick={() => setOpen(false)}>
                  SERVIÇOS
                </a>
                <a href="#contato" onClick={() => setOpen(false)}>
                  CONTATO
                </a>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
