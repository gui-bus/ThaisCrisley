"use client"

import * as React from "react"

import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

import {
  ArrowUpIcon,
  EnvelopeSimpleIcon,
  InstagramLogoIcon,
} from "@phosphor-icons/react"
import { Variants, motion } from "framer-motion"

import { CtaButton } from "@/src/components/common/ctaButton"

import { SITE_CONFIG } from "@/src/config/constants"

import { About } from "./About"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "O Problema", href: "#problema" },
  { name: "A Solução", href: "#solucao" },
  { name: "Sobre", href: "#sobre" },
  { name: "Conteúdo", href: "#cronograma" },
  { name: "Oferta", href: "#oferta" },
]

export function Closing(): React.JSX.Element {
  const t = useTranslations("Closing")
  const [isPromoActive, setIsPromoActive] = React.useState(false)

  React.useEffect(() => {
    setIsPromoActive(SITE_CONFIG.isPromoActive)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-white pt-32 overflow-hidden" id="contato">
      <div className="px-6 pb-40 lg:px-24 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/30 blur-3xl -z-10 rounded-full" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-center text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="mb-10 inline-flex items-center gap-3 rounded-full border border-orange-500/10 bg-orange-50/50 px-6 py-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span className="font-sans text-[11px] font-black uppercase tracking-[0.3em] text-orange-600">
                O Próximo Passo
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="mb-16 font-heading text-5xl font-bold leading-none text-[#623828] md:text-8xl lg:text-9xl tracking-tighter max-w-6xl"
            >
              {t("text")
                .split(" ou ")
                .map((part, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && (
                      <span className="text-orange-500/30 mx-4 md:mx-8">/</span>
                    )}
                    <span
                      className={
                        i > 0
                          ? "italic font-serif font-light text-[#D35400]/90"
                          : ""
                      }
                    >
                      {part}
                    </span>
                  </React.Fragment>
                ))}
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center gap-12"
            >
              <div className="relative group">
                <div className="absolute -inset-6 bg-orange-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <CtaButton
                  size="lg"
                  className="relative px-20 py-10 text-2xl scale-110 hover:scale-115 transition-all duration-500"
                >
                  {t("cta")}
                </CtaButton>
              </div>

              {isPromoActive && (
                <p className="font-sans text-[10px] font-black uppercase tracking-[0.4em] text-[#623828]/40">
                  {t("footer")}
                </p>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <About />

      <div className="bg-[#2D1B14] px-6 pt-32 pb-16 lg:px-24 relative">
        <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none -translate-y-1/2 select-none opacity-40">
          <h3 className="font-heading text-[15vw] font-black text-[#623828]/10 uppercase leading-none tracking-tighter whitespace-nowrap">
            {t("name")} • {t("name")} • {t("name")}
          </h3>
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-20 xl:gap-32 items-start mb-32">
            <div className="col-span-5 flex flex-col items-start gap-16">
              <div className="flex flex-col gap-12">
                <div className="relative h-16 w-56 transition-transform hover:scale-105 duration-500">
                  <Image
                    src="/logo/logo.png"
                    alt="Apareça e Venda"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>

                <div className="space-y-8">
                  <h4 className="font-heading text-6xl md:text-7xl font-bold text-white tracking-tighter">
                    {t("name")}
                  </h4>
                  <p className="font-sans text-xl text-white/40 max-w-md leading-relaxed italic font-light">
                    Sua voz é sua maior ferramenta de vendas. Aprenda a usá-la
                    com autoridade e estratégia.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <a
                  href="https://instagram.com/thaiscrisley"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 py-4 px-8 rounded-full bg-white/5 border border-white/10 transition-all hover:bg-orange-500 hover:border-orange-400 hover:-translate-y-1"
                >
                  <InstagramLogoIcon
                    size={24}
                    weight="bold"
                    className="text-orange-500 group-hover:text-white transition-colors"
                  />
                  <span className="font-sans text-[11px] font-black uppercase tracking-widest text-white">
                    {t("instagram")}
                  </span>
                </a>

                <a
                  href="mailto:contato@thaiscrisley.com"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
                >
                  <EnvelopeSimpleIcon size={26} weight="bold" />
                </a>
              </div>
            </div>

            <div className="col-span-5 2xl:col-span-7 flex flex-col sm:flex-row justify-between gap-16 lg:pt-12">
              <div className="flex flex-col gap-10">
                <span className="font-sans text-[11px] font-black uppercase tracking-[0.4em] text-orange-500/60">
                  Navegação
                </span>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="font-sans text-sm font-bold uppercase tracking-widest text-white/40 hover:text-orange-500 hover:translate-x-3 transition-all duration-300"
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="flex flex-col justify-end w-full md:w-fit">
                <div className="mt-12">
                  <button
                    onClick={scrollToTop}
                    className="group flex items-center gap-5 py-5 px-10 rounded-[2rem] border border-white/5 bg-white/2 hover:bg-white/5 transition-all active:scale-95 w-full md:w-fit"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-white shadow-xl shadow-orange-500/30 group-hover:scale-110 transition-transform">
                      <ArrowUpIcon size={22} weight="bold" />
                    </div>
                    <span className="font-sans text-[11px] font-black uppercase tracking-[0.3em] text-white">
                      Voltar ao início
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row items-center justify-between pt-12 border-t border-white/5 gap-10">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
                © {new Date().getFullYear()} {t("name")}
              </p>
              <div className="hidden md:block h-1 w-1 rounded-full bg-white/10" />
              <p className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
                Todos os direitos reservados
              </p>
            </div>

            <div className="flex items-center gap-8">
              <div className="hidden sm:block h-px w-12 bg-white/5" />
              <a
                href="https://guibus.dev/?referral=THAIS"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/5 bg-white/2 transition-all hover:bg-white/5 hover:border-white/10 active:scale-95"
              >
                <span className="font-sans text-[9px] font-black uppercase tracking-[0.3em] text-white/30 group-hover:text-white/60 transition-colors">
                  {t("madeBy")}
                </span>
                <div className="relative h-5 w-14 transition-all duration-500 brightness-50 grayscale group-hover:brightness-100 group-hover:grayscale-0">
                  <Image
                    src="/images/guibus.png"
                    alt="guibus.dev"
                    fill
                    className="object-contain"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-150 h-150 bg-orange-500/5 blur-[150px] rounded-full -z-10" />
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-[#623828]/30 blur-[120px] rounded-full -z-10" />
      </div>
    </footer>
  )
}
