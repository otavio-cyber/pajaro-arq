"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const slides = [
  {
    desktop: "/hero.jpg",
    mobile: "/hero-mobile.jpg",
    text: null,
  },
  {
    desktop: "/hero-2.jpg",
    mobile: "/hero-mobile2.jpg",
    text:
      "Arquitetura que nasce do silêncio, respeita o espaço e revela significado em cada linha construída.",
  },
  {
    desktop: "/hero-3.jpg",
    mobile: "/hero-mobile3.jpg",
    text:
      "Projetos autorais pensados para atravessar o tempo com identidade, equilíbrio e precisão estética.",
  },
]

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [])

  const slide = slides[index]

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={isMobile ? slide.mobile : slide.desktop}
            alt="Hero slide"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          {/* Texto */}
          {slide.text && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              className="absolute inset-0 m-[6vw] flex items-center justify-center"
            >
              <motion.div
                className="
                  bg-[#1D1818]
                  backdrop-blur-sm
                  w-full
                  h-full
                  max-w-[25vw]
                  max-h-[75vh]
                  flex
                  items-center
                  justify-center
                  px-10
                  py-12
                "
              >
                <AnimatedText text={slide.text} />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function AnimatedText({ text }: { text: string }) {
  return (
    <h1 className="max-w-xl font-serif text-4xl leading-relaxed text-[#848283]">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: i * 0.033, // ~10% mais lento
            duration: 0.45,
          }}
        >
          {char}
        </motion.span>
      ))}
    </h1>
  )
}
