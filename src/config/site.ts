import { env } from "./env"

export const siteConfig = {
  name: "Apareça e Venda - Thaís Crisley",
  shortName: "AparecaEVenda",
  url: env.NEXT_PUBLIC_SITE_URL,
  ogImage: `${env.NEXT_PUBLIC_SITE_URL}/og.png`,
  authors: [
    {
      name: "Thaís Crisley",
      url: "#",
    },
  ],
  creator: "Thaís Crisley",
  links: {
    twitter: "#",
    github: "#",
  },
  contact: {
    email: "contato@thaiscrisley.com",
  },
  locales: ["pt", "en"],
  defaultLocale: "pt",
  analytics: {
    google: env.NEXT_PUBLIC_GA_ID || "",
  },
}

export type SiteConfig = typeof siteConfig
