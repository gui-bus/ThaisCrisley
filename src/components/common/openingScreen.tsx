"use client"

import * as React from "react"

import Image from "next/image"

import { AnimatePresence, motion } from "framer-motion"

export function OpeningScreen(): React.JSX.Element {
  const [isVisible, setIsVisible] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center overflow-hidden">
          {/* Background Panels - Split Exit Animation */}
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1], delay: 0.2 }}
            className="absolute inset-x-0 top-0 h-1/2 bg-white pointer-events-auto"
          />
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1], delay: 0.2 }}
            className="absolute inset-x-0 bottom-0 h-1/2 bg-white pointer-events-auto"
          />

          {/* Logo Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center gap-12"
          >
            <div className="relative h-24 w-48 md:h-32 md:w-64">
              <Image
                src="/logo/logo.png"
                alt="Apareça e Venda"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col items-center gap-6">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 1.5, ease: "circOut" }}
                className="h-[1px] w-48 bg-orange-500/20"
              />
              <span className="font-sans text-[10px] font-bold uppercase tracking-[1em] text-[#2D1B14]/30 ml-[1em]">
                Carregando
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
