"use client"

import { motion, useInView } from "framer-motion"
import { Sparkles } from "lucide-react"
import { useRef } from "react"

interface Feature {
  title: string
  description: string
}

export default function KeyHighlights() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: "-100px" })

  return (
    <div className="min-h-screen w-full py-8 px-4 sm:py-12 md:px-8 lg:px-16">
      <div ref={containerRef} className="mx-auto max-w-6xl space-y-12 sm:space-y-20 md:space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl sm:rounded-2xl backdrop-blur-md border border-white/20 bg-white/60 p-6 sm:p-10 md:p-12 shadow-md"
        >
          <h1 className="mb-4 sm:mb-6 text-center font-serif text-2xl sm:text-4xl md:text-5xl tracking-wide">
            Key Highlights
          </h1>
          <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg">
            Exploring innovations in AI, security, computing, and global collaboration.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x:50 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className="relative rounded-xl sm:rounded-2xl bg-white/60 backdrop-blur-md border border-white/20 p-4 sm:p-6 md:p-8 shadow-md max-w-xl sm:max-w-full mx-auto"
            >
              <div className="flex gap-3 sm:gap-4 md:gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center">
                    <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-cyan-400" />
                  </div>
                </div>
                <div>
                  <h2 className="font-serif text-lg sm:text-xl md:text-2xl tracking-wide">
                    {feature.title}
                  </h2>
                  <p className="mt-1 text-xs sm:text-sm md:text-base text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const features: Feature[] = [
  {
    title: "Focus Area:",
    description: "Advanced computing, information security, AI, and emerging trends in communication technologies.",
  },
  {
    title: "Global Participation:",
    description: "International researchers, practitioners, and experts sharing cutting-edge research.",
  },
  {
    title: "Expert Sessions:",
    description: "Keynote addresses and technical talks from industry leaders and academic pioneers.",
  },
]
