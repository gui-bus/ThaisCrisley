"use client"

import * as React from "react"

import { useTranslations } from "next-intl"

import { Plus } from "@phosphor-icons/react"
import { AnimatePresence, motion } from "framer-motion"

export function Faq(): React.JSX.Element {
  const t = useTranslations("Faq")
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const items = ["0", "1", "2", "3", "4"]

  return (
    <section className="bg-white px-6 py-32 lg:px-24" id="faq">
      <div className="mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          <span className="font-sans text-xs font-bold uppercase tracking-[0.4em] text-orange-500/60">
            {t("badge")}
          </span>
          <h2 className="font-heading text-5xl font-bold text-[#623828] md:text-7xl tracking-tighter">
            {t("title")}
            <span className="text-orange-500">.</span>
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col gap-4">
        {items.map((idx, i) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="overflow-hidden rounded-2xl border border-[#623828]/5 bg-orange-50/10 transition-colors hover:bg-orange-50/20"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between p-6 text-left md:p-8 cursor-pointer"
              aria-expanded={openIndex === i}
            >
              <span className="font-heading text-xl font-bold text-[#623828] md:text-2xl tracking-tight">
                {t(`items.${idx}.question`)}
              </span>
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg shadow-orange-500/20 transition-transform duration-500 ${openIndex === i ? "rotate-45" : ""}`}
              >
                <Plus weight="bold" size={24} />
              </div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="border-t border-[#623828]/5 p-6 font-sans text-lg font-light leading-relaxed text-[#623828]/70 md:p-8">
                    {t(`items.${idx}.answer`)}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
