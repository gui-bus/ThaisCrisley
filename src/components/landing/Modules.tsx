"use client"

import * as React from "react"

import { useTranslations } from "next-intl"

import { ArrowRightIcon, BookOpenIcon } from "@phosphor-icons/react"
import { Variants, motion } from "framer-motion"

import { CtaButton } from "@/src/components/common/ctaButton"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export function Modules(): React.JSX.Element {
  const t = useTranslations("Modules")

  return (
    <section
      className="relative overflow-hidden bg-white px-6 py-32 md:py-56 lg:px-24"
      id="cronograma"
    >
      <div className="relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <motion.div variants={fadeInUp} className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-8">
                <BookOpenIcon
                  weight="fill"
                  className="text-[#E67E22] h-6 w-6"
                />
                <span className="font-sans text-xs font-bold uppercase tracking-[0.4em] text-[#623828]/40">
                  {t("badge")}
                </span>
              </div>
              <h2 className="font-heading text-6xl font-bold leading-[0.95] text-[#623828] sm:text-7xl lg:text-9xl tracking-tighter">
                {t("title")}
                <span className="text-orange-500">.</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-4 lg:pb-4">
              <p className="font-sans text-xl font-light leading-relaxed text-[#623828]/60 border-l border-orange-500/20 pl-8 text-balance">
                {t("description")}
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col">
            {["0", "1", "2", "3", "4", "5", "6", "7", "8"].map((idx, i) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative py-12 border-b border-[#623828]/5 flex flex-col lg:flex-row lg:items-center justify-between gap-8 transition-all hover:bg-orange-50/30 px-4 md:px-12 rounded-3xl"
              >
                <div className="flex items-center gap-12 lg:w-1/2">
                  <span className="font-serif text-3xl italic text-orange-500/30 group-hover:text-orange-500 transition-colors duration-500 shrink-0">
                    0{i + 1}
                  </span>
                  <h4 className="font-heading text-3xl font-bold text-[#623828] md:text-4xl tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                    {t(`items.${idx}`).split(":")[0]}
                  </h4>
                </div>

                <div className="flex items-center gap-8 lg:w-1/2 lg:justify-end">
                  <p className="font-sans text-lg font-light leading-relaxed text-[#623828]/60 group-hover:text-[#623828] transition-colors max-w-md">
                    {t(`items.${idx}`).split(":")[1] || t(`items.${idx}`)}
                  </p>
                  <ArrowRightIcon
                    weight="bold"
                    className="h-6 w-6 text-orange-500 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 hidden md:block"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-16 w-full p-12 lg:p-24 bg-[#623828] rounded-[4rem] flex flex-col lg:flex-row items-center justify-between gap-16 relative overflow-hidden shadow-2xl"
          >
            <div className="relative z-10 text-center lg:text-left max-w-xl">
              <h3 className="font-heading text-4xl font-bold text-[#F3E3D3] mb-6 md:text-6xl tracking-tight">
                {t("closingTitle")} <br />
                <span className="text-orange-500 italic font-serif">
                  {t("closingSubtitle")}
                </span>
              </h3>
              <p className="font-sans text-xl font-light text-[#F3E3D3]/60 italic">
                {t("closingDescription")}
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-8">
              <CtaButton
                size="lg"
                className="w-full shadow-2xl hover:scale-115 transition-transform duration-500 scale-70! md:scale-100!"
              >
                {t("cta")}
              </CtaButton>

              <div className="flex items-center gap-3 text-[#F3E3D3]/30">
                <ArrowRightIcon weight="bold" className="h-4 w-4" />
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest">
                  {t("ctaHint")}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
