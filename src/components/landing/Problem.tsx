"use client"

import * as React from "react"

import { useTranslations } from "next-intl"

import {
  CameraSlashIcon,
  ChartLineDownIcon,
  QuotesIcon,
  UserFocusIcon,
  WarningCircleIcon,
} from "@phosphor-icons/react"
import { Variants, motion } from "framer-motion"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export function Problem(): React.JSX.Element {
  const t = useTranslations("Problem")

  const symptomsIcons = [
    <CameraSlashIcon key="0" weight="fill" className="h-10 w-10" />,
    <WarningCircleIcon key="1" weight="fill" className="h-10 w-10" />,
    <UserFocusIcon key="2" weight="fill" className="h-10 w-10" />,
    <ChartLineDownIcon key="3" weight="fill" className="h-10 w-10" />,
  ]

  return (
    <section
      className="relative overflow-hidden bg-[#2D1B14] px-6 py-32 md:py-56 lg:px-24"
      id="problema"
    >
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <motion.div variants={fadeInUp} className="lg:col-span-8">
              <span className="mb-8 flex items-center gap-4 font-sans text-xs font-bold uppercase tracking-[0.5em] text-orange-500/60">
                <span className="h-px w-12 bg-orange-500/40" />
                {t("badge")}
              </span>
              <h2 className="font-heading text-5xl font-bold leading-[0.95] text-[#F3E3D3] sm:text-7xl lg:text-8xl xl:text-9xl">
                {t("intro").split("...")[0]}
                <span className="text-orange-500">...</span>
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-4 lg:pb-4">
              <p className="font-sans text-xl font-light leading-relaxed text-[#F3E3D3]/60 italic border-l-2 border-orange-500/30 pl-8">
                {t("subIntro")}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["0", "1", "2", "3"].map((index, i) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group relative flex flex-col p-10 rounded-[2.5rem] bg-white/3 border border-white/10 backdrop-blur-md overflow-hidden transition-all hover:bg-white/8 hover:border-orange-500/30"
              >
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/5 blur-2xl group-hover:bg-orange-500/20 transition-all" />
                <div className="mb-12 text-orange-500/40 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-500">
                  {symptomsIcons[i]}
                </div>
                <h4 className="font-sans text-lg font-semibold text-[#F3E3D3] leading-snug group-hover:text-white transition-colors">
                  {t(`symptoms.${index}`)}
                </h4>
              </motion.div>
            ))}
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-16 items-center md:py-20">
            <motion.div variants={fadeInUp} className="lg:col-span-5 relative">
              <div className="relative z-10 p-12 rounded-[3rem] bg-[#623828] border border-white/5 shadow-2xl overflow-hidden group">
                <QuotesIcon
                  weight="fill"
                  className="absolute -top-4 -left-4 h-32 w-32 text-white/5 -rotate-12"
                />
                <p className="relative font-heading text-2xl font-light italic leading-relaxed text-[#F3E3D3]">
                  {t("context")}
                </p>
              </div>
              <div className="absolute -inset-4 bg-orange-500/10 blur-3xl -z-10 rounded-full" />
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-7 mt-5">
              <div className="flex flex-col gap-12">
                <h3 className="font-heading text-4xl font-bold text-[#F3E3D3] lg:text-6xl">
                  {t("title")}
                </h3>
                <p className="font-sans text-lg text-[#F3E3D3]/50 max-w-xl">
                  {t("strategyInsight")}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full md:py-24 text-center"
          >
            <div className="relative z-10 inline-block px-12 py-8">
              <span className="mb-6 block font-sans text-xs font-black uppercase tracking-[0.6em] text-orange-500">
                {t("finalInsightBadge")}
              </span>
              <h5 className="font-heading text-4xl font-bold italic text-white md:text-6xl lg:text-7xl xl:text-8xl drop-shadow-2xl">
                &ldquo;{t("insight")}&rdquo;
              </h5>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
