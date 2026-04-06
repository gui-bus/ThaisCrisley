"use client"

import * as React from "react"

import { useTranslations } from "next-intl"
import Image from "next/image"

import { PlayIcon, XIcon } from "@phosphor-icons/react"
import { AnimatePresence, Variants, motion } from "framer-motion"

import { CtaButton } from "@/src/components/common/ctaButton"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero(): React.JSX.Element {
  const t = useTranslations("Hero")
  const [isVideoOpen, setIsVideoOpen] = React.useState(false)

  return (
    <section
      className="relative w-full flex items-center overflow-hidden bg-white pt-52 md:pt-32 px-6 lg:px-24"
      id="inicio"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-150 h-150 bg-orange-50 blur-[120px] rounded-full opacity-60" />
        <div className="absolute top-1/2 -right-1/4 w-100 h-100 bg-orange-100/30 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <motion.h1
              variants={itemVariants}
              className="mb-8 font-heading text-5xl font-bold leading-[0.95] tracking-tighter text-[#623828] sm:text-8xl xl:text-[9rem]"
            >
              {t("headlineTitle")} <br />
              <span className="bg-linear-to-br from-[#E67E22] to-[#D35400] bg-clip-text text-transparent italic font-serif pr-4">
                {t("headlineSubtitle")}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-12 max-w-2xl font-sans text-lg font-light leading-relaxed text-[#623828]/60 md:text-2xl border-l-2 border-orange-500/20 pl-8"
            >
              {t("subHeadline")}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col xl:flex-row xl:items-center gap-8 w-full"
            >
              <CtaButton
                size="lg"
                className="w-full sm:w-auto shadow-2xl shadow-orange-900/10"
              >
                {t("cta")}
              </CtaButton>
              {/* 
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group flex items-center gap-4 transition-all hover:translate-x-1 cursor-pointer"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-orange-100 bg-white text-[#E67E22] shadow-sm transition-all group-hover:bg-[#E67E22] group-hover:text-white group-hover:border-[#E67E22]">
                  <PlayIcon weight="fill" className="h-6 w-6 ml-1" />
                </div>
                <span className="font-sans text-sm font-bold uppercase tracking-[0.2em] text-[#623828] underline-offset-8 group-hover:underline">
                  {t("watchVideo")}
                </span>
              </button> */}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-16 flex items-center gap-4"
            >
              <div className="flex -space-x-3">
                {[26, 32, 5].map((id) => (
                  <div
                    key={id}
                    className="h-10 w-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden relative"
                  >
                    <Image
                      src={`https://i.pravatar.cc/150?img=${id}`}
                      alt={t("studentAlt")}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
              <p className="font-sans text-sm font-semibold text-[#623828]/60">
                <span className="text-[#623828] font-bold">
                  {t("studentsCount")} {t("studentsUnlocked")}
                </span>{" "}
                {t("unlockedLabel")}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative lg:h-200 flex items-end justify-center lg:justify-end"
          >
            <div className="relative w-full h-125 md:h-165.5 lg:h-full lg:w-[110%] flex items-end">
              <Image
                src="/images/thais.png"
                alt="Thaís Crisley - Apareça e Venda"
                fill
                className="object-contain object-bottom transition-transform duration-700 hover:scale-[1.02]"
                priority
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 md:top-1/2 xl:top-1/4 -right-8 p-6 rounded-3xl"
            >
              <div className="flex flex-col items-center gap-1">
                <span className="text-2xl font-bold text-[#623828]">
                  {t("name")}
                </span>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#D35400] w-52! text-center">
                  {t("mentoraLabel")}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      {/* 
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4 md:p-12"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative aspect-video w-full max-w-7xl overflow-hidden rounded-3xl bg-neutral-50 shadow-2xl border border-slate-100"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-8 left-8 z-10 flex h-14 w-14 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-110 cursor-pointer shadow-xl"
              >
                <XIcon weight="bold" className="h-6 w-6" />
              </button>

              <div className="flex h-full w-full items-center justify-center bg-black">
                <video
                  src="/videos/heroVideo.mp4"
                  controls
                  autoPlay
                  className="h-full w-full object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </section>
  )
}
