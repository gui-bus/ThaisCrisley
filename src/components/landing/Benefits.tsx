"use client"

import * as React from "react"

import { useTranslations } from "next-intl"

import { ArrowUpRightIcon } from "@phosphor-icons/react"
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
      staggerChildren: 0.15,
    },
  },
}

export function Benefits(): React.JSX.Element {
  const t = useTranslations("Benefits")

  return (
    <section
      className="relative overflow-hidden bg-white px-6 py-32 md:py-56 lg:px-24"
      id="beneficios"
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
              <span className="mb-6 block font-sans text-xs font-bold uppercase tracking-[0.4em] text-[#E67E22]">
                {t("badge")}
              </span>
              <h2 className="font-heading text-5xl font-bold leading-[0.95] text-[#623828] sm:text-7xl lg:text-9xl tracking-tighter">
                {t("title").split(" ")[0]} {t("title").split(" ")[1]}
                <br />
                <span className="bg-linear-to-br from-[#E67E22] to-[#D35400] bg-clip-text text-transparent italic font-serif pr-4">
                  {t("title").split(" ").slice(2).join(" ")}
                </span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-4 lg:pb-4">
              <p className="font-sans text-xl font-light leading-relaxed text-[#623828]/60 border-l border-[#623828]/10 pl-8">
                {t("description")}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-12 flex flex-col">
              {["0", "1", "2"].map((index, i) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative py-12 border-b border-[#623828]/5 flex flex-col md:flex-row md:items-center justify-between gap-8 transition-colors hover:bg-orange-50/30 px-4 md:px-8 rounded-2xl"
                >
                  <div className="flex items-center gap-12">
                    <span className="font-heading text-2xl italic text-[#E67E22]/30 group-hover:text-[#E67E22] transition-colors duration-500">
                      0{i + 1}
                    </span>
                    <h4 className="font-heading text-3xl font-bold text-[#623828] md:text-5xl lg:text-6xl tracking-tight">
                      {t(`items.${index}`)}
                    </h4>
                  </div>

                  <div className="flex items-center gap-8 max-w-md">
                    <p className="font-sans text-lg font-light leading-relaxed text-[#623828]/60 group-hover:text-[#623828] transition-colors text-end">
                      {t(`list.${index}`)}
                    </p>
                    <ArrowUpRightIcon
                      weight="bold"
                      className="h-8 w-8 text-[#E67E22]/0 group-hover:text-[#E67E22] transition-all duration-500 -translate-x-4 group-hover:translate-x-0"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="relative w-full overflow-hidden rounded-[4rem] bg-[#623828] px-8 py-24 md:px-24 md:py-32 space-y-16!"
          >
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
              <div className="text-left">
                <span className="mb-8 inline-block font-sans text-xs font-bold uppercase tracking-[0.5em] text-[#F3E3D3]/40">
                  {t("differentialTitle")}
                </span>
                <p className="font-heading text-4xl font-bold italic leading-[1.1] text-[#F3E3D3] md:text-6xl lg:text-7xl">
                  &ldquo;{t("differential")}&rdquo;
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-8 shrink-0">
              <CtaButton size="lg" className="w-full">
                {t("cta")}
              </CtaButton>
              <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#F3E3D3]/30">
                {t("guarantee")}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[#623828]/5 to-transparent" />
    </section>
  )
}
