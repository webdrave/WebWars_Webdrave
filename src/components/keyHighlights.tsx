"use client"
interface Feature {
  title: string
  description: string
}

import { motion, useInView } from "framer-motion"
import { Sparkles } from "lucide-react"
import { useRef } from "react"

export default function KeyHighlights() {
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { margin: "-100px" })

  return (
    <div className="min-h-screen w-full py-8 sm:py-12 px-4">
      <div ref={containerRef} className="mx-auto max-w-6xl space-y-16 sm:space-y-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl sm:rounded-3xl backdrop-blur-md border border-white/20 bg-white/60 p-8 sm:p-12 shadow-sm"
        >
          <h1 className="mb-4 sm:mb-6 text-center font-serif text-3xl sm:text-[45px] md:text-[55px] tracking-wide">Key Highlights</h1>
          <p className="text-center text-gray-600 text-sm sm:text-base">
            Exploring innovations in AI, security, computing, and global collaboration.
          </p>
        </motion.div>
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            transition={{ duration: 0.6, delay: index * 0.5 }}
            className="relative rounded-2xl sm:rounded-3xl bg-white/60 backdrop-blur-md border border-white/20 p-4 sm:p-6 shadow-sm max-w-2xl mx-auto"
          >
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center">
                  <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-400" />
                </div>
              </div>
              <div>
                <h2 className="font-serif text-lg sm:text-xl tracking-wide">{feature.title}</h2>
                <p className="mt-1 text-xs sm:text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const features: Feature[] = [
  {
    title: "Focus Area :",
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