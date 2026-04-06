"use client"

import * as React from "react"

import { ClockIcon } from "@phosphor-icons/react"
import { motion } from "framer-motion"

import { PRICES, SITE_CONFIG, TARGET_DATE } from "@/src/config/constants"

export function PromoBanner(): React.JSX.Element | null {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isExpired, setIsExpired] = React.useState(!SITE_CONFIG.isPromoActive)

  React.useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = TARGET_DATE - now

      if (distance < 0) {
        clearInterval(timer)
        setIsExpired(true)
        return
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (isExpired) return null

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-1/2 -translate-x-1/2 z-1000 w-full bg-orange-500 py-2.5 px-6 text-white shadow-lg max-w-440"
    >
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <div className="flex items-center gap-2 text-center md:text-left">
          <ClockIcon weight="fill" className="h-4 w-4 animate-pulse shrink-0" />
          <span className="font-sans text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">
            PROMOÇÃO DE LANÇAMENTO ACABA EM:
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-baseline gap-1">
            <span className="font-heading text-xl font-bold">
              {timeLeft.days}
            </span>
            <span className="font-sans text-[8px] font-bold opacity-60 uppercase">
              d
            </span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-baseline gap-1">
            <span className="font-heading text-xl font-bold">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="font-sans text-[8px] font-bold opacity-60 uppercase">
              h
            </span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-baseline gap-1">
            <span className="font-heading text-xl font-bold">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="font-sans text-[8px] font-bold opacity-60 uppercase">
              m
            </span>
          </div>
          <div className="h-4 w-px bg-white/20" />
          <div className="flex items-baseline gap-1 text-orange-100">
            <span className="font-heading text-xl font-bold">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="font-sans text-[8px] font-bold opacity-60 uppercase">
              s
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-2 border-l border-white/20 pl-8">
          <span className="font-sans text-[10px] font-black uppercase tracking-widest">
            De <span className="line-through opacity-60">R$ {PRICES.original}</span> por{" "}
            <span className="text-white brightness-125 underline underline-offset-4">
              R$ {PRICES.promo}
            </span>
          </span>
        </div>
      </div>
    </motion.div>
  )
}
