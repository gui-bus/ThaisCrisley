import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { LINKS, PRICES, SITE_CONFIG, TARGET_DATE } from "@/src/config/constants"

describe("Promo Logic (Constants)", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("should report promo as active before target date", () => {
    const beforeDate = new Date(TARGET_DATE - 1000)
    vi.setSystemTime(beforeDate)

    expect(SITE_CONFIG.isPromoActive).toBe(true)
    expect(SITE_CONFIG.ctaUrl).toBe(LINKS.promo)
  })

  it("should report promo as expired after target date", () => {
    const afterDate = new Date(TARGET_DATE + 1000)
    vi.setSystemTime(afterDate)

    expect(SITE_CONFIG.isPromoActive).toBe(false)
    expect(SITE_CONFIG.ctaUrl).toBe(LINKS.regular)
  })

  it("should have correct prices defined", () => {
    expect(PRICES.original).toBe(497)
    expect(PRICES.promo).toBe(97)
  })
})
