import * as React from "react"

import { Header } from "@/src/components/common/header"
import { OpeningScreen } from "@/src/components/common/openingScreen"
import { Benefits } from "@/src/components/landing/Benefits"
import { Bonus } from "@/src/components/landing/Bonus"
import { Closing } from "@/src/components/landing/Closing"
import { Comparison } from "@/src/components/landing/Comparison"
import { Hero } from "@/src/components/landing/Hero"
import { Modules } from "@/src/components/landing/Modules"
import { Offer } from "@/src/components/landing/Offer"
import { Problem } from "@/src/components/landing/Problem"
import { Solution } from "@/src/components/landing/Solution"
import { Faq } from "@/src/components/landing/faq"

export default function Page(): React.JSX.Element {
  return (
    <div className="relative min-h-svh bg-background font-sans text-foreground selection:bg-brand-primary/30 selection:text-brand-primary w-full max-w-440 mx-auto">
      <OpeningScreen />
      <Header />

      <main>
        <Hero />

        <Problem />

        <Solution />

        <Benefits />

        <Comparison />

        <Modules />

        <Bonus />

        <Offer />

        <Faq />

        <Closing />
      </main>
    </div>
  )
}
