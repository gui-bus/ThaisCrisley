"use client"

import * as React from "react"

import { useTranslations } from "next-intl"
import Image from "next/image"

import { Star } from "@phosphor-icons/react"
import { Variants, motion } from "framer-motion"

import { CtaButton } from "@/src/components/common/ctaButton"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

export function About(): React.JSX.Element {
  const t = useTranslations("About")
  const bio = t("bio")
  const paragraphs = bio.split("\n\n")

  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-white px-6 py-24 md:py-40 lg:px-24"
    >
      <div className="w-full">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 items-start gap-16 xl:grid-cols-12 lg:gap-24"
        >
          <motion.div
            variants={fadeInUp}
            className="relative xl:col-span-4 lg:sticky lg:top-32"
          >
            <div className="group relative aspect-3/4 w-full overflow-hidden rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(98,56,40,0.15)] transition-transform duration-700 hover:scale-[1.01]">
              <Image
                src="/images/thais.png"
                alt="Thaís Crisley"
                fill
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#623828]/20 to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-4 rounded-[2rem] border border-orange-500/10 bg-white/90 p-8 shadow-2xl backdrop-blur-xl md:-right-8"
            >
              <div className="flex flex-col gap-1.5">
                <span className="font-sans text-[10px] font-black uppercase tracking-[0.3em] text-orange-600">
                  {t("founder")}
                </span>
                <span className="font-heading text-2xl font-bold text-[#623828]">
                  {t("name")}
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-start xl:col-span-8"
          >
            <div className="mb-10 inline-flex items-center gap-3 rounded-full border border-orange-500/10 bg-orange-50/50 px-6 py-2.5">
              <Star weight="fill" className="h-4 w-4 text-orange-500" />
              <span className="font-sans text-[11px] font-black uppercase tracking-[0.4em] text-[#623828]">
                {t("theMentor")}
              </span>
            </div>

            <h2 className="mb-12 font-heading text-4xl font-bold leading-[1.15] text-[#623828] tracking-tighter">
              {t("behindTitle")} <br />
              <span className="italic font-serif font-light text-orange-500">
                {t("behindSubtitle")}
              </span>
            </h2>

            <div className="mb-16 h-px w-full bg-linear-to-r from-orange-500/20 to-transparent" />

            <div className="space-y-12">
              {paragraphs.map((paragraph, index) => {
                const isHighlight =
                  index === 0 ||
                  index === paragraphs.length - 2 ||
                  index === paragraphs.length - 1

                return (
                  <p
                    key={index}
                    className={`font-sans leading-relaxed text-[#623828]/80
                      ${isHighlight ? "text-2xl font-medium text-[#623828] tracking-tight" : "text-xl font-light"}
                      ${index === paragraphs.length - 1 ? "text-orange-600 font-serif italic pt-8 border-t border-orange-500/10" : ""}
                    `}
                  >
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="pt-16">
        <CtaButton
          size="lg"
          className="w-full sm:w-auto md:px-20 md:py-10 text-xl md:scale-110 hover:scale-115 transition-all duration-500"
        >
          {t("cta")}
        </CtaButton>
      </div>
    </section>
  )
}
