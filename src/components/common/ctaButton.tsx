"use client"

import * as React from "react"

import { ArrowRightIcon } from "@phosphor-icons/react"
import { motion } from "framer-motion"

import { Button } from "@/src/components/ui/button"

import { cn } from "@/src/lib/utils/utils"

import { SITE_CONFIG } from "@/src/config/constants"

interface CtaButtonProps {
  children: React.ReactNode
  className?: string
  size?: "default" | "sm" | "lg" | "icon"
}

export function CtaButton({
  children,
  className,
  size = "lg",
}: CtaButtonProps): React.JSX.Element {
  return (
    <div className={cn("relative", className)}>
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -inset-4 rounded-full bg-orange-500/20 blur-xl"
      />

      <Button
        asChild
        size={size}
        className={cn(
          "group relative h-14 w-full overflow-hidden rounded-full bg-linear-to-br from-[#E67E22] to-[#D35400] px-12 text-lg font-bold text-white shadow-2xl shadow-orange-900/20 transition-all hover:scale-[1.05] hover:shadow-orange-900/30 active:scale-[0.98]",
          size === "lg" && "h-20 px-14 text-xl"
        )}
      >
        <a href={SITE_CONFIG.ctaUrl} target="_blank" rel="noopener noreferrer">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 1,
            }}
            className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
          />

          <span className="relative z-10 flex items-center gap-3">
            {children}
            <ArrowRightIcon
              weight="bold"
              className="h-6 w-6 transition-transform group-hover:translate-x-2"
            />
          </span>
        </a>
      </Button>
    </div>
  )
}
