"use client"
import React from 'react'
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useEffect } from "react"


function Header() {
    const logos = [
        { src: "/logo/gulogo.png", alt: "Galgotias University Logo" },
        { src: "/logo/iccsai_logo.jpeg", alt: "ICCSAI Logo" },
        { src: "/logo/ieee.png", alt: "IEEE Logo" },
        { src: "/logo/gustudentchapter.png", alt: "GU Student Chapter Logo" },
        { src: "/logo/sdg.png", alt: "SDG Logo" },
        { src: "/logo/wie.png", alt: "WIE Logo" }
      ]
    
      const [currentLogo, setCurrentLogo] = useState(0)
    
      useEffect(() => {
        const timer = setInterval(() => {
          setCurrentLogo((prev) => (prev + 1) % logos.length)
        }, 2000)
    
        return () => clearInterval(timer)
      }, [])
    
  return (
    <header className="absolute top-0 left-0 w-full z-10">
            <nav className="mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2">
              <div className="flex flex-wrap items-center justify-center gap-4 mb-4 md:mb-0">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentLogo}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.3 }}
                  >
                    <Image
                      src={logos[currentLogo].src}
                      alt={logos[currentLogo].alt}
                      width={120}
                      height={40}
                      className="h-8 md:h-10 w-auto"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                <Link href="/" className="text-sm text-[#222222] hover:text-[#787878]/80">
                  Home
                </Link>
                <Link href="/guidelines" className="text-sm text-[#222222] hover:text-[#787878]/80">
                  Guidelines
                </Link>
                <Link href="/iccsai-2023" className="text-sm text-[#222222] hover:text-[#787878]/80">
                  ICCSAI - 2023
                </Link>
                <Link href="/committee" className="text-sm text-[#222222] hover:text-[#787878]/80">
                  Committee
                </Link>
                <Link href="/registration" className="text-sm text-[#222222] hover:text-[#787878]/80">
                  Registration
                </Link>
                <button className="border-[#787878] text-[#222222] hover:bg-[#787878]/10 px-4 py-2 text-sm">
                  Submit Your Paper
                </button>
              </div>
            </nav>
          </header>
  )
}

export default Header