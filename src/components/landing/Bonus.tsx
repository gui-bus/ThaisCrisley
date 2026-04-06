"use client"

import * as React from "react"

import { useTranslations } from "next-intl"
import Image from "next/image"

import { GiftIcon, SealCheckIcon } from "@phosphor-icons/react"
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

export function Bonus(): React.JSX.Element {
  const t = useTranslations("Bonus")

  return (
    <section
      className="relative overflow-hidden bg-white px-6 py-32 md:py-56 lg:px-24"
      id="bonus"
    >
      <div className="relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-24 md:gap-32"
        >
          <motion.div variants={fadeInUp} className="lg:col-span-8">
            <div className="flex items-center gap-4 mb-8">
              <GiftIcon weight="fill" className="text-orange-500 h-6 w-6" />
              <span className="font-sans text-xs font-bold uppercase tracking-[0.4em] text-orange-500/60">
                {t("badge")}
              </span>
            </div>
            <h2 className="font-heading text-6xl font-bold leading-[0.95] text-[#623828] sm:text-7xl lg:text-9xl tracking-tighter">
              {t("title")}
              <span className="text-orange-500">.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <motion.div variants={fadeInUp} className="lg:col-span-6 relative">
              <div className="relative aspect-3/4 w-full">
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative h-full w-full max-w-5xl overflow-hidden rounded-tr-[8rem] rounded-bl-[8rem] shadow-2xl"
                >
                  <Image
                    src="/images/ebook.jpeg"
                    alt={t("subtitle")}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="lg:col-span-6 flex flex-col gap-12"
            >
              <div className="flex flex-col gap-6">
                <h3 className="font-heading text-4xl font-bold leading-tight text-[#623828] md:text-6xl tracking-tight uppercase">
                  {t("subtitle")}
                </h3>
                <p className="font-sans text-xl font-light leading-relaxed text-[#623828]/70 max-w-2xl">
                  {t("description")}
                </p>

                <motion.div
                  variants={fadeInUp}
                  className="lg:col-span-4 lg:pb-4"
                >
                  <p className="font-sans text-xl font-light leading-relaxed text-[#623828]/60 border-l border-orange-500/30 pl-8">
                    {t("giftDescription")}
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-t border-white/5">
                {["0", "1", "2", "3"].map((_, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <SealCheckIcon
                      weight="fill"
                      className="text-orange-500 h-6 w-6"
                    />
                    <span className="font-sans text-sm font-bold uppercase tracking-widest text-[#623828]/60 group-hover:text-[#623828] transition-colors">
                      {t(`items.${i}`)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8">
                <CtaButton size="lg" className="w-full sm:w-auto">
                  {t("cta")}
                </CtaButton>
                <div className="flex flex-col">
                  <span className="font-sans text-[10px] font-black uppercase tracking-widest text-orange-500">
                    {t("originalPriceLabel")}
                  </span>
                  <span className="font-heading text-xl text-[#623828]/40 line-through">
                    {t("originalPriceValue")}
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
