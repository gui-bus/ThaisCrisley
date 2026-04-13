import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { LINKS, PRICES, SITE_CONFIG } from "@/src/config/constants"

describe("Promo Logic (Constants)", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("should always report promo as active", () => {
    vi.setSystemTime(new Date("2026-04-09T23:59:59"))

    expect(SITE_CONFIG.isPromoActive).toBe(true)
    expect(SITE_CONFIG.ctaUrl).toBe(LINKS.promo)
  })

  it("should keep using the promo link after the previous deadline", () => {
    vi.setSystemTime(new Date("2026-04-11T00:00:01"))

    expect(SITE_CONFIG.isPromoActive).toBe(true)
    expect(SITE_CONFIG.ctaUrl).toBe(LINKS.promo)
  })

  it("should have correct prices defined", () => {
    expect(PRICES.original).toBe(497)
    expect(PRICES.promo).toBe(97)
  })
})
