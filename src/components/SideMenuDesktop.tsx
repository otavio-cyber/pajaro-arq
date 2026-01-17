"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function SideMenuDesktop({
    visible,
}: {
    visible: boolean
}) {
    return (
        <AnimatePresence>
            {visible && (
                <motion.aside
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                    className="fixed left-0 top-0 z-40 flex h-screen w-[150px] flex-col items-center bg-[#1D1818] py-6"
                >
                    {/* Logo */}
                    <div className="mb-12">
                        <Image
                            src="/pajaro-bird.png"
                            alt="Pajaro logo"
                            width={120}
                            height={120}
                            priority
                        />
                    </div>

                    {/* Menu */}
<nav className="flex flex-col items-center gap-8 text-sm tracking-wide">
  <a
    href="#home"
    className="text-white transition-transform duration-300 ease-out hover:scale-[1.04]"
  >
    HOME
  </a>

  <a
    href="#sobre"
    className="text-[#848283] transition-transform duration-300 ease-out hover:scale-[1.04]"
  >
    SOBRE
  </a>

  <a
    href="#projetos"
    className="text-[#848283] transition-transform duration-300 ease-out hover:scale-[1.04]"
  >
    PROJETOS
  </a>

  <a
    href="#servicos"
    className="text-[#848283] transition-transform duration-300 ease-out hover:scale-[1.04]"
  >
    SERVIÇOS
  </a>

  <a
    href="#contato"
    className="text-[#848283] transition-transform duration-300 ease-out hover:scale-[1.04]"
  >
    CONTATO
  </a>
</nav>

                </motion.aside>
            )}
        </AnimatePresence>
    )
}
