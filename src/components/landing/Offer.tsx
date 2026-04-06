"use client"

import * as React from "react"

import { useTranslations } from "next-intl"
import Image from "next/image"

import { SealCheckIcon, ShieldCheckIcon } from "@phosphor-icons/react"
import { Variants, motion } from "framer-motion"

import { CtaButton } from "@/src/components/common/ctaButton"
import { SITE_CONFIG } from "@/src/config/constants"

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

export function Offer(): React.JSX.Element {
  const t = useTranslations("Offer")
  const [isPromoActive, setIsPromoActive] = React.useState(false)

  React.useEffect(() => {
    setIsPromoActive(SITE_CONFIG.isPromoActive)
  }, [])

  return (
    <section
      className="relative overflow-hidden bg-white px-6 py-32 md:py-56 lg:px-24"
      id="oferta"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full h-full flex items-center justify-center">
        <span className="font-heading text-[25vw] font-black text-slate-50 uppercase leading-none tracking-tighter opacity-60">
          {t("badge").toUpperCase()}
        </span>
      </div>

      <div className="relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-start"
        >
          <div className="lg:col-span-7 flex flex-col gap-16">
            <motion.div variants={fadeInUp} className="flex flex-col gap-8">
              <span className="block font-sans text-xs font-bold uppercase tracking-[0.6em] text-orange-500">
                {t("badge")}
              </span>
              <h2 className="font-heading text-6xl font-bold leading-[0.95] text-[#623828] sm:text-8xl lg:text-9xl tracking-tighter">
                {t("title")} <br />
                <span className="bg-linear-to-br from-[#E67E22] to-[#D35400] bg-clip-text text-transparent italic font-serif pr-4">
                  {t("subtitle")}
                </span>
              </h2>
              <p className="max-w-xl font-sans text-xl font-light leading-relaxed text-[#623828]/60 italic border-l-2 border-orange-500/20 pl-8">
                {t("description")}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-10">
              <h3 className="font-heading text-2xl font-bold text-[#623828] uppercase tracking-tight">
                {t("deliverablesTitle")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {["0", "1", "2", "3", "4", "5"].map((idx, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <SealCheckIcon
                      weight="fill"
                      className="text-orange-500 h-6 w-6 shrink-0"
                    />
                    <span className="font-sans text-lg font-medium text-[#623828]/70 group-hover:text-[#623828] transition-colors">
                      {t(`deliverables.${idx}`)}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="pt-12 border-t border-slate-100 max-w-xl"
            >
              <div className="flex flex-col-reverse md:flex-row items-center gap-5">
                <Image
                  src="/images/selo.png"
                  alt="Selo de garantia 7 dias"
                  width={100}
                  height={100}
                />

                <p className="font-sans text-lg font-light leading-relaxed text-[#623828]/50">
                  <span className="text-[#623828] font-bold">
                    {t("guaranteeTitle")}
                  </span>{" "}
                  {t("guaranteeDescription")}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="lg:col-span-5 sticky top-32"
          >
            <div className="py-10 px-5 md:p-16 bg-[#623828] rounded-[4rem] shadow-[0_60px_100px_-20px_rgba(45,27,20,0.3)] relative overflow-hidden flex flex-col items-center text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[100px] rounded-full" />

              {isPromoActive && (
                <span className="relative z-10 mb-12 inline-block px-6 py-2 rounded-full border border-white/10 font-sans text-[10px] font-black uppercase tracking-widest text-orange-500">
                  {t("launchCondition")}
                </span>
              )}

              <div className="relative z-10 flex flex-col items-center mb-16">
                {isPromoActive && (
                  <span className="font-sans text-xl font-light text-[#F3E3D3]/20 line-through tracking-[0.2em]">
                    {t("originalPrice")}
                  </span>
                )}

                <div className="flex items-center gap-4">
                  <span className="font-heading text-4xl font-bold text-white">
                    {t("priceCurrency")}
                  </span>
                  <h3 className="font-heading text-9xl md:text-[11rem] font-bold leading-none text-white tracking-tighter">
                    {isPromoActive
                      ? t("promotionalPrice").replace(/[^0-9]/g, "")
                      : t("originalPrice").replace(/[^0-9]/g, "")}
                  </h3>
                  <div className="flex flex-col items-start">
                    <span className="font-heading text-4xl font-bold text-white">
                      {t("priceDecimals")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 w-full flex flex-col gap-12">
                <CtaButton
                  size="lg"
                  className="w-full shadow-2xl hover:scale-110 transition-transform duration-500"
                >
                  {t("ctaMain")}
                </CtaButton>

                <div className="flex flex-col items-center gap-6">
                  <div className="flex items-center gap-3 text-white/30">
                    <ShieldCheckIcon weight="bold" className="h-5 w-5" />
                    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em]">
                      {t("securePayment")}
                    </span>
                  </div>
                  <div className="relative h-6 w-24 opacity-30 grayscale invert brightness-0">
                    <Image
                      src="/images/Kiwify_logo_horizontal.png"
                      alt="Kiwify"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
