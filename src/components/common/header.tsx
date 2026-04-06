"use client"

import * as React from "react"

import Image from "next/image"
import Link from "next/link"

import { ArrowRightIcon, ListIcon, XIcon } from "@phosphor-icons/react"
import { AnimatePresence, motion } from "framer-motion"

import { cn } from "@/src/lib/utils/utils"

import { CtaButton } from "./ctaButton"

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "O Problema", href: "#problema" },
  { name: "A Solução", href: "#solucao" },
  { name: "Conteúdo", href: "#cronograma" },
  { name: "Oferta", href: "#oferta" },
  { name: "Sobre", href: "#sobre" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <>
      <header
        className={cn(
          "fixed left-1/2 -translate-x-1/2 z-999 w-full transition-all duration-500 top-20 md:top-12 max-w-440",
          isScrolled
            ? "bg-[#2D1B14] backdrop-blur-xl py-4 shadow-2xl border-b border-white/5"
            : "bg-transparent py-8"
        )}
      >
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
          <Link
            href="#inicio"
            className="relative h-10 w-32 md:h-12 md:w-40 transition-transform hover:scale-105 active:scale-95"
          >
            <Image
              src="/logo/logo.png"
              alt="Apareça e Venda"
              fill
              className={cn(
                "object-contain transition-all duration-500",
                isScrolled && "brightness-0 invert"
              )}
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "font-sans text-[11px] font-bold uppercase tracking-[0.2em] transition-colors",
                  isScrolled
                    ? "text-white/60 hover:text-orange-500"
                    : "text-[#623828]/60 hover:text-orange-500"
                )}
              >
                {link.name}
              </Link>
            ))}

            <CtaButton size="sm" className={cn("w-full sm:w-auto")}>
              Garantir vaga
            </CtaButton>
          </nav>

          <button
            onClick={toggleMenu}
            className={cn(
              "lg:hidden flex h-10 w-10 items-center justify-center rounded-full transition-colors",
              isScrolled
                ? "bg-white/10 text-white hover:bg-white/20"
                : "bg-[#623828]/5 text-[#623828] hover:bg-[#623828] hover:text-white"
            )}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <XIcon size={20} weight="bold" />
            ) : (
              <ListIcon size={20} weight="bold" />
            )}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-1001 lg:hidden left-1/2 -translate-x-1/2 w-full max-w-440 overflow-hidden pointer-events-none">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="absolute inset-0 z-9998 bg-black/40 backdrop-blur-sm pointer-events-auto"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-y-0 right-0 z-9999 w-[80%] max-w-sm bg-white p-10 shadow-2xl pointer-events-auto"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-16">
                  <span className="font-sans text-[10px] font-black uppercase tracking-[0.3em] text-orange-500">
                    Menu
                  </span>
                  <button onClick={toggleMenu} className="text-[#623828]">
                    <XIcon size={24} weight="bold" />
                  </button>
                </div>

                <nav className="flex flex-col gap-8">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={toggleMenu}
                        className="font-heading text-4xl font-bold text-[#623828] hover:text-orange-500 transition-colors"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-auto pt-10 border-t border-slate-100">
                  <Link
                    href="#oferta"
                    onClick={toggleMenu}
                    className="flex w-full items-center justify-between rounded-2xl bg-orange-500 p-6 text-white shadow-xl shadow-orange-500/20 active:scale-95"
                  >
                    <span className="font-sans text-xs font-black uppercase tracking-widest">
                      Começar Agora
                    </span>
                    <ArrowRightIcon weight="bold" className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
