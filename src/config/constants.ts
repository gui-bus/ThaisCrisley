export const TARGET_DATE = new Date("2026-04-10T23:59:59").getTime()

export const PRICES = {
  original: 497,
  promo: 97,
} as const

export const LINKS = {
  promo: "https://pay.kiwify.com.br/8BpE4De",
  regular: "https://pay.kiwify.com.br/oKFXxl0",
} as const

export const SITE_CONFIG = {
  get ctaUrl() {
    const now = new Date().getTime()
    return now <= TARGET_DATE ? LINKS.promo : LINKS.regular
  },
  get isPromoActive() {
    const now = new Date().getTime()
    return now <= TARGET_DATE
  },
} as const
