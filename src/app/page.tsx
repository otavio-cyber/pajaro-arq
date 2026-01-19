"use client"

import { useState } from "react"
import IntroAnimation from "@/components/IntroAnimation"
import Image from "next/image"
import SideMenuDesktop from "@/components/SideMenuDesktop"
import SideMenuMobile from "@/components/SideMenuMobile"
import ScrollIndicator from "@/components/ScrollIndicator"
import HeroSlider from "@/components/HeroSlider"


export default function Home() {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <>
      <IntroAnimation onFinish={() => setMenuVisible(true)} />

      <section className="relative h-screen w-full overflow-hidden">
        <HeroSlider />

        <ScrollIndicator />

        {/* Desktop */}
        <div className="hidden md:block">
          <SideMenuDesktop visible={menuVisible} />
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <SideMenuMobile />
        </div>

        {/* Scroll indicator */}
        <ScrollIndicator />

        {/* Menu Desktop */}
        <div className="hidden md:block">
          <SideMenuDesktop visible={menuVisible} />
        </div>

        {/* Menu Mobile */}
        <div className="md:hidden">
          <SideMenuMobile />
        </div>

        {/* Logo Mobile */}
        <div className="fixed left-5 top-5 z-40 md:hidden">
          <Image
            src="/pajaro-bird.png"
            alt="Pajaro logo"
            width={0}
            height={0}
            sizes="20vw"
            className="w-[20vw] h-auto"
            priority
          />
        </div>
      </section>
    </>
  )
}
