"use client"

import { useState } from "react"
import IntroAnimation from "@/components/IntroAnimation"
import Image from "next/image"
import SideMenuDesktop from "@/components/SideMenuDesktop"
import SideMenuMobile from "@/components/SideMenuMobile"
import ScrollIndicator from "@/components/ScrollIndicator"


export default function Home() {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <>
      <IntroAnimation onFinish={() => setMenuVisible(true)} />

      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Arquitetura Pajaro"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <ScrollIndicator />


        {/* Desktop */}
        <div className="hidden md:block">
          <SideMenuDesktop visible={menuVisible} />
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <SideMenuMobile />
        </div>
      </section>
    </>
  )
}
