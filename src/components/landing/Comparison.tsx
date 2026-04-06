"use client"

import * as React from "react"

import { useTranslations } from "next-intl"

import { ArrowRightIcon, MinusIcon, PlusIcon } from "@phosphor-icons/react"
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

export function Comparison(): React.JSX.Element {
  const t = useTranslations("Comparison")

  return (
    <section
      className="relative overflow-hidden bg-white px-6 py-32 md:py-56 lg:px-24"
      id="transformacao"
    >
      <div className="relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="mb-32 text-center">
            <span className="mb-6 block font-sans text-xs font-bold uppercase tracking-[0.4em] text-[#623828]/40">
              {t("badge")}
            </span>
            <h2 className="font-heading text-6xl font-bold leading-[0.95] text-[#623828] sm:text-7xl lg:text-9xl tracking-tighter">
              {t("title")} <br />
              <span className="bg-linear-to-br from-[#E67E22] to-[#D35400] bg-clip-text text-transparent italic font-serif pr-4">
                {t("subtitle")}
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 w-full border-t border-b border-[#623828]/10">
            <motion.div
              variants={fadeInUp}
              className="py-20 lg:pr-20 border-b lg:border-b-0 lg:border-r border-[#623828]/10"
            >
              <div className="flex flex-col gap-16">
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-[#623828]/20" />
                  <span className="font-sans text-xs font-black uppercase tracking-[0.4em] text-[#623828]/40">
                    {t("before.title")}
                  </span>
                </div>

                <div className="flex flex-col gap-12">
                  {["0", "1", "2", "3"].map((idx) => (
                    <div
                      key={idx}
                      className="group flex items-start gap-6 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                    >
                      <MinusIcon
                        weight="bold"
                        className="h-6 w-6 text-[#623828] mt-1 shrink-0"
                      />
                      <span className="font-sans text-2xl font-light text-[#623828] md:text-3xl lg:text-4xl">
                        {t(`before.items.${idx}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="py-20 lg:pl-20">
              <div className="flex flex-col gap-16">
                <div className="flex items-center gap-4">
                  <div className="h-px w-8 bg-orange-500" />
                  <span className="font-sans text-xs font-black uppercase tracking-[0.4em] text-orange-500">
                    {t("after.title")}
                  </span>
                </div>

                <div className="flex flex-col gap-12">
                  {["0", "1", "2", "3"].map((idx) => (
                    <div key={idx} className="group flex items-start gap-6">
                      <PlusIcon
                        weight="bold"
                        className="h-6 w-6 text-orange-500 mt-1 shrink-0 group-hover:rotate-90 transition-transform duration-500"
                      />
                      <span className="font-heading text-2xl font-bold text-[#623828] md:text-3xl lg:text-4xl tracking-tight">
                        {t(`after.items.${idx}`)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="mt-32 w-full flex flex-col lg:flex-row items-center justify-between gap-12 p-12 lg:p-20 bg-[#623828] rounded-[4rem] overflow-hidden relative shadow-2xl"
          >
            <div className="relative z-10 max-w-xl text-center lg:text-left">
              <p className="font-heading text-2xl font-light italic leading-tight text-[#F3E3D3] md:text-5xl">
                {t("optionalBlock")} <br />
                <span className="text-orange-500 not-italic font-sans font-bold uppercase text-xl md:text-2xl tracking-[0.2em]">
                  {t("inevitableResult")}
                </span>
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-6">
              <CtaButton size="lg" className="scale-60! md:scale-100!">{t("cta")}</CtaButton>

              <div className="flex items-center gap-3 text-[#F3E3D3]/40">
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
