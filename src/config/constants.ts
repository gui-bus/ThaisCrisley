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
    return LINKS.promo
  },
  get isPromoActive() {
    return true
  },
} as const
