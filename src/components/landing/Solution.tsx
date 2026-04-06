"use client"

import * as React from "react"

import { useTranslations } from "next-intl"

import { ArrowRightIcon, CheckCircleIcon } from "@phosphor-icons/react"
import { Variants, motion } from "framer-motion"

import { CtaButton } from "@/src/components/common/ctaButton"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export function Solution(): React.JSX.Element {
  const t = useTranslations("Solution")

  return (
    <section
      className="relative overflow-hidden bg-white px-6 py-32 md:py-56 lg:px-24"
      id="solucao"
    >
      <div className="relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 xl:grid-cols-12 gap-16 xl:gap-24"
        >
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div variants={fadeInUp} className="xl:mb-10">
              <div className="flex items-center gap-4 mb-8">
                <CheckCircleIcon weight="fill" className="text-[#623828] h-6 w-6" />
                <span className="font-sans text-xs font-bold uppercase tracking-[0.4em] text-[#623828]">
                  {t("presentation")}
                </span>
              </div>
              <h2 className="font-heading text-6xl font-bold leading-[0.95] text-[#623828] sm:text-7xl lg:text-9xl tracking-tighter">
                {t("headline").split(".")[0]}
                <span className="text-[#E67E22]">.</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="h-px w-32 bg-[#623828] xl:mb-12" />
              <p className="font-serif text-3xl italic leading-tight md:text-5xl lg:text-6xl max-w-2xl bg-linear-to-br from-[#E67E22] to-[#D35400] bg-clip-text text-transparent">
                {t("internalSolution")}
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-end">
            <motion.div
              variants={fadeInUp}
              className="md:p-14"
            >
              <p className="font-sans text-xl font-light leading-relaxed text-[#623828] mb-12 md:text-2xl">
                {t("argument")}
              </p>

              <div className="flex flex-col gap-8">
                <CtaButton size="default" className="w-full">
                  {t("cta")}
                </CtaButton>

                <div className="flex items-center gap-3 text-[#623828]/60 px-4">
                  <ArrowRightIcon weight="bold" className="h-4 w-4" />
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest">
                    {t("immediateAccess")}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
